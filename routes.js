//Esta parte setea que estamos agarrando el archivo donde está guardada la clase para usarlo
// posteriormente.
var controllercalculadora = require('./calculadoraController.js');
// Acá esta el export que vamos a usar para que la persona al hacer un post
//se le lleve a una de los export de la lo que arriba hicimos require
module.exports = function(app){
	app.post('/Asumar', controllercalculadora.Sumar);
	app.post('/Arestar', controllercalculadora.Restar);
	app.post('/Amulti', controllercalculadora.Multi);
	app.post('/Adiv', controllercalculadora.Div);
}