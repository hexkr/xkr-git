var tabs = document.getElementsByClassName('tab')[0].getElementsByTagName("li");
var oUl = document.getElementsByClassName("seckill-goods")[0].getElementsByTagName("ul");
var seckill = document.getElementsByClassName("seckill-nav")[0];


for(var i = 0; i < tabs.length; i++ ){
    tabs[i].onclick = show;
}
function show(){
    for(var i = 0; i < tabs.length; i++){
        if(tabs[i] === this){
            tabs[i].className = "active";
            oUl[i].className = "clearfix show";
        }else{
            tabs[i].className = "";
            oUl[i].className = "clearfix";
        }
    }
}

window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset ||0;
    if (scrollTop >= 260) {
        seckill.className = "seckill-nav  seckill-nav-fixed";
    } else {
        seckill.className = "seckill-nav";
    }
}


// 搜索框点击事件
var searchText = document.getElementsByClassName("search-text")[0];
var searchWord = document.getElementsByClassName("search-words")[0];
var searchBtn = document.getElementsByClassName("search-btn")[0];
var searchDown = document.getElementsByClassName("search-down")[0];
searchText.onfocus = function(){
    searchWord.style.display = "none";
    searchText.style.borderColor = "#ff6700";
    searchBtn.style.borderColor = "#ff6700";
    searchDown.style.display = "block";
}
searchText.onblur = function(){
    searchWord.style.display = "block";
    searchText.style.borderColor = "#e0e0e0";
    searchBtn.style.borderColor = "#e0e0e0";
    searchDown.style.display = "none";
}

var allShops = document.getElementsByClassName("all-shops")[0].getElementsByClassName("item");
var right = document.getElementsByClassName("right");
var allShop = document.getElementsByClassName("all-shops")[0];
var navCategory = document.getElementsByClassName("nav-category")[0];
navCategory.onmousemove = function(){
    allShop.style.display = "block";
}
navCategory.onmouseout = function(){
    allShop.style.display = "none";
}
for(var i = 0; i < allShops.length; i++){
    allShops[i].onmousemove = mhover;
}
function mhover(){  
    for(var i = 0; i < allShops.length; i++ ){
        if(allShops[i] === this){
            right[i].style.display = "block";
        }else{
            right[i].style.display = "none";
        }
        
    }
    
}