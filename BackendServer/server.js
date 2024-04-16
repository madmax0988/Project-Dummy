const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()
const routes = require('./routes'); 
const bodyParser = require('bodyParser'); 

// Get request
app.get('/ping',(req,res)=>{
  res.json({message:'pong'});
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
