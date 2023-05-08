class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  confrontaEta(a) {
    if (this.age === a.age) {
      return console.log(
        `${this.firstName} e ${a.firstName} hanno la stessa età.`
      );
    } else if (this.age > a.age) {
      return console.log(`${this.firstName} è più anziano di ${a.firstName}.`);
    } else {
      return console.log(`${this.firstName} è più giovane di ${a.firstName}.`);
    }
  }
}

const user1 = new User("Ivan", "Iasnig", 24, "Trieste");

const user2 = new User("Pippo", "Baudo", 84, "Milano");

user1.confrontaEta(user2);
