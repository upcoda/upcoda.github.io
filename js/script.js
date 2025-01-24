// HAMGRUGESA
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// particles
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
const particlesArray = [];
const colors = ['#1E90FF', '#0D47A1', '#00BFFF'];

class Particle {
  constructor() {
    this.reset();
    this.life = Math.random() * 300 + 100;
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    if (this.life > 0) {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life--;
    } else {
      this.reset();
      this.life = Math.random() * 300 + 100;
    }
  }

  draw() {
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1.0;
  }
}

function handleParticles() {
  ctx.fillStyle = 'rgba(10, 17, 40, 0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
}

function init() {
  particlesArray.length = 0;
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle());
  }
  animate();
}

function animate() {
  handleParticles();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// portfolio
const detailsButtons = document.querySelectorAll('.details-button');
detailsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const details = button.parentElement.nextElementSibling;
    details.classList.toggle('open');
  });
});

init();