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
    // remover 'active' de todos os botões
    botoesTimeline.forEach(btn => btn.classList.remove('active'));

    // adicionar 'active' só no botão clicado
    botao.classList.add('active');

    // pegar o período do botão clicado
    const periodo = botao.getAttribute('data-period');

    // atualizar o conteúdo
    conteudoTimeline.textContent = conteudos[periodo];
  });
});