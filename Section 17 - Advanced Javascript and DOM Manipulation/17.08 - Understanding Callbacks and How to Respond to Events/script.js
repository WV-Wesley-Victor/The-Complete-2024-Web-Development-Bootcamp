document.querySelector(".title").addEventListener("click", function (event) {
    console.log(event);
    console.log(event.type);
});

function anotherAddEventListener(typeOfEvent, callBack) {
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfkeypress: 2,
    };
    if (eventThatHappened.eventType === typeOfEvent) {
        callBack(eventThatHappened);
    }
}

anotherAddEventListener("keypress", function (event) {
    console.log(event);
    console.log(event.eventType);
});
