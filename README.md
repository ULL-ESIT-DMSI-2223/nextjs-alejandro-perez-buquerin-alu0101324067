[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=9620990)

## Práctica NextJS

### Creación de la página web

Para crear la página web hemos modificado el código original, inicialmente los principales ficheros eran el *index.js* y *generate.js*
El index se encarga del front-end de la web, con HTML creamos el aspecto de la página y el parsing de los argumentos que introducirá el usuario en los input.
Mediante una función *onSubmit()* (activada mediante un evento), llamamos a la función en generate.js que se encarga de realizar el request a la api, devuelve el resultado al index y nos muestra el resultado mediante HTML por pantalla.

### Organización de los ficheros

Puesto que vamos a tener varias funcionalidades y páginas con sus respectivas rutas hemos dividido el proyecto en esta jerarquía: 
