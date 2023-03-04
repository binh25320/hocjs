function check(n){
    if(n%2 === 1){
        return console.log("n le")
    }
    else{
        console.log("n chan")
    }
}
n = prompt("nhap n = ")
n = Number(n)
check(n)