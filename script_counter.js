let display =document.getElementById('dis')
let dv =document.getElementById('bts')
let start =document.getElementById('st')
let stopc =document.getElementById('stp')
let incr =document.getElementById('inc')
let de =document.getElementById('dec')

// countmili=0
countsec=0
let cnt=setInterval( () =>
{
    countsec++
    display.textContent=countsec
},1000)

start.addEventListener('click',()=>
{

    cnt=setInterval(() =>
    {
        countsec++
        display.textContent=countsec
    },1000)
})
stopc.addEventListener('click',()=>
{
    clearInterval(cnt)
})
incr.addEventListener('click',()=>
{
    clearInterval(cnt)
    countsec++
    display.textContent=countsec
    
})
de.addEventListener('click',()=>
{
    clearInterval(cnt)
    countsec--
    display.textContent=countsec
})