class FireWork {
  constructor(width = 100, height = 100) {
    this.canvas = document.getElementById("fireworks");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = width;
    this.canvas.height = height;

    // Define an array to store the particles
    this.particles = [];
  }

  // Define a function to create a new particle
  createParticle(x, y, color) {
    const particle = {};
    particle.x = x;
    particle.y = y;
    particle.color = color;
    particle.radius = Math.random() * 2 + 2;
    particle.velocity = {
      x: (Math.random() - 0.5) * 8,
      y: (Math.random() - 0.5) * 8,
    };
    particle.alpha = 1;
    this.particles.push(particle);
  }

  // Define a function to animate the fireworks
  animate() {
    requestAnimationFrame(() => this.animate());
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];

      // Draw the particle
      this.context.beginPath();
      this.context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.context.fillStyle = particle.color;
      this.context.globalAlpha = particle.alpha;
      this.context.fill();

      // Update the particle's position and velocity
      particle.x += particle.velocity.x;
      particle.y += particle.velocity.y;
      particle.velocity.x *= 0.98;
      particle.velocity.y *= 0.98;
      particle.alpha -= 0.01;

      // Remove the particle from the array when it's no longer visible
      if (particle.alpha <= 0) {
        this.particles.splice(i, 1);
      }
    }
  }

  // Define a function to create a fireworks explosion
  createExplosion(x, y) {
    const colors = ["#f44336", "#9c27b0", "#2196f3", "#ffeb3b", "#4caf50"];
    for (let i = 0; i < 30; i++) {
      this.createParticle(x, y, colors[Math.floor(Math.random() * colors.length)]);
    }
  }
}
