# _PizzaParlor_

#### By Alesandria Wild

## This webpage show cases object oriented JavaScript.

## Technologies Used

* HTML
* CSS
* Dillinger.io
* VSCode
* GitHub Pages
* JavaScript
* MDN 
___
## Description

This project will allow the user to choose from 3 different pizza sizes, and 5 topping option.
___

## Setup/Installation Requirements

To access the code in a text editor:

#### To access the code in a source code editor: 
```bash
$ git clone https://github.com/helen-lehrer/Mr-Robogers-Neighborhood
$ cd programming-language-suggester
$ code .
```
To view the webpage, simply preview index.html in your browser.
---

For GitHub page direct link [click here](https://thataltgirlalesandria.github.io/PizzaParlor/)
___
## Known Bugs

None at this time.
___
## Tests: 
Describe: function Order();

Test: The order function should contain the value of toppings, size, and cost.
Code: 
```
function Order (pizzaToppings, pizzaSize) {
  this.pizzaToppings = pizzaToppings;
  this.pizzaSize = pizzaSize;
  this.cost = 0;
}
```

Expected Output: Order() = this.pizzaToppings = pizzaToppings; this.pizzaSize = pizzaSize; this.cost = 0;
___
Describe: Order.prototype.whatSize = function () {

Test: The prototype function for whatSize will return a value.
Code: 
```
Order.prototype.whatSize = function () {
  if (this.pizzaSize === "small") {
    this.cost = 10;
```

Expected Output: this.cost = 10
___
Describe: Order.prototype.whatSize = function () {

Test: The prototype function for whatSize will return a value for individual pizza sizes depending on the size the user chooses
Code: 
```
if (this.pizzaSize === "small") {
    this.cost = 10;
  } else if (this.pizzaSize === "medium") {
    this.cost = 15;
  } else if (this.pizzaSize === "large") {
    this.cost = 20;
  }
```

Expected Output: this.pizzaSize[large] = 20;
___
Describe: Order.prototype.whatToppings = function () {

Test: The prototype function whatToppings will return a topping value.
Code: 
```
if (this.pizzaToppings.includes("chicken")) {
  } 
```

Expected Output: this.pizzaToppings[chicken] = true
___

Describe: Order.prototype.whatToppings = function () {

Test: The prototype function whatToppings will take the users choice of toppings and add the cost on to the this.cost function.

Code: 
```
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
```

Expected Output: this.pizzaToppings[chicken] = 2
___
## License
 MIT License
Copyright (c) _2023_ _Alesandria Wild_