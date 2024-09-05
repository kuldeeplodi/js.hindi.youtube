//singleton
//object.create (this is a constructer method)

// object literals

const mysym=Symbol("mykey")
const Jsuser={
    name:"kuldeep",
    [mysym]:"mykey1",
    age:22,
    city:["agra","mathura","delhi"],
    email:"kuldeeplodhi@gmail.com"
}

// console.log(Jsuser["city"])
// console.log( Jsuser[mysym])

Jsuser.name="kumkum"

// Object.freeze(Jsuser)

Jsuser.name="jyoti"
// console.log(Jsuser)

Jsuser.greeting=function(){
    console.log("hello JS user")
}
Jsuser.greetingtwo=function(){
    console.log(`hello JS user ${this.name}`)
}

// console.log(Jsuser.greeting())
// console.log(Jsuser.greetingtwo())

/*****************Object part 2****************************************/

// const tinderUser=new Object() //singleton object
const tinderUser={}//non singleton object

tinderUser.id="232abd"
tinderUser.name="kuldeep"
tinderUser.email="kuldeep@gmail.com"



// const IGuser={
//     Id:34234,
//     fullname:{
//         username:{
//             firstname:"kuldeep",
//             lastname:"lodhi"
//         }
//     }
// }

// console.log(IGuser.fullname.username.lastname)


// const obj1={1:"a",2:"b"}
// const obj2={3:"d",4:"c"}
// const obj3={8:"o",6:"p"}

// const obj4={...obj1,...obj2,...obj3}
// console.log(obj4)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))//return array of keys
// console.log(Object.values(tinderUser))// return array of values
// console.log(Object.entries(tinderUser))//[[ 'id', '232abd' ],[ 'name', 'kuldeep' ],[ 'email', 'kuldeep@gmail.com' ]]


// console.log(tinderUser.hasOwnProperty("name"))//true


//de-structuring of object

const course={
    coursename:"javascript",
    price:"1999",
    courseInstructor:"kuldeep"

}

//course.courseInstructor

const {courseInstructor}=course
console.log(courseInstructor)
