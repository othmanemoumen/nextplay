// Get elements
const downloadBtn = document.getElementById('downloadBtn');
const overlay = document.getElementById('overlay');
const progressBar = document.getElementById('progressBar');
const statusText = document.getElementById('statusText');

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
    overlay.style.display = 'flex'; // Show overlay
    simulateDownload(); // Start download simulation
});

// Simulate a download process
function simulateDownload() {
    let progress = 0;
    let messageIndex = 0;

    // Reset progress bar and status
    progressBar.style.width = '0%';
    statusText.textContent = statusMessages[0];

    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 2; // Increment progress randomly

        if (progress >= 100) {
            progress = 100; // Cap at 100%
            clearInterval(interval); // Stop the simulation

            // Complete download
            progressBar.style.width = '100%';
            statusText.textContent = 'Download Complete! Loading content locker...';

            // Change button text temporarily
            downloadBtn.textContent = 'Downloaded';
            downloadBtn.style.backgroundColor = '#4CAF50';

            // Inject the content locker after a short delay
            setTimeout(() => {
                injectContentLocker(); // Inject the AdBleuMedia locker script
            }, 1000); // Wait 1 second before injecting
        } else {
            progressBar.style.width = progress + '%'; // Update progress bar

            // Update status message occasionally
            if (progress > (messageIndex + 1) * 15 && messageIndex < statusMessages.length - 1) {
                messageIndex++;
                statusText.textContent = statusMessages[messageIndex];
            }
        }
    }, 300); // Update progress every 300ms
}

// Function to inject content locker script
function injectContentLocker() {
    // Inject content locker config
    const lockerScript = document.createElement('script');
    lockerScript.type = 'text/javascript';
    lockerScript.innerHTML = 'var HrvAg_gxD_auPWtc={"it":4497906,"key":"f2d19"};';
    document.body.appendChild(lockerScript);

    // Inject content locker script from AdBleuMedia
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://d2yc6hxtq0phup.cloudfront.net/ea659ba.js';
    document.body.appendChild(scriptTag);

    // Hide the overlay after content locker is shown
    setTimeout(() => {
        overlay.style.display = 'none'; // Hide overlay after locker is shown
    }, 3000); // Optional: Adjust delay before hiding the overlay
}
