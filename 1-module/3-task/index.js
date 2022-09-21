function ucFirst(str = '') {
  if (str != '') {
    return str.charAt(0).toUpperCase([0]) + str.slice(1);
  } else {
    return '';
  }
}
ucFirst('Igor');
