// Get elements
const downloadBtn = document.getElementById('downloadBtn');
const overlay = document.getElementById('overlay');
const progressBar = document.getElementById('progressBar');
const statusText = document.getElementById('statusText');
const popupContainer = document.getElementById('popupContainer');
const closePopupBtn = document.getElementById('closePopupBtn');
const downloadNowBtn = document.getElementById('downloadNowBtn');

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

// Show the popup container with animation
function showPopupContainer() {
    popupContainer.classList.add('active');
}

// Hide the popup container with animation
function hidePopupContainer() {
    popupContainer.classList.remove('active');
}

// Add event listeners to the popup buttons
closePopupBtn.addEventListener('click', hidePopupContainer);

downloadNowBtn.addEventListener('click', function() {
    // Simulate actual download starting
    alert("Starting actual download...");
    hidePopupContainer();
});

// Show popup and start download simulation
downloadBtn.addEventListener('click', function() {
    overlay.classList.add('active');
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
            
            // Change download button appearance
            downloadBtn.classList.add('downloaded');
            
            // Hide overlay after short delay
            setTimeout(() => {
                overlay.classList.remove('active');
                
                // Show popup container after the overlay is hidden
                showPopupContainer();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    downloadBtn.classList.remove('downloaded');
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
