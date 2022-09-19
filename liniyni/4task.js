// Четверта задача Користувач хоче клеїти шпалери на стіну. Дано розміри стіни (довжина і висота) та розмір двох вікон. Визначити, скільки м2 шпалер потрібно купити користувачу.

let wallWidth = parseFloat(prompt('Ширина стіни (в метрах)'));
let wallHeight = parseFloat(prompt('Висота стіни (в метрах)'));
let twoWindowsSize = parseFloat(
  prompt('Розміри двох вікон (в метрах квадратних)')
);
let userMNeedToBuy = Math.floor(wallWidth * wallHeight - twoWindowsSize);
document.write(`Скільки квадратеих метрів потрібно купити = ${userMNeedToBuy}`);
