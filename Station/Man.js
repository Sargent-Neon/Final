function check(){
  if(this.name == ""){
    this.name = "enter";
    createTxt();
  }
}

function createTxt() {
  const dia = document.createElement('div');
  dia.innerHTML = "<p id='dialogue'>Où est-il ? Oh, ce gars l'a.</p>";
  document.body.appendChild(dia);
  timeout = setTimeout(deleteTxt, 2000);
}

function deleteTxt(){
  var elem = document.getElementById('dialogue');
  elem.parentNode.removeChild(elem);
}

function Cant(){
  const dia = document.createElement('div');
  dia.innerHTML = "<p id='dialogue'>e n'ai pas encore le chien du vieil homme.</p>";
  document.body.appendChild(dia);
  let timeout = setTimeout(deleteTxt, 2000);
}

function chat(){
  if(this.name == "interact"){
    var needs = ["Dog"]
    var i = 0;
    const cArray = document.cookie.split("; ");
    cArray.forEach(cookie => {
      if (cookie.split('=')[0].indexOf("Dog") == 0) {
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
      window.location.href = "/Cutscenes/Dialogue/OldMan;Dog.html";
    }
    else {
      Cant();
    }
  }
  else{
    this.name = "interact"
    window.location.href = "/Cutscenes/Dialogue/OldMan;Firstinteraction.html";
  }
}