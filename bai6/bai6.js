let a = prompt("a = ")
a = Number(a)
let b = prompt("b = ")
b = Number(b)
console.log("tich 2 so " + a*b)
if (b === 0){
    console.log("ko chia duoc")
}
else{
    console.log("thuong la " + (a/b).toFixed(2))
    console.log("phan du " + (a%b))
}