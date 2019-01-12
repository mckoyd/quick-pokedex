import { FETCH_LOCATION_REQUEST, FETCH_LOCATION_ERROR, CLEAR_LOCATION, FETCH_LOCATION_SUCCESS } from "../actions/location";

const initState = {
    location: [],
    loading: false,
    error: ''
}

export default (state=initState, action) => {
    switch(action.type){
        case FETCH_LOCATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_LOCATION_ERROR:
            return {
                location: [],
                loading: false,
                error: action.error
            }
        case FETCH_LOCATION_SUCCESS:
            return {
                location: [...action.location],
                loading: false,
                error: ''
            }
        case CLEAR_LOCATION:
            return {
                location: [],
                loading: false,
                error: ''
            }
        default:
            return state;
    }
    
}