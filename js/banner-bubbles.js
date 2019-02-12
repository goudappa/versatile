// background scroll

; (function () {
    $.fn.autoBackgroundScroll = function (options) {

        var opts = $.extend({}, $.fn.autoBackgroundScroll.defaults, options);
        var $backslider = $(this);

        var duration = opts.duration;
        var speed = opts.speed;
        var imageWidth = opts.imageWidth;
        var imageHeight = opts.imageHeight;
        var direction1 = opts.direction1;
        var direction2 = opts.direction2;


        var posX = 0;
        var posY = 0;


        scroll(duration, speed, direction1, direction2);


        function scroll(duration, speed, direction1, direction2) {
            setInterval(function () {
                if (direction1 == 'right') {
                    moveRight();

                    if (direction2 == 'top') {
                        moveTop();
                    }

                    if (direction2 == 'bottom') {
                        moveBottom();
                    }

                } else if (direction1 == 'left') {
                    moveLeft();

                    if (direction2 == 'top') {
                        moveTop();
                    }

                    if (direction2 == 'bottom') {
                        moveBottom();
                    }

                } else if (direction1 == 'bottom') {
                    moveBottom();

                    if (direction2 == 'right') {
                        moveRight();
                    }

                    if (direction2 == 'left') {
                        moveLeft();
                    }

                } else if (direction1 == 'top') {
                    moveTop();

                    if (direction2 == 'right') {
                        moveRight();
                    }

                    if (direction2 == 'left') {
                        moveLeft();
                    }

                }

                $backslider.css('background-position', posX + 'px ' + posY + 'px');


                function moveTop() {
                    if (posY <= -imageHeight) {
                        posY = 0;
                    }
                    posY -= speed;
                }


                function moveRight() {
                    if (posX >= imageWidth) {
                        posX = 0;
                    }
                    posX += speed;
                }


                function moveBottom() {
                    if (posY >= imageHeight) {
                        posY = 0;
                    }
                    posY += speed;
                }

                function moveLeft() {
                    if (posX <= -imageWidth) {
                        posX = 0;
                    }
                    posX -= speed;
                }

            }, duration);
        }

    }

    $.fn.autoBackgroundScroll.defaults = {
        direction1: 'right',
        direction2: '',
        duration: 1,
        speed: 0.5
    };

})(jQuery);

$(function () {
    $('.banner-scroll').autoBackgroundScroll({
        speed: 0.1,
        direction1: 'bottom',
        direction2: 'left',
        imageWidth: 2000,
        imageHeight: 2000
    });
});
// background scroll
//canvas effect
/*!
// Snow.js - v0.0.3
// kurisubrooks.com
*/

// Amount of Snowflakes
var snowMax = 60;

// Snowflake Colours
var snowColor = ["#ffffff91", "#ffffff91"];

// Snow Entity
var snowEntity = "&#x2022;";

// Falling Velocity
var snowSpeed = 0.2;

// Minimum Flake Size
var snowMinSize = 25;

// Maximum Flake Size
var snowMaxSize = 50;

// Refresh Rate (in milliseconds)
var snowRefresh = 50;

// Additional Styles
var snowStyles = "cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;";

/*
// End of Configuration
// ----------------------------------------
// Do not modify the code below this line
*/

var snow = [],
    pos = [],
    coords = [],
    lefr = [],
    marginBottom,
    marginRight;

function randomise(range) {
    rand = Math.floor(range * Math.random());
    return rand;
}

function initSnow() {
    var snowSize = snowMaxSize - snowMinSize;
    marginBottom = document.body.scrollHeight - 5;
    marginRight = document.body.clientWidth - 15;

    for (i = 0; i <= snowMax; i++) {
        coords[i] = 0;
        lefr[i] = Math.random() * 15;
        pos[i] = 0.03 + Math.random() / 10;
        snow[i] = document.getElementById("flake" + i);
        snow[i].style.fontFamily = "inherit";
        snow[i].size = randomise(snowSize) + snowMinSize;
        snow[i].style.fontSize = snow[i].size + "px";
        snow[i].style.color = snowColor[randomise(snowColor.length)];
        snow[i].style.zIndex = 1000;
        snow[i].sink = snowSpeed * snow[i].size / 5;
        snow[i].posX = randomise(marginRight - snow[i].size);
        snow[i].posY = randomise(2 * marginBottom - marginBottom - 2 * snow[i].size);
        snow[i].style.left = snow[i].posX + "px";
        snow[i].style.bottom = snow[i].posY + "px";
    }

    moveSnow();
}

function resize() {
    marginBottom = document.body.scrollHeight - 5;
    marginRight = document.body.clientWidth - 15;
}

function moveSnow() {
    for (i = 0; i <= snowMax; i++) {
        coords[i] += pos[i];
        snow[i].posY += snow[i].sink;
        snow[i].style.left = snow[i].posX + lefr[i] * Math.sin(coords[i]) + "px";
        snow[i].style.bottom = snow[i].posY + "px";

        if (snow[i].posY >= marginBottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginRight - 3 * lefr[i])) {
            snow[i].posX = randomise(marginRight - snow[i].size);
            snow[i].posY = 0;
        }
    }

    setTimeout("moveSnow()", snowRefresh);
}

for (i = 0; i <= snowMax; i++) {
    document.write("<span id='flake" + i + "' style='" + snowStyles + "position:absolute;top:-" + snowMaxSize + "'>" + snowEntity + "</span>");
}

window.onresize = resize;
window.onload = initSnow;
// canvas effect
