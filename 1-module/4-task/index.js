function checkSpam(str) {
  let myStr = str.toLowerCase();
  let char = '1xBet'.toLowerCase();
  let char2 = 'XXX'.toLowerCase();
  return myStr.includes(char) || myStr.includes(char2);
}
checkSpam('free xxxxx');
 