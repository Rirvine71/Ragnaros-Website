import React from 'react';
import styles from 'styled-components';
import Greatest from './Assets/Showman.jpg';

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

export const Circus = () => (
    <div>
        <h1>The Greatest Showman</h1>
        <h2>Welcome to the greatest show the world has ever seen</h2>
        <img src={Greatest} alt="Efron" value="" />
        <p>Orphaned, penniless but ambitious and with a mind crammed with imagination and fresh ideas, 
           the American Entrepenuer Phineas Taylor Barnum will always be remembered as the man with the gift to effortlessly 
           blur the line between reality and fiction. Thirsty for innovation and hungry for success, the son of a 
           tailor will manage to show the world the draw and fascination of the unique and peculiar, introducing extraordinary, 
           never-seen-before live acts on the circus stage. Some will call Barnum's wide collection of oddities, a freak show; however, 
           when the obsessed showman gambles everything on the opera singer Jenny Lind to appeal to a high-brow audience, he will somehow 
           lose sight of the most important aspect of his life: his family. Will Barnum risk it all to be accepted?</p>
    </div>
    )