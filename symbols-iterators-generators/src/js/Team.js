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

    *[Symbol.iterator]() {
        for (const member of this.toArray()) {
            yield member;
        }
    }

}