import Pizza from "../models/pizza.js";
import Toppings from "../models/toppings.js";

let _pizza = new Pizza()
let _toppings = [
  new Toppings({ id: "sausage", name: "Sausage", price: 1.5 }),
  new Toppings({ id: "onions", name: "Onions", price: 0.5 }),
  new Toppings({ id: "pepperoni", name: "Pepperoni", price: 1.75 }),
  new Toppings({ id: "peppers", name: "Green Peppers", price: 0.5 }),
  new Toppings({ id: "chicken", name: "Grilled Chicken", price: 1.25 }),
  new Toppings({ id: "cheese", name: "Extra Cheese", price: 0.5 }),
  new Toppings({ id: "ham", name: "Canadain Bacon", price: 1.5 }),
  new Toppings({ id: "pineapple", name: "Pineapple", price: 0.5 }),
  new Toppings({ id: "bacon", name: "Bacon", price: 0.5 }),
  new Toppings({ id: "olives", name: "Olives", price: 0.5 })
]

let _toppingsSelected = []

export default class PizzaService {
  getToppings() {
    return JSON.parse(JSON.stringify(_toppings))
  }

  getPizza(formData) {
    for (let i = 0; i < _toppings.length; i++) {
      const topping = _toppings[i];
      console.log(formData[topping.id])
      if (formData[topping.id]) {
        console.log("something")
      }

    }

    return JSON.parse(JSON.stringify(_pizza))
  }
}