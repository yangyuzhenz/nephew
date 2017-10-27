//通过系统模块创建服务器
let http=require('http');
let server=http.createServer();

let url=require('url');

let fs=require('fs');

let path=require('path');

let mime=require('mime');

server.listen(3001,()=>{
  console.log('服务器已经启动');
});
//通过事件监听request
server.on('request',(req,res)=>{
  if(req.url=='/'){
    res.writeHeader(200,{
      'Content-Type':'text/html;charset=utf-8'
    })
      // console.log(req.url);
      //将HTML文件的内容响应到服务器上fs
    fs.readFile('./blog.html',(err,data)=>{
      if(!err){
        console.log(data);
        res.write(data);
        res.end();
      }
    })
      
  }else{
    let realPath=path.join('.',req.url);
    // console.log(realPath);
    fs.readFile(realPath,(err,data)=>{
      if(!err){
        res.writeHeader(200,{
          'Content-Type':mime.getType(realPath)
        })
        res.write(data);
        res.end();
      }
    })
  }
})
