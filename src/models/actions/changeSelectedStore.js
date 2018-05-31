import ds from '../defaultState';
import { fetchStoreDetail } from '../server/getStoreData'
import { Map, fromJS } from 'immutable';

// 使用redux只需要编写action即可

export const asyncChangeSelectedNowStore = async (slugId) => {
  let theStoteId = slugId + 1;
  const data = await fetchStoreDetail(theStoteId);
  return {
    type: '由于type不做判断, 所以可以随意编写, 这里描述事件类型, 只做redux追溯的记录',
    // magic: 这一步就完成了immtable的数据修改,并且已经处理了reducer, 并且完成了异步的任务
    fix: (state = Map()) => {
      state = state.setIn(['stores', theStoteId], Map(data[0]));
      state = state.set('selectedStore', Map(data[0]));
      return state;
    },
  }
};

export const asyncChangeSelectedNextStore = async (slugId) => {
  let theStoteId = slugId + 1;
  const data = await fetchStoreDetail(theStoteId);
  return (dispatch) => {
    dispatch({
      type: '使用thunk的例子',
      // 这里传入
      fix: (state = Map()) => {
        state = state.setIn(['stores', theStoteId], fromJS(data[0]));
      state = state.set('selectedStore', fromJS(data[0]));
        return state;
      },
    })
  }
};