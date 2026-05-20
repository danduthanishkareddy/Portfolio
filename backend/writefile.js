const fs=require('fs');
// fs.writeFile("./test.txt","Hey You",(err)=>{
//     if(err)throw err;
//     console.log("File Updated");
// })

let data=fs.writeFileSync("./test.txt", "My name is thanishka");
console.log("File Updated");