
// 相当于 require('http');
let express = require('express');

// 相当于 createServer();
let app = express();

// 设置模板目录为 ./views
app.set('views','./views');

// 一个使用模板引擎 xtpl
// 模板后缀为 xtpl
// xtpl 模块不需要手动引入
// Express 内部负责自动引入的
app.set('view engine', 'xtpl');

// 监听端口
app.listen(3000);

// Express 没有内置模板引擎功能
// 但是它可以非常方便的支持其它模板引擎

// 客户端（浏览器）以get方式请求的时候
app.get('/', (req, res) => {
    // 封装后的相当于write + end
    // res.send('hello express!');
    res.render('add', {});
});

// 
app.post('/add', (req, res) => {
    res.send('hello express! post');
});