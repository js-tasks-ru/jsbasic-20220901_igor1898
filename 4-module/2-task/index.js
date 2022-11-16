function makeDiagonalRed(table) {
  let rows = table.rows; // to get all rows
  let counter = 0; //
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].children.length; j++) {
      table.rows[i].children[counter].style.backgroundColor = "red";
    }
    counter++;
  }
}













// function makeDiagonalRed(table) {
//   let x = document.getElementsByTagName("td");
//   for (let i = 0; i < x.length; i++) {
//     if (x[i].textContent == "1:1") {
//       x[i].style.backgroundColor = "red";
//     } if (x[i].textContent == "2:2") {
//       x[i].style.backgroundColor = "red";
//     } if (x[i].textContent == "3:3") {
//       x[i].style.backgroundColor = "red";
//     } if (x[i].textContent == "4:4") {
//       x[i].style.backgroundColor = "red";
//     } if (x[i].textContent == "5:5") {
//       x[i].style.backgroundColor = "red";
//     }
//   } 
// }
// makeDiagonalRed(table);