import React, { useContext, useEffect, useState } from 'react';
import { View, PermissionsAndroid, Linking, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles';
import MapView, { Marker, PROVIDER_GOOGLE, enableLatestRenderer } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalAddPlace from './ModalAddPlace';
import { PlaceContext } from '../context/PlaceContext'
import Geolocation from '@react-native-community/geolocation';
import { Button } from 'react-native-paper';


const MapScreen = (): JSX.Element => {
  const navigation = useNavigation();
  enableLatestRenderer();

const Permission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permissão de Localização',
        message:
          'Aplicativo Meus locais precisam acessar sua localização ' ,
        buttonNeutral: 'Perguntar depois',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Usando localização');
      getCurrentLocation();
    } else {
      console.log('Permissão negada');
    }
  } catch (err) {
    console.warn(err);
  }
};

const [currentLocation, setCurrentLocation] = useState(null);
const [currentLatitude, setCurrentLatitude] = useState(0);
const [currentLongitude, setCurrentLongitude] = useState(0);

const getCurrentLocation = () => {
  Geolocation.getCurrentPosition(
    position => {
      const {latitude, longitude} = position.coords;
      setCurrentLocation({latitude, longitude});
      setCurrentLatitude(position.coords.latitude);
      setCurrentLongitude(position.coords.longitude);
    },
    error => console.log('Erro', error.message),
    {enableHighAccuracy: true, timeout: 1500000},
  )
}

  const [selectedPlace, setSelectedPlace] = useState(null);

  const {myMarkers, setMyMarkers} = useContext(PlaceContext) ;


  const selectPlace = () => {
    if (selectedPlace !== null) {
      
      var local = { id: Number, latitude : Number, longitude : Number, title : String, description : String }
      
      local.title = selectedPlace.title;
      local.description = selectedPlace.description;
      local.latitude = selectedPlace.latitude;
      local.longitude = selectedPlace.longitude;
      local.id = selectedPlace.id;

      navigation.navigate(
        'Detalhes', { local }
        )
    }
  }

  useEffect(
    () => {
      selectPlace();
    },
    [selectedPlace]
  );

  return (
    currentLocation?
    <>
    <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE} 
          style={styles.map}
          zoomEnabled={true}
          showsMyLocationButton={true}
          showsCompass={true}
          rotateEnabled={true}
          showsUserLocation={true}
          followsUserLocation={true}
          loadingEnabled={false}
          zoomControlEnabled={true}
          region={{
            latitude: currentLatitude,
            longitude: currentLongitude, 
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }} >
          {
            myMarkers.map(m => (
              <View key={m.id}>
                <Marker onCalloutPress={() => setSelectedPlace(m)} coordinate={{ latitude: m.latitude, longitude: m.longitude }} title={m.title} description={m.description}>
                  <Icon style={styles.marker} name="map-marker" />
                </Marker>
              </View>
            ))
          }
        </MapView>
      </View>

      <ModalAddPlace />
    </>
    :
    <>
    <Text style={styles.title}>Carregando...</Text>
    <Button onLayout={Permission} onPress={Permission}>Solicitar permissão</Button>
    </>
  )
}

export default MapScreen;