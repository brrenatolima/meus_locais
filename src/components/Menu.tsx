import React, { useState, useContext, useEffect } from 'react';
import {View} from 'react-native';
import { Text, Appbar, Card, Checkbox } from 'react-native-paper';
import { ThemeContext, darkTheme, lightTheme } from '../context/ThemeContext';
import { styles } from './Styles';
import { PlaceContext } from '../context/PlaceContext';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  
  const {theme, setTheme} = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [themeContext, setThemeContext] = useState(theme);
  // const [myMarkers, setMyMarkers] = useState(Markers);
  const {myMarkers, setMyMarkers} = useContext(PlaceContext) ;
  const navigation = useNavigation();
  const [selectedPlace, setSelectedPlace] = useState(null);

  const toogleTheme = () => {
  if (isDarkMode) {   
    setTheme(lightTheme);
    
    setIsDarkMode(false);
  } else {
    setTheme(darkTheme);
    setIsDarkMode(true);
  }
}

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
  (
    () => {
      // console.log(themeContext.name);
      if (themeContext.name === "light") {
        setIsDarkMode(false);
      }
    }
  ), 
  [themeContext] 
)
useEffect(
  () => {
    console.log("Select Place");
    selectPlace();
  },
  [selectedPlace]
);

  return (
    <View>
      {
        myMarkers.map(marker => (
          <Card key={marker.id} mode='elevated' onPress={() =>setSelectedPlace(marker)}>
            <Card.Title title={marker.id + " - " + marker.title  } subtitle={marker.description} />
            <Card.Content>
              <Text variant="titleLarge">Latitude : Longitude</Text>
              <Text variant="bodyMedium">{marker.latitude} : {marker.longitude}</Text>
            </Card.Content>
          </Card>
        ))
      }
      <Appbar.Header>
        <Checkbox status={isDarkMode ? 'checked' : 'unchecked'} theme={themeContext} onPress={toogleTheme}/>
        {
          isDarkMode ? <Text style={styles.txtDark}>Tema Escuro</Text> : <Text style={styles.txtLight}>Tema Claro</Text>
        }
        
      </Appbar.Header> 
    </View>
  );
};

export default Menu;
