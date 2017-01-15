require('./api/data/db.js'); // Import connexion mongo
var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes'); // Import du router


// Port d'écoute
app.set('port', 3000);

// Journal a chaque requete
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

// Définition des dossiers static
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/fonts', express.static(__dirname + '/fonts'));

// Ajout du router
app.use('/api', routes);


// Ecoute des requetes
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Serveur démarré sur le port ' + port);
});
