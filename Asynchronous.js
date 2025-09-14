const https=require("https");
const fs = require("fs");   
var a=1234;
var b=5678;

/*https.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3924982&lng=78.46796379999999&restaurantId=547809&catalog_qa=undefined&submitAction=ENTER" , 
    (res)=>{
        console.log("The fetched restaurant name : " , res?.cards?.[2]?.card?.card?.info?.name);
    });*/


//blocking or sync function of read methode

fs.readFileSync("./text.txt" , "utf8");
console.log("The file data was read in synchronous way");



//async function
setTimeout(()=>{
    console.log("this is a setTimeOut function  executed in 3 seconds ");
},3000);


//async function
fs.readFile("./text.txt","utf8" , (err,data)=>
{
    if(err)
    {
         console.log("There is an error :" , err);
         return ;
    }
    console.log("The file data is :" , data);
})
function multiply(x,y)
{
    const result=x*y;
    return result;
}

var c=multiply(a,b);
console.log("The synchronous multiplication is : " , c);