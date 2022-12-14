
// URLS
const BASE_URL = 'https://tads-dw1-mocado.uc.r.appspot.com'

const URL_NEW_GAME = `${BASE_URL}/novo_jogo`
const URL_EXISTING_GAME = `${BASE_URL}/jogo_existente`
const URL_IMAGE_UPLOAD = `${BASE_URL}/upload_de_imagem`
const URL_RECEIVE_IMAGE = `${BASE_URL}/recebe_imagem`
const URL_SEND_GUESS = `${BASE_URL}/envia_palpite`

// SCREENS
const INITIAL_SCREEN = 0
const WAITING_FOR_SECOND_PLAYER_SCREEN = 2
const UPLOAD_SCREEN = 3
const DRAW_SCREEN = 5
const SUCCESS_GUESS_SCREEN = 6
const WRONG_GUESS_SCREEN = 7
const WAITING_SCREEN = 4
const OTHER_PLAYER_SUCCESS_GUESS_SCREEN = 8
const OTHER_PLAYER_WRONG_GUESS_SCREEN = 9
const END_GAME_SCREEN = 1

// SESSIONSTORAGE INDEXES

const MATCH = 'match'
const NICKNAME = 'nickname'
const TOKEN = 'token'
const PLAYER = 'player'
const GAME = 'game'

// GAME STATUS

const UPLOAD = 'upload'
const CHUTE = 'chute'

// SETTINGS

const MAX_POINT_PER_MATCH = 80
const INTERVAL_BETWEEN_SCREENS_POINTS = 2300 // in miliseconds
const MATCH_TIME = 90
const PLAYER1 = 'player1'
const PLAYER2 = 'player2'