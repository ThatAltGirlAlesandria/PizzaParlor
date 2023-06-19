function Order(pizzaSize, pizzaCrust, pizzaSauce, pizzaToppings = []) {
  this.pizzaSize = pizzaSize;
  this.pizzaCrust = pizzaCrust;
  this.pizzaSauce = pizzaSauce
  this.pizzaToppings = pizzaToppings;
  this.cost = 0;
}

Order.prototype.whatSize = function () {
  if (this.pizzaSize === "small") {
    this.cost = 10;
  } else if (this.size === "medium") {
    this.cost = 15;
  } else if (this.size === "large") {
    this.cost = 20;
  }
  return this.cost
}

Order.prototype.whatToppings = function() {
    if (this.whatToppings.includes("chicken")) {
      this.cost +=2;  
  }
    if (this.whatToppings.includes("beef")) {
      this.cost +=2;  
  }
    if (this.whatToppings.includes("bacon")) {
      this.cost +=2;  
  }
    if (this.whatToppings.includes("pepperoni")) {
      this.cost +=2;  
  }
    if (this.whatToppings.includes("sausage")) {
      this.cost +=2;  
  }
  return this.cost;
}

function thisIsTheOrder (e) {
  e.preventDefault()

  let pieSize = document.getElementById("pizza-size").value;
  let toppingsArray = [];
    document.querySelector('input[name=toppings]:checked')
    .forEach(function(element) {
      let toppings = element['value'];
      toppingsArray.push(toppings);
    });
  let theOrder = new Order(toppingsArray, pieSize);
  theOrder.whatSize();
  theOrder.whatToppings();

  document.querySelector("span#total-cost").innerText= "the total cost of" + " " + theOrder.cost + ".";
}

window.addEventListener("load", function() {
this.document.querySelector("form#pizza-order").addEventListener("submit",thisIsTheOrder);
})