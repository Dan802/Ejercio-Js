const main = document.querySelector('#principal');

//Ciclo creado de forma artesanal porque con un for por mas intentos que hice no me dio :')
let variable = 0;

function Esperar() {

  setInterval(function(){

    if (variable === 0){
      variable = 1;
      console.log("woa morir")
      console.log("woa morirx1")
      console.log("woa morirx2")
      main.innerHTML = `<p>Holaaaa</p>`;
    }
    else if (variable===1)
    {
      variable = 2;
      console.log("Enserio woa morir")
      console.log("Enserio woa morirx1")
      console.log("Enserio woa morirx2")
      main.innerHTML = `<p>como estas</p>`;
    }
    else if (variable===2)
    {
      variable = 0;
      console.log("Mas enserio a no poder, woa morir")
      console.log("Mas enserio a no poder, woa morirx1")
      console.log("Mas enserio a no poder, woa morirx2")
      main.innerHTML = `<p>bien y tu</p>`;
    }
  }, 6000);
}

Esperar();

    about:blank
