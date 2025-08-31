document.addEventListener('DOMContentLoaded', function() {
    const actionType = localStorage.getItem('actionType');
    const name = localStorage.getItem('name');
    const videoSrc = localStorage.getItem('videoSrc');
    const audioSrc = localStorage.getItem('audioSrc');

    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const backgroundVideo = document.getElementById('background-video');
    const backgroundAudio = document.getElementById('background-audio');

    if (videoSrc && backgroundVideo) {
        backgroundVideo.src = videoSrc;
    } else if (backgroundVideo) {
        backgroundVideo.style.display = 'none';
    }

    if (audioSrc && backgroundAudio) {
        backgroundAudio.src = audioSrc;
    } else if (backgroundAudio) {
        backgroundAudio.style.display = 'none';
    }

    if (actionType && name) {
        if (actionType === 'propose') {
            resultTitle.textContent = `Proposing to ${name}`;
            resultMessage.innerHTML = `
                My dearest ${name}, <br><br>
                Words cannot fully express the feelings I have for you. Every moment we spend together feels like a beautiful dream, and I want to make it last forever. I can't imagine a future without you by my side.
                <br><br>
                Will you be mine?
            `;
        } else if (actionType === 'breakup') {
            resultTitle.textContent = `Breaking up with ${name}`;
            resultMessage.innerHTML = `
                Dear ${name}, <br><br>
                This is one of the hardest things I've ever had to do. I have thought about this for a long time, and I believe it's best for both of us to go our separate ways. I wish you nothing but the best for your future.
                <br><br>
                Goodbye.
            `;
        } else if (actionType === 'birthday') {
            resultTitle.textContent = `Happy Birthday, ${name}! 🎉`;
            resultMessage.innerHTML = `
                Dear ${name},<br><br>
                Wishing you the happiest of birthdays! May your day be filled with joy, laughter, and everything you wished for. Have a fantastic day!<br><br>
                Best wishes!
            `;
        }
        localStorage.removeItem('actionType');
        localStorage.removeItem('name');
        localStorage.removeItem('videoSrc');
        localStorage.removeItem('audioSrc');
    } else {
        resultTitle.textContent = "Oops!";
        resultMessage.textContent = "Something went wrong. Please go back and try again.";
        if (backgroundVideo) backgroundVideo.style.display = 'none';
        if (backgroundAudio) backgroundAudio.style.display = 'none';
    }
});