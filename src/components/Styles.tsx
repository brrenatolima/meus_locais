import { MD3DarkTheme, MD3LightTheme } from "react-native-paper"
import { StyleSheet } from "react-native";

/*
* Paleta
#3E5641
#A24936
#D36135
#282B28
#83BCA9
*/
// export const DarkTheme = {
//     ...MD3DarkTheme,
//     colors : {
//       ...MD3DarkTheme.colors,
//       color: '#000',
//       primary : '#3E5641',
//       secondary : '#A24936',
//     }
//   }

// export const LightTheme = {
//     ...MD3LightTheme,
//     colors : {
//       ...MD3LightTheme.colors,
//       color: '#000',
//       primary : '#3E5641',
//       secondary : '#A24936',
//     }
//   }

  export const styles = StyleSheet.create({
    outer: { flex: 8, backgroundColor: '#3E5641' },

    inner: { flex: 2, backgroundColor: '#A24936' },

    map: {
      ...StyleSheet.absoluteFillObject,
      width: '100%',
      height: '100%'
    },
    mapContainer: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
    },
    marker: {
      fontSize: 50,
      fontWeight: 'bold',
      color: '#000000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button : {
      backgroundColor: '#83BCA9',
      borderRadius: 200,
      width: '20%',
      height: '10%',
      marginRight: '40%',
      marginLeft: '40%',
      marginTop: '165%',
      position: "absolute"
    },
    iconButton : {
      fontSize: 22,
      color: '#FFF',
      marginTop: '35%'
    },
    
    modalContainer : { backgroundColor: '#83BCA9', padding: 20 , color: '#5b5b5b' },
    modalButton : { backgroundColor: "#CCC", color: "#000000", marginTop: 10 },
    modalInput : { marginTop: 10},

    txtLight: { fontSize: 16, color: '#000000', },

    txtDark: { fontSize: 16, color: '#FFFFFF', },

    markerDetailPage : {backgroundColor: "#83BCA9", height: "100%"},
    markerDetailPageLine : {display: 'flex', flexDirection: 'row', gap: 5, padding: 20},
    markerDetailPageLabel : {textAlign:"left", justifyContent: "flex-start", fontWeight:"bold"},
    markerDetailPageValue : {textAlign:"right", justifyContent: "flex-end", fontWeight:"bold", color: "#FFF"}

  });
