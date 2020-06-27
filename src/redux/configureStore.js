import { createStore} from 'redux';
import {Reducer ,initialState} from './reducer';



/*TO configure a store we need to create a store 
This createStore take two parameters*/ 
export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState,

    );
    return store;
}