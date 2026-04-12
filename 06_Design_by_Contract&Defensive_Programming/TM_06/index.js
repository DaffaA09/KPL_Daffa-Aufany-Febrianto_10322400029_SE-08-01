function is_not_fizzbuzz(number) {
  // Validasi: harus bilangan bulat
  if (!Number.isInteger(number)) {
    throw new TypeError("Input harus bilangan bulat");
  }

  // Return true kalau bukan kelipatan 3 atau 5
  return !(number % 3 === 0 || number % 5 === 0);
}

// ================== TEST ==================
console.log(is_not_fizzbuzz(1))  // true
console.log(is_not_fizzbuzz(3))  // false
console.log(is_not_fizzbuzz(5))  // false
console.log(is_not_fizzbuzz(30)) // false
console.log(is_not_fizzbuzz(7))  // true

try {
  console.log(is_not_fizzbuzz(null))
} catch (e) {
  console.log("Error:", e.message)
}

try {
  console.log(is_not_fizzbuzz(NaN))
} catch (e) {
  console.log("Error:", e.message)
}

try {
  console.log(is_not_fizzbuzz(Infinity))
} catch (e) {
  console.log("Error:", e.message)
}