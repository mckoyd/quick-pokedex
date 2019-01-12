import { connect } from 'react-redux';
import React from 'react';

import '../styles/app.css';
import { getPokeSearch, fetchPokeInfo } from '../actions/pokeInfo';
import PokeInfo from './PokeInfo';

const mapStateToProps = state => ({
    pokeInfo: state.pokemon.pokeInfo,
    error: state.pokemon.error
})

export const App = props => (
    <div className='app'>
        <header className='header'>
            <h1 className='header-name'>Wali's Pokedex</h1>
        </header>
        <main className='main'>
            <form className='search-form' 
                onSubmit={e => {
                    e.preventDefault();
                    props.dispatch(fetchPokeInfo());
                    e.target.reset();
            }}>
                <input className='input-box' type='text' onChange={e => props.dispatch(getPokeSearch(e.target.value.toLowerCase()))}/>
                <input className='search-btn' type='submit' value='get pokeInfo' />
            </form>
            {props.pokeInfo ? <PokeInfo pokeInfo={props.pokeInfo} /> : <h2 className={`${props.error === '' ? 'hidden' : 'poke-not-found'}`}>{props.error}</h2>}
        </main>
    </div>
);

export default connect(mapStateToProps)(App);