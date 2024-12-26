'use strict'

let toggler = document.querySelector('.toggler_menu')
let ul = document.querySelector("ul")

toggler.addEventListener('click', ()=>{
    ul.classList.toggle("active")
    toggler.classList.toggle("active")
})