const arr1 = [1, -2, 3, -4, 5, -6];
const arr2 = [2, 0, 26, 28, -2];

function mulOfArray(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i = i + 1) {
       if (arr[i] > 0) { // agar pada output hasil arr2 dari 0 menjadi 1456 mengubah kondisi yang asalnya >= 0 menjadi >0
       //  agar pada saat bilangan arr2 mengalikan bilangan harus lebih dari 0 sehingga menjadi 2 x 26 x 28 = 1456
           result = result * arr[i];
       }
    }
    
    return result;
}

// Panggil fungsinya
const arr1Result = mulOfArray(arr1);
const arr2Result = mulOfArray(arr2);
console.log(arr1Result);
console.log(arr2Result);