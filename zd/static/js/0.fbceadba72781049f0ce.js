webpackJsonp([0],{"/vMB":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page"},[a("cube-scroll",{ref:"scroll",attrs:{options:{scrollbar:{fade:!0}}}},[a("div",{staticClass:"title-bar"},[a("h2",[t._v(t._s(t.obj.Title))]),t._v(" "),a("p",[t._v(t._s(t.obj.Summary))])]),t._v(" "),a("div",{staticClass:"flex bg-white line-top p-md"},[a("avatar",{staticClass:"mr",attrs:{src:t.obj.Avatar}}),t._v(" "),a("div",{staticClass:"f-body"},[a("div",{staticClass:"fs-sm tc-grey"},[t._v(t._s(t.obj.NickName))]),t._v(" "),a("div",{staticClass:"desc flex jc-sb"},[a("p",{staticClass:"left"},[t._v("部门：财务部")]),t._v(" "),a("span",[t._v(t._s(t.obj.UpdateTime))])])])],1),t._v(" "),a("tit",{staticClass:"mt-md",attrs:{"has-bg":""}},[t._v("填写信息")]),t._v(" "),a("div",{staticClass:"p-md bg-white"},[a("cube-textarea",{attrs:{placeholder:"输入您要处理的内容",maxlength:50},model:{value:t.content,callback:function(s){t.content=s},expression:"content"}}),t._v(" "),a("div",{staticClass:"select-group mt-md"},[a("div",{staticClass:"label"},[t._v("选择办理人员")]),t._v(" "),a("div",{staticClass:"select-tap"},[a("div",{staticClass:"select-item"},[t._v("第一个")]),t._v(" "),a("div",{staticClass:"select-item"},[t._v("第二个")])])])],1),t._v(" "),a("div",{staticClass:"btn-wrap"},[a("btn",{attrs:{type:"primary",size:"lg",block:""}},[t._v("转移办理")])],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")({data:function(){return{List:[],obj:{},content:""}},created:function(){this.getListData()},methods:{getListData:function(){var t=this;this.id=this.$route.params.id,this.axios.get("/static/data.json").then(function(s){t.List=s.data.List,t.obj=s.data.List[t.id]})}}},e,!1,function(t){a("b+4b")},null,null);s.default=i.exports},"7xmZ":function(t,s,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},"b+4b":function(t,s,a){var e=a("7xmZ");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("rjj0")("16109d2a",e,!0,{})}});