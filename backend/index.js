const http=require('http');
const users=[
    {id:1,name:"Thanishka"},
    {id:2,name:"Thani"}
];
const server=http.createServer((req,res)=>{
    if(req.url==="/users" && req.method==="GET"){
        res.writeHead(200,{"Content-Type":"appilication/json"});
        res.end(JSON.stringify(users));
    }
});
server.listen(3001,()=>console.log("Server is running:3001"));