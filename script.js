document.querySelectorAll('.fato-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});


const botoesTimeline = document.querySelectorAll('.timeline-bot');
const conteudoTimeline = document.getElementById('conteudoTimeline');

const conteudos = {
  antes: 'No passado, o campo era isolado e dependia de práticas manuais. A cidade crescia separada, muitas vezes sem conexão direta com o meio rural.',
  agora: 'Hoje, o campo e a cidade estão cada vez mais conectados. A tecnologia aproxima os dois ambientes, tornando possível a colaboração e o desenvolvimento conjunto.',
  futuro: 'No futuro, espera-se que essa conexão seja ainda mais forte, com sustentabilidade, inovação e respeito mútuo entre os modos de vida urbano e rural.'
};

botoesTimeline.forEach(botao => {
  botao.addEventListener('click', () => {
  
    botoesTimeline.forEach(btn => btn.classList.remove('active'));

    botao.classList.add('active');

    const periodo = botao.getAttribute('data-period');

    conteudoTimeline.textContent = conteudos[periodo];
  });
});


const botaoOpiniao = document.getElementById('enviarOpiniao');
const campoOpiniao = document.getElementById('opiniaoUsuario');
const respostas = document.getElementById('respostasOpiniao');

botaoOpiniao.addEventListener('click', () => {
  const texto = campoOpiniao.value.trim();

  if (texto !== '') {
    const novaResposta = document.createElement('p');
    novaResposta.textContent = texto;
    respostas.appendChild(novaResposta);
    campoOpiniao.value = '';
  }
});


