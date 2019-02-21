
const movie = document.querySelector('video');

// progress handler

const progressBelt = document.querySelector('div.progress__filled');
const progress = document.querySelector('div.progress');
function changeProgressBar () {
    const percent = 100 / movie.duration * movie.currentTime;
    progressBelt.style.flexBasis = percent + "%";
}
function moveProgressBar (movie, event) {
    movie.currentTime = event.offsetX;
}
movie.addEventListener('timeupdate', changeProgressBar);
progress.addEventListener('mousedown', e => moveProgressBar(movie, e));


// play and pause handler

const playAndPauseButton = document.querySelector("button.player__button.toggle i");
function playHandler () {
    if (movie.paused) {
        movie.play();
        playAndPauseButton.classList.remove("fas", "fa-play");
        playAndPauseButton.classList.add("fas", "fa-pause");
    } else {
        movie.pause();
        playAndPauseButton.classList.remove("fas", "fa-pause");
        playAndPauseButton.classList.add("fas", "fa-play");
    }
}
playAndPauseButton.addEventListener('click', playHandler);
movie.addEventListener('click', playHandler);


// volume handler

function volumeHandler (event, movie) {
    movie.volume = event.target.value;
}
document.querySelector("input[name=volume]").addEventListener('change', e => volumeHandler(e, movie));


// playbackRate handler

function playbackRateHandler (event, movie) {
    movie.playbackRate = event.target.value;
}
document.querySelector("input[name=playbackRate]").addEventListener('change', e => playbackRateHandler(e, movie));


// handler for rewinding a movie

function skipHandler (movie, event) {
    let time = movie.currentTime;
    movie.currentTime = time + parseInt(event.target.dataset.skip);
};
document.querySelectorAll('button[data-skip]')
    .forEach(el => el.addEventListener('click', e => skipHandler(movie, e)));