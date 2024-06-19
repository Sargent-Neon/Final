function checkItems() {
  var needs = ["Sunglasses", "Phone", "Canadian_passport", "Toiletries", "Clothes"]
  var i = 0;
  const cArray = document.cookie.split("; ");
  cArray.forEach(cookie => {
    if (cookie.split('=')[0].indexOf("Sunglasses") == 0 ||
      cookie.split('=')[0].indexOf("Phone") == 0 ||
      cookie.split('=')[0].indexOf("Canadian_passport") == 0 ||
      cookie.split('=')[0].indexOf("Toiletries") == 0 ||
      cookie.split('=')[0].indexOf("Clothes") == 0) {
      i++;
    }
  })
  if (i == 5) {
    const d = new Date();
    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    for (var j = 0; j < needs.length; j++) {
      document.cookie = needs[j] + "=used; " + expires + "; path=/;";
    }
    this.name = "";
    window.location.href = "/hallway/hallway1.html";
  }
  else {
    createTxt();
  }
}