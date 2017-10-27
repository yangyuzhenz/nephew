//通过系统模块创建http服务器
let http=require('http');

let server=http.createServer();

server.listen(3000);
//通过事件监听来处理请求和响应request
//通过on实践来实现实践监听
server.on('request',(req,res)=>{
  //通过req来处理请求
  //通过res来处理响应

  //响应由状态行，响应头，响应主体构成
  //通过writeHead()来设置状态行和响应头
  res.writeHead(200,{
    'Content-Type':'text/html;charset=UTF-8'
  });
  res.write('你好哈哈');
  //终止响应
  res.end();
})

