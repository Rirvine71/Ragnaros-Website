import React from 'react'
import styles from 'styled-components';
import { Link } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { ListSubheader } from '@material-ui/core';
import Infinit from './Assets/Avengers.jpg';
import Wasp from './Assets/AntMan.jpg';
import Deadpool from './Assets/Deadpool.jpg';
import P1 from './Assets/readyPlayerOne.jpg';
import Ragnarok from './Assets/Thor.jpg';
import Greatest from './Assets/Showman.jpg';
import St from './Assets/Trinians.jpg';
import Ninja from './Assets/Batman.jpg';
import Totoro from './Assets/Neighbour.jpg';
import Castle from './Assets/Howls.jpg';


const Styles = styles.div`
    .root {
        display: 'flex',
        flexWrap: 'wrap',
    }

    formControls: {
        margin: theme.spacing.unit,
        minWidth: 120,
    }
    selectEmpty: {
        marginTop: theme.spacing.unit = 2,
    }
    gridList: {
        width: 650,
        height: '100%'
    }

`;

export const Movies = () => (
    <div>
        <h1>Welcome to the Movies Zone</h1>
        <h2>Settle in with some popcorn for a fun adventure in a faraway world.</h2>
        <p>Click on something that interests you to see more. </p>
     <GridList cellHeight={250}>
      <GridListTile key="SubHeader" cols={2} style={{ height: 'auto'}}>
          <ListSubheader component="div"></ListSubheader>
      </GridListTile>
      <GridListTile component={Link} to={`/Thanos`}>
          <img src={Infinit} alt="Snap" value="" />
      </GridListTile>
      <GridListTile component={Link} to={`/Pym`}>
          <img src={Wasp} alt="Shrink" value="" />
      </GridListTile>
      <GridListTile component={Link} to={`/Ajax`}>
          <img src={Deadpool} alt="Christmas" value="" />
      </GridListTile>
      <GridListTile component={Link} to={`/Player`}>
          <img src={P1} alt="Tracer" value="" />
      </GridListTile>
      <GridListTile component={Link} to={`/Valkyrie`}>
          <img src={Ragnarok} alt="Thunder" value="" />
      </GridListTile>
      <GridListTile component={Link} to={`/Circus`}>
          <img src={Greatest} alt="Efron" value="" />
      </GridListTile>
      <GridListTile component={Link} to={`/Spice`}>
          <img src={St} alt="Art" value="" />
      </GridListTile>
      <GridListTile component={Link} to={`/DC`}>
          <img src={Ninja} alt="Jutsu" value="" />
      </GridListTile>
      <GridListTile component={Link} to={`/Bus`}>
          <img src={Totoro} alt="Spirits" value="" />
      </GridListTile>
      <GridListTile component={Link} to={`/Magician`}>
          <img src={Castle} alt="Moving" value="" />
      </GridListTile>
     </GridList>
    </div>
  )
