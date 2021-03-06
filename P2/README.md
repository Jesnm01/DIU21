## DIU - Practica2, entregables

### Ideación 
* Malla receptora de información 

| <p align="center"><strong>Interesante</strong></p> | <p align="center"><strong>Críticas</strong></p>|  
| ------------- | -------|
| Es muy sencillo unirse a un tour.| No distingue el nivel de experiencia de usuario para el uso de la web/app.|
| Implantan medidas anti-covid en los grupos (límite de personas).| Contacto con el soporte de la página parcialmente escondido.|
| Gran cantidad de tours por las ciudades más emblemáticas.| No permite ni crear ni proponer tours|
| Facilita la reserva hasta 15 minutos antes (en muchos tours)| No permite crear grupos o unirse a grupos de tus mismos gustos |
| Cancelación gratuita respetando los límites| |
| <p align="center"><strong>Preguntas</strong></p> | <p align="center"><strong>Nuevas Ideas</strong></p> |
|Cómo contactar con el guía de la actividad.| Permitir la creación de un tour|
|No hay opción de compartir el evento por RSS| Solicitar ser el guía de una actividad.|
|Quién verifica si esa actividad es real o fake| Permitir la creación y unión a grupos|
|Posibilidad de recompensar al guía económicamente/valorando positivamente tras un tour (exclusivamente al guía, no a la actividad cómo tal)| Posibilidad de proponer tours y que otro usuario o trabajador de empresa lo organice. | Dividir las actividades por categorías.

### PROPUESTA DE VALOR

<p align="justify">Nuestro proyecto consistirá en crear una aplicación clara, sencilla y funcional para todos aquellos usuarios que deseen realizar actividades en la provincia de Granada. Cualquier usuario podrá buscar actividades de su interés, grupos a los que unirse, crear un grupo, etc. Y además, incluiremos la opción de que un usuario pueda crear una actividad o proponerla en el foro de actividades por si los administradores de la página u otro usuario pueden llevarla a cabo. También existirá la posibilidad de pedir ser guía de una actividad para aquellos usuarios interesados (es una buena oportunidad para estudiantes de turismo).  </p>

<p align="justify"> Dicho foro de actividades, aparte de recoger las propuestas de los usuarios, actuará a modo de tablón de anuncios dónde apareceran las actividades más próximas a su fin. </p> 

<p align="justify">Los usuarios pueden registrarse para beneficiarse de un perfil de usuario sencillo en el que podrán ver sus actividades, grupos, amigos, perfil y mensajería.</p>

<p align="justify">Respecto a la ayuda al cliente, contaremos con varios asistentes en línea 24/7 que los usuarios podrán solicitar para solventar sus problemas. Además, contaremos con un e-mail de contacto y varios números de teléfono. También existirá un espacio que recoja las dudas más frecuentes de los usuarios.</p>

![Canvas](canvas2.png)


### TASK ANALYSIS

* User Task Matrix 

Grupo Users 1: Usuarios que visita la web con frecuencia (registrado).<br>
Grupo Users 2: Usuarios Casual (no registrado). Típico usuario que se mete a curiosear para buscar una actividad puntual.<br>
Grupo Users 3: Usuario Creador. Tiene la posibilidad de crear actividades.<br>
Grupo Users 4: Usuarios extranjeros (de otro páis o vive en españa lejos de Granada)(no registrado). <br>

Leyenda : B (Baja), M(Media), A(Alta), No(No Permitido)  <br>

| <p align="center"><strong>Grupos de Usuarios</strong></p> |  <p align="center"><strong>Grupo 1</strong></p>| <p align="center"><strong>Grupo2</strong></p> | <p align="center"><strong>Grupo3</strong></p>| <p align="center"><strong>Grupo 4</strong></p> |
| ------------- | -------|   -------|  -------|  -------|
| Buscar Actividades | A  | A  | B | A |
| Proponer Actividad | M  | B  | A | B |
| Reservar Actividad | A  | M  | B | M |
| Crear Actividad    | No | No | A | No |
| Pagar actividad    | M  | B  | B | B |
| Valorar Actividad  | A | B | B | M |
| Foro Actividades   | A | B | M | M |
| Buscar Grupos      | A  | M  | B | M |
| Unirse a Grupo     | M | No | B | No |
| Crear Grupo        | M  | No | A | No |
| Registrarse        | A | B | A | B |
| Mandar mensaje usuario         | M  | B | M | B | 
| Añadir usuario amigo           | M | No | M | No | 
| Visitar perfil de otro usuario | M | B | M | B | 
| FAQ                            | M  | B | B | M |
| Checkear notificaciones        | M | No | A | No |
| Solicitar ser guía             | M | B | A | B |
| Leer Términos y Condiciones    | M  | B  | A | B | 
| Leer Acerca De                 | M  | B | M  | B | 
| Elegir Idioma                  | B  | B  | B | A | 


### ARQUITECTURA DE INFORMACIÓN

* Sitemap 

![SiteMap](SiteMap.png)

* Labelling 

| <p align="center"><strong>Label</strong></p> |  <p align="center"><strong>Scope Note</strong></p>|
| ------------- | -------| 
| Terminos y Condiciones | Acuerdo de voluntades entre la aplicación y usuario por el cual se pactan derechos y obligaciones que ambas partes asumirán.  | 
| Acerca De | Información sobre la empresa detrás de la aplicación  | 
| Login | Identificación del usuario en la plataforma  | 
| Panel de Usuario | Apartado de acceso único a usuarios registrados en el que podrán gestionar sus grupos, actividades ...   | 
| Mis Grupos | Panel que clasifica los grupos del usuario y la opción de crear uno | 
| Unidos | Grupos a los que se ha unido el usuario | 
| Creados | Grupos que ha creado el usuario | 
| Crear Grupo | Interfaz de creación de grupo | 
| Mis Actividades | Panel que clasifica las actividades del usuario y la opción de crear una | 
| Reservadas | Actividades reservadas por el usuario | 
| Creadas | Actividades creadas por el usuario  | 
| Crear Actividad | Interfaz de creación de actividad  | 
| Amigos | Lista de amigos del usuario | 
| Perfil | Perfil de usuario con información personal  | 
| Mensajeria | Chat del usuario en el que se muestran las conversaciones  | 
| Grupos | Catálogo de grupos creados en la aplicación | 
| Info Grupo | Información de un grupo concreto de la aplicación | 
| Unirse Grupo | Formulario para acceder a un grupo | 
| Actividades | Catálogo de actividades creadas en la aplicación  | 
| Foro Actividades | Foro en el que se publican las actividades próximas a su fin, actividades propuestas ...  | 
| Info Actividad | Información de una actividad concreta  | 
| Reserva Actividad | Formulario para reservar una actividad  | 
| Ayuda | Sección de ayuda al cliente  | 
| Contacto | Listado de distintas vías de ayuda | 
| Asistente | Asistente online que interactua con el usuario para resolver sus dudas  | 
| FAQ | Preguntas frecuentes ya resueltas | 

### Prototipo Lo-FI Wireframe 

![Bocetos1](bocetos1.png)

### Conclusiones  

Esta etapa nos ha parecido más interesante que la anterior dado que empiezas a trabajar con ideas propias y no sobre una aplicación que ya está hecha. Nos hemos dado cuenta de que realizar una aplicación (conceptualmente) no es tan sencillo cómo parece a priori ya que se tienen que valorar muchos aspectos de cara al usuario. En resumen, hemos realizado un primer acercamiento a la estructura y el bocetado, sentando además los objetivos principales de nuestra aplicación.
