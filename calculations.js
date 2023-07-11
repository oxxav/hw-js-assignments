function increaseBalance(x, y) {
  x += y;
  return x;
}
console.log(increaseBalance(3000, 700));

function decreaseBalance(x, y) {
  // добавила второй параметр
  x -= y;
  return x;
}
console.log(decreaseBalance(3000, 700));

function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
  //console.log("x");--- После return функция возвращает результат и прекращает свою работу
}
console.log(divideBalanceByAccounts(3000, 2, 4000)); //  указано три параметра, а нужно два

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

function incr(x) {
  x++;
  return x;
}
console.log(incr(89));

function decr(x) {
  x--;
  return x;
}
console.log(decr(80 + 9));

console.log(getRestAfterDivision(7000, 3));
console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2, 4000));
console.log(getRestAfterDivision(7000, 3));
