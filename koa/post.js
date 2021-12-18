const Koa = require('koa');
const app = new Koa();
app.use(async (ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        let html = `
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
        //当请求时POST请求时
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        let data = await parsePostData(ctx);
        ctx.body = data;
    } else {
        //其它请求显示404页面
        ctx.body = '<h1>404!</h1>';
    }

    //ctx.req 原生request请求  ctx.request  koa2封装
    // 1、解析上下文ctx中的原生nodex.js对象req。
    // 2、将POST表单数据解析成query string-字符串.(例如:user=jspang&age=18)
    // 3、将字符串转换成JSON格式。
})

function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
           let postdata = '';
           ctx.req.addListener('data', (data)=>{
               postdata += data;
           })
           ctx.req.on('end', ()=>{
               let parseData = parseQueryStr(postdata);
               console.log(parseData);
               resolve(parseData);
           })
        } catch (error) {
            reject(error)
        }
    })
}

function parseQueryStr(querystring) {
    let queryData = {};
    let queryStrList = querystring.split('&');
    console.log(queryStrList);
    console.log(queryStrList.entries());
    for(let [index,queryStr] of queryStrList.entries()){
        let itemlist = queryStr.split('=');
        console.log(itemlist);
        queryData[itemlist[0]] = itemlist[1];
    }
    return queryData;
}

app.listen(5000);