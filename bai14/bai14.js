function checkFibo(n){
    if(n==1 || n==2 || n==3 || n== 0) return n
    else return checkFibo(n-1) + checkFibo(n-2)
}
var check = true;
let a = prompt("a = ")
if (a === '' || a === null) {
    console.log("Vui lòng nhập!");
    check = false;
} else if (isNaN(a)) {
    console.log("Nhập không đúng định dạng số!");
    check = false;
} else if (a <= 0) {
    console.log('Phải nhập số lớn hơn 0');
    check = false;
} else {
    a = Number(a);
}
let count = 0
if(check){
    for(let i = 0; i<=a; i++){
        if(a === checkFibo(i)){
            count++
        }
    }
    if(count ===1){
        console.log(a + " la so fibonaci")
    }
    else{
        console.log(a + " khong la so fibonaci")
    }
}
