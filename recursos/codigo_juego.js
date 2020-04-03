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

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
	/*<img src="recursos\imágenes\batcueva.jfif">*/

	inicio: new undum.SimpleSituation(
            "<h1>INTRODUCCIÓN</h1>\
			<p align='center'> <img id='img' src='./recursos/imágenes/batcueva.jpg' width='450' height='250' ></p>\
		<p>Te encuentras en el distribuidor de la batcueva y quieres salir de allí lo antes\
		 posible, ya que te encuentras indefenso y unos encapuchados quieren aprovechar esta situación\
		 para acabar contigo. Miras a tu alrededor y puedes ver cinco puertas, cuatro de ellas\
		 están cerradas y no puedes acceder a su interior, y la unica que está abierta es la \
         puerta de acceso al garaje. Por lo tanto puedes <a href='garaje'>Entrar al garaje</a>\
		 o <a href='distribuidor1'>Quedarte en el distribuidor.</a></p>"
		 
    ),
	
	garaje: new undum.SimpleSituation(
	      "<h1>GARAJE</h1>\
		  <p> Accedes al Garaje intentando buscar la mejor solución para poder salir de la batcueva\
		  totalmente ileso. Frente a ti puedes ver el batmovil y tienes la opción de <a href='batmovil_roto'>Entrar al batmovil</a>\
		  e intentar salir del garaje. Pero sigues buscando otra solución alternativa y te percatas de\
		  que la puerta de salida a la calle del garaje se encuentra abierta, por lo tanto también sopesas\
		  si <a href='calle1'>Salir directamente por la puerta.</a></p>"
     ),

    distribuidor1: new undum.SimpleSituation(
	        "<h1>DISTRIBUIDOR</h1>\
			<p> Has decidido quedarte dentro de la batcueva totalmente indefenso y los encapuchados han aprovechado\
			la situación y han acabado contigo.\
			<a href='inicio'>Volver a comenzar</a></p>"
	     ),
			
	calle1: new undum.SimpleSituation(
	          "<h1>SALIR POR EL GARAJE</h1>\
			  <p> Te diriges hacia la puerta de salida del garaje con intención de pasar por ella para\
			  acceder a la calle pero, al acercarte a la puerta pisas un objeto extraño y cae una red\
			  sobre ti. ¡Los encapuchados te han puesto una trampa y te han atrapado!\
			  <a href='inicio'>Volver a comenzar.</a></p>"
		),	
		
    batmovil_roto: new undum.SimpleSituation(
	          "<h1>BATMOVIL</h1>\
			  <p> Estas sentado en el asiento del conductor y pruebas arrancarlo, no arranca e\
			  intentas encontrar una solución, buscas el posible error del batmovil y te percatas de\
			  que los slots donde van alojadas las piezas de la cpu están vacios. Te dispones a buscar\
			  las piezas de la cpu dentro del vehiculo y algo en el asiento del acompañante llama tu\
			  atención... <a href='./examinarasiento' class='once'>examinar asiento</a></p></br>",
			  {
				actions: {
						'examinarasiento': "<p>Enciendes las luces de la cabina para ver mejor\
								 y logras distinguir una figura familiar:\
								 <a href='./recogerllaves' class='once'>las llaves de la batcueva</a></p></br>",
						
						'recogerllaves': function(character, system, to) {
                						system.setQuality("llavesBatcueva", 1);
								system.write("<p>Ahora que tienes en tu poder las llaves de la batcueva\
								puedes acceder a las estancias que estaban antes bloqueadas.</p></br>\
								<p class='transient'>Te encuentras en la texitura de volver al distribuidor y <a href='distribuidor2'>Probar las llaves</a>\
			  					o <a href='batmovil2'>Seguir buscando las piezas en el batmovil.</a></p>");
								}
				}
			}	 
			  
	),
	
	batmovil2: new undum.SimpleSituation(
	          "<h1>BATMOVIL</h1>\
			  <p> Sigues en el batmovil buscando las piezas de la cpu, notas una presencia,\
			  miras hacia atrás, sientes como los encapuchads te atrapan con sus garras y acaban contigo\
			  <a href='inicio'>Volver a comenzar.</a></p>"	 
			  
	),
	
	distribuidor2: new undum.SimpleSituation(
	           "<h1>DISTRIBUIDOR</h1>\
			   <p>Vuelves al distribuidor a probar las llaves y ahora puedes acceder a las habitaciones de la batcueva:\
				<ul class='options'>\
					<li><a href='habitacion1' class='once'>Sala de comunicaciones</a></li>\
					<li><a href='habitacion2' class='once'>Sala de entrenamiento</a></li>\
					<li><a href='habitacion3' class='once'>Cuartel general</a></li>\
				</ul></p>\
 			   <p>recopilas todas las piezas y ves en el juego de llaves, una llave que no has usado.\
			   Puedes <a href='calle2'>Probarla en la puerta que da a la calle</a> o\
			   <a href='batmovil_arreglado'> Ir al garaje y montar la cpu en el batmovil.</a></p>"
	
	),

	habitacion1: new undum.SimpleSituation(
		"<h1>SALA DE COMUNICACIONES</h1>\
		<p>Te encuentras en la sala de comunicaciones, donde Alfred y tú\
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
		<p class='transient'><a href='distribuidor2' class='once'>Volver al distribuidor</a></p></br>",
		{
            		actions: {
                		'examinarbrillo': "<p>Te aproximas a la altura\
				del teclado y puedes observar que el brillo es\
				sin lugar a dudas una de las <a href='./recogerpieza' class='once'>piezas de la CPU</a> \
				que estabas buscando.</p></br>",
				
				'recogerpieza': function(character, system, to) {
                		system.setQuality("piezaCPU1", 1);
				}
            		}
        	}
	),

	habitacion2: new undum.SimpleSituation(
		"<h1>SALA DE ENTRENAMIENTO</h1>\
		<p>Te encuentras en la sala donde entrenas diariamente tus\
		habilidades físicas, prácticas todo tipo de artes marciales y\
		te adiestras en el uso de todo tipo de armas blancas.</p></br>\
		<p>A simple vista todo está como lo sueles dejar todos los días\
		al terminar de entrenar, todo excepto <a href='./examinardojo' class='once'>el dojo</a>\
		que se encuentra ligeramente movido</p></br>\
		<p class='transient'><a href='distribuidor2' class='once'>Volver al distribuidor</a></p></br>",
		{
            		actions: {
                		'examinardojo': "<p>Te acercas al dojo y puedes\
				observar como alguien lo ha movido de lugar y, además\
				tiene un bulto en uno de los extremos. Levantas el dojo\
				y ahí está, una de las <a href='./recogerpieza' class='once'>piezas de la CPU</a> \
				que estabas buscando.</p></br>",
				
				'recogerpieza': function(character, system, to) {
                		system.setQuality("piezaCPU2", 1);
				}
            		}
        	}
	),

	habitacion3: new undum.SimpleSituation(
		"<h1>CUARTEL GENERAL</h1>\
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
		<p class='transient'><a href='distribuidor2' class='once'>Volver al distribuidor</a></p></br>",
		{
            		actions: {
                		'armeria': "<p>Inspeccionas la armería y puedes\
				alcanzar a observar que ha sufrido grandes deaños\
				solo queda en pie el armario blindado donde guardas\
				tus trajes, y otro pequeño donde guardas tu\
				<a href='./recogerbatgarra' class='once'>batgarra</a>\
				 con una serie de recambios de cable metálico\
				para esta.</p></br>",
				
				'quimica': "<p>Te acercas a la sección donde se\
				encuentra tu laboratorio de química y ha sido completamente\
				destruido, por las marcas de abrasiones que se encuentran en\
				el lugar puedes deducir que lo han volado por los aires\
				ese laboratorio era ideal para analizar sustancias desconocidas,\
				lastima.</p></br>",

				'mecanica': "<p>El talle de mecánica es el lugar que mejor\
				ha soportado el ataque. Tan solo han esparcido muchas de tus\
				herramientas por el suelo y derribado unos cuantos almacenes de piezas\
				, nada que el viejo Alfred no pueda arreglar en un día de duro trabajo.\
				Miras detenidamente el lugar y, en el centro del banco de trabajo principal,\
				encuentras <a href='./recogerpieza' class='once'> una de las piezas de la CPU</a>.</p></br>",

				'recogerpieza': function(character, system, to) {
                		system.setQuality("piezaCPU3", 1);
				},

				'recogerbatgarra':function(character, system, to) {
                		system.setQuality("batgarra", 1);
				}
            		}
        	}
	),
	
	calle2: new undum.SimpleSituation(
	          "<h1>PUERTA A LA CALLE DE LA BATCUEVA</h1>\
			  <p> Introduces la llave en la cerradura de la puerta, la giras y la puerta se abre.\
			  Al abrir la puerta los encapuchados estaban esperandote y acaban contigo.\
			  <a href='inicio'>Volver a comenzar</a></p>"  
	),
	
	batmovil_arreglado: new undum.SimpleSituation(
	          "<h1>BATMOVIL</h1>\
			  <p> Entras al garaje y accedes al interior del batmovil, introduces cada una de las\
			  piezas recopiladas en las habitaciones en los slots para la cpu, entonces el batmovil\
			  arranca y <a href='batmovil'> Sales a descubrir la ciudad.</a></p>"
			  
	),
    parkrow: new undum.SimpleSituation(
            "<h1>CALLEJÓN DEL CRIMEN</h1>\
		<p>Te encuentras en el lugar el cual intentas evitar a toda costa. Lo tienes grabado\
		todo en la cabeza: aquella noche del 26 de Junio a las 10:27 pm tu vida cambió para\
		siempre, los acontecimientos que se desencadenarían desde ese momento te\
		convertirían en la persona que eres hoy. Te encuentras en Park Row, conocido como\
		Callejón del Crimen, el lugar donde asesinaron a tus padres.\
		</p></br>\
		<p>No hay tiempo que perder, debes ponerte en marcha, todas las evidencias te llevan\
		este lugar. Ante ti se encuentra el lugar donde asesinaron a tus padres, al fondo\
		del callejón se encuentran unos contenedores de basura, algunos de ellos\
		desparramados por el suelo. No hay mucho tiempo que perder pero, si así lo deseas,\
		podrías investigar más a fondo el callejón.\
		</p></br>\
		<p>Te acercas al lugar exacto en el que asesinaron a tus padres, ya que sobre la\
		 silueta de los cuerpos de tus padres yacen ahora otros dos cuerpos. Te acercas\
		 a inspeccionar los cadáveres y en la chaqueta de uno de ellos encuentras <a href='./recogerbolsa' class='once'>\
		una bolsa de una sustancia la cual no parece muy legal.</a>\
		</p></br>\
		<p>Sin duda debes analizar la sustancia para averiguar de qué se trata. El ordenador\
		 de tu batcueva no se encuentra 100 % operativo por lo que solo te queda una solución:\
		 recurrir a un viejo amigo. Debes ir a la comisaría de Gotham y buscar al comisario\
		 Gordon para que te ayude a resolver el misterio.\
		</p></br>\
		<p>Te diriges al fondo del callejón y observas los contenedores, tras un vistazo rápido\
		 fijas tu atención en un destello. Te dispones a examinarlo.\
		</p></br>\
		<p>Parece que alguien dejo su tarjeta de presentación tras una caída pero ¿Desde dónde?.\
		</p></br>\
		<p>Llegas al final del callejón y observas los cubos de basura esparcidos y, a unos\
		 metros, encuentras un puñado de cristales rotos. Observas por encima de tu cabeza\
		 y alcanzas a ver en la oscuridad de la noche una ventana con los cristales rotos.\
		 Debes de investigar ese piso, puede que tenga algo que ver con los asesinatos del\
		 callejón pero necesitas tu batgarra para salvar la altura a la que se encuentra. Usar\
		 batgarra para entrar en el piso franco.\
		</p></br>\
		<p><a href= 'pisofranco'>entrar en piso franco.</a></br>\
		<a href= 'batmovil'>Volver al batmovil.</a></p></br>",
		{
			actions: {
					'recogerbolsa': function(character, system, to) {
                			system.setQuality("sustancia", 1);
					}
				}
		}
    ),

	comisaria: new undum.SimpleSituation(
            "<h1>COMISARIA DE GOTHAM</h1>\
		<p align='center'> <img id='img' src='./recursos/imágenes/Comisaria.jpg' width='450' height='250' ></p>\
		<p>Llegas a la comisaría de Gotham city al amparo de la noche, inutilizas el sistema\
		 de alumbrado para colarte y ,al llegar a su despacho, ahí está: James Gordon.\
		</p></br>\
		<p>-Ah, eres tú, era de esperar al fin y al cabo. Con alivio retira la mano de la pistolera.\
		</p></br>\
		<p>-¿Qué puedes decirme de esto?. Dices tras depositar en su escritorio la bolsa con la\
		 sustancia que encontraste en Park Row. Lo tenía uno de los cadáveres de Park Row.\
		</p></br>\
		<p>-Anoche realizamos una regada en un piso franco. Un soplo anónimo nos dió la dirección\
		 de lo que creíamos un traficante de poca monta. Cuando llegamos había escapado por la ventana.\
		 Cuando nuestros chicos llegaron al callejón pudieron abatirlo, pero no estaba solo.\
		 Junto a él abatieron a uno de los hombres de Jonathan Crane.\
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
		<p>-Maldita sea, déjame que llame a Bárbara, ella sabrá qué hacer. Apresurado, Gordon coge\
		 la bolsa del escritorio y sale de su despacho.\
		</p></br>\
		<p>Tras 45 minutos de espera Gordon vuelve a su despacho.\
		</p></br>\
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
		<P>-Hemos estado siguiendo sus pasos muy de cerca, se está refugiando en el Salón Iceberg.\
		 Está al amparo de Oswald Cobblepot, desde allí es prácticamente intocable.\
		</p></br>\
		<p>-Ya lo veremos.\
		</p></br>\
		<p><a href='batmovil'>Volver al batmovil.</a></p></br>"
    ),

	pisofranco: new undum.SimpleSituation(
            "<h1>PISO FRANCO</h1>\
		<p>Apuntas con tu batgarra a la cornisa y consigues introducirte en el piso franco.\
		 Todo está quemado, poco queda ya de lo que había en la estancia. Puedes volver al\
		 callejón o seguir explorando la habitación.\
		</p></br>\
		<p>Tras observar detenidamente lo ves claro: alguien intentó deshacerse de pruebas\
		 antes de que lo pillaran y saltó por la ventana, pero no todo acabó destruido. Te agachas\
		 ante los restos de lo que debió ser un escritorio y, tras retirar un montón de cenizas,\
		 encuentras una <a href='./recogertarjeta' class='once'>tarjeta de acreditación.</a>\
		 La tarjeta tiene el logo del Salón Iceberg, interesante.\
		</p></br>\
		<p><a href='parkrow'>Volver al callejón.</a></p></br>",
		{
			actions:{
				'recogertarjeta':function(character, system, to) {
                			system.setQuality("tarjetaAcred", 1);
					}
				}
		}
    ),

	saloniceberg: new undum.SimpleSituation(
            "<h1>SALÓN ICEBERG</h1>\
		<p>Llegas al exterior del establecimiento que regenta el pingüino y la calle está desierta,\
		 está claro que te están esperando.\
		</p></br>\
		<p>Al entrar en el hall no te encuentras a nadie, avanzas hasta la entrada del salón principal\
		 del establecimiento. Aprietas los puños tras un mal presentimiento.\
		</p></br>\
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
			actions:{
				'lanzaraturdidores':function(character, system, to) {
                						system.setQuality("aturdidores", 0);
								system.doLink('final1');
								},
				'lanzargranadas':function(character, system, to) {
                						system.setQuality("batgranadas", 0);
								system.doLink('combateconjefe');
								}
			}
		}
    ),
	
	final1: new undum.SimpleSituation(
		"<p>Lanzas tus aturdidores sónicos a los pies del grupo de matones. Justo antes de que pudieran disparar,\
		los aturdidores hacen su ruído ensordecedor lo que provoca que todos los presentes en la sala menos tú se\
		lleven las manos a las orejas irremediablemente.\
		</p></br>\
		<p>Aprovechas la oportunidad para nockear a los cuatro matones más cercanos. Mientras atacas al quinto,\
		notas un golpe seco en la espalda, te han disparado. Menos mal que tu traje puede soportar algunos tiros.\
		Te apresuras y lanzas al matón que te ha disparado tu víctima y justo cuando vas a avalanzarte,\
		notas que tu cuerpo se paraliza. Te han aturdido con una pistola taser, ahora estás a merced de tus enemigos.\
		</p></br>"
	),

	combateconjefe: new undum.SimpleSituation(
		"<p>Antes de que puedan apretar el disparador de sus armas, lanzas tus bat-granadas de bat-humo las cuales\
		 estallan antes de tocar el suelo haciendo que ninguno de los presentes puedan ver a más de un palmo de\
		 la cara. Activas tu visión nocturna y lanzas un batarang a las armas de cada uno de los matones,\
		 desarmandolos en el acto. A continuación, empiezas a nockear a cada uno de los matones hasta\
		 encontrarte justo delante del Cobblepot.\
		</p></br>\
		<p>El humo se disipa y, tras observar la escena que ahora se presenta delante de él, puedes\
		 notar como el pavor se adueña de su cara. Antes de que pueda mediar palabra, acaricias con\
		 tu puño su cara dejándolo inconsciente en el acto.\
		</p></br>\
		<p>Frente a tí, la puerta blindada. Tiene un mecanismo de identificación mediante tarjeta.\
		</p></br>\
		<p>Sacas la tarjeta que encontraste en el piso franco de Park Row y entras en la camara acorazada.\
		</p></br>\
		<p>Dentro de la cámara, te encuentras con una habitación llena de lujos. Justo en el centro de\
		 la cámara  encuentras a Crane, quien observas que va a empezar a hablar.\
		</p></br>\
		<p>Dejar que hable o hundir tu puño en su cara.\
		</p></br>\
		<p>Conforme te acercas a él empieza a hablar: \
		</p></br>\
		<p>-Vaya, justo me preguntaba cuánto tardarías en encontrarme.\
		</p></br>\
		<p>-Basta de juegos, espantapájaros.\
		</p></br>\
		<p>Crane aprieta un control remoto que tenía en el bolsillo activando unos aspersores en la pared\
		 que rocían toda la estancia con la toxina de espantapájaros, lo cual te deja en el suelo en estado catatónico.\
		 Has fracasado.\
		</p></br>\
		<p>Te apresuras a acercarte a Crane y, antes de que medie palabra, hundes tu puño en su cara.\
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
		<p>-Si quieres respuestas, ve a la Torre Wayne. A estas alturas,\
	 	encontrarás todas las respuestas allí.\
		</p></br>\
		<p>Al terminar de articular la última frase nockeas a Crane, dejándolo inconsciente.\
		 Llamas a Gordon para que envíe a sus hombre a limpiar el sitio.\
		</p></br>\
		<p><a href='saloniceberg2'>Volver al batmovil.</a></p></br>"
		),

	batmovil: new undum.SimpleSituation(
            "<h1>CIUDAD</h1>\
		<p><ul class='options'>\
			<li><a href='parkrow'>Callejón del crimen</a></li>\
			<li><a href='comisaria'>Comisaria de Gotham</a></li>\
			<li><a href='saloniceberg'>Salón Iceberg</a></li>\
		</ul>\
		</p></br>"
	),
	
	saloniceberg2: new undum.SimpleSituation(
			"<h1>SALÓN ICEBERG</h1>\
		<p>Antes de que vuelvas al batmóvil, escuchas como Crane vuelve a recuperar la conciencia, \
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
		"<p>Hace la llamada, y al cabo de 5 minutos el local se llena de hombres que trabajan para el villano, \
		quienes os acribillan a ti y a Crane.\
		</p></br>"
	),

	vencidoenlacalle: new undum.SimpleSituation(
		"<p>Sales, finge que te vencen y esperas a que el villano se vaya a dormir. Te diriges hasta la torre, \
		y justo cuando dispones a entrar te topas con la cuadrilla de bienvenida que ni siquiera te deja saludar. \
		Has sido derrotado.</p></br>"
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
		"<p>Si coges el batmovil, el villano volverá a la sala de vigilancia, y verá que ya no estsá allí. Así se \
		anticipará a tu llegada, y te esperará con un comité de bienvenida con el que no podrás hacer nada, \
		y habrás sido derrotado.\
		</p></br>"
	),

	ircaminando: new undum.SimpleSituation(
			"<h1>TORRE WAYNE</h1>\
		<p>Finalmente, decides ir caminando. Llegas a la torre, y al subir a lo más alto, te encuentras con que la \
		escolta que custodia su residencia está distraída. Así, accedes de forma inmediata al interior, y se \
		presenta el primer dilema: el villano se supone que debe estar ya en la sala de vigilancia, pero eres \
		consciente de que sería más vulnerable allí ya que podría estar armado y es bastante factible que además \
		la habitación esté protegida, por lo que la otra opción sería ir al baño directamente, donde la cosa estaría \
		más a tu favor. Entoces, tienes dos opciones: <a href='irsalavigilancia'>ir a la sala de vigilancia</a>\
		o <a href='irbanio'>ir al baño.</a>\
		</p></br>"
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
		"<p>Fuerzas la entrada, e inmediatamente salta la alarma. Ya no te vale, el villano se presenta con unos de sus hombres \
		y te reducen. Fracaso.\
		</p></br>"
	),

	mirarsuelo: new undum.SimpleSituation(
		"<p>Visto esto, empiezas a mirar a tu alrededor, y entre la oscuridad del pasillo, descubres un objeto brillante: \
		<a href='./recogerllavesala' class='once'>¡es una llave y…</a>\
		</p></br>",
		{
			actions:{
				'recogerllavesala':function(character, system, to) {
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
		encuentra allí, y decides sorprenderlo. Abres la puerta y apuntas con un revólver: descubres que el villano es Dos Caras, y \
		sólo tienes unos segundos para decidir entre <a href='disparar'>disparar</a> o \
		<a href='dejarquehable'>dejar que hable y se explique.</a>\
		</p></br>"
	),

	disparar: new undum.SimpleSituation(
		"<p>Tras disparar, sus hombres se alarman de la situación y acuden al lugar. Te reducen y acaban contigo. Has sido derrotado.\
		</p></br>"
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
		
	piezaCPU1: new undum.OnOffQuality("Pieza 1 de la CPU", {
		priority: "0001",
		group: 'inventario',
		onDisplay: ""}),

	piezaCPU2: new undum.OnOffQuality("Pieza 2 de la CPU", {
		priority: "0002",
		group: 'inventario',
		onDisplay: ""}),

	piezaCPU3: new undum.OnOffQuality("Pieza 3 de la CPU", {
		priority: "0003",
		group: 'inventario',
		onDisplay: ""}),

	llavesBatcueva: new undum.OnOffQuality("Llaves de la Batcueva", {
		priority: "0004",
		group: 'inventario',
		onDisplay: ""}),

	sustancia: new undum.OnOffQuality("Sustancia para analizar", {
		priority: "0005",
		group: 'inventario',
		onDisplay: ""}),
		
	batgarra: new undum.OnOffQuality("Batgarra", {
		priority: "0006",
		group: 'inventario',
		onDisplay: ""}),

	tarjetaAcred: new undum.OnOffQuality("Tarjeta de ID", {
		priority: "0007",
		group: 'inventario',
		onDisplay: ""}),

	aturdidores: new undum.OnOffQuality("Aturdidores sónicos", {
		priority: "0008",
		group: 'inventario',
		onDisplay: ""}),

	batgranadas: new undum.OnOffQuality("Batgranadas de humo", {
		priority: "0009",
		group: 'inventario',
		onDisplay: ""}),

	llaveSala: new undum.OnOffQuality("Llave de la sala de vigilancia", {
		priority: "0010",
		group: 'inventario',
		onDisplay: ""})

	

};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {

    inventario: new undum.QualityGroup('Inventario', {priority: "0001"})
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
};
