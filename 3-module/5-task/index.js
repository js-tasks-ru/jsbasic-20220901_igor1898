let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(inputData) {
  let numbers = [];
  let breakpoint = " ";
  let splitted = inputData.split(breakpoint);
  let max = inputData.split(breakpoint)[0];
  let min = inputData.split(breakpoint)[0];
  for (let i = 0; i < splitted.length; i++) {
    if (+splitted[i] == splitted[i]) { // converts the current string to a number and compares it with the string value of it. If they are equal, then it means that the current element is a digit.  
      numbers.push(splitted[i]);
      if (max < +splitted[i]) {
        max = +splitted[i];
      }

      if (min > +splitted[i]) {
        min = +splitted[i];
      }
    }
  }
  let results = ({min, max});
  return results;
    
}

console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }