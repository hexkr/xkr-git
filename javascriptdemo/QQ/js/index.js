var ad = document.getElementsByClassName("ad-box")[0];
var close = document.getElementsByClassName("close")[0];
// 第一种效果：自下而上
window.onload = function() {
    // 在其他界面回退至首页面不再弹出广告
    if(performance.navigation.type == 2){
        ad.style.display = 'none';
        return;
    }
    ad.style.bottom = "0";
    close.onclick = function(){ 
        ad.style.bottom = "-230px";
    }
}
// 以下两种效果须在css种把代码进行相应释放
// 第二种效果
// window.onload = function(){
//     if(performance.navigation.type == 2){
//         ad.style.display = 'none';
//         return;
//     }
//     ad.style.transform = "scale(1) rotate(720deg)";
//     close.onclick = function(){
//         ad.style.transform = "scale(0) rotate(0deg)";
//     }
// }

//第三种效果 
// window.onload = function(){
//     if(performance.navigation.type == 2){
//         ad.style.display = 'none';
//         return;
//     }
//     ad.style.transform = "scale(1) rotate(1080deg)";
//     ad.style.right = "0";
//     ad.style.bottom = "0";
//     close.onclick = function(){
//         ad.style.transform = "scale(0) rotate(0deg)";
//     }
// }