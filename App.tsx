/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './src/components/MapScreen';
import MarkerDetail from './src/components/MarkerDetail';
import HeaderTitle from './src/components/HeaderTitle';
import HeaderRight from './src/components/HeaderRight';
import Menu from './src/components/Menu';
import { ThemeContext, lightTheme } from './src/context/ThemeContext';
import { Markers, PlaceContext } from './src/context/PlaceContext';


const App = () : JSX.Element => {

const [theme, setTheme] = useState(lightTheme);
  
const Stack = createNativeStackNavigator();

const [myMarkers, setMyMarkers] = useState(Markers);


  return (
    <PaperProvider theme={theme}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <PlaceContext.Provider value={{
           myMarkers,
           setMyMarkers
        }}>
          <NavigationContainer>
          <Stack.Navigator
          initialRouteName='Mapa'
          screenOptions={{
            headerTitle: HeaderTitle,
            headerRight: HeaderRight
          }}>
            <Stack.Screen name='Mapa' component={MapScreen} />
            <Stack.Screen name='Detalhes' component={MarkerDetail} />
            <Stack.Screen name="Menu" component={Menu} />
          </Stack.Navigator>
        </NavigationContainer>
      </PlaceContext.Provider>
      </ThemeContext.Provider>
      
    </PaperProvider>
  )
}



export default App;
