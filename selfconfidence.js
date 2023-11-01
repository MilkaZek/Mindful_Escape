const musicButton = document.querySelector("#music")
let backgroundMusic = new Audio("audio.mp3")
let music = true
const affirmationButton = document.querySelector("#affirmationbutton")
const affirmation = document.querySelector("#affirmation")

affirmationButton.addEventListener("click", async () => {
  const url = `https://classproxy.rtoal.repl.co/affirmations`
  const response = await fetch(url)
  if (response.status >= 400) {
    document.querySelector("#error").showModal()
    return
  }
   info = await response.json()
  affirmation.textContent = `${info.affirmation}`  
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
