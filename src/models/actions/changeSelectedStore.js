import ds from '../defaultState';
import { fetchStoreDetail } from '../server/getStoreData'

// 使用redux只需要编写action即可

export const changeSelectedNowStore = async (slugId) => {
  let theStoteId;
  if (slugId === 200) {
    theStoteId = 2000;
  } else {
    theStoteId = 1000;
  }
  const data = await fetchStoreDetail(theStoteId);
  return {
    type: '由于type不做判断, 所以可以随意编写, 这里描述事件类型, 只做redux追溯的记录',
    // magic: 这一步就完成了immtable的数据修改,并且已经处理了reducer, 并且完成了异步的任务
    repice: (draft = ds) => {
      draft.stores[theStoteId] = data;
      draft.selectedStore = data;
    },
  }
}

export const changeSelectedNextStore = async (slugId) => {
  let theStoteId;
  if (slugId === 200) {
    theStoteId = 2001;
  } else {
    theStoteId = 1001;
  }
  const data = await fetchStoreDetail(theStoteId);
  return (dispatch) => {
    dispatch({
      type: '使用thunk的例子',
      // 这里传入
      repice: (draft = ds) => {
        draft.stores[theStoteId] = data;
        draft.selectedStore = data;
      },
    })
  }
}