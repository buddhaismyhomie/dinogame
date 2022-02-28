const dino = document.getElementById('character')
const rock = document.getElementById('block')
const rock2 = document.getElementById('block2')
const startbtn = document.getElementById('start')
const highScore = document.getElementById('highScore')
const Score = document.getElementById('score')

actualScore = 0
Score.innerText = `Score : ${actualScore}`


startbtn.addEventListener('click', () => {
    setTimeout(() => {
        setInterval(() => {
            var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
            var rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'))
            var rockLeft2 = parseInt(window.getComputedStyle(rock2).getPropertyValue('left'))
            if ((rockLeft < 20 && rockLeft > -20 && dinoTop > 130) || (rockLeft2 < 20 && rockLeft2 > -20 && dinoTop > 130)) {
                alert('Game over')
                window.location.reload(true)

            }
            if (rockLeft == -30) {
                actualScore++
                Score.innerText = `Score : ${actualScore}`
                
        console.log(actualScore);
            }

        }, 10)
    }, 500)
    rock.style.animation = 'rock 1.4s infinite'
    startbtn.style.display = 'none'
    setTimeout(() => {
        rock2.style.display = 'block'
        rock2.style.animation = 'rock 2s infinite'
    }, 3000
    )
   
})


function jump() {
    if (dino.classList != 'animation') {
        dino.classList.add('animation')
    }
    setTimeout(() => { dino.classList.remove('animation') },500)
}




