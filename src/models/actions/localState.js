import defaultState from '../defaultState';
import io from '../../utils/io';

const tag = 'v0.0.1';

io.key = `immutableDemo_${tag}`;

export const localLoad = () => {
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
export const localSave = () => {
  return {
    type: 'save loaclState',
    fix: (state) => {
      io.save({
        ...defaultState, ...state,
      })
    },
  }
};
