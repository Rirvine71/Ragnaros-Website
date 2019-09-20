import React from 'react';
import styles from 'styled-components';
import Totoro from './Assets/Neighbour.jpg';

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

export const Bus = () => (
    <div>
        <h1>My Neighbour Totoro </h1>
        <h2>Meet the cuddliest neighbour you'll ever meet</h2>
        <img src={Totoro} alt="Spirits" value="" />
        <p>Two young girls, 10-year-old Satsuki and her 4-year-old sister Mei, move into a new house 
           in the country with their father to be closer to their mother, who has been hositalised for a long time. Whilst out playing 
           Satsuki and Mei discover that the nearby forest is inhabited by magical creatures, the leader of which is called Totoro (pronounced toe-toe-ro). 
           They soon befriend Totoro and his fellow magical creatures and have several magical adventures.</p>
    </div>
    )