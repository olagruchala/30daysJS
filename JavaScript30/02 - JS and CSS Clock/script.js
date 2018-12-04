
const secondHand = document.querySelector(".second-hand");
const minutHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const minuts = now.getMinutes();
    const minutDegree = ((minuts / 60) * 360) + 90;
    minutHand.style.transform = `rotate(${minutDegree}deg)`;

    const hours = now.getHours();
    const hourDegree = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);