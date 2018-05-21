const io = {
  key: "defalutIOKey",
  save: v => {
    if(Object.prototype.toString.call(v) === '[object Object]') {
      localStorage.setItem(io.key, v);
    } else {
      console.warn('Warn: io.save() 传入的参数不是一个Object');
    }
  },
  load: (v) => {
    JSON.parse(localStorage.getItem(io.key));
  }
};

export { io as default, io };
