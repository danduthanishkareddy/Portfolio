// const { error } = require('console');
const fs=require('fs');
// fs.unlink('./text.txt',(err)=>{
//     if(err)throw error;
//     console.log("File Deleted");
// })
fs.unlinkSync('random.txt');
console.log("File Deleted");