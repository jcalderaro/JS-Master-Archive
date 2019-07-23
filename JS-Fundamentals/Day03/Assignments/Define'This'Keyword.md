
* The four principles of "this";

* in your own words. explain the four principle for the "this" keyword below.


* 1. Window Binding is a `this.` reference, in which there is nothing to the left of the.
        So the function tries to refer to the window instead.


* 2. Implicit Binding is a `this.` reference, in which the function is looking to the left 
        of the. And finding the function is finding a reference.


* 3. New Binding is a `this.` reference, in which you create a constructor function, and 
        anytime you invoke a function with the `new` keyword the `this.` inside of that 
            function is bound to the new object being constructed via the constructor function.


* 4. Explicit Binding is a `this.` reference, in which you are explicitly passing a `this.` context    
        to either `.call()`, `.apply()`, or `.bind()`.