var vict=2
var x,y,pY
var gameState=0
var p1, p2,pB1,pB2
var bPosX,bPosY
var netY
var bX,bY
var bXM,bYM
var sBV=[-1,1]
var wT=0
var s1=0
var s2=0
var tmr=0
var bop


function setup() {
  createCanvas(640, 480);
  x=width/2
  y=height/2
  frameRate(30);
  fill(255)
  noStroke();
  pY=height*2/3
  bX=(width/2)-2
  bY=height*(2/3)
  p1=pY-14
  p2=pY-14
  pB1=p1+35
  pB2=p2+35
  netY=height/3
  bYM=0
  bXM=random(sBV);
  textAlign(CENTER)
    textSize(40)
}
function preload() {
  bop = createAudio("Solar.mp3");
}

function draw() {
  background(0);
  if (tmr==0 || tmr==5250){
    bop.play()
    tmr=0
    tmr++
  }else tmr++
  textAlign(CENTER)
    textSize(40)
  if (gameState==0)/*start screen*/{
    if (vict==2){
      text("PRESS SPACE TO PLAY",(width/3)-40,y-40,300,200)
    }else{
      text("PRESS SPACE TO PLAY AGAIN",(width/3)-140,y+25,500,200)
      if (vict==1){
        text("PLAYER 1 WON",(width/3)-90,y-30,400,200)
      } else {
        text("PLAYER 2 WON",(width/3)-90,y-30,400,200)
      }
    }
    
    
    
    if (keyIsDown(32)){
      gameState=1
    }
  }else if(gameState==1)/*gameplay*/{
    for (let i=0;i<40;i++) rect(x-1,netY+(26*i),2,20)
    pB1=p1+35
    pB2=p2+35
    
    text(s1,200,100,100,100)
    text(s2,347,100,100,100)
    rect(0,(height/3)-2,width,2)
    rect(14,p1,4,35)
    rect(width-18,p2,4,35)
    if (keyIsDown(87)){
      p1-=6
      if (p1<height/3) p1=height/3
    }
    if (keyIsDown(83)){
      p1+=6
      if (p1>height-35) p1=height-35
    }
    if (keyIsDown(38)){
      p2-=6
      if (p2<height/3) p2=height/3
    }
    if (keyIsDown(40)){
      p2+=6
      if (p2>height-35) p2=height-35
    }
    rect(bX,bY,4,4);
    if(wT!=60) {
      wT++
    }else{
    bX+=bXM*7
    bY+=bYM*7
    }
    //console.log(pB1)
    if (bX>=14&&bX<=19 && bY<=pB1 && bY>=p1){
      bXM*=-1
      if (keyIsDown(83)&& bYM!=2) bYM+=1
      if (keyIsDown(87)&& bYM!=-2) bYM-=1
    }
    if (bX<=width-14&&bX>=width-19-4 && bY<=pB2 && bY>=p2){
      bXM*=-1
      if (keyIsDown(40)&& bYM!=2) bYM+=1
      if (keyIsDown(38)&& bYM!=-2) bYM-=1
    }
    if (bY>height){
      while (bY>height){
        bY-=1
        if (1/bYM<0) bX+=1/bYM
        else bX-=1/bYM
      }
      bYM*=-1
    }
    if (bY<height/3){
      while (bY<height/3){
        bY+=1
        if (1/bYM<0) bX-=1/bYM
        else bX+=1/bYM
      }
      bYM*=-1
    }
    if (bX<0){
      s2+=1
      gameState=2
    }
    if (bX>width){
      s1+=1
      gameState=2
    }
    if(s1>=11 && s1>=s2+2){
      gameState=3
      vict=0
    }
    if(s2>=11 && s2>=s1+2){
      gameState=3
      vict=1
    }
  }else if(gameState==2)/*reset variables after point scored*/{
    pY=height*2/3
    bX=(width/2)-2
    bY=height*(2/3)
    p1=pY-14
    p2=pY-14
    pB1=p1+35
    pB2=p2+35
    netY=height/3
    bYM=0
    bXM=random(sBV);
    gameState=1
    wT=0
  }else if(gameState==3)/*reset variable after the game ends*/{
    pY=height*2/3
    bX=(width/2)-2
    bY=height*(2/3)
    p1=pY-14
    p2=pY-14
    pB1=p1+35
    pB2=p2+35
    netY=height/3
    bYM=0
    bXM=random(sBV);
    gameState=0
    wT=0
    s1=0
    s2=0
  }
}
