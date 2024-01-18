import inquirer from "inquirer";

console.log("Welcome to Islamic Bank")
interface user {
    
    
    acounttype: string,
    transsitiontype:string,
    amount: number
}
let ans = await inquirer.prompt([{
    name : "userid",
    type : "input",
    message: " Please the inter your Account Number "

},
{
    name : "userpin",
    type : "input",
    message: " Please the inter your Pin "

}])
if (ans.userid == "sharifhussain" && ans.userpin == 12345){


let answer : user= await inquirer.prompt([

{
    name : "acounttype",
    type : "list",
    message: " Please Select the Account Type ",
    choices:[" Current","Saving"]
},

{
    name : "transsitiontype",
    type : "list",
    message: " Please the inter your id ",
     choices: [ " Fast Cash","With Draw",],
     when( answer){
        return answer.acounttype;
     }
      
},
{
    name : "amount",
    type : "list",
    message: " Please Select the amount ",
     choices: [ 1000,2000,3000,4000,5000,6000,7000,8000,9000,10000],
     when( answer){
        return answer.transsitiontype == " Fast Cash";
     }
},{
    name : "amount",
    type : "number",
    message: " Please the inter your amount ",
    when( answer){
        return answer.transsitiontype ;
     }
}])

const balance = Math.floor(Math.random()*100000)

const enteramount = answer.amount ;

if (ans.userid == "sharifhussain" && ans.userpin == 12345){
console.log(" Proscessing request")
  console.log(" Your Current Balance is :PKR ",balance.toLocaleString())

  if (balance >=enteramount){
    console.log( `your acount has been debited with Rs${enteramount} and your remaining balance is ${balance-enteramount}`);
}else{
    console.log(`Insufficient Balance Please Try again lower amount`)


 }
   }else{
    console.log(`Worng Password`)

   }
   
   let bb = await inquirer.prompt([{
    name : "use",
    type : "list",
    message: " Get the recipt ",
      choices:["Yes","No"]
}])
if(bb.use == "Yes"){
 console.log(new Date,answer)

}else{
    console.log("ok")

}
}else{
    console.log("Wrong password.. Please try again")
}