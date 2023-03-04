let n = prompt("nhap n = ")
let dem = 0
var check = true
if (n === '' || n === null) {
    console.log("Vui lòng nhập!");
    check = false;
} else if (isNaN(n)) {
    console.log("Nhập không đúng định dạng số!");
    check = false;
} else if (n <= 0) {
    console.log('Phải nhập số lớn hơn 0');
    check = false;
} else {
    n = Number(n);
}
if(check){
    if(n < 2){
        console.log("no ko la so nguyen to")
    }
    else{
        for(let i = 1; i<=n ;i++){
            if(n % i === 0 ){
                dem++
            }
        }
        if(dem === 2){
            console.log("n la so nguyen to")
        }
        else{
            console.log("n khong la so nguyen to")
        }
    }
}