document.addEventListener("DOMContentLoaded", () => {
    const finlandWords = [
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
    const spanishWords = [
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
    let currentIndex = 0; // Índice de la palabra actual

    const dictationInput = document.getElementById("dictation-input");
    const dictationSubmit = document.getElementById("dictation-submit");
    const dictationFeedback = document.getElementById("dictation-feedback");
    const playAudioButton = document.getElementById("play-audio");
    const randomWordButton = document.getElementById("random-word");
    const resetButton = document.getElementById("reset-game");

    const attemptsLeft = document.getElementById("attempts-left");

    // Set a random word for dictation
    //let currentIndex = Math.floor(Math.random() * finlandWords.length);

    // Dictation game logic
    dictationSubmit.addEventListener("click", () => {
        if (dictationInput.value.toLowerCase() === finlandWords[currentIndex]) {
            dictationFeedback.textContent = "¡Correcto! su traducción es:" + spanishWords[currentIndex];
            dictationFeedback.style.color = "green";
        } else {
            dictationFeedback.textContent = "Incorrecto. Intenta de nuevo.";
            dictationFeedback.style.color = "red";
            attempts--;
            updateAttempts();
        }
    });

    // Play audio for dictation using Web Speech API
    playAudioButton.addEventListener("click", () => {
        playAudio();
    });

    // Play audio for dictation using Web Speech API
    function playAudio() {
        const utterance = new SpeechSynthesisUtterance(finlandWords[currentIndex]);
        utterance.lang = "es-ES";

        // Cambiar a voz femenina
        const voices = window.speechSynthesis.getVoices();
        const femaleVoice = voices.find(voice => voice.lang === "es-ES" && voice.name.includes("Female"));

        if (femaleVoice) {
            utterance.voice = femaleVoice;
        } else {
            console.warn("No se encontró una voz femenina para es-ES.");
        }

        window.speechSynthesis.speak(utterance);
    }

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
        dictationInput.value = "";
        dictationFeedback.textContent = "";
        updateAttempts();
        playAudio();
    }

    // Cambiar la palabra aleatoriamente y reproducir audio
    randomWordButton.addEventListener("click", () => {
        currentIndex = Math.floor(Math.random() * finlandWords.length); // Obtener un nuevo índice aleatorio
        dictationInput.value = ""; // Limpiar el input
        dictationFeedback.textContent = ""; // Limpiar el feedback
        updateAttempts(); // Actualizar los intentos restantes
        playAudio(); // Reproducir el audio automáticamente
    });

    resetButton.addEventListener("click", () => {
        resetGame();
    });

    currentIndex = Math.floor(Math.random() * finlandWords.length);
    updateAttempts();
    playAudio();
});
