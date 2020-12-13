import React, { Fragment, useContext, useEffect, useState } from 'react';

import FirebaseContext from '../context/firebase/firebaseContext';
import globalStyles from '../styles/globalStyles';

import { StyleSheet } from 'react-native';
import {
    Body,
    Container,
    Content,
    List,
    ListItem,
    Text,
    Thumbnail
} from 'native-base';


const ListadoElementos = (props) => (
    <List>
        {props.menu.map(elemento => {
            const {
                imagen,
                nombre,
                descripcion,
                categoria,
                precio,
                id
            } = elemento;
            return <Fragment key={id}>
                <ListItem>

                    <Thumbnail large source={{
                        uri: imagen
                    }} />

                    <Body>
                        <Text>{nombre}</Text>
                        <Text note numberOfLines={3}>
                            {descripcion}
                        </Text>
                        <Text>Precio: {precio} €</Text>
                    </Body>
                </ListItem>
            </Fragment>;
        })}
    </List>
);


const Menu = () => {

    // Context de Firebase
    const { menu, obtenerProductos } = useContext(FirebaseContext);
    const [bebidas, setBebidas] = useState([]);
    const [comidas, setComidas] = useState([]);
    const [postres, setPostres] = useState([]);

    useEffect(() => {
        obtenerProductos();
    }, [])

    useEffect(() => {
        setBebidas(menu.filter(elemento => elemento.categoria === 'bebida'));
        setComidas(menu.filter(elemento => elemento.categoria === 'comida'));
        setPostres(menu.filter(elemento => elemento.categoria === 'postre'));
    }, [menu])

    return (
        <Container style={globalStyles.contenedor}>
            <Content style={{ backgroundColor: '#FFF' }}>

                <Text style={{ fontWeight: 'bold', fontSize: 22, marginVertical: 10, marginLeft: 20 }}>Bebidas:</Text>
                <ListadoElementos menu={bebidas}></ListadoElementos>

                <Text style={{ fontWeight: 'bold', fontSize: 22, marginVertical: 10, marginLeft: 20 }}>Comidas:</Text>
                <ListadoElementos menu={comidas}></ListadoElementos>

                <Text style={{ fontWeight: 'bold', fontSize: 22, marginVertical: 10, marginLeft: 20 }}>Postres:</Text>
                <ListadoElementos menu={postres}></ListadoElementos>
            </Content>
        </Container>
    );
}

export default Menu;