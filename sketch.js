let startDate;
let dbFile;
let state;
let i = 0;

let joke = ['Oh my god, I love tea', 'Is there anything better than Tea?', 'Guys, Guys, Guys Tea!', 'Holy Shit tea time is coming', 'This is to much I can hardly wait', 'Earl Grey', 'Peppermint', 'English Breakfast', 'Tea, Tea, Tea!', 'Hot Water + Sugar + Teabag = Amazing', 'Please I need tea!', 'Give me Tea and I will marry you!', 'Mr T knows what he wants', 'I want an Avagadros constant worth of Tea', 'With Milk or Without?', 'To Tea or Not to Tea?', 'Warm, sweet, delicious. Tea.', 'If its Tea you want, its tea you will get', 'Tea keeps on falling on my head', 'You have my Sword! and my Tea!', 'Herbal Vs White. Showdown! FIGHT!']

let j = 0;

let rndJoke;
/*
var xhr = new XMLHttpRequest();
xhr.open("POST", 'http://db.originalone.cloud/api/highscores/add', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
name: 'time', score: '8', game: 'test'
}));
*/

function setup() {

    createCanvas(1080,600)
    startDate = new Date('2020', '6' , '25');
    console.log(startDate);
    rndJoke = Math.floor(Math.random() * joke.length);
    
}

function draw() {
    if(i == 31){
        i = 0
    }

    if(j == 300){
        j = 0
    }
    j = j + 1;
    i = i + 1;



    background(255);
    currentDate = new Date();

    
    let startTime = startDate.getTime();
    let time = currentDate.getTime();

    

    let TimeSince = time - startTime;
    let TimeSinceSeconds = TimeSince/1000;
    let TimeSinceMinutes = TimeSinceSeconds/60;
    let TimeSinceHours = TimeSinceMinutes/60;

    
    
    let NumberOfHours = Math.floor(TimeSinceHours);

    let RemoveMinutes = (NumberOfHours) * 60;
    
    let TimeCounter = TimeSinceMinutes - RemoveMinutes;

    
    if((60 - TimeCounter) < 5){
        state = 'closeTo';
    } else if((60 - TimeCounter) > 59){
        state = 'teaTime';
    } else {
        state = 'normal';
    }

    if(j == 1){
        rndJoke = (Math.floor(Math.random() * joke.length))
    }
    
    if(state == 'normal'){
        fill(0);
        textSize(30);
        text('Tea Time Countdown', width/2 - 30, height*0.1);
        textSize(40);
        text('Tea Time in:', width/2, height*0.3);
        textSize(50);
        text(60 - Math.floor(TimeCounter)  + ' Minutes', width*0.3, height*0.5);
        text(60 - Math.floor(((TimeCounter) - (Math.floor(TimeCounter))) * 60) + ' Seconds', width*0.67,height*0.5)
        textSize(25);
        text(joke[rndJoke], width*0.3, height*0.7);
    }
    
    if(state == 'closeTo'){
        fill(0);
        textSize(30);
        text('Tea Time Countdown', width/2 - 30, height*0.1);
        textSize(40);
        text('Get Excited Boys!!', width/2, height*0.3);
        textSize(50);
        text(60 - Math.floor(TimeCounter)  + ' Minutes', width*0.3, height*0.5);
        text(60 - Math.floor(((TimeCounter) - (Math.floor(TimeCounter))) * 60) + ' Seconds', width*0.67,height*0.5)
        textSize(25);
        text(joke[rndJoke], width*0.3, height*0.7);
    }

    if(state == 'teaTime'){
        textSize(60);

        if(i > 15){
            fill(0)
         } else {
            fill(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256))
        }
        
        text("It's Fucking Tea Time!", width*0.4, height*0.5);
    }
   
}


