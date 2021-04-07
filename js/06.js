//funcion para cambiar de imagen con click
var fotoMostrada = "avion";
function miFuncion(params) {
	var imagen = document.getElementById("foto");


	if (params == "avion") {
		imagen.src = "img/aereo.png";
		fotoMostrada = "aereo";
	} else if (params == "are") {
		imagen.src = "img/radar.png";
		fotoMostrada = "radar";
	} else if (params == "defen") {
		imagen.src = "img/avion.png";
		fotoMostrada = "def"
	} else {
		imagen.src = "img/avion.png";
		fotoMostrada = "avion";
	}
}

//cambiar fotos con timeup




function tiempo() {
	var i;
	var imagen = document.getElementById("foto");
	for ( i = 0; i <imagen.length; i++) {
		alert("hola");
	}
}

	setTimeout(tiempo, 2000);



	






	// 
	var foto = "edificio";
	function cambiarFoto(img) {
		var imagen = document.getElementById("img");
		if (img == "conteo") {
			imagen.src = "img/conteo.png";
			foto = "conteo";
		} else if (img == "autos") {
			imagen.src = "img/autos.png";
			foto = "autos";
		} else if (img == "obrero") {
			imagen.src = "img/obrero.png";
			foto = "obrero";
		} else {
			imagen.src = "img/Tecnologias.png";
			foto = "tecnologia";
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
		}else if (pos > 600) {
			console.log("paso");	
		}
	});


	//presentación
	function MostrarContenido(cont) {
		var title = document.getElementById("titulos");


		if (cont == 'titulo') {
			title.innerHTML = "Plantas Digitales";
		} else if (cont == "titulo-two") {
			title.innerHTML = "Aseguramiento Ambiental-APM";
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
		if (params == "title-1") {
			title.innerHTML = "Librería de Registro";
		} else if (params == "title-2") {
			title.innerHTML = "Rutinas de operación";
		} else if (params == "title-3") {
			title.innerHTML = "Incidencias de operación";
		} else if (params == "title-4") {
			title.innerHTML = "Generación de órdenes";
		} else {
			title.innerHTML = "Librería de Registro"
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
	var numberone = $.animateNumber.numberStepFactories.separator('.')

	$('#millon').animateNumber(
		{
			number: 1,
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
	//activa el menu lateral 
	var pushbar = new Pushbar({
		blur: true,
		overlay: true
	});

//tiempo 





















