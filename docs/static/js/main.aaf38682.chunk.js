(this["webpackJsonpan.interrupted.stream"]=this["webpackJsonpan.interrupted.stream"]||[]).push([[0],{1:function(e,t,n){e.exports={root:"content_root__2RpRn",outerContainer:"content_outerContainer__2BZqH",innerContainer:"content_innerContainer__1BxGf",container:"content_container__3PSbZ",loader:"content_loader__2X1Q3",image:"content_image__3UnKa",show:"content_show__2_9hf",fill:"content_fill__2ah13",fadeIn:"content_fadeIn__IQHbI",textBlock:"content_textBlock__3EOpF",hidden:"content_hidden__36CWT",attachmentOverlay:"content_attachmentOverlay__1y7JM",pill:"content_pill__1Zwd3",frame:"content_frame__15uew",past:"content_past__qqLaU",future:"content_future__3eWaJ"}},13:function(e,t,n){e.exports=n(22)},18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),l=n.n(c),i=(n(18),n(2)),o=n.n(i),u=n(3),s=n(4),d=n(7),f=n.n(d);function m(){return r.a.createElement("div",{className:f.a.root},r.a.createElement("div",{className:f.a.indicator},"snap"))}var h=n(1),v=n.n(h),p=n(5),_=n(6),g=n.n(_);function E(e,t){return t.current&&e.current?t.current.getBoundingClientRect().height-e.current.getBoundingClientRect().height:null}function w(e){var t,n=e.children,a=r.a.useState(1),c=Object(u.a)(a,2),l=c[0],i=c[1],o=r.a.useState(!1),s=Object(u.a)(o,2),d=s[0],f=s[1],m=r.a.useRef(null),h=r.a.useRef(null),v=r.a.useRef({inc:1,dir:0,flipCount:0});r.a.useEffect((function(){var e,t,n=null===(e=h.current)||void 0===e?void 0:e.getBoundingClientRect(),a=null===(t=m.current)||void 0===t?void 0:t.getBoundingClientRect();if(n&&a){var r=E(h,m);if(null!==r){var c=40-r;if(0!==c){console.log(c,"( "+n.height+", "+a.height+")");var l=v.current.flipCount>10;c>0?(v.current.dir>0&&(v.current.inc*=.25,v.current.flipCount++),v.current.dir=-1,i((function(e){return e-v.current.inc}))):c<-40&&!l?(v.current.dir<0&&(v.current.inc*=.25,v.current.flipCount++),v.current.dir=1,i((function(e){return e+v.current.inc}))):f(!0)}}}}),[l]);var _=d&&null!==(t=E(h,m))&&void 0!==t?t:0;return r.a.createElement("div",{ref:m,className:Object(p.a)(g.a.outer,!d&&g.a.hidden),style:{fontSize:"".concat(l,"rem")}},r.a.createElement("div",{ref:h,className:g.a.inner,style:{paddingTop:_/2}},n))}function b(){return(b=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=new Image;a.onload=function(){return e(a)},a.onerror=function(e){return n(e)},a.src=t})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){var t=r.a.useState(!0),n=Object(u.a)(t,2),c=n[0],l=n[1],i=r.a.useState(null),o=Object(u.a)(i,2),s=o[0],d=o[1];return Object(a.useEffect)((function(){e&&(l(!0),function(e){return b.apply(this,arguments)}(e).then((function(e){d(e),l(!1)})))}),[e]),{image:s,loading:c}}function O(e){var t=e.image,n=r.a.useState(!1),a=Object(u.a)(n,2),c=a[0],l=a[1];if(r.a.useEffect((function(){var e=setTimeout((function(){return l(!0)}),0);return function(){return clearTimeout(e)}}),[]),0===t.height)return null;var i=t.width/t.height>1?{maxWidth:"100%",width:t.width}:{maxHeight:"100%",height:t.height};return r.a.createElement("img",{alt:"main content",src:t.src,style:i,className:Object(p.a)(v.a.image,c&&v.a.show)})}function x(e){var t=e.data;return r.a.createElement(C,{href:"https://are.na/".concat(t.user_id,"/").concat(t.slug)},r.a.createElement("h1",null,t.title),";")}function y(e){var t,n,a=e.data,c=null===a||void 0===a||null===(t=a.image)||void 0===t?void 0:t.large.url;console.log(a);var l=S(c||void 0),i=l.image,o=l.loading,u="Link"===a.class?null===(n=a.source)||void 0===n?void 0:n.url:void 0;return r.a.createElement(C,{href:u},i&&r.a.createElement(O,{image:i}),r.a.createElement("div",{className:v.a.loader,style:{opacity:o?1:0}},r.a.createElement("div",{className:v.a.fill})))}function N(e){var t,n,a,c=e.data,l=null===c||void 0===c||null===(t=c.image)||void 0===t?void 0:t.large.url;console.log(c);var i=S(l||void 0),o=i.image,u=i.loading;return r.a.createElement(C,{href:null===(n=c.attachment)||void 0===n?void 0:n.url},o&&r.a.createElement(O,{image:o}),o&&r.a.createElement("div",{className:v.a.loader,style:{opacity:u?1:0}},r.a.createElement("div",{className:v.a.fill})),r.a.createElement("div",{className:v.a.attachmentOverlay},!o&&r.a.createElement("h1",null,c.title),r.a.createElement("h1",{className:v.a.pill},null===(a=c.attachment)||void 0===a?void 0:a.extension)))}function j(e){var t=e.data;return t.content_html?r.a.createElement(C,null,r.a.createElement(w,null,r.a.createElement("div",{className:v.a.textBlock,dangerouslySetInnerHTML:{__html:t.content_html}}))):null}function k(e){var t=e.data;switch(t.base_class){case"Block":switch(t.class){case"Attachment":return r.a.createElement(N,{data:t});case"Text":return r.a.createElement(j,{data:t});default:return r.a.createElement(y,{data:t})}case"Channel":return r.a.createElement(x,{data:t});default:return null}}function C(e){var t=e.children,n=e.href;return r.a.createElement("div",{className:v.a.root},r.a.createElement("div",{className:v.a.outerContainer},r.a.createElement("a",{className:v.a.container,href:n},r.a.createElement("div",{className:v.a.innerContainer},t))))}function I(e){var t=e.data;return t?r.a.createElement(r.a.Fragment,null,t.past?r.a.createElement("div",{className:Object(p.a)(v.a.frame,v.a.past)},r.a.createElement(k,{data:t.past})):null,r.a.createElement("div",{className:v.a.frame},t.now?r.a.createElement(k,{data:t.now}):r.a.createElement(C,null)),t.future?r.a.createElement("div",{className:Object(p.a)(v.a.frame,v.a.future)},r.a.createElement(k,{data:t.future})):null):r.a.createElement(C,null)}function B(e,t){return R.apply(this,arguments)}function R(){return(R=Object(s.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getContent(n);case 2:return a=e.sent,localStorage.setItem("channel-info",JSON.stringify(a)),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(s.a)(o.a.mark((function e(t,n){var a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("channel-info")){e.next=3;break}return e.abrupt("return",B(t,n));case 3:if(e.prev=3,r=JSON.parse(a),c=Date.now(),r.channel!==n&&localStorage.removeItem("last-seen"),!(r.channel===n&&c<r.updated+12e5)){e.next=9;break}return e.abrupt("return",r.data);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:return e.abrupt("return",B(t,n));case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}function T(e,t){var n=r.a.useState(!0),a=Object(u.a)(n,2),c=a[0],l=a[1],i=r.a.useState(!1),o=Object(u.a)(i,2),s=o[0],d=o[1],f=r.a.useState(null),m=Object(u.a)(f,2),h=m[0],v=m[1];return r.a.useEffect((function(){l(!0),function(e,t){return J.apply(this,arguments)}(e,t).then((function(e){v(function(e){if(!e||0===e.length)return null;var t=localStorage.getItem("last-seen");if(null==t){var n=e.length-1,a=e[n];return localStorage.setItem("last-seen",a.id.toString(10)),{past:null,now:a,future:0!==n?e[n-1]:null}}var r=e.findIndex((function(e){return e.id.toString(10)===t})),c=r>0?r-1:e.length-1,l=e[c];return localStorage.setItem("last-seen",l.id.toString(10)),{past:c!==e.length-1?e[r]:null,now:l,future:0!==c?e[c-1]:null}}(e)),l(!1)})).catch((function(e){console.error(e),l(!1),d(!0)}))}),[e,t]),{loading:c,failed:s,data:h}}var H=function(e){var t=T(e.arena,e.channel),n=t.failed,a=t.data;return r.a.createElement("div",{className:"App"},n&&r.a.createElement(m,null),!n&&r.a.createElement(I,{data:a}))},q=n(10),M=n(11),A=n(12),F=function(){function e(t){Object(M.a)(this,e),this.arenaService=t}return Object(A.a)(e,[{key:"getContent",value:function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.arenaService.channel(t,{forceRefresh:!0});case 2:return n=e.sent,e.abrupt("return",{channel:t,data:n.contents,updated:Date.now()});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();var L={channel:window.localStorage.getItem("channel")||function(){var e=window.location.search.match(/\?channel=(.+)/);return e?e[1]:null}()||"good-sign-offs",token:window.localStorage.getItem("token")||void 0},U=L.token,W=L.channel,Z=new F(new q.ArenaClient({token:U}));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,{arena:Z,channel:W})),document.getElementById("root"))},6:function(e,t,n){e.exports={outer:"fit_outer__3XMd4",inner:"fit_inner__5fSUe",hidden:"fit_hidden__25Hq8"}},7:function(e,t,n){e.exports={root:"errored_root__2mzh4",indicator:"errored_indicator__1p0FO"}}},[[13,1,2]]]);
//# sourceMappingURL=main.aaf38682.chunk.js.map