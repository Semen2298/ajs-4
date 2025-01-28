// Import classes for testing
const { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } = require('../character_classes');

test('should create a valid Bowman character', () => {
  const bowman = new Bowman('Robin');
  expect(bowman.name).toBe('Robin');
  expect(bowman.type).toBe('Bowman');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
});

test('should create a valid Swordsman character', () => {
  const swordsman = new Swordsman('Archer');
  expect(swordsman.name).toBe('Archer');
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});

test('should create a valid Magician character', () => {
  const magician = new Magician('Merlin');
  expect(magician.name).toBe('Merlin');
  expect(magician.type).toBe('Magician');
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});

test('should create a valid Daemon character', () => {
  const daemon = new Daemon('DemonKing');
  expect(daemon.name).toBe('DemonKing');
  expect(daemon.type).toBe('Daemon');
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);
});

test('should create a valid Undead character', () => {
  const undead = new Undead('ZombieLord');
  expect(undead.name).toBe('ZombieLord');
  expect(undead.type).toBe('Undead');
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});

test('should create a valid Zombie character', () => {
  const zombie = new Zombie('DeadWalker');
  expect(zombie.name).toBe('DeadWalker');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});

test('should throw error for invalid name', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters.');
});

test('should throw error for invalid type', () => {
  expect(() => new Character('Robin', 'InvalidType')).toThrow('Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('should level up a character', () => {
  const magician = new Magician('Gandalf');
  magician.levelUp();
  expect(magician.level).toBe(2);
  expect(magician.health).toBe(100);
  expect(magician.attack).toBeCloseTo(12);
  expect(magician.defence).toBeCloseTo(48);
});

test('should not level up a dead character', () => {
  const daemon = new Daemon('Balrog');
  daemon.health = 0;
  expect(() => daemon.levelUp()).toThrow("Can't level up a dead character.");
});

test('should apply damage correctly', () => {
  const zombie = new Zombie('ZombieKing');
  zombie.damage(50);
  expect(zombie.health).toBeCloseTo(55);
});

test('should not reduce health below zero', () => {
  const undead = new Undead('Mummy');
  undead.damage(1000);
  expect(undead.health).toBe(0);
});

// Дополнительные тесты на проверку типа каждого персонажа
test('should throw error for invalid name length', () => {
  expect(() => new Bowman('A')).toThrow('Name must be a string with length between 2 and 10 characters.');
});

test('should throw error for invalid type in Bowman class', () => {
  expect(() => new Bowman('Robin', 'InvalidType')).toThrow('Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});