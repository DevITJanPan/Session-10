for (let number = 101; number < 1000; number++) {
    var firstNumber = number % 10;
    var secondNumber = Math.floor(number / 10) % 10;
    var thirdNumber = Math.floor(number/100) % 10;
    if (
      Math.pow(firstNumber, 3) +
        Math.pow(secondNumber, 3) +
        Math.pow(thirdNumber, 3) ==
      number
    ) {
      console.log(number);
    }
  }