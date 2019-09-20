import React from 'react';
import styles from 'styled-components';
import Castle from './Assets/Howls.jpg';

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

export const Magician = () => (
    <div>
        <h1>Howl's Moving Castle</h1>
        <h2>A magical love will bloom against all odds</h2>
        <img src={Castle} alt="Moving" value="" />
        <p>A love story between an 18-year-old girl named Sophie, cursed by a witch into an old woman's body, 
           and an infamous magician named Howl. Under the curse, Sophie sets out to seek her fortune and find a life that is more like her, this leads her to Howl's 
           strange moving castle. In the castle, Sophie meets Howl's fire demon, named Calcifer. When Calcifer see's that she is under a 
           curse, the demon makes a deal with Sophie--if she can manage to break the contract that bind him and Howl together, then Calcifer will break 
           the curse that Sophie is under, and she will return to her 18-year-old shape.</p>
    </div>
    )