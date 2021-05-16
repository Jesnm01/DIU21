# DIU - Practica 3, entregables



## Moodboard (diseño visual + logotipo)   
<p align="justify"> Empezamos con un moodboard, que va a sentar las bases de la apariencia visual de nuestra aplicación en cuanto a colores, tipografías y set de iconos entre otras cosas. Estos aspectos los desarrollaremos un poco más en el apartado de <em>Guidelines</em>. Se ha creado el moodboard a través de <a href="https://milanote.com">Milanote</a>. </p>

![Moodboard](Imagenes/moodboard.PNG)


## Landing Page
<p align="justify"> Diseñamos ahora, ya con el estilo visual en mente, nuestra landing page promocional que tiene un propósito claro: atraer a gente a la aplicación demostrando sus principales características:</p>

- Resalta un __título y subtítulo atractivos__ para llamar la atención, tras una imagen representativa de Granada. 
- Justo debajo, __la acción principal (CTA)__ bien visible que invita a descargar la aplicación, y otro botón al final de la página (que posiblemente no hiciera falta, pues la página no es tan extesa, ni está recargada con elementos que hagan perder el botón principal). 
- Tras un primer impacto visual nada más entrar a la página, en la __sección de beneficios__ se refuerza la idea que quiere transmitir la app apoyándonos con imágenes representativas extraídas de <a href="https://undraw.co/" target="_blank">Undraw</a>, que ofrece diseños con cualquier color que se indique, por lo que se adaptan perfectamente a cualquier paleta de colores.

<p align="justify"> A la hora de realizar la landing page, hemos utilizado la herramienta <a href="https://webflow.com/">WebFlow</a>, usando como partida  una de sus plantillas predefinidas <a href="https://webflow.com/templates/html/velocity-multipurpose-website-template">"Velocity"</a>.</p>

Se puede ver la página en funcionamiento en este enlace <a href="https://meetus.webflow.io/">MeetUs</a>.

![Landing_Page](Imagenes/landing_page.png)


## Guidelines y Patrones de Diseño

<p align="justify">En términos generales, a la hora de realizar el Mockup de la aplicación móvil, nos hemos adaptado en la medida de lo posible a los <strong>estilos y guías de diseño de Google</strong>. Ofrecen una guía extensa de estos estilos en <a href="https://material.io">material.io</a> acerca del Material Design, principios de un buen uso de la iconografía (aspecto visual de los iconos, tamaños y proporciones, iconos animados, etc), componentes predefinidos listos para usar (<a href="https://material.io/resources">Resources</a>), uso de colores y como aplicarlos en la UI, etc. </p>

<h3><strong>Diseño Logotipo</strong></h3>

<p align="justify">Para la realización del logo primeramente pensamos cómo podríamos representar el concepto de nuestro proyecto visualmente. En un principio decidimos optar por un diseño relacionado con la naturaleza (en parte debido a la elección del moodboard, árboles, senderos, etc), pero la idea del proyecto es que se pueden realizar muchos otros tipos de actividades aparte de aquellas relacionadas con la naturaleza.</p>

<p align="justify">Finalmente decidimos que debíamos representar la particularidad de la aplicación respecto a los grupos, y por ello optamos por colocar a 2 'viajeros' en lo que parece ser un encuentro. Todo ello rodeado por el típico símbolo que representa la ubicación, refiriéndose a la multitud de sitios en los cuáles poder quedar y organizar una actividad.</p>

<p align="justify">Podemos representar la marca solamente con la parte simbólica, o también combinándolo con texto, lo cual nos da mayor flexibilidad.</p>

|  Isotipo | Imagotipo |
|---|---|
| ![](Imagenes/logo.png)  | ![](Imagenes/logo_con_letras.PNG)  |


<h3><strong>Paleta de Colores</strong></h3>

