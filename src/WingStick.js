import React from 'react';
import styles from 'styled-components';
import Rage from './Assets/Rage.jpg';

const Styles = styles.div`
    div: {
        position: 'absolute'
    }
    img: {
        width: 650,
        height: '100%'
    }
    h2: {
        font-size: 62px,
    }

`;

export const WingStick = () => (
    <div>
        <h1>Rage 2</h1>
        <h2>Welcome to the harsh post apocalypse with a stylish twist</h2>
        <img src={Rage} alt="Mutants" value="" />
        <p>The world is a crumbling mess since the mass-destruction the asteroid left, but that wasn’t all Walker had to worry about. 
           There are mutants that are hungry for blood and will do anything to cause devastation. Get ready to destroy, shoot and explode everything 
           and anything in your way in this open-world FPS experience. Civilization has started to emerge and search for resources as they attempt to claim 
           areas of the world to survive in this deadly environment. Walker is the last ranger of Vineland, and you will follow him as he makes his way through the 
           dystopian dangerous world in which he was born into.</p>
    </div>
    )