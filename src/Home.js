import React from 'react';
import styles from 'styled-components';
import Logo from './Assets/RagnarosLogo.jpg';
import World from './Assets/World.jpg';
import War from './Assets/GodOfWar.jpg';
import Broly from './Assets/Broly.jpg';
import Captain from './Assets/Marvel.jpg';

const Styles = styles.div`
    .Logo {
        background-image: url(../Assets/RagnarosLogo.jpg)
    }
`;

export const Home = () => (
    <div>
        <h2>Welcome to Ragnaros.com</h2>
        <p>We're here to show you some awesome games and movies that you might be interested in and create a community where like minded people can gather to share opnions and stories and give you the chance to pick up these amazing games and movies for affordable prices. </p>
        <img src={Logo}  alt="Company Logo" value="" />
        <p> Below are a few of the products that we have have for you to take a look at</p>
        <img src={World} alt="Hunting Time" value="" /> <img src={War} alt="BOY" value="" /> <img src={Broly} alt="Super Saiyan" value="" /> <img src={Captain} alt="Prelude to the end" value="" />
    </div> 
    
)