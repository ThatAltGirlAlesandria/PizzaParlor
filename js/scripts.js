function Order (pizzaToppings, pizzaSize) {
  this.pizzaToppings = pizzaToppings;
  this.pizzaSize = pizzaSize;
  this.cost = 0;
}

Order.prototype.whatSize = function () {
  if (this.pizzaSize === "small") {
    this.cost = 10;
  } else if (this.pizzaSize === "medium") {
    this.cost = 15;
  } else if (this.pizzaSize === "large") {
    this.cost = 20;
  }
  return this.cost
}

Order.prototype.whatToppings = function () {
  if (this.pizzaToppings.includes("chicken")) {
    this.cost += 2;
  } 
  if (this.pizzaToppings.includes("bacon")) {
    this.cost += 2;
  } 
  if (this.pizzaToppings.includes("beef")) {
    this.cost += 2;
  } 
  if (this.pizzaToppings.includes("sausage")) {
    this.cost += 2;
  }
  if (this.pizzaToppings.includes("pepperoni")) {
    this.cost += 2;
  }
  return this.cost;
}

function thisIsTheOrder (e) {
  e.preventDefault()

  let pieSize = document.getElementById("pizza-size").value;
  let toppingsArray = [];
    document.querySelectorAll('input[name=toppings]:checked')
    .forEach(function (element) {
      let toppings = element['value'];
      toppingsArray.push(toppings);
    });
  const theOrder = new Order(toppingsArray, pieSize);
  theOrder.whatSize();
  theOrder.whatToppings();
  console.log(theOrder)
  
  document.querySelector("span#pizza-order").innerText= "The total cost of your order is: " + theOrder.cost + ".";
}

window.addEventListener("load", function() {
document.querySelector("form#order-form").addEventListener("submit", thisIsTheOrder);
})