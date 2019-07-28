// 用数组布局失败了，后面再继续研究吧；
var scene = document.getElementById("scene");
var hammer = document.getElementById("hammer");
var score = document.getElementById("score");
var start = document.getElementById("start");
var time = document.getElementById("time");
// 分数
var scoreNum = 0;
// 地鼠生成计时器
var mouseLoop = null;
// 地鼠出现时间
var loopTime = 20;
// 地鼠初始位置
var initTop = 102;
// 地鼠终点位置
var endTop = 0;
// 地鼠移动过程当前位置
var nowTop = initTop;
// 地鼠等待时间
var waitTime = 0;
// 地鼠最大等待时间
var maxWaitTime = 400;
// 地鼠洞穴数组
var holeArr = [];
// 地鼠数组
var mouseArr = [];
// 地鼠标记
var mouseId = 0;
// 防止多次点击同一个地鼠
var flag = true;
// 计时器
var timer = null;
// 倒计时时长
var count = 60;
window.onload = function () {
    start.onclick = function () {
        // 初始化函数
        init();
        // 锤子落下
        scene.onmousedown = function () {
            // map.style.cursor = 'url("./image/hammer2.png"),auto';
            hammer.src = "./image/hammer2.png";
        };
        // 锤子抬起
        scene.onmouseup = function () {
            // map.style.cursor = 'url("./image/hammer1.png"),auto';
            hammer.src = "./image/hammer1.png";
        }
        // 锤子跟随鼠标移动
        scene.onmousemove = function (e) {
            var x = e.clientX;
            var y = e.clientY;
            hammer.style.top = y + "px";
            hammer.style.left = x + "px";
        }
        // 打击地鼠
        scene.onclick = function (e) {
            var x = e.clientX;
            var y = e.clientY;
            var x1 = mouseArr[mouseId].offsetLeft + holeArr[mouseId].offsetLeft;
            var x2 = x1 + mouseArr[mouseId].offsetWidth;
            var y1 = mouseArr[mouseId].offsetTop + holeArr[mouseId].offsetTop;
            var y2 = y1 + holeArr[mouseId].offsetTop + holeArr[mouseId].offsetHeight;
            if (x > x1 && x < x2 && y > y1 && y < y2) {
                flag = false;
                mouseArr[mouseId].src = "./image/mouse2.png";
                scoreNum++;
                score.innerText = scoreNum;
            }
        }
    }
}
// 执行厨师换函数
function init() {
    create();
    btime();
}
// 倒计时
function btime(){
    time.innerText = "01 : 00"
    tim = setInterval(function(){
        if(count <= 0){
            clearInterval(tim);
            clearInterval(mouseLoop);
            alert("最终得分：" + scoreNum);
            window.location.reload();
        }
        count--;
        if(count < 10){
            count = "0"+count;
        }        
        time.innerText ="00 :" + count; 
    },100);
}

function create() {
    // 遍历得到鼠洞和地鼠数组
    for (var i = 0; i < 9; i++) {
        holeArr[i] = document.getElementById("hole" + (i + 1));
        mouseArr[i] = holeArr[i].getElementsByTagName("img")[0];
    }
    // 地鼠出现的随机位置
    timer = setInterval(function () {
        if (mouseLoop == null) {
            mouseId = parseInt(Math.random() * 9);
            mouseArr[mouseId].src = "./image/mouse1.png";
            nowTop = initTop;
            waitTime = 0;
            mouseLoop = setInterval(mouseShow, loopTime);
        }
    }, 20);
}

// 地鼠出现/消失
function mouseShow() {
    if (nowTop > endTop) {
        nowTop -= 4;
    }
    if (nowTop < endTop) {
        nowTop = endTop;
    }
    if (nowTop == endTop) {
        if (waitTime < maxWaitTime) {
            waitTime += loopTime;
        }
        if (waitTime >= maxWaitTime) {
            nowTop = initTop;
            clearInterval(mouseLoop);
            mouseLoop = null;
        }
    }
    mouseArr[mouseId].style.top = nowTop + "px";
}