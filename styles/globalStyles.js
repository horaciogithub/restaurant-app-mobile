import { StyleSheet } from 'react-native';
import color from './colors';

const globalStyles = StyleSheet.create({
    contenedor: {
        flex: 1
    },
    contenido: {
        flex: 1,
        marginHorizontal: '2.5%'
    },
    boton: {
        backgroundColor: color.yellow,
    },
    bottonTexto: {
        textTransform: 'uppercase',
        color: color.black
    }
});

export default globalStyles;