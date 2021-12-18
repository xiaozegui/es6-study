const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const fs = require('fs');
const views = require('koa-views');
const path = require('path')
const app = new Koa();

app.use(views(path.join(__dirname,'./view'),{
    extension:'ejs'
}));

app.use(async (ctx) => {
    let title = 'hello world';
    await ctx.render('index',{
        title
    })
})

app.listen(5000);