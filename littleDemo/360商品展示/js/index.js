var wrapper = document.getElementsByClassName("wrapper")[0];
var img = document.getElementsByTagName("img")[0];
var load = document.getElementsByClassName("load")[0];
var p = document.getElementsByTagName("p")[0];
var count = 0;
var total = 24;
function init(){
    for(var i = 1; i <= 24;i++){
        var img = new Image();
        img.src = "./img/image "+ i +".jpg";
        img.onload = function(){
            count++;
            percent =Math.round( count/total * 100 );
            p.innerHTML = percent + "%";
            if(count >= 24){
                start();
            }
        }
        
    }
}
init();
function start(){
    load.style.display = "none";
    wrapper.onmousemove = function(e){
        var x = e.clientX - wrapper.offsetLeft;
        for(var i = 1; i <= 24; i++){
            if( x > (i-1)*20 && x < i*20){
                img.src = "./img/image " + i + ".jpg";
            }
        }
    }
}
