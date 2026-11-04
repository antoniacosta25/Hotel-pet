document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form-reserva");

    if (!formulario) {
        console.error("Formulário de reserva não encontrado.");
        return;
    }

    const parametros = new URLSearchParams(window.location.search);

    const campos = {
        pet: document.getElementById("pet"),
        cliente: document.getElementById("cliente"),
        checkin: document.getElementById("checkin"),
        checkout: document.getElementById("checkout"),
        status: document.getElementById("status"),
        valor: document.getElementById("valor"),
        obs: document.getElementById("obs")
    };

    // Carregar dados enviados pela página de reservas
    Object.keys(campos).forEach(function (nome) {
        const campo = campos[nome];
        const valor = parametros.get(nome);

        if (campo && valor !== null) {
            campo.value = valor;
        }
    });

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const titulo = document.querySelector(".page-title");
        const identificador =
            parametros.get("id") ||
            (titulo && titulo.textContent.match(/#(\d+)/)?.[1]) ||
            "1";

        const reservaAtualizada = {
            id: identificador,
            pet: campos.pet.value,
            cliente: campos.cliente.value,
            checkin: campos.checkin.value,
            checkout: campos.checkout.value,
            status: campos.status.value,
            valor: campos.valor.value,
            obs: campos.obs.value
        };

        localStorage.setItem(
            "hotelReserva_edicao_" + identificador,
            JSON.stringify(reservaAtualizada)
        );

        alert("Reserva atualizada com sucesso!");

        window.location.href = "reservas.html";
    });
});
