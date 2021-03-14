/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Pedro Álvarez",
                Photo: "pedro.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Tiene un par de semanas libres del trabajo, y quiere organizar un viaje con su familia",
                touch1: "familia",
                feel1: "5",
                con1: "Tiene claro el destino, pero no sabe muy bien que actividades se pueden hacer allí",
                ima1: "cartoon-writting2.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet paginas que organicen actividades y planifiquen itinerarios",
                touch2: "ordenador",
                feel2: "3",
                con2: "Hay muchas páginas similares y no sabe cúal podría ser mejor",
                ima2: "cartoon-PCtyping.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Se decide por una web en la que ofertan diversos tours y actividades en grupo",
                touch3: "web (civitatis)",
                feel3: "3",
                con3: "Comparar las opciones que se ofrecen, viendo precios y reseñas de otras personas",
                ima3: "cartoon-looking.png",
                
                /*** PASO #4: OBSERVA ***/ 

                goal4: "Descubre que existe una aplicacion para el movil para controlar tus reservas y planes",
                touch4: "móvil (app)",
                feel4: "3",
                con4: "Tiene que crearse una cuenta de usuario, y la aplicacion en el movil no se ve muy bien, por lo que no se aclara",
                ima4: "cartoon-phone.png",
                
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Hay varias actividades que tienen buena pinta y quiere reservarlas",
                touch5: "web (civitatis)",
                feel5: "2",
                con5: "Tener que compaginar las fechas de las actividades con los vuelos ya que esta página no los incluye",
                ima5: "cartoon-PChard.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar las actividades que quería menos una que no había fechas disponibles",
                touch6: "familia",
                feel6: "4",
                con6: "Aunque espera que vaya bien, le preocupa un poco que a sus hijos no les guste el viaje",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Irene Pérez",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere realizar un viaje con sus amigas, duración máxima 2 semanas y precio inferior a los 60€",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere a un país de otro continente con ambiente universitario",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Empieza buscar en internet distintas páginas webs que oferten viajes",
                touch2: "Servicio (agencia)",
                feel2: "4",
                con2: "No sabe que página elegir y desconfía de las ofertas más baratas porque no sabe si son un timo o no",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Ante la indecesión, pregunta a su círculo cercano y le recomiendan que escoja el viaje fuera de temporada dado que es más barato",
                touch3: "Móvil (Whatsapp)",
                feel3: "2",
                con3: "Piensa que ha perdido el tiempo buscando viajes sin tener un objetivo claro ni dónde buscar",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca cuáles son las mejores webs e investiga viajes en sus destinos preferentes fuera de fecha",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "No hay mucha información sobre los destinos en la página, le permiten hacer la reserva de vuelo y alojamiento en la misma web pero desconoce experiencias de otros usuarios",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Tras decidir el destino con sus compañeras, realizan la reserva viaje ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "El formulario es tedioso y pide muchos datos difíciles de buscar",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Por fin consiguen finalizar la reserva y disponer del viaje que habían acordado. No se ha quedado muy contenta con la experiencia de búsqueda y reserva además de que le hubiera gustado contar con valoraciones de otros viajer@s",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Buscará en foros ayuda sobre a qué sitios acudir, restaurantes recomendados del lugar, que ropa llevar, etc.",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



