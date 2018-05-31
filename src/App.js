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
import {
  localSave,
  localLoad,
  asyncChangeSelectedNowStore,
  asyncChangeSelectedNextStore,
} from './models/actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.props.loaclLoad();
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
              this.props.changeSelectedNowStore(5, 20);
            }}
          >
            redux+immer 例子
            {JSON.stringify(this.props.name)}
          </div>
          <Switch>
            <Route exact path="/Home/*" component={Home} />
            <Route exact path="/User/*" component={User} />
          </Switch>
          <div onClick={() => {
            this.props.localSave();
          }}>save
          </div>
        </div>
      </RootRouter>
    );
  }
}

function mapProps(state = Map()) {
  console.log(state);
  return {
    name: state.getIn(['selectedStore', 'otherData', 'subName']),
  }
}

function mapDispatch(dispatch) {
  return {
    localSave: () => {
      dispatch(localSave());
    },
    loaclLoad: () => {
      dispatch(localLoad());
    },
    changeSelectedNowStore: async (storeIdA, storeIdB) => {
      const a = await asyncChangeSelectedNowStore(storeIdA)
      dispatch(a);
      const b = await asyncChangeSelectedNextStore(storeIdB)
      dispatch(b);
    },
  }
}

export default connect(mapProps, mapDispatch)(App);
