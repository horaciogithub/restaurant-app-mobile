import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NuevaOrden from './views/NuevaOrden';
import FormularioPlato from './views/FormularioPlato';
import Menu from './views/Menu';
import DetallePlato from './views/DetallePlato';
import ProgresoPedido from './views/ProgresoPedido';
import ResumenPedido from './views/ResumenPedido';

import FirebaseState from './context/firebase/firebaseState';
import PedidosState from './context/pedidos/pedidosState';
import color from './styles/colors';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <FirebaseState>
        <PedidosState>
          <NavigationContainer>
            <Stack.Navigator screenOptions={headerStyles} >
              {Screen('NuevaOrden', NuevaOrden, 'Nueva Orden')}
              {Screen('FormularioPlato', FormularioPlato, 'Realizar pedido')}
              {Screen('Menu', Menu, 'Nuestro Menu')}
              {Screen('DetallePlato', DetallePlato, 'Detalle Plato')}
              {Screen('ProgresoPedido', ProgresoPedido, 'Progreso del Pedido')}
              {Screen('ResumenPedido', ResumenPedido, 'Resumen Pedido')}

            </Stack.Navigator>
          </NavigationContainer>
        </PedidosState>
      </FirebaseState>
    </>

  );
};

export default App;

function Screen(name, component, title) {
  return <Stack.Screen
    name={name}
    component={component}
    options={{
      title: title
    }} />;
}

const headerStyles = {
  headerStyle: {
    backgroundColor: color.yellow,
  },
  headerTintColor: color.black
}

