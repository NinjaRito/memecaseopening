const memes = [
  // 🔥 MEMES MUITO FAMOSOS (raridade alta)
  { nome: "Doge", imagem: "https://i.imgur.com/9z7K6kK.png", chance: 2 },
  { nome: "Trollface", imagem: "https://i.imgur.com/3gXJK5J.png", chance: 2 },
  { nome: "Shrek", imagem: "https://i.imgur.com/4YB4IYq.png", chance: 2 },
  { nome: "Pepe the Frog", imagem: "https://i.imgur.com/dg1hD1O.png", chance: 2 },
  { nome: "Distracted Boyfriend", imagem: "https://i.imgur.com/OQyBz3Z.png", chance: 2 },
  { nome: "Woman Yelling at a Cat", imagem: "https://i.imgur.com/Il2EQ8J.png", chance: 2 },
  { nome: "Surprised Pikachu", imagem: "https://i.imgur.com/4tOLu0T.png", chance: 2 },
  { nome: "This is Fine", imagem: "https://i.imgur.com/YbN1F7g.png", chance: 2 },
  { nome: "Among Us Drip", imagem: "https://i.imgur.com/2wT0f7B.png", chance: 2 },
  { nome: "Rickroll", imagem: "https://i.imgur.com/Fxq8U9n.png", chance: 2 },

  // 🤓 MEMES MÉDIOS
  { nome: "Cheems", imagem: "https://i.imgur.com/Wf9LkRb.png", chance: 5 },
  { nome: "Big Chungus", imagem: "https://i.imgur.com/fTCQbM8.png", chance: 5 },
  { nome: "Hide the Pain Harold", imagem: "https://i.imgur.com/rZn8CT3.png", chance: 5 },
  { nome: "Loss Meme", imagem: "https://i.imgur.com/CmBlW7G.png", chance: 5 },
  { nome: "Is This a Pigeon?", imagem: "https://i.imgur.com/9u6j5OK.png", chance: 5 },
  { nome: "Epic Handshake", imagem: "https://i.imgur.com/MRjS1I1.png", chance: 5 },
  { nome: "Chad Meme", imagem: "https://i.imgur.com/Uqx6EDR.png", chance: 5 },
  { nome: "Crying Wojak", imagem: "https://i.imgur.com/CYzErpO.png", chance: 5 },
  { nome: "Swole Doge vs Cheems", imagem: "https://i.imgur.com/VKFpAml.png", chance: 5 },
  { nome: "Galaxy Brain", imagem: "https://i.imgur.com/EeNpo4A.png", chance: 5 },
  { nome: "Gru's Plan", imagem: "https://i.imgur.com/FrtFQUQ.png", chance: 5 },
  { nome: "UNO Reverse Card", imagem: "https://i.imgur.com/oqXJbUE.png", chance: 5 },
  { nome: "Bernie Sanders Mittens", imagem: "https://i.imgur.com/l1T4uBN.png", chance: 5 },
  { nome: "Yoda Baby", imagem: "https://i.imgur.com/8lRRAEv.png", chance: 5 },
  { nome: "Thug Life", imagem: "https://i.imgur.com/bLmV9Sa.png", chance: 5 },

  // 🤡 MEMES MENOS FAMOSOS
  { nome: "Stonks", imagem: "https://i.imgur.com/7yWrrDd.png", chance: 10 },
  { nome: "Ok Boomer", imagem: "https://i.imgur.com/k9lqLhE.png", chance: 10 },
  { nome: "Monkey Puppet", imagem: "https://i.imgur.com/IZbDjDi.png", chance: 10 },
  { nome: "Math Lady", imagem: "https://i.imgur.com/Svjcb4e.png", chance: 10 },
  { nome: "Hotline Bling Drake", imagem: "https://i.imgur.com/zTO1vJf.png", chance: 10 },
  { nome: "Confused Mr. Krabs", imagem: "https://i.imgur.com/l3zWgCb.png", chance: 10 },
  { nome: "Arthur's Fist", imagem: "https://i.imgur.com/ckzkjOS.png", chance: 10 },
  { nome: "Mocking Spongebob", imagem: "https://i.imgur.com/Tk8KyAe.png", chance: 10 },
  { nome: "Spongebob Ight Imma Head Out", imagem: "https://i.imgur.com/Ve1D1yK.png", chance: 10 },
  { nome: "Sad Pablo Escobar", imagem: "https://i.imgur.com/1gPdoUN.png", chance: 10 },
  { nome: "Evil Kermit", imagem: "https://i.imgur.com/0U1vG89.png", chance: 10 },
  { nome: "Kevin Hart Looking Meme", imagem: "https://i.imgur.com/4x9ItYl.png", chance: 10 },
  { nome: "Sweating Jordan Peele", imagem: "https://i.imgur.com/Xmx0q9F.png", chance: 10 },
  { nome: "Expanding Brain", imagem: "https://i.imgur.com/oyDjVFL.png", chance: 10 },
  { nome: "They Had Us in the First Half", imagem: "https://i.imgur.com/3pTxFCp.png", chance: 10 },
  { nome: "Panik Kalem Panik", imagem: "https://i.imgur.com/4E2z9Uu.png", chance: 10 },
  { nome: "He Protec But He Also Attac", imagem: "https://i.imgur.com/Sb5JztA.png", chance: 10 },
  { nome: "You Were the Chosen One", imagem: "https://i.imgur.com/btS8RBx.png", chance: 10 },
  { nome: "Captain America So... You Got Detention", imagem: "https://i.imgur.com/62g3PQV.png", chance: 10 },
  { nome: "Change My Mind", imagem: "https://i.imgur.com/xX0p97p.png", chance: 10 },
  { nome: "Surprised Pikachu 2.0", imagem: "https://i.imgur.com/3IH8Q63.png", chance: 10 },
  { nome: "Nobody: Absolutely Nobody:", imagem: "https://i.imgur.com/7UsyFcK.png", chance: 10 },
  { nome: "You Don't Say", imagem: "https://i.imgur.com/DqvQFRJ.png", chance: 10 },
  { nome: "Shocked Black Guy", imagem: "https://i.imgur.com/tAZPAl1.png", chance: 10 },
  { nome: "GigaChad", imagem: "https://i.imgur.com/qgNtbKz.png", chance: 10 }
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

function rotateRoleta() {
    if (spinning) return;
    spinning = true;

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
        setTimeout(rotate, 30);
    }

    function stopRotate() {
        const degrees = startAngle * 180 / Math.PI + 90;
        const arcd = arcSize * 180 / Math.PI;
        const index = Math.floor((360 - degrees % 360) / arcd) % memes.length;

        memeImg.src = memes[index].imagem;
        memeNome.innerText = memes[index].nome;
        spinning = false;
    }

    rotate();
}

function draw() {
    ctx.clearRect(0, 0, 500, 500);
    drawRoleta();
}

draw();

spinBtn.addEventListener('click', rotateRoleta);
