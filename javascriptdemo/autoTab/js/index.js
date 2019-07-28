/**
 * 功能：
 * 1. 正常情况下自动切换图片
 * 2. 鼠标移入时跟随鼠标进行切换
 * 3. 鼠标移出，在当前图片处继续自动切换，而不是从头开始。
 */
var pointer = document.getElementsByClassName("pointer")[0];
var left = document.getElementsByClassName("left")[0];
var leftImg = document.getElementsByClassName("left")[0].getElementsByTagName("img");
var rightImg = document.getElementsByClassName("right")[0].getElementsByTagName("img");
// 小图索引
var num = 0;
// 初始定义一个空的计时器
var timer = null;
// 初始化函数
function init() {
    bindEvent();
    auto();
    manuTab();
}
init();
//鼠标事件集合
function bindEvent() {
    left.onmouseover = function () {
        clearInterval(timer);
        manuTab();
    }
    left.onmouseout = function () {
        auto();
    }
}

//图片展示自动切换
function auto() {
    timer = setInterval(function () {
        rightImg[num].className = '';
        num++;
        if (num > 2) {
            num = 0;
        }
        rightImg[num].className = 'active';
        pointer.style.top = num * 73 + 'px';
    }, 1500);
}
// 图片跟随鼠标切换
function manuTab() {
    for (var i = 0; i < leftImg.length; i++) {
        leftImg[i].index = i;
        leftImg[i].onmouseover = function () {
            pointer.style.top = this.index * 73 + 'px';
            for (var i = 0; i < rightImg.length; i++) {
                if (i == this.index) {
                    rightImg[i].className = 'active';
                } else {
                    rightImg[i].className = '';
                }
            }
        }
        leftImg[i].onmouseout = function () {
            // 将移出时的索引值赋值给num,当鼠标移开后，继续从此处运动。
            num = this.index;
        }
    }
}