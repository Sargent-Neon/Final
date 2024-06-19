window.onload = function(){
  createTxt();
}

function createTxt() {
  const dia = document.createElement('div');
  dia.innerHTML = "<p id='dialogue'>Enfin, c'est le moment de-</p>";
  document.body.appendChild(dia);
  let timeout = setTimeout(next, 2000);
  timeout = setTimeout(deleteTxt, 4000);
}

function next(){
  document.getElementById("dialogue").innerHTML = "Zut, j'ai fait tomber mon billet. <br> Où est-il passé?";
}

function deleteTxt(){
  var elem = document.getElementById('dialogue');
  elem.parentNode.removeChild(elem);
}