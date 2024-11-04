/* Каждому по печеньке
Требуется подставить вместо `{name}` - имя и вернуть строку с сообщением:
One for {name}, one for me.
Однако, если name отсутствует, верните строку: One for you, one for me.*/

function oneFor(name: string = "person") {
    return `One for ${name}, one for me.`;
}

console.log(oneFor("Alice"))
console.log(oneFor("Bob "))
console.log(oneFor())
console.log(oneFor("Zaphode"))