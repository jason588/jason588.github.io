webpackJsonp([10],{"/Y0Y":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("hl-page",{attrs:{title:"我的消息","has-back":"",scrollpage:"",theme:"primary","hide-header":this.$store.state.hideHeader}},[e("list",{attrs:{"is-empty":!this.List.length}},this._l(this.List,function(t,i){return e("item",{key:i,attrs:{title:t.Title,desc:t.Summary,footer:"2018-05-05"}})}))],1)},staticRenderFns:[]};var a=i("VU/8")({data:function(){return{List:[]}},created:function(){this.showLoading(),this.getListData()},methods:{getListData:function(){var t=this;this.axios.get("https://jason588.github.io/data.json").then(function(e){t.hideLoading(),t.List=e.data.List})},showLoading:function(){this.$createToast({txt:"加载中"}).show()},hideLoading:function(){this.$createToast({txt:"加载中"}).hide()}}},s,!1,function(t){i("ErMN")},null,null);e.default=a.exports},Dyfc:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},ErMN:function(t,e,i){var s=i("Dyfc");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("3b9a51a2",s,!0,{})}});