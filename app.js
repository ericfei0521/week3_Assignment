const express = require('express');
const app = express();
const path = require('path');
// assignment01
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views'+'/index.html'));
});


app.listen(3000);
console.log('Running at Port 3000');