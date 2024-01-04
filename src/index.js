// console.log("Interesting!");
import examplePng from './images/example.png'
import exampleSvg from './images/example.svg'
import './styles/main.scss'
// import 'file.css'

class Game {
    name = 'Yanaki Tamajarobo'
}
const myGame = new Game()

const p = document.createElement('p')
p.textContent = `I like ${myGame.name}`

const heading = document.createElement('h1')
heading.textContent = 'Interesting'

const imgPng = document.createElement('img')
imgPng.style.maxWidth = "150px"
imgPng.src = examplePng


const imgSvg = document.createElement('img')
imgSvg.style.maxWidth = "150px"
imgSvg.src = exampleSvg

const app = document.querySelector("#root")
app.append(heading, p, imgPng, imgSvg)
