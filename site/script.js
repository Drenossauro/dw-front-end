
let currentScreen = null

const showScreen = (screen) => {
    currentScreen = screen

    document.querySelectorAll('.screen-container').forEach(
        (container, index) => container.style.display = currentScreen == index ? 'block' : 'none'
    )
}

window.onload = () => {
    showScreen(5)
}