const html = document.querySelector('html')
const focoBotao = document.querySelector('.app__card-button--foco')
const curtoBotao = document.querySelector('.app__card-button--curto')
const longoBotao = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const startPauseBotao = document.querySelector('#start-pause')
const musicaFocoInput = document.querySelector('#alternar-musica')
const iniciarOuPausarBotao = document.querySelector('#start-pause span')
const iniciarOuPausarBotaoIcone = document.querySelector(".app__card-primary-butto-icon") 
const musica = new Audio('sons/luna-rise-part-one.mp3')
const audioPlay = new Audio('sons/play.wav');
const audioPause = new Audio('sons/pause.mp3');
const audioTempoFinalizado = new Audio('sons/beep.mp3')


let tempoDecorridoEmSegundos = 5
let intervaloId = null

musica.loop = true

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

focoBotao.addEventListener('click', () => {
    alterarContexto('foco')
    focoBotao.classList.add('active')
})

curtoBotao.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBotao.classList.add('active')
})

longoBotao.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBotao.classList.add('active')
})

function alterarContexto(contexto) {
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
                titulo.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
                `
            
            break;
        case "descanso-curto":
                titulo.innerHTML = `
                Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
                `
            break;
        case "descanso-longo":
                titulo.innerHTML = `
                Hora de voltar à superfície<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
                `    
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0) {
        audioTempoFinalizado.play()        
        alert('Tempo finalizado!')
        zerar()
        return
    }   
    tempoDecorridoEmSegundos -= 1
}

startPauseBotao.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if (intervaloId) {
        audioPause.play();
        zerar()
        return
    }
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBotao.textContent = "Pausar"
    iniciarOuPausarBotaoIcone.setAttribute('src', `./imagens/pause.png`)
}

function zerar() {
    clearInterval(intervaloId)
    iniciarOuPausarBotao.textContent = "Começar"
    iniciarOuPausarBotaoIcone.setAttribute('src', `./imagens/play_arrow.png`)
    intervaloId = null
}
