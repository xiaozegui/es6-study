const koa = require('koa');
const Router = require('koa-router');

//实例化koa&&router
let app = new koa();
let router = new Router();

//路由表
router.get('/', ctx => {
    ctx.body = {msg: 'hello koa interface'}
})

//配置路由
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server running on ${port}`);
})