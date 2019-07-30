## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

-------------------

1. Describe the biggest difference between `.forEach` & `.map`.

`.forEach` iterates through an array and finds the info you asked for, but doesn't actually return anything. 
    While `.map` iterates through an array, finds info you asked for and returns it in a new array.

-------------------

2. What is the difference between a function and a method?

A method is a function which is a property of an object.

-------------------


3. What is closure?

A closure is a variable nested within a function that can be utilized by other 
    functions that are also within the original functions scope.

-------------------

4. Describe the four rules of the 'this' keyword.

Window Binding: `this.` always tries to bind to the window first, i.e. you have a function that has nothing 
    but `console.log(this)` within it. In this case, `this` is the window.

Implicit Binding: `this.` always looks to the left of the . to find out what it is referencing.

New Binding: if `this.` is inside a `new` constructor function `this.` is bound to the new object being created. 

Explicit binding: `this.` is explicitly bound if it is passed to either `.call()`, `.apply()`, or `.bind()`. 

-------------------

5. Why do we need `super()` in an extended class?

We need it because the `super()` function is used to tell a parent's constructor to be concerned with the child's attributes. 
    I.E the parent has a speak method that we want the child to be able to use.

-------------------