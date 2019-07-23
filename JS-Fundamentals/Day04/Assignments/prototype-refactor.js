/* 
Prototype Refactor
1. Copy and paste your code or the solution from yesterday
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/

class GameObject {
    constructor(attributes){
      this.createdAt = attributes.createdAt;
      this.name = attributes.name;
      this.dimensions = attributes.dimensions;
    }
    
    destroy() {
      return `${this.name} was removed from the game`;
    }
    
}

class CharacterStats extends GameObject{
    constructor(gameObjectAttributes) {
        super(gameObjectAttributes);
        this.healthPoints = gameObjectAttributes.healthPoints;
    }

    takeDamage() {
        return `${this.name} took damage.`;
    }

}

class Humanoid extends CharacterStats{
    constructor(characterStatsAttributes) {
        super(characterStatsAttributes);
        this.team = characterStatsAttributes.team;
        this.weapons = characterStatsAttributes.weapons;
        this.language = characterStatsAttributes.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
    
}


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

 

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  class Hero extends Humanoid{
    constructor(humanoidAttributes) {
        super(humanoidAttributes);
        this.good = humanoidAttributes.good;
    }

  }
  
  class Villain extends Humanoid{
    constructor(humanoidAttributes) {
        super(humanoidAttributes);
        this.bad = humanoidAttributes.bad;
    }

  }

  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 3,
      height: 3,
    },
    healthPoints: 10,
    name: 'King George',
    team: 'The Round Table',
    weapons: [
      'Sword',
      'Dagger',
    ],
    language: 'Royal Tongue',
  });

  const villian = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 4,
    },
    healthPoints: 15,
    name: 'The Destroyer of Worlds',
    team: 'The Exhild',
    weapons: [
      'Wand',
    ],
    language: [
      'Royal Tongue',
      'Common Tongue',
    ],
  });

  console.log(hero.createdAt); 
  console.log(villian.dimensions); 
  console.log(hero.healthPoints); 
  console.log(villian.name); 
  console.log(hero.team);
  console.log(villian.weapons);
  console.log(hero.language); 
  console.log(villian.greet()); 
  console.log(hero.takeDamage()); 
  console.log(villian.destroy()); 