function chat(){
  if(this.name == "direction"){
    this.name = "prepare"
    const d = new Date();
    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie ="Map=have; " + expires + "; path=/;";
    window.location.href = "/Cutscenes/Dialogue/Cafe;Locationinformation.html";
  }
}