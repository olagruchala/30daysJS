const movie = document.querySelector('video');

// progress handler
// does not work in Chrome 72 and Opera 58

function changeProgressBar() {
    const progressBelt = document.querySelector('div.progress__filled');
    const percent = 100 / this.duration * this.currentTime;
    progressBelt.style.flexBasis = percent + "%";
}

function moveProgressBar(movie, event) {
    movie.currentTime = event.offsetX;
}

movie.addEventListener('timeupdate', changeProgressBar);
document.querySelector('div.progress').addEventListener('click', e => moveProgressBar(movie, e));

// play and pause handler

const playAndPauseButton = document.querySelector("button.player__button.toggle");

function playHandler(movie) {
    if (movie.paused) {
        movie.play()
            .then(() => {
                playAndPauseButton.childNodes[0].classList.remove("fas", "fa-play");
                playAndPauseButton.childNodes[0].classList.add("fas", "fa-pause");
            })
            .catch(err => console.log(err))
    } else {
        movie.pause();
        playAndPauseButton.childNodes[0].classList.remove("fas", "fa-pause");
        playAndPauseButton.childNodes[0].classList.add("fas", "fa-play");
    }
}

playAndPauseButton.addEventListener('click', () => playHandler(movie));
movie.addEventListener('click', () => playHandler(movie));

// volume and playbackRate handler

function handleRange(event, movie) {
    movie[event.currentTarget.name] = event.currentTarget.value;
}

document.querySelectorAll('input[type=range]')
    .forEach(el => el.addEventListener('change', e => handleRange(e, movie)));

// handler for rewinding a movie
// does not work in Chrome 72 and Opera 58

function skipHandler(movie, event) {
    let time = movie.currentTime;
    let skip = parseInt(event.target.dataset.skip);
    movie.currentTime = time + skip;
}

document.querySelectorAll('button[data-skip]')
    .forEach(el => el.addEventListener('click', e => skipHandler(movie, e)));


function fullScreenHandler(movie) {
    if (movie.requestFullscreen) {
        movie.requestFullscreen();
    } else if (movie.mozRequestFullScreen) { /* Firefox */
        movie.mozRequestFullScreen();
    } else if (movie.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        movie.webkitRequestFullscreen();
    } else if (movie.msRequestFullscreen) { /* IE/Edge */
        movie.msRequestFullscreen();
    } else {
        alert('Fullscreen not supported.')
    }
}

document.querySelector('button.full').addEventListener('click', () => fullScreenHandler(movie));