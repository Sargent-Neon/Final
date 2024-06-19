function deleteTxt(){
  var elem = document.getElementById('dialogue');
  elem.parentNode.removeChild(elem);
}

function Cant(){
  const dia = document.createElement('div');
  dia.innerHTML = "<p id='dialogue'>Je n'ai pas son portefeuille.</p>";
  document.body.appendChild(dia);
  let timeout = setTimeout(deleteTxt, 2000);
}

function chat(){
  if(this.name == "seaching"){
    var needs = ["Wallet"]
    var i = 0;
    const cArray = document.cookie.split("; ");
    cArray.forEach(cookie => {
      if (cookie.split('=')[0].indexOf("Wallet") == 0) {
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
      this.name = "direction";
      document.cookie ="Map=direction; " + expires + "; path=/;";
      window.location.href = "/Cutscenes/Dialogue/Shop;WalletCollected.html";
    }
    else {
      Cant();
    }
  }
  else if(this.name == "interact"){
    this.name = "seaching"
    window.location.href = "/Cutscenes/Dialogue/Shop;FirstInteraction.html";
  }
}