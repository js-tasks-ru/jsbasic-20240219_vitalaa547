function getMinMax(str) {
  // ваш код...
  
    const numbers = inputString.match(/-?\d+(\.\d+)?/g) || []; // Извлекаем числа из строки
    const parsedNumbers = numbers.map(Number); // Преобразуем строки в числа
  
    if (parsedNumbers.length === 0) {
      return { min: null, max: null }; // Если нет чисел, возвращаем null
    }
  
    const min = Math.min(...parsedNumbers); // Находим минимальное число
    const max = Math.max(...parsedNumbers); // Находим максимальное число
  
    return { min, max };
  }
  
  
  

