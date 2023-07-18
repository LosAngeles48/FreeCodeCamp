Используйте нотацию скобок, чтобы найти N-последний символ в строке
Вы можете использовать тот же принцип, который мы только что использовали для получения последнего символа в строке, чтобы получить N-последний символ.

    Например, вы можете получить значение предпоследней буквы строки, const firstName = "Augusta"используяfirstName[firstName.length - 3]

Пример:

    const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
thirdToLastLetterбудет иметь значение строки s.

    Используйте запись в квадратных скобках , чтобы найти предпоследний символ в lastNameстроке.

    Подсказка: попробуйте посмотреть пример выше, если вы застряли.

    Решение!

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line