const score=399
console.log(score)

const balance =new Number(200)
console.log(balance)


console.log(balance.toString().length)// 200 is string and return 3 length
console.log(balance.toFixed(2))// 200.00

const otherNumber=123.8423
console.log(otherNumber.toPrecision(3)) // 124

const hundreds=100000
console.log(hundreds.toLocaleString("en-IN"))// in indian format 1,00,000


/********************maths************************************** */

console.log(Math)// object {}
console.log(Math.abs(-5))// 5
console.log(Math.round(4.8))// 5 max and min
console.log(Math.ceil(4.4))//5 max
console.log(Math.floor(4.9))// 4 min

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)


const min =10
const max =20
console.log(Math.floor(Math.random() * (max-min+1)) + min)