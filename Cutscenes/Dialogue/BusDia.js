var line = 0;
var lines = [];

async function loadFileAndPrintToConsole(url) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    lines = data.split("\n");
  } catch (err) {
    console.error(err);
  }
  nextScene(" ");
}

function nextScene(location){
  if(line == lines.length){
    window.location.href = "/"+location;
  }
  var op = document.getElementById("NPC");
  op.style.opacity = 1;
  op = document.getElementById("Player");
  op.style.opacity = 1;
  var buffer = lines[line].split(": ");
  if (buffer[0].indexOf("You") == 0 || buffer[0].indexOf("Bus Driver") == 0 || buffer[0].indexOf("Mechanic") == 0){
    document.getElementById("text").innerHTML = buffer[1];
    line++;
    if(buffer[0].indexOf("You") == 0){
      var char = document.getElementById("NPC")
      char.style.opacity = 0.5;
    }
    else{
      var char = document.getElementById("Player")
      char.style.opacity = 0.5;
      if(buffer[0].indexOf("Bus Driver") == 0){
        document.getElementById("NPC").src = "/NCPs/NPC9_BusDriver.png"
      }
      else{
        document.getElementById("NPC").src = "/NCPs/NPC2_Mechanic.png"
      }
    }
  }
  else{
    document.getElementById("text").innerHTML = buffer[0];
    line++;
    var char = document.getElementById("NPC")
    char.style.opacity = 0.5;
    char = document.getElementById("Player")
    char.style.opacity = 0.5;
  }
}