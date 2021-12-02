# Modulo_B

## Rutas

### /disponible (Busca un trabajador disponible)

- Se le envía un método POST que contenga "cargo" que es el trabajo que se necesita realizar.
- Devuelve el trabajador con la mejor experiencia en "especializacion", si es que está disponible.
- Se cambia el estado del trabajador de "disponible: true" a "disponible: false".

### /t_finalizado (cambia la disponibilidad al terminar un trabajo)

- Con un método PUT se entrega el nombre del trabajador, que cambia la disponibilidad de un trabajador de "disponible: false" a "disponible: true".

### /nuevo (crea un nuevo trabajador)

- Con el método POST se ingresa el nombre, cargo, especialización y disponible.
- Envía un mensaje que indica que se realizó el guardado de forma satisfactoria.

## iniciar el servidor

- Se utiliza el comando "npm i", que instala los modulos de node.
- Abre MongoDB con un terminal que ejecute "mongod", teniendo la base de datos "trabajos" como predeterminada y la colección "trabajadores".
- Luego usar el comando "npm run start" que inicia el servidor en el puerto 4000 (es decir "localhost:4000/").
