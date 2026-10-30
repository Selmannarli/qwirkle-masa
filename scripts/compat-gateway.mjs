import http from 'node:http';import https from 'node:https';import {pathToFileURL} from 'node:url';
// Compatibility entry point only. All state and game decisions belong to the Renkio service.
export function compatibilityGateway(target=new URL('https://renkio.onrender.com')){
 return http.createServer((req,res)=>{
  if(!req.url.startsWith('/')||req.url.startsWith('//')){res.writeHead(400);res.end();return}
  if(req.headers.origin){let origin;try{origin=new URL(req.headers.origin)}catch{}if(!origin||origin.host!==req.headers.host){res.writeHead(403);res.end('Invalid request origin');return}}
  const headers={...req.headers,host:target.host};delete headers.connection;delete headers['proxy-authorization'];if(headers.origin)headers.origin=target.origin;
  const transport=target.protocol==='https:'?https:http;
  const upstream=transport.request(new URL(req.url,target),{method:req.method,headers},response=>{upstream.setTimeout(0);res.writeHead(response.statusCode,response.headers);res.flushHeaders();response.pipe(res);response.on('error',()=>res.destroy())});
  upstream.setTimeout(75000,()=>upstream.destroy(Error('Upstream timeout')));upstream.on('error',()=>{if(!res.headersSent){res.writeHead(502,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify({error:'Bağlantı yeniden kuruluyor. Biraz sonra tekrar dene.'}))}else res.destroy()});req.on('aborted',()=>upstream.destroy());res.on('close',()=>upstream.destroy());req.pipe(upstream);
 });
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)compatibilityGateway().listen(Number(process.env.PORT||3000),'0.0.0.0',()=>console.log('Renkio compatibility gateway ready'));
