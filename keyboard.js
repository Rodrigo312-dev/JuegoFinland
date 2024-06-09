document.addEventListener("DOMContentLoaded", () => {
    const keysContainer = document.getElementById("keys-container");
    const keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "š", "t", "u", "v", "x", "y", "z", "ž", "å", "ä"];
    
    const translationInput = document.getElementById("translation-input"); // Obtener el input de traducción
    const dictationInput = document.getElementById("dictation-input"); // Obtener el input de dictado
    

    keys.forEach(key => {
        const keyElement = document.createElement("div");
        keyElement.classList.add("key");
        keyElement.textContent = key;
        keyElement.addEventListener("click", () => {
            console.log(key);
            console.log(translationInput)
            console.log(dictationInput)
            // Insertar la letra en el input correspondiente
            if (translationInput !== null) {
                translationInput.value += key;
                console.log("aca da");
            } else if (dictationInput != null) {
                dictationInput.value += key;
                console.log("aca tambien");
            }
        });
        keysContainer.appendChild(keyElement);
    });
});
