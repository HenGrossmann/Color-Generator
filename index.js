const containerEl = document.querySelector('main')

for (let index = 0; index < 30; index++) {
    const cor = document.createElement("div")
    cor.classList.add("color")
    containerEl.appendChild(cor)
}

const todasCores = document.querySelectorAll(".color")

generateColors()

function generateColors(){
    todasCores.forEach((todasCores)=>{
        const novaCor = randomColor();
        todasCores.style.backgroundColor = '#' + novaCor
        todasCores.innerHTML ='#' + novaCor
    })
}

function randomColor(){
    const chars = "0123456789abcdef"
    const colorCodeLenght = 6
    let colorCode = ""
    for (let index = 0; index < colorCodeLenght; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        colorCode += chars.substring(randomNum,randomNum + 1)
        
    }
return colorCode
}