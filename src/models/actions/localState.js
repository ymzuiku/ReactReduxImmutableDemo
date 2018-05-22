import defaultState from '../defaultState';
import io from '../../utils/io';

io.key = 'react-redux-immutable-demo-store';

export const loaclLoad = () => {
  const data = io.load();
  return {
    type: 'load localState',
    fix: (state) => {
      return {
        ...defaultState,
        ...state,
      }
    },
  }
};
export const loaclSave = () => {
  return {
    type: 'save loaclState',
    fix: (state) => {
      io.saveAction(defaultState, state)
    },
  }
};
