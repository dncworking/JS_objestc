"use strict";

const persone = {
  firstName: "John",
  lastName: "Smith",
  age: 41,
  job: "engineer",
  city: "France",
};

function infoAboutTihisPerson(person) {
  const { firstName, lastName, age, job, city } = person;
  return `${firstName} ${lastName} is a ${age} old ${job} living in ${city}`;
}
console.log(infoAboutTihisPerson(persone));

