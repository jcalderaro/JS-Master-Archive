
// Principle 1 // Code example for Window Binding

let yellHello = function() {
    console.log(this);
};

yellHello();

// Principle 2 // Code example for Implicit Binding

let hiHuman = function(param) {
param.hello = function() {
    console.log(`Hello ${this.name}!`);
};
};

const me = {
name: 'you there please you have to help me'
};

const you = {
name: 'please save me I am inside the computer'
};

hiHuman(me);
hiHuman(you);

me.hello();
you.hello();

// Principle 3 // Code example for New Binding

let Spawn = function(named, mainrole, spell) {
this.named = named;
this.mainrole = mainrole;
this.spell = spell;
};

var Wizard = new Spawn("Merlin", "Grand-Wizard", "Fireball Rank IV");

console.log(Wizard);

// Principle 4 // Code example for Explicit Binding

let Praise = function(param1, param2, param3) {
console.log(`My name is ${this.name}. My rank is ${param1}. 
I am skilled in casting ${param2}.`);
};

let Merlin = {
name: "Merlin"};

let Spells = ["Grand-Wizard", "Fireball Rank IV"];

Praise.call(Merlin, ...Spells);