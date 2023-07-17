Совпадение с литеральными строками
В последнем задании вы искали слово, Helloиспользуя регулярное выражение /Hello/. Это регулярное выражение искало буквальное совпадение строки Hello. Вот еще один пример поиска буквального совпадения строки Kevin:

    let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
Этот testвызов вернется true.

    Любые другие формы Kevinне будут соответствовать. Например, регулярное выражение /Kevin/не будет соответствовать kevinили KEVIN.

    let wrongRegex = /kevin/;
wrongRegex.test(testStr);
Этот testвызов вернется false.

    Будущая задача покажет, как сопоставить и эти другие формы.

    Завершите регулярное выражение waldoRegex, чтобы найти "Waldo"в строке waldoIsHidingбуквальное совпадение.


    Решение

Было
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
Стало
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

