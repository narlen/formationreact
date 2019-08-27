import pizzaData from "./pizzas.json";

export const fetchPizza = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(pizzaData), 2000);
  });
export default fetchPizza;
