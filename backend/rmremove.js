const fs=require("fs");
fs.rmdir('newfolder2',(err)=>{
    if(err) throw error;
    console.log("Folder Deleted");
})

// fs.mkdirSync('newFolder2');
// console.log("Folder Deleted");