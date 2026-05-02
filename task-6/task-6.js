// Завдання 6. Створення і очищення колекції елементів

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

// створює колекцію з amount різнокольорових квадратів
function createBoxes(amount) {
  // спочатку очищуємо старі квадрати
  boxesRef.innerHTML = "";

  // початковий розмір
  let size = 30;
  let markup = "";

  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    markup += `<div style="width:${size}px; height:${size}px; background:${color};"></div>`;
    // кожен наступний на 10px ширше і вище
    size += 10;
  }

  boxesRef.insertAdjacentHTML("beforeend", markup);
}

// очищує всі квадрати
function destroyBoxes() {
  boxesRef.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = Number(inputRef.value);

  // валідуємо число — має бути від 1 до 100 включно
  if (amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);
  inputRef.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);
