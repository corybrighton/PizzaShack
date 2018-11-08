import PizzaService from "./pizzaService.js";

let _ps = new PizzaService()

function buildForm() {
  let template = ''
  _ps.getToppings().forEach(topping => {
    template += `
    <input type="checkbox" name="${topping.name.toLowerCase()}" onchange="">
    <label for="${topping.name.toLowerCase()}">${topping.name}</label>
    <span id="price">$${topping.price}</span>`
  });
  document.getElementById("toppingsForm").innerHTML = template + `<button type="submit">Order</button>`
}
export default class PizzaController {
  constructor() {
    buildForm()
  }

  orderPizza(event) {
    event.preventdefault
    let form = event.target
    _ps.getPizza()
  }
}