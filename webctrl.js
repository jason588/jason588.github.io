var iqiyi = document.getElementsByClassName("m-video-player-wrap")[0];
iqiyi.style = "position: relative";

var playDom = document.createElement("a");
var playDomInner = document.createElement("span");
playDomInner.innerText = "VIP点击免费观看";
playDom.style = "color:#fff; margin:10px;position:absolute;left:0;right:0;top:0;bottom:0;background:#111;";
playDomInner.style = "position:absolute;left:50%;right:50%;transform:translate(-50%,-50%);font-size:14px";
playDom.href = "http://baidu.com";
playDom.appendChild(playDomInner);
iqiyi.appendChild(playDom);
playDom.addEventListener("click", function () {
    alert("你好爱奇艺！！！");
    playDom.style.color = "red"
});



