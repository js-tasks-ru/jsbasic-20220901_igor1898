function camelize(str) {
  const specialChar = `-`;
  let camelized = str.split(specialChar);
  for (let i = 1; i < camelized.length; i++) {
      let first = camelized[i][0].toUpperCase();
      let second = camelized[i].slice(1);
      camelized[i] = first + second;
  }
  return camelized.join('');
}


camelize('background-color');
camelize('list-style-image');
camelize('-webkit-transition');
