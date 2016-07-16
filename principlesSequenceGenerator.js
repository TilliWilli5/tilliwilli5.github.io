var principles = [
    "TilliWilli Production",
    "and PandaHead studio",
    "presents", "From heart",
    "Awesome", "About future",
    "It'll make ur day",
    "Some super stuff",
    "and it will",
    "be...",
    "<i class=\"em em-panda_face\"></i>the Panda Head",
    "<i class=\"em em-panda_face\"></i>thx for watching",
    "<i class=\"em em-panda_face\"></i>one more time"
    ];
$(document).ready(function(){
    var currentPrinciples = Array.from(principles);
    var timer;
    $("#header h1")[0].onmouseenter = function(pEvent){
        if(currentPrinciples.length === 0)
                currentPrinciples = Array.from(principles);
        var currIndex = 0;
        pEvent.target.innerHTML = currentPrinciples[currIndex];
        currentPrinciples.splice(currIndex, 1);
        isActiveMouseBGMover = false;
        timer = setInterval(MoveBG, 40, 1, 0.0);
    };
    $("#header h1")[0].onmouseleave = function(pEvent){
        isActiveMouseBGMover = true;
        clearInterval(timer);
    }
    //Auto move BG when mouseover
    var theHeadBG = $("#header").children()[0];
    function MoveBG(pDeltaX, pDeltaY){
        var oldPosition = theHeadBG.style.backgroundPosition;
        var oldX, oldY;
        var newX, newY;
        if(oldPosition === "")
        {
            oldX = 0;
            oldY = 0;
        }
        else
        {
            oldX = parseFloat(oldPosition.split(" ")[0].replace("px",""));
            oldY = parseFloat(oldPosition.split(" ")[1].replace("px",""));
        }

        newX = oldX + pDeltaX;
        newY = oldY + pDeltaY;
        theHeadBG.style.backgroundPosition = `${newX}px ${newY}px`;
    }
});