const myBtn = document.getElementById('myBtn');
const myLabel = document.getElementById('myLabel');

const min = 0;
const max = 9;

let randomNumber;
let timeoutId = null;

myBtn.onclick = function() {
  clearTimeout(timeoutId); // Сброс предыдущего таймера

  // Сброс прозрачности перед отображением нового числа
  gsap.set(myLabel, { opacity: 1 });

  randomNumber = Math.floor(Math.random() * max) + min;
  myLabel.textContent = randomNumber;

  // Сброс через 3 секунды
  timeoutId = setTimeout(() => {
    myLabel.textContent = ''; 
  }, 3000); 
};
