import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles';
import MapView, { Marker, PROVIDER_GOOGLE, enableLatestRenderer } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalAddPlace from './ModalAddPlace';
import { PlaceContext } from '../context/PlaceContext'



const MapScreen = (): JSX.Element => {
  const navigation = useNavigation();
  enableLatestRenderer();

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
    <>
    <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE} 
          style={styles.map}
          zoomEnabled={true}
          rotateEnabled={true}
          loadingEnabled={false}
          zoomControlEnabled={true}
          region={{
            latitude: -22.7716971,
            longitude: -43.4355784,
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
  )
}

export default MapScreen;