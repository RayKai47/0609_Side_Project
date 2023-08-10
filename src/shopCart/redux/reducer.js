import * as actions from './actionType';

const initCart = [];

export const cart = (state = initCart, action) => {
  const {
    type,
  } = action;
  switch (type) {
    case actions.ADD_ORDER:
      return addOrder(state,action.payload)
    case actions.UPDATE_ORDER:
      return updateOrder(state,action.payload)
    case actions.DEL_ORDER:
      return delOrder(state,action.payload)
  }
};

const addOrder = (state, payload) => {
  let isRepeat = false
  state.forEach((product,idx)=>{
    if(product.id === payload.itemData.id){
      isRepeat = true
      console.log(payload.count)
      const tempObj = { ...product, count:product.count+payload.count}
      state.splice(idx,1,tempObj)
    }
  })
  if(!isRepeat){
    return([...state,
      {
        id:payload.itemData.id,
        name:payload.itemData.name,
        price:payload.itemData.price,
        count: payload.itemData.count
      }
    ])
  } else {
    return([...state])
  }
};

const updateOrder = (state, payload) => {
  state.forEach((product,idx) => {
    if(product.id === payload.itemData.id){
      const tempObj = {...product,count:payload.count}
      state.splice(idx,1,tempObj)
    }
  })
  return [...state]
};

const delOrder = (state,payload) => {
  let tempList = state.filter((product) => {
    return product.id != payload.id
  })
  return ([...tempList])
};