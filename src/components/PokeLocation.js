import React from 'react';
import {connect} from 'react-redux';
import { fetchLocation } from '../actions/location';

import '../styles/location.css'

const mapStateToProps = state => ({
    location: state.location.location.join(', ')
})

export class PokeLocation extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchLocation(this.props.pokeInfo.location_area_encounters))
    }
    render(){
    return(
        <li className='location'>
            <p className='location-name'>{this.props.location}</p>
        </li>
    );
    }
}

export default connect(mapStateToProps)(PokeLocation);