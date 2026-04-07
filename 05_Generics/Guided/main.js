/**
 * @param {String} input
 * @returns {String}
 */
function fizzBuzz(input) {
  const deretLarik = input.split(" ");
  /** @type {Array<String>} */
  let hasil = "";

  for (const d of deretLarik) {
    const bil = +d;
    let fz = "";

    if (bil % 3 === 0) {
      fz += "Fizz";
    }
    if (bil % 5 === 0) {
      fz += "Buzz";
    }
    if (fz != "") {
      hasil += `${fz}`;
      continue;
    }
    hasil += bil;
  }

  return hasil;
}

console.log(fizzBuzz("1 2 3 4 5 15"));