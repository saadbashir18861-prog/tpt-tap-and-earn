let coins = 0;
const coinsSpan = document.getElementById('coins');
const tapBtn = document.getElementById('tapBtn');

tapBtn.addEventListener('click', () => {
    coins++;
    coinsSpan.innerText = coins;
});
