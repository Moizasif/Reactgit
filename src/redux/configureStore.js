import { createStore , combineReducers} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';



/*TO configure a store we need to create a store 
This createStore take two parameters
Combine reducer is a method redux provides to combine all the reducers that we split*/ 

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({

            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders

        })
   
    );
    return store;
}