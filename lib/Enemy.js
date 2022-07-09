const Potion = require('./Potion');
const Character = require('./Character');
//https://courses.bootcampspot.com/courses/2106/pages/10-dot-5-6-update-player-and-enemy-to-inherit-the-es6-way?module_item_id=555724

//What does that even mean? Because the Player class has its own constructor() method, JavaScript wants to ensure that the parent constructor 
//(in this case, the Character class) is properly initialized before Player starts assigning its own properties like this.inventory.
class Enemy extends Character {
  //Since Enemy also inherits from Character, call super(name) in the constructor() of the Enemy class. Note that Enemy will still
  // need to keep weapon and potion in its own constructor(), since those are unique to Enemy objects.
constructor(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  this.potion = new Potion();

  this.health = Math.floor(Math.random() * 10 + 85);
  this.strength = Math.floor(Math.random() * 5 + 5);
  this.agility = Math.floor(Math.random() * 5 + 5);
}


getDescription() {
  return `A ${this.name} holding a ${this.weapon} has appeared!`;
}
}

module.exports = Enemy;
