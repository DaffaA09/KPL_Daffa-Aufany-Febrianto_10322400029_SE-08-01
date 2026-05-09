import { plsv_dua, plsv_tiga, ptlsv_dua } from "persamaan";

const jawaban1 = plsv_dua("3x", 12);
const jawaban2 = plsv_tiga("x", -8, 10);

const jawaban3 = ptlsv_dua("-2x", 10, "<=", 4);

console.log("Jawaban 1:", jawaban1);
console.log("Jawaban 2:", jawaban2);
console.log("Jawaban 3:", jawaban3);