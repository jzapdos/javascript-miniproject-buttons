const body = document.getElementById('body');
const heading = document.querySelector('.h3')
const randomButton = document.getElementById('random');
const bgDisplay = document.getElementById('bgDisplay')
const output = document.getElementById('output')
const text = document.querySelector('.h4')

function green() {
    body.style.background = "limegreen";
    heading.style.color = "black"
    output.innerHTML = `Background Color: Green`
    text.style.color = "white"
}

function red() {
    body.style.background = "red";
    heading.style.color = "black"
    output.innerHTML = `Background Color: Red`
    text.style.color = "white"
}

function blue() {
    body.style.background = "blue";
    heading.style.color = "black"
    output.innerHTML = `Background Color: Blue`
    text.style.color = "white"
}

function random() {
    const green = Math.round(Math.random() * 255)
    const red = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    body.style.background = randomColor;
    heading.style.color = "black"
    randomButton.style.background = randomColor;
    randomButton.style.color = "white";
    output.innerHTML = `Background Color: ${randomColor}`
    text.style.color = "white"
}

function black() {
    body.style.background = "rgb( 54, 54, 54)"
    heading.style.color = "white"
    output.innerHTML = `Background Color: rgb( 54, 54, 54)`
    text.style.color = "white"
}

function white() {
    body.style.background = "white"
    heading.style.color = "black"
    output.innerHTML = `Background Color: White`
    text.style.color = "black"
}

