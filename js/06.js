//funcion para cambiar de imagen con click
var fotoMostrada = "avion";

$(document).ready(function () {

	const params = ['avion', 'are', 'defen'];

	var index = 0;

	var totalImages = params.length;

	function iterate() {
		miFuncion(params[index]);
		index++;
		if (index < totalImages) {

		} else {
			index = 0;
		}
		setTimeout(iterate, 4000);
	}
	iterate();
});

//Cambiar imagénes automaticamente (galeria2)
$(document).ready(function () {
	const params = ['tecnologias', 'conteo', 'autos', 'obrero'];
	var index = 0;

	var totalImages = params.length;
	function iterate() {
		cambiarFoto(params[index]);
		index++;
		if (index < totalImages) {

		} else {
			index = 0;
		}
		setTimeout(iterate, 4000);
	}
	iterate();
});

function miFuncion(params) {
	var imagen = document.getElementById("foto");
	document.querySelectorAll('.gallery-1 li a').forEach((Element) => {
		Element.classList.remove('active');
	});
	let enlace;
	if (params == "avion") {
		enlace = document.querySelector("#avion");
		enlace.classList.add('active');
		imagen.src = "img/aereo.png";
		fotoMostrada = "aereo";
	} else if (params == "are") {
		enlace = document.querySelector("#are");
		enlace.classList.add('active');
		imagen.src = "img/radar.png";
		fotoMostrada = "radar";
	} else if (params == "defen") {
		enlace = document.querySelector("#def");
		enlace.classList.add('active');
		imagen.src = "img/avion.png";
		fotoMostrada = "def";
	} else {
		imagen.src = "img/avion.png";
		fotoMostrada = "avion";
	}
}

var foto = "edificio";
function cambiarFoto(img) {
	let enlace;
	var imagen = document.getElementById("img");

	document.querySelectorAll('.gallery-2 li a').forEach((Element) => {
		Element.classList.remove('.active-2');
	});
	if (img == 'conteo') {
		enlace = document.querySelector('#conteo');
		enlace.classList.add('active-2');
		imagen.src = "img/conteo.png";
		foto = "conteo";
	} else if (img == "autos") {
		enlace = document.querySelector('#autos');
		enlace.classList.add('active-2');
		imagen.src = 'img/autos.png';
		foto = "autos";
	} else if (img == "obrero") {
		enlace = document.querySelector("#obrero");
		enlace.classList.add('active-2');
		imagen.src = 'img/obrero.png';
		foto = "obrero";
	} else {
		enlace = document.querySelector("#tecnologias");
		enlace.classList.add('active-2');
		imagen.src = 'img/Tecnologias.png';
		foto = 'tecnologia';
	}
}

//ocultar los ul li 
var txtMapa = document.querySelector("#lista");
var mercado = document.querySelector("#txt-mercado");
var recuadro = document.querySelector("#informacion");
function ocultarTextoMap(params) {
	if (params == "txt-1") {
		txtMapa.classList.add("ocultar-txt");
		recuadro.classList.remove("info");
		mercado.innerHTML = "Upstream";

	} else if (params == "txt-2") {
		txtMapa.classList.add("ocultar-txt");
		recuadro.classList.remove("info");
		mercado.innerHTML = "Midstream";
	} else if (params == "txt-3") {
		txtMapa.classList.add("ocultar-txt");
		recuadro.classList.remove("info");
		mercado.innerHTML = "Downstream";
	} else if (params == "txt-4") {
		txtMapa.classList.add("ocultar-txt");
		recuadro.classList.remove("info");
		mercado.innerHTML = "Retail";
	}

}
//funcion para volver
function flecha(param) {
	if (param == "chafle") {
		txtMapa.classList.remove("ocultar-txt");
		recuadro.classList.add("info");
	}
}
//funcion para aparecer objetos scroll
var animado = document.querySelectorAll(".animado");

function MostrarScroll() {
	var scrollTop = document.documentElement.scrollTop;
	for (var i = 0; i < animado.length; i++) {
		var AlturaAnimado = animado[i].offsetTop;
		if (AlturaAnimado - 500 < scrollTop) {
			animado[i].style.opacity = 1;
			animado[i].classList.add("mostrarArriba");
		}
	}
}
window.addEventListener('scroll', MostrarScroll);

//animado 2
function SectiontwoScroll() {
	var scrolll = document.documentElement.scrolll;
	for (var i = 0; i < animado.length; i++) {
		var Altura = animado[i].offsetTop;
		if (Altura - 200 < scrolll) {
			animado[i].style.opacity = 1;
			animado[i].classList.add("mostrarArriba");
		}

	}
}
window.addEventListener('scroll', SectiontwoScroll);


//funcion para animacion del drone carrusel 1
var btn1 = document.getElementById("boton");
var btn2 = document.getElementById("boton-2");
var btn3 = document.getElementById("boton-3");
$(btn1).hover(function drone() {
	var uav = document.getElementById("were");
	if (btn1) {
		$(uav).animate({
			top: "0",
			left: "+50px"
		}, { duration: 3000 });
	}

});
$(btn2).hover(function dorne2() {
	var uav = document.getElementById("were");
	var pos = 0;
	if (pos == 0) {
		$(uav).animate({
			left: "+450px"
		}, { duration: 3000 });
	}
});
$(btn3).hover(function drone3() {
	var uav = document.getElementById("were");
	var pos = 0;
	if (pos == 0) {
		$(uav).animate({
			left: "+900px"
		}, { duration: 3000 })
	}
});


