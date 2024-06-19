window.onload = function(){
  if(this.name != "enter" && this.name != "interact"){
    this.name = "enter";
    createTxt();
  }
}

function createTxt() {
  const dia = document.createElement('div');
  dia.innerHTML = "<p id='dialogue'>Attendez, je ne sais pas où est l'arrêt de bus. <br>Peut-être qu'elle sait où je peux le trouver.</p>";
  document.body.appendChild(dia);
  let timeout = setTimeout(deleteTxt, 2000);
}

function deleteTxt(){
  var elem = document.getElementById('dialogue');
  elem.parentNode.removeChild(elem);
}

function Cant(){
  const dia = document.createElement('div');
  dia.innerHTML = "<p id='dialogue'>Je n'ai pas encore toutes ses cartes <br>Ai-je cherché partout pour elles ?</p>";
  document.body.appendChild(dia);
  let timeout = setTimeout(deleteTxt, 2000);
}

function chat(){
  if(this.name == "interact"){
    var needs = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
    var i = 0;
    const cArray = document.cookie.split("; ");
    cArray.forEach(cookie => {
      if (cookie.split('=')[0].indexOf("Ace") == 0 ||
        cookie.split('=')[0].indexOf("Two") == 0 ||
        cookie.split('=')[0].indexOf("Three") == 0 ||
        cookie.split('=')[0].indexOf("Four") == 0 ||
        cookie.split('=')[0].indexOf("Five") == 0 ||
        cookie.split('=')[0].indexOf("Six") == 0 ||
        cookie.split('=')[0].indexOf("Seven") == 0 ||
        cookie.split('=')[0].indexOf("Eight") == 0 ||
        cookie.split('=')[0].indexOf("Nine") == 0 ||
        cookie.split('=')[0].indexOf("Ten") == 0 ||
        cookie.split('=')[0].indexOf("Jack") == 0 ||
        cookie.split('=')[0].indexOf("Queen") == 0 ||
        cookie.split('=')[0].indexOf("King") == 0) {
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
      window.location.href = "/Cutscenes/Dialogue/AphroditeDone.html";
    }
    else {
      Cant();
    }
  }
  else{
    this.name = "interact";
    window.location.href = "/Cutscenes/Dialogue/Aphrodite.html";
  }
}
