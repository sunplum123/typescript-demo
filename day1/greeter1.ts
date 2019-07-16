class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + middleInitial + lastName;
  }
}

interface Person {
  firstName: string;
  middleInitial: string;
  lastName: string;
}

function greet(person: Person) {
  return person.firstName + person.middleInitial + person.lastName;
}

let user = new Student('li', 'm.', 'yang');

document.body.innerHTML = greet(user);
