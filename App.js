require("./xyz");

//const {calculateSum}=require("./calculate/sum");
//const {calculateMultiply}=require("./calculate/multiply");
 
const{calculateSum,calculateMultiply}=require("./calculate");

const data=require("./data.json");
var a=10;
var b=20;

var name="satya krupa";

console.log(name);
calculateSum(a,b);
calculateMultiply(a,b);

console.log(data);