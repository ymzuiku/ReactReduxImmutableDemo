import defaultState from '../defaultState';
import io from '../../utils/io';
import { Map } from 'immutable';

const tag = 'v0.0.1';

io.key = `immutableDemo_${tag}`;

export const localLoad = () => {
  const data = io.load();
  return {
    type: 'load localState',
    fix: (state) => {
      return Map({
        ...defaultState,
        ...data,
      })
    },
  }
};
export const localSave = () => {
  return {
    type: 'save loaclState',
    fix: (state = Map()) => {
      io.save(state.toJSON());
    },
  }
};
