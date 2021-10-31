// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Mike', 'mike@gmail.com', 9);
    
    expect(manager.officeNumber).Equal(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Mike', 'mike@gmail.com', 9);

    expect(manager.getRole()).toEqual("Manager");
}); 