window.onload = function(){
  if(this.name == ""){
    this.name = "enter";
    createTxt();
  }
}

function createTxt() {
  const dia = document.createElement('div');
  dia.innerHTML = "<p id='dialogue'>Parfait. Un taxi.</p>";
  document.body.appendChild(dia);
  let timeout = setTimeout(deleteTxt, 2000);
}

function deleteTxt(){
  var elem = document.getElementById('dialogue');
  elem.parentNode.removeChild(elem);
}

function Cant(){
  const dia = document.createElement('div');
  dia.innerHTML = "<p id='dialogue'>Je n'ai pas encore la carte.</p>";
  document.body.appendChild(dia);
  let timeout = setTimeout(deleteTxt, 2000);
}

function chat(){
  if(this.name == "prepare"){
    var needs = ["Map"];
    var i = 0;
    const cArray = document.cookie.split("; ");
    cArray.forEach(cookie => {
      if (cookie.split('=')[0].indexOf("Map") == 0 && cookie.split('=')[1].indexOf("have") == 0) {
        i++;
      }
    })
    if (i == needs.length) {
      const d = new Date();
      d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      for (var j = 0; j < needs.length; j++) {
        document.cookie = needs[j] + "=used; " + expires + "; path=/;";
      }
      this.name = "";
      window.location.href = "/Cutscenes/Dialogue/TaxiDriver;Map.html";
    }
  }
  else if(this.name == "enter"){
    this.name = "interact"
    window.location.href = "/Cutscenes/Dialogue/TaxiDriver;Firstmeet.html";
  }
  else {
    Cant();
  }
}