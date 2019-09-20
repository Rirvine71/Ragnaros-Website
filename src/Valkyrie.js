import React from 'react';
import styles from 'styled-components';
import Ragnarok from './Assets/Thor.jpg';

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

export const Valkyrie = () => (
    <div>
        <h1>Thor Ragnarok</h1>
        <h2>The god of thunder fights against the both the end of his world and the goddess of death.</h2>
        <img src={Ragnarok} alt="Thunder" value="" />
        <p>Set after the events of 'Avengers: Age of Ultron', Thor finds himself imprisoned on the far side of the universe 
           without the use of his famed hammer. With the villainous and ruthless goddess Hela looking to instigate Ragnarok, 
           the destruction of Asgard and the entire Asgardian civilisation, Thor faces a race against time to return to his home world and stop Hela's 
           evil scheme before it's too late.</p>
    </div>
    )