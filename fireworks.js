// --- Fireworks Animation (Standard Version) ---
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let fireworks = [];
let particles = [];
const fireworkLaunchProbability = 0.025;
const maxFireworksAtOnce = 5;
function random(min, max) { return Math.random() * (max - min) + min; }
function Firework(startX, startY, targetX, targetY) {
    this.x = startX;
    this.y = startY;
    this.startX = startX;
    this.startY = startY;
    this.targetX = targetX;
    this.targetY = targetY;
    this.distanceToTarget = Math.sqrt(Math.pow(targetX - startX, 2) + Math.pow(targetY - startY, 2));
    this.distanceTraveled = 0;
    this.trail = [];
    this.angle = Math.atan2(targetY - startY, targetX - startX);
    this.speed = random(2, 4);
    this.acceleration = 1.03 + Math.random() * 0.02;
    this.brightness = random(50, 80);
    this.targetRadius = 1;
    this.hue = random(0,360);
    this.color = `hsl(${this.hue}, 100%, ${this.brightness}%)`;
    this.lineWidth = random(1, 3);
}
Firework.prototype.update = function(index) {
    this.trail.push({ x: this.x, y: this.y, alpha: 1, lineWidth: this.lineWidth });
    if (this.trail.length > 10) {
        this.trail.shift();
    }
    this.speed *= this.acceleration;
    let vx = Math.cos(this.angle) * this.speed;
    let vy = Math.sin(this.angle) * this.speed;
    this.distanceTraveled = Math.sqrt(Math.pow(this.x - this.startX, 2) + Math.pow(this.y - this.startY, 2));
    if (this.distanceTraveled >= this.distanceToTarget || this.y < this.targetY) {
        createParticles(this.targetX, this.targetY, this.hue);
        fireworks.splice(index, 1);
    } else {
        this.x += vx;
        this.y += vy;
    }
};
Firework.prototype.draw = function() {
    ctx.beginPath();
    if (this.trail.length > 0) {
        ctx.moveTo(this.trail[0].x, this.trail[0].y);
    } else {
        ctx.moveTo(this.x - Math.cos(this.angle) * 10, this.y - Math.sin(this.angle) * 10);
    }
    ctx.lineTo(this.x, this.y);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.lineWidth + 1, 0, Math.PI * 2);
    ctx.fillStyle = this.color.replace(')', ', 0.5)').replace('hsl', 'hsla');
    ctx.fill();
    for (let i = 0; i < this.trail.length; i++) {
        let point = this.trail[i];
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.lineWidth * (i / this.trail.length), 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace(')', `, ${i / this.trail.length * 0.3})`).replace('hsl', 'hsla');
        ctx.fill();
    }
};
function Particle(x, y, hue) {
    this.x = x;
    this.y = y;
    this.angle = random(0, Math.PI * 2);
    this.speed = random(1, 12);
    this.friction = 0.95 + Math.random() * 0.02;
    this.gravity = 0.8 + Math.random() * 0.4;
    this.hue = hue + random(-20, 20);
    this.brightness = random(50, 85);
    this.alpha = 1;
    this.decay = random(0.015, 0.035);
    this.size = random(1, 4);
}
Particle.prototype.update = function(index) {
    this.speed *= this.friction;
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed + this.gravity;
    this.alpha -= this.decay;
    if (this.alpha <= this.decay) {
        particles.splice(index, 1);
    }
};
Particle.prototype.draw = function() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = `hsl(${this.hue}, 100%, ${this.brightness}%)`;
    ctx.fill();
    ctx.restore();
};
function createParticles(x, y, hue) {
    let particleCount = 100 + Math.floor(random(0, 50));
    while (particleCount--) {
        particles.push(new Particle(x, y, hue));
    }
}
function launchFirework() {
    if (fireworks.length < maxFireworksAtOnce && Math.random() < fireworkLaunchProbability) {
        const startX = random(canvas.width * 0.2, canvas.width * 0.8);
        const startY = canvas.height;
        const targetX = random(0, canvas.width);
        const targetY = random(0, canvas.height / 2.5);
        fireworks.push(new Firework(startX, startY, targetX, targetY));
    }
}
function startFireworks() {
    for (let i = 0; i < 3 + Math.floor(random(0,3)); i++) {
        setTimeout(() => {
            const startX = random(canvas.width * 0.2, canvas.width * 0.8);
            const startY = canvas.height;
            const targetX = random(0, canvas.width);
            const targetY = random(0, canvas.height / 2.5);
            fireworks.push(new Firework(startX, startY, targetX, targetY));
        }, i * (200 + random(0, 200)));
    }
}
function animateFireworks() {
    requestAnimationFrame(animateFireworks);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    launchFirework();
    fireworks.forEach((firework, index) => {
        firework.update(index);
        firework.draw();
    });
    particles.forEach((particle, index) => {
        particle.update(index);
        particle.draw();
    });
}
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
