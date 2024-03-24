const musicButton = document.querySelector("#music")
let backgroundMusic = new Audio("audio.mp3")
let music = true

//for background music button
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
