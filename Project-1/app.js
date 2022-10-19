//change background colors
let bgColors = ["#222222","#665866","#5F9EA0","#A9A9A9"];
let choice = 0;
let colorbutton = document.getElementById('button-color');
colorbutton.addEventListener('click',function(){
    document.body.style.background = bgColors[choice];
    choice = (choice+1)%4;
})

//change font size when the mouse is on the website instructions text
let text = document.getElementById('paragraph');
text.addEventListener('mouseover',function(){
    text.style.fontSize = '25px';
})
text.addEventListener('mouseout',function(){
    text.style.fontSize = '22px';
})

//pull user's location data (did not figure out) and its weather data
fetch("https://api.openweathermap.org/data/2.5/weather?q=Tampa,us&appid=077649c13e52b5e301962d467a03a4c6&units=metric")
.then(response =>{
    //console.log(response);
    return (response.json());
})
.then(data => {
    //console.log(data);
    let temp = data.main.temp;
    //console.log(data.weather[0]);
    let weather = data.weather[0].description;

    let tempPar = document.getElementById('temp');
    tempPar.innerHTML = temp;
    let weatherPar = document.getElementById('weather');
    weatherPar.innerHTML = weather;
})
fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=077649c13e52b5e301962d467a03a4c6&units=metric")
.then(response2 =>{
    //console.log(response2);
     return (response2.json());
 })
.then(data2 => {
    //console.log(data2);
    let london_temp = data2.main.temp;
    let london_weather = data2.weather[0].description;

    let tempPar2 = document.getElementById('London_temp');
    tempPar2.innerHTML = london_temp;
    let weatherPar2 = document.getElementById('London_weather');
    weatherPar2.innerHTML = london_weather;
})

//implement p5 and sounds
let noiseY;
let noiseSpeed = 0.01;
let noiseHeight = 20;
function myFunction(){
    //console.log('clicked');
    let x = document.getElementById("London");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else{
        x.style.display = "none";
    }
}
//*----------below is p5 code ----------------*//
function setup() {
  var cnv = createCanvas(800,600);
  noiseY = height * 3 / 4;
  cnv.parent('London');
  //centerCanvas();
  cnv.style('display', 'block');
}
//function centerCanvas(){
    //let x = (windowWidth-Width)/2;
    //let y = (windowHeight-height)/2;
    //cnv.position(x,y);
//}
function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
    //centerCanvas();
}

function draw() {
  background(0, 15);
  noStroke();
  fill(255);
  for (let i = 0; i < 10; i++) {
    let xrandom = random(width);
    let yrandom = random(height / 2);
    ellipse(xrandom, yrandom, 3, 3);
  }

  for (let j = 0; j < 3; j++) {
    let offsetY = j * 100;
    noFill();
    stroke(0, 0, 255, 10);
    strokeWeight(height / 2);
    beginShape();
    curveVertex(0, height / 2);
    for (let i = 0; i < width; i += 50) {
      let y = noise(frameCount * noiseSpeed + i + j) * noiseHeight + noiseY + offsetY;
      curveVertex(i, y);
    }
    curveVertex(width, height / 2);
    endShape(LINES);
  }
}