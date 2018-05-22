function getArgs(func) {
  //匹配函数括号里的参数
  var args = func.toString().match(/function\s.*?[Math Processing Error]/)[1];

  //分解参数成数组
  return args.split(',').map(function (arg) {
    //去空格和内联注释
    return arg.replace(/\/\*.*\*\//, '').trim();
  }).filter(function (args) {
    //确保没有undefineds
    return args;
  });
}

export function get(str = '') {
  const arr = str.split('.');
  return function (obj) {
    let mix = obj;
    for (var i = 0, l = arr.length - 1; i < l; i++) {
      var v = arr[i];
      if (mix[v] === undefined) {
        mix = undefined;
        break;
      } else {
        mix = mix[v];
      }
    }
    return mix;
  }
}
