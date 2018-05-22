import defaultState from '../models/defaultState';

const io = {
  key: 'defaultIOKey',
  save: v => {
    if (Object.prototype.toString.call(v) === '[object Object]') {
      localStorage.setItem(io.key, JSON.stringify(v));
    } else {
      console.warn('Warn: io.save() param is no a Object');
    }
  },
  load: v => {
    try {
      if (v) {
      return JSON.parse(localStorage.getItem(v));
    }
    return JSON.parse(localStorage.getItem(io.key));
    } catch (err) {
      console.warn('load last localSate error');
    }

  },
};

export { io as default, io };
