Экранирование буквенных кавычек в строках
Когда вы определяете строку, вы должны начинаться и заканчиваться одинарной или двойной кавычкой. Что происходит, когда вам нужна буквальная цитата: "или 'внутри вашей строки?

В JavaScript вы можете избежать того, чтобы кавычка рассматривалась как кавычка в конце строки, поместив обратную косую черту ( \) перед кавычкой.

    const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
Это сигнализирует JavaScript, что следующая кавычка не является концом строки, а вместо этого должна находиться внутри строки. Итак, если вы напечатаете это на консоли, вы получите:

    Alan said, "Peter is learning JavaScript".
    Используйте обратную косую черту , чтобы присвоить строку переменной myStr, чтобы, если вы выведете ее на консоль, вы увидели:

    I am a "double quoted" string inside "double quotes".

    Решение

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";