// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "e6cf293a-6477-11ea-bc55-0242ac130003";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000;

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500;

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500;

var batcueva = 0;
var callejon = 0;
var comisaria = 0;
var pfranco = 0;
var llaves = 0;
var salon = 0;
var torre = 0;
var sustancia = 0;
var batmovilResuelto = 0;

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {

    inicio: new undum.SimpleSituation(
            "<p class='transient'> Desde el distribuidor es posible acceder a las 5 secciones en las que está dividida la batcueva:</br>\
		<ul class='options'>\
			<li><a href='nodo_habitacion1' class='once'>Sala de comunicaciones</a></li>\
			<li><a href='nodo_habitacion2' class='once'>Sala de entrenamiento</a></li>\
			<li><a href='nodo_habitacion3' class='once'>Cuartel general</a></li>\
			<li><a href='garaje' class='once'>Garaje</a></li>\
			<li><a href='nodo_gameover1' class='once'>Pasaje al exterior</a></li>\
		</ul></p></br>\
		<p class = 'transient'>o puede que lo conveniente sea <a href='gameover0'>Quedarte en el distribuidor.</a> con\
		el fin de no llamar la atención.</p></br>",
            {
                enter: function (character, system, to) {
                    if (batcueva == 0) {
                        batcueva++;
                        system.animateQuality("lugaresVisitados", character.qualities.lugaresVisitados + 1);
                        system.setCharacterText("<p>¡¡Escapa de la batcueva!!</p>");
                        system.write("<h1>BATCUEVA</h1>\
								<p align='center'> <img id='img' src='./recursos/imágenes/batcueva.jpg' width='450' height='250' ></p>\
								<p>Puedes sentir una gran presión en el pecho. 'No es posible', piensas, mientras observas las camaras de seguridad.\
								 Es imposible que hayan podido dar con tu escondite; los últimos sistemas de ocultamiento, defensas contra curiosos,\
								 nadie podría saber dónde se encuentra su localización. Una explosión interrumpe tus pensamientos, ya han accedido al interior.\
								</p></br>\
								<p>Te encuentras en el distribuidor de la <a class= raw target=_blank href='https://batman.fandom.com/es/wiki/Batcave'>batcueva</a> y quieres salir de allí lo antes\
		 						posible, ya que te encuentras indefenso y unos encapuchados quieren aprovechar esta situación\
		 						para acabar contigo.</p></br>");
                    } else if ((character.qualities.llavesBatcueva == 0) && (callejon == 0)) {
                        system.write("<h1>DISTRIBUIDOR</h1>\
								<p align='center'> <img id='img' src='./recursos/imágenes/batcueva.jpg' width='450' height='250' ></p>\
								<p>Vuelves al distribuidor de la batcueva con los atacantes pisándote los talones, podrían aparecer\
								 en cualquier momento, tienes que salir de allí lo antes posible.</p></br>");
                    } else if ((character.qualities.llavesBatcueva == 1) && (callejon == 0)) {
                        system.write("<h1>DISTRIBUIDOR</h1>\
								<p align='center'> <img id='img' src='./recursos/imágenes/batcueva.jpg' width='450' height='250' ></p>\
								<p>Vuelves al distribuidor a probar las llaves y ahora puedes acceder a las habitaciones de la batcueva. </p></br>");
                        system.setQuality("llavesBatcueva", 0);
                        system.setCharacterText("<p>¡¡Secciones de la batcueva desbloqueadas!!</p>");
                    } else if (callejon == 1) {
                        system.write("<h1>DISTRIBUIDOR</h1>\
								<p align='center'> <img id='img' src='./recursos/imágenes/batcueva.jpg' width='450' height='250' ></p></br>\
								<p> Te encuentras en el distribuidor de la batcueva, los intrusos que atacaron tu escondite ya no están,\
								pero sí las hueyas de su paso. No hay tiempo para lamentarse, debes continuar con tu misión.</p></p>");
                    }
                },
                exit: function (character, system, to) {
                    if (llaves == 1) {
                        system.setCharacterText("");
                    }
                }
            }
    ),

    garaje: new undum.SimpleSituation(
            "<p class='transient'> Ahora mismo tan solo tienes dos opciones posibles:</br></br>\
		<ul class='options'>\
			<li><a href='./entrar'>Entrar en el batmóvil</a></li>\
			<li><a href='gameover3'>Salir directamente por la puerta y aprovechar la noche para huir sigilósamente.</a></li>\
		</ul></p></br>",
            {
                enter: function (character, system, to) {
                    if ((character.qualities.piezaCPU1 == 1) && (character.qualities.piezaCPU2 == 1) && (character.qualities.piezaCPU3 == 1)) {
                        batmovilResuelto = 1;
                    }
                    if ((llaves == 0) || (callejon == 0)) {
                        system.write("<h1>GARAJE</h1>\
		  			<p> Accedes al Garaje intentando buscar la mejor solución para poder salir de la batcueva\
		 		 	totalmente ileso. Podrías coger el <a class= raw target=_blank href='https://batman.fandom.com/es/wiki/Batmobile'>batmovil</a> y huir, pero antes de que puedas tomar una decisión\
					te percatas de que la puerta de salida a la calle del garaje se encuentra abierta. Debes tomar una decisión.</p></br>");
                    } else if (callejon == 1) {
                        system.write("<h1>GARAJE</h1>\
		  			<p> Accedes al Garaje de la batcueva, donde pones a punto tus vehículos. Tu vehículo te esta esperando, no hay tiempo que perder, tienes\
					que solucionar el entuerto en el que te encuentras.</p></br>");
                    }
                },
                actions: {
                    'entrar': function (character, system, to) {
                        system.doLink('nodo_puzzlebatmovil');
                    }
                }
            }
    ),

    nodo_puzzlebatmovil: new undum.SimpleSituation(
            "",
            {
                enter: function (character, system, to) {
                    if ((llaves == 1) && (batmovilResuelto == 1)) {
                        system.write("<h1>BATMOVIL</h1>\
			  <p align='center'> <img id='img' src='./recursos/imágenes/batmovil.jpg' width='450' height='250' ></p>\
			  <p> Entras al garaje y accedes al interior del batmovil, introduces cada una de las\
			  piezas recopiladas en las habitaciones en los slots para la cpu, entonces el batmovil\
			  arranca y <a href='nodo_batmovil'> Sales a descubrir la ciudad.</a></p>");
                        system.setQuality("piezaCPU1", 0);
                        system.setQuality("piezaCPU2", 0);
                        system.setQuality("piezaCPU3", 0);
                        //sytem.doLink('nodo_batmovil');
                    } else if (llaves == 0) {
                        system.write("<p> Decides dirigirte hacia el batmovil, entras y te sientas en el\
                                          asiento del conductor y pruebas arrancarlo, no arranca e\
			            intentas encontrar una solución, buscas el posible error del batmovil y te percatas de\
			            que los slots donde van alojadas las piezas de la cpu están vacios. Si quieres escapar\
						de la batcueva con el batmovil debes encontrar las piezas de la CPU.</p></br>");
                        system.doLink('batmovil_roto1');

                    } else {
                        system.write("<p> Decides dirigirte hacia el batmovil, entras y te sientas en el\
                                          asiento del conductor y pruebas arrancarlo, no arranca e\
			            intentas encontrar una solución, buscas el posible error del batmovil y te percatas de\
			            que los slots donde van alojadas las piezas de la cpu están vacios. Si quieres escapar\
						de la batcueva con el batmovil debes encontrar las piezas de la CPU.</p></br>");
                        system.doLink('batmovil_roto2');
                    }

                }
            }

    ),

    batmovil_roto1: new undum.SimpleSituation(
            "<h1>BATMOVIL</h1>\
     <p align='center'> <img id='img' src='./recursos/imágenes/batmovil.jpg' width='450' height='250' ></p>\
	 <p>Dadas las circunstancias tienes claras las opciones posibles.</p></br>\
	 <ul class='options'>\
			<li><a href='./examinarasiento'>Examinar los asientos en busca de algún arma para defenderte</a></li>\
			<li><a href='inicio'>Salir al distribuidor</a></li>\
		</ul></p></br>",
            {
                actions: {
                    'examinarasiento': "<p> Te dispones a buscar\
			  en los asientos del vehiculo y algo en el asiento del acompañante llama tu\
			  atención... <a href='./examinarasiento2' class='once'>examinar asiento</a></p></br>",
                    'examinarasiento2': "<p>Enciendes las luces de la cabina para ver mejor\
								 y logras distinguir una figura familiar:\
								 <a href='./recogerllaves' class='once'>las llaves de la batcueva</a></p></br>",

                    'recogerllaves': function (character, system, to) {
                        system.setQuality("llavesBatcueva", 1);
                        system.write("<p>Ahora que tienes en tu poder las llaves de la batcueva\
								puedes acceder a las estancias que estaban antes bloqueadas.</p></br>\
								<p class='transient'>Te encuentras en la texitura de volver al distribuidor y <a href='inicio'>Probar las llaves</a>\
			  					o <a href='gameover2'>Seguir buscando en los asientos.</a></p>");
                        llaves = 1;
                    }
                }

            }

    ),

    batmovil_roto2: new undum.SimpleSituation(
            "<h1>BATMOVIL</h1>\
     <p align='center'> <img id='img' src='./recursos/imágenes/batmovil.jpg' width='450' height='250' ></p>\
	 <p>Dadas las circunstncias tienes claras las opciones posibles.</p></br>\
	 <ul class='options'>\
			<li><a href='gameover2'>Examinar los asientos en busca de algún arma para defenderte</a></li>\
			<li><a href='inicio'>Salir al distribuidor</a></li>\
		</ul></p></br>"
            ),

    gameover0: new undum.SimpleSituation(
            "<h1>GAME OVER</h1>\
			<p align='center'> <img id='img' src='./recursos/imágenes/gameover.jpg' width='450' height='650' ></p>\
			<p> Has decidido quedarte dentro de la batcueva totalmente indefenso y los encapuchados han aprovechado\
			la situación y han acabado contigo.</p></br>\
			<p align='center'> <img id='img' src='./recursos/imágenes/muerte.jpg' width='450' height='250' ></p>\
			<p class='transient'><a href='inicio'>Volver a comenzar</a></p>",
            {
                exit: function (character, system, to) {
                    batcueva = 0;
                    callejon = 0;
                    comisaria = 0;
                    pfranco = 0;
                    llaves = 0;
                    salon = 0;
                    torre = 0;
                    sustancia = 0;
                    system.setQuality("piezaCPU1", 0);
                    system.setQuality("piezaCPU2", 0);
                    system.setQuality("piezaCPU3", 0);
                    system.setQuality("llavesBatcueva", 0);
                    system.setQuality("sustancia", 0);
                    system.setQuality("batgarra", 0);
                    system.setQuality("tarjetaAcred", 0);
                    system.setQuality("aturdidores", 1);
                    system.setQuality("batgranadas", 1);
                    system.setQuality("llaveSala", 0);
                    system.setQuality("lugaresVisitados", 0);
                    system.setQuality("total", 1);
                }
            }
    ),

    gameover3: new undum.SimpleSituation(
            "<h1>GAME OVER</h1>\
			  <p align='center'> <img id='img' src='./recursos/imágenes/gameover.jpg' width='450' height='650' ></p>\
			  <p> Te diriges hacia la puerta de salida del garaje con intención de pasar por ella para\
			  acceder a la calle pero, al acercarte a la puerta pisas un objeto extraño y cae una red\
			  sobre ti. ¡Los encapuchados te han puesto una trampa y te han atrapado!</p></br>\
			  <p align='center'> <img id='img' src='./recursos/imágenes/muerte.jpg' width='450' height='250' ></p>\
			  <p><a href='inicio'>Volver a comenzar</a></p>",
            {
                exit: function (character, system, to) {
                    batcueva = 0;
                    callejon = 0;
                    comisaria = 0;
                    pfranco = 0;
                    llaves = 0;
                    salon = 0;
                    torre = 0;
                    sustancia = 0;
                    system.setQuality("piezaCPU1", 0);
                    system.setQuality("piezaCPU2", 0);
                    system.setQuality("piezaCPU3", 0);
                    system.setQuality("llavesBatcueva", 0);
                    system.setQuality("sustancia", 0);
                    system.setQuality("batgarra", 0);
                    system.setQuality("tarjetaAcred", 0);
                    system.setQuality("aturdidores", 1);
                    system.setQuality("batgranadas", 1);
                    system.setQuality("llaveSala", 0);
                    system.setQuality("lugaresVisitados", 0);
                    system.setQuality("total", 1);
                }
            }
    ),

    batmovil_roto: new undum.SimpleSituation(
            "<h1>BATMOVIL</h1>\
			  <p align='center'> <img id='img' src='./recursos/imágenes/batmovil.jpg' width='450' height='250' ></p>\
			  ",
            {
                actions: {

                }
            }

    ),

    gameover2: new undum.SimpleSituation(
            "<h1>GAME OVER</h1>\
			  <p align='center'> <img id='img' src='./recursos/imágenes/gameover.jpg' width='450' height='650' ></p>\
			  <p> Sigues en el batmovil buscando las piezas de la cpu, notas una presencia,\
			  miras hacia atrás, sientes como los encapuchads te atrapan con sus garras y acaban contigo.</p></br>\
			  <p align='center'> <img id='img' src='./recursos/imágenes/muerte.jpg' width='450' height='250' ></p>\
			  <p><a href='inicio'>Volver a comenzar</a></p>",
            {
                exit: function (character, system, to) {
                    batcueva = 0;
                    callejon = 0;
                    comisaria = 0;
                    pfranco = 0;
                    llaves = 0;
                    salon = 0;
                    torre = 0;
                    sustancia = 0;
                    system.setQuality("piezaCPU1", 0);
                    system.setQuality("piezaCPU2", 0);
                    system.setQuality("piezaCPU3", 0);
                    system.setQuality("llavesBatcueva", 0);
                    system.setQuality("sustancia", 0);
                    system.setQuality("batgarra", 0);
                    system.setQuality("tarjetaAcred", 0);
                    system.setQuality("aturdidores", 1);
                    system.setQuality("batgranadas", 1);
                    system.setQuality("llaveSala", 0);
                    system.setQuality("lugaresVisitados", 0);
                    system.setQuality("total", 1);
                }
            }

    ),

    nodo_habitacion1: new undum.SimpleSituation(
            "",
            {
                enter: function (character, system, to) {
                    if (llaves == 0) {
                        system.write("<p>Te aproximas hasta la puerta acorazada que permite el paso\
							 a la sala de comunicaciones. Al intentar abrirla te das cuenta de que está\
							 cerrada. Debes encontrar las llaves que te permitan abrirla, por lo que decides\
							 deshacer tus pasos y volver al distribuidor.</p></br>");
                        system.doLink('inicio');
                    } else {
                        system.doLink('habitacion1');
                    }
                }
            }
    ),

    habitacion1: new undum.SimpleSituation(
            "",
            {
                enter: function (character, system, to) {
                    if ((batmovilResuelto == 1) || ((batmovilResuelto == 0) && (character.qualities.piezaCPU1 == 1))) {
                        system.write("<h1>SALA DE COMUNICACIONES</h1>\
		                <p align='center'> <img id='img' src='./recursos/imágenes/sala_de_comunicaciones.jpg' width='450' height='250' ></p>\
						<p>Entras en la sala de comunicaciones y tras revisar la habitación te das cuenta de que estás perdiendo el tiempo.</p>\
						<p class='transient'><a href='inicio' class='once'>Volver al distribuidor</a></p></br>");
                    } else {
                        system.write("<h1>SALA DE COMUNICACIONES</h1>\
		<p align='center'> <img id='img' src='./recursos/imágenes/sala_de_comunicaciones.jpg' width='450' height='250' ></p>\
		<p>Te encuentras en la sala de comunicaciones, donde <a class= raw target=_blank href='https://batman.fandom.com/es/wiki/Alfred_Pennyworth'>Alfred</a> y tú\
		tenéis montado vuestro centro de operaciones informáticas, y \
		desde donde Alfred te brinda apoyo de inteligencia durante tus\
		misiones.</p></br>\
		<p> La sala está repleta de material puntero, lo más avanzado\
		que Industrias Wayne tiene en el mercado, un equipo por el que\
		más de un gobierno mataría por tenerle bajo su control. De\
		entre todo el material que se encuentra en la sala hay algo que\
		no te termina de encajar: hay <a href='./examinarbrillo' class='once'>algo que brilla\
		</a> justo al lado del\
		teclado principal.</p></br>\
		<p class='transient'><a href='inicio' class='once'>Volver al distribuidor</a></p></br>");
                    }
                },
                actions: {
                    'examinarbrillo': "<p>Te aproximas a la altura\
				del teclado y puedes observar que el brillo es\
				sin lugar a dudas una de las <a href='./recogerpieza' class='once'>piezas de la CPU</a> \
				que estabas buscando.</p></br>",

                    'recogerpieza': function (character, system, to) {
                        system.setQuality("piezaCPU1", 1);
                    }
                }
            }
    ),

    nodo_habitacion2: new undum.SimpleSituation(
            "",
            {
                enter: function (character, system, to) {
                    if (llaves == 0) {
                        system.write("<p>Te aproximas hasta la puerta acorazada que permite el paso\
							 a la sala de entrenamiento. Al intentar abrirla te das cuenta de que está\
							 cerrada. Debes encontrar las llaves que te permitan abrirla, por lo que decides\
							 deshacer tus pasos y volver al distribuidor.</p></br>");
                        system.doLink('inicio');
                    } else {
                        system.doLink('habitacion2');
                    }
                }
            }
    ),

    habitacion2: new undum.SimpleSituation(
            "",
            {
                enter: function (character, system, to) {
                    if ((batmovilResuelto == 1) || ((batmovilResuelto == 0) && (character.qualities.piezaCPU2 == 1))) {
                        system.write("<h1>SALA DE ENTRENAMIENTO</h1>\
		                <p align='center'> <img id='img' src='./recursos/imágenes/sala_entrenamiento.jpg' width='450' height='250' ></p>\
						<p>Entras en la sala de entrenamiento y tras revisar la habitación te das cuenta de que estás perdiendo el tiempo.</p>\
						<p class='transient'><a href='inicio' class='once'>Volver al distribuidor</a></p></br>");
                    } else {
                        system.write("<h1>SALA DE ENTRENAMIENTO</h1>\
		<p align='center'> <img id='img' src='./recursos/imágenes/sala_entrenamiento.jpg' width='450' height='250' ></p>\
		<p>Te encuentras en la sala donde entrenas diariamente tus\
		habilidades físicas, prácticas todo tipo de artes marciales y\
		te adiestras en el uso de todo tipo de armas blancas.</p></br>\
		<p>A simple vista todo está como lo sueles dejar todos los días\
		al terminar de entrenar, todo excepto <a href='./examinardojo' class='once'>el dojo</a>\
		que se encuentra ligeramente movido</p></br>\
		<p class='transient'><a href='inicio' class='once'>Volver al distribuidor</a></p></br>");
                    }
                },
                actions: {
                    'examinardojo': "<p>Te acercas al dojo y puedes\
				observar como alguien lo ha movido de lugar y, además\
				tiene un bulto en uno de los extremos. Levantas el dojo\
				y ahí está, una de las <a href='./recogerpieza' class='once'>piezas de la CPU</a> \
				que estabas buscando.</p></br>",

                    'recogerpieza': function (character, system, to) {
                        system.setQuality("piezaCPU2", 1);
                    }
                }
            }
    ),

    nodo_habitacion3: new undum.SimpleSituation(
            "",
            {
                enter: function (character, system, to) {
                    if (llaves == 0) {
                        system.write("<p>Te aproximas hasta la puerta acorazada que permite el paso\
							 al cuartel general. Al intentar abrirla te das cuenta de que está\
							 cerrada. Debes encontrar las llaves que te permitan abrirla, por lo que decides\
							 deshacer tus pasos y volver al distribuidor.</p></br>");
                        system.doLink('inicio');
                    } else {
                        system.doLink('habitacion3');
                    }
                }
            }
    ),

    habitacion3: new undum.SimpleSituation(
            "<h1>CUARTEL GENERAL</h1>\
		<p align='center'> <img id='img' src='./recursos/imágenes/cuartel_general.jpg' width='450' height='250' ></p>\
		<P>Te encuentras en la sala más grande de la batcueva, donde te\
		avituallas para las misiones, almacenas todas tus armas y tus\
		gadchets, y donde se encuentran tus laboratorios y talleres\
		principales. Es la sala que peor lleva el ataque que sigue en curso.\
		No eres capaz de distiguir a simple vista lo que está fuera de lugar,\
		deberás explorar las secciones que han sido atacadas:</p></br>\
		<p><ul class='options'>\
			<li><a href='./armeria' class='once'>Armería</a></li>\
			<li><a href='./quimica' class='once'>Laboratorio química</a></li>\
			<li><a href='./mecanica' class='once'>Taller de mecánica</a></li>\
		</ul>\
		</p></br>\
		<p class='transient'><a href='inicio' class='once'>Volver al distribuidor</a></p></br>",
            {
                actions: {
                    'armeria': function (character, system, to) {
                        if ((character.qualities.batgarra == 0)) {
                            system.write("<p>Inspeccionas la armería y puedes\
				alcanzar a observar que ha sufrido grandes deaños\
				solo queda en pie el armario blindado donde guardas\
				tus trajes, y otro pequeño donde guardas tu\
				<a href='./recogerbatgarra' class='once'>batgarra</a>\
				 con una serie de recambios de cable metálico\
				para esta.</p></br>");
                        } else {
                            system.write("<p>Inspeccionas la armería y puedes\
				alcanzar a observar que ha sufrido grandes deaños\
				solo queda en pie el armario blindado donde guardas\
				tus trajes, y otro pequeño donde guardas tu\
				batgarra\
				con una serie de recambios de cable metálico\
				para esta. No vas a encontrar nada nuevo aqui</p></br>")
                        }
                    },

                    'quimica': "<p>Te acercas a la sección donde se\
				encuentra tu laboratorio de química y ha sido completamente\
				destruido, por las marcas de abrasiones que se encuentran en\
				el lugar puedes deducir que lo han volado por los aires\
				ese laboratorio era ideal para analizar sustancias desconocidas\
				lastima. Pero ves algo extraño en el suelo lo observas con\
				detenimiento y descubres que se han dejado una <a href='./nota'>nota</a></p></br>",
				
				 'nota':"<p>Coges la nota y está algo requemada por lo que no se puede leer todo\
				           su contenido, pero puedes leer un párrafo: El intercabio será en el\
						    callejón del crimen.</p></br>",

                    'mecanica': function (character, system, to) {
                        if ((character.qualities.piezaCPU3 == 0) && (batmovilResuelto == 0)) {
                            system.write("<p>El taller de mecánica es el lugar que mejor\
				ha soportado el ataque. Tan solo han esparcido muchas de tus\
				herramientas por el suelo y derribado unos cuantos almacenes de piezas\
				, nada que el viejo Alfred no pueda arreglar en un día de duro trabajo.\
				Miras detenidamente el lugar y, en el centro del banco de trabajo principal,\
				encuentras <a href='./recogerpieza' class='once'> una de las piezas de la CPU</a>.</p></br>");
                        } else {
                            system.write("<p>El talle de mecánica es el lugar que mejor\
				ha soportado el ataque. Tan solo han esparcido muchas de tus\
				herramientas por el suelo y derribado unos cuantos almacenes de piezas\
				, nada que el viejo Alfred no pueda arreglar en un día de duro trabajo.\
				Miras detenidamente el lugar y, te das cuenta que aquí no vas a encontrar nada nuevo</p></br>");

                        }

                    },
                    'recogerpieza': function (character, system, to) {
                        system.setQuality("piezaCPU3", 1);
                    },

                    'recogerbatgarra': function (character, system, to) {
                        system.setQuality("batgarra", 1);
                    }
                }
            }
    ),

            
    nodo_gameover1: new undum.SimpleSituation(
            "",
            {
                enter: function (character, system, to) {
                    if (llaves == 0) {
                        system.write("<p>Te aproximas hasta la puerta acorazada que permite el paso\
							 al pasaje al exterior. Al intentar abrirla te das cuenta de que está\
							 cerrada. Debes encontrar las llaves que te permitan abrirla, por lo que decides\
							 deshacer tus pasos y volver al distribuidor.</p></br>");
                        system.doLink('inicio');
                    } else {
                        system.doLink('gameover1');
                    }
                }
            }
    ),

    gameover1: new undum.SimpleSituation(
            "<h1>GAME OVER</h1>\
			  <p align='center'> <img id='img' src='./recursos/imágenes/gameover.jpg' width='450' height='650' </p>\
			  <p> Introduces la llave en la cerradura de la puerta, la giras y la puerta se abre.\
			  Al abrir la puerta los encapuchados estaban esperandote y acaban contigo.</p></br>\
			  <p align='center'> <img id='img' src='./recursos/imágenes/muerte.jpg' width='450' height='250' ></p>\
			  <p><a href='inicio'>Volver a comenzar</a></p>",
            {
                exit: function (character, system, to) {
                    batcueva = 0;
                    callejon = 0;
                    comisaria = 0;
                    pfranco = 0;
                    llaves = 0;
                    salon = 0;
                    torre = 0;
                    sustancia = 0;
                    system.setQuality("piezaCPU1", 0);
                    system.setQuality("piezaCPU2", 0);
                    system.setQuality("piezaCPU3", 0);
                    system.setQuality("llavesBatcueva", 0);
                    system.setQuality("sustancia", 0);
                    system.setQuality("batgarra", 0);
                    system.setQuality("tarjetaAcred", 0);
                    system.setQuality("aturdidores", 1);
                    system.setQuality("batgranadas", 1);
                    system.setQuality("llaveSala", 0);
                    system.setQuality("lugaresVisitados", 0);
                    system.setQuality("total", 1);
                }
            }
    ),

    batmovil_arreglado: new undum.SimpleSituation(
            "<h1>BATMOVIL</h1>\
			  <p> align='center'> <img id='img' src='./recursos/imágenes/batmovil.jpg' width='450' height='250' ></p>\
			  <p> Entras al garaje y accedes al interior del batmovil, introduces cada una de las\
			  piezas recopiladas en las habitaciones en los slots para la cpu, entonces el batmovil\
			  arranca y <a href='nodo_batmovil'> Sales a descubrir la ciudad.</a></p>",
            {
                actions: {
                    'entrar': function (character, system, to) {
                        if (llaves == 0) {
                            system.write("<p>Te diriges hacia el batmovil y entras en él.</p></br>");
                            system.doLink('batmovil_roto');
                        } else {
                            system.write("<p>Te diriges hacia el batmovil y entras en él.</p></br>");
                            system.doLink('batmovil_arreglado');
                        }
                    }
                }
            }


    ),

    nodo_parkrow: new undum.SimpleSituation(
            "",
            {
                enter: function (character, system, to) {
                    if ((character.qualities.tarjetaAcred == 0) && (character.qualities.sustancia == 0) && (sustancia == 0)) {
                        system.doLink('parkrow');
                    } else if ((character.qualities.tarjetaAcred == 1) && (sustancia == 0) && (character.qualities.sustancia == 0)) {
                        system.doLink('parkrow1');
                    } else if ((character.qualities.tarjetaAcred == 0) && ((sustancia == 1) || (character.qualities.sustancia == 1))) {
                        system.doLink('parkrow2');
                    } else if ((character.qualities.tarjetaAcred == 1) && ((sustancia == 1) || (character.qualities.sustancia == 1))) {
                        system.doLink('parkrow3');
                    }
                }
            }
    ),

   parkrow: new undum.SimpleSituation(
            "<h1>CALLEJÓN DEL CRIMEN</h1>\
		<p align='center'> <img id='img' src='./recursos/imágenes/callejoncrimen.jpg' width='450' height='250' ></p>\
		<p>Te encuentras en el lugar el cual intentas evitar a toda costa. Lo tienes grabado\
		todo en la cabeza: aquella noche del 26 de Junio a las 10:27 pm tu vida cambió para\
		siempre, los acontecimientos que se desencadenarían desde ese momento te\
		convertirían en la persona que eres hoy. Te encuentras en Park Row, conocido como\
		<a class= raw target=_blank href='https://batman.fandom.com/es/wiki/Callej%C3%B3n_del_Crimen'>callejon del crimen</a>, el lugar donde asesinaron a tus padres.\
		</p></br>\
		<p>No hay tiempo que perder, debes ponerte en marcha, todas las evidencias te llevan\
		este lugar. Ante ti se encuentra el lugar donde asesinaron a tus padres, al fondo\
		del callejón se encuentran unos contenedores de basura, algunos de ellos\
		desparramados por el suelo. No hay mucho tiempo que perder pero, si así lo deseas,\
		podrías <a class='once' href='./fondo'>investigar más a fondo el callejón.</a>\
		</p></br>\
		<p>Te acercas al lugar exacto en el que asesinaron a tus padres, ya que sobre la\
        	silueta de los cuerpos de tus padres yacen ahora otros dos cuerpos.\
        	<p class='transient'><a class='once' href='./cogersustancia'>Examinar los cadáveres</a></p></br>\
		<p class='transient'><a class='once' href='nodo_batmovil'>Volver al batmovil.</a></p></br>",
            {

                enter: function (character, system, to) {
                    if (callejon == 0) {
                        callejon++;
                        system.animateQuality("lugaresVisitados", character.qualities.lugaresVisitados + 1);
                    }
                },

                actions: {
			'cogersustancia':  "<p>Te acercas a inspeccionar los cadáveres y en la chaqueta de uno de ellos encuentras <a class='once' href='./recogerbolsa' class='once'>\
						una bolsa de una sustancia la cual no parece muy legal.</a>\
						</p></br>\
						<p>Sin duda debes analizar la sustancia para averiguar de qué se trata. El ordenador\
			 			de tu batcueva no se encuentra 100 % operativo por lo que solo te queda una solución:\
			 			recurrir a un viejo amigo. Debes ir a la comisaría de Gotham y buscar al\
						 <a class= raw target=_blank href='https://batman.fandom.com/es/wiki/James_Gordon'>Comisario Gordon</a> para que te ayude a resolver el misterio.\
						</p></br>",
			'fondo': "<p>Te diriges al fondo del callejón y observas los contenedores, tras un vistazo rápido\
				 fijas tu atención en un destello.<a class='once' href='./examinardestello'> Te dispones a examinarlo.</a>\
				</p></br>",
			'examinardestello': "<p>Parece que alguien dejo su tarjeta de presentación tras una caída pero <a class='once' href='./piso'>¿Desde dónde?.</a>\
						</p></br>",
			'piso': "<p>Llegas al final del callejón y observas los cubos de basura esparcidos y, a unos\
		 		metros, encuentras un puñado de cristales rotos. Observas por encima de tu cabeza\
		 		y alcanzas a ver en la oscuridad de la noche una ventana con los cristales rotos.\
		 		Debes de investigar ese piso, puede que tenga algo que ver con los asesinatos del\
		 		callejón pero necesitas tu batgarra para salvar la altura a la que se encuentra.\
				</p></br>\
				<p class='transient'><a href='nodo_pisofranco'>entrar en piso franco.</a></br>",

                    'recogerbolsa': function (character, system, to) {
                        system.setQuality("sustancia", 1);
                    }
                }
            }
		
    ),
    
parkrow1: new undum.SimpleSituation(
            "<h1>CALLEJÓN DEL CRIMEN</h1>\
			<p align='center'> <img id='img' src='./recursos/imágenes/callejoncrimen.jpg' width='450' height='250' ></p>\
			<p>Te encuentras en Park Row, conocido como\
			Callejón del Crimen, el lugar donde asesinaron a tus padres.\
			</p></br>\
			<p>No hay tiempo que perder, debes ponerte en marcha, todas las evidencias te llevan a\
			este lugar. Ante ti se encuentra el lugar donde asesinaron a tus padres, al fondo\
			del callejón se encuentra el piso franco que anteriormente descubriste.\
			</p></br>\
			<p>Te acercas al lugar exacto en el que asesinaron a tus padres, ya que sobre la\
            		silueta de los cuerpos de tus padres yacen ahora otros dos cuerpos.</p>\
			<p class='transient'><a class='once' href='./cogersustancia'>Examinar los cadáveres.</a></p></br>\
			<p class='transient'><a class='once' href= 'nodo_pisofranco'>Entrar en piso franco.</a></p></br>\
			<p class='transient'><a class='once' href= 'nodo_batmovil'>Volver al batmovil.</a></p></br>",
	{
                actions: {
    
    			'cogersustancia':  "<p>Te acercas a inspeccionar los cadáveres y en la chaqueta de uno de ellos encuentras <a class='once' href='./recogerbolsa' class='once'>\
						una bolsa de una sustancia la cual no parece muy legal.</a>\
						</p></br>\
						<p>Sin duda debes analizar la sustancia para averiguar de qué se trata. El ordenador\
			 			de tu batcueva no se encuentra 100 % operativo por lo que solo te queda una solución:\
			 			recurrir a un viejo amigo. Debes ir a la comisaría de Gotham y buscar al \
			 			<a class= raw target=_blank href='https://batman.fandom.com/es/wiki/James_Gordon'>Comisario Gordon</a> para que te ayude a resolver el misterio.\
						</p></br>",
            
                    'recogerbolsa': function (character, system, to) {
                        system.setQuality("sustancia", 1);
                    }
                }
            }
    ),
    

    parkrow2: new undum.SimpleSituation(
            "<h1>CALLEJÓN DEL CRIMEN</h1>\
			<p align='center'> <img id='img' src='./recursos/imágenes/callejoncrimen.jpg' width='450' height='250' ></p>\
			<p>Te encuentras en Park Row, conocido como\
			Callejón del Crimen, el lugar donde asesinaron a tus padres.\
			</p></br>\
			<p>No hay tiempo que perder, debes ponerte en marcha, tienes suficientes pistas \
			para continuar con tu aventura. Pero antes de darte la vuelta y proseguir tu \
			camino recuerdas los contenedores que se encontraban desparramados al fondo del\
			callejón. Si así lo deseas, podrías investigar más a fondo el callejón.</p></br>\
			<p>Te diriges al fondo del callejón y observas los contenedores, tras un vistazo rápido\
			 fijas tu atención en un destello. Te dispones a examinarlo.\
			</p></br>\
			<p>Parece que alguien dejo su tarjeta de presentación tras una caída pero ¿Desde dónde?.\
			</p></br>\
			<p>Llegas al final del callejón y observas los cubos de basura esparcidos y, a unos\
			 metros, encuentras un puñado de cristales rotos. Observas por encima de tu cabeza\
			 y alcanzas a ver en la oscuridad de la noche una ventana con los cristales rotos.\
			 Debes de investigar ese piso, puede que tenga algo que ver con los asesinatos del\
			 callejón pero necesitas tu batgarra para salvar la altura a la que se encuentra.\
			</p></br>\
			<p><a href= 'nodo_pisofranco'>entrar en piso franco.</a></br>\
			<a href= 'nodo_batmovil'>Volver al batmovil.</a></p></br>"
            ),

    parkrow3: new undum.SimpleSituation(
            "<h1>CALLEJON DEL CRIMEN</h1>\
			<p align='center'> <img id='img' src='./recursos/imágenes/callejoncrimen.jpg' width='450' height='250' ></p>\
			<p>Te encuentras en Park Row, conocido como Callejón del Crimen, el lugar donde asesinaron a tus padres.\
			</p></br>\
			<p>No hay tiempo que perder, debes ponerte en marcha, tienes suficientes pistas\
			para continuar con tu aventura. Aún así, si no te importa perder un poco de tiempo\
			podrías <a href= 'nodo_pisofranco'>volver al piso franco.</a></p></br>\
			<p><a href= 'nodo_batmovil'>Volver al batmovil</a></p></br>"
            ),

    nodo_comisaria: new undum.SimpleSituation(
            "",
            {
                enter: function (character, system, to) {
                    if (sustancia == 0) {
                        system.doLink('comisaria');
                    } else {
                        system.doLink('comisaria1');
                    }
                }
            }
			
    ),
    comisaria: new undum.SimpleSituation(
            "<a class= raw align= center href='https://batman.fandom.com/es/wiki/Edificio_del_DPGC'><h1>CALLEJON DEL CRIMEN</h1></a>\
		<p align='center'> <img id='img' src='./recursos/imágenes/Comisaria.jpg' width='450' height='250' ></p>\
		<p>Llegas a la comisaría de Gotham city al amparo de la noche, inutilizas el sistema\
		 de alumbrado para colarte y ,al llegar a su despacho, ahí está: James Gordon.\
		</p></br>\
                <p align='center'> <img id='img' src='./recursos/imágenes/james-gordon.jpg' width='450' height='450' ></p>\
		<p>-Ah, eres tú, era de esperar al fin y al cabo. Con alivio retira la mano de la pistolera.\
		</p></br>\
                <p><a class='once' href='./entregar_sustancia'>Entregar la sustancia a Gordon</a></p></br>",
            {
                enter: function (character, system, to) {
                    if (comisaria == 0) {
                        comisaria++;
                        system.animateQuality("lugaresVisitados", character.qualities.lugaresVisitados + 1);
                    }
                },
                actions: {
                    'entregar_sustancia': function (character, system, to) {
                        system.setQuality("sustancia", 0);
                        sustancia = 1;
                        system.write("<p>-¿Qué puedes decirme de esto?. Dices tras depositar en su escritorio la bolsa con la\
                                      sustancia que encontraste en Park Row. Lo tenía uno de los cadáveres de Park Row.\
                                        </p></br>\
                                        <p>-Anoche realizamos una regada en un piso franco. Un soplo anónimo nos dió la dirección\
                                        de lo que creíamos un traficante de poca monta. Cuando llegamos había escapado por la ventana.\
                                        Cuando nuestros chicos llegaron al callejón pudieron abatirlo, pero no estaba solo.\
                                         Junto a él abatieron a uno de los hombres de <a class= raw target=_blank href='https://batman.fandom.com/es/wiki/Jonathan_Crane_(Nueva_Tierra)'>Jonathan Crane</a>.\
                                        </p></br>\
                                        <p>El espantapajaros, un viejo amigo.\
                                        </p></br>\
                                        <p>-Está claro que el soplo se equivocaba. Con Crane subimos de nivel.\
                                        </p></br>\
                                        <p>-Sí, pero Batman, sabes que no puedo analizar una prueba sustraída de una escena del crimen.\
                                         Podrían incriminarme. Además, no entiendo a qué se debe todo esto.\
                                        </p></br>\
                                        <p>-James, esta noche han atacado mi guarida. No sé quién ni por qué pero no dispongo de los\
                                         medios para analizar esto. Por favor, no te pediría que te arriesgaras por mi si no fuera mi última opción.\
                                        </p></br>\
                                        <p>-Maldita sea, déjame que llame a <a class= raw target=_blank href='https://batman.fandom.com/es/wiki/Barbara_Gordon'>Bárbara</a> ella sabrá qué hacer. Apresurado, Gordon coge\
                                         la bolsa del escritorio y sale de su despacho.\
                                        </p></br>\
                                        <p>Tras 45 minutos de espera Gordon vuelve a su despacho.\
                                        </p></br>\
                                        <p align='center'> <img id='img' src='./recursos/imágenes/james-gordon2.jpg' width='450' height='250' ></p>\
                                        <p>-No preguntes cómo, pero lo tengo: la sustancia se trata de la toxina del pánico.\
                                        </p></br>\
                                        <p>Sin duda, Jonathan Crane está detrás de esos asesinatos y, por consecuencia, está detrás\
                                         del ataque del ataque a tu guarida.\
                                        </p></br>\
                                        <p>-Esto es grande, Batman. Estos últimos meses hemos estado desarticulando una red de tráfico\
                                         ilegal de la tóxina. Crane la estaba colando en las cárceles de todos los distritos haciendo enloquecer\
                                         a los presos y originando motines. Nos ha costado contener la situación, pero esto quiere decir que se\
                                         nos están escapando líneas de distribución.\
                                        </p></br>\
                                        <p>-No por mucho tiempo. Dices decidido. Esta noche se acabó, ¿Dónde puedo encontrarle?.\
                                        </p></br>\
                                        <P>-Hemos estado siguiendo sus pasos muy de cerca, se está refugiando en el <a class= raw target=_blank href='https://batman.fandom.com/es/wiki/Sala_Iceberg'>salón iceberg</a>.\
                                         Está al amparo de Oswald Cobblepot, desde allí es prácticamente intocable.\
                                        </p></br>\
                                        <p>-Ya lo veremos.\
                                        </p></br>\
                                        <p><a href='nodo_batmovil'>Volver al batmovil.</a></p></br>");
                    }
                }
            }
    ),

    comisaria1: new undum.SimpleSituation(
            "<a class= raw align= center href='https://batman.fandom.com/es/wiki/Edificio_del_DPGC'><h1>CALLEJON DEL CRIMEN</h1></a>\
		<p align='center'> <img id='img' src='./recursos/imágenes/Comisaria.jpg' width='450' height='250' ></p>\
		<p>Llegas a la comisaría de Gotham city al amparo de la noche, inutilizas el sistema\
		 de alumbrado para colarte y ,al llegar a su despacho, ahí está: James Gordon.\
		</p></br>\
		<p>-¡¿Qué demonios haces aquí?! ¡¡No hay tiempo que perder maldita sea!! ¡¡Largo de aquí!!\
		</p></br>\
                <p>Tiene razón, no voy a conseguir nada nuevo aquí.</p></br>\
                <p><a href='nodo_batmovil'>Volver al batmovil.</a></p></br>"
            ),

    nodo_pisofranco: new undum.SimpleSituation(
            "",
            {
                enter: function (character, system, to) {
                    if (character.qualities.batgarra == 0) {
                        system.write("<p>Elebas la mirada hacia el acceso de la ventana, es un quinto piso.\
							Examinas con la mirada la fachada del edificio buscando una escalera\
							de emergencia o alguna estructura lo suficientemente estable como\
							 para permitirte llegar hasta la ventana del piso.</p></br>\
							<p> Tu búsqueda es en bano, no hay manera de llegar hasta tu objetivo\
							 sin ayuda. Debes encontrar un modo de escalar la fachada.</p></br>");
                        system.doLink('nodo_parkrow');
                    } else {
                        system.write("<p> Hechas tu mano a tu cinturón buscando tu batgarra, la coges y apuntas a\
							la cornisa del edificio calculando la trayectoria del disparo. Disparas y aciertas\
							la diana, en cuestión de segundos te encuentras en lo alto del edifico sano y salvo.</p></br>");
                        system.doLink('pisofranco');
                    }
                }
            }
    ),

    pisofranco: new undum.SimpleSituation(
            "",
            {
                enter: function (character, system, to) {
                    if (pfranco == 0) {
                        pfranco++;
                        system.animateQuality("lugaresVisitados", character.qualities.lugaresVisitados + 1);
                    }
                    if (character.qualities.tarjetaAcred == 0) {
                        system.write("<a class= raw align= center href='https://batman.fandom.com/es/wiki/Edificio_Prewitt'><h1>PISO FRANCO</h1></a>\
								<p align='center'> <img id='img' src='./recursos/imágenes/piso_franco.jpg' width='450' height='250' ></p>\
								<p>Tras escalar el edificio con tu batgarra consigues introducirte en el piso franco.\
		 						Todo está quemado, poco queda ya de lo que había en la estancia. Puedes volver al\
								 callejón o seguir explorando la habitación.\
								</p></br>\
								<p>Tras observar detenidamente lo ves claro: alguien intentó deshacerse de pruebas\
								 antes de que lo pillaran y saltó por la ventana, pero no todo acabó destruido. Te agachas\
								 ante los restos de lo que debió ser un escritorio y, tras retirar un montón de cenizas,\
								 encuentras una <a href='./recogertarjeta' class='once'>tarjeta de acreditación.</a>\
								 La tarjeta tiene el logo del Salón Iceberg, interesante.\
								</p></br>\
								<p class='transient'><a href='nodo_parkrow'>Volver al callejón.</a></p></br>");
                    } else {
                        system.write("<a class= raw align= center href='https://batman.fandom.com/es/wiki/Edificio_Prewitt'><h1>PISO FRANCO</h1></a>\
								<p align='center'> <img id='img' src='./recursos/imágenes/piso_franco.jpg' width='450' height='250' ></p>\
								<p>Tras escalar el edificio con tu batgarra consigues introducirte en el piso franco.\
		 						Todo está quemado, poco queda ya de lo que había en la estancia. No vas a encontrar nada nuevo\
								en esta localización, tan solo una perdida de tiempo descomunal.</p></br>\
								</p></br>\
								<p class='transient'><a href='nodo_parkrow'>Volver al callejón y dejar de perder el tiempo.</a></p></br>");
                    }
                },
                actions: {
                    'recogertarjeta': function (character, system, to) {
                        system.setQuality("tarjetaAcred", 1);
                    }
                },
                exit: function (character, system, to) {
                    system.write("<p>Saltas por la ventana decidido y consigues llegar al callejón sin un rasguño gracias a tu capa.</p></br>");
                }
            }
    ),

    nodo_saloniceberg: new undum.SimpleSituation(
            "",
            {
                enter: function (character, system, to) {
                    if (salon == 0) {
                        system.doLink('saloniceberg');
                    } else {
                        system.doLink('salon_bloqueado');
                    }
                }
            }

    ),
	
    saloniceberg: new undum.SimpleSituation(
            "<h1>SALÓN ICEBERG</h1>\
		<p align='center'> <img id='img' src='./recursos/imágenes/Salon_iceberg.jpg' width='450' height='250' ></p>\
		<p>Llegas al exterior del establecimiento que regenta el <a class= raw target=_blank href='https://batman.fandom.com/es/wiki/Oswald_Cobblepot'>Pingüino</a> y la calle está desierta,\
		 está claro que te están esperando.\
		</p></br>\
		<p>Al entrar en el hall no te encuentras a nadie, avanzas hasta la entrada del salón principal\
		 del establecimiento. Aprietas los puños tras un mal presentimiento.\
		</p></br>\
                <p align='center'> <img id='img' src='./recursos/imágenes/matonessalon.jpg' width='450' height='250' ></p>\
		<p>Al entrar, todos los matones del pingüino están apuntandote con sus armas. Detrás de ellos,\
		 se encuentra Oswald, al que parece que le ha entrado la risa floja al verte entrar. Justo detrás\
		 suya puedes observar una puerta acorazada.\
		</p></br>\
		<p>-¡Mira quién se ha dignado a aparacer!. Grita Cobblepot.\
		</p></br>\
		<p>-¡¿Qué andáis tramando Crane y tú?!.\
		</p></br>\
		<p>-Esparaba al menos un saludo, Batman. Sea como sea poco importa lo que tramemos mi socio y yo,\
		 tu viaje ha llegado a su fin.. Acto seguido, ves como el pingüino hace una señal a sus secuaces\
		 para que abran fuego.\
		</p></br>\
		<p class='transient'>Debes pensar rápido: puedes <a href='./lanzaraturdidores' class='once'>lanzar tus aturdidores sónicos</a>,\
		 o <a href='./lanzargranadas' class='once'>tus bat-granadas de bat-humo.</a>\
		</p></br>",
            {
                enter: function (character, system, to) {
                    if (salon == 0) {
                        salon++;
                        system.animateQuality("lugaresVisitados", character.qualities.lugaresVisitados + 1);
                    }
                },
                actions: {
                    'lanzaraturdidores': function (character, system, to) {
                        system.setQuality("aturdidores", 0);
                        system.doLink('final1');
                    },
                    'lanzargranadas': function (character, system, to) {
                        system.setQuality("batgranadas", 0);
                        system.doLink('combateconjefe');
                    }
                }
            }
    ),

    salon_bloqueado: new undum.SimpleSituation(
            "<h1>SALÓN ICEBERG</h1>\
		<p align='center'> <img id='img' src='./recursos/imágenes/Salon_iceberg.jpg' width='450' height='250' ></p>\
                <p>Vuelves al salón iceberg dispuesto a desbloquear esa puerta blindada.</p></br>\
                <p>Al entrar en la sala principal te encuentras con los hombres de Gordon. \
                Han tomado el lugar, arrestando a todos los delicuentes que habatiste anteriormente y están\
                desmantelando el lugar.</p></br>\
                <p>Te aproximas a la puerta blindada, donde un grupo de polícias que anteriormente\
                intentaban derribar la puerta blindada están ahora absortos ante tu presenecia.</p></br>\
                <p class = 'transient'><a href='nodo_crane'>Abrir puerta blindada</a></p></br>"),

    final1: new undum.SimpleSituation(
            "<h1>GAME OVER</h1>\
               <p>Lanzas tus aturdidores sónicos a los pies del grupo de matones. Justo antes de que pudieran disparar,\
		los aturdidores hacen su ruído ensordecedor lo que provoca que todos los presentes en la sala menos tú se\
		lleven las manos a las orejas irremediablemente.\
		</p></br>\
		<p align='center'> <img id='img' src='./recursos/imágenes/batmanacorralado.jpg' width='450' height='250' ></p>\
		<p>Aprovechas la oportunidad para nockear a los cuatro matones más cercanos. Mientras atacas al quinto,\
		notas un golpe seco en la espalda, te han disparado. Menos mal que tu traje puede soportar algunos tiros.\
		Te apresuras y lanzas al matón que te ha disparado tu víctima y justo cuando vas a avalanzarte,\
		notas que tu cuerpo se paraliza. Te han aturdido con una pistola taser, ahora estás a merced de tus enemigos.</p></br>\
		<p align='center'> <img id='img' src='./recursos/imágenes/muerte.jpg' width='450' height='250' ></p>\
		<p class = 'transient' ><a href='inicio'>Volver a comenzar</a></p>",
            {
                exit: function (character, system, to) {
                    batcueva = 0;
                    callejon = 0;
                    comisaria = 0;
                    pfranco = 0;
                    llaves = 0;
                    salon = 0;
                    torre = 0;
                    sustancia = 0;
                    system.setQuality("piezaCPU1", 0);
                    system.setQuality("piezaCPU2", 0);
                    system.setQuality("piezaCPU3", 0);
                    system.setQuality("llavesBatcueva", 0);
                    system.setQuality("sustancia", 0);
                    system.setQuality("batgarra", 0);
                    system.setQuality("tarjetaAcred", 0);
                    system.setQuality("aturdidores", 1);
                    system.setQuality("batgranadas", 1);
                    system.setQuality("llaveSala", 0);
                    system.setQuality("lugaresVisitados", 0);
                    system.setQuality("total", 1);
                }
            }
    ),

    combateconjefe: new undum.SimpleSituation(
            "<p>Antes de que puedan apretar el disparador de sus armas, lanzas tus bat-granadas de bat-humo las cuales\
		 estallan antes de tocar el suelo haciendo que ninguno de los presentes puedan ver a más de un palmo de\
		 la cara. Activas tu visión nocturna y lanzas un batarang a las armas de cada uno de los matones,\
		 desarmándolos en el acto. A continuación, empiezas a nockear a cada uno de los matones hasta\
		 encontrarte justo delante del Cobblepot.\
		</p></br>\
                <p align='center'> <img id='img' src='./recursos/imágenes/puñetazopingüino.png' width='450' height='250' ></p>\
		<p>El humo se disipa y, tras observar la escena que ahora se presenta delante de él, puedes\
		 notar como el pavor se adueña de su cara. Antes de que pueda mediar palabra, acaricias con\
		 tu puño su cara dejándolo inconsciente en el acto.\
		</p></br>\
		<p>Frente a tí, la puerta blindada. Tiene un mecanismo de identificación mediante tarjeta.\
		</p></br>\
                <p class = 'transient'><a href='nodo_crane'>Abrir puerta blindada</a></p></br>"
            ),

    nodo_crane: new undum.SimpleSituation(
            "",
            {
                enter: function (character, system, to) {
                    if (character.qualities.tarjetaAcred == 0) {
                        system.write("<p>Examinas el panel de identificación detenidamente e intentas hackearlo\
                            con tus herramientas. Intento tras intento fallas en tu cometido.</p></br>\n\
                            <p>En tu último intento te percatas de una forma familiar en la superfice\
                            de la puerta blindada, es el símbolo de industrias <a class= raw target=_blank href='https://batman.fandom.com/es/wiki/Empresas_Wayne'>Wayne</a>.</p></br>\
                            <p> No sabes cómo ha ido a parar una de estas puertas a un lugar como este\
                             pero una cosa tienes clara, no vas a conseguir piratearla.</p></br>\
                            <p> Debes encontrar una forma de abrir esa puerta blindada, decidido\
                            vuelves al batmovil dispuesto a encontrar una solución a este callejón sin salida</p></br>");
                        system.doLink('nodo_batmovil');
                    } else {
                        system.write("<p>Sacas la tarjeta que encontraste en el piso franco de Park Row y entras en la camara acorazada.\
		</p></br>");
                        system.setQuality("tarjetaAcred", 0);
                        system.doLink('crane');
                    }
                }
            }
    ),

    crane: new undum.SimpleSituation(
            "<p>Dentro de la cámara, te encuentras con una habitación llena de lujos. Justo en el centro de\
		 la cámara  encuentras a Crane, quien observas que va a empezar a hablar.\
		</p></br>\
		<p class = 'transient'><a href='gameover4'>Dejar que hable</a> o <a href='crane_derrotado'>hundir tu puño en su cara.</a>\
		</p></br>"
            ),

    crane_derrotado: new undum.SimpleSituation(
            "<p>Te apresuras a acercarte a Crane y, antes de que medie palabra, hundes tu puño en su cara.\
		 Esto hace que caiga al suelo, perdiendo un control remoto que guardaba en el bolsilo.\
		</p></br>\
		<p>Pisas el control remoto destruyendolo y asestas otro puñetazo con todas tus fuerzas\
		 a la cara de Crane.\
		</p></br>\
		<p>-Si tienes un mínimo de amor propio más te vale empezar a hablar pronto.\
		 Dices decidido levantando el puño para propinar otro puñetazo a tu víctima.\
		</p></br>\
		<p>-¡Espera! ¡Hablaré!. Grita Espantapájaros horrorizado al ver tu puño elevarse.\
		</p></br>\
		<p>-Eso me figuraba. ¿Por qué has atacado la batcueva, cómo sabías de su localización?\
		 Si me mientes, lo sabré. Dices, ordenando mientras a tu detector de ritmo cardíaco que\
		 te muestre las lecturas de Crane.\
		</p></br>\
		<p>-Yo no ataqué tu guarida, yo solo me encargo de la toxina.\
		</p></br>\
		<p>-¿Qué tóxina? ¿De qué me estás hablando?\
		</p></br>\
		<p>-Si quieres respuestas, ve a la <a class= raw target=_blank href='https://batman.fandom.com/es/wiki/Torre_Wayne'>Torre Wayne</a> A estas alturas,\
	 	encontrarás todas las respuestas allí.\
		</p></br>\
		<p>Al terminar de articular la última frase nockeas a Crane, dejándolo inconsciente.\
		 Llamas a Gordon para que envíe a sus hombre a limpiar el sitio.\
		</p></br>\
		<p><a href='saloniceberg2'>Volver al batmovil.</a></p></br>"),

    gameover4: new undum.SimpleSituation(
            "<h1>GAME OVER</h1>\
                <p>Conforme te acercas a él empieza a hablar: \
		</p></br>\
		<p>-Vaya, justo me preguntaba cuánto tardarías en encontrarme.\
		</p></br>\
		<p>-Basta de juegos, espantapájaros.\
		</p></br>\
                <p align='center'> <img id='img' src='./recursos/imágenes/muertegaseado.jpg' width='450' height='250' ></p>\
		<p>Crane aprieta un control remoto que tenía en el bolsillo activando unos aspersores en la pared\
		 que rocían toda la estancia con la toxina de espantapájaros, lo cual te deja en el suelo en estado catatónico.\
		 Has fracasado.</p></br>\
                <p align='center'> <img id='img' src='./recursos/imágenes/muerte.jpg' width='450' height='250' ></p>\
		<p class = 'transient' ><a href='inicio'>Volver a comenzar</a></p>",
            {
                exit: function (character, system, to) {
                    batcueva = 0;
                    callejon = 0;
                    comisaria = 0;
                    pfranco = 0;
                    llaves = 0;
                    salon = 0;
                    torre = 0;
                    sustancia = 0;
                    system.setQuality("piezaCPU1", 0);
                    system.setQuality("piezaCPU2", 0);
                    system.setQuality("piezaCPU3", 0);
                    system.setQuality("llavesBatcueva", 0);
                    system.setQuality("sustancia", 0);
                    system.setQuality("batgarra", 0);
                    system.setQuality("tarjetaAcred", 0);
                    system.setQuality("aturdidores", 1);
                    system.setQuality("batgranadas", 1);
                    system.setQuality("llaveSala", 0);
                    system.setQuality("lugaresVisitados", 0);
                    system.setQuality("total", 1);
                }
            }
    ),

    nodo_batmovil: new undum.SimpleSituation(
            "",
            {
                enter: function (character, system, to) {
                    if (callejon == 0) {
                        system.doLink('batmovil1');
                    } else if ((character.qualities.sustancia == 0) && (sustancia == 0)) {
                        system.doLink('batmovil1');
                    } else if (character.qualities.sustancia == 1) {
                        system.doLink('batmovil2');
                    } else if (sustancia == 1) {
                        system.doLink('batmovil3');
                    }
                }
            }
    ),

    batmovil1: new undum.SimpleSituation(
            "<h1 class='transient'>BATMÓVIL</h1>\
                <p class='transient' align='center'> <img id='img' src='./recursos/imágenes/ciudad.jpg' width='450' height='150' ></p>\
                <p class = 'transient'>El ordenador de abordo te pide un destino:</p></br>\
                <p><ul class='options'>\
			<li><a href='inicio'>Batcueva</a></li>\
			<li><a href='nodo_parkrow'>Callejón del crimen</a></li>\
		</ul>\
		</p></br>"
            ),

    batmovil2: new undum.SimpleSituation(
            "<h1 class='transient'>BATMÓVIL</h1>\
            <p class='transient' align='center'> <img id='img' src='./recursos/imágenes/ciudad.jpg' width='450' height='150' ></p>\
            <p class = 'transient'>El ordenador de abordo te pide un destino:</p></br>\
            <p><ul class='options'>\
			<li><a href='inicio'>Batcueva</a></li>\
			<li><a href='nodo_parkrow'>Callejón del crimen</a></li>\
			<li><a href='nodo_comisaria'>Comisaria de Gotham</a></li>\
		</ul>\
		</p></br>"
            ),

    batmovil3: new undum.SimpleSituation(
            "<h1 class='transient'>BATMÓVIL</h1>\
            <p class='transient' align='center'> <img id='img' src='./recursos/imágenes/ciudad.jpg' width='450' height='150' ></p>\
            <p class = 'transient'>El ordenador de abordo te pide un destino:</p></br>\
                <p><ul class='options'>\
			<li><a href='inicio'>Batcueva</a></li>\
			<li><a href='nodo_parkrow'>Callejón del crimen</a></li>\
			<li><a href='nodo_comisaria'>Comisaria de Gotham</a></li>\
			<li><a href='nodo_saloniceberg'>Salón Iceberg</a></li>\
		</ul>\
		</p></br>"
            ),

    batmovil3: new undum.SimpleSituation(
            "<h1 class='transient'>BATMÓVIL</h1>\
            <p class='transient' align='center'> <img id='img' src='./recursos/imágenes/ciudad.jpg' width='450' height='150' ></p>\
            <p class = 'transient'>El ordenador de abordo te pide un destino:</p></br>\
                <p><ul class='options'>\
			<li><a href='inicio'>Batcueva</a></li>\
			<li><a href='nodo_parkrow'>Callejón del crimen</a></li>\
			<li><a href='nodo_comisaria'>Comisaria de Gotham</a></li>\
			<li><a href='nodo_saloniceberg'>Salón Iceberg</a></li>\
		</ul>\
		</p></br>"
            ),

    saloniceberg2: new undum.SimpleSituation(
            "<p>Antes de que vuelvas al batmóvil, escuchas como Crane vuelve a recuperar la conciencia, \
		quiere ayudarte:\
		</p></br>\
		<p>-Espera, creo que será mejor que te ayude. No te puedo decir quien está detrás de todo \
		esto, pero puedo conseguir que llegues hasta él, así que vamos a planear algo.\
		</p></br>\
		<p>-Vale, ¿qué propones?\
		</p></br>\
		<p>-Se me ocurren dos formas de poder llegar allí: la primera consiste en que \
		<a href='llamarymentir'>yo le llame y le haga creer que has sido derrotado</a>, \
		la segunda opción sería <a href='vencidoenlacalle'>fingir que eres vencido en la entrada del club</a>, \
		donde podría comprobarlo por sí mismo ya que nos vigila desde su estancia. \
		O ahora que recuerdo, el villano siempre suele pedir sobre estas horas al kebab que hay \
		en la esquina, así que también podemos <a href='llamarkebab'>hacer una llamada al kebab.</a>\
		</p></br>"
            ),

    llamarymentir: new undum.SimpleSituation(
            "<p align='center'> <img id='img' src='./recursos/imágenes/batmanacorralado.jpg' width='450' height='250' ></p>\
		<p>Hace la llamada, y al cabo de 5 minutos el local se llena de hombres que trabajan para el villano, \
		quienes os acribillan a ti y a Crane.</p></br>\
		<p align='center'> <img id='img' src='./recursos/imágenes/muerte.jpg' width='450' height='250' ></p>\
		<p><a href='inicio'>Volver a comenzar</a></p>"
            ),

    vencidoenlacalle: new undum.SimpleSituation(
            "<p align='center'> <img id='img' src='./recursos/imágenes/batmanacorralado.jpg' width='450' height='250' ></p>\
		<p>Sales, finge que te vencen y esperas a que el villano se vaya a dormir. Te diriges hasta la torre, \
		y justo cuando dispones a entrar te topas con la cuadrilla de bienvenida que ni siquiera te deja saludar. \
		Has sido derrotado.</p></br>\
		<p align='center'> <img id='img' src='./recursos/imágenes/muerte.jpg' width='450' height='250' ></p>\
		<p><a href='inicio'>Volver a comenzar</a></p>"
            ),

    llamarkebab: new undum.SimpleSituation(
            "<p>-Se me está ocurriendo algo al respecto: puedo llamar al encargado y hacer un trato con él para que \
		ponga otra sustancia en su pedido que nos ayudará a ganar tiempo, al fin y al cabo no se va a negar a \
		llevarse una pequeña comisión por estos servicios.\
		</p></br>\
		<p>La llamada al kebab se hace y el encargado accede al trato.\
		</p></br>\
		<p>-Bingo, tenemos lo que queremos. Escúchame atentamente: el encargado se va a encargar de poner un poco \
		de laxante en el pedido. Así, el villano tendrá que ir al sanitario inmediatamente, sin que le de tiempo \
		a poner a nadie a vigilar en su lugar, momento en el que podrás salir de aquí inmediatamente y llegar hasta \
		allí sin haber levantado sospecha ninguna. A partir de ahí, el plan queda en tus manos.\
		</p></br>\
		<p>-Esta idea tiene ya otro color. Avísame cuando ocurra esto.\
		</p></br>\
		<p>Pasada una hora, se cumple todo lo planeado y el villano se retira de su lugar de vigilancia, quedando el \
		club nocturno sin vigilancia ninguna. Sales del club, pero ahora tienes un dilema: \
		<a href='cogerbatmovil'>coger el batmovil</a> o <a href='ircaminando'>ir caminando.</a>\
		</p></br>"
            ),

    cogerbatmovil: new undum.SimpleSituation(
            "<p align='center'> <img id='img' src='./recursos/imágenes/batmanacorralado.jpg' width='450' height='250' ></p>\
		<p>Si coges el batmovil, el villano volverá a la sala de vigilancia, y verá que ya no estsá allí. Así se \
		anticipará a tu llegada, y te esperará con un comité de bienvenida con el que no podrás hacer nada, \
		y habrás sido derrotado.</p></br>\
		<p align='center'> <img id='img' src='./recursos/imágenes/muerte.jpg' width='450' height='250' ></p>\
		<p><a href='inicio'>Volver a comenzar</a></p>"
            ),

    ircaminando: new undum.SimpleSituation(
            "<h1>TORRE WAYNE</h1>            \
			<p align='center'> <img id='img' src='./recursos/imágenes/torrewayne.jpg' width='450' height='250' ></p>\
		<p>Finalmente, decides ir caminando. Llegas a la torre, y al subir a lo más alto, te encuentras con que la \
		escolta que custodia su residencia está distraída. Así, accedes de forma inmediata al interior, y se \
		presenta el primer dilema: el villano se supone que debe estar ya en la sala de vigilancia, pero eres \
		consciente de que sería más vulnerable allí ya que podría estar armado y es bastante factible que además \
		la habitación esté protegida, por lo que la otra opción sería ir al baño directamente, donde la cosa estaría \
		más a tu favor. Entoces, tienes dos opciones: <a href='irsalavigilancia'>ir a la sala de vigilancia</a>\
		o <a href='irbanio'>ir al baño.</a>\
		</p></br>",
            {
                enter: function (character, system, to) {
                    if (torre == 0) {
                        torre++;
                        system.animateQuality("lugaresVisitados", character.qualities.lugaresVisitados + 1);
                    }
                }
            }
    ),

    irsalavigilancia: new undum.SimpleSituation(
            "<h1>SALA DE VIGILANCIA</h1>\
		<p>Al principio, te decantas por ir primero a la sala de vigilancia, y te encuentras con que la entrada está \
		bloqueada. Ante esta situación, puedes hacer dos cosas: puedes <a href='forzarentrada'>probar a forzar la entrada</a> \
		o <a href='mirarsuelo'>mirar detalladamente</a> a ver si por casualidad hubiera algo que te ayude a desbloquear la \
		entrada de forma más serena.\
		</p></br>"
            ),

    forzarentrada: new undum.SimpleSituation(
            "<p align='center'> <img id='img' src='./recursos/imágenes/batmanacorralado.jpg' width='450' height='250' ></p>\
		<p>Fuerzas la entrada, e inmediatamente salta la alarma. Ya no te vale, el villano se presenta con unos de sus hombres \
		y te reducen. Fracaso.</p></br>\
		<p align='center'> <img id='img' src='./recursos/imágenes/muerte.jpg' width='450' height='250' ></p>\
		<p><a href='inicio'>Volver a comenzar</a></p>"
            ),

    mirarsuelo: new undum.SimpleSituation(
            "<p>Visto esto, empiezas a mirar a tu alrededor, y entre la oscuridad del pasillo, descubres un objeto brillante: \
		<a href='./recogerllavesala' class='once'>¡es una llave y…</a>\
		</p></br>",
            {
                actions: {
                    'recogerllavesala': function (character, system, to) {
                        system.setQuality("llaveSala", 1);
                        system.write("<p>es la que desbloquea la cerradura! Abres la puerta con cautela, pero para tu sorpresa te encuentras con que no \
								está allí tu objetivo. Así, inmediatamente, <a href='irbanio'>te diriges al baño.</a></p>");
                    }
                }
            }
    ),

    irbanio: new undum.SimpleSituation(
            "<h1>BAÑO</h1>\
		<p>Una vez llegas allí, ves una pequeña ráfaga de luz que asoma bajo la puerta. Esto te hace pensar que tu objetivo se \
		encuentra allí, y decides sorprenderlo. Abres la puerta y apuntas con un revólver: descubres que el villano es <a class= raw target=_blank href='https://batman.fandom.com/es/wiki/Dos_Caras'>Dos Caras</a>, y \
		sólo tienes unos segundos para decidir entre <a href='disparar'>disparar</a> o \
		<a href='dejarquehable'>dejar que hable y se explique.</a>\
		</p></br>"
            ),

    disparar: new undum.SimpleSituation(
            "<p align='center'> <img id='img' src='./recursos/imágenes/batmanacorralado.jpg' width='450' height='250' ></p>\
		<p>Tras disparar, sus hombres se alarman de la situación y acuden al lugar. Te reducen y acaban contigo. Has sido derrotado.</p></br>\
		<p align='center'> <img id='img' src='./recursos/imágenes/muerte.jpg' width='450' height='250' ></p>\
		<p><a href='inicio'>Volver a comenzar</a></p>"
            ),

    dejarquehable: new undum.SimpleSituation(
            "<p>Finalmente, dejas que hable.\
		</p></br>\
		<p>-Tú, ¿que estás tramando?\
		</p></br>\
		<p>-¿Cómo has sido capaz de encontrarme y acceder hasta aquí sin haber armado ni un solo ruido?\
		</p></br>\
		<p>-Tu comité de vigilancia, que es muy efectivo. Te recomiendo que los mandes al paro. ¡Explícate ahora!\
		</p></br>\
		<p>-Supongo que no tengo otra alternativa…\
		</p></br>\
		<p>-Ni lo quieras comprobar.\
		</p></br>\
		<p>-Todo esto surge de mi famosa moneda de dos caras, sabes que yo de por sí no tengo ese espíritu maligno para obrar de esta manera. \
		Simplemente, estaba tratando el asunto de la toxina, cuando en ese momento vi una noticia sobre ti en el periódico. Inconscientemente, \
		relacioné una cosa con la otra y… ya puedes imaginarte el resto. Para resolver este pensamiento, tuve que lanzar la moneda, y el \
		resultado no fue para nada bueno.\
		</p></br>\
		<p>-Pues sólo te digo una cosa: o empiezas a tratarte ese trastorno que no te conviene, o me obligarás a acabar contigo en este mismo \
		momento.\
		</p></br>\
		<p>Y Dos Caras tuvo que acceder a solucionar su problema. Batman lo puso en manos de especialistas que, con ayuda de un tratamiento, \
		comenzaron a luchar contra su trastorno.\
		</p></br>\
		<p>FIN\
		</p></br>"
            )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "inicio";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {

    piezaCPU1: new undum.OnOffQuality("Pieza de CPU", {
        priority: "0001",
        group: 'inventario',
        onDisplay: "<img src='./recursos/imágenes/piezaCPU1.png' width='175' height='85'>"}),

    piezaCPU2: new undum.OnOffQuality("Pieza de CPU", {
        priority: "0002",
        group: 'inventario',
        onDisplay: "<img src='./recursos/imágenes/piezaCPU2.png' width='175' height='85'>"}),

    piezaCPU3: new undum.OnOffQuality("Pieza de CPU", {
        priority: "0003",
        group: 'inventario',
        onDisplay: "<img src='./recursos/imágenes/piezaCPU3.png' width='175' height='85'>"}),

    llavesBatcueva: new undum.OnOffQuality("Llaves de la Batcueva", {
        priority: "0004",
        group: 'inventario',
        onDisplay: "<img src='./recursos/imágenes/llaves.png' width='170' height='85'>"}),

    sustancia: new undum.OnOffQuality("Sustancia para analizar", {
        priority: "0005",
        group: 'inventario',
        onDisplay: "<img src='./recursos/imágenes/sustancia.jpg' width='175' height='85'>"}),

    batgarra: new undum.OnOffQuality("Batgarra", {
        priority: "0006",
        group: 'inventario',
        onDisplay: "<img src='./recursos/imágenes/batgarra.png' width='175' height='85'>"}),

    tarjetaAcred: new undum.OnOffQuality("Tarjeta de ID", {
        priority: "0007",
        group: 'inventario',
        onDisplay: "<img src='./recursos/imágenes/tarjetaAcred.jpg' width='175' height='85'>"}),

    aturdidores: new undum.OnOffQuality("Aturdidores sónicos", {
        priority: "0008",
        group: 'inventario',
        onDisplay: "<img src='./recursos/imágenes/aturdidores.jpeg' width='175' height='85'>"}),

    batgranadas: new undum.OnOffQuality("Granadas de humo", {
        priority: "0009",
        group: 'inventario',
        onDisplay: "<img src='./recursos/imágenes/batgranadas.png' width='175' height='85'>"}),

    llaveSala: new undum.OnOffQuality("Llave de la sala de vigilancia", {
        priority: "0010",
        group: 'inventario',
        onDisplay: "<img src='./recursos/imágenes/llaves.png' width='175' height='85'>"}),

    lugaresVisitados: new undum.IntegerQuality("Escenarios visitados", {
        priority: "0001",
        group: 'progreso'}),

    total: new undum.OnOffQuality(" de 6 escenarios.", {
        priority: "0002",
        group: 'progreso',
        onDisplay: ""})
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {

    inventario: new undum.QualityGroup('Inventario', {priority: "0002"}),
    progreso: new undum.QualityGroup('Progreso', {priority: '0001'})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {

    character.qualities.piezaCPU1 = 0;
    character.qualities.piezaCPU2 = 0;
    character.qualities.piezaCPU3 = 0;
    character.qualities.llavesBatcueva = 0;
    character.qualities.sustancia = 0;
    character.qualities.batgarra = 0;
    character.qualities.tarjetaAcred = 0;
    character.qualities.aturdidores = 1;
    character.qualities.batgranadas = 1;
    character.qualities.llaveSala = 0;
    character.qualities.lugaresVisitados = 0;
    character.qualities.total = 1;
};
