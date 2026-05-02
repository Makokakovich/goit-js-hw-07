// Завдання 5. Зміна кольору фону

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonRef = document.querySelector(".change-color");
const colorOutputRef = document.querySelector(".color");

buttonRef.addEventListener("click", () => {
  // отримуємо випадковий колір
  const color = getRandomHexColor();

  // зафарбовуємо фон і виводимо колір на сторінку
  document.body.style.backgroundColor = color;
  colorOutputRef.textContent = color;
});
