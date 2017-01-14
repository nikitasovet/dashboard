var mongoose = require('mongoose');
var Defensif = mongoose.model('defensif');

module.exports.defensifGetAll = (req, res) => {
    console.log('GET the defensif');
    console.log(req);

    Defensif
        .find()
        .exec(function(err, defensifs) {
            console.log(err);
            console.log(defensifs);
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

module.exports.defensifGetOne = (req, res) => {
    var id = req.params.defensifId;

    console.log('Get defensifId', id);

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
