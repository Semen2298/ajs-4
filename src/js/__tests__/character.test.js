import Character from '../class/Character';

test('should create character correctly', () => {
    const char = new Character('Hero', 'Bowman');
    expect(char).toEqual({ name: 'Hero', type: 'Bowman', health: 100, level: 1 });
});

test('should throw error on invalid name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow();
});

test('should throw error on invalid type', () => {
    expect(() => new Character('Hero', 'Unknown')).toThrow();
});

test('should level up character', () => {
    const char = new Character('Hero', 'Bowman');
    char.attack = 10;
    char.defence = 10;
    char.levelUp();
    expect(char.level).toBe(2);
    expect(char.attack).toBe(12);
    expect(char.defence).toBe(12);
    expect(char.health).toBe(100);
});

test('should not level up dead character', () => {
    const char = new Character('Hero', 'Bowman');
    char.health = 0;
    expect(() => char.levelUp()).toThrow();
});

test('should calculate damage correctly', () => {
    const char = new Character('Hero', 'Bowman');
    char.defence = 50;
    char.damage(40);
    expect(char.health).toBe(80);
});
