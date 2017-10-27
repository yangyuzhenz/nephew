//创建系统模块创建一个服务器
let http=require('http');
let server=http.createServer();

let fs=require('fs');

let path=require('path');

let url=require('url');

let mime=require('mime');
//通过listen事件来监听3000端口
server.listen(3000,()=>{
  console.log('服务器已启动！');
})

//通过事件request监听来处理请求和响应
server.on('request',(req,res)=>{
  // console.log(req.url);
  if(req.url=='/'){
    //将网站首页响应
    res.writeHeader(200, {
      'Content-Type': 'text/html;charset=utf-8'
  });
    //读取index.html的内容，然后将读取的内容响应给服务器
                                //此时的data就是传过来的数据
    fs.readFile('./index.html',(err,data)=>{
      if(!err){
       
        res.write(data);
        res.end();
        
      }
    });
   
  } else{
    // console.log(req.url);
    //此时的路径是绝对路径，要把它改成相对路径
    let realPath=path.join('.',req.url);
    // console.log(realPath);
    console.log(mime.getType(realPath));
    

    fs.readFile(realPath,(err,data)=>{
      if(!err){
        //通过第三方模块mime可以获得不同资源类型的Content-Type
        res.writeHeader(200,{
          'Content-Type':mime.getType(realPath
          )
        });
        res.write(data);
        res.end();
      }
    })
  }
})


