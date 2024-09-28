// const user={
//     username:"kuldeep",
//     loginCount:4,
//     signedIn:true,

//     getuserdetails:function(){
//         console.log("got user details from database")
//         console.log(this)
//         console.log(`username:${this.username}`)
//     }
    
// }

// console.log(user.username)
// console.log(user.getuserdetails())
// console.log(this)


function user(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this
}

const userOne= new user("kuldeep",4,true)
const userTwo= new user("jyoti",5,false)

console.log(userOne)
console.log(userTwo)