//Array

const arr=[0,1,3,5,3,6]
console.log(arr[0])

const arr2 = new Array(3,5,2,7)
console.log(arr2)

// Array methods

// arr2.push(6)
// arr2.push(8)
// arr2.pop()

// arr2.unshift(4)//adding element at the begining
// arr2.shift()// remove element at the begining
// console.log(arr2.includes(5))
// console.log(arr2.indexOf(5))
// console.log(arr2)

// slice , splice

console.log("A",arr2)

const n1=arr2.slice(1,3)

console.log(n1)// [5,2]


console.log("B",arr2)
const n2=arr2.splice(1,3)
console.log("C",arr2)// [3]
console.log(n2)// [5,2,7]
