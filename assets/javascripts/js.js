  // Animation functions
        document.addEventListener('DOMContentLoaded', function() {
            // Animate the section title
            setTimeout(() => {
                document.querySelector('.section-title').classList.add('animate');
            }, 300);
            
            // Animate cards with staggered delay
            const cards = document.querySelectorAll('.game-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate');
                }, 500 + (index * 200)); // Staggered animation
            });
            
            // Add hover effects to download buttons
            const buttons = document.querySelectorAll('.download-btn');
            buttons.forEach(btn => {
                btn.addEventListener('mouseover', function() {
                    this.style.transition = 'all 0.3s ease';
                });
            });
        });
