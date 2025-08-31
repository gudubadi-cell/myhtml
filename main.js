const proposeBtn = document.getElementById('proposeBtn');
const breakupBtn = document.getElementById('breakupBtn');
const birthdayBtn = document.getElementById('birthdayBtn');
const actionForm = document.getElementById('actionForm');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');
const nameInput = document.getElementById('nameInput');

let actionType = '';

proposeBtn.addEventListener('click', () => {
    actionForm.classList.remove('hidden');
    actionType = 'propose';
    nameInput.placeholder = "Enter person's name to propose";
});

breakupBtn.addEventListener('click', () => {
    actionForm.classList.remove('hidden');
    actionType = 'breakup';
    nameInput.placeholder = "Enter person's name to break up with";
});

birthdayBtn.addEventListener('click', () => {
    actionForm.classList.remove('hidden');
    actionType = 'birthday';
    nameInput.placeholder = "Enter person's name for birthday";
});

cancelBtn.addEventListener('click', () => {
    actionForm.classList.add('hidden');
    nameInput.value = '';
});

submitBtn.addEventListener('click', () => {
    const name = nameInput.value;
    if (name) {
        localStorage.setItem('actionType', actionType);
        localStorage.setItem('name', name);

        let videoSrc = '';
        let audioSrc = '';

        if (actionType === 'propose') {
            videoSrc = 'propose.mp4';
            audioSrc = 'l lagaya.mp3';
        } else if (actionType === 'breakup') {
            videoSrc = 'sad.mp4';
            audioSrc = 'Mo Bhagya Mote Karichi Dura!!Odia Sad Status Video!! Heart Broken Song Video!!4k Full Screen Video.mp3';
        } else if (actionType === 'birthday') {
            videoSrc = 'birthday.mp4';
            audioSrc = 'happy-birthday-357371.mp3';
        }

        localStorage.setItem('videoSrc', videoSrc);
        localStorage.setItem('audioSrc', audioSrc);

        window.location.href = 'result.html';
    } else {
        alert('Please enter a name.');
    }
});