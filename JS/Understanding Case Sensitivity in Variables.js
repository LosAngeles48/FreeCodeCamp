Понимание чувствительности к регистру в переменных
В JavaScript все имена переменных и функций чувствительны к регистру. Это означает, что капитализация имеет значение.

    MYVARне то же самое, что MyVarни myvar. Можно иметь несколько разных переменных с одинаковым именем, но с разным регистром. Настоятельно рекомендуется для ясности не использовать эту языковую функцию.

    Лучшая практика

Пишите имена переменных в JavaScript в camelCase . В camelCase имена переменных, состоящие из нескольких слов, имеют первое слово в нижнем регистре, а первая буква каждого последующего слова — заглавная.

    Примеры:

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
Измените существующие объявления и назначения, чтобы в их именах использовался camelCase .

    Не создавайте никаких новых переменных.


    Решение!

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

