
class _Operacion{
	constructor(_numero1,_numero2){
		this.numero1=_numero1;
		this.numero2=_numero2;
	}
	Sumar(){
		var objetoaenviar=this;
		return new Promise(function(resolve,reject){
			try{
				var xhr=new XMLHttpRequest();
				xhr.open('POST','http://localhost:8080/Asumar');
				xhr.setRequestHeader('Content-Type','application/json');
				xhr.onload=function(){
					if(xhr.status===200){
						resolve(JSON.parse(xhr.responseText));
					}
					else{
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
		var objetoaenviar=this;
		return new Promise(function(resolve,reject){
			try{
				var xhr=new XMLHttpRequest();
				xhr.open('POST','http://localhost:8080/Arestar');
				xhr.setRequestHeader('Content-Type','application/json');
				xhr.onload=function(){
					if(xhr.status===200){
						resolve(JSON.parse(xhr.responseText));
					}
					else{
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
		var objetoaenviar=this;
		return new Promise(function(resolve,reject){
			try{
				var xhr=new XMLHttpRequest();
				xhr.open('POST','http://localhost:8080/Adiv');
				xhr.setRequestHeader('Content-Type','application/json');
				xhr.onload=function(){
					if(xhr.status===200){
						resolve(JSON.parse(xhr.responseText));
					}
					else{
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
		var objetoaenviar=this;
		return new Promise(function(resolve,reject){
			try{
				var xhr=new XMLHttpRequest();
				xhr.open('POST','http://localhost:8080/Amulti');
				xhr.setRequestHeader('Content-Type','application/json');
				xhr.onload=function(){
					if(xhr.status===200){
						resolve(JSON.parse(xhr.responseText));
					}
					else{
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