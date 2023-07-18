Измените данные массива с помощью индексов
В отличие от строк, элементы массивов изменяемы и могут свободно изменяться, даже если массив был объявлен с расширением const.

Пример

const ourArray = [50, 40, 30];
ourArray[0] = 15;
ourArrayтеперь имеет значение [15, 40, 30].

    Примечание. Между именем массива и квадратными скобками не должно быть пробелов, например array [0]. Хотя JavaScript может правильно это обработать, это может запутать других программистов, читающих ваш код.

    Измените данные, хранящиеся в индексе 0, myArrayна значение 45.

Решение!

// Setup
const myArray = [18, 64, 99];
myArray[0] = 45;
// Only change code below this line