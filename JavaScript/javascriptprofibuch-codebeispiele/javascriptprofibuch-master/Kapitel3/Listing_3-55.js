function Employee(firstName, lastName, id) {
  this._firstName = firstName;
  this._lastName = lastName;
  this._id = id;
}
Employee.prototype.getFirstName = function() {
  return this._firstName;
};
Employee.prototype.getLastName = function() {
  return this._lastName;
};
Employee.prototype.getId = function() {
  return this._id;
};
Employee.prototype.print = function() {
  return this._firstName + ' ' + this._lastName + ' (' + this._id + ')';
};

const max = new Employee('Max', 'Mustermann', 2345);
// Zugriff auf eine als private markierte Eigenschaft
max._firstName = 'Moritz';
console.log(max.getFirstName()); // Moritz
console.log(max.getLastName()); // Mustermann
console.log(max.getId()); // 2345
