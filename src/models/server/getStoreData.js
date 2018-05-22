import produce from 'immer';

// currying 给数组里的每个对象添加一个index属性, 模拟请求后的数据
const mapper = produce((draft, index) => {
  draft.index = index;
});

// 模拟异步, 1500ms后返回处理过的数据
const testFetch = (arr) => {
  return new Promise((cb) => {
    setTimeout(() => {
      cb(arr.map(mapper));
    }, 1500)
  })
};

export async function fetchStoreDetail(storeId) {
  return await testFetch([
    {
      theStoreId: storeId,
      otherData: {
        subName: undefined,
        subAge: undefined,
      },
      name: '模拟数据请求',
      money: 500,
    },
  ]);
}