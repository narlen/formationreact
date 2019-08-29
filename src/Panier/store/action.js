export const flushCart = () => {
  return { type: "FLUSH_CART" };
};

///deux syntaxe pour els returns implicites et explicites
export const addToCart = ({ name, price }) => ({
  type: "ADD_TO_CART",
  name: name,
  price: price
});
