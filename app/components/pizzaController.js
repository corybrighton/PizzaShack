import PizzaService from "./pizzaService.js";

let _ps = new PizzaService()

function buildForm() {
  let template = ''
  _ps.getToppings().forEach(topping => {
    template += `
    <div>
    <input type="checkbox" name="${topping.id}" onchange="">
    <label for="${topping.id}">${topping.name}</label>
    <span id="price">$${topping.price}</span>
    </div>`
  });
  document.getElementById("toppingsForm").innerHTML = template + `<button class="btn btn-success" type="submit">Order</button>`
}
export default class PizzaController {
  constructor() {
    buildForm()
  }

  orderPizza(event) {
    event.preventDefault()
    let form = event.target
    let formData = {
      sausage: form.sausage.checked,
      onions: form.onions.checked,
      pepperoni: form.pepperoni.checked,
      peppers: form.peppers.checked,
      chicken: form.chicken.checked,
      cheese: form.cheese.checked,
      ham: form.ham.checked,
      pineapple: form.pineapple.checked,
      bacon: form.bacon.checked,
      olives: form.olives.checked
    }
    _ps.getPizza(formData)
  }
}