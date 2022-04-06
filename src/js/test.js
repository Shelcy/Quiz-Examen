var area = 0;
let timer = document.getElementById("timer"); // Temporizador de todo el examen

// Barra de tiempo
//questionNum = Numero de preguntas que tiene el examen
//area = Cantidad a pintar de la barra
function bar(questionNum) {
  let bar = document.getElementById("progress-bar");
  let porcent = 100 / questionNum;

  area = area + porcent;
  bar.style.width = `${area}%`;
}

//time = tiempo en segundos
function startTimer(time) {
  counterTime = setInterval(timerCount, 1000);

  function timerCount() {
    String.prototype.toHHMMSS = function () {
      let sec_num = parseInt(this, 10);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - hours * 3600) / 60);
      let seconds = sec_num - hours * 3600 - minutes * 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      // console.log(hours + ':' + minutes + ':' + seconds)
      return hours + ":" + minutes + ":" + seconds;
    };

    let realTime = time.toString();
    timer.textContent = realTime.toHHMMSS();
    time--;
  }
}

function next() {
  bar(3);
}

startTimer(600);
