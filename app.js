const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

// Using pug 
app.set('view engine','pug');
// assignment01
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public' + '/index.html'));
});

// assignment02
app.get('/getData', function (req, res) {
    const {number} = req.query;
    if(isNaN(number)===false && number>0){
        const returnNum = sumNum(number);
        res.send(`Result is ${returnNum}`)
        // console.log(number)
    }else if(!number){
        res.send(`<h1>Lack of Paramete</h1>`)
    }
    else{
        res.send(`<h1>Wrong Parameter</h1>`)
    }
});
//加總函式
function sumNum(number){
    let sum = 0;
    for(let i=0;i<= number;i++){
        sum += i;
    }
    return sum;
}
// assignment04
app.post('/trackName',function(req,res){
    res.cookie('username', req.body.username);
    res.redirect('/myName');
})
app.get('/trackName',function(req,res){
    res.render('trackName');
})
app.get('/myName',function(req,res){
    const name = req.cookies.username;
    if(name){
        res.render('myName',{name});
    }else if(!name){
      res.redirect('/trackName');
    }
})



app.listen(3000);
console.log('Running at Port 3000');
