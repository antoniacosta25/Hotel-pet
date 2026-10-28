document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");
    const botaoPesquisar = document.querySelector(
        'button[type="submit"], input[type="submit"]'
    );
    const botaoLimpar = document.querySelector(
        'button[type="reset"], input[type="reset"]'
    );

    const tabela = document.querySelector("tbody");

    if (!tabela) {
        console.error("Tabela de reservas não encontrada.");
        return;
    }

    const linhasOriginais = Array.from(tabela.querySelectorAll("tr"));

    function pesquisarReservas(event) {
        if (event) event.preventDefault();

        const campos = Array.from(
            document.querySelectorAll("input, select")
        );

        const filtros = campos
            .map(campo => ({
                valor: campo.value.trim().toLowerCase(),
                tipo: campo.type,
                placeholder: (campo.placeholder || "").toLowerCase(),
                nome: (campo.name || "").toLowerCase(),
                id: (campo.id || "").toLowerCase()
            }))
            .filter(filtro => filtro.valor !== "");

        linhasOriginais.forEach(linha => {
            const texto = linha.innerText.toLowerCase();

            const corresponde = filtros.every(filtro => {
                if (filtro.tipo === "date") {
                    const data = filtro.valor.split("-").reverse().join("/");
                    return texto.includes(data);
                }

                return texto.includes(filtro.valor);
            });

            linha.hidden = !corresponde;
        });
    }

    function limparPesquisa(event) {
        if (event) event.preventDefault();

        document.querySelectorAll("input, select").forEach(campo => {
            if (campo.type === "submit" || campo.type === "reset" ||
                campo.type === "button") return;

            campo.value = "";
        });

        linhasOriginais.forEach(linha => {
            linha.hidden = false;
        });
    }

    if (formulario) {
        formulario.addEventListener("submit", pesquisarReservas);
    }

    if (botaoPesquisar) {
        botaoPesquisar.addEventListener("click", pesquisarReservas);
    }

    if (botaoLimpar) {
        botaoLimpar.addEventListener("click", limparPesquisa);
    }

    document.querySelectorAll("button, input[type='button']").forEach(botao => {
        if (botao.innerText.trim().toLowerCase() === "pesquisar" ||
            botao.value.trim().toLowerCase() === "pesquisar") {
            botao.addEventListener("click", pesquisarReservas);
        }

        if (botao.innerText.trim().toLowerCase() === "limpar" ||
            botao.value.trim().toLowerCase() === "limpar") {
            botao.addEventListener("click", limparPesquisa);
        }
    });
});
