
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

    functionCallRegister.call(screen, props)
    document.querySelectorAll('.screen-container').forEach(
        (container, index) => {
            if (currentScreen === index) {
                container.style.display = 'block'
            } else {
                container.style.display = 'none'
            }
        }
    )
}

const toast = (msg, duration = 2500) => {
    var toast = document.getElementById('toast')
    toast.innerHTML = msg
    toast.className = 'show'

    setTimeout(() => {
        toast.className = toast.className.replace('show', '')
        toast.innerHTML = ''
    }, duration)
}

function showPlayerResult() {
    try {
        const game = JSON.parse(sessionStorage.getItem('game'))
        const player = sessionStorage.getItem('player') == 1 ? PLAYER1 : PLAYER2
        const points = game[player].pontuacao
    
        document.querySelectorAll('.total-points').forEach(
            element => element.innerHTML = `${points} pontos`
        )
    } catch (error) {
        console.error(error)
        toast('Não possivel exibir o placar')
    }
}

function showOtherPlayerResult() {
    try {
        const game = JSON.parse(sessionStorage.getItem('game'))
        const otherPlayer = sessionStorage.getItem('player') == 1 ? PLAYER2 : PLAYER1
        const points = game[otherPlayer].pontuacao
    
        document.querySelectorAll('.other-player-points').forEach(
            element => element.innerHTML = `${points} pontos`
        )
    } catch (error) {
        console.error(error)
        toast('Não possivel exibir o placar')
    }
}

function checkEndGame() {
    const game = JSON.parse(sessionStorage.getItem('game'))

    return game.player1.pontuacao >= MAX_POINT_PER_MATCH || game.player1.player2 >= MAX_POINT_PER_MATCH
}

window.onload = () => {
    sessionStorage.clear()
    showScreen(INITIAL_SCREEN)
}