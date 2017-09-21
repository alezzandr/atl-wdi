const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'hbs');
app.set('views','./views');

app.listen(port, () => {
    console.log('app is running on port ' + port);
});
