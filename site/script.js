
let currentScreen = null
const functionCallRegister = Object.freeze({
    _functions: new Map(),

    register(key, func) {
        if (typeof func != 'function') {
            throw 'The parameter should be a function'
        }

        this._functions.set(key, func)
    },

    call(key, props) {
        const func = this._functions.get(key)
        if (func) {
            func(props)
        }
    }
})

const showScreen = (screen, props) => {
    currentScreen = screen

    document.querySelectorAll('.screen-container').forEach(
        (container, index) => {
            if (currentScreen === index) {
                container.style.display = 'block'
                functionCallRegister.call(screen, props)
            } else {
                container.style.display = 'none'
            }
        }
    )
}

const toast = (msg, duration = 2500) => {
    var toast = document.getElementById('toast')
    toast.innerHTML = `Erro: ${msg}`
    toast.className = 'show'

    setTimeout(() => {
        toast.className = toast.className.replace('show', '')
        toast.innerHTML = ''
    }, duration)
}

window.onload = () => {
    showScreen(INITIAL_SCREEN)
}