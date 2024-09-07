function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value


    if (!campoPesquisa) {
        section.innerHTML = "<p>Insira o texto para pesquisa<p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
        // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
                
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes (campoPesquisa)){
            resultados += `
            <div class="item-resultado center-video">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
                <div class="video-container">
                ${dado.iframe}
                </div> 
            </div>
        `;
        }    
    }
    if (!resultados){
        resultados = "<p> Ainda não temos esse conteúdo na base de dados<p>";


    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}