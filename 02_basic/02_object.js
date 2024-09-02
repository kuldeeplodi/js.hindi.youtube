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

console.log(Jsuser["city"])
console.log( Jsuser[mysym])

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

console.log(Jsuser.greeting())
console.log(Jsuser.greetingtwo())

/*****************Object part 2****************************************/

// const tinderUser=new Object() //singleton object
const tinderUser={}//non singleton object

tinderUser.id="232abd"
tinderUser.name="kuldeep"
tinderUser.email="kuldeep@gmail.com"
console.log(tinderUser)



