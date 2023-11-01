const musicButton = document.querySelector("#music")
let backgroundMusic = new Audio("audio.mp3")
let music = true

const jokeButton = document.querySelector("#jokebutton")
const joke = document.querySelector("#joke")
const punchline = document.querySelector("#punchline")
const punchlineButton = document.querySelector("#punchlinebutton")
let jokeDelivery = document.querySelector("#delivery")


jokebutton.addEventListener("click", async () => {
  punchline.style.display = "none"
  jokeDelivery.textContent= " "
  const url = "https://v2.jokeapi.dev/joke/Any?safe-mode"
  const response = await fetch(url)
  if (response.status >= 400) {
    document.querySelector("error").showModal()
    return
  }
  info = await response.json()
  if (info.type === "single") {
    joke.textContent = `${info.joke}`
    console.log(joke)
  } else if (info.type === "twopart") {
    punchlineButton.style.display = "block"
    joke.textContent = `${info.setup}`
    punchline.style.display = "block"
    console.log(joke)
  }
})

punchlineButton.addEventListener("click", () => {
  punchlineButton.style.display = "none"
  jokeDelivery.textContent = `${info.delivery}`
})



musicButton.addEventListener("click", () => {
  if (music) {
    music = false
    musicButton.textContent = "Music: On"
    backgroundMusic.play()
  }
  else {
    music = true
    musicButton.textContent = "Music: Off"
    backgroundMusic.pause()
  }
})
