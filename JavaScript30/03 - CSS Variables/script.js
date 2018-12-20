
const inputs = document.querySelectorAll(".controls input");

function inputsHandler() {
    const px = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + px);
    console.log("value = " + this.value + " " + this.name);
    console.log(this);
}

inputs.forEach(input => input.addEventListener("change", inputsHandler));
