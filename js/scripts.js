function Order(pizzaSize, pizzaCrust, pizzaSauce, pizzaToppings = []) {
  this.pizzaSize = pizzaSize;
  this.pizzaCrust = pizzaCrust;
  this.pizzaSauce = pizzaSauce
  this.pizzaToppings = pizzaToppings;
}

function handleSubmitOrder(e){
  e.preventDefault();
  const pizzSize = document.getElementById("pizza-size").value;
  const pizzaCrust = document.getElementById("pizza-crust").value;
  const pizzaSauce = document.getElementById("pizza-sauce").value;
  let toppingsArray = [];
  document.querySelectorAll("input[name=pizza-toppings]:checked").forEach(function(element) {
    let topping = element['value'];
    toppingsArray.push(topping);
  });

}

window.addEventListener("load",function() {
  this.document.querySelector("form#order").addEventListener("submit", handlePizzaOrder);
}
)