
function insertDom(videoDom){
    $(videoDom)
        .append("<a href='http://baidu.com' class='video-masker'><span>VIP点击免费观看</span></a>")
        .css("position", "relative");
    $(".video-masker").attr("target", "_self");
    $(".video-masker").css({
        'color': '#fff',
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'top': 0,
        'bottom': 0,
        'background-color': '#111',
        'z-index':'999',
        'background-position':'center',
        'background-repeat':'no-repeat',
        'background-size':'cover'
    });
    $(".video-masker > span").css({
        'position': 'absolute',
        'left': '50%' ,
        'top': '50%' ,
        'width': '100%' ,
        'text-align': 'center',
        'transform': 'translate(-50% , -50%)',
        'font-size': '18px'
    });
    $('a').attr("target","_self");
};
insertDom('.m-video-player-wrap');
/***
var iqiyi = document.getElementsByClassName("m-video-player-wrap")[0];
var atag = document.getElementsByTagName('a');
iqiyi.style = "position: relative";
var playDom = document.createElement("a");
var playDomInner = document.createElement("span");
playDomInner.innerText = "VIP点击免费观看";
playDom.style = "color:#fff;position:absolute;left:0;right:0;top:0;bottom:0;background:#111;z-index:999";
playDomInner.style = "position:absolute;left:50%;top:50%;width:100%;text-align: center;transform:translate(-50%,-50%);font-size:18px";
playDom.href = "http://baidu.com";
for (var i = 0; i < atag.length; i++) {
    var element = atag[i];
    element.target = "_self";
}
playDom.target = "_self";
playDom.appendChild(playDomInner);
iqiyi.appendChild(playDom);
playDom.addEventListener("click", function () {
    alert("开始播放了");
    playDom.style.color = "red"
});

***/

