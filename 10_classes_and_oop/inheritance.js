class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class teacher extends user{
    constructor(username,email,password){
       super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const  chai=new teacher("chai")
chai.addCourse()


const  tea=new teacher("tea")
tea.addCourse()

// console.log(chai===tea)  false

// console.log(chai instanceof teacher)  true