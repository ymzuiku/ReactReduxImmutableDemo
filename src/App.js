import React, { Component } from 'react';
import {
  RootRouter,
  Route,
  history,
  hashChange,
  Switch,
} from 'react-router-hash-history';
import Home from './routers/Home';
import User from './routers/User';
import { connect } from 'react-redux';
import defaultState from './models/defaultState'
import {
  loaclLoad,
  changeSelectedNowStore,
  changeSelectedNextStore,
} from './models/actions'

class App extends Component {
  constructor(props){
    super(props);
    this.props.loadLoaclState();
  }
  componentDidMount() {
    // if begin use other URL page, to be use hashChange()
    hashChange()
    if (history.location.pathname === '/') {
      history.push('/Home/');
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
            redux+immer 例子
          </div>
          <Switch>
            <Route exact path="/Home/*" component={Home}/>
            <Route exact path="/User/*" component={User}/>
          </Switch>
        </div>
      </RootRouter>
    );
  }
}

function mapProps(state = defaultState) {
  return {
    selectedStore: state.selectedStore,
  }
}

function mapDispatch(dispatch) {
  return {
    loadLoaclState: () => {
      dispatch(loaclLoad());
    },
    changeSelectedNowStore: async (storeIdA, storeIdB) => {
      dispatch(await changeSelectedNowStore(storeIdA));
      dispatch(await changeSelectedNextStore(storeIdB));
    },
  }
}

export default connect(mapProps, mapDispatch)(App);
