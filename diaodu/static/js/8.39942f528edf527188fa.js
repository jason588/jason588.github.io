webpackJsonp([8],{SCUQ:function(t,n,a){var i=a("kpNf");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("3b50ce92",i,!0,{})},kpNf:function(t,n,a){(t.exports=a("FZ+f")(!1)).push([t.i,'\n.tabbar {\n  height: 48px;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  display: flex;\n  -webkit-box-align: center;\n  -o-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  background-color: #fff;\n  position: relative;\n  z-index: 99;\n}\n.tabbar:before {\n  content: "";\n  position: absolute;\n  background-color: #ddd;\n  z-index: 9;\n  height: 1px;\n  left: 0;\n  right: 0;\n  top: 0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n  -webkit-transform-origin: top;\n  transform-origin: top;\n}\n.tabbar.bottom {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.tabbar .tabbar-item {\n  -webkit-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  color: #222;\n  text-align: center;\n}\n.tabbar .tabbar-item .tabbar-icon {\n  display: block;\n  width: 30px;\n  height: 24px;\n  line-height: 24px;\n  font-size: 24px;\n  margin: 0 auto;\n}\n.tabbar .tabbar-item .tabbar-icon .icon {\n  line-height: 1;\n  color: inherit;\n  font-size: inherit;\n}\n.tabbar .tabbar-item .tabbar-icon .icon.fill {\n  display: none;\n}\n.tabbar .tabbar-item .tabbar-label {\n  font-size: 12px;\n  color: inherit;\n  line-height: 1.5;\n}\n.tabbar .tabbar-item.router-link-active {\n  color: #18b578 !important;\n}\n.tabbar .tabbar-item.router-link-active .tabbar-icon .icon {\n  display: none;\n}\n.tabbar .tabbar-item.router-link-active .tabbar-icon .icon.fill {\n  display: block !important;\n}\n',""])},nPlw:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"wrapper"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1),t._v(" "),a("div",{staticClass:"tabbar bottom"},[a("router-link",{staticClass:"tabbar-item",attrs:{to:"/home"}},[a("div",{staticClass:"tabbar-icon"},[a("i",{staticClass:"icon icon-home"}),t._v(" "),a("i",{staticClass:"fill icon icon-homefill"})]),t._v(" "),a("p",{staticClass:"tabbar-label"},[t._v("首页")])]),t._v(" "),a("router-link",{staticClass:"tabbar-item",attrs:{to:"/online"}},[a("div",{staticClass:"tabbar-icon"},[a("i",{staticClass:"icon icon-we"}),t._v(" "),a("i",{staticClass:"fill icon icon-wefill"})]),t._v(" "),a("p",{staticClass:"tabbar-label"},[t._v("发现")])]),t._v(" "),a("router-link",{staticClass:"tabbar-item",attrs:{to:"/my"}},[a("div",{staticClass:"tabbar-icon"},[a("i",{staticClass:"icon icon-my"}),t._v(" "),a("i",{staticClass:"fill icon icon-myfill"})]),t._v(" "),a("p",{staticClass:"tabbar-label"},[t._v("我的")])])],1)],1)},staticRenderFns:[]};var e=a("VU/8")({},i,!1,function(t){a("SCUQ")},null,null);n.default=e.exports}});