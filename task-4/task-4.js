// Завдання 4. Управління формою логіна

const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
  // забороняємо перезавантаження сторінки
  event.preventDefault();

  // дістаємо поля через elements
  const { email, password } = event.currentTarget.elements;

  // перевіряємо чи всі поля заповнені
  if (email.value === "" || password.value === "") {
    alert("All form fields must be filled in");
    return;
  }

  // збираємо обʼєкт з даними
  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(formData);

  // очищуємо форму
  event.currentTarget.reset();
});
