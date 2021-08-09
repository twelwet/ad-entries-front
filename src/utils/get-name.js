export const getName = (person) => {
  if (person.fullName) {
    return person.fullName;
  } else if (person.surname) {
    return person.surname;
  } else if (person.name) {
    return person.name;
  } else {
    return '-';
  }
};
