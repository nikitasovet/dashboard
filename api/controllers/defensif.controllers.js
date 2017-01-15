var mongoose = require('mongoose');
var Defensif = mongoose.model('defensif'); // Import du schema Defensif


// Cette méthode retourne tous les personnages Défensifs
module.exports.defensifGetAll = (req, res) => {
    Defensif
        .find()
        .exec(function(err, defensifs) {
            if (err) {
                console.log("Error finding defensifs");
                res
                    .status(500)
                    .json(err);
            } else {
                console.log("Found defensifs", defensifs.length);
                res
                    .json(defensifs);
            }
        });
};

// Cette méthode retourne un seul personnage Défensif en fonction de l'ID en paramètre
module.exports.defensifGetOne = (req, res) => {
    var id = req.params.defensifId;
    
    Defensif
        .findById(id)
        .exec(function(err, defensif) {
            if (err) {
                console.log("Error finding defensif");
                res
                    .status(500)
                    .json(err);
            } else if (!defensif) {
                console.log("defensifId not found in database", id);
                res
                    .status(400)
                    .json(err);
            }
            res
                .status(200)
                .json(defensif);
        });
};
