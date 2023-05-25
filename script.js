// JavaScript code for the typing effect
const element = document.getElementById('typing-text');
const texts = ["Web Developer", "Ui/Ux Designer", "Student"];
const colors = ["#2460b9", "#2460b9", "#2460b9"];

let index = 0;
let textIndex = 0;

function type() {
  if (index < texts[textIndex].length) {
    element.innerHTML = `<span class="${colors[textIndex]} glow">${texts[textIndex].substring(0, index + 1)}</span>`;
    index++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (index >= 0) {
    element.innerHTML = `<span class="${colors[textIndex]} glow">${texts[textIndex].substring(0, index)}</span>`;
    index--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 500);
  }
}

// Start the typing effect
type();
