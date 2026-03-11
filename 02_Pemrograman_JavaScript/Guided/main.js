// Penugasan 1

let listMinuman = ["Es Teh", "Teh Anget", "Es Teh Anget"];

listMinuman[0] = "Sprit";
listMinuman[1] = "Fanta";

listMinuman.push("Yakult");

listMinuman.shift();

listMinuman.unshift("Coca-Cola");

console.log(listMinuman);

// Penugasan 2

function jumlah(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total = total + i;
    }

    return total;
}

console.log(jumlah(5));