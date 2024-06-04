const emojis = ["🔥", "🍒", "💀"];
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    let i = 0;
    const interval = setInterval(() => {
        if (i < 10) {
            slot1.textContent = randomEmoji();
            slot2.textContent = randomEmoji();
            slot3.textContent = randomEmoji();
        } else if (i < 20) {
            slot2.textContent = randomEmoji();
            slot3.textContent = randomEmoji();
        } else if (i < 30) {
            slot3.textContent = randomEmoji();
        } else {
            clearInterval(interval);
        }
        i++;
    }, 100);
});

function randomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}
