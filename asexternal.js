// Newsletter Form Validation
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
  e.preventDefault();
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let age = document.getElementById('age').value.trim();
  let interests = document.getElementById('interests').value.trim();

  if (!name || !email || !age || !interests) {
    alert('Please fill all fields');
  } else if (isNaN(age) || age < 0) {
    alert('Please enter a valid age');
  } else {
    alert('Subscription Successful!');
  }
});

// Randomized Background Images
let images = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg'];
let randomImage = images[Math.floor(Math.random() * images.length)];
let bgElement = document.getElementById('backgroundSection');
if (bgElement) {
  bgElement.style.backgroundImage = `url('images/${randomImage}')`;
  bgElement.style.backgroundSize = 'cover';
  bgElement.style.backgroundPosition = 'center';
}

// Quiz Validation
document.getElementById('quizForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let answers = ['true', 'true', 'false', 'false', 'true'];
  let userAnswers = Array.from(document.querySelectorAll('#quizForm input')).map(input => input.value.trim().toLowerCase());
  let score = userAnswers.filter((answer, index) => answer === answers[index]).length;

  alert(`You scored ${score}/5!`);
});

// Show/Hide Task
function showHide() {
  let doc = document.getElementById('hideTask');
  if (doc.style.display === 'none') {
    doc.style.display = 'block';
  } else {
    doc.style.display = 'none';
  }
}

// Array Task
function arrayTwo() {
  let animals = ['Vaquita Porpoise', 'Hawksbill Sea Turtle', 'Blue Whale', 'Porbeagle Sharks'];
  let doc = document.getElementById('task2');
  doc.innerHTML = `Animals: ${animals[Math.floor(Math.random() * animals.length)]}`;
}
