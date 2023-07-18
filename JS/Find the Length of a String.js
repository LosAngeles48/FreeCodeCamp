Найдите длину строки
Вы можете найти длину значения String, написав .lengthпосле строковой переменной или строкового литерала.

console.log("Alan Peter".length);
Значение 10будет отображаться в консоли. Обратите внимание, что пробел между «Алан» и «Питер» также учитывается.

    Например, если бы мы создали переменную const firstName = "Ada", мы могли бы узнать длину строки, Adaиспользуя это firstName.lengthсвойство.

    Используйте .lengthсвойство, чтобы задать lastNameLengthколичество символов в lastName.

    Решение!

    // Setup
    let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;