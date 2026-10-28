document.addEventListener("DOMContentLoaded", function () {
    const pesquisar = document.getElementById("btn-pesquisar");
    const limpar = document.getElementById("btn-limpar");
    const tabela = document.querySelector(".data-table tbody");
    if (!pesquisar || !limpar || !tabela) {
        console.error("Botões ou tabela de reservas não encontrados.");
        return;
    }
    const linhas = Array.from(tabela.querySelectorAll("tr"));
    pesquisar.addEventListener("click", function (event) {
        event.preventDefault();
        const filtros = {
            id: document.getElementById("f-id")?.value.trim().toLowerCase() || "",
            cliente: document.getElementById("f-cliente")?.value.trim().toLowerCase() || "",
            pet: document.getElementById("f-pet")?.value.trim().toLowerCase() || "",
            status: document.getElementById("f-status")?.value.trim().toLowerCase() || "",
            entrada: document.getElementById("f-entrada")?.value || "",
            saida: document.getElementById("f-saida")?.value || ""
        };
        function normalizarData(data) {
            if (!data) return "";
            const partes = data.split("/");
            if (partes.length !== 3) return data;
          return partes[2] + "-" + partes[1].padStart(2, "0") + "-" + partes[0].padStart(2, "0");
        }
        linhas.forEach(function (linha) {
            const colunas = linha.querySelectorAll("td");
            if (colunas.length < 7) return;
            const id = colunas[0].innerText.replace("#", "").trim().toLowerCase();
            const pet = colunas[1].innerText.trim().toLowerCase();
            const cliente = colunas[2].innerText.trim().toLowerCase();
            const entrada = normalizarData(colunas[3].innerText.trim());
            const saida = normalizarData(colunas[4].innerText.trim());
            const status = colunas[6].innerText.trim().toLowerCase();
            const corresponde =
                (!filtros.id || id.includes(filtros.id)) &&
                (!filtros.cliente || cliente.includes(filtros.cliente)) &&
                (!filtros.pet || pet.includes(filtros.pet)) &&
                (!filtros.status || filtros.status === "todos" || status.includes(filtros.status)) &&
                (!filtros.entrada || entrada === filtros.entrada) &&
                (!filtros.saida || saida === filtros.saida);
            linha.hidden = !corresponde;
        });
    });
    limpar.addEventListener("click", function (event) {
        event.preventDefault();

        document.querySelectorAll(
            "#f-id, #f-cliente, #f-pet, #f-status, #f-entrada, #f-saida"
        ).forEach(function (campo) {
            if (campo) campo.value = "";
        });
        linhas.forEach(function (linha) {
            linha.hidden = false;
        });
    });
});
});
