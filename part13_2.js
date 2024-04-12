const text = document.getElementById("text");

const birthDate = document.querySelector("#messageDate");
function calculateDaysPassed() {
  // Получаем значение даты сообщения из input
  const birthDateStr = birthDate.value;
  console.log(birthDateStr);
  //Преобразуем дату ДР в формат даты со временем 0-0-0-0 (Thu Feb 29 2024 00:00:00 GMT+0400 (GMT+04:00))
  const birthDateObj = new Date(birthDateStr);
  birthDateObj.setHours(0, 0, 0, 0);
  console.log(birthDateObj);
  //Преобразуем текущую дату в формат даты со временем 0-0-0-0 (Wed Feb 21 2024 00:00:00 GMT+0400 (GMT+04:00))
  let currentDateObj = new Date();
  currentDateObj.setHours(0, 0, 0, 0);
  console.log(currentDateObj);
  //Вычисляем разницу между текущим днем и датой дня рождения Она получается в мс - (691200000)
  let difInDatesMs = birthDateObj.getTime() - currentDateObj.getTime();
  console.log(difInDatesMs);
  //Вычисляем разницу в днях
  let difInDatesDays = Math.floor(difInDatesMs / (1000 * 60 * 60 * 24));
  console.log(difInDatesDays);

  // Меняем форму слова "день" (день, дня, дней)
  let days = "";
  let daysString = String(difInDatesDays);
  let lastIndex = daysString[daysString.length - 1];
  if (lastIndex === 1) {
    days = "день";
  } else if (lastIndex === 2 || lastIndex === 3 || lastIndex === 4) {
    days = "дня";
  } else days = "дней";
  // Выбираем какое сообщение показать
  switch (true) {
    case birthDateStr === "":
      (text.innerText = `Введите дату своего дня рождения в этом году`),
        (text.style.color = "red");
      break;
    case difInDatesDays < 0:
      (text.innerText = `Ваш день рождения ${difInDatesDays} ${days} назад`),
        (text.style.color = "gray");
      break;
    case difInDatesDays === 0:
      (text.innerText = `Поздравляем с днем рождения!`),
        (text.style.color = "blue");
      break;
    default:
      (text.innerText = `До дня рождения: ${difInDatesDays} ${days}`),
        (text.style.color = "green");
  }
  // ИЛИ  else if
  // if (birthDateStr === "") {
  //   (text.innerText = `Введите дату своего дня рождения в этом году`),
  //     (text.style.color = "red");
  // } else if (difInDatesDays < 0) {
  //   (text.innerText = `Ваш день рождения ${difInDatesDays} ${days} назад`),
  //     (text.style.color = "gray");
  // } else if (difInDatesDays == 0) {
  //   (text.innerText = `Поздравляем с днем рождения!`),
  //     (text.style.color = "blue");
  // } else
  //   (text.innerText = `До дня рождения: ${difInDatesDays} ${days}`),
  //     (text.style.color = "green");
}
