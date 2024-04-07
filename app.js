const http=require('http')
const server=http.createServer((req,res)=>{

//res.setHeader('Content-Type','text/html')
//res.write('<html><head><title>My First Page</title></head><body><h1>Welcome to my Node Js project</h1></body></html>')
if(req.url==='/home')
res.write('Welcome home')
else if(req.url==='/about')
res.write('Welcome to About Us page')
else if(req.url==='/node'|| req.url==='/')
res.write('Welcome to my Node Js project')

res.end();
});
server.listen(4000)