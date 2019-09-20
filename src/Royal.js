import React from 'react';
import styles from 'styled-components';
import Joker from './Assets/Persona.jpg';

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

export const Royal = () => (
    <div>
        <h1>Persona 5</h1>
        <h2>Cast off thy chains and forge ahead with your rebellion</h2>
        <img src={Joker} alt="Thief" value="" />
        <p>Persona 5 is a game about the internal and external conflicts of a group of troubled high school students - the protagonist and a collection of compatriots he meets in the game's story - who live dual lives as Phantom Thieves. 
           The game is split between their two lives as typical ordinary day-to-day Tokyo high schoolers - attending class, after school activities and part-time jobs (all of which better your stats and unlock new opportunities). 
           But they also undertake fantastical RPG adventures by using otherworldly powers to enter the hearts of people, to steal their twisted desire to reform them and by effect society for the better, this part of the games lends to a stylised RPG experience with an innovative combat system. 
           Their powers comes from their Persona (all modelled off famous thieves/rebels from history and literature), the Jungian concept of their other “self”. The game's heroes realize that society forces people to wear masks to protect their inner vulnerabilities, and by literally ripping off their protective masks and confronting their inner selves 
           do the heroes awaken their inner power, and use it to strive to help those in need. Ultimately, the group of Phantom Thieves seeks to change their day-to-day world to match their perception and see through the masks modern-day society wears.</p>
    </div>
    )