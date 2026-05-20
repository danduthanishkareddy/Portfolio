const fs=require("fs");
// fs.mkdir('newFolder/firstfolder/thirdfolder',{recursive:true},(err)=>{
//     if(err)throw err;
//     console.log("Folder Created");
// });


// fs.mkdirSync('newFolder2',{recursive:true});
// console.log("folder created");

fs.mkdirSync('Parent/Child/GrandChild',{recursive:true});
console.log("Nexted Folders Created");