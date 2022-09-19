//ТРЕТЯ ЗАДАЧА З клавіатури вводиться арендна плата за квартиру (за 1 місяць). Визначити скільки треба заплатити за 1 рік, за 2 роки та 10 років.

let monthRent = parseFloat(prompt('Орендна плата за місяць'));
let oneYearRent = monthRent * 12;
let twoYearsRent = monthRent * 24;
let tenYearsRent = monthRent * 120;
document.write(`Орендна плата за рік = ${oneYearRent} </br>`);
document.write(`Орендна плата за два роки = ${twoYearsRent}</br>`);
document.write(`Орендна плата за десять років = ${tenYearsRent}</br>`);
