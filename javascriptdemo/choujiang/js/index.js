var oUl = document.getElementsByClassName("list")[0];
var start = document.getElementsByClassName("start")[0];
var oLi = oUl.getElementsByTagName("li");
var result = document.getElementsByClassName("result")[0];
var refresh = document.getElementsByClassName("refresh")[0];
var arr = ["京东","阿里巴巴","小米","魅族","华为","oppo","百度","滴滴出行","新浪","腾讯","微信","苹果","谷歌","微软","淘宝"];
var total = 15;
var timer = null;
var index = 0;
var num = 0;
//初始化函数
function init() {
    create();
    bindEvent();
}
init();
//抽奖画面创建函数
function create(){
    var str = '';
    for (var i = 0; i < total; i++) {
        if(i < 10){
            i = "0" + i;
        }
        str += '<li class = "item" style = "transform:rotate(' + i * 24 + 'deg)">\
                    <span class = "iconfont" style = "transform:rotate(' + i *(-24)+ 'deg)">&#xe6'+ i +';</span>\
                </li>';
    }
    oUl.innerHTML = str;
}
// 事件集合
function bindEvent(){
    start.onmousedown = function(){
        location.reload();
        start.style.transform = "scale(0.8)";
    }
    start.onmouseup = onMouse;
    function onMouse(){
        start.style.transform = "scale(1)";
        ranNum =  Math.floor(Math.random() * 15);
        maxNum = 15 * 5 + ranNum; 
        around();
    }
}
// 抽奖盘转动
function around(){
    timer = setInterval(run,200);
}
//定时器
function run(){
    oLi[index].className = "item";
    index = index >= 14 ? 0 : index + 1;
    oLi[index].className = "item active";
    num++;
    if(num >= maxNum){
        clearInterval(timer);
        result.innerHTML = arr[ranNum];
        return;
    }
    if( num == 6){
        clearInterval(timer);
        timer = setInterval(run,50);
    } else if( num == 75){
        clearInterval(timer);
        timer = setInterval(run,100);
    }
}