const name ="kuldeep"
const repocount=43
console.log(`this is my name ${name} and my repo count is ${repocount}`)


const gameName=new String("kuldeep_lodhi_01")

console.log(gameName[0])// k
console.log(gameName.__proto__)// object {}
console.log(gameName.length)// 7
console.log(gameName.toUpperCase())// KULDEEP
console.log(gameName.charAt(2))// character access 'l'
console.log(gameName.indexOf('d'))// 3

const newstring=gameName.substring(6,9)//
console.log(newstring)

const anotherstring= gameName.slice(-16,4)//slice the string
console.log(anotherstring)

const newstringone = "  kuldeep lodhi  "
console.log(newstringone)
console.log(newstringone.trim())// it remove the space at begin and last of string


const url="htttp://kuldeep.com/kuldeep&29lodhi"
console.log(url.replace('&29','_')) 


console.log(url.includes("lodhi"))// true
console.log(url.includes("jyoti"))// false

console.log(gameName.split("_"))//split on the basic of '_' into array