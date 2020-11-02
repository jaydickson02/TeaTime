let startDate;
let state;
let startTime;
currentDate = new Date();

function drawMain(TimeCounter){
    background(255);
    fill(0);
    textSize(50);
    text(TimeCounter  + ' Minutes  ' + Math.floor(((TimeCounter) - (Math.floor(TimeCounter))) * 60) + ' Seconds', width*0.10, height*0.45);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function setup() {
    createCanvas(windowWidth, windowHeight);
    startTime = currentDate.getTime() + (3600*1000);
}

function draw() {
    
    
    
    
    let TimeSince = (currentDate.getTime() - startTime);

    let TimeSinceSeconds = TimeSince/1000;
    let TimeSinceMinutes = TimeSinceSeconds/60;
    let TimeSinceHours = TimeSinceMinutes/60;
    
    let TimeCounter = 60 - (TimeSinceMinutes);

    //Status Set
    state = 'normal';
    
    //Standard State
    if(state == 'normal'){
        textSize(40);
        text('Tea Time in:', width*0.10, height*0.3);
        drawMain(TimeCounter);
    }
   
}


