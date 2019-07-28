var navLi = document.getElementsByClassName("nav")[0].getElementsByClassName("item");
var navList = document.getElementsByClassName("nav-list");

function init() {
    show();
    controlCol();
}
init();

// 控制二级菜单的显示
function show() {
    for (var i = 0; i < navLi.length; i++) {
        navLi[i].onmouseover = function () {
            if (this.className != "show") {
                this.className = "item show";
            }
        }
        navLi[i].onmouseout = function () {
            if (this.className != "item") {
                this.className = "item";
            }

        }
    }
}

// 控制二级菜单的列数
function controlCol() {
    for (var i = 0; i < navList.length; i++) {
        var li = navList[i].getElementsByTagName("li");
        if (li.length > 4) {
            navList[i].className = "nav-list double";
        }
    }
}