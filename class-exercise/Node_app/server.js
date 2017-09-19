const express = require('express');
const app = express();
const hbs = require('hbs');
const todosController = require('./controllers/todos.js');
const usersController = require('./controllers/users.js');

app.listen(PORT, () => {
    console.log("Express is listening on port ", PORT);
})

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.use('/todos', todosController);
app.use('/users', usersController);ß