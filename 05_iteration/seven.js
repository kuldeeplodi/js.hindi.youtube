const mynum=[1,3,2,4,6,5,8]
const newnum=mynum.map((num)=>{

    return num+10
})
console.log(newnum)


//reduce((accumalater,currentvalue)=>{accumalater+currentvalue},initalvalue)

const total=mynum.reduce((acc,currval)=>{
    console.log(`acc:${acc} and currval:${currval}`)
    return acc+currval
},0)

console.log(total)


const shoppingCart=[
    {
    itemName:"java course",
    price:1000
},
    {
    itemName:"c++ course",
    price:1030
},
    {
    itemName:"c course",
    price:1200
},
    {
    itemName:"js course",
    price:10282
},
    {
    itemName:"python course",
    price:1342
}

]

const total_bill=shoppingCart.reduce((acc,item)=>{return acc+item.price},0)

console.log(`total bill is :${total_bill}`)