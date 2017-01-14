var mongoose = require('mongoose');

var defensifSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    photo: String,
    Age: String,
    birthday: String,
    Arme: String

});

mongoose.model("defensif", defensifSchema, "defensif");
