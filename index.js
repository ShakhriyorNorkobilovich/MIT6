// Module package CORE

// Module package EXTERNAL

/**
const { v4: uuidv4 } = require("uuid");
const random = uuidv4();
console.log("random:",random);

const chalk = require('chalk');
const log = console.log;

log(chalk.red(`uuid creates ${random}`)); //('hello') + random + chalk.red((".!")));
*/




/** 
const validator = require('validator');
//const test = validator.isEmail('foo@bar.com');      
const test = validator.isIP("114.200.35.154a");//Int("100");
console.log('test', test);
*/


/** 
const inquirer = require('inquirer');
inquirer
.prompt([{type: 'input', name: 'raqam', message: "raqamni kiriting?"}])
.then(answer =>{
    console.log('man kiritgan raqam', answer.raqam);
})
.catch((err) => console.log(err));
*/





/** 
const moment = require ('moment');
//const time = moment ().format();//'YYYY-MM-DD');
//console.log(time);

setInterval(() => {
    const time = moment().format();//'YYYY-MM-DD');
    console.log(`hozirgi vaqt: ${time}`);
}, 5000);
*/

//const moment = require("moment");






// Module package FILE

//const calculate = require("./hisob.js");


/** 
const natija = calculate.kopaytirish(80, 20);
console.log('Natija', natija);
console.log('***************');

const natija_2 = calculate.qoshish(80, 20);
console.log('Natija', natija_2);
console.log('***************');

const natija_3 = calculate.ayirish(50, 20);
console.log('Natija', natija_3);
console.log('***************');

const natija_4 = calculate.bolish(100, 20);
console.log('Natija', natija_4);
console.log('***************');
*/

//console.log(arguments);



const Account = require("./account");
Account.telMeAboutClass();
Account.telMeTime();

console.log("======================");

const myAccount = new Account('Khan', 200000, 9879698696969867);
myAccount.giveMeDetails();

myAccount.makeDeposit(100000000000);

//yaht sotib olaman
myAccount.withdrawMoney(5600000000000);
myAccount.withdrawMoney(56000000);
myAccount.makeDeposit(100000000000);
