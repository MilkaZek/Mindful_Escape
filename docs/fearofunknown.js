const musicButton = document.querySelector("#music")
let backgroundMusic = new Audio("audio.mp3")
let music = true

const activityButton = document.querySelector("#activitybutton")
const activity = document.querySelector("#activity")
const numOfPeople = document.querySelector("#participants")


activityButton.addEventListener("click", async () => {
  const url = `https://www.boredapi.com/api/activity`
  const response = await fetch(url)
  if (response.status >= 400) {
    document.querySelector("#error").showModal()
    return
  }
  info = await response.json()
  activity.textContent = `${info.activity}`  
  numOfPeople.textContent = `Suggested number of people: ${info.participants}`  
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
