function greeter(person) {
    return 'Hello, ' + person.firstName + person.lastName;
}
var user = { firstName: 'Yang', lastName: 1 };
document.body.innerHTML = greeter(user);
