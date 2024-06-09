document.addEventListener("DOMContentLoaded", () => {
    const spanishWords = [
        "feliz", 
        "malo", 
        "madre", 
        "padre", 
        "hermana",
        "león",
        "lobo",
        "playa",
        "volcán",
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
    const finlandWords = [
        "onnellinen", 
        "huono", 
        "äiti", 
        "isä", 
        "sisko",
        "leijona",
        "susi",
        "ranta",
        "tulivuori",
        "pilvi",
        "syksy",
        "mehiläinen",
        "perhonen",
        "isoisä",
        "isoäiti",
        "käärme",
        "kilpikonna",
        "vihainen",
        "yllättynyt",
        "veli",
        "sisko",
        "talvi",
        "kesä",
        "metsä",
        "joki",
        "keilaus",
        "koripallo",
        "jääkiekko",
        "hyvä",
        "vaikea",
        "hämähäkki",
        "yllättynyt",
        "vihainen"
    ];
    let attempts = 3;

    const spanishWordElement = document.getElementById("spanish-word");
    const translationInput = document.getElementById("translation-input");
    const translationSubmit = document.getElementById("translation-submit");
    const translationFeedback = document.getElementById("translation-feedback");

    const dictationInput = document.getElementById("dictation-input");
    const dictationSubmit = document.getElementById("dictation-submit");
    const dictationFeedback = document.getElementById("dictation-feedback");
    const playAudioButton = document.getElementById("play-audio");

    const attemptsLeft = document.getElementById("attempts-left");

    // Teclado virtual
    const keysContainer = document.getElementById("keys-container");
    const keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "š", "t", "u", "v", "x", "y", "z", "ž", "å", "ä"];
    
    keys.forEach(key => {
        const keyElement = document.createElement("div");
        keyElement.classList.add("key");
        keyElement.textContent = key;
        keyElement.addEventListener("click", () => {
            const activeInput = document.activeElement;
            if (activeInput.tagName === "INPUT") {
                activeInput.value += key;
            }
        });
        keysContainer.appendChild(keyElement);
    });

    // Set a random word for translation
    let currentIndex = Math.floor(Math.random() * spanishWords.length);
    spanishWordElement.textContent = spanishWords[currentIndex];

    // Translation game logic
    translationSubmit.addEventListener("click", () => {
        if (translationInput.value.toLowerCase() === finlandWords[currentIndex]) {
            translationFeedback.textContent = "¡Correcto!";
            translationFeedback.style.color = "green";
        } else {
            translationFeedback.textContent = "Incorrecto. Intenta de nuevo.";
            translationFeedback.style.color = "red";
            attempts--;
            updateAttempts();
        }
    });

    // Dictation game logic
    dictationSubmit.addEventListener("click", () => {
        if (dictationInput.value.toLowerCase() === finlandWords[currentIndex]) {
            dictationFeedback.textContent = "¡Correcto!";
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
        const utterance = new SpeechSynthesisUtterance(spanishWords[currentIndex]);
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
        currentIndex = Math.floor(Math.random() * spanishWords.length);
        spanishWordElement.textContent = spanishWords[currentIndex];
        translationInput.value = "";
        translationFeedback.textContent = "";
        dictationInput.value = "";
        dictationFeedback.textContent = "";
        updateAttempts();
    }

    updateAttempts();
});
