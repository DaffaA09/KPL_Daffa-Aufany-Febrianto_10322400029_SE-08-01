function hitung(str, tipe) {
    let count = 0;

    for (const c of str) {
        if (tipe === "huruf" && c === ' ') {
            continue;
        }
        count++;
    }

    return count;
}

const str = "Bar bar bar";

console.log(
   hitung(str, "semua") 
);

console.log(
   hitung(str, "huruf") 
);

hitung(str, "huruf"); 