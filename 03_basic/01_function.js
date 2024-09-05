function add(num1,num2){
return num1+num2
}

console.log(add(2,4))


function loginUserMessage(username){
    if(!username){
     console.log("please enter a username")
     return
    }
       return `${username} just logged in`
}


console.log(loginUserMessage())// enter in if statement block
console.log(loginUserMessage("kuldeep"))



/***************************************************************/
// function calculateCartPrice(...num){
//     return num
// }
// console.log(calculateCartPrice(200,300,400,500))// return [ 200, 300, 400, 500 ]



// function calculateCartPrice(val1,val2,...num){
//     return num
// }
// console.log(calculateCartPrice(200,300,400,500))// return [ 400, 500 ]

const user={
    name:"kuldeep",
    age:23
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`)
}

handleObject(user)

const myNewArray=[233,554,644,334]
function  handleArray(getArray){
    return getArray[3]
}
console.log(handleArray(myNewArray))