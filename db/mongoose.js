const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pchettib:pchettib@cluster0.q77ow56.mongodb.net/budgetdata?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex : true
});