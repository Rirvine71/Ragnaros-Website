import React from 'react';
import styles from 'styled-components';
import Anthem from './Assets/Anthem.jpg';

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

export const JetPacks = () => (
    <div>
        <h1>Anthem</h1>
        <h2>Blast off to save world from the dark forces</h2>
        <img src={Anthem} alt="Bad" value="" />
        <p>Explore a vast and wild science-fantasy world in an online-focused action RPG from the developer behind the Mass Effect and Dragon Age series.
           Take control of a powerful Javelin exosuit - a cutting-edge armour designed to maximise the wearer’s offensive and defensive capabilities - and join with 
           up to three friends online as you set off into BioWare’s largest-ever open-world environment. Traverse vast chasms, sweeping jungles and teeming watery depths as you 
           explore the hostile and highly-dynamic shared world of Anthem. Ever-changing, often hazardous weather conditions, vicious creatures and lawless marauders hamper progress at every turn. 
           Stay vigilant, work with your allies and upgrade your Javelin suit to survive.</p>
    </div>
    )