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
				Name: "Monica Suarez",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con su familia para Verano, tiene sólo 15 dias libres",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere ir a un pais exotico pero que tenga atracciones para niños pequeños",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Ir a una agencia de viajes, y decirle sus preferencias y planes",
                touch2: "Servicio (agencia)",
                feel2: "4",
                con2: "Tiene que desplazarse a agencia, explica su intenciones, le llamaran porque no hay nada interesante",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Le llaman a los pocos días con un viaje que no le convence",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Piensa que ha perdido el tiempo",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca una oferta en hoteles cerca de playa y con parque atracciones",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "No hay mucha información del alojamiento ni de lo que hay alrededor, aunque el precio está bien, va por la calle por lo que está incómoda",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a traves de la aplicación ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Le pide muchos datos y le resulta incómodo completar formulario",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie reservar para vacaciones pero no era lo que tenía en mente",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Tendrá que buscar más información del lugar para ver que actividades ofrece y donde aparacar!",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



