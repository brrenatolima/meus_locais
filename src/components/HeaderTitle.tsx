import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './Styles';


const HeaderTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Locais</Text>
      <Icon style={styles.title} name="map-marker" size={26} />
    </View>
  );
};

export default HeaderTitle;