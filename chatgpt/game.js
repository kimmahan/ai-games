document.addEventListener("DOMContentLoaded", function () {
    const terminal = document.getElementById("terminal");
    const inputField = document.getElementById("command-input");
    const outputArea = document.getElementById("output");
    
    const responses = {
        "help": "Available commands: help, start, listen, decrypt, exit",
        "start": "You hear a faint whisper: 'Is someone there?' (Try 'listen')",
        "listen": "The whisper grows louder: 'They left me here... alone... decrypt 42...'.",
        "decrypt 42": "A hidden message appears: 'Dr. Elara's last log... They sealed the void, but it's still listening...'.",
        "exit": "The screen flickers... You feel like you are being watched... Game Over."
    };
    
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const command = inputField.value.trim().toLowerCase();
            inputField.value = "";
            
            let response = responses[command] || "Unknown command. Try 'help'.";
            outputArea.innerHTML += `> ${command}<br>${response}<br><br>`;
            terminal.scrollTop = terminal.scrollHeight;
        }
    });
});
