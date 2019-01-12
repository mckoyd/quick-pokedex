import { API_BASE_URL } from '../config';

export const GET_POKE_SEARCH = 'GET_POKE_SEARCH';
export const getPokeSearch = searchTerm => ({
    type: GET_POKE_SEARCH, searchTerm
});

export const FETCH_POKE_INFO_SUCCESS = 'FETCH_POKE_INFO_SUCCESS';
export const fetchPokeInfoSuccess = pokeInfo => ({
    type: FETCH_POKE_INFO_SUCCESS, pokeInfo
})

export const FETCH_POKE_INFO_REQUEST = 'FETCH_POKE_INFO_REQUEST';
export const fetchPokeInfoRequest = () => ({
    type: FETCH_POKE_INFO_REQUEST
})

export const FETCH_POKE_INFO_ERROR = 'FETCH_POKE_INFO_ERROR';
export const fetchPokeInfoError = error => ({
    type: FETCH_POKE_INFO_ERROR, error
})

export const fetchPokeInfo = () => (dispatch, getState) => {
    dispatch(fetchPokeInfoRequest());
    const searchTerm = getState().pokemon.pokeSearch.trim()
    fetch(`${API_BASE_URL}/${searchTerm}/`)
        .then(res => {
            if(!res.ok) dispatch(fetchPokeInfoError(res.statusText))
            else res.json()
                    .then(pokeInfo => dispatch(fetchPokeInfoSuccess(pokeInfo)))
        })
        .catch(error => dispatch(fetchPokeInfoError('Pokemon not found!')))
} 