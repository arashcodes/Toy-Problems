function sameFrequency(number1, number2){
  // good luck. Add any arguments you deem necessary.
  let num1 = number1.toString();
  let num2 = number2.toString();
  let lookup = {};
  for (let dig of num1) {
      lookup[dig] = (lookup[dig] = lookup[dig] || 0) + 1;
  }
  for (let dig of num2) {
      if (!lookup[dig]) {
          return false;
      } else {
          lookup[dig]--;
      }
  }
  return true;
}

sameFrequency(182, 281); // true