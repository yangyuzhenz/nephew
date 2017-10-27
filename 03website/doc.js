let http=require('http');
let server=http.createServer();

let url=require('url');

let fs=require('fs');

let path=require('path');

let mime=require('mime');

//监听
server.listen(3002,()=>{
  console.log("服务器已经启动");
})
//通过request事件监听请求和响应
server.on('request',(req,res)=>{
  // console.log(req.url);
  // console.log(req.method);

  if(req.url=='/'){
    //将页面响应给浏览器
      //设置响应头
      res.writeHeader(200,{
        'Content-Type':'text/html;charset=utf-8'
      });
      //读取doc.html页面，将其响应给浏览器fs
      fs.readFile('doc.html',(err,data)=>{
       if(!err){
        res.write(data);
        res.end();
       }
      })
      
  }else{
    //需要将绝对路径拼接成相对路径
    let realPath=path.join('.',req.url);
    // console.log(realPath);
    console.log(mime.getType(realPath));

    //设置响应头----------------------------------------------
    //为什么500的时候图片可以出来
    res.writeHeader(200,{
      "Content-Type":mime.getType(realPath)
    });
    //将读取的页面响应给浏览器
    fs.readFile(realPath,(err,data)=>{
      if(!err){
        res.write(data);
        res.end();
      }
    })
  }
  // res.write('哈哈');
  // res.end();
})