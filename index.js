const fs = require("fs");
const https = require('https');
const privat = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3";
const http=require('http');



http.createServer(function(req,res){
  

https.get(privat, (res) => {              // второй метод
 res.on('data', (url) => {
  fs.writeFileSync('index.html',url)
 });
})

let page = fs.readFileSync('index.html', 'utf8');
res.setHeader("Content-Type", "application/json");
   res.end(page);
}).listen(3000,function(){
  console.log('server at ');
})