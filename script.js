const glorps = ["Glorp Azul", "Glorp Dourado", "Mega Glorp", "Glorp Sombrio", "Glorp Arco-íris"];

document.getElementById('abrirCaixa').addEventListener('click', function() {
  const premio = glorps[Math.floor(Math.random() * glorps.length)];
  const item = document.createElement('div');
  item.className = 'item';
  item.textContent = premio;
  document.getElementById('inventario').appendChild(item);
});
