const books=[
    {
    title:'Book five',genre:'Science',publish:2009,edition:2014
},
    {
    title:'Book four',genre:'History',publish:2004,edition:2010
},
    {
    title:'Book six',genre:'Science',publish:1998,edition:2005
},
    {
    title:'Book seven',genre:'Fiction',publish:2009,edition:2014
},
    {
    title:'Book nine',genre:'non Fiction',publish:2001,edition:2007
},
    {
    title:'Book eight',genre:'History',publish:1999,edition:2010
},
]

const userBooks=books.filter((bk)=>{return bk.genre === 'Science'
})
console.log(userBooks)