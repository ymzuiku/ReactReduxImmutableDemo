import defaultState from '../models/defaultState';

const io = {
  key: 'defaultIOKey',
  save: v => {
    if (Object.prototype.toString.call(v) === '[object Object]') {
      localStorage.setItem(io.key, v);
    } else {
      console.warn('Warn: io.save() param is no a Object');
    }
  },
  load: v => {
    if (v) {
      return JSON.parse(localStorage.getItem(v));
    }
    return JSON.parse(localStorage.getItem(io.key));
  },
};

export { io as default, io };
