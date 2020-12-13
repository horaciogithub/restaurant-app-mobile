import React from 'react';

import { View } from 'react-native';
import { Button, Container, Text } from 'native-base';
import globalStyles from '../styles/globalStyles';
import nuevaOrdenStyles from '../styles/nuevaOrdenStyles/nuevaOrdenStyles';
import { useNavigation } from '@react-navigation/native';

const NuevaOrden = () => {

    const navigation = useNavigation();

    return (
        <Container style={globalStyles.contenedor}>
            <View style={[ globalStyles.contenido, nuevaOrdenStyles.contenido ]}>
                <Button
                    style={globalStyles.boton}
                    rounded
                    block
                    onPress={() => navigation.navigate('Menu')}
                >
                    <Text style={globalStyles.bottonTexto}>Nueva orden</Text>
                </Button>
            </View>
        </Container>
    );
}

export default NuevaOrden;