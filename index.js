//Module package CORE
const fs = require ('fs');
const data = fs.readFileSync('./input.txt', 'utf8');
console.log(data);

console.log("********************");

fs.writeFileSync("./input.txt", `${data} \n\t\t by Bekzodali`)
const new_data = fs.readFileSync('./input.txt', 'utf8');
console.log(new_data);
/** 
let number = 0;
setInterval(function() {
    console.log("hisob", number);
    number++;
}, 1000);
*/


/** 
setTimeout(function(){
    console.log("ishga tushdi");
}, 5000);
*/


//Module package EXTERNAL




//Module package FILE
