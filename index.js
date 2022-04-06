let express = require('express');
const app = express();
//add public directory
app.use(express.static('public'));
/*//set up brouther address row router
app.get('/', (req, res)=> {
//create html response
    res.send('<a href="/contact">Contact Us</a> <br> <a href="/about">About Us</a>');
});

app.get('/contact', (req, res)=> {
    res.send('<h1>Contact Us Page</h1>');
});

app.get('/about', (req, res)=> {
    res.send('<h1>About Us Page</h1>');
});

app.get('*', (req, res)=> {
    res.send('404. This page does not exist. <a href="/">Go To HomePage</a>');
});*/

/*app.get('/demo', (req, res)=> {
//create html response
    res.render('index.ejs');
});*/

app.get('/user/:username', (req, res) => {
    //get parameter data from addressrow
    let user = req.params.username;
    //use this dta in template
    res.render('index.ejs', {username : user});
});

//listen app via port
app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});