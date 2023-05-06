const http = require('http')
const server = http.createServer((req, res)=>{
  if(req.url==='/'){
    res.write('hello there\nyour are in the home page')
    res.end()
  }
  else if(req.url==='/about'){
    res.end('you are in the about page')
  }else{
  res.end(
    `<h1>Oops!</h1>
    <p>there is no such a page</p>
    <p>you can go to home page clicking this </p><a href='/'>HOME</a>`)}
})
server.listen(3000)