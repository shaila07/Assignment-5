document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    console.log(addMoney);
    
    if(addMoney){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber + addMoneyNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money')
    }


    if(addMoney){
        const balance = document.getElementById('my-account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber - addMoneyNumber;

        document.getElementById('my-account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money')
    }


})