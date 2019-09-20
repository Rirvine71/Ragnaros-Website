import React from 'react';
import styles from 'styled-components';
import Ninja from './Assets/Batman.jpg';

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

export const DC = () => (
    <div>
        <h1>Batman Ninja</h1>
        <h2>Batman returns to his Ninja roots in this feudal adventure.</h2>
        <img src={Ninja} alt="Jutsu" value="" />
        <p>Batman Ninja takes a journey back in time as Gorilla Grodd's time displacement machine 
           catapults many of Batman's worst enemies to feudal Japan - along with the Dark Knight 
           and a few of his allies. The villains take over many parts of Japan as feudal lords that rule the divided 
           land, with the Joker taking the lead among the warring factions. Since his traditional high-tech weaponry and gadgets are 
           almost immediately exhausted with no way to replenish them, Batman must rely on his intellect and his allies - including Catwoman and the 
           extended Bat-family - to restore order to the land, and return to present-day Gotham City. </p>
    </div>
    )