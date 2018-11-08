import PizzaController from "./components/pizzaController.js";

class App {
  constructor() {
    this.constrollers = {
      pizzaControllers: new PizzaController()
    }
  }
}

window.app = new App()