//Aquí es donde ocurre la magia ^~^
const main = document.querySelector('#principal');
main.innerHTML = `<h1 class="title">La emoción es parte de vivir</h1>
      <div class="lugar_Frase">
      <p id="Frase" class="sentence">"Sin embargo, aunque no podemos adivinar el mundo que será, bien podemos
          imaginar el que queremos que sea. El derecho de soñar no figura entre los
          treinta derechos humanos que las Naciones Unidas proclamaron a fines de
          1948. Pero si no fuera por él, y por las aguas que da de beber, los demás
          derechos se morirían de sed"
      </p>
      <p id ="Autor" class="author">- Eduardo Galeano</p>
      </div>`;

let variable = 1;

function Esperar() {

  setInterval(function(){

    if (variable === 0){
      variable = 1;
      main.innerHTML = `<h1 class="title">La emoción es parte de vivir</h1>
      <div class="lugar_Frase">
      <p id="Frase" class="sentence">"Sin embargo, aunque no podemos adivinar el mundo que será, bien podemos
          imaginar el que queremos que sea. El derecho de soñar no figura entre los
          treinta derechos humanos que las Naciones Unidas proclamaron a fines de
          1948. Pero si no fuera por él, y por las aguas que da de beber, los demás
          derechos se morirían de sed"
      </p>
      <p id ="Autor" class="author">- Eduardo Galeano</p>
      </div>`;
    }
    else if (variable===1)
    {
      variable = 2;
      main.innerHTML = `<h1 class="title">La emoción es parte de vivir</h1>
      <div class="lugar_Frase">
      <p id="Frase" class="sentence">"La educación es algo admirable, pero es bueno recordar
          de cuando en cuando que nada de lo que merece la pena saber puede ser enseñado"
      </p>
      <p id ="Autor" class="author">-   Oscar Wilde</p>
      </div>`;
    }
    else if (variable===2)
    {
      variable = 3;
      main.innerHTML = `<h1 class="title">La emoción es parte de vivir</h1>
      <div class="lugar_Frase">
      <p id="Frase" class="sentence">"Cuando es verdadera, cuando nace de la necesidad
          de decir, a la voz humana no hay quien la pare. Si le niegan la boca, ella habla
           por las manos, o por los ojos, opor los poros, o por donde sea"
      </p>
      <p id ="Autor" class="author">-   Eduardo Galeano</p>
      </div>`;
    }
    else if (variable===3)
    {
      variable = 4;
      main.innerHTML = `<h1 class="title">La emoción es parte de vivir</h1>
      <div class="lugar_Frase">
      <p id="Frase" class="sentence">"Nunca pensé que en la felicidad hubiera tanta tristeza"
      </p>
      <p id ="Autor" class="author">-   Mario Benedetti</p>
      </div>`;
    }
    else if (variable===4)
    {
      variable = 0;
      main.innerHTML = `<h1 class="title">La emoción es parte de vivir</h1>
      <div class="lugar_Frase">
      <p id="Frase" class="sentence">"Las  cosas  simples  son  las  más  extraordinarias  y  sólo  los  sabios  consiguen verlas"
      </p>
      <p id ="Autor" class="author">-   Paulo Coelho</p>
      </div>`;
    }
  }, 6000);
}

Esperar();