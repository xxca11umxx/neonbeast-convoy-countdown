console.log("events loaded:", EVENTS);

let EVENT = null;


function loadEvent() {

    const now = new Date();


    const upcoming = EVENTS
        .filter(event => new Date(event.date) > now)
        .sort((a, b) =>
            new Date(a.date) - new Date(b.date)
        );


    EVENT = upcoming[0];


    if (!EVENT) {

        document.getElementById("title").innerHTML =
        "NO UPCOMING CONVOYS";

        return;
    }



    document.getElementById("title").innerHTML =
    EVENT.title;


    document.getElementById("server").innerHTML =
    EVENT.server;


    document.getElementById("route").innerHTML =
    EVENT.route;


    document.getElementById("eventButton").href =
    EVENT.link;


    if (EVENT.banner) {

        document.getElementById("banner").src =
        EVENT.banner;

    }

}



function updateCountdown() {


    if (!EVENT) return;



    const now = new Date();

    const eventDate = new Date(EVENT.date);

    const difference = eventDate - now;



    if (difference <= 0) {

        document.getElementById("countdown").innerHTML =
        "CONVOY STARTED!";


        loadEvent();

        return;

    }



    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );



    document.getElementById("days").innerHTML =
    days;


    document.getElementById("hours").innerHTML =
    hours;


    document.getElementById("minutes").innerHTML =
    minutes;


    document.getElementById("seconds").innerHTML =
    seconds;

}



loadEvent();

updateCountdown();

setInterval(updateCountdown,1000);
