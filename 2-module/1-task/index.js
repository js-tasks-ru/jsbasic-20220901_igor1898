let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};


function sumSalary(salaries) {
  let sum = 0;
  for (const key in salaries) {
    if (isNaN(salaries[key]) === false && isFinite(salaries[key]) === true) { 
      if (typeof salaries[key] === "number") {
        console.log(salaries[key], key);
        sum = salaries[key] + sum;
      } 
    }
  } 
  return sum;
}
sumSalary(salaries);
