let imagePlayer = document.createElement("img")
let imageComputer = document.createElement("img")
let yourPoints = 0
let computerPoints = 0
const elements = {
    player: ".your-points",
    computer:  ".computer-ponits",
    playerChoose: ".player-choose",
    computerChoose: ".computer-choose",
    rock: ".rock",
    paper: ".paper",
    scissors: ".scissors",
    reset: ".reset"
}
const getElements = (element) => {
    return document.querySelector(element)
}
const yourChoose = () => {
    getElements(elements.rock).addEventListener("click",()=>{
        displayIMG(elements.rock,elements.playerChoose,imagePlayer)
        computerChoose(elements.rock)
    })
    getElements(elements.paper).addEventListener("click",()=>{
        displayIMG(elements.paper,elements.playerChoose,imagePlayer)
        computerChoose(elements.paper)
        
    })
    getElements(elements.scissors).addEventListener("click",()=>{
        displayIMG(elements.scissors,elements.playerChoose,imagePlayer)
        computerChoose(elements.scissors)
    })
    getElements(elements.reset).addEventListener("click", () => {
        reset()
    })
}
const displayIMG = (element,place,image) => {
    image.setAttribute("src",`img/${element.substring(1,element.lenght)}.png`)
    getElements(place).append(image)
}
const computerChoose = (yourChoose) => {
    const chooses = [".rock",".paper",".scissors"]
    const randomChoose = chooses[Math.floor(Math.random()*chooses.length)]
    displayIMG(randomChoose,elements.computerChoose,imageComputer)
    if(yourChoose == randomChoose){
        yourPoints++
        computerPoints++
        getElements(elements.player).textContent = yourPoints
        getElements(elements.computer).textContent = computerPoints
    }
    if(yourChoose == ".paper" && randomChoose == ".rock"){
        yourPoints++
        getElements(elements.player).textContent = yourPoints
    }
    if(yourChoose == ".paper" && randomChoose == ".scissors"){
        computerPoints++
        getElements(elements.computer).textContent = computerPoints
    }
    if(yourChoose == ".rock" && randomChoose == ".scissors"){
        yourPoints++
        getElements(elements.player).textContent = yourPoints
    }
    if(yourChoose == ".rock" && randomChoose == ".paper"){
        computerPoints++
        getElements(elements.computer).textContent = computerPoints
    }
    if(yourChoose == ".scissors" && randomChoose == ".paper"){
        yourPoints++
        getElements(elements.player).textContent = yourPoints
    }
    if(yourChoose == ".scissors" && randomChoose == ".rock"){
        computerPoints++
        getElements(elements.computer).textContent = computerPoints
    }
    console.log(yourPoints + " " + computerPoints)
}
const reset = () =>{
    imagePlayer.setAttribute("src"," ")
    imageComputer.setAttribute("src"," ")
    yourPoints = 0
    computerPoints = 0
    getElements(elements.player).textContent = ""
    getElements(elements.computer).textContent = ""
}
yourChoose();
