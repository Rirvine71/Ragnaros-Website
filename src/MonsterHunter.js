import React from 'react';
import styles from 'styled-components';
import World from './Assets/World.jpg';

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

export const MonsterHunter = () => (
    <div>
        <h1>Monster Hunter World</h1>
        <h2>An Exciting Adventure in a Hostile New World</h2>
        <img src={World} alt="Hunting Time" value="" />
        <p>Embark on a perilous hunting expedition into a newly discovered continent known only as ‘The New World’ and prowl its uncharted wilds in search of the land’s most ferocious beasts in Monster Hunter: World.
           Each new foe you discover will pose a unique challenge, demanding careful planning and a hunter’s instinct to bring it down. Use any number of a vast array of traps. lures and weapons as well as the living ecosystem around you to overcome your quarry.</p>
        <p>Carcasses can be harvested for materials to upgrade and augment your arsenal while the environment itself can tip the battle in your favour, providing cover and vantage or even allowing you to pit monsters against one another.
           This world is yours to explore as you choose, either as a lone warrior on the path to glory or with up to three other players online in drop-in, drop-out cooperative play.</p>
    </div>
    )