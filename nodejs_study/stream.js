const fs = require('fs');
const rs = fs.createReadStream('../static/domon/public/imgs/name.png');
const ws = fs.createWriteStream('../static/domon/public/imgs/name2.png');
rs.pipe(ws);