const initialState = {
  cart: []
}

/**
 * Cart Reducer
 * 
 * @param {Object} state Sart state
 * @param {Object} action  triggered action
 */
export const cartReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, {name: action.name, price: action.price}] };
    case "FLUSH_CART":
    console.log("flush");
      return { ...state, cart: initialState.cart };
    default:
      return state;
  }
}

export default cartReducer;