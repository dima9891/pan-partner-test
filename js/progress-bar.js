document.querySelector('.progress-bar__button').addEventListener('click', function() {
    let amountOnBtn = parseInt(this.querySelector('.amount').innerText, 10)
    let currentAmount = parseInt(document.querySelector('.progress-bar .progress').dataset.amount, 10)

    let sum = amountOnBtn + currentAmount
    
    if (sum >= 100) {
        document.querySelector('.progress-bar .progress .amount').innerText = 100 + '%'
        document.querySelector('.progress-bar .progress').style.width = 100 + '%'
        document.querySelector('.progress-bar .progress').dataset.amount = 100
        return
    }
    document.querySelector('.progress-bar .progress .amount').innerText = sum + '%'
    document.querySelector('.progress-bar .progress').style.width = sum + '%'
    document.querySelector('.progress-bar .progress').dataset.amount = sum
})