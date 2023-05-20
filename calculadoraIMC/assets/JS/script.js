//pegar o evento de formulario
const form = document.getElementById('form');

// criacao de evento de submit sem que exista um recarregamento da pagina
form.addEventListener('submit', function(event){
    event.preventDefault();

    //pegar os dados dos inputs
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // fazer o calculo
    const bmi = (weight / (height * height)).toFixed(2);

    //pegar o value
    const value = document.getElementById('value');
    let description = '';

    //cores para valores
    value.classList.add('attention');

    //mostrar classe hidden
    document.getElementById('infos').classList.remove('hidden');

    // condiçoes para tratar as descriçoes
    if (bmi < 18.5) {
        description = "Cuidado! Você está abaixo do peso!";
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = "Você está no peso ideal!";
        value.classList.remove('attention');
        value.classList.add('normal');

    } else if (bmi > 25 &&  bmi <= 30) {
        description = "Cuidado! Você está acima do peso!";
    } else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! Você está com obesidade moderada";
    } else if (bmi > 35 && bmi <= 40) {
        description = "Cuidado! Você está com obesidade severa!";
    } else {
        description = "Cuidado! Você está com obesidade morbida!";
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;


});