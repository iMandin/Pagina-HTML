function resultado() {
  const esfericoesq = window.document.getElementById("esfericoesq").value;
  const esfericodir = window.document.getElementById("esfericodir").value;
  const cilinesq = window.document.getElementById("cilinesq").value;
  const cilindir = window.document.getElementById("cilindir").value;
  const resultadoTexto = window.document.getElementById("resultado");

  if (esfericoesq <= -3 && esfericoesq >= -12 && esfericodir <= -3 && esfericodir >= -12) { resultadoTexto.innerText = "A sua lente é Prime!"; }
  else if (esfericodir <= 0
      && esfericodir >= -15
      && esfericoesq <= 0
      && esfericoesq >= -15
      && cilinesq >= -5
      && cilindir >= -5
  ) {
      resultadoTexto.innerText = "A sua lente é Vision!"
  } else if (esfericoesq == ''
      || esfericoesq == ''
      || esfericodir == ''
      || esfericodir == '') {
      resultadoTexto.innerText = "Nenhuma condição foi atendida!"
  } else (
      resultadoTexto.innerText = "Nenhuma condição foi atendida!"
  )

  console.log(esfericoesq);
  console.log(esfericodir);
  console.log(cilinesq);
  console.log(cilindir);

}


/* Fundo*/

const ulSquares = document.querySelector('ul.squares');

for ( let i = 0; i < 13; i++ ) {
  const li = document.createElement('li');

  const random = (min, max) => Math.random() * (max - min) + min
  
  const size = Math.floor(random(10, 120));
  const position1 = random(68, 99);
  const position2 = random(1, 32);
  i == 0 ? delay = 1 : delay = random(5, 0.1);
  const duration = random(24, 12);
  let position = Number
  if (i % 2 == 0) {
    position = position1;
  } else {
    position = position2
    li.style.animationDirection = 'reverse';
  }

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  li.style.left = `${position}%`;
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier: ${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()}`;

  ulSquares.appendChild(li);
}

