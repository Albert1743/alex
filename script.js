let name = 'Alex'
let money = 10000
let account = 7777

let ask = prompt('Введите имя для снятие средств')

if (name.toLowerCase() == ask.toLowerCase()) {
    let pass = +prompt('Write your pincode')
    if (pass == account) {
        let balance = +prompt('Сколько обналичить?')
        if (balance < money) {
            money = money - balance
            console.log('Сняли средства', balance)
            console.log('Остаток', money)
        } else {
            alert('Недостаточно средств')
        }
    } else {
        alert('Incorrect pin-code')
    }

} else {
    alert('User is not found');
}
