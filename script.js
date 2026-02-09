const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const ytMusic = document.getElementById("yt-music");

let love = 0;
const loveFill = document.getElementById("love-fill");

const startScreen = document.getElementById("start-screen");
const proposalScreen = document.getElementById("proposal-screen");
const celebrationScreen = document.getElementById("celebration-screen");

document.getElementById("start-btn").onclick = () => {
    // 🎵 Ed Sheeran - Perfect (official)
    ytMusic.src =
        "https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=1&loop=1&playlist=2Vv-BfVoq4g";

    startScreen.classList.add("hidden");
    startGame();
};

document.getElementById("yes-btn").onclick = () => {
    proposalScreen.classList.add("hidden");
    celebrationScreen.classList.remove("hidden");
};

document.getElementById("no-btn").onclick = () => {
    ytMusic.src = ""; // stop music
    alert("It's okay 💗 Thank you for playing.");
};

function startGame() {
    const interval = setInterval(() => {
        love += 10;
        loveFill.style.width = love + "%";

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "40px serif";
        ctx.fillText("❤️", Math.random() * canvas.width, Math.random() * canvas.height);

        if (love >= 100) {
            clearInterval(interval);
            proposalScreen.classList.remove("hidden");
        }
    }, 500);
}

