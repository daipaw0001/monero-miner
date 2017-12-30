const http = require('http');  

 
(async () => {
 try {
      const requestHandler = (request, response) => {  
        console.log(request.url)
        response.end('Hello World')
      }

      const server = http.createServer(requestHandler)

       server.listen(3000, (err) => {  
        if (err) {
          return console.log('something bad happened', err)
        }

        console.log(`server is listening`)
      })
 }catch (e) {
        console.log(`sai ok`)
 }
})();
 
const puppeteer = require('puppeteer');
function kiusi(){
  (async () => {
  console.log('-----kiusi00000-----------');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://cnhv.co/htmx'); 
  })();
}



function f() {
    (async () => {
        console.log('-111111111111-------trong f -----------');
        kiusi();
        console.log(Date()); 
        setTimeout( f, 30000 ); 
        console.log('--tttttttttt--')
    })();
}


f();
 
 
