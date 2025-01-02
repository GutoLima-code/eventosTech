function pesquisar() {
  // Comentário: Linha usada para depuração, pode ser removida.
  let section = document.getElementById("resultados-pesquisa"); // Obtém a seção HTML onde os resultados serão exibidos.

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // se campopesquisa for uma string sem nada
  if (campoPesquisa == "") {
    section.innerHTML =
      "<p>Nada foi encontrado. Vôce precisa digitar o nome de um evento tech</p>";
    return;
  }
  campoPesquisa = campoPesquisa.toLowerCase();
  // Inicializa uma string vazia para armazenar os resultados HTML.
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";
  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLocaleLowerCase();
    // Se titulo includes campoPesquisa
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Cria um novo elemento
      resultados += `
    <div class="item-resultado">
        <h2>
            <a href="https://rio.websummit.com/" target="_blank" targuet="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link}"https://www.linkedin.com/company/web-summit/" target="_blank">Istagram web summit</a>
    </div>
`;
    }
  }
  if (!resultados) {
    resultados = "<p>Nada foi encontrado.</p>";
  }

  // Atualiza o conteúdo da seção HTML com os resultados construídos.
  section.innerHTML = resultados;
}
