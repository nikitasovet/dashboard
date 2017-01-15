var mongoose = require('mongoose');
var Offensif = mongoose.model('offensif'); // Import du schema Offensif

// Cette méthode retourne tous les personnages offensifs
module.exports.offensifGetAll = (req, res) => {
    Offensif
        .find()
        .exec(function(err, offensifs) {
            if (err) {
                console.log("Error finding offensifs");
                res
                    .status(500)
                    .json(err);
            } else {
                console.log("Found offensifs", offensifs.length);
                res
                    .json(offensifs);
            }
        });
};

// Cette méthode retourne un seul personnage Offensif en fonction de l'ID en paramètre
module.exports.offensifGetOne = (req, res) => {
    var id = req.params.offensifId;

    Offensif
        .findById(id)
        .exec(function(err, offensif) {
            if (err) {
                console.log("Error finding offensif");
                res
                    .status(500)
                    .json(err);
            } else if (!offensif) {
                console.log("offensifId not found in database", id);
                res
                    .status(400)
                    .json(err);
            }
            res
                .status(200)
                .json(offensif);
        });
};
