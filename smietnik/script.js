// {
//   //sekcja zegarka w Header//

//   const headerTime = () => {
//     const now = new Date();
//     const timeString = document.querySelector(".js-timeString");
//     timeString.innerText = now.toLocaleString("nl", {
//       dateStyle: "full",
//       timeStyle: "medium",
//     });
//   };

//   //koniec sekcji//

//   //tablica zadan//

//   const tasks = [];

//   //koniec tablicy//

//   // //funkcja iterujaca po tablicy//
//   // const timeCalculation = () => {
//   //   tasks.forEach(({ timeIn, timeOut }) => {
//   //     const currentTime = new Date(timeIn);
//   //     const endTime = new Date(timeOut);
//   //     counter(currentTime, endTime);
//   //   });
//   // };
//   //funkcja iterująca po tablicy//
//   const timeCalculation = () => {
//     tasks.forEach(({ timeIn, timeOut }) => {
//       const currentTime = new Date(timeIn);
//       const endTime = new Date(timeOut);
//       const { days, hours, minutes, seconds } = counter(currentTime, endTime);
//       const calculatedTime = `D: ${days}, H: ${hours}, m: ${minutes}, s: ${seconds}`;
//       const calculateResult = document.querySelector(".calculateResult");
//       calculateResult.innerText = calculatedTime;
//       console.log(calculatedTime);
//     });
//   };
//   //koniec//
//   //koniec//

//   //counter//

//   // const counter = (currentTime, endTime) => {
//   //   let timeLeft = endTime - currentTime;
//   // seconds = Math.abs(currentTime - endTime) / 1000;
//   // minutes = parseInt(seconds / 60);
//   // hours = parseInt(minutes / 60);
//   // days = parseInt(hours / 24);
//   // years = parseInt(days / 365);

//   // seconds = parseInt(seconds - minutes * 60);
//   // minutes = parseInt(minutes - hours * 60);
//   // hours = parseInt(hours - days * 24);
//   // days = parseInt(days - years * 365);

//   //   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//   //   timeLeft -= days * 1000 * 60 * 60 * 24;

//   //   const hours = Math.floor(timeLeft / (1000 * 60 * 60));
//   //   timeLeft -= hours * 1000 * 60 * 60;

//   //   const minutes = Math.floor(timeLeft / (1000 * 60));
//   //   timeLeft -= minutes * 1000 * 60;

//   //   const seconds = Math.floor(timeLeft / 1000);

//   //   calculatedTime = `D:  ${days}, H:  ${hours}, m: ${minutes} , s: ${seconds} `;
//   //   const calculateResult = document.querySelector(".calculateResult");
//   //   calculateResult.innerText = calculatedTime;

//   //   console.log(calculatedTime);
//   // };
//   // //counter//
//   // const counter = (currentTime, endTime) => {
//   //   let diff = Math.abs(endTime - currentTime) / 1000;
//   //   const seconds = Math.floor(diff / 60);
//   //   diff = Math.floor(diff / 60);
//   //   const minutes = Math.floor(diff / 60);
//   //   diff = Math.floor(diff / 60);
//   //   const hours = Math.floor(diff / 24);
//   //   diff = Math.floor(diff / 24);
//   //   const days = diff;
//   //   return { days, hours, minutes, seconds };
//   // };
//   // //koniec//
//   // counter
//   const counter = (currentTime, endTime) => {
//     let diff = Math.abs(endTime - currentTime) / 1000;

//     const days = Math.floor(diff / (24 * 60 * 60));
//     diff -= days * 24 * 60 * 60;

//     const hours = Math.floor(diff / (60 * 60));
//     diff -= hours * 60 * 60;

//     const minutes = Math.floor(diff / 60);
//     diff -= minutes * 60;

//     const seconds = Math.floor(diff);

//     return { days, hours, minutes, seconds };
//   };
//   //koniec//

//   //funkcja dodajaca zadanie,daty i counter do tablicy//

//   const addNewTask = (newTaskProduct, dateInput, timeLeft) => {
//     tasks.push({
//       content: newTaskProduct,
//       timeIn: dateInput,
//       timeOut: timeLeft,
//     });
//     setInterval(timeCalculation, 1000);
//     render();
//   };

//   console.log(tasks);
//   //koniec//

//   //funkcja czyszczaca inputa po dodaniu zadania//

//   const clear = () => {
//     newTask = document.querySelector(".js-newTask");
//     newTask.value = "";
//     newTask.focus();
//   };

//   //koniec//

//   //funkcja renderujaca zadanie,daty i counter do tablicy//

//   const render = () => {
//     let htmlString = "";

//     for (const task of tasks) {
//       htmlString += `

//       <li class="list__item">${task.content} </li>
//       <span class="list__item--exDate">
//       <label>Date in:</label>
//       <input value=${task.timeIn} class="form__input js-formImput" name="expier date" readonly>
//      </span>
//      <span>
//        <label>Date out:</label>
//       <input value=${task.timeOut} class="form__input " name="time" readonly>
//      </span>
//       `;
//     }
//     document.querySelector(".js-tasks").innerHTML = htmlString;
//   };

//   //koniec//

//   const onFormSubmit = (event) => {
//     event.preventDefault();

//     const dateInput = document.querySelector(".js-dateInput").value;

//     const timeLeft = document.querySelector(".js-timeLeft").value;

//     const newTaskProducts = document.querySelector(".js-addProducts").value;

//     //wywolanie funkcji dodajacej dane do tablicy po spelnieniu warunku//

//     console.log(newTaskProducts);
//     if (newTaskProducts === "") {
//       return;
//     }
//     addNewTask(newTaskProducts, timeLeft, dateInput);

