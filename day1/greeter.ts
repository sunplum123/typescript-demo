interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + person.lastName;
}
var user = { firstName: 'Yang', lastName: 1 };
document.body.innerHTML = greeter(user);
