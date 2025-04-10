let adminBtn = document.getElementById("adminbtn");
let userBtn = document.getElementById("userbtn");
let aanestyksenLuontiPainike = document.getElementById("luoaanestys");

document.querySelectorAll('input[name="role"]').forEach((radio) => {
    radio.addEventListener('change', () => {
        if (adminBtn.checked) {
            if (!document.getElementById("votingbtn")) {
                let luoAanestysBtn = document.createElement("button");
                luoAanestysBtn.id = "votingbtn";
                luoAanestysBtn.classList.add("btn", "btn-success");
                luoAanestysBtn.textContent = "Luo äänestys";
                luoAanestysBtn.setAttribute("data-bs-toggle", "modal");
                luoAanestysBtn.setAttribute("data-bs-target", "#aanestys");

                aanestyksenLuontiPainike.appendChild(luoAanestysBtn);
            }
        } else {
            let nakyvaBtn = document.getElementById("votingbtn");
            if (nakyvaBtn) {
                nakyvaBtn.remove();
            }
        }
    });
});

document.getElementById("lisaavaihtoehto").addEventListener("click", function() {
    let vaihtoehtoElementti = document.getElementById("vaihtoehdot");
    let vaihtoehtoCount = document.querySelectorAll(".vaihtoehto").length + 1;

    let uusiVaihtoehto = document.createElement("div");
    uusiVaihtoehto.classList.add("mb-3");
    uusiVaihtoehto.innerHTML = `
    <label class="form-label">Vaihtoehto ${vaihtoehtoCount}</label>
    <input type="text" class="form-control vaihtoehto" placeholder="Kirjoita vaihtoehto">
    `;
    vaihtoehtoElementti.appendChild(uusiVaihtoehto);
});

document.getElementById("luoAanestysOk").addEventListener("click", function() {
    let question = document.getElementById("kysymys").value;
    let alternatives = Array.from(document.querySelectorAll(".vaihtoehto")).map(opt => opt.value).filter(v => v.trim() !== "");

    if (question && alternatives.length > 1) {
        let aanestysElementti = document.getElementById("aanestykset");
        let uusiAanestys = document.createElement("div");
        uusiAanestys.classList.add("m-3", "p-3", "border", "rounded", "voting");

        let kysymysElementti = document.createElement("h5");
        kysymysElementti.textContent = question;
        uusiAanestys.appendChild(kysymysElementti);

        let vaihtoehdotForm = document.createElement("form");
        vaihtoehdotForm.classList.add("listaVaihtoehdoista");
        alternatives.forEach((alternative, index) => {
            let uusiDiv = document.createElement("div");
            uusiDiv.classList.add("btn-group-vertical", "mt-3");
            uusiDiv.role = "group";
            uusiDiv.ariaLabel = "Vertical button group";
            
            let uusiInput = document.createElement("input");
            uusiInput.type = "radio";
            uusiInput.name = "aanestys";
            uusiInput.value = alternative;
            uusiInput.id = `alternative${index + 1}`;
            uusiInput.classList.add("btn-check");
            uusiInput.autocomplete = "off";

            let uusiLabel = document.createElement("label");
            uusiLabel.htmlFor = `alternative${index + 1}`;
            uusiLabel.textContent = alternative;
            uusiLabel.classList.add("btn", "btn-outline-light");

            uusiDiv.appendChild(uusiInput);
            uusiDiv.appendChild(uusiLabel);
            vaihtoehdotForm.appendChild(uusiDiv);
        });

        uusiAanestys.appendChild(vaihtoehdotForm);
        
        aanestysElementti.appendChild(uusiAanestys);

        document.getElementById("aanestysform").reset();

        let vaihtoehtoElementti = document.getElementById("vaihtoehdot");
        vaihtoehtoElementti.innerHTML = `
        <div class="mb-3">
            <label class="form-label">Vaihtoehto 1</label>
            <input type="text" class="form-control vaihtoehto" placeholder="Kirjoita vaihtoehto">
          </div>
          <div class="mb-3">
            <label class="form-label">Vaihtoehto 2</label>
            <input type="text" class="form-control vaihtoehto" placeholder="Kirjoita vaihtoehto">
          </div>
        `;

        let modal = bootstrap.Modal.getInstance(document.getElementById("aanestys"));
        modal.hide();
    }   else {
        alert("Kirjoita kysymys ja vähintää kaksi vaihtoehtoa.");
    }
    päivitäÄänestysPoisto();
});

function poistaAanestys(event) {                            /**ÄÄNESTYKSEN POISTO EI ONNISTU */
    let aanestyksenPoisto = event.target.closest(".voting");
    if (aanestyksenPoisto) {
        aanestyksenPoisto.remove();
    }
}

function äänestysFunctio() {
    console.log("äänestys!");
}

function päivitäÄänestysPoisto() {
    let adminValittu = adminBtn.checked;

    document.querySelectorAll(".voting").forEach(vote => {
        let deleteBtn = vote.querySelector(".btn-danger");
        let voteBtn = vote.querySelector(".btn-primary");

        if (adminValittu) {
            if (!deleteBtn) {
                let uusiDeleteBtn = document.createElement("button");
                uusiDeleteBtn.classList.add("btn", "btn-danger", "mt-3");
                uusiDeleteBtn.textContent = "Poista äänestys";
                uusiDeleteBtn.addEventListener("click", () => poistaAanestys(vote));
                vote.appendChild(uusiDeleteBtn);
            }
            if (voteBtn) {
                voteBtn.remove();
            }
        } else {
            if (!voteBtn) {
                let uusiVoteBtn = document.createElement("button");
                uusiVoteBtn.classList.add("btn", "btn-primary", "mt-3");
                uusiVoteBtn.textContent = "Ännestä";
                uusiVoteBtn.addEventListener("click", () => äänestysFunctio(vote));
                vote.appendChild(uusiVoteBtn);
            }
            if (deleteBtn) {
                deleteBtn.remove();
            }
        }
    });
}
document.querySelectorAll('input[name="role"]').forEach((radio) => {
    radio.addEventListener('change', päivitäÄänestysPoisto);
});