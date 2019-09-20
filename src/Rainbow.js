import React from 'react';
import styles from 'styled-components';
import Siege from './Assets/Rainbow.jpg';

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

export const Rainbow = () => (
    <div>
        <h1>Rainbow Six Siege</h1>
        <h2>Dive into the boots of an elite counter terroist unit for intense sieges</h2>
        <img src={Siege} alt="HEADSHOT" value="" />
        <p>Inspired by the reality of counter-terrorist operatives across the world, Rainbow Six Siege invites players to master the art of destruction. 
           Intense close-quarters confrontations, high lethality (one hit kill levels of realism), tactics, team play, and explosive action are at the centre of the experience.
           The multiplayer gameplay of Rainbow Six Siege sets a new bar for intense firefights and expert strategy in the rich legacy of past Rainbow Six games.</p>
        <p>For the first time in Rainbow Six, players will engage in sieges, a brand new style of assault. Enemies now have the means to transform their environments 
           into strongholds: they can trap, fortify, and create defensive systems to prevent breach by Rainbow teams. To face this challenge, players have a level of freedom 
           unrivalled by any previous Rainbow Six game. Combining tactical maps, observation drones, and a new rappel system, Rainbow teams have more options than ever before to plan, attack, 
           and diffuse these situations.</p>
    </div>
    )