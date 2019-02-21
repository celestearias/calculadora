class _Operacion {
	// Est aparte construye el objeto con lo que le mandemos.
	constructor(_numero1, _numero2){
		this.numero1 = _numero1;
		this.numero2 = _numero2;
	}
	/* Toda esta parte se utiliza para enviar el objeto, como es uno de los metodos de operacion entonces
	retorna una promesa con un resolve y reject que y en la parte de lo que intenta mete una request por XML
	abre la requestr con el metodo post el cual manda a la ruta, pone si hubo un error, el estado 200 de 
	xhr.status indica que no hubo error, por lo tanto si es igual a ello se puede continuar, manda por resolucion
	lo que le estamos mandado, para luego en un futuro mandarlo a la calculadora. */
	Sumar(){
		var objetoenviar = this;
		return new Promise(function(resolve, reject){
			try { 
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://localhost:8080/Asumar');
				xhr.setRequestHeader('Content-Type','aplication/json');
				xhr.onload = function(){
					if(xhr.status === 200){
						resolve(JSON.parse(xhr.responseText));
					}else{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoaenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}

	Restar(){
		var objetoenviar = this;
		return new Promise(function(resolve, reject){
			try { 
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://localhost:8080/Arestar');
				xhr.setRequestHeader('Content-Type','aplication/json');
				xhr.onload = function(){
					if(xhr.status === 200){
						resolve(JSON.parse(xhr.responseText));
					}else{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoaenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}

	Multi(){
		var objetoenviar = this;
		return new Promise(function(resolve, reject){
			try { 
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://localhost:8080/Amulti');
				xhr.setRequestHeader('Content-Type','aplication/json');
				xhr.onload = function(){
					if(xhr.status === 200){
						resolve(JSON.parse(xhr.responseText));
					}else{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoaenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}

	Div(){
		var objetoenviar = this;
		return new Promise(function(resolve, reject){
			try { 
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://localhost:8080/Adiv');
				xhr.setRequestHeader('Content-Type','aplication/json');
				xhr.onload = function(){
					if(xhr.status === 200){
						resolve(JSON.parse(xhr.responseText));
					}else{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoaenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}
}