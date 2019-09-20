import React from 'react';
import styles from 'styled-components';
import God from './Assets/Kratos.jpg';

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

export const GOW = () => (
    <div>
        <h1>God Of War</h1>
        <h2>A Bold new chapter in the God of War's History</h2>
        <img src={God} alt="BOY" value="" />
        <p>His vengeance against the Gods of Olympus behind him, Kratos now lives in the realm of Norse deities and monsters.
           It’s in this harsh, unforgiving world that he must fight to survive, and not only teach his son to do the same… but also prevent him from repeating the Ghost of Sparta’s bloodstained mistakes.
           This staggering reimagining of God of War with a new story and a new more close up and brutal fighting engine and overall design creates a breathtaking new chapter in Krato's story.</p>
    </div>
    )