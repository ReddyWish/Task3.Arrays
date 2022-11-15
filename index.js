const coffees = ['Latte', 'Cappuccino', 'Americano'];

let coffeName = prompt('Поиск кофе по названию').trim()
let num = coffees.findIndex((item) => {
    return item.toLowerCase() === coffeName.toLowerCase()
})
if (num === 0) {
    num = 'первый'
} else if (num === 1) {
    num = `следующий по популярности после ${coffees[0]}`
} else if (num === 2) {
    num = 'на третьем месте'
}

console.log(num)

if (coffees.some(item => {
    return item.toLowerCase() === coffeName.toLowerCase()
})) {
    alert(`Держите ваш любимый ${coffeName}, он ${num} по попурярности в нашей кофейне`)
} else {
    alert('К сожалению такого кофе нет в наличии')
}

