import { FETCH_DAMAGE_SUCCESS, FETCH_DAMAGE_REQUEST, FETCH_DAMAGE_ERROR, CLEAR_DAMAGE } from '../actions/damageRelations';

const initState = {
    damageRelations: [],
    loading: false,
    error: null
}

export default (state=initState, action) => {
    switch(action.type){
        case FETCH_DAMAGE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_DAMAGE_ERROR:
            return {
                damageRelations: [],
                loading: false,
                error: action.error
            }
        case FETCH_DAMAGE_SUCCESS:
            return {
                damageRelations: [...state.damageRelations, action.damageRelations],
                loading: false,
                error: null
            }
        case CLEAR_DAMAGE:
            return {
                damageRelations: [],
                loading: false,
                error: null
            }
        default:
            return state;
    }
    
}