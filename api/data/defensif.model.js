var mongoose = require('mongoose');

// Schema pour les personnages Defensif
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
