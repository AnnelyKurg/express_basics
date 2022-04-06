let express = require('express')
const app = express()
//require path
const path = require('path')

//add views directory path
app.set('views', path.join(__dirname, 'views'));
//add view template engine
app.set('view engine', 'ejs')


app.get('/questions', (req, res) => {

    let questions = [
        {title: "What in Node.js?", user : "Kadi", votes : "10"},
        {title: "What in Express.js?", user : "Mike", votes : "8"}
    ]
    //use this dta in template
    res.render('index', {questions:questions});
});

//listen app via port
app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});