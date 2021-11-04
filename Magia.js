const content = element.innerHTML;

element.innerHTML = htmlString;

document.body.innerHTML = "";

var counter = 1;

setInterval(function(){
  document.getElementById('texto1' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);
