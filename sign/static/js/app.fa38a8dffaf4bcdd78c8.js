webpackJsonp([1],{NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("7+uW"),o=i("cIpq"),e=i.n(o),n={name:"app",data:function(){return{msg:"Hello World",imgs:{bgImg:"static/img/bg1.jpg",resBg:"static/img/bg2.jpg",topImg:"static/img/img-title.png",centerImg:"static/img/dec.png",bottomImg:"static/img/layout-text.png",signImg:"static/img/sign.png",boxImg:"static/img/box.png",resImg:"static/img/imgad.jpg"},audios:{sound:"static/img/sound.wav",bgAudio:"http://oya7z7d3e.bkt.clouddn.com/xyy.mp3"},bgPlaying:!0,opening:!1,showSignBox:!1,showSign:!1,showLoad:!1,showRes:!1,showLott:!1}},created:function(){new e.a({threshold:10}).start(),window.addEventListener("shake",this.shakeEventDidOccur,!1)},watch:{},methods:{start:function(){var t=this;this.opening=!0,this.showSignBox=!0,this.showRes=!1,setTimeout(function(){t.showSignBox=!1,t.showSign=!0},2e3),this.$refs.sound.play(),this.rdmShow()},finish:function(){this.showSignBox=!1,this.showSign=!1,this.showLoad=!1,this.opening=!1},afterEnter:function(){this.showSign=!1,this.showLoad=!0},loadAfterEnter:function(){this.finish(),this.showRes=!0},boxEnter:function(){this.$refs.sound.play()},boxLeave:function(){this.$refs.sound.pause()},togglePlay:function(){this.bgPlaying?(this.bgPlaying=!1,this.pauseBgMusic()):(this.bgPlaying=!0,this.playBgMusic())},playBgMusic:function(){this.$refs.bgAudio.play()},pauseBgMusic:function(){this.$refs.bgAudio.pause()},rdmShow:function(){var t=Math.ceil(100*Math.random());console.log(t),50==t&&(this.showLott=!0,console.log("恭喜您获得一次抽奖及机会"))},lottery:function(){console.log("抽奖")},shakeEventDidOccur:function(){this.start()}}},r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrapper",style:{backgroundImage:"url("+t.imgs.bgImg+")"},on:{click:t.playBgMusic}},[i("div",{staticClass:"deco top fadeDown delay1"},[i("img",{attrs:{src:t.imgs.topImg,alt:""}})]),t._v(" "),i("div",{staticClass:"deco center"},[i("img",{attrs:{src:t.imgs.centerImg,alt:""}})]),t._v(" "),i("div",{staticClass:"deco bottom"},[i("img",{attrs:{src:t.imgs.bottomImg,alt:""}})]),t._v(" "),i("div",{staticClass:"sign-center",on:{click:t.start}},[i("img",{attrs:{src:t.imgs.boxImg,alt:""}})]),t._v(" "),i("transition",{attrs:{name:"fade",mode:"out-in",duration:1e3}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.opening,expression:"opening"}],staticClass:"mask",on:{click:t.finish}})]),t._v(" "),i("transition",{attrs:{name:"rotate-box"},on:{"before-enter":t.boxEnter,"before-leave":t.boxLeave}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showSignBox,expression:"showSignBox"}],staticClass:"c-box sign-box"},[i("img",{attrs:{src:t.imgs.boxImg,alt:""}})])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showSign,expression:"showSign"}],staticClass:"sign-wrap"},[i("transition",{attrs:{name:"rotate"},on:{"after-enter":t.afterEnter}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showSign,expression:"showSign"}],staticClass:"c-box sign"},[i("img",{attrs:{src:t.imgs.signImg,alt:""}})])])],1),t._v(" "),i("transition",{attrs:{name:"twinkle"},on:{"after-enter":t.loadAfterEnter}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showLoad,expression:"showLoad"}],staticClass:"sign-text"},[i("p",[t._v("您的新年幸运签是")]),t._v(" "),i("p",[t._v("正在解读中...")])])]),t._v(" "),i("transition",{attrs:{name:"slide-down"}},[t.showRes?i("div",{staticClass:"res-wrap",style:{backgroundImage:"url("+t.imgs.resBg+")"}},[i("div",{staticClass:"top-img"},[i("img",{attrs:{src:t.imgs.resImg,alt:""}})]),t._v(" "),i("div",{staticClass:"bottom"},[i("h4",{staticClass:"fadeDown delay1"},[t._v("长按可保存新年上上签图片")]),t._v(" "),i("p",{staticClass:"fadeDown delay2"},[t._v("可分享到朋友圈")]),t._v(" "),i("div",{staticClass:"btn-wrap fadeDown delay3"},[i("button",{staticClass:"btn",on:{click:t.start}},[t._v("再来一次")])]),t._v(" "),t.showLott?i("p",{staticClass:"fadeDown delay2"},[t._v("恭喜您获得一次抽奖机会")]):t._e(),t._v(" "),t.showLott?i("div",{staticClass:"btn-wrap fadeDown delay4"},[i("button",{staticClass:"btn",on:{click:t.lottery}},[t._v("抽奖")])]):t._e()])]):t._e()]),t._v(" "),i("div",{staticClass:"music-btn",class:t.bgPlaying?"rotating":"",on:{click:t.togglePlay}},[i("i",{staticClass:"icon m-music"})]),t._v(" "),i("audio",{ref:"sound",attrs:{src:t.audios.sound}}),t._v(" "),i("audio",{ref:"bgAudio",attrs:{src:t.audios.bgAudio,loop:"",autoplay:""}})],1)},staticRenderFns:[]},c=i("VU/8")(n,r,!1,function(t){i("mXe2")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:c}})},mXe2:function(t,s){}},["NHnr"]);