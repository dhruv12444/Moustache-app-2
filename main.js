function preload(){
}

function setup() 
{
    canvas = createCanvas(300,300);
    canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on ('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Posenet is Intiallizing');
}

function gotPoses()
{
    if(result.length > 0)
    {
        console.log(results);
        My_moustache_X = results[0].pose.nose.x;
        My_moustache_Y = results[0].pose.nose.y;
        console.log("my_moustache_x =" + My_moustache_X);
        console.log("my_moustache_y =" + My_moustache_Y);
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(my_moustache, My_moustache_X, My_moustache_Y, 30, 30);
}

function take_snapshot()
{
    save("My-moustache.png");
}