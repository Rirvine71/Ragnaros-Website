import React from 'react';
import styles from 'styled-components';
import Smash from './Assets/Switch.jpg';


const Styles = styles.div`
    div: {
        position: 'absolute'
    }
    img: {
        width: 650px,
        height: '50%'
    }
    h2: {
        font-size: 62px,
    }

`;

export const Ultimate = () => (
    <div>
        <h1>Super Smash Bros Ultimate</h1>
        <h2>Everyone is here for some exciting party battles</h2>
        <img src={Smash} alt="Everyone" value="" />
        <p>Welcome to the ultimate arena where Legendary game worlds and it's fighters clash to test themselves, with Super Smash Bros. Ultimate including every single fighter ever featured in the series' nearly two-decades run, making it one of the biggest crossover events in gaming history.</p>
        <p>Amazing challengers approach with the inclusion of Inkling from the popular Splatoon series, by popular demand, Ridley, from the iconic Metroid series, DLC characters such as Joker from Persona 5, and old favourites, returning from past entries to join in the fight, with Wolf, Ice Climbers, Pokemon trainer and more!
           Elevate your Super Smash Bros. experience to great heights with faster combat, attacks, items, defensive options and more features that will keep the battle raging whether you're at home or on the go.</p>
    </div>
    )