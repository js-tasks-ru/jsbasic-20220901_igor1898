let calculator = {
  firstNumber: null,
  secondNumber: null,
  read (a, b) {
    calculator.firstNumber = a;
    calculator.secondNumber = b;
  },
  sum (a, b) {
    total = calculator.firstNumber + calculator.secondNumber
    return total;
  },
  mul (a, b) {
    total = calculator.firstNumber * calculator.secondNumber
    return total;
 
  }
};
calculator.read(3, 5);
console.log(calculator.sum()); // 8
console.log(calculator.mul()); // 15

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
