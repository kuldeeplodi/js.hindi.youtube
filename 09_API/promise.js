// const promiseOne= new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("async coding")
//         resolve()  
//     }, 2000);
   
// })

// promiseOne.then(function(){
//     console.log("promise  1 resolve")
// })



// const promiseTwo= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("async coding")
//         resolve()  
//     }, 4000);
// }).then(()=>{
//     console.log("promise 2 resolve")
// })


// const promiseThree=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"kuldeep",email:"kuldeeplodi@gamil.com"})
//     },1000)
// })
// promiseThree.then((user)=>{
// console.log(user)
// })




// const promiseFour=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false
//         if(!error){
//             resolve({username:"kuldeep",email:"kuldeeplodi@gamil.com"})
//         }else{
//             reject('error! js went wrong')
//         }
//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username

// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// })


const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
                let error=true
                if(!error){
                    resolve({username:"kuldeep",email:"kuldeeplodi@gamil.com"})
                }else{
                    reject('error! js went wrong')
                }
            },1000)
})

async function promisehandle(){
    try{const response = await promiseFive
    console.log(response)}
    catch(error){
console.log(error)
    }
}
promisehandle()

// async function getAllUsers(){
//     const response = await fetch ("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     console.log(data)
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary'
).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch()