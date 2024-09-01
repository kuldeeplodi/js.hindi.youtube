//Dates

let mydate=new Date()
console.log(mydate)//object
console.log(mydate.toDateString())// Sun Sep 01 2024
console.log(mydate.toISOString())// 2024-09-01T07:04:14.973Z
console.log(mydate.toJSON())// 2024-09-01T07:04:14.973Z
console.log(mydate.toLocaleDateString()) // 9/1/2024
console.log(mydate.toLocaleString())// 9/1/2024, 7:04:14 AM

const mycreatedate=new Date(2024,0,12,12,5)
console.log(mycreatedate.toLocaleString())//1/12/2024, 12:05:00 PM

let mytimestamp=Date.now()
console.log(mytimestamp)//1725175446565
console.log(mycreatedate.getTime())//1705061100000


let newdate = new Date()
newdate.toLocaleString('default',{
    weekday:"long"
})