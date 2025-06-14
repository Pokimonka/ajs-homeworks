export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(member) {
      if (this.members.has(member)) {
        throw new Error('Есть уже');
      } else {
        this.members.add(member)
      } 
    }

    addAll(...members) {
      for (const i of members){
        if (!this.members.has(i)) {
          this.members.add(i);
        }
      }
    }

    toArray() {
      return [...this.members];
    }

    [Symbol.iterator] = function() {
        let members = [...this.members];
        let iter = 0;
        return {
            next() {
                if (iter < members.length) {
                    return {
                        done: false,
                        value: members[iter++]
                    }
                }
                return {
                    done: true,
                    value: undefined
                }
            }
        }
    }

}
