const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/todo_list_db');
const db = mongoose.connection;
// error
db.on('error',console.error.bind(console,'Error Connecting to DB'));
// up and running then message
db.once('open',function(){
    console.log('Successfully connected to the database');
});