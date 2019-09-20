import React from 'react';
import styles from 'styled-components';
import P1 from './Assets/readyPlayerOne.jpg';

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

export const Player = () => (
    <div>
        <h1>Ready Player One</h1>
        <h2>Get ready to jump into a virtual world filled with endless possibility</h2>
        <img src={P1} alt="Tracer" value="" />
        <p>From filmmaker Steven Spielberg comes the science fiction action adventure Ready Player One, based on Ernest Cline's bestseller of the same name, which has become a worldwide phenomenon.
           The film is set in 2045, with the world on the brink of chaos and collapse. But the people have found salvation in the OASIS, an expansive virtual reality universe created by the brilliant and 
           eccentric James Halliday (Mark Rylance). When Halliday dies, he leaves his immense fortune to the first person to find a digital Easter egg he has hidden somewhere in the OASIS, sparking a contest 
           that grips the entire world. When an unlikely young hero named Wade Watts (Tye Sheridan) decides to join the contest, he is hurled into a breakneck, reality-bending treasure hunt through a fantastical universe of mystery, discovery and danger.</p>
    </div>
    )