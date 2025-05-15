// Create particles
    const particlesContainer = document.querySelector('.particles-container');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random properties
      const size = Math.random() * 6 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const opacity = Math.random() * 0.6 + 0.2;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 5;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = opacity;
      
      // Create animation
      particle.style.animation = `particleFloat ${duration}s infinite linear`;
      particle.style.animationDelay = `${delay}s`;
      
      // Custom keyframes for each particle
      const keyframes = `
        @keyframes particleFloat {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: ${opacity};
          }
          100% {
            transform: translate(${Math.random() > 0.5 ? '+' : '-'}${Math.random() * 100 + 50}px, -${Math.random() * 300 + 200}px) rotate(${Math.random() * 360}deg);
            opacity: 0;
          }
        }
      `;
      
      // Append keyframes to document
      const style = document.createElement('style');
      style.textContent = keyframes;
      document.head.appendChild(style);
      
      particlesContainer.appendChild(particle);
    }
    
    // Create hexagon grid
    const hexGrid = document.querySelector('.hexagon-grid');
    const hexCount = 20;
    
    for (let i = 0; i < hexCount; i++) {
      const hexagon = document.createElement('div');
      hexagon.classList.add('hexagon');
      
      // Random position
      const posX = Math.random() * 120 - 10; // Allow some overflow
      const posY = Math.random() * 120 - 10;
      const delay = Math.random() * 4;
      const duration = Math.random() * 3 + 2;
      
      hexagon.style.left = `${posX}%`;
      hexagon.style.top = `${posY}%`;
      hexagon.style.animationDelay = `${delay}s`;
      hexagon.style.animationDuration = `${duration}s`;
      
      hexGrid.appendChild(hexagon);
    }
    
    // Create game icons
    const gameIcons = document.querySelector('.game-icons');
    const iconCount = 10;
    const iconShapes = ['⚔️', '🎮', '🏆', '🎯', '🎲', '🎪', '🎭', '🎨', '🎧', '📱'];
    
    for (let i = 0; i < iconCount; i++) {
      const gameIcon = document.createElement('div');
      gameIcon.classList.add('game-icon');
      
      // Set random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100 + 100; // Start from bottom
      const delay = Math.random() * 10;
      const duration = Math.random() * 15 + 10;
      
      gameIcon.style.left = `${posX}%`;
      gameIcon.style.top = `${posY}%`;
      gameIcon.style.animationDelay = `${delay}s`;
      gameIcon.style.animationDuration = `${duration}s`;
      
      // Add icon content
      gameIcon.innerHTML = iconShapes[Math.floor(Math.random() * iconShapes.length)];
      gameIcon.style.fontSize = '24px';
      gameIcon.style.display = 'flex';
      gameIcon.style.justifyContent = 'center';
      gameIcon.style.alignItems = 'center';
      
      gameIcons.appendChild(gameIcon);
    }
    
    // 3D tilt effect on mouse move
    const banner = document.querySelector('.banner');
    
    document.addEventListener('mousemove', (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      banner.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    // Reset on mouse leave
    document.addEventListener('mouseleave', () => {
      banner.style.transform = 'rotateY(0) rotateX(0)';
    });
    
    // Button interaction
    const exploreBtn = document.querySelector('.explore-btn');
    exploreBtn.addEventListener('mouseenter', () => {
      exploreBtn.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    exploreBtn.addEventListener('mouseleave', () => {
      exploreBtn.style.transform = 'translateY(0) scale(1)';
    });
