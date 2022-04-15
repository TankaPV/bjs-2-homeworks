"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let d;

  d = Math.pow(b,2) - 4*a*c;

  if (d > 0) {

    arr.push((-b + Math.sqrt(d))/2*a);
    arr.push((-b - Math.sqrt(d))/2*a);

  } else if (d === 0) {

    arr.push(-b/2*a);
  }
  

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  let S, P, months, percentS, contributionS, amountS;

  percentS = parseInt(percent);
  contributionS = parseInt(contribution);
  amountS = parseInt(amount);

  if (Date.parse(date) > Date.parse(Date()) + 2592000000) {

    if (isNaN(percentS)) {

      return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;

    } else if (isNaN(contributionS)) {

      return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;

    } else if (isNaN(amountS)) {

      return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;

    } else {

      months = Math.trunc((Date.parse(date) - Date.parse(Date()))/2592000000);

      S = amountS - contributionS;

      P = percentS/12/100;

      totalAmount = Number(((S * (P + (P / (Math.pow((1 + P),months) - 1))))*months).toFixed(2));

      return totalAmount;  
    }

  } else {

    return alert('Выбрана неверная дата срока ипотеки');

  } 
  
}
