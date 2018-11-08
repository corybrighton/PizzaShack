import Pizza from "../models/pizza.js";
import Toppings from "../models/toppings.js";

let _pizza = new Pizza()
let _toppings = [
  new Toppings({ name: "Sausage", price: 1.5 }),
  new Toppings({ name: "Onions", price: 0.5 }),
  new Toppings({ name: "Pepperoni", price: 1.75 }),
  new Toppings({ name: "Green Peppers", price: 0.5 }),
  new Toppings({ name: "Grilled Chicken", price: 1.25 }),
  new Toppings({ name: "Extra Cheese", price: 0.5 }),
  new Toppings({ name: "Canadain Bacon", price: 1.5 }),
  new Toppings({ name: "Pineapple", price: 0.5 }),
  new Toppings({ name: "Bacon", price: 0.5 }),
  new Toppings({ name: "Olives", price: 0.5 })
]

let _toppingsSelected = []

export default class PizzaService {
  getToppings() {
    return JSON.parse(JSON.stringify(_toppings))
  }

  getPizza() {
    return JSON.parse(JSON.stringify(_pizza))
  }
}