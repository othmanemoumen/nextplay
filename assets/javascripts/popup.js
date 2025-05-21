// Get elements
const downloadBtn = document.getElementById('downloadBtn');
const overlay = document.getElementById('overlay');
const progressBar = document.getElementById('progressBar');
const statusText = document.getElementById('statusText');
const downloadContainer = document.getElementById('downloadContainer'); // Get the container element

// Array of status messages to display during download
const statusMessages = [
    "Initializing download...",
    "Preparing file...",
    "Downloading 2.3MB of 15.7MB...",
    "Downloading 6.8MB of 15.7MB...",
    "Downloading 10.2MB of 15.7MB...",
    "Downloading 14.1MB of 15.7MB...",
    "Finalizing download..."
];

// Show popup and start download simulation
downloadBtn.addEventListener('click', function () {
    overlay.style.display = 'flex';
    // Hide the download container if it's already showing from a previous attempt
    if (downloadContainer) {
        downloadContainer.style.display = 'none';
        downloadContainer.style.transform = 'scale(0.7)';
        downloadContainer.style.opacity = '0';
    }
    simulateDownload();
});

// Simulate a download process
function simulateDownload() {
    let progress = 0;
    let messageIndex = 0;
    // Reset progress bar and status
    progressBar.style.width = '0%';
    statusText.textContent = statusMessages[0];
    
    const interval = setInterval(() => {
        // Increment progress
        progress += Math.floor(Math.random() * 10) + 2;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Complete the download
            progressBar.style.width = '100%';
            statusText.textContent = 'Download Complete! Redirecting...';
            
            // Change download button text temporarily
            downloadBtn.textContent = 'Downloaded';
            downloadBtn.style.backgroundColor = '#4CAF50';
            
            // Hide overlay after short delay
            setTimeout(() => {
                overlay.style.display = 'none';
                
                // Show the download container with popup animation
                if (lockerstylecard) {
                    // Make sure the container has transition styles
                   lockerstylecard.style.transition = 'all 0.3s ease-in-out';
                   lockerstylecard.style.display = 'block'; // or 'flex' depending on your CSS
                    
                    // Small delay to ensure display:block takes effect before animation
                    setTimeout(() => {
                       lockerstylecard.style.transform = 'scale(1)';
                      lockerstylecard.style.opacity = '1';
                    }, 10);
                }
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    downloadBtn.textContent = 'Free Download';
                    downloadBtn.style.backgroundColor = '#2196F3';
                }, 3000);
            }, 1000);
        } else {
            // Update progress bar
            progressBar.style.width = progress + '%';
            // Update status message occasionally
            if (progress > (messageIndex + 1) * 15 && messageIndex < statusMessages.length - 1) {
                messageIndex++;
                statusText.textContent = statusMessages[messageIndex];
            }
        }
    }, 300);
}
