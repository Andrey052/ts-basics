const city = "London";
const country = "Great Britain";
let region: any = 161;

// 1. Сравните типы переменных city и country,
// результат сравнения запишите в переменную
// isSameTypes
// 2. Приведите тип переменной region таким
// образом, чтобы результат сравнения типов
// переменных city и region был равен true,
// запишите результат сравнения в переменную
// isSameTypes

// 1. Сравниваем типы переменных city и country
let isSameTypes = typeof city === typeof country;
console.log(isSameTypes);

// 2. Приводим тип переменной region к строке
region = String(region);

// Сравниваем типы переменных city и region
isSameTypes = typeof city === typeof region;
console.log(isSameTypes);