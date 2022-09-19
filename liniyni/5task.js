// П'ята задача Уряд планує підвищити тарифи на газ на 23% і 15% на електроенергію. На скільки гривень зросте абонентна плата при вказаних об’ємах споживання (Х кубів газу, Y кіловат електроенергії)?

let gasPrice = parseFloat(prompt('Тариф газу за один куб'));
let userGasUsed = parseFloat(
  prompt('Введіть кількість кубів використаних користувачем')
);
let electricPrice = parseFloat(prompt('Тариф електроенергії за один кіловат'));
let userElectricUsed = parseFloat(
  prompt('Введіть кількість кіловат використаних користувачем')
);
let gasMonthPriceWithoutChanges = Math.round(userGasUsed * gasPrice);
let gasMonthPrice = Math.round(userGasUsed * (gasPrice / 0.77));
let change1 = gasMonthPrice - gasMonthPriceWithoutChanges;
let electricMonthPriceWithoutChanges = Math.round(
  userElectricUsed * electricPrice
);
let electricMonthPrice = Math.round(userElectricUsed * (electricPrice / 0.85));
let change2 = electricMonthPrice - electricMonthPriceWithoutChanges;
document.write(
  `Скільки ви заплатите без урахування змін в тарифі ${gasMonthPriceWithoutChanges} </br>`
);
document.write(
  `Скільки ви заплатите з урахуванням збільшення тарифів ${gasMonthPrice} </br>`
);
document.write(`Різниця ${change1} </br>`);
document.write(
  `Скільки ви заплатите без урахування змін в тарифі ${electricMonthPriceWithoutChanges} </br>`
);
document.write(
  `Скільки ви заплатите з урахуванням збільшення тарифів ${electricMonthPrice} </br>`
);
document.write(`Різниця в ${change2}`);
