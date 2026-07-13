## SINTAXIS

## ETIQUETAS

## De cierre
<ejemplo> <ejemplo/>


## Caracteristicas especial: pueden contener otras etiquetas: NESTING o ANIDAMIENTO
<padre><hija> </hija><img/></padre>

## De autocierre

<ejemplo-autocierre> <ejemplo-autocierre/>

Ejemplo real:
<div> </div>  --cierre
<img>    ->autocierre
<input />    -> autocierre
<label> </label> -> cierre 

## ELEMENTOS
Son los tipos de elementos que existen y estan definidos en el lenguaje html, cada elemento tiene un significado o funcionamiento. 

Por ejemplo:
button -> Hacer un botón, de cierre
img -> nos sirve para hacer una imagen, de autocierre
video -> Hacer un video, de cierre
a -> Hacer un hipervinculo, de cierre
h1 -> Hacer un título  con mucha jerarquía, de cierre
p -> Hacer un párrafo, de cierre
nav -> Es la sección que representa la navegación de la página, de cierre
audio ->Hacer audios dentro dentro de la pagina, de cierre. 
ol -> order list, de cierre.
li -> list item, de cierre.

## ATRIBUTOS
Cada elemento puede tener atributos: configuraciones de ese elemento. El tipo de atributos de cada elemento es definido por el elemento. 

Por ejemplo: 
<img src="" alt=""> src (atributo que define la dirección de la imagen, el source) y alt (atributo que define un texto alternativo, en caso de que no cargue la imagen, alternative) son los atributos del elemento img.  

Para el NESTING (ANIDAMIENTO)
buena practica: 
<padre>
    <hijo>
        <nieto></nieto>
    </hijo>
    <hijo></hijo>
</padre>