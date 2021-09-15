function setup(){
canvas=createCanvas(450,400)
video=createCapture(VIDEO)
canvas.center()
video.hide()          
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)
}
song1=""
song2=""
function preLoad(){
song1=loadSound("music.mp3")
song2=loadSound("favourite.mp3")
}
function play(){
song.play()
song.setVolume(1)
song.rate(1)
}
rightWristX=0
rightWristY=0
leftWristX=0
leftWristY=0
function draw(){
image(video,0,0,450,400)
}
function modelLoaded(){
    console.log("modelLoaded")
}
function gotPoses(results){
  if (results.length>0) {
      console.log(results)
      rightWristX=results[0].pose.rightWrist.x
      rightWristY=results[0].pose.rightWrist.y
      leftWristX=results[0].pose.leftWrist.x
      leftWristY=results[0].pose.leftWrist.y
    }  
}