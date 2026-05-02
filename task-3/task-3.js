// Завдання 3. Введення імені
// при наборі тексту в інпут — підставляємо значення у span

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  // прибираємо пробіли по краях
  const value = event.target.value.trim();

  // якщо порожньо — виводимо Anonymous
  if (value === "") {
    outputRef.textContent = "Anonymous";
  } else {
    outputRef.textContent = value;
  }
});
