import React from "react"
import { View } from "react-native"
import { ScrollView, StyleSheet } from 'react-native';
import { PaperProvider, Text, Appbar,  Button,Card, MD3DarkTheme, MD3LightTheme, MD3Elevation } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

const Screen1 = () => {

  const navigation = useNavigation();

    return (
        <ScrollView style={styles.mainContainer}>

        
        <Card style={styles.card}>
          <Card.Title title="Título" subtitle="Subtítulo" />
          <Card.Content>
            <Text variant='titleLarge'>Título do Card</Text>
            <Text variant='bodyMedium'>Subtítulo do Card</Text>
          </Card.Content>
          <Card.Cover source={{ uri:'https://picsum.photos/700'}} />
          <Card.Actions>
            <Button onPress={() => navigation.navigate('Detalhes')} >Ir para Detalhes</Button>
          </Card.Actions>
        </Card>
        
        <Card style={styles.card}>
          <Card.Title title="Título" subtitle="Subtítulo" />
          <Card.Content>
            <Text variant='titleLarge'>Título do Card</Text>
            <Text variant='bodyMedium'>Subtítulo do Card</Text>
          </Card.Content>
          <Card.Cover source={{ uri:'https://picsum.photos/800'}} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        
        <Card style={styles.card}>
          <Card.Title title="Título" subtitle="Subtítulo" />
          <Card.Content>
            <Text variant='titleLarge'>Título do Card</Text>
            <Text variant='bodyMedium'>Subtítulo do Card</Text>
          </Card.Content>
          <Card.Cover source={{ uri:'https://picsum.photos/900'}} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        
      </ScrollView>
    )
}
const styles = StyleSheet.create({
    mainContainer : {
      padding: 20
    },
    card : {
      marginBottom: 20,
    }
  })

export default Screen1;