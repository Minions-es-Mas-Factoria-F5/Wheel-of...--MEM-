const roulette = document.querySelector('#roulette');

roulette.addEventListener('click',girar);

function girar(){

    let rand= Math.random()*7200;
    calcular(rand);

    function calcular(rand){
        valor = rand/360;

    }


} 