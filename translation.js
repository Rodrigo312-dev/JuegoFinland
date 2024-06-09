document.addEventListener("DOMContentLoaded", () => {
    const spanishWords = [
        "onnellinen",   //feliz
        "huono",        //malo
        "äiti",         //madre
        "isä",          //padre
        "sisko",        //hermana
        "leijona",      //león
        "susi",         //lobo
        "ranta",        //playa
        "tulivuori",    //volcán
        "pilvi",        //nube
        "syksy",        //otoño
        "mehiläinen",   //abeja
        "perhonen",     //mariposa
        "isoisä",       //abuelo
        "isoäiti",      //abuela
        "käärme",       //serpiente
        "kilpikonna",   //tortuga
        "vihainen",     //enfadado
        "yllättynyt",   //sorprendido
        "veli",         //hermano
        "sisko",        //hermana
        "talvi",        //invierno
        "kesä",         //verano
        "metsä",        //bosque
        "joki",         //río
        "keilaus",      //bolos
        "koripallo",    //baloncesto
        "jääkiekko",    //jóquey
        "hyvä",         //bueno
        "vaikea",       //difícil
        "hämähäkki",    //araña
        "yllättynyt",   //sorprendido
        "vihainen"      //enfadado
    ];
    const finlandWords = [
        "feliz", 
        "malo", 
        "madre", 
        "padre", 
        "hermana",
        "leon",
        "lobo",
        "playa",
        "volcan",
        "nube",
        "otoño",
        "abeja",
        "mariposa",
        "abuelo",
        "abuela",
        "serpiente",
        "tortuga",
        "enfadado",
        "sorprendido",
        "hermano",
        "hermana",
        "invierno",
        "verano",
        "bosque",
        "río",
        "bolos",
        "baloncesto",
        "jóquey",
        "bueno",
        "difícil",
        "araña",
        "sorprendido",
        "enfadado"
    ];
    let attempts = 3;

    const spanishWordElement = document.getElementById("spanish-word");
    const translationInput = document.getElementById("translation-input");
    const translationSubmit = document.getElementById("translation-submit");
    const translationFeedback = document.getElementById("translation-feedback");
    const attemptsLeft = document.getElementById("attempts-left");
    const randomWordButton = document.getElementById("random-word");
    const resetButton = document.getElementById("reset-game");

    // Set a random word for translation
    let currentIndex = Math.floor(Math.random() * finlandWords.length);
    spanishWordElement.textContent = finlandWords[currentIndex];

    // Translation game logic
    translationSubmit.addEventListener("click", () => {
        if (translationInput.value.toLowerCase() === spanishWords[currentIndex]) {
            translationFeedback.textContent = "¡Correcto!";
            translationFeedback.style.color = "green";
        } else {
            translationFeedback.textContent = "Incorrecto. Intenta de nuevo.";
            translationFeedback.style.color = "red";
            attempts--;
            updateAttempts();
        }
    });

    // Update attempts left
    function updateAttempts() {
        attemptsLeft.textContent = `Intentos restantes: ${attempts}`;
        if (attempts === 0) {
            alert("¡Te has quedado sin intentos!");
            resetGame();
        }
    }

    // Reset game
    function resetGame() {
        attempts = 3;
        currentIndex = Math.floor(Math.random() * finlandWords.length);
        spanishWordElement.textContent = finlandWords[currentIndex];
        translationInput.value = "";
        translationFeedback.textContent = "";
        updateAttempts();
    }

     // Cambiar la palabra aleatoriamente y reproducir audio
     randomWordButton.addEventListener("click", () => {
        currentIndex = Math.floor(Math.random() * finlandWords.length); // Obtener un nuevo índice aleatorio
        spanishWordElement.textContent = finlandWords[currentIndex];
        translationInput.value = "";
        translationFeedback.textContent = "";
    });

    resetButton.addEventListener("click", () => {
        resetGame();
    });

    updateAttempts();
});
