const cat = document.querySelector("#cat")
const catButton =document.querySelector('#catbutton')

const musicButton = document.querySelector("#music")
let backgroundMusic = new Audio("audio.mp3")
let music = true

//sunrise api for circumstantial
catButton.addEventListener("click", async ()=>{
  const url=
    'https://api.thecatapi.com/v1/images/search'
  const response= await fetch(url)
  if (response.status>= 400){
    document.querySelector("error").showModal()
    return
  }
  info= await response.json()
  output = info[0]
  cat.src = output.url
  cat.style.display = "block"
})

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
