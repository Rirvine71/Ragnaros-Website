import React from 'react';
import styles from 'styled-components';
import St from './Assets/Trinians.jpg';

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

export const Spice = () => (
    <div>
        <h1>St Trinians</h1>
        <h2>Get to know the girls of the school from hell</h2>
        <img src={St} alt="Art" value="" />
        <p>St Trinians proudly continues to represent the unacceptable face of British education. 
           When the new Minister of Education announces he will personally sort the place out he doesn't 
           realise either the enormity of the task or that the headmistress is an old flame. The school is 
           anyway threatened with closure by their bank; with the staff clearly a waste of space the girls realise the responsibility to save the day falls on them.</p>
    </div>
    )