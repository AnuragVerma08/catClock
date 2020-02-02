var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime = 999;
var evening = 18;
var night = 23;
// Getting it to show the current time on the page
const showCurrentTime = () => {
    // display the string on the webpage
    let clock = document.getElementById('clock');

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

    // Set hours
    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    let clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
const updateClock = () => {
    let time = new Date().getHours();
    let messageText;
    let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

    let timeEventJS = document.getElementById("timeEvent");
    let lolcatImage = document.getElementById('lolcatImage');

    if (time == partytime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's party!";
    }
    else if (time == wakeuptime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Wake up!";
    }
    else if (time == lunchtime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have some lunch!";
    }
    else if (time == naptime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Take Nap!";
    }
    else if (time < noon) {
        image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
        messageText = "Good morning!";
    }
    else if (time < evening) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Good afternoon!";
    }
    else if (time < night) {
        image = "https://i.imgur.com/C7Zfyruh.jpg";
        messageText = "Good evening!";
    }
    else {
        image = "https://xdesktopwallpapers.com/wp-content/uploads/2012/01/Catty%20Sleeping%20At%20Night%20Face%20Closeup.jpg";
        messageText = "Good night!";
    }

    console.log(messageText);
    timeEventJS.innerText = messageText;
    lolcatImage.src = image;

    showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

const partyEvent = () => {
    if(partytime === 777){
        partytime = new Date().getHours();
        partyButton.innerText = "Party Over!";
        partyButton.style.backgroundColor = "#0A8DAB";
    }
    else {
        partytime = 777;
        partyButton.innerText = "Party Time!";
        partyButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();


// Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

const wakeUpEvent = () => {
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

const lunchEvent = () => {
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector = document.getElementById("napTimeSelector");

const napEvent = () => {
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);


// Activates Night-Time selector
var nightTimeSelector = document.getElementById("nightTimeSelector");

const nightEvent = () => {
    night = nightTimeSelector.value;
};

nightTimeSelector.addEventListener("change", nightEvent);