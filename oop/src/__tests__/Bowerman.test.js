import Bowerman from "../Bowerman";

test('The object is created correctly', () => {
    const bowerman = new Bowerman('Bowman');
    const correct = {
        attack: 25,
        defence: 25,
        health: 100, 
        level: 1,
        name: 'Bowman',
        type: 'Bowerman'
    };
    expect(bowerman).toEqual(correct)
})

test('Change level correctly', () => {
    const bowerman = new Bowerman('Bowman');
    bowerman.levelUp()
    const correct = {
        attack: 30,
        defence: 30,
        health: 100, 
        level: 2,
        name: 'Bowman',
        type: 'Bowerman'
    };
    expect(bowerman).toEqual(correct)
})

test('damage correctly', () => {
    const bowerman = new Bowerman('Bowman');
    bowerman.damage(10)
    const correct = {
        attack: 25,
        defence: 25,
        health: 92.5, 
        level: 1,
        name: 'Bowman',
        type: 'Bowerman'
    };
    expect(bowerman).toEqual(correct)
})