<p align="justify">Para la paleta de colores optamos en primera instancia por unos tonos verdosos, pero rápidamente vimos que no era muy atractivo a la vista. Optamos por tanto como <strong>color primario</strong> que usaremos para la barra de navegación inferior y la barra superior, un <strong>color cálido</strong> con tonos amarillos/marrones representando el material de múltiples construcciones en Granada, cómo por ejemplo la Alhambra; delegando así el uso del verde claro y el azul como <strong>colores secundarios</strong> para otros componentes como botones, barras de deslizamiento, o algunos encabezados tal y como indica <a href="https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=F5DDA6&secondary.color=BEF4A7">esta herramienta de Google</a>.</p>

<h3><strong>Iconografía</strong></h3>

<p align="justify">En cuanto a los <a href="https://fonts.google.com/icons">iconos</a> hemos usado los que recomienda Google en su guideline, proporcionándonos un set de iconos sencillos y representativos.</p>

<h3><strong>Tipografía</strong></h3>

Principalmente utilizamos 2 estilos de fuente:
* __MontSerrat__, una fuente sans-serif que gana mucho en sus variantes de más peso (como medium, semi-bold o bold) por lo que la usamos mayoritariamente para títulos, encabezados y algunos botones.
* __Noto Sans__, otra fuente sans-serif y fácil de leer, que utilizamos para el cuerpo y subtítulos. Es una fuente especialmente diseñada por Google con el objetivo de poder ser usada en cualquier parte del mundo, teniendo soporte para más de 800 lenguas diferentes.

<h3><strong>Patrones de Diseño</strong></h3>

* __Navegación__: usamos principalmente navegación mediante barra inferior para saltar a los apartados que más se van a usar, saltos en la jerarquía desde el logo (**Bottom Navigation Bar**, **Home Link**)
* **Contenido**: cartas de contenido para presentar cada actividad en el listado de actividades durante la búsqueda, posibildad de seleccionar una fecha en el calendario de filtros de actividades, un scroll continuo para contenidos que no caben en una sola página (**Cards**,**Calendar Picker**,**Continuous Scrolling**)
* Búsqueda: barra de búsqueda persistente (con el campo de texto siempre visible), y filtrado de resultados (**Search Box**, **Search Filter**)
- **Interacción básica**: botones que realizan acciones concretas como cambiar de página o reservar una actividad, y el deslizado de imágenes en el home (**Action Button**, **Slideshow**)
- **Onboarding**: creación de una cuenta o inicio de sesión (**Account Registration**, **Sign In**)
- **Selector de idiomas**: (**Language Selector**)
- **Interacción social**: posibilidad de añadir amigos en la aplicacion, darle me gusta a una actividad concreta, y compartir la actividad en redes sociales (**Friends**, **Reaction**, **Auto-Sharing**)

## Mockup: LAYOUT HI-FI

|  Portada | SignUp |  SignIn |
|---|---|---|
| ![](Imagenes/Portada.png)  | ![](Imagenes/SignUp.png)  | ![](Imagenes/SignIn.png)  |

| Perfil | Grupos | 
|---|---|
| ![](Imagenes/Perfil.png)  | ![](Imagenes/Grupos.png)  | 

| Actividades | Descripcion Actividad |
|---|---|
| ![](Imagenes/Actividades.png)  | ![](Imagenes/DescripcionActividad.png)  |

## Simulación


https://user-images.githubusercontent.com/79632078/118360263-27549880-b587-11eb-8447-6f02131b2986.mp4



## Documentación: Publicación del Case Study

Esta práctica ha sido bastante interesante de realizar puesto que ha dado más juego con el tema de diseñar nuestra página/aplicación (colores, imágenes, tipografía ...). Al principio nos costó escoger la paleta de colores y la tipografía ya que tratamos de encontrar las que fueran más acorde con nuestro proyecto, fue un proceso complejo. Posteriormente la realización de los diseños móviles fue muy entretenida y también hizo que replantearamos ciertos aspectos que antes teníamos muy claros. Hemos quedado bastante satisfechos con el resultado obtenido en esta práctica.                         
 
