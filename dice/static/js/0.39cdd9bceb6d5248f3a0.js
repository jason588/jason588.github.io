webpackJsonp([0],{Ajfp:function(t,n,o){var e=o("OGkq");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o("rjj0")("349080f0",e,!0,{})},FP3a:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={data:function(){return{chatName:"一起撸麻将(1232)",opts:{scrollbar:{fade:!0},pullDownRefresh:{threshold:90,stop:40,txt:"刷新成功"}},chatInput:"",showPanel:!1,showKeyBoard:!1,inputFocus:!1,showEmoji:!1,showMore:!1,diceBoxShow:!1,currentTab:2,avatar1:"static/img/a2.jpg",avatar2:"static/img/a4.jpg",chats:[{self:!1,content:"你好，我是大帅，有什么需要帮助的吗？"},{self:!0,content:"你好，很高兴见到你"},{self:!1,content:"我们这里有效果非常好的减肥产品，不知道你是否感兴趣呢？"},{self:!0,content:"最近怎么样呢"},{self:!1,content:"就那样吧"},{self:!0,emoji:"static/dice/dice_3.png"},{self:!0,content:"你好，很高兴见到你"},{self:!1,content:"我们这里有效果非常好的减肥产品，不知道你是否感兴趣呢？"},{self:!0,content:"不好意思，没兴趣..."},{self:!1,content:"好吧，再见"},{self:!0,content:"再见，兄弟"}],picons:[{icon:"static/icons/sharemore_pic@2x.png",name:"相册"},{icon:"static/icons/sharemore_video@2x.png",name:"拍摄"},{icon:"static/icons/sharemore_videovoip@2x.png",name:"视频通话"},{icon:"static/icons/sharemore_location@2x.png",name:"位置"},{icon:"static/icons/sharemore_wallet@2x.png",name:"红包"},{icon:"static/icons/sharemorePay@2x.png",name:"转账"},{icon:"static/icons/sharemore_voiceinput@2x.png",name:"语音输入"},{icon:"static/icons/sharemore_friendcard@2x.png",name:"名片"}],emoji2:this.getface("static/emoji/Expression_",99),dicies:[{src:"static/dice/dice_1.png",name:"1"},{src:"static/dice/dice_2.png",name:"2"},{src:"static/dice/dice_3.png",name:"3"},{src:"static/dice/dice_4.png",name:"4"},{src:"static/dice/dice_5.png",name:"5"},{src:"static/dice/dice_6.png",name:"6"}],hands:[{src:"static/icons/JSB_B.png",name:"1"},{src:"static/icons/JSB_J.png",name:"2"},{src:"static/icons/JSB_S.png",name:"3"}]}},created:function(){this.getListData()},methods:{getListData:function(){var t=this;this.axios.get("https://jason588.github.io/data.json").then(function(n){t.List=n.data.List,t.Slides=n.data.slides})},onPullingDown:function(){var t=this;setTimeout(function(){Math.random()>.5?t.$createToast({time:1e3,type:"correct",txt:"数据加载成功"}).show():t.$refs.scroll.forceUpdate()},1e3)},bindKey:function(t){13==t.keyCode&&(this.setMsg(),this.clearInput())},tapEmoji:function(){this.showPanelBox(),this.showKeyBoard=!0,this.showEmoji=!0,this.showMore=!1},tapKeyboard:function(){this.inputFocus=!0,this.showKeyBoard=!1,this.hidePanelBox()},tapMore:function(){this.showPanelBox(),this.showKeyBoard=!1,this.showMore=!0,this.showEmoji=!1},showPanelBox:function(){this.showPanel=!0},hidePanelBox:function(){this.showPanel=!1,this.showKeyBoard=!1,this.reScroll()},clearInput:function(){this.chatInput=""},setMsg:function(){""!=this.chatInput?(this.chats.push({self:!0,content:this.chatInput}),this.scrollBottom()):this.$createToast({time:1e3,type:"warn",txt:"写点东西吧"}).show()},selectEmoji:function(t){var n=t;this.chats.push({self:!0,emoji:n}),this.scrollBottom(),this.hidePanelBox()},sentDice:function(){var t=this,n=t.dicies[Math.floor(Math.random()*t.dicies.length)].src;t.chats.push({self:!0,dice:n}),t.diceBoxShow=!1,setTimeout(function(){t.diceBoxShow=!0},100),t.scrollBottom()},sentHand:function(){var t=this.hands[Math.floor(Math.random()*this.hands.length)].src;this.chats.push({self:!0,emoji:t}),this.scrollBottom()},scrollBottom:function(){var t=document.querySelector(".chat-wrap");this.$refs.scroll.scrollTo(0,50-t.scrollHeight,500)},changePage:function(t){console.log("当前滑动:"+t)},diceEnter:function(){this.diceBoxEnter=!0},diceLeave:function(){this.diceBoxEnter=!1},tapFoucs:function(){this.hidePanelBox()},getface:function(t,n){for(var o=[],e=1;e<n;e++)o.push(t+e+"@2x.png");return o},reScroll:function(){this.$refs.scroll.forceUpdate()}}},i={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("hl-page",{staticClass:"chat-bg",attrs:{title:t.chatName,"theme-dark":""}},[o("div",{staticClass:"right-icons",attrs:{slot:"right-icons"},slot:"right-icons"},[o("div",{staticClass:"icon"},[o("i",{staticClass:" img-icon img-user-group"})])]),t._v(" "),o("div",{staticClass:"chats-wrapper",class:{"show-panel":t.showPanel}},[o("cube-scroll",{ref:"scroll",attrs:{data:t.chats,options:t.opts,listenScroll:""},on:{"pulling-down":t.onPullingDown,scroll:t.reScroll}},[o("ul",{staticClass:"chat-wrap has-footer",on:{click:t.hidePanelBox}},t._l(t.chats,function(n,e){return o("chat-item",{key:e,class:{new:e==t.chats.length-1},attrs:{time:new Date,self:n.self,Avatar:n.self?t.avatar1:t.avatar2,textContent:n.content,emoji:n.emoji,dice:n.dice,diceShow:t.diceBoxShow}})}))]),t._v(" "),o("div",{staticClass:"chat-footer"},[o("div",{staticClass:"form-bar"},[o("i",{staticClass:"img-icon img-audio",on:{click:t.hidePanelBox}}),t._v(" "),o("div",{staticClass:"input-wrap"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.chatInput,expression:"chatInput"}],staticClass:"input",attrs:{type:"text",focus:t.inputFocus},domProps:{value:t.chatInput},on:{focus:t.tapFoucs,keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.bindKey(n)},input:function(n){n.target.composing||(t.chatInput=n.target.value)}}}),t._v(" "),o("div",{staticClass:"line-bottom"})]),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:!t.showKeyBoard,expression:"!showKeyBoard"}],staticClass:"img-icon img-emoji",on:{click:t.tapEmoji}}),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:t.showKeyBoard,expression:"showKeyBoard"}],staticClass:"img-icon img-keyboard",on:{click:t.tapKeyboard}}),t._v(" "),o("i",{staticClass:"img-icon img-addround",on:{click:t.tapMore}})]),t._v(" "),o("div",{staticClass:"footer-panel"},[t.showEmoji?o("div",{staticClass:"emoji panel-box has-tabbar"},[1==t.currentTab?o("div",{staticClass:"t-panel"},[o("cube-slide",{ref:"slide",attrs:{loop:!1,"auto-play":!1},on:{change:t.changePage}},[o("cube-slide-item",[o("el-row",{attrs:{gutter:0}},[o("el-col",{attrs:{span:6}},[o("div",{staticClass:"e-box",on:{click:t.sentDice}},[o("div",{staticClass:"e-img"},[o("img",{attrs:{src:"static/dice/dice.png",alt:""}})])])])],1)],1),t._v(" "),o("cube-slide-item",[o("el-row",{attrs:{gutter:0}},[o("el-col",{attrs:{span:6}},[o("div",{staticClass:"e-box"},[o("div",{staticClass:"e-img"},[o("img",{attrs:{src:"static/icons/JSB.png",alt:""}})])])])],1)],1)],1)],1):t._e(),t._v(" "),2==t.currentTab?o("div",{staticClass:"t-panel"},[o("cube-slide",{ref:"slide",attrs:{loop:!1,"auto-play":!1},on:{change:t.changePage}},[o("cube-slide-item",[o("el-row",{attrs:{gutter:0}},[o("el-col",{attrs:{span:6}},[o("div",{staticClass:"i-box"},[o("div",{staticClass:"i-icon"},[o("i",{staticClass:"icon icon-plus"})])])]),t._v(" "),o("el-col",{attrs:{span:6}},[o("div",{staticClass:"e-box",on:{click:t.sentHand}},[o("div",{staticClass:"e-img"},[o("img",{attrs:{src:"static/icons/JSB.png",alt:""}})])])]),t._v(" "),o("el-col",{attrs:{span:6}},[o("div",{staticClass:"e-box",on:{click:t.sentDice}},[o("div",{staticClass:"e-img"},[o("img",{attrs:{src:"static/dice/dice.png",alt:""}})])])])],1)],1),t._v(" "),o("cube-slide-item",[o("el-row",{attrs:{gutter:0}},[o("el-col",{attrs:{span:6}},[o("div",{staticClass:"i-box"},[o("div",{staticClass:"i-icon"},[o("i",{staticClass:"icon icon-plus"})])])])],1)],1)],1)],1):t._e(),t._v(" "),o("div",{staticClass:"t-bar"},[o("div",{staticClass:"t-item"},[o("i",{staticClass:"icon icon-plus"})]),t._v(" "),o("div",{staticClass:"t-item",class:{active:1==t.currentTab},on:{click:function(n){t.currentTab=1}}},[o("img",{attrs:{src:"static/icons/EmotionsEmojiHL.png",alt:""}})]),t._v(" "),o("div",{staticClass:"t-item",class:{active:2==t.currentTab},on:{click:function(n){t.currentTab=2}}},[o("img",{attrs:{src:"static/icons/EmotionCustomHL.png",alt:""}})])])]):t._e(),t._v(" "),t.showMore?o("div",{staticClass:"more panel-box"},[o("el-row",{attrs:{gutter:0}},t._l(t.picons,function(n,e){return e<8?o("el-col",{key:e,attrs:{span:6}},[o("div",{staticClass:"i-box"},[o("div",{staticClass:"i-icon"},[o("img",{attrs:{src:n.icon,alt:""}})]),t._v(" "),o("div",{staticClass:"i-name"},[t._v(t._s(n.name))])])]):t._e()}))],1):t._e()])])],1)])},staticRenderFns:[]};var a=o("VU/8")(e,i,!1,function(t){o("Ajfp")},null,null);n.default=a.exports},OGkq:function(t,n,o){(t.exports=o("FZ+f")(!1)).push([t.i,'\n.chats-wrapper {\n  padding-bottom: 50px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  height: 100%;\n}\n.chats-wrapper.show-panel {\n  padding-bottom: 310px;\n}\n.chats-wrapper.show-panel .chat-footer {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n.chat-footer {\n  position: relative;\n  position: fixed !important;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n  background-color: #f4f4f4;\n  -webkit-transform: translateY(260px);\n  transform: translateY(260px);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.chat-footer:before {\n  content: "";\n  position: absolute;\n  background-color: #ccc;\n  z-index: 9;\n  height: 1px;\n  left: 0;\n  right: 0;\n  top: 0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n  -webkit-transform-origin: top;\n  transform-origin: top;\n}\n.chat-footer .form-bar {\n  position: relative;\n  height: 50px;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  display: flex;\n  -webkit-box-align: center;\n  -o-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -o-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 0 10px;\n}\n.chat-footer .form-bar:before {\n  content: "";\n  position: absolute;\n  background-color: #ccc;\n  z-index: 9;\n  height: 1px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n  -webkit-transform-origin: bottom;\n  transform-origin: bottom;\n}\n.chat-footer .form-bar .icon,\n.chat-footer .form-bar .img-icon {\n  font-size: 32px;\n  color: #7c8184;\n  margin-right: 10px;\n}\n.chat-footer .form-bar .icon:last-child,\n.chat-footer .form-bar .img-icon:last-child {\n  margin: 0;\n}\n.chat-footer .form-bar .input-wrap {\n  -webkit-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  overflow: hidden;\n  white-space: normal;\n  margin-right: 10px;\n}\n.chat-footer .form-bar .input-wrap .line-bottom {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  height: 1px;\n  width: 100%;\n  background-color: #ccc;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n  -webkit-transform-origin: top;\n  transform-origin: top;\n}\n.chat-footer .form-bar .input-wrap .input {\n  height: 34px;\n  line-height: 34px;\n  padding: 0;\n  width: 100%;\n  outline: none;\n  background-color: transparent;\n  border: none;\n  font-size: 14px;\n  color: #222;\n}\n.chat-footer .form-bar .input-wrap .input:focus + .line-bottom {\n  background-color: #18b578;\n}\n.chat-footer .footer-panel {\n  height: 260px;\n}\n.chat-footer .footer-panel .panel-box {\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 10px;\n  color: #7c8184;\n  font-size: 13px;\n}\n.chat-footer .footer-panel .panel-box.has-tabbar {\n  padding-bottom: 40px;\n}\n.chat-footer .footer-panel .panel-box .cube-slide {\n  overflow: hidden;\n}\n.chat-footer .footer-panel .panel-box .t-panel {\n  height: 100%;\n}\n.chat-footer .footer-panel .panel-box .e-box {\n  padding: 15px 0;\n}\n.chat-footer .footer-panel .panel-box .e-box .e-img {\n  text-align: center;\n  height: 60px;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  display: flex;\n  -webkit-box-align: center;\n  -o-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -o-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n.chat-footer .footer-panel .panel-box .e-box .e-img img {\n  max-width: 100%;\n  max-height: 60px;\n  display: inline-block;\n}\n.chat-footer .footer-panel .panel-box .e-box .e-name {\n  font-size: 12px;\n  color: #222;\n  margin: 0;\n  text-align: center;\n}\n.chat-footer .footer-panel .panel-box .i-box {\n  padding: 15px 0;\n  text-align: center;\n  color: #7c8184;\n}\n.chat-footer .footer-panel .panel-box .i-box .i-icon {\n  background-color: #fff;\n  width: 60px;\n  height: 60px;\n  margin: 0 auto;\n  position: relative;\n  border-radius: 10px;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -o-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -o-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.chat-footer .footer-panel .panel-box .i-box .i-icon:after {\n  content: "";\n  border: 1px solid #d9d9d9;\n  border-radius: 20px;\n  position: absolute;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: block;\n  pointer-events: none;\n  left: 0;\n  top: 0;\n  width: 200%;\n  height: 200%;\n  -webkit-transform: scale(0.5) translateZ(0);\n  transform: scale(0.5) translateZ(0);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n.chat-footer .footer-panel .panel-box .i-box .i-icon .icon {\n  font-size: 32px;\n  color: inherit;\n}\n.chat-footer .footer-panel .panel-box .i-box .i-icon img {\n  width: 52px;\n}\n.chat-footer .footer-panel .panel-box .i-box .i-name {\n  color: inherit;\n  font-size: 12px;\n  margin-top: 5px;\n}\n.chat-footer .footer-panel .panel-box .t-bar {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.img-icon {\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-size: 36px auto;\n}\n.img-icon.img-user-group {\n  background-image: url("http://p7dyi3w93.bkt.clouddn.com/ShareFriends@2x.png");\n}\n.img-icon.img-audio {\n  background-image: url("http://p7dyi3w93.bkt.clouddn.com/icon-audio.png");\n}\n.img-icon.img-emoji {\n  background-image: url("http://p7dyi3w93.bkt.clouddn.com/icon-emoji.png");\n}\n.img-icon.img-keyboard {\n  background-image: url("http://p7dyi3w93.bkt.clouddn.com/icon-keyboard.png");\n}\n.img-icon.img-addround {\n  background-image: url("http://p7dyi3w93.bkt.clouddn.com/icon-add.png");\n}\n',""])}});