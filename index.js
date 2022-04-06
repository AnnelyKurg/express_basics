let express = require('express');
//require path
const path = require('path')
const app = express();
//add public directory
app.use(express.static('public'));
//add views directory path
app.set('views', path.join(__dirname, 'views'));
//add view template engine
app.set('view engine', 'ejs')


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