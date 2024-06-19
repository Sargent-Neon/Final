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
    window.location.href = "/Final/"+location;
  }
  else{
    document.getElementById("text").innerHTML = lines[line];
    line++;
  }
}
