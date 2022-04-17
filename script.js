const AllBtn = document.querySelectorAll('.btn');
const display = document.querySelector(".display")
const AC = document.querySelector('.clear')
const Del = document.querySelector('.del')
const equal = document.querySelector('.equal')

AllBtn.forEach(button=> {
    button.addEventListener('click', ()=> {
        if(display.innerHTML == 0) {
            display.innerHTML = ""
        }
        
        display.innerHTML += button.innerHTML
    })
})

AC.addEventListener('click', ()=> {
    display.innerHTML = '0'
})

Del.addEventListener('click', ()=> {
    display.innerHTML = display.innerHTML.slice(0, -1);
    if(display.innerHTML == '') {
        display.innerHTML = '0'
    }
})

equal.addEventListener('click', ()=> {
    display.innerHTML = eval(display.innerHTML)
})