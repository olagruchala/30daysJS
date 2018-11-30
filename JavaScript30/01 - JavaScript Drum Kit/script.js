
function playSound (event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if(!audio) return; // jeśli audio = false, zakończ funkcję
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");

    // setTimeout(function(){
    //     key.classList.remove("playing")
    //     }, 700);

    function removeTransition(){
        key.classList.remove("playing");
    }

    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener("transitionend", removeTransition));
}


window.addEventListener("keydown", playSound);
