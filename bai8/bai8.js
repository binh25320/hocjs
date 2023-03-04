let a = prompt("a = ")
a = Number(a)
let b = prompt("b = ")
b = Number(b)
if(a === 0){
    if( b ===0){
        console.log("vo so nghiem")
    } 
    else{
        console.log("vo nghiem")
    }
}
else{
    console.log((-b/a).toFixed(2))
}
