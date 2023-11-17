import { createContext } from "react";

export const local = { id: Number, latitude : Number, longitude : Number, title : String, description : String }
 
export const Markers = [
    { id: 1, latitude: -22.7716971, longitude: -43.4355784, title: 'Minha casa', description: 'Rua João Teles, 345, Juscelino, Mesquita' },
    { id: 2, latitude: -22.7499853, longitude: -43.4444344, title: 'pais da Déborah', description: 'Rua Bolívia, 114, Nova Iguaçu' },
    { id: 3, latitude: -22.739632, longitude: -43.3383362, title: 'casa dos meus pais', description: 'Rua Apíba, 18, Pq São José, B. Roxo' },
  ]

  export const clearMarkers = () => {
    Markers.pop();
  }

  export const addMarker = ({latitude, longitude, title, description}) => {
    var idMarkers = Markers.at(Markers.length - 1)?.id;
    const id = idMarkers === null ? 1 : idMarkers! + 1;
    if ( Markers.push({id, latitude, longitude, title, description}) ) {
      return true
    } else {
      return false
    };
  }

  export const getMarker = ({id}) => {
    return Markers.find(m => m.id === id);
  }

  export const getAllMarkers = () => {
    return Markers;
  }

  // Mantive os métodos acima para dar continuidade no desenvolvimento do aplicativo.

  export const PlaceContext = createContext(Markers);
  