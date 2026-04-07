/**
 * Mengubah angka menjadi "Fizz", "Buzz", "FizzBuzz", atau tetap angka
 * @param {number} value - Bilangan bulat
 * @returns {number|string} "Fizz" jika kelipatan 3, "Buzz" jika kelipatan 5,
 * "FizzBuzz" jika kelipatan keduanya, atau angka itu sendiri
 */
function zzzzOrNum(value) {
    if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }
}

/**
 * Mengubah array angka menjadi array hasil FizzBuzz
 * @param {number[]} sequence - Array berisi bilangan bulat
 * @returns {(number|string)[]} Array hasil transformasi FizzBuzz
 */
function fizzBuzz(sequence) {
    const newSequence = sequence.map((e) => zzzzOrNum(e));
    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};

