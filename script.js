const KEY = "AIzaSyDMsEWb684y0FzptAJ8vT5HMxlahV2hWNg";
const URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

async function start() {
    const input = document.getElementById('userInput');
    const box = document.getElementById('box');
    const text = input.value;
    if(!text) return;

    box.innerHTML += `<div>YOU: ${text}</div>`;
    input.value = "";

    try {
        const response = await fetch(`${URL}?key=${KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: text }] }] })
        });

        const data = await response.json();
        const reply = data.candidates[0].content.parts[0].text;
        box.innerHTML += `<div style="color:white">SABRINA: ${reply}</div>`;
    } catch (e) {
        box.innerHTML += `<div style="color:red">ERROR: Check your API Key settings.</div>`;
    }
}
