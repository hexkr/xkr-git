// 获取DOM元素
var province = document.getElementById("province");
var city = document.getElementById("city");
var district = document.getElementById("district");
// 函数初始化
function init() {
    // 避免重复写for循环
    cycle(provinceList, province);
    proChange();
    cityChange();
}
init();
/**
 * 获取省市添加到对应select
 * @param {数组} arr 
 * @param {DOM元素} ele 
 */
function cycle(arr, ele) {
    for (var i = 0; i < arr.length; i++) {
        var option = new Option(arr[i].name, arr[i].name);
        ele.options.add(option);
    }
}
// 省份发生改变事件监听
province.onchange = proChange;

function proChange() {
    city.options.length = 0;
    var cityArr = provinceList[province.selectedIndex].cityList;
    cycle(cityArr, city);
    // 如果不加此步，存在一个问题，例如当从北京切换成四川后，第二级变成成都，但是此时第三级依旧显示
    // 东城区，这时必须要将第二级的成都切换成其他城市再切换回来，此时第三级才变成成都的市辖区，逻辑
    // 不正确，加上此步，可以解决。
    cityChange();
}
// 城市发生改变事件监听
city.onchange = cityChange;

function cityChange() {
    district.options.length = 0;
    var districtArr = provinceList[province.selectedIndex].cityList[city.selectedIndex].districtList;
    for (var i = 0; i < districtArr.length; i++) {
        var option = new Option(districtArr[i], districtArr[i]);
        district.options.add(option);
    }
}
// 姓名重新获得焦点填写时，提示消失
var oName = document.getElementById("name");
oName.onfocus = function () {
    document.getElementsByClassName("nameTip")[0].style.display = "none";
}
//手机号码重新获得焦点填写时，提示消失
var phone = document.getElementById("phone");
phone.onfocus = function () {
    document.getElementsByClassName("tip")[0].style.display = "none";
}

var messageBox = document.getElementsByClassName("messageBox")[0];
var message = document.getElementsByClassName("message")[0];
var receive = document.getElementsByClassName('receive')[0];
var phoneNumber = document.getElementsByClassName("phoneNumber")[0];
var dress = document.getElementsByClassName("dress")[0];
var submit = document.getElementById("submit");
// 将表单中信息显示在确认卡上
submit.onclick = function () {
    // 判断姓名是否为空
    if (!myform.name.value) {
        // 提示姓名不能为空
        document.getElementsByClassName("nameTip")[0].style.display = "inline-block";
        return;
    }
    var reg = /^[1][3,4,5,7,8][0-9]{9}$/; //判断所输入的手机号位数是否满足
    if (!reg.exec(myform.phone.value)) {
        // 提示手机号码错误
        document.getElementsByClassName("tip")[0].style.display = "inline-block";
        return;
    };
    if(!myform.textarea.value){
        // myform.textarea.value = "具体街道地址不能为空"
        alert("具体街道地址不能为空");
        return;
    }

    message.style.display = "block";
    receive.innerHTML = "收件人：" + myform.name.value;
    phoneNumber.innerHTML = "联系方式：" + myform.phone.value;
    dress.innerHTML = "地址：" + myform.province.value + myform.city.value +
        myform.district.value + myform.textarea.value;
        messageBox.style.opacity = "0.3";
}
// 关闭信息确认窗口
var btn = document.getElementsByClassName("btn")[0];
btn.onclick = function () {
    message.style.display = "none";
    window.location.reload();
}
//返回修改
var back = document.getElementsByClassName("back")[0];
back.onclick = function () {
    message.style.display = "none";
    messageBox.style.opacity = "1";
}