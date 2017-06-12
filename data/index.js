/**
 * Created by Administrator on 2017/6/12.
 */
window.onload = function () {
    var oBox = document.getElementById('box');

//            获取数据
    function getCookie(name1,name2){
        var arr = document.cookie.split('; ');
        for(var i = 0; i < arr.length; i++){
            var arr1 = arr[i].split('=');
            if(arr1[0] == name1){
                return arr1[1];
            }
            if(arr1[0] == name2){
                return arr1[1];
            }
        }
        return '';
    }
//            拖拽物的初始值
    oBox.style.left = getCookie('Left') + 'px';
    oBox.style.top = getCookie('Top') + 'px';

    oBox.onmousedown = function (ev) {
        var oEvent = ev || event;
        var disX = oEvent.clientX - oBox.offsetLeft;
        var disY = oEvent.clientY - oBox.offsetTop;
        document.onmousemove = function (ev) {
            var oEvent = ev || event;
            var l = oEvent.clientX - disX;
            var t = oEvent.clientY - disY;
            oBox.style.left = l + 'px';
            oBox.style.top = t + 'px';
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            oBox.releaseCapture && oBox.releaseCapture();

            //  存数据
            setCookie('Top',oBox.offsetTop,5);
            setCookie('Left',oBox.offsetLeft,5);
            function setCookie(name,value,iDay){
                if(iDay){
                    var oDate = new Date();
                    oDate.setDate(oDate.getDate() + iDay);
                    document.cookie = name+'='+value+';path=/;expires='+ oDate;
                }else{
                    document.cookie = name+'='+value+';path=/';
                }
            }

        };
        oBox.setCapture && oBox.setCapture();
        return false;
    }
}