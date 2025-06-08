import Undead from '../Undead'

test('The object Undead is created correctly', () => {
    const undead = new Undead('Undead');
    const correct = {
        attack: 25,
        defence: 25,
        health: 100, 
        level: 1,
        name: 'Undead',
        type: 'Undead'
    };
    expect(undead).toEqual(correct)
})

test('Change Undead level correctly', () => {
    const undead = new Undead('Undead');
    undead.levelUp();
    let correct = {
        attack: 30,
        defence: 30,
        health: 100, 
        level: 2,
        name: 'Undead',
        type: 'Undead'
    };
    expect(undead).toEqual(correct)
    undead.levelUp();
    correct = {
        attack: 36,
        defence: 36,
        health: 100, 
        level: 3,
        name: 'Undead',
        type: 'Undead'
    };
    expect(undead).toEqual(correct)

})

test('Undead damage correctly', () => {
    const undead = new Undead('Undead');
    undead.damage(6)
    const correct = {
        attack: 25,
        defence: 25,
        health: 95.5, 
        level: 1,
        name: 'Undead',
        type: 'Undead'
    };
    expect(undead).toEqual(correct)
})