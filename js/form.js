var Total = document.getElementById("total");
var maxlen = document.getElementById("comentarios");
var n = 500;

maxlen.addEventListener('keydown',()=>{
    var len = maxlen.value.length
    if(n>0 && n<=500){
        Total.innerHTML="Usted tiene " + (n-len) + " caracteres disponibles.";
    } else {
        return false;
    }   
});

window.addEventListener('scroll',()=>{
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(scroll>0){
        let head = document.getElementById("head");
        head.classList.remove("headerscrl");
        head.classList.add("superior");
    }
    else{
        let head = document.getElementById("head");
        head.classList.remove("superior");
        head.classList.add("headerscrl");
    }
})