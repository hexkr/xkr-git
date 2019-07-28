var mask = document.getElementsByClassName("mask")[0];
var big = document.getElementsByClassName("big")[0];
var img = document.getElementsByTagName("img")[0];


window.onload = function () {
    // 拖拽遮罩层
    mask.onmousedown = function (e) {
        // 点击出现大图
        big.style.display = "block";
        var x = e.clientX;
        var y = e.clientY;
        var difX = x - mask.offsetLeft;
        var difY = y - mask.offsetTop;
        document.onmousemove = function (e) {
            var left = e.clientX - difX;
            var top = e.clientY - difY;
            // 判断mask移动的边界
            // 左边界
            if (left < 0) {
                left = 0;
            }
            // 右边界
            if (left > 200) {
                left = 200;
            }
            // 上边界
            if (top < 0) {
                top = 0;
            }
            // 下边界
            if (top > 200) {
                top = 200;
            }
            // mask位置
            mask.style.top = top + "px";
            mask.style.left = left + "px";
            // 计算大图的位置
            var imgLeft = -(left / 200) * 500;
            var imgTop = -(top / 200) * 500;
            img.style.left = imgLeft + "px";
            img.style.top = imgTop + "px";
        }
        // 鼠标抬起大图消失
        document.onmouseup = function (e) {
            big.style.display = "none";
            this.onmousedown = null;
            this.onmousemove = null;
        }
    }
}