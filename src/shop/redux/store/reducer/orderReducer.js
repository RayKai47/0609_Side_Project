const initOrderListState = [];

// const initCart = [];

export const orderReducer = ( state = initOrderListState, action ) => {
  switch(action.type){
    case "ADD_CART":
      return [...state,{
        id:action.payload.itemData.id,
        name:action.payload.itemData.name,
        price:action.payload.itemData.price,
        count:action.payload.itemData.count,
        // 也可以寫[...state,payload]
        
      }]
      
    case "UPDATE_CART":
      return [

      ]
      
    case "DEL_CART":
      return [

      ]
    default :
    
  }
}

const addOrder = (state,payload)=>{
  let isRepeat = false;
  state.forEach((product,idx)=>{
    if(product.id == payload.itemData.id){
      isRepeat=true
      console.log(isRepeat)
      const tempObj = {...product,
        count:product.count+payload.count
      }
      state.split(idx,1,tempObj)
    }
    if(!isRepeat){
      return [...state,
        {
          id:payload.itemData.id
        }]
    } else {
      return [...state]
    }
  })
}