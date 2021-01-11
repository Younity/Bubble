var button_bubble = document.getElementsByClassName('bubble')[0];
var button_line = document.getElementsByClassName('line')[0];
var button_clear = document.getElementsByClassName('clear')[0];
// var button_save = document.getElementsByClassName('save')[0];

var canvas = document.getElementsByClassName('main-canvas')[0];
var label_mouse_position = document.getElementsByClassName('position')[0];

canvas.addEventListener('mousemove', mousePosition);

function mousePosition(e){
    var x = e.clientX-22;
    var y = e.clientY-82;
    label_mouse_position.childNodes[0].nodeValue = x + ', ' + y;
}

var canvas_object = canvas.getContext('2d');
function newBubble(){
    canvas_object.lineWidth = 1;

    canvas_object.fillStyle = 'hsl(44, 100%, 50%)';
    canvas_object.beginPath();
    canvas_object.arc(375, 100, 60, 0, 2*Math.PI);
    canvas_object.fill();

    canvas_object.fillStyle = 'hsl(84, 100%, 50%)';
    canvas_object.beginPath();
    canvas_object.arc(200, 300, 60, 0, 2*Math.PI);
    canvas_object.fill();

    canvas_object.fillStyle = 'hsl(124, 100%, 50%)';
    canvas_object.beginPath();
    canvas_object.arc(550, 300, 60, 0, 2*Math.PI);
    canvas_object.fill();

    canvas_object.textAlign = "center";
    canvas_object.font = "bold 20px Courier";
    canvas_object.fillStyle = 'hsl(44, 100%, 50%)';
    canvas_object.fillText('三体', 375, 440);
}

function newLine(){
    canvas_object.lineWidth = 1;
    canvas_object.strokeStyle = 'hsl(84, 100%, 50%)';

    canvas_object.beginPath();
    canvas_object.moveTo(375, 100);
    canvas_object.lineTo(200, 300);
    canvas_object.lineTo(550, 300);
    canvas_object.lineTo(375, 100);
    canvas_object.stroke();
}

function clear(){
    canvas_object.fillStyle = "hsla(96, 100%, 59%, 0.096)";
    canvas_object.clearRect(0, 0, 750, 500);
}

button_bubble.addEventListener('click', newBubble);
button_line.addEventListener('click', newLine);
button_clear.addEventListener('click', clear);

var count = 0;
var text = ['心想事成', '美梦成真',
                '修行', '顿悟','境界',
                '马克思', '辩证法', '唯物论',
                '自我边界', '爱', '精神贯注', '倾听', '关注'];

canvas.onclick = function(e){
    var x = e.clientX-22;
    var y = e.clientY-82;

    canvas_object.lineWidth = 1;
    canvas_object.font = "bold 20px 楷书";
    canvas_object.fillStyle = "hsla(124, 100%, 30%, 0.96)";

    canvas_object.textAlign = "center";
    canvas_object.textBaseLine = "center";

    if (count <= 12) {
        canvas_object.fillText(text[count], x, y);
        count++;
    } else {
        count = 0;
    }
}