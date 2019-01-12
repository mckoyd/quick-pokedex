export const FETCH_DAMAGE_SUCCESS = 'FETCH_DAMAGE_SUCCESS';
export const fetchDamageSuccess = damageRelations => ({
    type: FETCH_DAMAGE_SUCCESS, damageRelations
})

export const FETCH_DAMAGE_REQUEST = 'FETCH_DAMAGE_REQUEST';
export const fetchDamageRequest = () => ({
    type: FETCH_DAMAGE_REQUEST
})

export const FETCH_DAMAGE_ERROR = 'FETCH_DAMAGE_ERROR';
export const fetchDamageError = error => ({
    type: FETCH_DAMAGE_ERROR, error
})

export const CLEAR_DAMAGE = 'CLEAR_DAMAGE';
export const clearDamage = () => ({
    type: CLEAR_DAMAGE
})

export const fetchDamage = url => dispatch => {
    dispatch(clearDamage());
    dispatch(fetchDamageRequest());
    fetch(url).then(res => {
        if(!res.ok) dispatch(fetchDamageError(res.statusText))
        else res.json()
                .then(damageRelations => dispatch(fetchDamageSuccess(damageRelations.damage_relations)))
    })
    .catch(error => console.log(error))
}