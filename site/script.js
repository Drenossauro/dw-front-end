
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

// DOM functions

const showScreen = (screen, props) => {
    functionCallRegister.call(screen, props)
    document.querySelectorAll('.screen-container').forEach(
        (container, index) => {
            container.style.display = screen === index ? 'block' : 'none'
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
        const game = getGame()
        const player = getPlayerLabel()
        const points = game[player].pontuacao
    
        document.querySelectorAll('.total-points').forEach(
            element => element.innerHTML = `${points}`
        )
    } catch (error) {
        console.error(error)
        toast('Não possivel exibir o placar')
    }
}

function showOtherPlayerResult() {
    try {
        const game = getGame()
        const otherPlayer = getOtherPlayerLabel()
        const points = game[otherPlayer].pontuacao
    
        document.querySelectorAll('.other-player-points').forEach(
            element => element.innerHTML = `${points}`
        )
    } catch (error) {
        console.error(error)
        toast('Não possivel exibir o placar')
    }
}

// game manager functions
function initGame(nickname, token, player, game) {
    sessionStorage.setItem(NICKNAME, nickname)
    sessionStorage.setItem(TOKEN, token)
    sessionStorage.setItem(PLAYER, player)
    sessionStorage.setItem(GAME, JSON.stringify(game))
    sessionStorage.setItem(MATCH, 0)
}

function checkEndGame() {
    const game = getGame()

    return game.player1.pontuacao >= MAX_POINT_PER_MATCH || game.player2.pontuacao >= MAX_POINT_PER_MATCH
}

// sessionStorage manager functions
function getNickname() {
    return sessionStorage.getItem(NICKNAME) || ''
}

function getToken() {
    if (sessionStorage.getItem(TOKEN)) {
        return parseInt(sessionStorage.getItem(TOKEN))
    }

    throw 'TOKEN não encontrado'
}

function getPlayer() {
    if (sessionStorage.getItem(PLAYER)) {
        return parseInt(sessionStorage.getItem(PLAYER))
    }

    throw 'Player não encontrado'
}

function getPlayerLabel() {
    switch (getPlayer()) {
        case 1:
            return PLAYER1;
        case 2:
            return PLAYER2;
        default:
            throw 'Erro ao descobrir que player está logado'
    }
}

function getOtherPlayerLabel() {
    switch (getPlayer()) {
        case 1:
            return PLAYER2;
        case 2:
            return PLAYER1;
        default:
            throw 'Erro ao descobrir que player está logado'
    }
}

function setGame(game) {
    sessionStorage.setItem('game', JSON.stringify(game))
}

function getGame() {
    if (sessionStorage.getItem(GAME)) {
        return JSON.parse(sessionStorage.getItem(GAME))
    }

    throw 'Configurações da partida não encontradas'
}

function getMatch() {
    return parseInt(sessionStorage.getItem(MATCH) || 0)
}

function addMatch() {
    const match = getMatch()
    
    sessionStorage.setItem(MATCH, match + 1)
}

// init game 😁
window.onload = () => {
    sessionStorage.clear()
    showScreen(INITIAL_SCREEN)
}