let buyf = true

function buy(){
    if(buyf == true){
        document.getElementById('bfn').style.background = "#2F7025"
        document.getElementById('bfn').innerText = "В корзине"
        buyf = false
    }
    else{
        document.getElementById('bfn').style.background = "#2F4425"
        document.getElementById('bfn').innerText = "В корзину"
        buyf = true
    }

}
window.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#btn_menu").addEventListener("click", function(){
        document.querySelector("#menu-1").classList.toggle("isActive")
    })
})

let btnTheme = document.querySelector(".btn-theme")

btnTheme.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')
})
