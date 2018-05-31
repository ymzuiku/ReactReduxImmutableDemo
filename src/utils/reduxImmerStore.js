import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Map } from 'immutable';

// eslint-disable-next-line
let initialState = Map({});

// magic 使用 immutable 处理数据
const reducer = (state = initialState, action) => {
  if (action.fix) {
    const data = action.fix(state);
    if (data !== undefined) {
      return data;
    }
    return state;
  }
  return state;
}

let store;

if (!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)) {
  // 如果设备未安装插件调试
  store = createStore(
    reducer,
    applyMiddleware(thunk, logger),
  );
} else {
  store = createStore(
    reducer,
    compose(applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
  );
}

export default store;
