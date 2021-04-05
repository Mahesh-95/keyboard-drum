const removeClass = (e) => {
    if(e.propertyName === 'transform') {
        e.target.classList.remove('playing');
    }
}

const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;  //stop when press oth er than assigned key

    key.classList.add('playing'); //transition
    audio.currentTime = 0;  // restart 
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeClass));
window.addEventListener('keydown', playSound);