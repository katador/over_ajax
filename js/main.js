
$(document).ready(function(e){

	$("#formu").overskull_ajax({
		over_salida:'#ingresox',
		over_event_success:function(){
			$('#bredi').html(this);
		},
		over_event_before:function(){
			$('#bredi').fadeIn();
		},
		over_event_complete:function(){
			$('#bredi').delay(500).fadeOut();

		}
	});

	$(document).overskull_ajax({
		over_padre:'#ingresox',
		over_hijo:'#formu2',
		over_tag_html:"FORM"
	});

	$('#boton_over').overskull_ajax();

	$(document).overskull_ajax({
		over_padre:'#salida_boton_over',
		over_hijo:'#boton_over3',
		over_tag_html:"A"
	});

	$('#envio').overskull_ajax();
	$('#exe').overskull_ajax({
		over_salida:'#salida_envio'
	});

	$(document).overskull_ajax({
		over_padre:'#salida_envio',
		over_hijo:'#envio2',
		over_tag_html:"DIV"
	});

});