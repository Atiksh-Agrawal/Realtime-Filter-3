noseX = 0;
noseY = 0; 

function preload() {
clown_nose = loadImage('https://i.postimg.cc/hvgJgfpg/mustache.png');
}

function setup() {
  canvas = createCanvas(300 ,300);
  canvas.position(525,300);
 // canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  
  posenet = ml5.poseNet(video, modelLoaded);
  posenet.on('pose',gotPoses);
}


function Take_snap() {
  save("Fillterd.png");
}

function modelLoaded() {
  console.log("posenet initialized")
}

function gotPoses(results){
  
  console.log(results);
  if(results.length > 0){
   console.log("nose x =" + results[0].pose.nose.x);
   console.log("nose y =" + results[0].pose.nose.y);
   noseX = results[0].pose.nose.x - 15;
   noseY = results[0].pose.nose.y - 15 + 20;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  //fill(255,0,0);
  //stroke(255,0,0);
  //circle(noseX , noseY ,20);
  image(clown_nose,noseX,noseY,40,40);
}