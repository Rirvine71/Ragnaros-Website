import React from 'react';
import styles from 'styled-components';
import Wasp from './Assets/AntMan.jpg';

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

export const Pym = () => (
    <div>
        <h1>Ant-Man and The Wasp</h1>
        <h2>A Hero comes in all sizes</h2>
        <img src={Wasp} alt="Shrink" value="" />
        <p>From the Marvel Cinematic Universe comes Ant-Man and the Wasp. Still reeling from the aftermath of Captain America: 
           Civil War and under house arrest, Scott Lang is enlisted by Dr. Hank Pym for an urgent new mission. He must once again put on the suit and 
           learn to fight alongside the Wasp as they join forces to uncover secrets from the past.</p>
    </div>
    )