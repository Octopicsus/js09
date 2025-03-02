console.log('#9. JavaScript homework example file');

/*
 * #1
 *
 * Задача: Отслеживание клика на кнопку и вывод сообщения
 * Цель: Разработать функцию, которая назначает обработчик события клика на кнопку с определённым ID и выводит в консоль заранее определённое сообщение при каждом клике на кнопку.
 *
 * Требования:
 * 1. Функция должна принимать два параметра:
 *    - buttonId (строка) - ID кнопки, на которую нужно установить обработчик события.
 *    - message (строка) - сообщение, которое будет выводиться в консоль при клике на кнопку.
 * 2. Функция должна найти кнопку с помощью buttonId и назначить ей обработчик события клика.
 * 3. При клике на кнопку в консоль должно выводиться заданное message.
 * 4. Функция должна быть экспортирована для дальнейшего использования и тестирования.
 *
 */

function handleButtonClick(buttonId, message) {
  // code here
}

// Демонстрация использования функции (припустимо, что HTML содержит кнопку с ID 'myButton')
// handleButtonClick('myButton', 'Button clicked!');

/*
 * #2
 *
 * Задача: Разработка функции отслеживания позиции курсора мыши
 * Цель: Создать функцию trackMousePosition, которая устанавливает обработчик события для отслеживания движения мыши по документу и выводит в консоль координаты курсора мыши (X и Y).
 *
 * Требования к реализации:
 * 1. Функциональность: Функция должна отслеживать движение мыши по документу. При каждом движении мыши функция должна выводить в консоль координаты clientX и clientY, которые представляют позицию курсора относительно окна браузера.
 * 2. Регистрация обработчика события: Функция должна использовать document.addEventListener для регистрации обработчика события mousemove.
 * 3. Вывод данных: При срабатывании события mousemove функция должна выводить строку в формате `"Mouse X: [X], Mouse Y: [Y]"`, где `[X]` и `[Y]` - это соответствующие координаты курсора мыши.
 *
 */

function trackMousePosition() {
  // code here
}

// console.log(trackMousePosition())

/*
 * #3
 *
 * Задача: Реализация делегирования событий для отслеживания кликов на элементах списка
 * Цель: Создать функцию setupEventDelegation, которая позволит установить обработчик событий на весь список вместо отдельных элементов `<li>`. Функция должна отслеживать клики на элементах `<li>` в пределах заданного списка и логировать текст "Item clicked: [Текст Элемента]", где "[Текст Элемента]" - это текст кликнутого элемента `<li>` в консоль.
 *
 * Требования к реализации:
 * 1. Выбор элемента списка: Функция должна принимать селектор CSS в качестве аргумента, который указывает на элемент списка `<ul>` или `<ol>`, к которому будет применено делегирование событий.
 * 2. Установка обработчика событий: Используя метод addEventListener, функция должна добавить обработчик для события `click` на весь список. Обработчик должен срабатывать при клике на любой из элементов `<li>` в этом списке.
 * 3. Логирование кликов: Когда элемент `<li>` кликнут, функция должна вывести в консоль сообщение в формате "Item clicked: [Текст Элемента]", где "[Текст Элемента]" должен быть текстом кликнутого элемента `<li>`. Текст элемента должен быть обрезан методом trim(), чтобы удалить лишние пробелы в начале и конце.
 *
 */

// function createTestList() {
//   document.body.innerHTML = `
//     <ul id="testList">
//       <li>Item 1</li>
//       <li>Item 2</li>
//       <li>Item 3</li>
//     </ul>
//     `
// }
// createTestList()

function setupEventDelegation(selector) {
  // code here
}

// setupEventDelegation('#testList')

// Экспорт функции для использования и тестирования
export { handleButtonClick, trackMousePosition, setupEventDelegation };
