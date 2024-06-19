function createTxt() {
  const dia = document.createElement('div');
  dia.innerHTML = "<p id='dialogue'>Je ne peux pas partir encore. \nJe n'ai pas tous mes effets personnels.</p>";
  document.body.appendChild(dia);
  let timeout = setTimeout(deleteTxt, 2000);
}

function deleteTxt(){
  var elem = document.getElementById('dialogue');
  elem.parentNode.removeChild(elem);
}