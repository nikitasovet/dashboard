var mongoose = require('mongoose');
var Offensif = mongoose.model('offensif');

module.exports.offensifGetAll = (req, res) => {
    console.log('GET the offensif');
    console.log(req);

    Offensif
        .find()
        .exec(function(err, offensifs) {
            console.log(err);
            console.log(offensifs);
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

module.exports.offensifGetOne = (req, res) => {
    var id = req.params.offensifId;

    console.log('Get offensifId', id);

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
