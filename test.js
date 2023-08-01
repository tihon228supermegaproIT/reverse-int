function reverse(number) {
  // Преобразуем число в строку
  var numString = number.toString();
  
  // Преобразуем строку в массив символов
  var numArray = numString.split("");
  
  // Меняем местами элементы массива
  numArray = numArray.reverse();
  
  // Преобразуем массив обратно в строку
  var reversedString = numArray.join("");
  
  // Преобразуем строку обратно в число
  var reversedNumber = parseInt(reversedString);
  
  // Возвращаем результат
  return reversedNumber;
}
  assert.equal(reversed, 535);
});
