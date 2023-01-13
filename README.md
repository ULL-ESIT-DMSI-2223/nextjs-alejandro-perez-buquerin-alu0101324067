[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=9620990)

## Práctica NextJS

### Creación de la página web

Para crear la página web hemos modificado el código original, inicialmente los principales ficheros eran el *index.js* y *generate.js*
El index se encarga del front-end de la web, con HTML creamos el aspecto de la página y el parsing de los argumentos que introducirá el usuario en los input.
Mediante una función *onSubmit()* (activada mediante un evento), llamamos a la función en generate.js que se encarga de realizar el request a la api, devuelve el resultado al index y nos muestra el resultado mediante HTML por pantalla.

### Organización de los ficheros

Puesto que vamos a tener varias funcionalidades y páginas con sus respectivas rutas, la estructura de pages será la siguiente:
.
├── 404.js
├── api
│   ├── generateImage.js
│   └── generate.js
├── image.js
├── index.js
├── index.module.css
└── pet.js

1 directory, 7 files

Esta estructura consiste en que desde *index.js* nos envía a las distintas páginas */pet /image /404* estas páginas actuarán como el index original pero de esta forma no tenemos la generación de texto y la de imágenes en el mismo enlace.

### Generación de imágenes

El código es muy parecido al de generación de texto:

```js
export default async function (req, res) {
  const request = req.body.text || '';
  if (request.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid text",
      }
    });
  }
    const result = await openai.createImage({
        prompt: request,
        n: 1,
        size: "1024x1024",
        response_format: 'url',
    });
  res.status(200).json({ imageResult: result.data.data[0].url });
}
```

#### Los cambios que hay:

- Forma de enviar el prompt: Ahora será obtenido a partir del req.body.text
- Parámetros "n", "size" y "response_format"
- El resultado se obtiene con result.data.data[0].url



