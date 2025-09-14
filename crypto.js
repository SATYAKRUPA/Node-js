//CRYPTO is core module which is given by node.js this is how we import that with require
const crypto=require("crypto");


//sync way
crypto.pbkdf2Sync("password", "salt" , 500000 , 50 , "sha512");
console.log("key is generated synchronously");
//async way of generating password through crypto


crypto.pbkdf2("password", "salt" , 500000 , 50 , "sha512" ,(err,res)=>
{
    console.log("key is generated asynchronously");
})