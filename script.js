const cockpit = document.querySelector(".cockpit");
const box02inputs = document.querySelectorAll(".box02 input");
const direction = document.querySelector(".seats select");
const content = document.querySelector("textarea");
const refresh = document.querySelector(".refresh");
const copy = document.querySelector(".copy");

const randomGradi = () =>  {
    const Hexcolor = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${Hexcolor}`;
}

const createGradient= (createRandom) =>  {
    if (createRandom) {
        box02inputs[0].value = randomGradi();
        box02inputs[1].value = randomGradi();
    }
    const gradi = `linear-gradient(${direction.value},${box02inputs[0].value},${box02inputs[1].value})`;
    cockpit.style.background = gradi;
    content.value = `background: ${gradi};`;
}

box02inputs.forEach(input => {
    input.addEventListener("input", () => createGradient(false));
})

const copyCode = () => {
    navigator.clipboard.writeText(content.value);
    copy.innerText = "Code Copied";
    setTimeout(() => copy.innerText = "Copy Code", 1600);
}

direction.addEventListener("change", () => createGradient(false));
refresh.addEventListener("click", () => createGradient(true));
copy.addEventListener("click", copyCode);