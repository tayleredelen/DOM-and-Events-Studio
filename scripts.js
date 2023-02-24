// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {

    let altitude = 0; //declared a 0 to create as number, without this takeOff hit creates "1000010000" VS "20000"
    let rocketPosX = 0; //left, right
    let rocketPosY = 0; //up,down

//variables for button elements
    const takeOffButton = document.getElementById('takeoff'); //object gives takeoff button
    const landButton = document.getElementById('landing'); //object gives landing button
    const abortButton = document.getElementById('missionAbort'); //object gives abort button
    const leftButton = document.getElementById('left'); //object gives left button
    const rightButton = document.getElementById('right'); //object gives right button
    const upButton = document.getElementById('up'); //object gives up button
    const downButton = document.getElementById('down'); //object gives down button

//variables for userelements
    const flightStatus = document.getElementById('flightStatus'); //object changes to shuttle in flight when takeoff clicked
    const shuttleBackground = document.getElementById('shuttleBackground'); //object to change background color when takeoff clicked
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight'); //object to increase height when takeoff clicked
    const rocket = document.getElementById('rocket'); //object that gives rocket position

takeOffButton.addEventListener('click', function() { //click event listening for 
let shouldTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff."); //declare boolean variable, creates confirmation window message

if(shouldTakeoff) { //if yes all these things happen
    flightStatus.innerHTML = 'Shuttle in flight'; //changes message
    shuttleBackground.style.backgroundColor = 'blue'; //changes color
    altitude += 10000; //increases by 10000 if clicked
    spaceShuttleHeight.innerHTML = altitude; //altitude value after increase clicks
}
});


landButton.addEventListener('click', function() { //if yes all these things happen
    alert("The shuttle is landing. Landing gear engaged."); //alert message
    flightStatus.innerHTML = 'Shuttle has landed'; //changes message
    shuttleBackground.style.backgroundColor = 'green'; //changes color back to green
    spaceShuttleHeight.innerHTML = 0; //changes back to 0 if landed
});

abortButton.addEventListener('click', function() { //click event listening for 
    let shouldAbort = window.confirm("Confirm that you want to abort the mission."); //declare boolean variable, creates confirmation window message
    
    if(shouldAbort) { //if yes all these things happen
        flightStatus.innerHTML = 'Mission aborted'; //changes message
        shuttleBackground.style.backgroundColor = 'green'; //changes color back to green
        spaceShuttleHeight.innerHTML = 0; //changes back to 0 if aborted
    }
    });

document.addEventListener('click', function(event) { //checking for diff things that are clicked
    console.log(event.target.id) //target is object itself, properties of object after. shows button name clicked in console after clicking buttons

    if(event.target.id === 'left') { 
        rocketPosX -= 10; 
        rocket.style.marginLeft = rocketPosX + 'px'; // + 'px' makes it a string? in css height is set to 400 px (pixels) in javascript we do math on it's pixel value and then after the math we add px so it is a number and then px. I javascript world when you add string to number it turns into a string. parseInt turns string into value
    }

    if(event.target.id === 'right') {
        rocketPosX += 10;
        rocket.style.marginLeft = rocketPosX + 'px';
    }

    if(event.target.id === 'up' && altitude < 250000) {
        rocketPosY += 10;
        rocket.style.marginBottom = rocketPosY + 'px';
        altitude += 10000
        spaceShuttleHeight.innerHTML = altitude;
    }

    if(event.target.id === 'down' && altitude > 0) {
        rocketPosY -= 10;
        rocket.style.marginBottom = rocketPosY + 'px';
        altitude -= 10000
        spaceShuttleHeight.innerHTML = altitude;
    }


});


});