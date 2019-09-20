import React from 'react';
import styles from 'styled-components';
import Infinit from './Assets/Avengers.jpg';

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

export const Thanos = () => (
    <div>
        <h1>Avengers: Infinity War</h1>
        <h2>A war to save the universe or at least half of it </h2>
        <img src={Infinit} alt="Snap" value="" />
        <p>As the Avengers and their allies have continued to protect the world from threats too 
           large for any one hero to handle, a danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six 
           Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has 
           led up to this moment - the fate of Earth and existence itself has never been more uncertain.</p>
    </div>
    )