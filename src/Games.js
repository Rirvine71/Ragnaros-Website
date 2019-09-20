import React from 'react';
import styles from 'styled-components';
import { Link } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { ListSubheader } from '@material-ui/core';
import World from './Assets/World.jpg';
import War from './Assets/GodOfWar.jpg';
import Smash from './Assets/SMASH.jpg';
import Joker from './Assets/Persona.jpg';
import Dawn from './Assets/Horizon.jpg';
import Siege from './Assets/Rainbow.jpg';
import Odyssey from './Assets/Mario.jpg';
import Forza from './Assets/Forza.jpg';
import Anthem from './Assets/Anthem.jpg';
import Rage from './Assets/Rage.jpg';

const Styles = styles.div`
    gridList: {
        width: 650,
        height: '100%'
    }

`;


export const Games = () => (
  <div>
      <h1>Welcome to the Gamer Zone</h1>
      <h2>Games as far as the eye can see something for everyone</h2>
      <p>Click on something that interests you to see more. </p> 
    <GridList cellHeight={250}>
    <GridListTile key="SubHeader" cols={2} style={{ height: 'auto'}}>
        <ListSubheader component="div"></ListSubheader>
    </GridListTile>
    <GridListTile component={Link} to={`/MonsterHunter`}>
        <img src={World} alt="Hunting Time" value="" />
    </GridListTile>
    <GridListTile component={Link} to={`/GOW`}>
        <img src={War} alt="BOY" value="" />
    </GridListTile>
    <GridListTile component={Link} to={`/Ultimate`}>
        <img src={Smash} alt="Everyone" value="" />
    </GridListTile>
    <GridListTile component={Link} to={`/Royal`}>
        <img src={Joker} alt="Thief" value="" />
    </GridListTile>
    <GridListTile component={Link} to={`/Zero`}>
        <img src={Dawn} alt="ROBOTS" value="" />
    </GridListTile>
    <GridListTile component={Link} to={`/Rainbow`}>
        <img src={Siege} alt="HEADSHOT" value="" />
    </GridListTile>
    <GridListTile component={Link} to={`/Mario`}>
        <img src={Odyssey} alt="Hats" value="" />
    </GridListTile>
    <GridListTile component={Link} to={`/Racing`}>
        <img src={Forza} alt="Racing" value="" />
    </GridListTile>
    <GridListTile component={Link} to={`/JetPacks`}>
        <img src={Anthem} alt="Bad" value="" />
    </GridListTile>
    <GridListTile component={Link} to={`/WingStick`}>
        <img src={Rage} alt="Mutants" value="" />
    </GridListTile>
    </GridList>
  </div>
  )
