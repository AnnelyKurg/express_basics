const express = require('express')
const app = express()
//require path
const path = require('path')

const podyParser = require('body-parser');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

//add views directory path
app.set('views', path.join(__dirname, 'views'));
//add view template engine
app.set('view engine', 'ejs')


app.get('/login', (req, res) => {

    //use this dta in template
    res.render('login');
});

app.post('/login', (req, res)=> {
    /*console.log('post request done')
    console.log(req.body)*/
    let username = req.body.username;
    let password = req.body.password;

    if(username === 'user' && password === 'qwerty'){
        res.redirect('/dashboard');
    }
});

app.get('/dashboard',(req, res)=> {
    res.render('dashboard');
})

//listen app via port
app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});