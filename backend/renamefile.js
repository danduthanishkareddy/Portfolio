const fs=require("fs")
// fs.rename('test.txt','test2.txt',(err)=>{
//     if(err) throw err;
//     console.log("File Renamed")
// });

fs.renameSync('test2.txt','test.txt');
console.log("File Renamed");