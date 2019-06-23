var ch = document.getElementById("CambiadorDeTema");

document.getElementById('CambiadorDeTema').addEventListener('click', function () {
    let temaOscuroSiempre = document.body.classList.toggle('Tema-oscuro');
    sessionStorage.setItem('tema-oscuro-siempre', temaOscuroSiempre);
});

if (JSON.parse(sessionStorage.getItem('tema-oscuro-siempre'))) {
    document.body.classList.add('Tema-oscuro');
}

window.onload = () => {
    console.log(localStorage.getItem('check'));

}

ch.onchange = function () {
    if (localStorage.getItem('check') == "disable") {
        localStorage.setItem('check', 'active');
    } else {
        localStorage.setItem('check', 'disable');
    }
}


