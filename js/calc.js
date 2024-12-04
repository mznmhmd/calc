const result = document.getElementById('result')
const numbtns = document.querySelectorAll('.numbtns')
const symbol = document.querySelectorAll('.symbol')
const del = document.getElementById('delete')
const uisymbol = document.getElementById('symbol')
const secondaryData = document.getElementById('secondaryData')
const equal = document.getElementById('equal')
const clear = document.getElementById('clear')
for(let i = 0 ; i < numbtns.length ; i++){
numbtns[i].addEventListener('click', ()=>{
    result.innerHTML += numbtns[i].innerText
})
}
let firstdata = '';
let seconddata = ''
let methodsymbol = ''
for(let i = 0 ; i < symbol.length ; i++){
symbol[i].addEventListener('click' , ()=>{
    if(firstdata == ''){
    firstdata = result.innerText
    methodsymbol = symbol[i].innerText 
}else{
    uisymbol.innerText = symbol[i].innerText
    seconddata = result.innerText
    methodsymbol = uisymbol.innerText
    result.innerText = eval(firstdata + methodsymbol + seconddata)
    firstdata = result.innerText
}
secondaryData.innerText = result.innerText
result.innerText= ''
})
}
equal.addEventListener('click', ()=>{
    seconddata = result.innerText
    result.innerText = eval(firstdata + methodsymbol + seconddata)
    methodsymbol = ''
    uisymbol.innerText = ''
    secondaryData.innerText = ''
    firstdata = ''
})
clear.addEventListener('click', ()=>{
    firstdata = ''
    secondaryData.innerText = ''
    seconddata = ''
    methodsymbol = ''
    uisymbol.innerText = ''
    result.innerText = ''
})
const theme = document.getElementById('theme')
const calcbody = document.getElementById('calcbody')
theme.addEventListener('change',(event)=>{
    console.log(event.target.checked)
    if(event.target.checked==true){
        calcbody.classList.add('darktheme')
        calcbody.classList.remove('lighttheme')
    }else{
        calcbody.classList.add('lighttheme')
        calcbody.classList.remove('darktheme')
    }
})