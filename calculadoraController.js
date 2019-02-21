class _Operacion {
	// Esta parte construye el objeto para utilizarlo
	constructor(_numero1, _numero2){
	this.numero1 = _numero1;
	this.numero2 = _numero2;
	}
	// Aquí comienza los metodos que tiene el objeto que estamos creando, para que 
	// pueda usarlos cuando sean exportados
	Sumar(){
		return this.numero1 + this.numero2;
	}
	Restar(){
		return this.numero1 - this.numero2;
	}
	Multi(){
		return this.numero1 * this.numero2;
	}
	Div(){
		return this.numero1 / this.numero2;
	}
}
// Toda esta parte crea una nueva libreria para que la persona que esté trabajando en front
// end pueda exportar lo que necesita.
exports.Sumar = function(req, res){
	let claseinstanciada = new _Operacion(req.body.numero1, req.body.numero2);
	res.json(claseinstanciada.Sumar());
}

exports.Restar = function(req, res){
	let claseinstanciada = new _Operacion(req.body.numero1, req.body.numero2);
	res.json(claseinstanciada.Restar());
}
exports.Multi = function(req, res){
	let claseinstanciada = new _Operacion(req.body.numero1, req.body.numero2);
	res.json(claseinstanciada.Multi());
}
exports.Div = function(req, res){
	let claseinstanciada = new _Operacion(req.body.numero1, req.body.numero2);
	res.json(claseinstanciada.Div());
}