document.getElementById("rice-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let riceType = document.getElementById("rice-type").value;
    let riceWeight = parseFloat(document.getElementById("rice-weight").value);

    if (isNaN(riceWeight) || riceWeight <= 0) {
        document.getElementById("water-amount").textContent = "Inserisci un peso valido.";
        document.getElementById("cooking-instructions").textContent = "";
        return;
    }

    let waterRatio;

    if (riceType === "bianco") {
        waterRatio = 1.25;
    } else if (riceType === "basmati") {
        waterRatio = 1.8;
    } else if (riceType === "integrale") {
        waterRatio = 2.5;
    }

    let waterAmount = riceWeight * waterRatio;

    document.getElementById("water-amount").textContent = `Devi usare circa ${waterAmount.toFixed(1)} ml di acqua.`;

    document.getElementById("cooking-instructions").textContent = 
        "Metti a fuoco medio e fai bollire. " + 
        "Una volta che bolle, chiudi con coperchio e cuoci per 10-12 minuti. " + 
        "Spegni il fuoco e lascia riposare per 5 minuti prima di servire.";
});
