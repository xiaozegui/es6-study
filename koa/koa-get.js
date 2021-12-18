const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    let url = ctx.url;
    let req = ctx.request;
    let req_query = req.query;
    ctx.body = {
        url,
        req_query
    }
})

app.listen(5000);