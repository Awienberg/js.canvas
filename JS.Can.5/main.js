'use strict';

var $ = function (foo) {
    return document.getElementById(foo);
}

//Create Canvas
let createCanvas = function () {
    let canvas = $("myCanvas0");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        
        ctx.fillStyle = "silver";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

window.addEventListener("load", createCanvas);

//Create Dices
let dices = function () {
    let canvas = $("myCanvas0");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "#fff";        // fill color
        ctx.fillRect(10, 10, 80, 80);  // fill rectangle
        ctx.beginPath();                // begin new path
        ctx.arc(30, 70, 7, 0, Math.PI * 2, true);
                                        // describe arc
        ctx.fillStyle = "#000";         // set fill color
        ctx.fill();                     // fill the path
        ctx.stroke();

        ctx.beginPath();                // begin new path
        ctx.arc(70, 30, 7, 0, Math.PI * 2, true);
                                        // describe arc
        ctx.fillStyle = "#000";         // set fill color
        ctx.fill();                     // fill the path
        ctx.stroke();

        ctx.fillStyle = "#fff";         // fill color
        ctx.fillRect(100, 10, 80, 80);  // fill rectangle

        ctx.fillStyle = "#fff";         // fill color
        ctx.fillRect(190, 10, 80, 80);  // fill rectangle
        
        ctx.fillStyle = "#fff";         // fill color
        ctx.fillRect(280, 10, 80, 80);  // fill rectangle

        ctx.fillStyle = "#fff";         // fill color
        ctx.fillRect(370, 10, 80, 80);  // fill rectangle
    }
}

window.addEventListener("load", dices);

let play = function () {
    
}
