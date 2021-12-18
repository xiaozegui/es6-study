const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const Router = require('koa-router')

const app = new Koa();

//子级路由
let home = new Router();
home
    .get('/home1',(ctx,next) => {
        ctx.body = 'child router home home1'
    })
    .get('/home2',(ctx,next) => {
        ctx.body = 'child router home home2'
    })

let page = new Router();
page
    .get('/page1',(ctx,next) => {
        ctx.body = 'child router page page1'
    })
    .get('/page2',(ctx,next) => {
        ctx.body = 'child router page page2'
    })

//父级路由
let router = new Router();
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());

router
    .get('/', (ctx, next) => {
        ctx.body = 'hello world';
    })

app
    .use(router.routes())
    .use(router.allowedMethods());

app.use(bodyparser());

app.use(async (ctx) => {
    let url = '';
})

app.listen(5000);