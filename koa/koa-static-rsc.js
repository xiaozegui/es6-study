const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const path = require('path');
const Static = require('koa-static')
const app = new Koa();

const staticPath = './page';
app.use(Static(path.join(__dirname,staticPath)));


app.use(async (ctx) => {
    ctx.body = 'h';
})

app.listen(5000);