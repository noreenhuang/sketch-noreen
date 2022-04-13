var x0=670;
var y0=300;
var dx=2;
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(6, 8, 82);
  strokeWeight(3);
  
  //脸
  fill(255, 252, 227);
  ellipse(400,400,380,350);
  fill(0);

  //刘海
  fill(0);
  arc(400,380,320,300,-PI,0,OPEN);

   //右胳膊
  push();
  fill(0);
  translate(490,720);
  rotate(dx/PI);
  translate(-490,-720);
  beginShape();
  vertex(470,720);
  bezierVertex(650,600,700,500,700,500);
  bezierVertex(750,520,730,530,720,550);
  bezierVertex(650,650,600,700,490,770);
  endShape();

  //右手
  fill(255, 252, 227);
  bezier(700,500,710,480,740,480,735,525);
  pop();
  
  //左胳膊
  push();
  fill(0);
  translate(310,720);
  rotate(dx/PI);
  translate(-310,-720);
  beginShape();
  vertex(330,700);
  bezierVertex(150,600,100,500,100,500);
  bezierVertex(50,520,70,530,80,550);
  bezierVertex(150,650,200,700,310,770);
  endShape();
  
  //左手
  fill(255, 252, 227);
  bezier(100,500,90,480,60,480,65,525);
  pop();

  //身子
  fill(0);
  triangle(400,590,220,1000,580,1000);

  //脖子
  strokeWeight(0);
  fill(255, 252, 227);
  rect(370,570,60,60);
  strokeWeight(3);
  line(370,585,370,630);
  line(430,585,430,630);

  //领子
  strokeWeight(3);
  fill(255,239,219);
  arc(400,630,60,40,0,PI,OPEN);

  //眼睛
  fill(255);
  ellipse(330,420,50,50);  //左眼白
  ellipse(470,420,50,50);  //右眼白
  fill(0);
  ellipse(330,420,20,20);  //左眼珠‘
  ellipse(470,420,20,20);  //右眼珠
  
  //眉毛
  //line(300,380,350,380);
  noFill();
  bezier(295,390,310,370,340,370,355,390);  //左眉毛
  bezier(505,390,490,370,460,370,445,390);  //右眉毛
  //嘴巴
  fill(179, 16, 38);
  arc(400,500,100,90,0,PI,CHORD);
  //球
  push();
  translate(x0,y0);
  rotate(dx*x0/(100*PI));
  translate(-x0,-y0);
  fill(0);
  ellipse(x0,y0,150,150);
  x0+=dx;
  y0=0.0034*x0*x0-2.72*x0+596.14;
  if(x0>=width||x0<=0)
  dx=-dx;


  
}