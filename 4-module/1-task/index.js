function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  for (let i = 0; i < friends.length; i++) {
    let li = document.createElement('li');
    let friend = friends[i];
    li.innerHTML = `${friend.firstName}, ${friend.lastName}`;
    ul.appendChild(li);
  }
  return ul;
}
