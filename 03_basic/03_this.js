// this variable refer to current context

// const user={
//     name:"kuldeep",
//     age:23,
//    welcome: function(){
//          console.log(`${this.name}, welcome to website`)
//          console.log(this) //objects of current context
//    }
  
// }

// user.welcome()
// user.name="sam"//current context is change
// user.welcome()

// console.log(this)// empty object



// function obito(){
//     let name="obito"
//     console.log(this.name)// undefined
//    console.log(this)//objects of current context
// }
// obito()




// const obito=function(){
//     let name="obito"
//     console.log(this.name)//undefined
//     console.log(this)//objects of current context
// }
// obito()



// const obito=()=>{
//     let name="obito"
//     console.log(this.name)//undefined
//     console.log(this)// {}
// }
// obito()


// const add=(num1,num2)=>{    //explicit return
// return num1+num2
// }

// const add=(num1,num2)=>(num1+num2) //implicit return

// const add=(num1,num2)=>({name:"kuldeep"})

// console.log(add(3,4))