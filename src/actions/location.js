export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS';
export const fetchLocationSuccess = location => ({
    type: FETCH_LOCATION_SUCCESS, location
})

export const FETCH_LOCATION_REQUEST = 'FETCH_LOCATION_REQUEST';
export const fetchLocationRequest = () => ({
    type: FETCH_LOCATION_REQUEST
})

export const FETCH_LOCATION_ERROR = 'FETCH_LOCATION_ERROR';
export const fetchLocationError = error => ({
    type: FETCH_LOCATION_ERROR, error
})

export const CLEAR_LOCATION = 'CLEAR_LOCATION';
export const clearLocation = () => ({
    type: CLEAR_LOCATION
})

const titleCase = str => str.split(' ')
                            .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
                            .join(' ')
export const fetchLocation = url => dispatch => {
    dispatch(clearLocation());
    dispatch(fetchLocationRequest());
    fetch(`${url}/`).then(res => {
        if(!res.ok) dispatch(fetchLocationError(res.statusText))
        else res.json()
                .then(location => dispatch(fetchLocationSuccess(location
                                                                    .map(loc => titleCase(loc
                                                                                            .location_area.name
                                                                                            .replace(/-/g, ' '))))))
    })
    .catch(error => dispatch(fetchLocationError('No location available!')))
}