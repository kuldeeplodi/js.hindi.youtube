// class user{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
   
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//    changeUsername(){
//     return `${this.username.toUpperCase()}`
//    } 
// }

// const chai=new user("kuldeep","kuldeep@gamil",124)
// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())


//behind the scene

function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

User.prototype.encryptPassword=function(){
return `${this.password}abc`
}
User.prototype.changeUsername=function(){
     return `${this.username.toUpperCase()}`
}


const tea=new User("kannu","kannu@gmail",232)
console.log(tea.encryptPassword())
console.log(tea.changeUsername())