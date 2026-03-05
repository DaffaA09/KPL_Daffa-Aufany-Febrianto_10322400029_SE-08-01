function fizzBuzz(arr) {
  let hasil = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 14 === 0) {
      hasil += "FizzBuzz";
    } 
    else if (arr[i] % 2 === 0) {
      hasil += "Fizz";
    } 
    else if (arr[i] % 7 === 0) {
      hasil += "Buzz";
    } 
    else {
      hasil += arr[i];
    }

    if (i !== arr.length - 1) {
      hasil += " ";
    }
  }

  return hasil;
}

module.exports = fizzBuzz;