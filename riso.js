document.getElementById('rice-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ottieni i valori dal form
    const riceType = document.getElementById('rice-type').value;
    const riceWeight = parseFloat(document.getElementById('rice-weight').value);

    // Verifica se il peso è valido
    if (isNaN(riceWeight) || riceWeight <= 0) {
        alert("Per favore inserisci un peso valido.");
        return;
    }

    // Definisci la quantità di acqua in base al tipo di riso
    let waterAmount;

    switch (riceType) {
        case 'bianco':
            waterAmount = riceWeight * 2;  // 1 parte di riso per 2 di acqua
            break;
        case 'basmati':
            waterAmount = riceWeight * 1.5;  // 1 parte di riso per 1.5 di acqua
            break;
        case 'integrale':
            waterAmount = riceWeight * 2.5;  // 1 parte di riso per 2.5 di acqua
            break;
        default:
            waterAmount = 0;
            break;
    }

    // Mostra il risultato
    const resultElement = document.getElementById('result');
    const waterAmountElement = document.getElementById('water-amount');
   
    waterAmountElement.textContent = `Acqua necessaria: ${waterAmount} ml`;
    resultElement.style.display = 'block';
    document.getElementById("cooking-instructions").textContent = 
        "Metti a fuoco medio e fai bollire. " + 
        "Una volta che bolle, chiudi con coperchio e cuoci per 10-12 minuti. " + 
        "Spegni il fuoco e lascia riposare per 5 minuti prima di servire.";
});
