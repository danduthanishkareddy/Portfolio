const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.method==="GET"){
        res.write(JSON.stringify({Message:"Get Request Received"}));
        res.end()
    }
})
server.listen(3000,()=>{
    console.log("Server Is Running In The Port:3000")
});



// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.write("Hello From Backend");
//     res.end();
// })
// server.listen(3000,()=>{
//     console.log("Server Is Running In The Port:3000")
// });