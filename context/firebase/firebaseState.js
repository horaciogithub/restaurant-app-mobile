import React, { useReducer } from 'react';
import FirebaseContext from './firebaseContext';
import firebaseReducer from './firebaseReducer';
import firebase from '../../firebase/index';
import { GET_PRODUCTS_SUCCESS_TYPE } from '../../types';

const FirebaseState = (props) => {

    const initialState = {
        menu: []
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    // Función para obtener los productos
    const obtenerProductos = () => {
        // firebase.db.settings({ experimentalForceLongPolling: true });
        firebase.db
            .collection('productos')
            .where('existencia', '==', true)
            .onSnapshot(manejarSnapshot)

        function manejarSnapshot(snapshot) {
            let menu = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            dispatch({ type: GET_PRODUCTS_SUCCESS_TYPE, value: menu });
        }
    }


    return (
        <FirebaseContext.Provider
            value={{
                menu: state.menu,
                firebase,
                obtenerProductos
            }}
        >
            { props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;