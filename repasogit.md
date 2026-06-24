## PAra que sirve git
Git sirve para tener versiones de un proyecto.

## Qué es Github?
Es uno de los serivicios que permite alojar (hostear) nuestro repositorio en la nube. 

## Cómo creo un repositorio con Git?
git init (inicializamos el repositorio local)

## Cómo podemos versionar nuestro código? (como guardar los cambios que hice)

git add . (añade al área de preparación los cambios realizados en el código el . hace referencia a traer todos los archivos en el directorio raiz, carpeta raíz)
git commit -m (agregar un checkpoint, una foto de como está el proyecto actualmente, toma en cuenta lo añadido por git add .)

## Cómo podemos subir nuestro commit al repo en la nube (asumiendo que ya esta conectado)

Depende: 
    si es la primera vez que pusheas git push -u origin main (para crear la main remota)
    si ya existe la main git push

 