# WEB-ISW-233

Simple todo app with Vanilla JS

You have a code that works but it has several problems 

What if we want to:
- Save the list locally?
- Add keyboard shortcuts?
- Make it more complex in the future?
- Create an undo action?

Your task:
- Decouple the project using design patterns!!!
- Be creative make your to answer the previous questions 

## Respuestas a preguntas
- Save the list locally? Se resolvio usando patrones como Observer y singleton se considero el storage como el lugar de guardado de la aplicacion al no contar con un backend, por ende es el punto de almacenamiento global y como tal debe ser unico para toda la aplicacion por ende se aplico el patron singleton para asegurar que solo haya una unica instancia de este de la cual se consuma, el patron observer se encarga de notificar cuando haya un cambio en las tareas

- Add keyboard shortcuts? Esto se logra agracias al patron command, en este diseño la interfaz de usuario actúa únicamente como una capa de entrada tonta que despacha comandos

- Make it more complex in the future? En este diseño se procura subir el nivel y la capacidad de mantenimiento a futuro aplicando patrones de diseño, por ejemplo si enn algun momento llegar a cambiar la ui el patrón DOMFactory encapsula la creación de los nodos

- Create an undo action? Se utilizo el patron command para esta tarea q cumple con las operacinones de pila 