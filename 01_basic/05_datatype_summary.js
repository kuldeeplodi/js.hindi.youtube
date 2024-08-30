//primitive datatype

// 7 types: string ,boolean,number,Bigint,null,undefined,symbol

const score=100
const scorevalue=100.3

const isloggerin =false
const outsidetemp=null
let userEmail;

const id =Symbol('2123')
const anotherId = Symbol('2123')

console.log(id===anotherId)//false



//reference datatype or non primitive datatype

// array ,object,function

const arr =["kuldeep","aman","kumkum","pankaj"]

const object={
    name:"kuldeep",
    age:21

}

const myfun=function(){
    console.log("hello world")
}

console.log(typeof(outsidetemp))//object
console.log(typeof(object))//object
console.log(typeof(myfun))//function
console.log(typeof(userEmail))//undefined
console.log(typeof(scorevalue))//number

/*************************stack and heap********************************************* */

// stack (primitive),heap (non-primitive)

let myname= "kuldeep"
let othername = myname
othername="jyoti"


console.log(myname)//kuldeep
console.log(othername)//jyoti



let userone ={
    email:"kuldeep@gmail.com"
}
let usertwo=userone
usertwo.email="jyoti@gmail.com"

console.log(userone)//jyoti@gmail.com
console.log(usertwo)//jyoti@gmail.com

