import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './utils/registerServiceWorker';
import { Provider } from 'react-redux';
import store from './utils/reduxImmerStore'

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
