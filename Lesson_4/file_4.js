const red = document.getElementById('red')
const orange = document.getElementById('orange')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const liteBlue = document.getElementById('liteblue')
const blue = document.getElementById('blue')
const violet = document.getElementById('violet')
const img = document.getElementById('img')
red.style.backgroundColor = 'red'
orange.style.backgroundColor = 'orange'
yellow.style.backgroundColor = 'yellow'
green.style.backgroundColor = 'green'
liteBlue.style.backgroundColor = 'aqua'
blue.style.backgroundColor = 'blue'
violet.style.backgroundColor = 'violet'
img.style.visibility = 'hidden'
violet.parentElement.firstElementChild.style.visibility = 'visible'

red.onclick = function () {
    document.body.style.backgroundColor = 'red'
}
orange.onclick = function () {
    this.nextElementSibling.style.color = 'orange'
    this.previousElementSibling.style.color = 'orange'
}
yellow.onclick = function () {
    this.parentElement.lastElementChild.textContent = 'Фиолет'
}
green.onclick = function () {
    img.style.visibility = 'visible'
}
liteBlue.onclick = function () {
    const copyElem = this.cloneNode(true)
    this.insertAdjacentElement('afterend', copyElem)
}
blue.onclick = function () {
    this.parentElement.firstElementChild.style.visibility = 'hidden'
}
violet.onclick = function () {
    if (this.parentElement.firstElementChild.style.visibility == 'visible') {
        alert('Кнопка есть')
    } else {
        this.parentElement.firstElementChild.style.visibility = 'visible'
    }
}