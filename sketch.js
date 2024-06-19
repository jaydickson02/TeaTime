let startDate;
let state;
let j = 0;
let i = 0;
let rndJoke;
let img;
let sel;
let variance = 1;
let teatimeAuthorised;


let joke = ['Oh my god, I love tea', 'Is there anything better than Tea?', 'Guys, Guys, Guys Tea!', 'Holy Shit tea time is coming', 'This is to much I can hardly wait', 'Tea, Tea, Tea!', 'Hot Water + Sugar + Teabag = Amazing', 'Please I need tea!', 'Give me Tea and I will marry you!', 'Mr T knows what he wants', 'I want an Avagadros constant worth of Tea', 'With Milk or Without?', 'To Tea or Not to Tea?', 'Warm, sweet, delicious. Tea.', 'If its Tea you want, its Tea you will get', 'Tea keeps on falling on my head', 'You have my Sword! and my Tea!', 'Herbal Vs White. Showdown! FIGHT!', 'The more tea you give me the happier I will be', 'If you want tea, get tea', 'Its gonna be T-Riffic', 'Tea for me!', 'TTTTTTTTTTTTTTTTT', 'I will kill for Tea', 'Between Tea and Valhala. I choose Tea.', 'I want some tea so jucy sweeeeet', 'Say NO to Coffee, YES to Tea!', 'Vote Tea for President', 'So much beauty from such a small tea bag']


//Confetti
let confettiColor = [], confetti = [];

function drawMain(TimeCounter){
        image(img, width*0.4, height*0.4, 1000, 1000)
        fill(0);
        
        textSize(windowWidth * 0.05);
        text(Math.floor(TimeCounter) + ' Hours  ' + Math.floor((TimeCounter - Math.floor(TimeCounter)) * 60)  + ' Minutes  ' + Math.floor(((TimeCounter * 60) - (Math.floor(TimeCounter * 60))) * 60) + ' Seconds', width*0.10, height*0.45);
        textSize(windowWidth * 0.02);
        text(joke[rndJoke], width*0.10, height*0.6);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function preload() {
    img = loadImage('assets/teaCup.jpg');
}

function setup() {

    createCanvas(windowWidth, windowHeight)

    variance = getItem('variance');

    sel = createSelect();
    sel.position(windowWidth - 120, 10);
    sel.option('One Minute');
    sel.option('One Hour');
    sel.option('Two Hours');
    sel.option('Three Hours');
    sel.option('Six Hours');
    sel.option('Eight Hours');
    sel.option('Twelve Hours');
    sel.option('One Day');
    sel.changed(mySelectEvent);
    
    //Pick a joke
    rndJoke = Math.floor(Math.random() * joke.length);

    //Confetti for Tea time celebreation
    confettiColor = [color('#00aeef'), color('#ec008c'), color('#72c8b6')];

    for (let i = 0; i < 100; i++) {
     confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
    }

    teatimeAuthorised = getItem('teaAuth');

    storedTime = getItem('time');

    if(storedTime === null){

        currentDate = new Date().getTime();
        dateToStore = (currentDate/(1000*60*60)) + variance;

        storeItem('time', dateToStore)
    }
    
    
    
}

function mySelectEvent() {

    let timeInterval = sel.value();

    currentDate = new Date().getTime();

    switch(timeInterval) {
        case 'One Minute':
          state = 'teaTime'
          break;
        case 'One Hour':
          variance = 1;
          break;
        case 'Two Hours':
          variance = 2;
          break;
        case 'Three Hours':
          variance = 3;
          break;
        case 'Six Hours':
          variance = 6;
          break;
        case 'Eight Hours':
          variance = 8;
          break;
        case 'Twelve Hours':
          variance = 12;
          break;
        case 'One Day':
          variance = 24;
          break;  
        default:
          variance = 1;
      }
    
      dateToStore = (currentDate/(1000*60*60)) + variance
      teatimeAuthorised = false;
    
    storeItem('variance', variance)
    storeItem('time', dateToStore)
    storeItem('teaAuth', false)

  }

function draw() {
    

    //OMG i just realised this is how im counting how long before I switch the joke *Face Palm*
    if(j == 300){
        j = 0
    }
    j = j + 1;

    // This swithches the colours of the text during tea time
    if(i == 31){
        i = 0
    }
    i += 1



    background(255);
    textSize(22);
    fill(0);
    text('Tea Time Countdown', width*0.01, height*0.05);

    storedTime = getItem('time');
    
    currentDate = new Date();

    let time = currentDate.getTime();

    timeSeconds = time/1000
    timeMinutes = timeSeconds/60
    timeHours = timeMinutes/60

    

    //Loop untill stored time is greater than timeHours (this will ensure the countdown works even when the page is closed for periods longer than the teatime interval)
    if(timeHours > storedTime){
        
        updatedTime = storedTime + variance

        storeItem('time', updatedTime)

    }

    countdownHours = storedTime - timeHours
  
    TimeCounter = countdownHours

    
    // Don't remove the final else. It dosent look like it but it is important.
    if(TimeCounter < 0.085){
        state = 'closeTo';
        teatimeAuthorised = true;

        if(!teatimeAuthorised){
            storeItem('teaAuth', true);
        }
        
    } else if(TimeCounter > (variance - 0.085) && teatimeAuthorised){
        state = 'teaTime';

    } else if(TimeCounter < (variance - 0.085) && TimeCounter > 0.085){
        state = 'normal';

        teatimeAuthorised = true;

        if(!teatimeAuthorised){
            storeItem('teaAuth', true);
        }
        
    } else {
        state = 'normal';
    }


    if(j == 1){
        rndJoke = (Math.floor(Math.random() * joke.length))
    }
    
    if(state == 'normal'){
        textSize(windowWidth * 0.035);
        text('Tea Time in:', width*0.10, height*0.3);
        drawMain(TimeCounter);

        /*for(let a = 0; a < teaDrops.length; a++){
            teaDrops[a].draw();
            teaDrops[a].move();
        }*/

    }
    
    if(state == 'closeTo'){
        textSize(windowWidth * 0.035);
        text('OMG Get Excited PEOPLE!!', width*0.10, height*0.3);
        drawMain(TimeCounter)
        
    }

    if(state == 'teaTime'){
        textSize(windowWidth * 0.05);

        if(i > 15){
            fill(0)
         } else {
            fill(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256))
        }
        
        text("It's Freaking Tea Time!", width*0.3, height*0.5);

        for (let i = 0; i < confetti.length / 2; i++) {
            confetti[i].confettiDisplay();
        
            if (confetti[i].y > height) {
              confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
            }
          }
        
          for (let i = int(confetti.length / 2); i < confetti.length; i++) {
            confetti[i].confettiDisplay();
        
            if (confetti[i].y > height) {
              confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
            }

        
          }
    }
   
}


