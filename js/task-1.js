// Завдання 1. Категорії
// рахуємо кількість категорій і виводимо назви та кількість елементів у кожній

const categories = document.querySelectorAll("#categories > .item");

console.log(`Number of categories: ${categories.length}`);

// проходимо по кожній категорії та виводимо інформацію
categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul > li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});
