Понимание неинициализированных переменных
При объявлении переменных JavaScript они имеют начальное значение undefined. Если вы выполните математическую операцию над undefinedпеременной, ваш результат будет NaNозначать «Не число» . Если вы соедините строку с undefinedпеременной, вы получите строку .undefined

Инициализируйте три переменные a, b, и cс 5, 10, и "I am a"соответственно так, чтобы их не было undefined.

    Решение!

// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

var a = 6;
var b = 15;
var c = "I am a String!";