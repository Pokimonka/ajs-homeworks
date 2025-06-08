import Character from "../character";


test('throw exception when name == null', () => {
    expect(() => new Character()).toThrow();
})

test('throw exception when name < 2', () => {
    expect(() => new Character('y')).toThrow();
})

test('throw exception when name > 10', () => {
    expect(() => new Character('abcdefghijklmno')).toThrow();
})

test('Character level Up with health == 0', () => {
    const ch = new Character('Test');
    ch.health = 0;
    expect(ch.levelUp).toThrow();
})

test('Character damage with health < 0', () => {
    const ch = new Character('Test');
    ch.health = -8;
    ch.damage(7);

    expect(ch.health).toEqual(-8);
})