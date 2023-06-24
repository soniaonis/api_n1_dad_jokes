const jokeElement = document.getElementById('joke')
const jokeButton = document.getElementById('jokebtn')

jokeButton.addEventListener('click', generateJoke);


async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    }
  }

const resp = await fetch('https://icanhazdadjoke.com', config)
const data = await resp.json()

jokeElement.innerHTML = data.joke
}