//animacion del drone carrusel 2
var btn4 = document.getElementById("boton-4");
$(btn4).hover(function drone4() {
	var uav = document.getElementById("uav");
	var pos = 0;
	if (pos == 0) {
		$(uav).animate({
			left: "600px"
		}, { duration: 3000 });
	}
});

//animacion del drone carrusel 3
var btn5 = document.getElementById("boton-5");
var btn6 = document.getElementById("boton-6");
var btn7 = document.getElementById("boton-7");
var btn8 = document.getElementById("boton-8");

$(btn5).hover(function drone5() {
	var uav = document.getElementById("uavs");
	var pos = 0;
	if (pos == 0) {
		$(uav).animate({
			left: "100px"
		}, { duration: 3000 });
	}
});

$(btn6).hover(function drone6() {
	var uav = document.getElementById("uavs");
	var pos = 0;
	if (pos == 0) {
		$(uav).animate({
			left: "300px"
		}, { duration: 3000 });
	}
});
$(btn7).hover(function drone7() {
	var uav = document.getElementById("uavs");
	var pos = 0;
	if (pos == 0) {
		$(uav).animate({
			left: "600px"
		}, { duration: 3000 });
	}
});
$(btn8).hover(function drone8() {
	var uav = document.getElementById("uavs");
	var pos = 0;
	if (pos == 0) {
		$(uav).animate({
			left: "800px"
		}, { duration: 3000 });
	} else if (pos > 600) {
		console.log("paso");
	}
});


//presentación
var textos = ["texto1", "texto2", "texto3"];
var totalTextos = textos.length;
var textoInicial = 0;
function MostrarContenido(cont) {
	var title = document.getElementById("titulos");

	var parrafo1 = document.getElementById("li-1");
	var parrafo2 = document.getElementById("li-2");


	if (cont == 'titulo') {
		console.log(parrafo1);
		title.innerHTML = "Plantas Digitales";
		if (textoInicial > totalTextos) {
			textoInicial = 0;
		}
		parrafo1.innerHTML = textos[textoInicial];
		textoInicial ++;
	} else if (cont == "titulo-two") {
		title.innerHTML = "Aseguramiento Ambiental-APM";
		if (textoInicial > totalTextos) {
			textoInicial = 0;
		}
		parrafo2.innerHTML = textos[textoInicial];
		textoInicial ++;
	} else if (cont == "titulo-tre") {
		title.innerHTML = "Seguridad de Activos Estratégicos";
	} else if (cont == "titulo-four") {
		title.innerHTML = "Seguridad Electrónica";
	} else if (cont == "titulo-five") {
		title.innerHTML = "Gestión de Activos";
	} else if (cont == "titulo-six") {
		title.innerHTML = "Eficiencia Energética";
	} else if (cont == "titulo-seven") {
		title.innerHTML = "Gestión voluntaria";
	}
}
function contentLibreriaRegistro(params) {
	var title = document.getElementById("title-libreria");
	var parrafo1 = document.getElementById("p-toggle-1");

	var txt1  = "[monitorización actividad de Planta, eventos provenientes de sistemas en tiempo real o de diferentes áreas funcionales, actividades operacionales, alarmas, informes] y Gestión de Turnos [estado de la Planta, eventos y actividades relevantes turno anterior y siguiente]";
	var txt2 = "Configuración y generación de tareas periódicas o generadas por sistemas de tiempo real, rutas, registro de actividades";
	var txt3 = "Registro, seguimiento, investigación [efectos, causas, acciones correctivas], generación solicitudes de trabajo ";
	var txt4 = "Manuales [durante Rondas o desde el Libro de Registros] y automáticas [sistemas en tiempo real por disparo de alarmas], se integra con solución de mantenimiento disponible ";

	if (params == "title-1") {
		title.innerHTML = "Librería de Registro";
		parrafo1.innerHTML=txt1;
	} else if (params == "title-2") {
		title.innerHTML = "Rutinas de operación";
		parrafo1.innerHTML = txt2;
	} else if (params == "title-3") {
		title.innerHTML = "Incidencias de operación";
		parrafo1.innerHTML = txt3;
		
	} else if (params == "title-4") {
		title.innerHTML = "Generación de órdenes";
		parrafo1.innerHTML = txt4;
	} else {
		title.innerHTML = "Librería de Registro";
		parrafo1.innerHTML = txt1;

	}
}

//boton ir arriba
window.onscroll = function () {

	if (document.documentElement.scrollTop > 100) {
		document.querySelector(".go-top-container").classList.add("show");
	} else {
		document.querySelector(".go-top-container").classList.remove("show");
	}
}
document.querySelector(".go-top-container").addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});


$(document).ready(function () {

	$('a[href^="#"]').click(function () {
		var destino = $(this.hash);
		$('html, body').animate({
			scrollTop: destino.offset().top
		}, 700
		);
	});

});



//numeros animados
$(window).scroll(function () {
	if ($(this).scrollTop() > 800) {
		var numberone = $.animateNumber.numberStepFactories.separator('.')

		$('#millon').animateNumber(
			{
				number: 1000000,
				numberStep: numberone
			},
			{
				easing: 'swing',
				duration: 1800,
			}
		);
		$('#two').animateNumber(
			{
				number: 2500,
				numberStep: numberone
			},
			{
				easing: 'swing',
				duration: 15000,
			}
		);

		$('#tree').animateNumber(
			{
				number: 30,
				numberStep: numberone
			},
			{
				easing: 'swing',
				duration: 15000,
			}
		)
	}
});

//activa el menu lateral 
var pushbar = new Pushbar({
	blur: true,
	overlay: true
});

//tiempo 





















