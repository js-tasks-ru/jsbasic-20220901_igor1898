function isEmpty(obj) {
  for (let property in obj) {
    return false;
  }
  return true;
}

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "подъём";
alert(isEmpty(schedule)); // false

