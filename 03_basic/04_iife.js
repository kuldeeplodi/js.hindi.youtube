// Immediately Invoked Function Expressions (IIFE)

(function data(){
    console.log(`DB connected`)
})();

((name)=>{
    console.log(`DB connected ${name}`)
})("kuldeep")

//we use IIFE for prevention from globle pollution