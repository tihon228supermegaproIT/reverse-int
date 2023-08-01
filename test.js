function reverse(number) {
  let reversedNumber = 0;
  let isNegative = number < 0;
  
  // Convert the number to positive if it is negative
  if (isNegative) {
    number *= -1;
  }
  
  // Reverse the digits of the number
  while (number > 0) {
    const digit = number % 10;
    reversedNumber = (reversedNumber * 10) + digit;
    number = Math.floor(number / 10);
  }
  
  // Convert the number back to negative if necessary
  if (isNegative) {
    reversedNumber *= -1;
  }
  
  return reversedNumber;
}
