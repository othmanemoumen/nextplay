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
    overlay.style.display = 'flex';
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
        progress += Math.floor(Math.random() * 10) + 2;

        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            // Complete the download
            progressBar.style.width = '100%';
            statusText.textContent = 'Download Complete! Unlocking...';
            downloadBtn.textContent = 'Downloaded';
            downloadBtn.style.backgroundColor = '#4CAF50';

            // Show the AdBleu Media content locker after 1 second
            setTimeout(() => {
                // Inject locker config
                var lockerConfig = document.createElement("script");
                lockerConfig.type = "text/javascript";
                lockerConfig.text = `var pPogz_Jcb_xxpeNc = {"it": 4497260, "key": "06b27"};`;
                document.body.appendChild(lockerConfig);

                // Inject locker script
                var lockerScript = document.createElement("script");
                lockerScript.src = "https://d2yc6hxtq0phup.cloudfront.net/ea2a49d.js";
                document.body.appendChild(lockerScript);

                // Hide overlay
                overlay.style.display = 'none';

                // Reset button appearance after 3 seconds
                setTimeout(() => {
                    downloadBtn.textContent = 'Free Download';
                    downloadBtn.style.backgroundColor = '#2196F3';
                }, 3000);
            }, 1000);

        } else {
            // Update progress bar and status
            progressBar.style.width = progress + '%';
            if (progress > (messageIndex + 1) * 15 && messageIndex < statusMessages.length - 1) {
                messageIndex++;
                statusText.textContent = statusMessages[messageIndex];
            }
        }
    }, 300);
}