//     // timeCalculation();

//     //koniec//

//     // wywolanie funkcji czyszczacej inputa//

//     clear();

//     //koniec//
//   };

//   const init = () => {
//     headerTime();
//     render();
//     const form = document.querySelector(".js-form");
//     form.addEventListener("submit", onFormSubmit);
//     setInterval(headerTime, 1000);
//   };
//   init();
// }
// Sekcja zegarka w Header
// const headerTime = () => {
//   const now = new Date();
//   const timeString = document.querySelector(".js-timeString");
//   timeString.innerText = now.toLocaleString("nl", {
//     dateStyle: "full",
//     timeStyle: "medium",
//   });
// };

// // Tablica zadań
// const tasks = [];

// // Funkcja obliczająca czas
// const calculateTime = (currentTime, endTime) => {
//   let diff = Math.abs(endTime - currentTime) / 1000;

//   const days = Math.floor(diff / (24 * 60 * 60));
//   diff -= days * 24 * 60 * 60;

//   const hours = Math.floor(diff / (60 * 60));
//   diff -= hours * 60 * 60;

//   const minutes = Math.floor(diff / 60);
//   diff -= minutes * 60;

//   const seconds = Math.floor(diff);

//   return { days, hours, minutes, seconds };
// };

// // Funkcja obliczająca i wyświetlająca czas dla zadań
// const timeCalculation = () => {
//   tasks.forEach(({ timeIn, timeOut }) => {
//     const currentTime = new Date();
//     const endTime = new Date(timeOut);
//     const { days, hours, minutes, seconds } = calculateTime(
//       currentTime,
//       endTime
//     );
//     const calculatedTime = `D: ${days}, H: ${hours}, m: ${minutes}, s: ${seconds}`;
//     const calculateResult = document.querySelector(".calculateResult");
//     calculateResult.innerText = calculatedTime;
//   });
// };

// // Funkcja dodająca nowe zadanie, daty i counter do tablicy
// const addNewTask = (newTaskProduct, dateInput, timeLeft) => {
//   tasks.push({
//     content: newTaskProduct,
//     timeIn: dateInput,
//     timeOut: timeLeft,
//   });
//   render();
// };

// // Funkcja czyszcząca input po dodaniu zadania
// const clearInput = () => {
//   const newTask = document.querySelector(".js-newTask");
//   newTask.value = "";
//   newTask.focus();
// };

// // Funkcja renderująca zadania, daty i counter do tablicy
// const render = () => {
//   let htmlString = "";
//   tasks.forEach((task) => {
//     htmlString += `
//       <li class="list__item">${task.content}</li>
//       <span class="list__item--exDate">
//         <label>Date in:</label>
//         <input value="${task.timeIn}" class="form__input js-formImput" name="expier date" readonly>
//       </span>
//       <span>
//         <label>Date out:</label>
//         <input value="${task.timeOut}" class="form__input" name="time" readonly>
//       </span>
//     `;
//   });
//   const tasksContainer = document.querySelector(".js-tasks");
//   tasksContainer.innerHTML = htmlString;
// };

// // Obsługa formularza
// const onFormSubmit = (event) => {
//   event.preventDefault();

//   const dateInput = document.querySelector(".js-dateInput").value;
//   const timeLeft = document.querySelector(".js-timeLeft").value;
//   const newTaskProduct = document.querySelector(".js-addProducts").value;

//   if (newTaskProduct === "") {
//     return;
//   }

//   addNewTask(newTaskProduct, dateInput, timeLeft);
//   clearInput();
// };

// // Inicjalizacja aplikacji
// const init = () => {
//   headerTime();
//   render();
//   setInterval(headerTime, 1000);
//   setInterval(timeCalculation, 1000);

//   const form = document.querySelector(".js-form");
//   form.addEventListener("submit", onFormSubmit);
// };

// init();
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
const calculateTime = (currentTime, endTime) => {
  let timeLeft = endTime - currentTime;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  timeLeft -= days * 1000 * 60 * 60 * 24;

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  timeLeft -= hours * 1000 * 60 * 60;

  const minutes = Math.floor(timeLeft / (1000 * 60));
  timeLeft -= minutes * 1000 * 60;

  const seconds = Math.floor(timeLeft / 1000);

  return { days, hours, minutes, seconds };
};

// Funkcja obliczająca i wyświetlająca czas dla zadań
const timeCalculation = () => {
  tasks.forEach(({ timeIn, timeOut }) => {
    const currentTime = new Date();
    const endTime = new Date(timeOut);
    const { days, hours, minutes, seconds } = calculateTime(
      currentTime,
      endTime
    );
    const calculatedTime = `D: ${days}, H: ${hours}, m: ${minutes}, s: ${seconds}`;
    const calculateResult = document.querySelector(".calculateResult");
    calculateResult.innerText = calculatedTime;
  });
};

// Funkcja dodająca nowe zadanie, daty i counter do tablicy
const addNewTask = (newTaskProduct, dateInput, timeLeft) => {
  tasks.push({
    content: newTaskProduct,
    timeIn: dateInput,
    timeOut: timeLeft,
  });
  render();
};

// Funkcja czyszcząca input po dodaniu zadania
const clearInput = () => {
  const newTask = document.querySelector(".js-newTask");
  newTask.value = "";
  newTask.focus();
};

// Funkcja renderująca zadania, daty i counter do tablicy
const render = () => {
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
        <input value="${task.timeOut}" class="form__input" name="time" readonly>
      </span>
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
  setInterval(timeCalculation, 1000);

  const form = document.querySelector(".js-form");
  form.addEventListener("submit", onFormSubmit);
};

init();
