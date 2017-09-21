const express = require('express');
const app = express();
const port = 3000;
const recipesController = require('./controllers/recipes');
const bodyParser = require('body-parser');
app.set('view engine', 'hbs')


/*app.get('/recipes', (req, res) => {
    res.send('sasaa')
})*/
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/recipes',recipesController);

app.listen(port, (req, res) => {
 console.log('app is running' + port)

})