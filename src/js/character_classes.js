// Base Class
class Character {
    constructor(name, type) {
      const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Name must be a string with length between 2 and 10 characters.');
      }
  
      if (!types.includes(type)) {
        throw new Error(`Type must be one of: ${types.join(', ')}`);
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = 0;
      this.defence = 0;
    }
  
    levelUp() {
      if (this.health === 0) {
        throw new Error("Can't level up a dead character.");
      }
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  
    damage(points) {
      if (this.health > 0) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) this.health = 0;
      }
    }
  }
  
  // Derived Classes
  class Bowman extends Character {
    constructor(name) {
      super(name, 'Bowman');
      this.attack = 25;
      this.defence = 25;
    }
  }
  
  class Swordsman extends Character {
    constructor(name) {
      super(name, 'Swordsman');
      this.attack = 40;
      this.defence = 10;
    }
  }
  
  class Magician extends Character {
    constructor(name) {
      super(name, 'Magician');
      this.attack = 10;
      this.defence = 40;
    }
  }
  
  class Daemon extends Character {
    constructor(name) {
      super(name, 'Daemon');
      this.attack = 10;
      this.defence = 40;
    }
  }
  
  class Undead extends Character {
    constructor(name) {
      super(name, 'Undead');
      this.attack = 25;
      this.defence = 25;
    }
  }
  
  class Zombie extends Character {
    constructor(name) {
      super(name, 'Zombie');
      this.attack = 40;
      this.defence = 10;
    }
  }
  
  // Export Classes (if using modules)
  module.exports = { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie };