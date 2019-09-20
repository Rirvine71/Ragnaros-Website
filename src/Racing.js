import React from 'react';
import styles from 'styled-components';
import Forza from './Assets/Forza.jpg';

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

export const Racing = () => (
    <div>
        <h1>Forza MotorSport 6</h1>
        <h2>Time to take control of some of the most powerful cars in existence</h2>
        <img src={Forza} alt="Racing" value="" />
        <p>Breathtaking graphics at 1080p resolution and 60 frames per second. Witness the spectacle of night racing under the stadium lights of Daytona and the intense claustrophobia of racing by 
           headlight in the utter blackness of Le Mans’ back stretch. Experience the immersion of racing in the rain as working wipers barely clear the spray and tires hydroplane across physically based 3D puddles.
           Collect and race over 450 Forzvista cars, all featuring cockpits, damage and customization. Tour 26 world-famous locales, including 10 newly captured tracks, all built from the ground up. Relive the classic races and 
           epic rivalries that have defined motorsports’ greatest moments.</p>
    </div>
    )