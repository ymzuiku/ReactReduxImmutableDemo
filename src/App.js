import React, { Component } from 'react';
import {
  RootRouter,
  Route,
  history,
  hashChange,
  Switch
} from './utils/historyRouter';
import Home from './routers/Home';
import User from './routers/User';

global.bbb = p => {
  React.createElement('div', p);
};
global.cc = '10000bbb'

class App extends Component {
  componentDidMount() {
    // if begin use other URL page, to be use hashChange()
    // console.log(bbb);
    // console.log(cc);
    hashChange();
    if (history.location.pathname === '/') {
      history.push('/Home');
    }
  }
  render() {
    return (
      <RootRouter>
        <div>
          <div
            onClick={() => {
              if (history.location.pathname === '/User/') {
                history.push('/Home/');
              } else {
                history.push('/User/');
              }
            }}
          >
            aaa
          </div>
          <Switch>
            <Route exact path="/Home/*" component={Home} />
            <Route exact path="/User/*" component={User} />
          </Switch>
        </div>
      </RootRouter>
    );
  }
}

export default App;
