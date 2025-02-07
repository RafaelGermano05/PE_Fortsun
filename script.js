const validUsers = [
    "rafael", "daniel", "aline", "dougllas", "tomaz", "sarah", 
    "linaldo", "kesse", "rozelia", "aldenir", "pedro", "gabriel", 
    "thiago", "thiago.correa", "guilherme"
];
const validPassword = "123456";

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");
    const iframeContainer = document.getElementById("iframe-container");
    const biIframe = document.getElementById("bi-iframe");

    if (validUsers.includes(username) && password === validPassword) {
        
        registerAccess(username);
        
        iframeContainer.style.display = "block";
        biIframe.src = "https://app.powerbi.com/view?r=eyJrIjoiYjcxNDgxYjQtNzJiZi00MTRiLTg4ZDMtODEyOTgxMzE1ZmE3IiwidCI6IjFiOGQ2YmQ5LTBhNDgtNDJhNy1iZTgyLTk3MTg5NDY1MDAzMCJ9"; // Substitua pelo link do seu relatório BI
        document.querySelector(".login-container").style.display = "none"; // Oculta o formulário de login
    } else {
        errorMessage.style.display = "block";
    }
}

function registerAccess(username) {
    const SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzr-Uo-w7_FqFHjHudg4Td0DPayvOAHFepYoehzqVUso0TLAY6HMTWX8PkEsgeS_8gkaA/exec"; // Substitua pela URL do seu Web App

    fetch(SHEET_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username,
            timestamp: new Date().toLocaleString()
        })
    })
    .then(response => response.json())
    .then(data => console.log("Acesso registrado:", data))
    .catch(error => console.error("Erro ao registrar acesso:", error));
}
// funciona porfavor