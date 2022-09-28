function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.substring(0, maxlength - 1) + '…'; 
  } return str;
} 


truncate('Всем привет!', 20);