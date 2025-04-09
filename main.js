let luoTili = document.getElementById("luotili");
luoTili.addEventListener("click", tarkastaKäytSala);

function tarkastaKäytSala() {
    tarkastaKäyt();
    tarkastaSala();
}

function tarkastaKäyt() {
    let syötettyKäytNimi = document.getElementById("newusername").value;
    let validKäyt = /^[a-zA-Z0-9]+$/;
    let virheIlmK = document.getElementById("käyttäjänimi");

    if (validKäyt.test(syötettyKäytNimi)) {
        virheIlmK.style.color = "white";
    } else {
        virheIlmK.style.color = "rgb(255, 69, 69)";
    }
}

function tarkastaSala() {
    let syötettySalasana = document.getElementById("newpassword").value;
    let validSalasana = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
    let virheIlmS = document.getElementById("salasana");

    if (validSalasana.test(syötettySalasana)) {
        virheIlmS.style.color = "white";
    } else {
        virheIlmS.style.color = "rgb(255, 69, 69)";
    }
}