var playIcon = 'data:image/png;base64,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'

function insertDom(videoDom){
    $(videoDom)
        .append("<div class='video-masker'><a><img src=" + playIcon + " /><span>VIP点击免费观看</span></a></div>")
        .css("position", "relative");
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
    $(".video-masker > a").css({
        'position': 'absolute',
        'left': '50%' ,
        'top': '50%' ,
        'width': '100%' ,
        'text-align': 'center',
        'transform': 'translate(-50% , -50%)',
        'font-size': '18px'
    });
    $(".video-masker > a > img").css({
        'width': '48' ,
        'margin-bottom': '10px'
    });
    $(".video-masker > a > span").css({
        'display': 'block' ,
        'color': '#fff'
    });
    $('a').attr("target","_self");
};
insertDom('.m-video-player-wrap');

$(".video-masker").on('click',function(){
    alert("去播放页免费看视频")
})

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

