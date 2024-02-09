// Obtendo referências para elementos
const modeIcon = document.getElementById("mode_icon");
const form = document.getElementById("form");

// Adicionando listeners de eventos
modeIcon.addEventListener("click", toggleTheme);
form.addEventListener("submit", calculateBMI);

// Função para alternar entre os temas claro e escuro
function toggleTheme() {
  const isDark = modeIcon.classList.contains("fa-moon");

  modeIcon.classList.toggle("fa-moon", !isDark);
  modeIcon.classList.toggle("fa-sun", isDark);
  document.body.classList.toggle("dark-theme", isDark);
}

// Função para calcular o IMC e exibir o resultado
function calculateBMI(event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const bmi = (weight / (height * height)).toFixed(2);

  const resultElement = document.getElementById("result");
  const valueElement = document.getElementById("value");
  const descriptionElement = document.getElementById("value_desc");

  resultElement.classList.remove("hidden");

  let description = "";
  if (bmi < 18.5) {
    description = "Abaixo do peso!";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    description = "Peso normal!";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    description = "Acima do peso!";
  } else if (bmi >= 30.0 && bmi <= 34.9) {
    description = "Obesidade Grau I (moderada)!";
  } else if (bmi >= 35.0 && bmi <= 39.9) {
    description = "Obesidade Grau II (severa)!";
  } else {
    description = "Obesidade Grau III (mórbida)!";
  }

  valueElement.textContent = bmi.replace(".", ",");
  descriptionElement.textContent = description;
}
