const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express();

// Service enpoints
app.use('/posts', createProxyMiddleware({ 
  target: 'http://localhost:4000', changeOrigin: true }
));

app.use('/comments', createProxyMiddleware({ 
  target: 'http://localhost:4001', changeOrigin: true }
));

app.use('/query', createProxyMiddleware({ 
  target: 'http://localhost:4002', changeOrigin: true }
));

app.use('/moderation', createProxyMiddleware({ 
  target: 'http://localhost:4003', changeOrigin: true }
));

app.use('/events', createProxyMiddleware({ 
  target: 'http://localhost:4005', changeOrigin: true }
));

// Proxy runs on 9000
app.listen(9000, () => {
  console.log('Proxy server running on 9000');
});