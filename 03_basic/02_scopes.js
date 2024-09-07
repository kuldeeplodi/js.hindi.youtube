// function one(){
//     const name="kuldeep"
//     function two(){
//         const last_name="lodhi"
//         console.log(name)
//     }
//     // console.log(last_name) // give error
// two()
// }
// one()



if(true){
   const name="kuldeep"
   if(name==="kuldeep"){
    const last_name="lodhi"
    console.log(name+last_name)
   }
//    console.log(last_name)//give error

}
// console.log(name)//give error


/**************mini hoisting******************************************* */
sum_one(3)
function sum_one(num){
return num+1
}


const sum_two=function(num){
    return num+2

}
sum_two(6)