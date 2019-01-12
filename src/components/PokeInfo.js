import React from 'react';
import { connect } from 'react-redux';
import { fetchDamage } from '../actions/damageRelations';
import PokeWeaknesses from './PokeWeaknesses';

import '../styles/poke-info.css'
import PokeStrengths from './PokeStrengths';
import PokeLocation from './PokeLocation';

export class PokeInfo extends React.Component {
    componentDidUpdate(){
        this.props.pokeInfo.types.map((type, i) => {
            this.props.dispatch(fetchDamage(type.type.url))
            return null;
        })
        
    }
    render(){
        const types = this.props.pokeInfo.types.map((type, i) => {
            const typeBg = {
                background: (() => {
                    switch(type.type.name){
                        case 'normal':
                            return '#A4ACAE';
                        case 'bug':
                            return '#729E3F';
                        case 'fairy':
                            return '#FDB9E9';
                        case 'fire':
                            return '#FD7C23';
                        case 'ghost':
                            return '#7B63A3';
                        case 'psychic':
                            return '#F477C0';
                        case 'steel':
                            return '#626161';
                        case 'dark':
                            return '#707070';
                        case 'electric':
                            return '#EFD536';
                        case 'fighting':
                            return '#D56723';
                        case 'grass':
                            return '#9CCC51';
                        case 'ice':
                            return '#51C4E7';
                        case 'poison':
                            return '#B97FC9';
                        case 'rock':
                            return '#A38C21';
                        case 'water':
                            return '#4492C4';
                        case 'dragon':
                            return 'linear-gradient(180deg, #53A4CF 50%, #F16E57 50%)';
                        case 'ground':
                            return 'linear-gradient(180deg, #F7DE3F 50%, #AB9842 50%)';
                        case 'flying':
                            return 'linear-gradient(180deg, #3DC7EF 50%, #BDB9B8 50%)'
                        default:
                            return '';
                    }
                })()
            }
            return(
                <li key={`${type.type.name}-${i}`} className='poke-type' style={typeBg}>
                    <p className='poke-type-name'>{type.type.name}</p>
                </li>
            );
        })
        return (
            <div className='poke-info'>
                <div className='img-name'>
                    <h2 className='poke-name'>{this.props.pokeInfo.name}</h2>
                    <img className='poke-img'
                        src={this.props.pokeInfo.sprites.front_default} 
                        alt={`sprite of ${this.props.pokeInfo.name}`} />
                </div>
                <div className='poke-details'>
                    <ul className='poke-types'>
                        <h3>Type</h3>
                        <div className='type-boxes'>
                            {types}
                        </div>
                    </ul>
                    <ul className='locations'>
                        <h3>Location</h3>
                        <div className='location-boxes'>
                            {/* {locations} */}
                            <PokeLocation pokeInfo={this.props.pokeInfo} />
                        </div>
                    </ul>
                    <ul className='weaknesses'>
                        <h3>Weaknesses</h3>
                        <div className='weak-boxes'>
                            <PokeWeaknesses pokeInfo={this.props.pokeInfo}/>
                        </div>
                    </ul>
                    <ul className='strengths'>
                        <h3>Strengths</h3>
                        <div className='strong-boxes'>
                            <PokeStrengths pokeInfo={this.props.pokeInfo} />
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
};

export default connect()(PokeInfo);