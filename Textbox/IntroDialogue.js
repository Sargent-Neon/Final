var blocker = "block";

window.onload = function(){
  if (this.name != blocker){
    this.name = blocker;
    createTxt();
  }
}

function createTxt() {
  const dia = document.createElement('div');
  dia.innerHTML = "<p id='dialogue'>Je dois récupérer ma valise et tous mes effets personnels avant de partir.</p>";
  document.body.appendChild(dia);
  let timeout = setTimeout(deleteTxt, 2000);
}

function deleteTxt(){
  var elem = document.getElementById('dialogue');
  elem.parentNode.removeChild(elem);
}