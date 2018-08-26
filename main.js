var bBreite = 400;
var bHöhe   = 400;
var tBreite = 30;
var tPuffer = 10
var bDicke  = 10;

var mode   = 1;

var noiseTX = 0;
var noiseTY = 100;

var linkerRand;
var rechterRand;
var obererRand;
var untererRand;
var anzahlTBreite;
var anzahlTHöhe;

function setup(){
  createCanvas(600, 600);
  background(255);

  linkerRand  = (width - bBreite)/2;
  rechterRand = linkerRand + bBreite;
  obererRand  = (height - bHöhe)/2;
  untererRand = obererRand + bHöhe;

  anzahlTBreite = floor(bBreite / (tBreite + tPuffer));
  anzahlTHöhe   = floor(bHöhe   / (tBreite + tPuffer));
}

function draw(){
  background(255);
  strokeWeight(bDicke);
  line(linkerRand,  obererRand,  linkerRand,  untererRand);
  line(linkerRand,  untererRand, rechterRand, untererRand);
  line(rechterRand, untererRand, rechterRand, obererRand);

  switch (mode) {
    case 0:
      festZustand();
      break;
    case 1:
      flüssigZustand();
      break;
    case 2:

      break;
    default:

  }

  noiseTX += 0.01;
  noiseTY += 0.01;
}

function festZustand(){
  strokeWeight(5);
  for(let i = 1; i < anzahlTBreite; i++){
    for(let j = 1; j < anzahlTHöhe; j++){
      ellipse(linkerRand + (tBreite + tPuffer) * i,
              obererRand + (tBreite + tPuffer) * j,
              tBreite);
    }
  }
}

function flüssigZustand(){
  strokeWeight(5);
  for(let i = 1; i < anzahlTBreite; i++){
    for(let j = 1; j < anzahlTHöhe; j++){
      ellipse((linkerRand + (tBreite + tPuffer) * i) + ((noise(noiseTX+(i+j))*tPuffer) - tPuffer/2),
              (obererRand + (tBreite + tPuffer) * j) + ((noise(noiseTY+(i+j))*tPuffer) - tPuffer/2),
              tBreite);
    }
  }
}

function gasZustand(){

}
