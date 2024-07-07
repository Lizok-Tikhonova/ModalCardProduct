

let count = 0
let saucePrice = 60
let startPrice = 220


function decrement(elem){
    let itogSum = document.querySelector('.itog-price')
    let value = parseInt(elem.textContent)
    if(value > 0){
        elem.textContent = parseInt(elem.textContent) - 1
        if(count !== 1){
            itogSum.textContent = parseInt(itogSum.textContent) - saucePrice
        }
        count--
        check()
    } else{
        return
    }
}

function increment(elem){
    let itogSum = document.querySelector('.itog-price')
    if(count < 10){
        elem.textContent = parseInt(elem.textContent) + 1
        if(count !== 0){
            itogSum.textContent = parseInt(itogSum.textContent) + saucePrice
        }
        count++
        check()
    } else{
        alert('Максимальное уоличество соусов 10')
        return
    }  
}

function check(){
    let plusPrice = document.querySelectorAll('.item-price')
    let optionSelect = document.querySelector('.options-selection__value')
    console.log(optionSelect);
    if(count === 0){
        optionSelect.textContent = '0 / 1 за 0₽'
        plusPrice.forEach(elem=>elem.textContent = '+0 ₽')
    } else {
        optionSelect.textContent = '1 / 1 за 0₽'
        plusPrice.forEach(elem=>elem.textContent = '+60 ₽')
    }
}
check()

let allMinus = document.querySelectorAll('.decriment')
allMinus.forEach(elem=>{
    elem.addEventListener('click', (e)=>decrement(e.target.closest('.counting').querySelector('.count')))
})

let allPlus = document.querySelectorAll('.increment')
allPlus.forEach(elem=>{
    elem.addEventListener('click', (e)=>increment(e.target.closest('.counting').querySelector('.count')))
})


function clear(){
    let plusPrice = document.querySelectorAll('.item-price')
    let optionSelect = document.querySelector('.options-selection__value')
    let itogSum = document.querySelector('.itog-price')
    let options = document.querySelectorAll('.count')
    optionSelect.textContent = '0 / 1 за 0₽'
    plusPrice.forEach(elem=>elem.textContent = '+0 ₽')
    itogSum.textContent = startPrice
    options.forEach(elem=>elem.textContent = 0)
    count = 0
}

let btnAdd = document.querySelector('.btnAdd')
btnAdd.addEventListener('click', (e)=>clear())