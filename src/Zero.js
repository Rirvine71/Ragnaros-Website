import React from 'react';
import styles from 'styled-components';
import Dawn from './Assets/Horizon.jpg';

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

export const Zero = () => (
    <div>
        <h1>Horizon Zero Dawn</h1>
        <h2>Grab your bow and arrows its time to hunt robot dinosaurs</h2>
        <img src={Dawn} alt="ROBOTS" value="" />
        <p>In an era where Machines roam the land and mankind is no longer the dominant species, a young hunter named Aloy embarks on a journey to discover her destiny. 
           Explore a vibrant and lush world inhabited by mysterious mechanized creatures. Embark on a compelling, emotional journey and unravel mysteries of tribal societies, 
           ancient artefacts and advanced technologies that will determine the fate of this planet, and of life itself. </p>
    </div>
    )