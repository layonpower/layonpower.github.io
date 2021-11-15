$(document).ready(function(){



$('#enviar').click(function(){
	var validar_campos = validarCampos();

	if(!validar_campos.respuesta){
		toastr.options.timeOut = 10000; 
		toastr.warning(validar_campos.mensaje);
	}
	else{
		toastr.success('Operacion realizada correctamente');
	}

});

function validarCampos(){

	var salida = {
		'respuesta' : true,
		'mensaje' 	: ''
	}

	var bloques_validar = $('.required');

	$.each(bloques_validar,function(){

		var valor = $(this).find(':input').val();
		var nombre = $(this).find('label').text();

		if(valor == ''){
			$(this).find(':input').css({'border':'1px solid red','background-color': '#fff2f1'});
			salida.respuesta = false;
			salida.mensaje = 'Por favor, el campo '+nombre+' es obligatorio';
			return false;
		}
		else{
			$(this).find(':input').css({'border':'1px solid #ced4da','background-color': '#FFF'});
		}
	});

	return salida;

}

$('#dispo').click(function(){
	var validar_vars = validarDispo();

	if(!validar_vars.respuesta){
		toastr.options.timeOut = 10000; 
		toastr.warning(validar_vars.mensaje);
	}
	else{
		toastr.success('Producto en el carrito');
	}

});

function validarDispo(){

	var salida = {
		'respuesta' : true,
		'mensaje' 	: ''
	}

	var bloques_validar = $('.required');

	$.each(bloques_validar,function(){

		var valor = $(this).find(':input').val();
		var test = $(this).find('button').text();

		if(valor == ''){
			$(this).find(':input').css({'border':'1px solid red','background-color': '#fff2f1'});
			salida.respuesta = false;
			salida.mensaje = 'Por favor, el campo '+test+' es obligatorio';
			return false;
		}
		else{
			$(this).find(':input').css({'border':'1px solid #ced4da','background-color': '#FFF'});
		}
	});

	return salida;

}

$('#dispo2').click(function(){
	var validar_vars = validarDispo();

	if(!validar_vars.respuesta){
		toastr.options.timeOut = 10000; 
		toastr.warning(validar_vars.mensaje);
	}
	else{
		toastr.success('Producto en el carrito');
	}

});

function validarDispo(){

	var salida = {
		'respuesta' : true,
		'mensaje' 	: ''
	}

	var bloques_validar = $('.required');

	$.each(bloques_validar,function(){

		var valor = $(this).find(':input').val();
		var test = $(this).find('button').text();

		if(valor == ''){
			$(this).find(':input').css({'border':'1px solid red','background-color': '#fff2f1'});
			salida.respuesta = false;
			salida.mensaje = 'Por favor, el campo '+test+' es obligatorio';
			return false;
		}
		else{
			$(this).find(':input').css({'border':'1px solid #ced4da','background-color': '#FFF'});
		}
	});

	return salida;

}


/*
$('#efectivo').click(function(){
	$('#numero-tarjeta').attr('disabled',true);
});
$('#tarjeta').click(function(){
	$('#numero-tarjeta').attr('disabled',false);
});
*/

$('#nodisponible').click(function(){
	var validar_nodisponible = validarNoDisponible();

	if(!validar_nodisponible.respuesta){
		toastr.options.timeOut = 10000; 
		toastr.warning(validar_nodisponible.mensaje);
	}
	else{
		toastr.warning('Producto no disponible');
	}

});

function validarNoDisponible(){

	var salida = {
		'respuesta' : true,
		'mensaje' 	: ''
	}

	var bloques_validar = $('.required');

	$.each(bloques_validar,function(){

		var valor = $(this).find(':input').val();
		var nombre = $(this).find('label').text();

		if(valor == ''){
			$(this).find(':input').css({'border':'1px solid red','background-color': '#fff2f1'});
			salida.respuesta = false;
			salida.mensaje = 'Por favor, el campo '+nombre+' es obligatorio';
			return false;
		}
		else{
			$(this).find(':input').css({'border':'1px solid #ced4da','background-color': '#FF0000'});
		}
	});

	return salida;

}


$('input[name="pago"]').click(function(){
	var id = $(this).attr('id');

	if(id == 'efectivo'){
		$('#numero-tarjeta').attr('disabled',true).val('');
	}
	else{
		$('#numero-tarjeta').attr('disabled',false);
	}
});



/*
var regex_email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

if (!regex_email.test(valor_email)) {}
*/

});