import Swordsman from '../Swordsman'

test('The object Swordsman is created correctly', () => {
    const sword = new Swordsman('Sword');
    const correct = {
        attack: 40,
        defence: 10,
        health: 100, 
        level: 1,
        name: 'Sword',
        type: 'Swordsman'
    };
    expect(sword).toEqual(correct)
})

test('Change Swordsman level correctly', () => {
    const sword = new Swordsman('Sword');
    sword.levelUp();
    let correct = {
        attack: 48,
        defence: 12,
        health: 100, 
        level: 2,
        name: 'Sword',
        type: 'Swordsman'
    };
    expect(sword).toEqual(correct)
    sword.levelUp();
    correct = {
        attack: 57.6,
        defence: 14.4,
        health: 100, 
        level: 3,
        name: 'Sword',
        type: 'Swordsman'
    };
    expect(sword).toEqual(correct)

})

test('Swordsman damage correctly', () => {
    const sword = new Swordsman('Sword');
    sword.damage(6)
    const correct = {
        attack: 40,
        defence: 10,
        health: 94.6, 
        level: 1,
        name: 'Sword',
        type: 'Swordsman'
    };
    expect(sword).toEqual(correct)
})