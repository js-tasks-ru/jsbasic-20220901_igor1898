function showSalary(users, maxAge) {
  let showElements = [];
  for (let {name, age, balance} of users) {
    if (age <= maxAge) {
      showElements.push([`${name}, ${balance}`]);
    }
  }
  return showElements.join('\n');
}



// // function showSalary(users, age) {
// //   const result = users.reduce(function(acc, currentUser) {
// //     if (currentUser.age <= age) {
// //       const { name, balance } = currentUser;
// //       acc.push([`${name}, ${balance}`]);
// //     }
// //     return acc;
// //   }, []);

// //   return result.join('\n');
// }