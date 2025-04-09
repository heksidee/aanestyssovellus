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
        uusiAanestys.classList.add("m-3", "p-3", "border", "rounded");

        let kysymysElementti = document.createElement("h5");
        kysymysElementti.textContent = question;
        uusiAanestys.appendChild(kysymysElementti);

        let vaihtoehdotForm = document.createElement("form");
        vaihtoehdotForm.classList.add("listaVaihtoehdoista");
        alternatives.forEach((alternative, index) => {
            let uusiDiv = document.createElement("div");
            uusiDiv.classList.add("form-check");
            
            let uusiInput = document.createElement("input");
            uusiInput.type = "radio";
            uusiInput.name = "aanestys";
            uusiInput.value = alternative;
            uusiInput.id = `alternative${index + 1}`;
            uusiInput.classList.add("form-checked-label");

            let uusiLabel = document.createElement("label");
            uusiLabel.htmlFor = `alternative${index + 1}`;
            uusiLabel.textContent = alternative;
            uusiLabel.classList.add("form-checked-label");

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
});