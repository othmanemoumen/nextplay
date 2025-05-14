        document.addEventListener('DOMContentLoaded', function() {
            const preloader = document.querySelector('.preloader');
            const content = document.querySelector('.content');
            const dotsContainer = document.querySelector('.dots-container');
            const showLoaderBtn = document.getElementById('show-loader');
            const bounceBtn = document.getElementById('bounce-btn');
            const pulseBtn = document.getElementById('pulse-btn');
            const fadeBtn = document.getElementById('fade-btn');
            
            // Hide preloader after a delay (simulating content loading)
            setTimeout(function() {
                preloader.classList.add('fade-out');
                content.style.opacity = 1;
            }, 2000);
            
            // Show preloader again on button click
            showLoaderBtn.addEventListener('click', function() {
                content.style.opacity = 0;
                preloader.classList.remove('fade-out');
                
                // Simulate loading again
                setTimeout(function() {
                    preloader.classList.add('fade-out');
                    content.style.opacity = 1;
                }, 2000);
            });
            
            // Animation variation controls
            bounceBtn.addEventListener('click', function() {
                dotsContainer.className = 'dots-container bounce';
            });
            
            pulseBtn.addEventListener('click', function() {
                dotsContainer.className = 'dots-container pulse';
            });
            
            fadeBtn.addEventListener('click', function() {
                dotsContainer.className = 'dots-container fade';
            });
        });
