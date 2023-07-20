/*Cambiar color de divs a negro*/

function cambiarColor(elementId, color) {
    elementId.style.backgroundColor = color
}

const div1 = document.getElementById('div_1')
const div2 = document.getElementById('div_2')
const div3 = document.getElementById('div_3')
const div4 = document.getElementById('div_4')

div1.addEventListener('click', ()=> {
    cambiarColor(div1, 'black')
})

div2.addEventListener('click', ()=> {
    cambiarColor(div2, 'black')
})

div3.addEventListener('click', ()=> {
    cambiarColor(div3, 'black')
})

div4.addEventListener('click', ()=> {
    cambiarColor(div4, 'black')
})

/*Código para div key - Letras a, s, d*/

const divKey = document.getElementById('key')
const mensaje = document.getElementById('mensaje_key')

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        divKey.style.backgroundColor = 'pink'
        mensaje.innerHTML = 'La letra a/A activa el color rosado'
    } 
    else if (event.key === 's' || event.key === 'S') {
        divKey.style.backgroundColor = 'orange'
        mensaje.innerHTML = 'La letra s/S activa el color naranjo'
    } 
    else if (event.key === 'd' || event.key === 'D') {
        divKey.style.backgroundColor = 'skyblue'
        mensaje.innerHTML = 'La letra d/D activa el color celeste'
    }
    else {
        divKey.style.backgroundColor = 'white'
        mensaje.innerHTML = 'La letra presionada no activa ningún color dentro de este cuadrado'
    }
})

/*Código para div key1 - Letras q, w, e*/

const divKey1 = document.getElementById('key1')
const mensaje1 = document.getElementById('mensaje_key1')

document.addEventListener('keydown', function (event) {
    if (event.key === 'q' || event.key === 'Q') {
        divKey1.style.backgroundColor = 'yellow'
        mensaje1.innerHTML = 'La letra q/Q activa el color amarillo'
    } 
    else if (event.key === 'w' || event.key === 'W') {
        divKey1.style.backgroundColor = 'blue'
        mensaje1.innerHTML = 'La letra w/W activa el color azul'
    } 
    else if (event.key === 'e' || event.key === 'E') {
        divKey1.style.backgroundColor = 'brown'
        mensaje1.innerHTML = 'La letra e/E activa el color café'
    }
    else {
        divKey1.style.backgroundColor = 'white'
        mensaje1.innerHTML = 'La letra presionada no activa ningún color dentro de este cuadrado'
    }
})