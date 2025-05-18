 // Get elements
        const showPopupBtn = document.getElementById('showPopup');
        const overlay = document.getElementById('overlay');
        const progressBar = document.getElementById('progressBar');
        const statusText = document.getElementById('statusText');

        // Array of status messages to display during loading
        const statusMessages = [
            "Initializing...",
            "Connecting to server...",
            "Loading data...",
            "Processing information...",
            "Almost there...",
            "Finalizing..."
        ];

        // Show popup and start loading simulation
        showPopupBtn.addEventListener('click', function() {
            overlay.style.display = 'flex';
            simulateLoading();
        });

        // Simulate a loading process
        function simulateLoading() {
            let progress = 0;
            let messageIndex = 0;
            
            // Reset progress bar and status
            progressBar.style.width = '0%';
            statusText.textContent = statusMessages[0];
            
            const interval = setInterval(() => {
                // Increment progress
                progress += Math.floor(Math.random() * 15) + 5;
                
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    
                    // Complete the loading
                    progressBar.style.width = '100%';
                    statusText.textContent = 'Completed!';
                    
                    // Close the popup after a delay
                    setTimeout(() => {
                        overlay.style.display = 'none';
                    }, 1000);
                } else {
                    // Update progress bar
                    progressBar.style.width = progress + '%';
                    
                    // Update status message occasionally
                    if (progress > (messageIndex + 1) * 20 && messageIndex < statusMessages.length - 1) {
                        messageIndex++;
                        statusText.textContent = statusMessages[messageIndex];
                    }
                }
            }, 500);
        }
