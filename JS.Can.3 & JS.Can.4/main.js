'use strict';

var $ = function (foo) {
    return document.getElementById(foo);
}

function createCanvas() {
    var height = $("height").value;
    var width = $("width").value;
 
    var canvas = height * width;
 
    $("theRoom").innerHTML = canvas;
}

// Canvas Object
let Canvas = {
    init(canvasId, color) {
        this.canvas = $(canvasId);
        this.context = this.canvas.getContext("2d");
        this.color = color;
        this.prep();
    },
    prep() {
        this.context.fillStyle = this.color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    },
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    getContext() {
        return this.context;
    },
    getHeight() {
        return this.canvas.height;
    },
    getWidth() {
        return this.canvas.width;
    }
}

// Shape Object
let Shape = {
    init(cv, x, y, width, height, color) {
        this.ctx = cv.context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    },

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

//Create Canvas & Shapes
let initialize = function () {
    // create canvas object
    let mycv = Object.create(Canvas);
    mycv.init('toolBox', '#000');
    // create objects
    // put in array
    let shape1 = Object.create(Shape);
    shape1.init(mycv, 200, 40, 80, 40, 'blue');
    var shape2 = Object.create(Shape);
    shape2.init(mycv, 200, 100, 80, 60, 'green');
    var shape3 = Object.create(Shape);
    shape3.init(mycv, 240, 180, 40, 40, 'pink');
    var shape4 = Object.create(Shape);
    shape4.init(mycv, 200, 250, 40, 100, 'yellow');
    //cirle
    var shape5 = Object.create(Shape);
    shape5.init(mycv, 200, 90, 50, 0, Math.PI * 1, false, 'red');

    shapes.push(shape1);
    shapes.push(shape2);
    shapes.push(shape3);
    shapes.push(shape4);
    shapes.push(shape5);
    paint(mycv, shapes);
}

let paint = function (cv, arr) {
    // loop through array of shapes and draw
    for (var i = 0; i < arr.length; i++) {
        arr[i].draw();
    }
}

let shapes = [];

window.addEventListener('load', initialize);