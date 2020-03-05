// initializing vars
x = 0
y = 0
width = 0
height = 0

function setup() {
  frameRate(5) // only will fetch 5 times a second!
  console.log("made it here")
  div = document.createElement('div');
  div.id = "circleDiv";
  div.style.position = "absolute"
  div.innerHTML += "<svg><circle cx='50' cy='50' r='40' stroke='green' stroke-width='4' fill='none' /></svg>"
  document.body.appendChild(div)
  width = window.outerWidth;
  height = window.outerHeight;
}

function draw() {
  // requesting data works
  console.log("am i here")
  chrome.runtime.sendMessage(
      {contentScriptQuery: "gazePoint"},
      myJson => {
        circleDiv = document.getElementById("circleDiv");
        point = myJson[myJson.length - 1];
        fill(point.x*255,point.y*255,255/2)
        x = point.x * width
        y = point.y * height
        console.log(x + " " + y)
        circleDiv.style.top = y + "px";
        circleDiv.style.left = x + "px";
      });
}
