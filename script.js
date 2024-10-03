// import { createClient } from 'pexels'

const musicButton = document.querySelector("#music")
let backgroundMusic = new Audio("audio.mp3")
let music = true
const startAdviceButton = document.querySelector("#startadvicebutton")
const adviceContent = document.querySelector("#advicetext")
const zenadviceButton = document.querySelector("#zenadvice")
const zenQuote = document.querySelector("#zenquote")
const zenQuoteAuthor = document.querySelector("#zenquoteauthor")
const background = document.querySelector("#homepage")

let backgroundPhotos = []
let photoIndex = 0

startAdviceButton.addEventListener("click", async () => {
  const url = `https://api.adviceslip.com/advice`
  const response = await fetch(url)
  if (response.status >= 400) {
    document.querySelector("#error").showModal()
    return
  }
  const info = await response.json()
  adviceContent.textContent = `${info.slip.advice}`
})

zenadviceButton.addEventListener("click", async () => {
  const url = `https://classproxy.rtoal.repl.co/zenquotes`
  const response = await fetch(url)
  if (response.status >= 400) {
    document.querySelector("#error").showModal()
    return
  }
  const info = await response.json()
  const quote = info[0]
  zenQuote.textContent = `"${quote.q}"`
  zenQuoteAuthor.textContent = `-${quote.a}`
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

//https://api.pexels.com/v1/search?query=ocean&page=${Math.floor(Math.random() * 900 + 1)}&per_page=10

// Removing API Call because Replit no longer allows for proxy hosting

// window.addEventListener("load", async () => {
//   const response = await fetch("https://classproxy.rtoal.repl.co/pexels")
//   const data = await response.json()
//   backgroundPhotos = data
// })

// function changePhoto() {
//   background.style.backgroundImage = `url(${backgroundPhotos[photoIndex]})`
//   photoIndex += 1
//   if (photoIndex === 49) {
//     photoIndex = 0
//   }
// }

setInterval(changePhoto, 10000)
