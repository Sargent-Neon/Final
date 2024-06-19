window.onload = Create();
  
function deleteTxt(){
  var elem = document.getElementById('dialogue');
  elem.parentNode.removeChild(elem);
}

function Create(){
  const dia = document.createElement('div');
  dia.innerHTML = "<p id='dialogue'>Enfin arrivé.</p>";
  document.body.appendChild(dia);
  let timeout = setTimeout(deleteTxt, 2000);
}