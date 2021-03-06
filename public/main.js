var onReady = function () {
	$("#enviar-mensaje").on("click", function() {
		if( $("#mensaje").val() != "" ) {
			clickHandler();
		}
	});

	messagesRequest();
}

var clickHandler = function(){
	console.log( $("#mensaje").val() );

	var xhr = $.post("/mensajes/new", {
		mensaje : $("#mensaje").val()
	});

	xhr.done( function(data) {
		console.log("mensajes mejorandola con exito", data);
	});

	xhr.fail( function(data) {
		console.log("data");
		throw "Error";
	});

	$("#mensaje").val("");
}

var messagesRequest = function() {
	var xhr = $.get("/mensajes/list");

	xhr.done(function(data) {
		$("#chat").html("");
		data.forEach(function(mensaje){
			$("<li>"+ mensaje +"</li>").appendTo( $("#chat") );
		});

		messagesRequest();
	});
	
}

$(document).on("ready", onReady);