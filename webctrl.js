var iqiyi = document.getElementsByClassName("m-video-player-wrap")[0];
var playDom = document.createElement("h1");
playDom.innerText = "Hello,这里是js插入的内容";
playDom.style = "color:blue;margin:10px";
iqiyi.appendChild(playDom);
playDom.addEventListener("click", function () {
    alert("你好爱奇艺！！！");
    playDom.style.color = "red"
});



