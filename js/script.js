// Sekcja zegarka w Header
const headerTime = () => {
  const now = new Date();
  const timeString = document.querySelector(".js-timeString");
  timeString.innerText = now.toLocaleString("nl", {
    dateStyle: "full",
    timeStyle: "medium",
  });
};

// Tablica zadań
const tasks = [];

// Funkcja obliczająca czas
const formatTime = (seconds) => {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${days} days ${hours} hours ${minutes} minutes ${remainingSeconds} seconds`;
};
//koniec///

// Funkcja obliczająca i wyświetlająca czas dla zadań
const timeCalculation = () => {
  tasks.forEach(({ timeOut }) => {
    const currentTime = new Date();
    console.log(currentTime.toLocaleString());
    const endTime = new Date(timeOut);
    console.log(endTime.toLocaleString());

    const timer = Math.floor((endTime - currentTime) / 1000);
    const formatedTime = formatTime(timer);
    // (formatedTime.toLocaleString());
    const calculateResult = document.querySelector(".calculateResult");
    calculateResult.innerText = formatedTime.toLocaleString();
  });
};

// Funkcja dodająca nowe zadanie, daty i counter do tablicy
const addNewTask = (newTaskProduct, dateInput, timeLeft) => {
  tasks.push({
    content: newTaskProduct,
    timeIn: dateInput,
    timeOut: timeLeft,
  });
  timeCalculation();
  render();
};

// Funkcja czyszcząca input po dodaniu zadania
const clearInput = () => {
  const newTask = document.querySelector(".js-newTask");
  newTask.value = "";
  newTask.focus();
};

// Funkcja renderująca zadania, daty i counter do tablicy
const render = (formatedTime) => {
  let htmlString = "";
  tasks.forEach((task) => {
    htmlString += `
        <li class="list__item">${task.content}</li> 
        <span class="list__item--exDate">
          <label>Date in:</label>
          <input value="${task.timeIn}" class="form__input js-formImput" name="expier date" readonly>
        </span> 
        <span>
          <label>Date out:</label>
          <input value="${task.timeOut} " class="form__input" name="time" readonly>
        </span>
        <span>${formatedTime}</span>
      `;
  });
  const tasksContainer = document.querySelector(".js-tasks");
  tasksContainer.innerHTML = htmlString;
};

// Obsługa formularza
const onFormSubmit = (event) => {
  event.preventDefault();

  const dateInput = document.querySelector(".js-dateInput").value;
  const timeLeft = document.querySelector(".js-timeLeft").value;
  const newTaskProduct = document.querySelector(".js-addProducts").value;

  if (!newTaskProduct) {
    return;
  }

  addNewTask(newTaskProduct, dateInput, timeLeft);
  clearInput();
};

// Inicjalizacja aplikacji
const init = () => {
  headerTime();
  render();
  setInterval(headerTime, 1000);

  const form = document.querySelector(".js-form");
  form.addEventListener("submit", onFormSubmit);
};

init();
///////////////////////
// poprawka do wyswietlania osobno kodu dla kazdej daty
// const tasks = [];

// // ...

// const timeCalculation = () => {
//   tasks.forEach((task) => {
//     const currentTime = new Date(); // Aktualny czas
//     const endTime = new Date(task.timeOut);
//     const { days, hours, minutes, seconds } = calculateTime(currentTime, endTime);

//     // Aktualizacja pola currentTime dla danego zadania
//     task.currentTime = currentTime;

//     const calculatedTime = `D: ${days}, H: ${hours}, m: ${minutes}, s: ${seconds}`;
//     const calculateResult = document.querySelector(".calculateResult");
//     calculateResult.innerText = calculatedTime;

//     // Przekazanie odliczanego czasu do funkcji renderującej
//     render();
//   });
// };

// // ...

// const render = () => {
//   let htmlString = "";
//   tasks.forEach((task) => {
//     const { content, timeIn, timeOut, currentTime } = task;
//     const { days, hours, minutes, seconds } = calculateTime(currentTime, new Date(timeOut));

//     htmlString += `
//       <li class="list__item">${content}</li>
//       <span class="list__item--exDate">
//         <label>Date in:</label>
//         <input value="${timeIn}" class="form__input js-formImput" name="expier date" readonly>
//       </span>
//       <span>
//         <label>Date out:</label>
//         <input value="${timeOut}" class="form__input" name="time" readonly>
//       </span>
//       <span class="list__item--countdown">
//         <label>Countdown:</label>
//         <span>D: ${days}, H: ${hours}, m: ${minutes}, s: ${seconds}</span>
//       </span>
//     `;
//   });

//   const tasksContainer = document.querySelector(".js-tasks");
//   tasksContainer.innerHTML = htmlString;
// };

// // ...

// const addNewTask = (newTaskProduct, dateInput, timeLeft) => {
//   tasks.push({
//     content: newTaskProduct,
//     timeIn: dateInput,
//     timeOut: timeLeft,
//     currentTime: null, // Pole przechowujące aktualny czas dla danego zadania
//   });
//   setInterval(timeCalculation, 1000);
//   render();
// };
