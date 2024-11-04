// 1. Перепишите функцию echo таким образом,
// чтобы вместо any в ней использовался дженерик.

function echo<Type>(something: any): any {
    return something;
  }
  
  // 2. Создайте стрелочную функцию echo2 c
  // аналогичным функционалом.
  
  const echo2 = (something: any): any => {
    return something;
  }