alternatives.forEach((alternative, index) => {
    let uusiDiv = document.createElement("div");
    uusiDiv.classList.add("form-check");
    
    let uusiInput = document.createElement("input");
    uusiInput.type = "radio";
    uusiInput.name = "aanestys";
    uusiInput.value = alternative;
    uusiInput.id = `alternative${index + 1}`;
    uusiInput.classList.add("form-checked-label", "me-2");

    let uusiLabel = document.createElement("label");
    uusiLabel.htmlFor = `alternative${index + 1}`;
    uusiLabel.textContent = alternative;
    uusiLabel.classList.add("form-checked-label");

    uusiDiv.appendChild(uusiInput);
    uusiDiv.appendChild(uusiLabel);
    vaihtoehdotForm.appendChild(uusiDiv);
});

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