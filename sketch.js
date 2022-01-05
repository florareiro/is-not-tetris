var rectPosX, rectPosY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  frameRate(1);
  rectPosX = 0;
  rectPosY = height/2;
}

function draw() {
  
  if (randomBool() === true){
    fill('black');
    rectPosX +=22; 
    rectPosY +=22;
    }
  else{
    fill('red');
    rectPosY -=22;
  }
  
  rect(rectPosX, rectPosY, 20, 20);
}

function randomBool(){
  // força valor a ser ou 0 ou 1 'math.round'
  var randomNum = Math.round(random(1));
  var isTrue = true;
    if(randomNum === 1){
      isTrue = true;    
    }
    else {
      isTrue = false;
    }
  return isTrue; 
}