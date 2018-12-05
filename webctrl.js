var iqiyi = document.getElementsByClassName("m-video-player-wrap")[0];
var playDom = document.createElement("h1");
playDom.innerText = "Hello,这里是js插入的内容";
playDom.style = "color:blue;margin:10px";
iqiyi.appendChild(playDom);
playDom.addEventListener("click", function () {
    alert("您点击了插入的DOM！！！");
    playDom.style = "color:red;margin:10px";
});



// function loadScript(src, callback) {
//     var script = document.createElement('script'),
//         head = document.getElementsByTagName('head')[0];
//     script.type = 'text/javascript';
//     script.charset = 'UTF-8';
//     script.src = src;
//     if (script.addEventListener) {
//         script.addEventListener('load', function () {
//             callback();
//         }, false);
//     } else if (script.attachEvent) {
//         script.attachEvent('onreadystatechange', function () {
//             var target = window.event.srcElement;
//             if (target.readyState == 'loaded') {
//                 callback();
//             }
//         });
//     }
//     head.appendChild(script);
// }