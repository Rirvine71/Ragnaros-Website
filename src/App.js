import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Games } from './Games';
import { Movies } from './Movies';
import { MonsterHunter } from './MonsterHunter';
import { GOW } from './GOW';
import { JetPacks } from './JetPacks';
import { Mario } from './Mario';
import { Racing } from './Racing';
import { Rainbow } from './Rainbow';
import { Royal } from './Royal';
import { Ultimate } from './Ultimate';
import { WingStick } from './WingStick';
import { Zero } from './Zero';
import { Ajax } from './Ajax';
import { Bus } from './Bus';
import { Circus } from './Circus';
import { DC } from './DC';
import { Magician } from './Magician';
import { Player } from './Player';
import { Pym } from './Pym';
import { Spice } from './Spice';
import { Thanos } from './Thanos';
import { Valkyrie } from './Valkyrie';
import { NoMatch } from './NoMatch';
import { Layout } from './Components/Layouts';
import { NavigationBar } from './Components/NavigationBar';
import { Jumbotron } from './Components/Jumbotron';


class App extends Component {
  render() {
    return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <Layout>
       <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Games" component={Games} />
          <Route path="/Movies" component={Movies} />
          <Route path="/MonsterHunter" component={MonsterHunter} />
          <Route path="/GOW" component={GOW} />
          <Route path="/JetPacks" component={JetPacks} />
          <Route path="/Mario" component={Mario} />
          <Route path="/Racing" component={Racing} />
          <Route path="/Rainbow" component={Rainbow} />
          <Route path="/Royal" component={Royal} />
          <Route path="/Ultimate" component={Ultimate} />
          <Route path="/WingStick" component={WingStick} />
          <Route path="/Zero" component={Zero} />
          <Route path="/Ajax" component={Ajax} />
          <Route path="/Bus" component={Bus} />
          <Route path="/Circus" component={Circus} />
          <Route path="/DC" component={DC} />
          <Route path="/Magician" component={Magician} />
          <Route path="/Player" component={Player} />
          <Route path="/Pym" component={Pym} />
          <Route path="/Spice" component={Spice} />
          <Route path="/Thanos" component={Thanos} />
          <Route path="/Valkyrie" component={Valkyrie} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
   );
  }
}

export default App;
