const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const fs = require('fs');
const app = new Koa();

app.use(async (ctx) => {
    if(ctx.url === '/index') {
        ctx.cookies.set(
            'username','xiaoming',{
                domain:'127.0.0.1',
                maxAge:1000*60*60*24,
                expires:new Date('2021-12-28'),
                httpOnly:true,
                overwrite:false
            }
        );
        ctx.body = 'cookies is ok'
    }else{
        if(ctx.cookies.get('username')){
            ctx.body = ctx.cookies.get('username');
        }else{
            ctx.body = 'hello world';
        }
    }
})

app.listen(5000);