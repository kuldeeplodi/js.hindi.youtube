class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
     this._email=value
    }
    get password(){
        return `${this._password}kuldeep`
    }
    set password(value){
        this._password=value
    }
}
const username=new user("kuldeep@gmail",323)
console.log(username.email)
console.log(username.password)