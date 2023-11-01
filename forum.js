const messageForm = document.getElementById('message-form');
const messagesContainer = document.getElementById('messages');
const newQuestionButton = document.getElementById('new-question-button');
const questionText = document.getElementById('question-text');

let discussionQuestion = 'How do you manage stress in your daily life?';

function addMessage(username, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `
    <span class="username">${username}</span>: ${message}
  `;

  messagesContainer.appendChild(messageElement);
}

function changeQuestion() {
  const questions = [
    'How do you manage stress in your daily life?',
    'What are your favorite stress-relief activities?',
    'Share your tips for maintaining a healthy work-life balance.',
    'How do you cope with stress during challenging times?',
    'What strategies do you use to relax and unwind?',
    'How do you handle stress from relationships?',
  ];

  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  questionText.innerText = randomQuestion;
  discussionQuestion = randomQuestion;
}

messageForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const usernameInput = document.getElementById('username-input');
  const messageInput = document.getElementById('message-input');

  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();

  if (username === '' || message === '') {
    return; // Don't send empty messages
  }

  addMessage(username, message);

  // Reset form inputs
  usernameInput.value = '';
  messageInput.value = '';
});

newQuestionButton.addEventListener('click', function() {
  changeQuestion();
});

// Initialize the question
changeQuestion();


//for background music button
const musicButton = document.querySelector("#music")
let backgroundMusic = new Audio("audio.mp3")
let music = true

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
