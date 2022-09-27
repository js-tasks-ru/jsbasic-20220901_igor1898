function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.substring(0, maxlength - 1) + '…'; 
  } else {
    return str;
  }
}
truncate('Вот, что мне хотелос…', 20);