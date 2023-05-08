class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  confrontaEta(user2) {
    if (this.age === user2.age) {
      console.log(
        `${this.firstName} e ${user2.firstName} hanno la stessa età.`
      );
    } else if (this.age > user2.age) {
      console.log(
        `${this.firstName} è più anziano di ${user2.firstName}.`
      );
    } else {
      console.log(
        `${this.firstName} è più giovane di ${user2.firstName}.`
      );
    }
  }
}

const user1 = new User("Giovanni", "Bianchi", 28, "Roma");

const user2 = new User("Maria", "Verdi", 34, "Milano");

console.log(user1.confrontaEta(user2));

