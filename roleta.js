// Carregar os sons
const somAbrirSite = new Audio('sound_ui_csgo_ui_crate_display.wav');
const somCaixaAberta = new Audio('sound_ui_csgo_ui_crate_open.wav');
const somRotacaoRoleta = new Audio('sound_ui_csgo_ui_crate_item_scroll.wav');

// Tocar o som quando o site é carregado
window.onload = function() {
  somAbrirSite.play();
};

const memes = [
  // Seu array de memes aqui...
];

const canvas = document.getElementById('roleta');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spin-btn');
const memeImg = document.getElementById('meme-img');
const memeNome = document.getElementById('meme-nome');

const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"];

let startAngle = 0;
let spinAngle = 0;
let spinning = false;

function drawRoleta() {
    const arcSize = 2 * Math.PI / memes.length;

    for (let i = 0; i < memes.length; i++) {
        const angle = startAngle + i * arcSize;
        
        ctx.beginPath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.moveTo(250, 250);
        ctx.arc(250, 250, 200, angle, angle + arcSize);
        ctx.lineTo(250, 250);
        ctx.fill();

        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(angle + arcSize / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "black";
        ctx.font = "16px Arial";
        ctx.fillText(memes[i].nome, 190, 10);
        ctx.restore();
    }
}

function tocarSomRotacao() {
    if (somRotacaoRoleta.paused) {
        somRotacaoRoleta.currentTime = 0;
        somRotacaoRoleta.play();
    }
}

function rotateRoleta() {
    if (spinning) return;
    spinning = true;

    // Tocar o som de "caixa aberta"
    somCaixaAberta.play();

    let spinTimeTotal = Math.random() * 3000 + 4000;
    let spinTime = 0;
    const arcSize = 2 * Math.PI / memes.length;

    function rotate() {
        spinTime += 30;
        if (spinTime >= spinTimeTotal) {
            stopRotate();
            return;
        }
        const spinAngleDelta = (Math.random() * 10 + 10) * Math.PI / 180;
        startAngle += spinAngleDelta;
        draw();
        tocarSomRotacao(); // Tocar o som da roleta enquanto gira
        setTimeout(rotate, 30);
    }

    function stopRotate() {
        const degrees = startAngle * 180 / Math.PI + 90;
        const arcd = arcSize * 180 / Math.PI;
        const index = Math.floor((360 - degrees % 360) / arcd) % memes.length;

        memeImg.src = memes[index].imagem;
        memeNome.innerText = memes[index].nome;
        spinning = false;

        // Parar o som da roleta
        somRotacaoRoleta.pause();
        somRotacaoRoleta.currentTime = 0;
    }

    rotate();
}

function draw() {
    ctx.clearRect(0, 0, 500, 500);
    drawRoleta();
}

draw();

spinBtn.addEventListener('click', rotateRoleta);
