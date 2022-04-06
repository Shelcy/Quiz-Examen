var area = 0;

// Barra de tiempo
//questionNum = Numero de preguntas que tiene el examen
//area = Cantidad a pintar de la barra
function bar(questionNum) {
    let bar = document.getElementById("progress-bar");
    let porcent = 100 / questionNum;

    area = area + porcent;
    bar.style.width = `${area}%`;
}

function next(){
    bar(3);
}