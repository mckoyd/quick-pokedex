import React from 'react';
import {connect} from 'react-redux';

import '../styles/poke-weak.css';
import { fetchDamage } from '../actions/damageRelations';

const mapStateToProps = state => ({
    damageRelations: state.damageRelations.damageRelations
})
const getTypeBg = name => ({
    background: (() => {
        switch(name){
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
})
const uniq = (a, key) => {
    let seen = {};
    return a.filter(item => seen.hasOwnProperty(key(item)) ? false : (seen[key(item)] = true))
}
export class PokeWeaknesses extends React.Component {
    componentDidMount(){
        this.props.pokeInfo.types.map((type, i) => {
            this.props.dispatch(fetchDamage(type.type.url))
            return null;
        });
    }
    render(){
    return(
    <div className='weakness'>
        <li className='double-damage-from'>
            <h4>Double Damage From</h4>
            <div className='double-damage-from-types'>
            {uniq(this.props.damageRelations
                .map(damageRelation => 
                    damageRelation.double_damage_from)
                        .reduce((a, c) => a.concat(c), []), JSON.stringify)
                        .length > 0 ? 
                            uniq(this.props.damageRelations
                                .map(damageRelation => 
                                    damageRelation.double_damage_from)
                                        .reduce((a, c) => a.concat(c), []), JSON.stringify)
                                        .map((damage, i) => {
                                            const typeBg = getTypeBg(damage.name);
                                            return(
                                                <p key={`double-${damage.name}-${i}`} 
                                                    style={typeBg} 
                                                    className='poke-type-name'>{damage.name}</p>
                                            )
                                        }) : <p key={`double-from-no-value`} className='poke-type-name'
                                        style={{backgroundColor: 'lightgray'}}>none</p>}
            </div>
        </li>
        <li className='half-damage-from'>
            <h4>Half Damage From</h4>
            <div className='half-damage-from-types'>
            {uniq(this.props.damageRelations
                .map(damageRelation => 
                    damageRelation.half_damage_from)
                        .reduce((a, c) => a.concat(c), []), JSON.stringify)
                        .length > 0 ? 
                            uniq(this.props.damageRelations
                                .map(damageRelation => 
                                    damageRelation.half_damage_from)
                                        .reduce((a, c) => a.concat(c), []), JSON.stringify)
                                        .map((damage, i) => {
                                            const typeBg = getTypeBg(damage.name);
                                            return(
                                                <p key={`half-${damage.name}-${i}`} 
                                                    style={typeBg} 
                                                    className='poke-type-name'>{damage.name}</p>
                                            )
                                        }) : <p key={`half-from-no-value`} className='poke-type-name'
                                        style={{backgroundColor: 'lightgray'}}>none</p>}
            </div>   
        </li>
        <li className='no-damage-to'>
            <h4>No Damage To</h4>
            <div className='no-damage-to-types'>
            {uniq(this.props.damageRelations
                .map(damageRelation => 
                    damageRelation.no_damage_to)
                        .reduce((a, c) => a.concat(c), []), JSON.stringify)
                        .length > 0 ? 
                            uniq(this.props.damageRelations
                                .map(damageRelation => 
                                    damageRelation.no_damage_to)
                                        .reduce((a, c) => a.concat(c), []), JSON.stringify)
                                        .map((damage, i) => {
                                            const typeBg = getTypeBg(damage.name);
                                            return(
                                                <p key={`no-damage-${damage.name}-${i}`} 
                                                    style={typeBg} 
                                                    className='poke-type-name'>{damage.name}</p>
                                            )
                                        }) : <p key={`no-damage-to-no-value`} className='poke-type-name'
                                        style={{backgroundColor: 'lightgray'}}>none</p>}
            </div>   
        </li>
    </div>
    );
    }
}

export default connect(mapStateToProps)(PokeWeaknesses);