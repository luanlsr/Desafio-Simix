// Fazer um form com um botão e um text para exibir o resultado
// Ao clicar no botão deve exibir os números de 1 a 200 conforme a regra:
// Se o número for divisível por 3, mostrar X, se o número for divisível por 5 mostrar Y. 
// Se o número for divisível por 3 e 5 mostra Z. Caso contrário mostra só o número.

const text = document.getElementById('random-number')
const btn = document.getElementById('random-btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const min = 1
    const max = 200

    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    if(randomNumber % 3 === 0 && randomNumber % 5 === 0) {
        text.innerHTML = 'Z'
        console.log(`${randomNumber} - Sou divisível por 3 e 5`);
        
    } else if (randomNumber % 3 === 0) {
        text.innerHTML = 'X'
        console.log(`${randomNumber} - Sou divisível por 3`);
    } else if (randomNumber % 5 === 0) {
        text.innerHTML = 'Y'
        console.log(`${randomNumber} - Sou divisível por 5`);
    } else {
        text.innerHTML = randomNumber
    }
})
