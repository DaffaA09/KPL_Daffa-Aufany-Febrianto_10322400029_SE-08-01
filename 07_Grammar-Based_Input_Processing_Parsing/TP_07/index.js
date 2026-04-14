function toNumberArray(input) {
  let arr;

  if (typeof input === "string") {
    arr = input.split(",");
  }
  else if (Array.isArray(input)) {
    arr = input;
  }
  else {
    throw new TypeError("Input harus string atau array");
  }

  return arr
    .map(item => item.toString().trim())   
    .map(item => Number(item))            
    .filter(item => !isNaN(item));         
}


console.log(toNumberArray("1, 2"))           
console.log(toNumberArray(["1", "2"]))       
console.log(toNumberArray(" 11,55,33 "))     
console.log(toNumberArray(["0.2", "-11", "abc23"])) 