function isPalindrome(num) {
    const str = num.toString();
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
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
if(check){
    if(isPalindrome(a)){
        console.log(a + " la so doi xung")
    }
    else{
        console.log(a+ " ko la so doi xung")
    }
} 