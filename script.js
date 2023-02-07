let a = document.getElementById("inputA").value;
let b = document.getElementById("inputB").value;
let result = document.getElementById("result");
a = Number(a);
b = Number(b);
let c = a + b;
console.log(result);
result.innerText = c;