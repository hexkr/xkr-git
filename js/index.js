var demo = document.getElementsByClassName("demo")[0];
var demoDrop = document.getElementsByClassName("demo-dropdown")[0];
demo.onclick = function(){   
    if(demoDrop.style.display == "none" ){
        demoDrop.style.display = "block"; 
    }else{
        demoDrop.style.display = "none" 
    }
    e.stopPropagation();
}
