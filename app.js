function playMusic(keyCode) {
    const key = document.querySelector(`kbd[data-key="${keyCode}"]`);
    if (!key) {
        console.log('no mapping key');
        return;
    };
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const parentOfKey = key.parentElement;

    audio.currentTime = 0;
    audio.play();
    parentOfKey.classList.add('playing');

}

const button = document.querySelectorAll('.button');
button.forEach(btn => btn.addEventListener('transitionend', (e) => {
    btn.classList.remove('playing');
}));

document.addEventListener('keydown', (e) => {
    playMusic(e.keyCode);
});