const fs=require("fs");
// fs.appendFile("./text.txt","New Line Appended",(err)=>{
//     if(err)throw err;
//     console.log("Data Appended");
// })

let data=fs.appendFileSync("./test.txt","\nSecond Line Appended");
console.log("Data Updated");