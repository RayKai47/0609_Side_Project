import * as actions from './actionType';

const initCart = [];

export const cart = (state = initCart, action) => {
  const {
    type,
  } = action;
  switch (type) {
    case actions.ADD_ORDER:
      return addOrder(state, action.payload)
    case actions.UPDATE_ORDER:
      return updateOrder(state, action.payload)
    case actions.DEL_ORDER:
      return delOrder(state, action.payload)
    default:
      return state;
  }
};

const addOrder = (state, payload) => {
  let isRepeat = false
  state.forEach((good,idx)=>{
    if(good.id === payload.itemData.id && good.material === payload.material){
      isRepeat = true
      console.log(payload.itemNum)
      const tempObj = {
        ...good,
        itemNum:good.itemNum+payload.itemNum
      }
      state.splice(idx,1,tempObj)
    }
  })
  if(!isRepeat){
    return([...state,
      {
        id:payload.itemData.id,
        name:payload.itemData.name,
        price:payload.itemData.price,
        img:payload.itemData.img,
        material: payload.material,
        itemNum: payload.itemNum
      }
    ])
  } else {
    return([...state])
  }
};

const updateOrder = (state, payload) => {
  // 助教的方法
  // state.forEach((good,idx) => {
  //   if(good.id === payload.itemData.id && good.material == payload.itemData.material){
  //     if(payload.itemData.itemNum !== 0 ){
  //       const tempObj = {...good,itemNum:payload.itemData.itemNum}
  //       state.splice(idx,1,tempObj)
  //     }
  //   }
  // })
  // return [...state]
  const updatedState = state.map((good) => {
    const maxQuantity = 10;
    if (good.id === payload.itemData.id && good.material === payload.itemData.material) {
      const newQuantity = Math.min(Math.max(payload.itemData.itemNum, 0), maxQuantity);

      if (newQuantity === 0) {
        // 商品數量為 0，不返回這個商品，相當於刪除
        return null;
      } else if(newQuantity === maxQuantity){
        alert("商品數量最多10個！！")
      }
      return { ...good, itemNum: newQuantity };
    }
    return good;
  });
  const filteredState = updatedState.filter((good) => good !== null);

  return filteredState;
};

const delOrder = (state,payload) => {
  let tempList = state.filter((good) => {
    return good.id !== payload.id || good.material !==payload.material
  })
  return ([...tempList])
};