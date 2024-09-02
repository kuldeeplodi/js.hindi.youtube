//Array

// const arr=[0,1,3,5,3,6]
// console.log(arr[0])

// const arr2 = new Array(3,5,2,7)
// console.log(arr2)

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

// console.log("A",arr2)

// const n1=arr2.slice(1,3)

// console.log(n1)// [5,2]


// console.log("B",arr2)
// const n2=arr2.splice(1,3)
// console.log("C",arr2)// [3]
// console.log(n2)// [5,2,7]

/***************Array part 2*************************************************** */

const marval=["ironman","hawkey","thor"]
const dc=["superman","batman","flash"]

// marval.push(dc)
// console.log(marval)// [ 'ironman', 'hawkey', 'thor', [ 'superman', 'batman', 'flash' ] ]

const all_hero=marval.concat(dc)
console.log(all_hero)// [ 'ironman', 'hawkey', 'thor', 'superman', 'batman', 'flash' ]

const all_new_hero=[...marval,...dc]// spread operator: expands an iterable object (like an array, string, or object literal) into its individual elements.
console.log(all_new_hero)//[ 'ironman', 'hawkey', 'thor', 'superman', 'batman', 'flash' ]

const another_array=[2,4,6,[2,6,3],7,9,[2,9,5,[4,6]]]
const real_array=another_array.flat(Infinity)// important
console.log(real_array)


console.log(Array.isArray("kuldeep"))//true or false
console.log(Array.from("kuldeep"))//convert into array
console.log(Array.from({name:"kuldeep"}))// interesting case and return empty array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))// convert multiple element into array


