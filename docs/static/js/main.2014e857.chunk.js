(this["webpackJsonparena-dream-stream"]=this["webpackJsonparena-dream-stream"]||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},2:function(e,t,n){e.exports={root:"content_root__2RpRn",outerContainer:"content_outerContainer__2BZqH",innerContainer:"content_innerContainer__1BxGf",container:"content_container__3PSbZ",loader:"content_loader__2X1Q3",image:"content_image__3UnKa",show:"content_show__2_9hf",fill:"content_fill__2ah13",fadeIn:"content_fadeIn__IQHbI"}},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),o=(n(17),n(1)),u=n.n(o),s=n(3),l=n(4),f=n(5),m=n.n(f);function d(){return r.a.createElement("div",{className:m.a.root},r.a.createElement("div",{className:m.a.indicator},"snap"))}var h=n(2),v=n.n(h),p=n(6);function _(){return(_=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=new Image;a.onload=function(){return e(a)},a.onerror=function(e){return n(e)},a.src=t})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){var t=r.a.useState(!0),n=Object(s.a)(t,2),c=n[0],i=n[1],o=r.a.useState(null),u=Object(s.a)(o,2),l=u[0],f=u[1];return Object(a.useEffect)((function(){e&&(i(!0),function(e){return _.apply(this,arguments)}(e).then((function(e){f(e),i(!1)})))}),[e]),{image:l,loading:c}}function b(e){var t=e.image,n=r.a.useState(!1),a=Object(s.a)(n,2),c=a[0],i=a[1];if(r.a.useEffect((function(){var e=setTimeout((function(){return i(!0)}),0);return function(){return clearTimeout(e)}}),[]),0===t.height)return null;var o=t.width/t.height>1?{maxWidth:"100%",width:t.width}:{maxHeight:"100%",height:t.height};return r.a.createElement("img",{alt:"main content",src:t.src,style:o,className:Object(p.a)(v.a.image,c&&v.a.show)})}function E(e){var t=e.data,n=g(null===t||void 0===t?void 0:t.image),a=n.image,c=n.loading;return r.a.createElement("div",{className:v.a.root},r.a.createElement("div",{className:v.a.outerContainer},r.a.createElement("div",{className:Object(p.a)(v.a.container)},r.a.createElement("div",{className:v.a.innerContainer},a&&r.a.createElement(b,{image:a}),r.a.createElement("div",{className:v.a.loader,style:{opacity:c?1:0}},r.a.createElement("div",{className:v.a.fill}))))))}function w(){return(w=Object(l.a)(u.a.mark((function e(t,n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("channel-info")){e.next=7;break}return e.next=4,t.getContent(n);case 4:return r=e.sent,localStorage.setItem("channel-info",JSON.stringify(r)),e.abrupt("return",r);case 7:return e.abrupt("return",JSON.parse(a));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){var n=r.a.useState(!0),a=Object(s.a)(n,2),c=a[0],i=a[1],o=r.a.useState(!1),u=Object(s.a)(o,2),l=u[0],f=u[1],m=r.a.useState(null),d=Object(s.a)(m,2),h=d[0],v=d[1];return r.a.useEffect((function(){i(!0),function(e,t){return w.apply(this,arguments)}(e,t).then((function(e){var t=e.filter((function(e){return e.image})),n=Math.floor(Math.random()*t.length);v(t[n]),i(!1)})).catch((function(e){console.error(e),i(!1),f(!0)}))}),[e,t]),{loading:c,failed:l,data:h}}var j=function(e){var t=O(e.arena,"rocks-not-nature"),n=t.failed,a=t.data;return r.a.createElement("div",{className:"App"},n&&r.a.createElement(d,null),!n&&r.a.createElement(E,{data:a}))},S=n(9),x=n(10),N=n(11);function y(e){return"Block"===e.base_class}function k(e){var t,n;return null!==(t=null===(n=e.contents)||void 0===n?void 0:n.filter(y).filter((function(e){return"Image"===e.class})).map((function(e){var t;return{image:null===(t=e.image)||void 0===t?void 0:t.large.url}})))&&void 0!==t?t:[]}var C=new(function(){function e(t){Object(x.a)(this,e),this.arenaService=t}return Object(N.a)(e,[{key:"getContent",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.arenaService.channel(t);case 2:return n=e.sent,e.abrupt("return",k(n));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())(new S.ArenaClient);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,{arena:C})),document.getElementById("root"))},5:function(e,t,n){e.exports={root:"errored_root__2mzh4",indicator:"errored_indicator__1p0FO"}}},[[12,1,2]]]);
//# sourceMappingURL=main.2014e857.chunk.js.map