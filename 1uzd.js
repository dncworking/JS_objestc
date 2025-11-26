"use strict";
const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
};
function listProperties(obj) {
  return Object.keys(obj).join(", ");
}

console.log(listProperties(student));
