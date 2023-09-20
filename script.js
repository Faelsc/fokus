const html = document.querySelector('html')
const focoBotao = document.querySelector('.app__card-button--foco')
const curtoBotao = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

focoBotao.addEventListener('click', () => {
    alterarContexto('foco')
})

curtoBotao.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto) {
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
