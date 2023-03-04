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
let sum = 0
if(check){
    for(let i = 1 ;i<a;i++){
        if(a%i===0){
            sum+=i
        }
    }
    if(sum === a){
        console.log("a la so hoan hao")
    }
    else{
        console.log("a ko la so hoan hao")
    }
}