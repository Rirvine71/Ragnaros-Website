import React from 'react';
import styles from 'styled-components';
import Odyssey from './Assets/cappy.jpg';

const Styles = styles.div`
    div: {
        position: 'absolute'
    }
    .img: {
        width: 50%;
        height: '100%';
    }
    h2: {
        font-size: 62px,
    }

`;

export const Mario = () => (
    <div>
        <h1>Super Mario Odyssey</h1>
        <h2>Our favourite plumber returns on another planet hopping adventure</h2>
        <img src={Odyssey} alt="Hats" value="" />
        <p>After Bowser kidnaps Princess Peach with plans for a wedding Mario sets out to rescue her once again, Thanks to heroic, hat-shaped Cappy, 
           Mario's got new moves that'll make you rethink his traditional run-and-jump gameplay - like cap jump, cap throw, and capture. Use these amazing new abilities 
           like the power to capture and control objects, animals, and enemies to collect Power Moons so you can power up the Odyssey airship and travel to mysterious new worlds!
           Use captured cohorts such as enemies, objects, and animals to progress through the game and uncover loads of hidden collectibles. This sandbox-style 3D Mario adventure 
           - the first since 1996's beloved Super Mario 64 and 2002's classic Super Mario Sunshine - is packed with secrets and surprises, plus exciting new kingdoms to explore.</p>
    </div>
    )