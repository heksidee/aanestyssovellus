let luoTili = document.getElementById("luotili");
luoTili.addEventListener("click", tarkastaKäytSala);

function tarkastaKäytSala() {
    let syötettyKäytNimi = document.getElementById("newusername").value;
    let syötettySalasana = document.getElementById("newpassword").value;
    let onAdmin = document.getElementById("admin").checked;

    let validKäyt = /^[a-zA-Z0-9]+$/;
    let validSalasana = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

    let virheIlmK = document.getElementById("käyttäjänimi");
    let virheIlmS = document.getElementById("salasana");

    let käytOk = validKäyt.test(syötettyKäytNimi);
    let salaOk = validSalasana.test(syötettySalasana);

    virheIlmK.style.color = käytOk ? "white" : "rgb(255, 106, 106)";
    virheIlmS.style.color = salaOk ? "white" : "rgb(255, 106, 106)";

    if (käytOk && salaOk) {
        let käyttäjä = {
            nimi: syötettyKäytNimi,
            salasana: syötettySalasana,
            rooli: onAdmin ? "admin" : "user"
        };
    
        localStorage.setItem("kirjautunutkäyttäjä", JSON.stringify(käyttäjä));
        alert("Tili luotu onnistuneesti");

        document.getElementById("newusername").value = "";
        document.getElementById("newpassword").value = "";
    } else {
        alert("Tarkasta, että kaikki kentät ovat oikein")
    }
}

document.getElementById("btnkirjaudu").addEventListener("click", function() {
    let syötettyKäyttäjä = document.getElementById("username").value;
    let syötettySalasana = document.getElementById("password").value;

    let tallennettuData = JSON.parse(localStorage.getItem("kirjautunutkäyttäjä"));

    if (tallennettuData && 
        syötettyKäyttäjä === tallennettuData.nimi && 
        syötettySalasana === tallennettuData.salasana) {
        alert("Kirjautuminen onnistui");
        
        if (tallennettuData.rooli === "admin") {
            console.log("kirjauduttu admin");
        } else {
            console.log("kirjauduttu user");
        }

        let modalEl = document.getElementById("kirjaudu");
        let bootstrapModal = bootstrap.Modal.getInstance(modalEl);
        bootstrapModal.hide();
    } else {
        alert("Virheellinen käyttäjänimi tai salasana");
    }
})