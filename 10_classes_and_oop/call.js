function setUsername(username){
    // complex DB calls
    this.username=username
    console.log("called");
}

function createUser(username,email,password){
    setUsername.call(this,username)
    this.email=email
    this.password=password
}

const chai = new createUser("chai","kuldeep@create.com",242)
console.log(chai)