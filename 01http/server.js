let http=require('http');

let url=require('url');

let querystring=require('querystring');

let server=http.createServer();

server.listen(3000,(err)=>{
  console.log('服务器已经启动');
});

server.on('request',(req,res)=>{
  //请求
  //请求行，请求头，请求主体

  //请求行由请求方式+请求地址

  //通过req.method可以获得请求方式
  // console.log('您的请求方式为',req.method);

  //通过req.url获取请求地址
  console.log('您的请求地址为',req.url);

  //通过req.headers获取请求头
  // console.log('您的请求头为',req.headers);

  //当 请求方式为post时，才会有请求主体（请求主体中主要是参数）
  //当数据以post方式上传时会触发data事件
  var formData='';
  req.on('data',(chunk)=>{
    // console.log(chunk);
    formData+=chunk;
  })
  // // //当post数据传输完毕时，会触发另一个事件end
  req.on('end',()=>{
  console.log(formData);
  //得到的数据为字符串，使用不方便，可以使用系统模块queryString来解析
  let params=querystring.parse(formData);
  console.log(params);  
  
  })
  
  
  
  // //当请求方式为get时，没有请求主体，参数放到地址上的
  // //如果get方式请求，可以通过解析地址获取参数
  // //Nodejs提供了专门模块url(系统模块)来解析地址上的参数
  let params=url.parse(req.url,false);//true:字符串转json
  console.log(params);
  
  // 请求头 键值对
  //请求主体get方式没有请求主体post可以有
  res.end();
})

