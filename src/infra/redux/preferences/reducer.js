import * as actions from "./actionType";
import { initState } from "./constants";

export const preferences = (state = initState, action) =>{
  const {type} = action;
  switch (type){
    case actions.TOGGLE_FAVORITE:
      return toggleFavorite(state, action.favoriteList)
    default:
      return state;
  }
};


const toggleFavorite = (state, favoriteList) => {
  const { id, img, name, material, price } = favoriteList.itemData;
  const isRepeat = state.find((product) => product.id === id && product.material === material);

  if (isRepeat) {
    // 商品已存在，從清單中刪除
    const updatedList = state.filter((product) => !(product.id === id && product.material === material));
    return updatedList;
  } else {
    // 商品不存在，添加到清單
    const newItem = {
      id: id,
      img: img,
      name: name,
      material: material,
      price: price,
    };
    const updatedList = [...state, newItem];
    return updatedList;
  }
}