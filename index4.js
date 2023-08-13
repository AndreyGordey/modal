// Выборочные данные
const salesData = [
    { company: "Google", sales: 100 },
    { company: "Microsoft", sales: 200 },
    { company: "Tesla", sales: 150 },
    { company: "Ali ", sales: 300 },
  ];
  
  // Функция построения графика гистограммы
  function generateHistogram(data) {
    const chartContainer = document.getElementById("chartContainer");
  
    // Очистить предыдущий график
    chartContainer.innerHTML = "";
  
    // Перебор данных и создание столбцов
    data.forEach((item) => {
      const bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = item.sales + "px";
      bar.innerText = item.company;
      chartContainer.appendChild(bar);
    });
  }
  
  // Эвент событий для отправки формы
  document.getElementById("salesForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const companyName = document.getElementById("companyName").value;
    const salesNumber = parseInt(document.getElementById("salesNumber").value);
  
    // Добавление новых данных в массив salesData
    salesData.push({ company: companyName, sales: salesNumber });
  
// Формирование обновленной гистограммы
    generateHistogram(salesData);
  
    // Reset form inputs
    document.getElementById("companyName").value = "";
    document.getElementById("salesNumber").value = "";
  });
  
// Начальное формирование гистограммы
  generateHistogram(salesData);