

import { Button, IconButton, Modal, Portal, Text, TextInput } from 'react-native-paper';
import { styles } from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useContext, useState } from 'react';
import { Markers, PlaceContext, addMarker } from '../context/PlaceContext';
import { useNavigation } from '@react-navigation/native';

const ModalAddPlace = () => {

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        // Ao exibir o modal, limpa os campos para nova inserção 
        setLatitude("");
        setLongitude("");
        setTitle("");
        setDescription("");
        setVisible(true);
    };
    const hideModal = () => setVisible(false);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("0");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const navigation = useNavigation();
    const context = useContext(PlaceContext);
    // const [myMarkers, setMyMarkers] = useState(Markers);
    const {myMarkers, setMyMarkers} = useContext(PlaceContext) ;

    const addMarker = () => {
        var idMarkers = Markers.at(Markers.length - 1)?.id;
        const id = idMarkers === null ? 1 : idMarkers! + 1;
        setMyMarkers([
            ...myMarkers, {
                title: title,
                description: description,
                latitude: Number.parseFloat(latitude),
                longitude: Number.parseFloat(longitude),
                id: id,
            }
        ]);
        hideModal();
        console.log(myMarkers);
    }

    return (
        <>
            <Button style={styles.button} mode="contained" onPress={showModal} >
                <Icon style={styles.iconButton} name="plus-circle" size={30} />
            </Button>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
                    
                    <Text style={styles.title}> Criar marcador <Icon style={{alignSelf: 'flex-end'}} name="plus-circle" size={22} /></Text>
                    
                    <TextInput style={styles.modalInput} value={latitude} onChangeText={setLatitude} label={"Latitude"} right={<TextInput.Icon icon={"map"}/>}/>
                    <TextInput style={styles.modalInput} value={longitude} onChangeText={setLongitude} label={"Longitude"} right={<TextInput.Icon icon={"map"}/>}/>
                    <TextInput style={styles.modalInput} value={title} onChangeText={setTitle} label={"Nome"} right={<TextInput.Icon icon={"text-short"}/>}/>
                    <TextInput style={styles.modalInput} value={description} onChangeText={setDescription} label={"Descrição"} right={<TextInput.Icon icon={"text-short"}/>} />
                    <Button style={styles.modalButton} onPress={addMarker}>Adicionar marcador  <Icon name={"save"}/></Button>

                </Modal>
            </Portal>
        </>
    )
}

export default ModalAddPlace;