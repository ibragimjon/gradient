const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ]


function runGradient(){
    function randomcolor (){
        let color = '#'
    for (let i = 0; i < 6; i++){
        const randomnum = Math.floor(Math.random() * values.length)
        color += values[randomnum]
    }
    
    return color
    }
    
    const color1  = randomcolor()
    const color2 = randomcolor()
    
    
    
    
    const degree  = Math.floor(Math.random() *360)
    
    const bgcolor = `linear-gradient(${degree}deg, ${color1}, ${color2})`
     document.querySelector(
        'body',
    ).style.background = bgcolor

    document.querySelector('.color-text').textContent = bgcolor
    
}

runGradient()

const randomcolorbtn = document.querySelector('.random-color')

randomcolorbtn.addEventListener('click' , runGradient)