const musicButton = document.querySelector("#music")
let backgroundMusic = new Audio("audio.mp3")
let music = true
const dogButton = document.querySelector("#dogbutton")
const dog = document.querySelector("#dog")

dogButton.addEventListener("click", async () => {
  const url = `https://dog.ceo/api/breeds/image/random`
  const response = await fetch(url)
  if (response.status >= 400) {
    document.querySelector("#error").showModal()
    return
  }
   info = await response.json()
  dog.style.display = "block"
  dog.src = `${info.message}`  
  console.log(`${info.message}`  )
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

// To-Do List Code from other project
// To-do list scripts: 
var myNodelist = document.getElementsByClassName("todoitem");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function addToList() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    li.className = "todoitem";
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
