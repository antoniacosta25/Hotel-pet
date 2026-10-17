// Lê, valida e apresenta as preferências do hotel neste navegador.
(() => {
  const storageKey = "hotelPet.settings";
  const defaultSettings = { dailyRate: 50, largePetRate: 50, capacity: 30 };
  const occupiedPets = 2;

  function readSettings() {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey));
      // Atualiza somente os valores iniciais antigos; mantém ajustes personalizados.
      if (stored && Number(stored.dailyRate) === 35 && Number(stored.largePetRate) === 45 && Number(stored.capacity) === 20) {
        localStorage.setItem(storageKey, JSON.stringify(defaultSettings));
        return { ...defaultSettings };
      }
      return { ...defaultSettings, ...(stored || {}) };
    } catch {
      return { ...defaultSettings };
    }
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  }

  function updatePage(settings) {
    document.querySelectorAll("[data-daily-rate]").forEach((element) => {
      element.textContent = formatCurrency(settings.dailyRate);
    });
    document.querySelectorAll("[data-large-pet-rate]").forEach((element) => {
      element.textContent = formatCurrency(settings.largePetRate);
    });
    document.querySelectorAll("[data-hotel-capacity]").forEach((element) => {
      element.textContent = `${occupiedPets} / ${settings.capacity}`;
    });

    const dailyRateInput = document.querySelector("#diaria");
    const largePetRateInput = document.querySelector("#diaria-extra");
    const capacityInput = document.querySelector("#vagas");
    const capacityLabel = document.querySelector("[data-capacity-label]");
    const capacityFill = document.querySelector("[data-capacity-fill]");
    const progressBar = capacityFill?.parentElement;
    if (dailyRateInput) dailyRateInput.value = settings.dailyRate.toFixed(2);
    if (largePetRateInput) largePetRateInput.value = settings.largePetRate.toFixed(2);
    if (capacityInput) capacityInput.value = settings.capacity;
    if (capacityLabel && capacityFill && progressBar) {
      const percentage = Math.round((occupiedPets / settings.capacity) * 100);
      capacityLabel.textContent = `${occupiedPets} de ${settings.capacity} vagas ocupadas; ${settings.capacity - occupiedPets} disponíveis (${percentage}%).`;
      capacityFill.style.width = `${percentage}%`;
      progressBar.setAttribute("aria-valuemax", String(settings.capacity));
      progressBar.setAttribute("aria-valuenow", String(occupiedPets));
    }
  }

  let settings = readSettings();
  updatePage(settings);

  const form = document.querySelector("#hotel-settings-form");
  if (!form) return;

  const dailyRateInput = document.querySelector("#diaria");
  const largePetRateInput = document.querySelector("#diaria-extra");
  const capacityInput = document.querySelector("#vagas");
  const feedback = document.querySelector("#settings-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newSettings = {
      dailyRate: Number(dailyRateInput.value),
      largePetRate: Number(largePetRateInput.value),
      capacity: Number(capacityInput.value)
    };

    if (!Number.isFinite(newSettings.dailyRate) || newSettings.dailyRate < 0 ||
        !Number.isFinite(newSettings.largePetRate) || newSettings.largePetRate < 0 ||
        !Number.isInteger(newSettings.capacity) || newSettings.capacity < occupiedPets ||
        newSettings.capacity > 100) {
      feedback.textContent = "Confira os valores. A capacidade deve ser de 2 a 100 vagas.";
      feedback.dataset.state = "error";
      return;
    }

    try {
      localStorage.setItem(storageKey, JSON.stringify(newSettings));
      settings = newSettings;
      updatePage(settings);
      feedback.textContent = "Configurações salvas neste navegador.";
      feedback.dataset.state = "success";
    } catch {
      feedback.textContent = "O navegador bloqueou o armazenamento local. As alterações não foram salvas.";
      feedback.dataset.state = "error";
    }
  });
})();

