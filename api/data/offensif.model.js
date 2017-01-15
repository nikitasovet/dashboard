var mongoose = require('mongoose');

// Schema pour les personnages Offensifs
var offensifSchema = new mongoose.Schema({
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

mongoose.model("offensif", offensifSchema, "offensif");
