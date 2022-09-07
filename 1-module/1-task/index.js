function factorial(n) {
  if (n === 0 || n === 1)
    return 1;
  for (let x = n - 1; x >= 1; x--) {
    n = n * x;
  }
  return n;
}
factorial(5);

