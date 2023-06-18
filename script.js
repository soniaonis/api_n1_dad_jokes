Digital Academy - Langreo 2023
Detalles de la tarea
API N1 Dad Jokes 
Manuela Grajales Duque
•
5 jun
En esta práctica consumirás una API que contiene chistes en inglés. Ya hay muchas cosas pre-hechas.


Objetivos pedagógicos:
Adquirir conocimientos y habilidades fundamentales para interactuar con APIs, y obtener datos en formato JSON,
Manejar solicitudes GET,
Aplicar el concepto de asincronismo,
Manipular objetos,
Manipular el DOM
Para realizar esta actividad debes seguir las instrucciones definidas en el README.md

Dad Jokes.mp4
Vídeo

index.html
HTML

README.md
Texto

script.js
JavaScript

styles.css
Hoja de estilo
Comentarios de la clase
Tu trabajo
Asignado
Comentarios privados
const jokeEl = document.('')
const jokeBtn = document.('')

jokeBtn.addEventListener('', generateJoke)

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: '',
    },
  }

  const res = await ('', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}

//   HINTS
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   >>fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
script.js
Mostrando index.html.