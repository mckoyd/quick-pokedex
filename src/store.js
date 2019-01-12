import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
} from 'redux';

import thunk from 'redux-thunk';
import pokeInfoReducer from './reducers/pokeInfoReducer';
import damageReducer from './reducers/damageReducer';
import locationReducer from './reducers/locationReducer';

const rootReducer = combineReducers({
    pokemon: pokeInfoReducer,
    damageRelations: damageReducer,
    location: locationReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;