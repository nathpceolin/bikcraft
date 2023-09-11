/**Faz com que a pagina atual fique com o sublinhado fixo no menu de links no header, sinalizando a pagina em que o user se encontra */
const links = document.querySelectorAll(".header-menu a");

function ativarLinkSelecionado(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLinkSelecionado);

/**Ativa itens do orcamento */
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.setAttribute("checked", "");
  }
}
parametros.forEach(ativarProduto);

/**Perguntas frequentes - abrir e fechar caixa de respostas conforme clicado */
const perguntas = document.querySelectorAll(".perguntas button");
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

/**Galeria de fotos das bicicletas */
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(evento) {
  const img = evento.currentTarget;
  galeriaContainer.prepend(img);
}

function eventosGaleria(imagem) {
  imagem.addEventListener("click", trocarImagem);
}
galeria.forEach(eventosGaleria);
