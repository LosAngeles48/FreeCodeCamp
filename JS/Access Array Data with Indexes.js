Доступ к данным массива с помощью индексов
Мы можем получить доступ к данным внутри массивов, используя индексы .

    Индексы массива записываются в той же скобочной нотации, что и строки, за исключением того, что вместо указания символа они указывают запись в массиве. Как и строки, массивы используют индексацию с отсчетом от нуля , поэтому первый элемент в массиве имеет индекс 0.


Пример

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
Печатает и имеет значение console.log(array[0]).50data60

Создайте переменную с именем myDataи установите ее равной первому значению myArrayиспользования скобочной записи.


    Решение!

const myArray = [50, 60, 70];
const myData = myArray[0]