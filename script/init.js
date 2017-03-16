/*  DISPLAY THE TAGLINE ON THE WELCOME SCREEN  */
function loadResources(object) {
    var curMarginTop = object.style.marginTop.substr(0, object.style.marginTop.length - 2);
    $(object).animate({
        marginTop: curMarginTop - 20
    }, 1000, function() {
        var paraNode = document.createElement("p"),
            textNode = document.createTextNode("Statistics of Clash of Clans"),
            parent = object.parentElement;
        
        paraNode.style.display = "none";
        paraNode.setAttribute("id", "subline");
        paraNode.appendChild(textNode);
        parent.appendChild(paraNode);
        $(paraNode).fadeIn();
    });
}

/*  CREATE WELCOME SCREEN  */
function welcomeWindow() {
    var windowHeight = $(window).innerHeight();
    var titleImageUrl = "http://cocland.com/wp-content/uploads/2015/04/Clash-of-Clans-Logo.png";

    var titleImage = document.createElement("img");
    titleImage.setAttribute("src", titleImageUrl);
    titleImage.style.height = "100px";
    titleImage.style.display = "none";
    titleImage.style.marginTop = parseInt(windowHeight / 2 - $(titleImage).height() / 2 - 40) + "px";

    var title = document.getElementById("title-image");
    title.appendChild(titleImage);

    titleImage.onload = function() {
        $(titleImage).fadeIn("slow");
        loadResources(titleImage);
    };
    return titleImage;
}

/*  ANIMATE THE WELCOME SCREEN TO TITLE IMAGE  */
function animateTitle(titleImage) {
    
    var background = document.getElementsByClassName("web-bg")[0],
        bgKey = 0,
        bgArray = [
            'http://wallpapercave.com/wp/wp1808760.jpg',
            'http://hdqwalls.com/download/hog-rider-clash-of-clans-po-1600x900.jpg'
        ];

    var paraNode = document.getElementById("subline");
    //  FADE OUT THE TAGLINE
    $(paraNode).fadeOut("slow", function(){
        var windowWidth = $(window).innerWidth(),
            animatedHeight = "75px";
        
        $(titleImage).animate({
            marginTop:0,
            height: animatedHeight
        }, 2000, function() {

            var navbar = document.getElementById("navbar");
            background.style.background = "url(" + bgArray[bgKey++] + ") no-repeat center center scroll";
            $(background).fadeIn(1000);

            setInterval(function() {
                if(bgKey == bgArray.length) bgKey = 0;
                background.style.background = "url(" + bgArray[bgKey++] + ") no-repeat center center scroll";
            }, 8000);
            $(navbar).slideDown(500);
        });    
    });    
}

$(document).ready(function() {
    var titleImage = welcomeWindow();
    if(titleImage) {
        var sec = 0;
        setInterval(function () {
            ++sec;
            if(sec === 1500) {
                clearInterval();
                animateTitle(titleImage);
            }
        }, 1);
    }
});