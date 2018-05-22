import React from 'react';
import { connect } from 'react-redux';
import { changeSelectedNowStore, changeSelectedNextStore } from '../models/actions'
import ds from '../models/defaultState'

class Home extends React.PureComponent {
  render() {
    return <div>Hello Home</div>;
  }
}

function mapProps(state = ds) {
  return {
    selectStore: state.selectedStore,
  }
}

function mapDispatch(dispatch) {
  return {
    // 非thunk用法
    changeSelectedNowStore: (...args) => {
      dispatch(changeSelectedNowStore(...args))
    },
    // thunk用法
    changeSelectedNextStore,
  }
}

export default connect(mapProps, mapDispatch)(Home);
