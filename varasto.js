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