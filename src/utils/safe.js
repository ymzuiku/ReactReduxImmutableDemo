export function get(str = '', def = undefined) {
  const arr = str.split('.');
  return function (obj) {
    let mix = obj;
    for (var i = 0, l = arr.length; i < l; i++) {
      var v = arr[i];
      if (mix[v] === undefined) {
        mix = def;
        break;
      } else {
        mix = mix[v];
      }
    }
    return mix;
  }
}

export function set(str = '', value) {
  const arr = str.split('.');
  return function (obj) {
    let mix = obj;
    for (var i = 0, l = arr.length; i < l; i++) {
      var v = arr[i];
      if (mix[v] === undefined) {
        console.warn(`(warn)safe.set: ${obj.toString()}.${str} is undefined`)
        break;
      } else {
        mix = mix[v];
      }
    }
    mix = value;
  }
}