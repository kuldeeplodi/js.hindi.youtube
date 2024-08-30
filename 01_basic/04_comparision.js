console.log("2">1)//true ( automatically convert into number)
console.log("02">1)//true


console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true

//the reason is that an equality check == and comparsion > < >= =< work differnet
// comparsions convert null to a ,treating it as 0.
//that's why (3)null >= 0 and (1) null >0 is false

console.log(undefined==0)//false
console.log(undefined >0)//false
console.log(undefined<0)//false