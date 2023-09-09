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
    if(good.id === payload.itemData.id){
      if(good.material === payload.material) {
        isRepeat = true
        console.log(payload.itemNum)
        const tempObj = {
          ...good,
          itemNum:good.itemNum+payload.itemNum
        }
        state.splice(idx,1,tempObj)
      }
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
  state.forEach((good,idx) => {
    if(good.id === payload.itemData.id){
      if(good.material == payload.itemData.material){
        const tempObj = {...good,itemNum:payload.itemData.itemNum}
        state.splice(idx,1,tempObj)
      }
    }
  })
  return [...state]
};

const delOrder = (state,payload) => {
  let tempList = state.filter((good) => {
    return good.id != payload.id || good.material != payload.material
  })
  return ([...tempList])
};