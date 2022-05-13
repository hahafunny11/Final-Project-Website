var img;
var bonk
var tS = 0;
var x, y;
var s;
var fl;
var clk;
var tmr;
var alph;
var aT;
var pState;
var tmr2;
var txtS = [
  25,
  25,
  25,
  25,
  20,
  25,
  20,
  20,
  25,
  15,
  15,
  20,
  25,
  15,
  20,
  20,
  15,
  25,
  15,
  25,
  20,
  25,
  20,
  25,
  20,
  20,
];
var txtL = [
  400,
  250,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
  400,
];
var txtH = [
  30.8,
  61.6,
  30.8,
  61.6,
  30.8,
  61.6,
  30.8,
  61.6,
  61.6,
  30.8,
  30.8,
  30.8,
  30.8,
  30.8,
  30.8,
  30.8,
  30.8,
  30.8,
  30.8,
  30.8,
  61.6,
  61.6,
  30.8,
  61.6,
  30.8,
  30.8,
];
//var xAL=[420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420,420]
//var yAL=[32.34,64.68,32.34,64.68,32.34,64.68,32.34,64.68,64.68,32.34,32.34,32.34,32.34,32.34,32.34,32.34,32.34,32.34,32.34,32.34,64.68,64.68,32.34,64.68,32.34,32.34]
var tAL = [
  "About time I got out of that cookie.",
  "The fortune you seek is in another cookie.",
  "A closed mouth gathers no feet.",
  "A conclusion is simply the place where you got tired of thinking.",
  "A cynic is only a frustrated optimist.",
  "A foolish man listens to his heart. A wise man listens to cookies.",
  "You will die alone and poorly dressed.",
  "A fanatic is one who can't change his mind, and won't change the subject.",
  "If you look back, you’ll soon be going that way.",
  "You will live long enough to open many fortune cookies.",
  "An alien of some sort will be appearing to you shortly.",
  "Do not mistake temptation for opportunity.",
  "Flattery will go far tonight.",
  "He who laughs at himself never runs out of things to laugh at.",
  "He who laughs last is laughing at you.",
  "He who throws dirt is losing ground.",
  "Some men dream of fortunes, others dream of cookies.",
  "Don’t eat the paper.",
  "You can always find happiness at work on Friday.",
  "You are not illiterate.",
  "Avoid taking unnecessary gambles. Lucky numbers: 12, 15, 23, 28, 37",
  "Hard work pays off in the future. Laziness pays off now.",
  "You think it’s a secret, but they know.",
  "Change is inevitable, except for vending machines.",
  "The greatest danger could be your stupidity.",
  "May you someday be carbon neutral.",
];
//var iNum=[2]//,5,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50,53,56,59,62,65,68,71,74,77];
var num = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
];
var aNum3;
var s2 = 0;
var q = 0;

function preload() {
  img = loadImage("redblackgradient.png");
  bonk = createAudio("Verdure.mp3")
}

function setup() {
  createCanvas(1365, 616);
  console.log(txtL.length);
  console.log(txtH.length);
  //console.log(xAL.length)
  //console.log(yAL.length)
  x = width / 2;
  y = height / 2;
  rectMode(CENTER);
  textAlign(CENTER);
  tmr2=0
  aNum3 = 0;
  s = 0;
  fl = 220;
  alph = 255;
  aT = 0;
  clk = 0;
  pState = 0;
}

function draw() {
  background(img);
  if (tmr2==0 || tmr2==4920){
    bonk.play()
    tmr2=0
    tmr2++
  }else tmr2++
  if (pState == 0) {
    textSize(25);
    noStroke();
    fill(190, 148, 81, alph);
    if (clk == 0) {
      triangle(x, y, x - 175, y, x - 87.5, y - 150);
      triangle(x, y, x + 175, y, x + 87.5, y - 150);
      arc(x, y, 350, 318, 0, PI);
      arc(x - 87.5, y, 175, 298, PI, PI + HALF_PI);
      arc(x + 87.5, y, 175, 298, PI + HALF_PI, TWO_PI);
    } else if (clk == 1) {
      arc(x + 117, y, 350, 318, QUARTER_PI, HALF_PI + QUARTER_PI);
      arc(x - 117, y, 350, 318, QUARTER_PI, HALF_PI + QUARTER_PI);
      fill(190, 148, 81, alph);
      push();
      translate(854.15, 364.65);
      rotate(-43.2);
      arc(0, 0, 175, 298, PI + HALF_PI, TWO_PI);
      pop();
      push();
      translate(510.85, 364.65);
      rotate(43.2);
      arc(0, 0, 175, 298, PI, PI + HALF_PI);
      pop();
      push();
      translate(959.15, 258);
      triangle(-1, 1, -104.5, 130, -160.65, 50.35);
      pop();
      push();
      translate(405.85, 258);
      triangle(-1, 1, 104.5, 130, 160.65, 50.35);
      pop();
      stroke(0);
      //line(x-117,y,374.5,500)
      //line(x-117,500,374.5,500)
      //line(x-117,y,x-117,500)
      //line(x-117,y+96,x-179,370)
    }
    fill(fl, alph);
    stroke(0, alph);
    rect(x, 368, 175, 30.6);
    fill(0, alph);
    text("CLICK HERE", x + 3, y + 64, 350, 30.8);
    if (aT == 104) {
      s += 1;
      if (s == 104) {
        aT = 0;
        pState = 1;
      }
    }
    if (clk == 1) {
      aT += 1;
      if (round(aT / 4) == aT / 4) {
        alph -= 10;
        if (alph <= 0) {
          alph = 0;
          clk = 0;
        }
      }
    }

    if (
      mouseIsPressed &&
      mouseX <= 770 &&
      mouseX >= 595 &&
      mouseY >= 352.7 &&
      mouseY <= 383.3 &&
      clk != 1
    ) {
      fl = 120;
      clk = 1;
    }
  } else if (pState == 1) {
    if (s2 == 0) {
      s2 = 1;
      q = random(num);
      fl = 220;
    }
    fill(fl);
    stroke(0);
    rect(x, 368, 420, 64.68);
    fill(0);
    noStroke();
    textSize(txtS[q]);
    text(tAL[q], x + 3, y + 64, txtL[q], txtH[q]);
    if (tS != 180) {
      tS += 1;
    } else if (tS == 180) {
      fill(fl);
      stroke(0);
      rect(x, 500, 175, 30.6);
      noStroke();
      fill(0);
      textSize(25)
      text("RETRY", x + 3, 505, 350, 30.8);
      //console.log(mouseY)
      if (
        mouseIsPressed &&
        mouseX <= 770 &&
        mouseX >= 595 &&
        mouseY >= 484.7 &&
        mouseY <= 515.3
      ) {
        pState=2
      }
    }
  } else if (pState == 2) {
    s = 0;
    fl = 220;
    alph = 255;
    aT = 0;
    clk = 0;
    pState = 0;
    aNum = 0;
    aNum1 = 0;
    aNum2 = 0;
    aNum3 = 0;
    tS=0
    s2=0
  }
}
