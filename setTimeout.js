var a=1234;
var b=5678;

function multiply(x,y)
{
    const result=x*y;
    return result;
}

var c=multiply(a,b);
console.log("The synchronous multiplication is : " , c);

setTimeout(()=>
{
    console.log("call me rigth now in 0 seconds ...!!!! ");
},0);

setTimeout(()=>
{
    console.log("call me after 3 seconds");
},3000);