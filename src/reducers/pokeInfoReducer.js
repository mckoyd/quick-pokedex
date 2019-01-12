import {
    GET_POKE_SEARCH, FETCH_POKE_INFO_REQUEST, FETCH_POKE_INFO_ERROR, FETCH_POKE_INFO_SUCCESS
} from '../actions/pokeInfo';

const initState = {
    pokeInfo: null,
    error: '',
    loading: false,
    pokeSearch: '',
}

export default (state=initState, action) => {
    switch(action.type){
        case GET_POKE_SEARCH:
            return {
                ...state,
                pokeSearch: action.searchTerm
            }
        case FETCH_POKE_INFO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_POKE_INFO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                pokeInfo: null
            }
        case FETCH_POKE_INFO_SUCCESS:
            return {
                pokeInfo: action.pokeInfo,
                error: '',
                loading: false,
                pokeSearch: ''
            }
        default:
            return state;
    }
}