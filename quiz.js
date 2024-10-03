const quizContent = document.querySelector("#quizcontent")
const startButton = document.querySelector("#startquizbutton")
const answersScale = document.querySelector("#quizanswers")
const StronglyDisagree = document.querySelector("#stronglydisagree")
const Disagree = document.querySelector("#disagree")
const Neither = document.querySelector("#neither")
const Agree = document.querySelector("#agree")
const StronglyAgree = document.querySelector("#stronglyagree")

const stressPages = ["Work", "Stress over the Unknown", "Relationships", "Personal Circumstances","Low Self Confidence"]
const stressLinks = ["workstress.html", "fearofunknown.html", "relationshipstress.html", "circumstantialstress.html", "selfconfidence.html"]
let stressTally = [0, 0, 0, 0, 0]
const questions = ["Does your uncompleted work feel overwhelming?", "Do you fear the future, of not knowing how to proceed?", "Is there someone/multiple people causing you stress?", "Are there circumstances out of your control bringing you stress?", "Do you often feel insecure or unsure of yourself?","Does your work environment stress you out?", "Does not having concrete answers cause you stress?", "Do you have disagreements with the people around you frequently?", "Do you often find yourself wanting to run away, or seek comfort away from your own home?", "Do you have the tendency to compare yourself to others?"]
let questionIndex = 0
let stressIndex = 0


startButton.addEventListener("click", () =>{
  startButton.style.display = "none"
  answersScale.style.display = "inline"
  stressTally = [0, 0, 0, 0, 0]
  questionIndex = 0
  newQuestion();
})


StronglyDisagree.addEventListener("click", ()=>{
  stressTally[stressIndex] -=2 
  newQuestion()
  clearAllChecks()
})

Disagree.addEventListener("click", ()=>{
  stressTally[stressIndex] -=1 
  newQuestion()
  clearAllChecks()
})

Neither.addEventListener("click", ()=>{
  newQuestion()
  clearAllChecks()
})

Agree.addEventListener("click", ()=>{
  stressTally[stressIndex] +=1
  newQuestion()
  clearAllChecks()
})

StronglyAgree.addEventListener("click", ()=>{
  stressTally[stressIndex] +=2 
  newQuestion()
  clearAllChecks()
})


function newQuestion (){
  if (questionIndex > 9) {
    quizContent.textContent = `Loading your results...`
    answersScale.style.display = "none"
    countTally()
  }
  else {
  stressIndex = questionIndex
    if(questionIndex > 4){
      stressIndex -= 5
      quizContent.textContent = `${questions[questionIndex]}`
      questionIndex += 1
    }
    else{
      quizContent.textContent = `${questions[questionIndex]}`
    questionIndex += 1
    }
  }
}

// function startOver(){
//   countTally()
//   startButton.style.display = "block"
//   quizContent.style.display = "none"
//   quizQuestion.textContent = ""
// }


function countTally(){
  let highestTally = stressTally[0]
  let index = 0
  console.log(`${highestTally}`)
  for (let i =0; i < stressTally.length; i +=1){
    if(stressTally[i]>highestTally){
      highestTally = stressTally[i]
      index = i
      console.log("works")
    }
  }
  // Takes users to corresponding stress information page
  window.location.replace(`https://milkazek.github.io/Mindful_Escape/${stressLinks[index]}`)
}

function clearAllChecks() {
  StronglyDisagree.checked = false
  Disagree.checked = false
  Neither.checked = false
  Agree.checked = false
  StronglyAgree.checked = false
}
