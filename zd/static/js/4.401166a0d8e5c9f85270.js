webpackJsonp([4],{C8rs:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"",""])},g8Dp:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={data:function(){return{List:[],obj:{},opts:{scrollbar:{fade:!0},pullDownRefresh:{threshold:90,stop:40,txt:"刷新成功"}}}},created:function(){this.getListData()},methods:{getListData:function(){var t=this;this.id=this.$route.query.id,this.axios.get("/static/data.json").then(function(e){t.List=e.data.List,t.obj=e.data.List[t.id]})},onPullingDown:function(){var t=this;setTimeout(function(){Math.random()>.5?t.$createToast({time:1e3,txt:"正在加载新数据"}).show():t.$refs.scroll.forceUpdate()},1e3)}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("cube-scroll",{ref:"scroll",attrs:{data:t.List,options:t.opts},on:{"pulling-down":t.onPullingDown}},[s("list",{attrs:{"is-empty":!t.List.length}},t._l(t.List,function(e,o){return s("item",{key:o,attrs:{"img-src":e.CoverImage,title:e.Title,desc:e.Summary,href:"/home/detail/"+o}},[s("div",{staticClass:"text-footer",attrs:{slot:"text-footer"},slot:"text-footer"},[t._v("所属单位：三分厂")]),t._v(" "),s("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v(" 已完成 ")])])}))],1)],1)},staticRenderFns:[]};var a=s("VU/8")(o,i,!1,function(t){s("y/xE")},null,null);e.default=a.exports},"y/xE":function(t,e,s){var o=s("C8rs");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);s("rjj0")("7d638d8c",o,!0,{})}});