import React from 'react';
import styles from 'styled-components';
import Deadpool from './Assets/Deadpool.jpg';

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

export const Ajax = () => (
    <div>
        <h1>Once Upon A Deadpool</h1>
        <h2>A christmas story that is not for the whole family</h2>
        <img src={Deadpool} alt="Christmas" value="" />
        <p>What mre is there to say other than its time to get into the oliday spirit with a festive 
           retelling of the story of deadpool 2 set against the backdrop of deadpool telling a bedtime story to
           Actor Fred Savage who he may or may not be holding aginst his will in homage to Fred's Role in the 1987 classsic the princess bride. 
        </p>
    </div>
    )