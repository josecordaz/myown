(function(){
	var app = angular.module('listaPersonas',[]);
	var gem = { name: 'Azurite', price: 2.95 };
	app.controller('PersonasController',function(){
		this.product = gem;
	});
})();