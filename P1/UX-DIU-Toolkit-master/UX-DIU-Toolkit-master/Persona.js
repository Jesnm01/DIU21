/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Pedro Álvarez",
				Photo: "man.png",
				Quote: "La vida es buena por sólo dos cosas, descubrir y enseñar las matemáticas. – Simeon Poisson",
				Age: 55,
				Occupation: "Profesor de matemáticas.",
				Family: "20 años casado con su mujer Carmen y con 2 hijos (Javier y Alejandra).",
				Location: "Jaén (Cazorla).",
				Character: "Es muy risueño, calmado y optimista.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Disfrutar el tiempo libre con la familia.", "Descubrir nuevas culturas.", "Aprovechar ahora que ha adquirido cierta sabiduría con los años y tiene una vida más tranquila.", "Escribir un libro sobre la relación entre las matemáticas y el modus-operandi que crea en las personas"],
				Frustrations: ["Sabe lo justo de tecnología, sólo para temas académicos.", "Le gustaría hacer planes diferentes a los habituales.", "No haber podido conocer tanto mundo cómo le gustaría.", "Por cuestiones económicas no permitirse darle a sus hijos una mejor vida con experiencias más enriquecedoras"],
				Bio: "Es de Cazorla, estudió el grado de matemáticas en la Universidad de Jaén y tras prepararse las oposiciones durante 4 años le dieron una plaza en un pueblo Cádiz dónde conoció a su futura mujer. Posteriormente, consiguión reasignarse a su pueblo natal y formó allí su familia. Desde entonces, no han hecho vida mucho más alla de la provincia de Jaén y les gustaría conocer mundo.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Su familia llevaba unos años bastante mal económicamente y ahora que se han recuperado le gustaría compensarles con un viaje.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Irene Pérez",
				Photo: "woman.png",
				Quote: " La medicina es el arte de disputar los hombres a la muerte de hoy, para cedérselos en mejor estado, un poco más tarde. (Noel Clarasó)",
				Age: 22,
				Occupation: "Estudiante",
				Family: "Su padre Juan está en los 54 años, su madre María en los 50 años y su hermana Marta tiene 16",
				Location: "Badajoz",
				Character: "Es una chica decidida, amistosa y muy fiel a sus seres queridos",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["En un futuro quiere tener su propia clínica privada.", "Le gustaría acabar la carrera de medicina en 6 años.", "Quiere tener 2 hijos.", "Le encantaría hacer uno o varios viajes con sus compañeras de piso."],
				Frustrations: ["Le perturba mucho la idea de suspender un examen e ir a la extraordinaria.", "No puede ahorrar tanto cómo quisiera ya que tiene que pagar muchas cosas cómo el piso, comida, vida en la ciudad ...", "Le encantaría empezar a viajar más ahora ya que con su familia solo ha ido espontáneamente de vacaciones de verano a la playa.", "Está un poco cansada de su entorno y le gustaría conocer cómo es la vida fuera del país."],
				Bio: "Irene es una chica de Bajadoz que tras pasar toda su infancia y adolescencia allí, decidió ir a estudiar a otra ciudad y empezó la carrera de medicina en Madrid. Siempre ha sido una chica muy centrada en los estudios, con fuertes vínculos emocionales a sus personas más cercanas y un sentimiento interno de conocer más tipos de vida de los que estaba acostumbrada a ver. Es muy ambiciosa con su futuro y está decidida a lograr todo aquello que se fije cómo meta. Ahora mismo está en un punto de su vida en el que tiene una gran amistad con sus compañeras de piso y le gustaría hacer un viaje con ellas para así aprovechar y descubrir mundo junto a una gran compañía.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos:   "Está en un punto de su vida en el que está abierta a conocer nuevas experiencias a diario. Ahora que ha conseguido un fuerte vínculo con sus compañeras de piso le gustaría poder hacer un viaje con ellas para que además de tener un recuerdo inolvidable con ellas pueda conocer mundo ya que antes no había podido." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
