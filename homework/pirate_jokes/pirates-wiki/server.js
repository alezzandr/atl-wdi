const express = require('express');
const app = express();
const port = 8000;
const piratesController = require('./controllers/pirates');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.set('view engine', 'hbs');
app.set('views','./views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));
app.use('/pirates', piratesController);

app.listen(port, () => {
    console.log('app is running on port ' + port);
});