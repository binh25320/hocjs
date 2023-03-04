var check = true;
var a = prompt("a: ");
if (a === '' || a === null) {
    console.log("Vui lòng nhập a!");
    check = false;
} else if (isNaN(a)) {
    console.log("Nhập a không đúng định dạng số!");
    check = false;
} else if (a <= 0) {
    console.log('a phải lớn hơn 0');
    check = false;
} else {
    a = Number(a);
}
var b = prompt("Nhập b: ");

if (b === '' || b === null) {
    console.log("Vui lòng nhập b!");
    check = false;
} else if (isNaN(b)) {
    console.log("Nhập b không đúng định dạng số!");
    check = false;
} else if (b <= 0) {
    console.log('b phải lớn hơn 0');
    check = false;
} else {
    b = Number(b);
}
var c = prompt("Nhập c: ");

if (c === '' || c === null) {
    console.log("Vui lòng nhập c!");
    check = false;
} else if (isNaN(c)) {
    console.log("Nhập c không đúng định dạng số!");
    check = false;
} else if (c <= 0) {
    console.log('c phải lớn hơn 0');
    check = false;
} else {
    c = Number(c);
}
if(check){
    if(a + b > c && a + c > b && b + c > a){
        console.log("tao thanh 1 tam giac")
        if(a === b && a === c && c === b){
            console.log("tam giac deu")  
        }
        else if(a === b || a===c || b===c){
            console.log("tam giac can")
        }
        else if(a*a === b*b + c*c || b*b === a*a + c*c || c*c === a*a+b*b){
            console.log("tam giac vuong")
        }
    }
    else {
        console.log("ko tao ra tam giac")
    }
}