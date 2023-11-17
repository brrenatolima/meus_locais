import React from "react"
import { View } from "react-native"
import { Text } from "react-native-paper"
import { styles } from "./Styles";


function MarkerDetail({ route } : {route : any}) {
    const { local } = route.params;

    return (
        <View style={styles.markerDetailPage}>
            <View style={styles.markerDetailPageLine}>
                <Text style={styles.markerDetailPageLabel}>Id: </Text>
                <Text style={styles.markerDetailPageValue}>{local.id}</Text>
            </View>
            <View style={styles.markerDetailPageLine}>
                <Text style={styles.markerDetailPageLabel}>Latitude: </Text>
                <Text style={styles.markerDetailPageValue}>{local.latitude}</Text>
            </View>
            <View style={styles.markerDetailPageLine}>
                <Text style={styles.markerDetailPageLabel}>Longitude: </Text>
                <Text style={styles.markerDetailPageValue}>{local.longitude}</Text>
            </View>
            <View style={styles.markerDetailPageLine}>
                <Text style={styles.markerDetailPageLabel}>Nome: </Text>
                <Text style={styles.markerDetailPageValue}>{local.title}</Text>
            </View>
            <View style={styles.markerDetailPageLine}>
                <Text style={styles.markerDetailPageLabel}>Descrição: </Text>
                <Text style={styles.markerDetailPageValue}>{local.description}</Text>
            </View>
            
        </View>
    )
 }


export default MarkerDetail;