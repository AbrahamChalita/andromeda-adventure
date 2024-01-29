import{s as ve,F as T,i as E,f as k,x as Z,q as Ce,W as ye,r as K,v as x,e as z,a as B,c as S,b as F,g as L,m as C,h as ie,B as H,X as Ee,J as $,C as ne,E as ee,l as X,V as te,u as J,o as U,p as Y,t as je,d as we,j as Te}from"./scheduler.ropGePTB.js";import{S as De,i as Ne,t as p,g as P,a as v,e as q,c as I,b as M,m as O,d as V}from"./index.omb6osbG.js";import{t as D,g as ze,a as Se}from"./bundle-mjs.HrccxFFc.js";import{F as G}from"./Frame.raQi0WBE.js";import{C as fe}from"./CloseButton.BlksUtTd.js";const Fe=`
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;function He(o){function t(s){if(!(s.key==="Tab"||s.keyCode===9))return;const l=Array.from(o.querySelectorAll(Fe));let a=l.indexOf(document.activeElement??o);a===-1&&s.shiftKey&&(a=0),a+=l.length+(s.shiftKey?-1:1),a%=l.length,l[a].focus(),s.preventDefault()}return document.addEventListener("keydown",t,!0),{destroy(){document.removeEventListener("keydown",t,!0)}}}const Ie=o=>({}),le=o=>({}),Me=o=>({}),se=o=>({});function oe(o){let t,s,e,l,a,u,f,i,_,j;const y=[{rounded:!0},{shadow:!0},o[14],{class:o[5]}];let g={$$slots:{default:[Pe]},$$scope:{ctx:o}};for(let c=0;c<y.length;c+=1)g=K(g,y[c]);return a=new G({props:g}),{c(){t=z("div"),s=B(),e=z("div"),l=z("div"),I(a.$$.fragment),this.h()},l(c){t=S(c,"DIV",{class:!0}),F(t).forEach(k),s=L(c),e=S(c,"DIV",{class:!0,tabindex:!0,"aria-modal":!0,role:!0});var b=F(e);l=S(b,"DIV",{class:!0});var d=F(l);M(a.$$.fragment,d),d.forEach(k),b.forEach(k),this.h()},h(){C(t,"class",o[11]),C(l,"class",u="flex relative "+o[8][o[2]]+" w-full max-h-full"),C(e,"class",f=D(o[4],o[13].classDialog,...o[7]())),C(e,"tabindex","-1"),C(e,"aria-modal","true"),C(e,"role","dialog")},m(c,b){E(c,t,b),E(c,s,b),E(c,e,b),ie(e,l),O(a,l,null),i=!0,_||(j=[H(e,"keydown",o[12]),H(e,"wheel",Ee(o[22]),{passive:!1}),$(o[6].call(null,e)),$(He.call(null,e)),H(e,"click",o[9])],_=!0)},p(c,b){const d=b&16416?ze(y,[y[0],y[1],b&16384&&Se(c[14]),b&32&&{class:c[5]}]):{};b&16834570&&(d.$$scope={dirty:b,ctx:c}),a.$set(d),(!i||b&4&&u!==(u="flex relative "+c[8][c[2]]+" w-full max-h-full"))&&C(l,"class",u),(!i||b&8208&&f!==(f=D(c[4],c[13].classDialog,...c[7]())))&&C(e,"class",f)},i(c){i||(p(a.$$.fragment,c),i=!0)},o(c){v(a.$$.fragment,c),i=!1},d(c){c&&(k(t),k(s),k(e)),V(a),_=!1,ne(j)}}}function Oe(o){let t,s;return t=new fe({props:{name:"Close modal",class:"absolute top-3 right-2.5",color:o[14].color}}),t.$on("click",o[10]),{c(){I(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){O(t,e,l),s=!0},p(e,l){const a={};l&16384&&(a.color=e[14].color),t.$set(a)},i(e){s||(p(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){V(t,e)}}}function Ve(o){let t,s;return t=new G({props:{color:o[14].color,class:"flex justify-between items-center p-4 rounded-t",$$slots:{default:[Be]},$$scope:{ctx:o}}}),{c(){I(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){O(t,e,l),s=!0},p(e,l){const a={};l&16384&&(a.color=e[14].color),l&16793610&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){s||(p(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){V(t,e)}}}function We(o){let t,s,e;return{c(){t=z("h3"),s=je(o[1]),this.h()},l(l){t=S(l,"H3",{class:!0});var a=F(t);s=we(a,o[1]),a.forEach(k),this.h()},h(){C(t,"class",e="text-xl font-semibold "+(o[14].color?"":"text-gray-900 dark:text-white")+" p-0")},m(l,a){E(l,t,a),ie(t,s)},p(l,a){a&2&&Te(s,l[1]),a&16384&&e!==(e="text-xl font-semibold "+(l[14].color?"":"text-gray-900 dark:text-white")+" p-0")&&C(t,"class",e)},d(l){l&&k(t)}}}function ae(o){let t,s;return t=new fe({props:{name:"Close modal",color:o[14].color}}),t.$on("click",o[10]),{c(){I(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){O(t,e,l),s=!0},p(e,l){const a={};l&16384&&(a.color=e[14].color),t.$set(a)},i(e){s||(p(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){V(t,e)}}}function Be(o){let t,s,e;const l=o[21].header,a=X(l,o,o[24],se),u=a||We(o);let f=o[3]&&ae(o);return{c(){u&&u.c(),t=B(),f&&f.c(),s=T()},l(i){u&&u.l(i),t=L(i),f&&f.l(i),s=T()},m(i,_){u&&u.m(i,_),E(i,t,_),f&&f.m(i,_),E(i,s,_),e=!0},p(i,_){a?a.p&&(!e||_&16777216)&&J(a,l,i,i[24],e?Y(l,i[24],_,Me):U(i[24]),se):u&&u.p&&(!e||_&16386)&&u.p(i,e?_:-1),i[3]?f?(f.p(i,_),_&8&&p(f,1)):(f=ae(i),f.c(),p(f,1),f.m(s.parentNode,s)):f&&(P(),v(f,1,1,()=>{f=null}),q())},i(i){e||(p(u,i),p(f),e=!0)},o(i){v(u,i),v(f),e=!1},d(i){i&&(k(t),k(s)),u&&u.d(i),f&&f.d(i)}}}function re(o){let t,s;return t=new G({props:{color:o[14].color,class:"flex items-center p-6 space-x-2 rounded-b",$$slots:{default:[Le]},$$scope:{ctx:o}}}),{c(){I(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){O(t,e,l),s=!0},p(e,l){const a={};l&16384&&(a.color=e[14].color),l&16777216&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){s||(p(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){V(t,e)}}}function Le(o){let t;const s=o[21].footer,e=X(s,o,o[24],le);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,a){e&&e.m(l,a),t=!0},p(l,a){e&&e.p&&(!t||a&16777216)&&J(e,s,l,l[24],t?Y(s,l[24],a,Ie):U(l[24]),le)},i(l){t||(p(e,l),t=!0)},o(l){v(e,l),t=!1},d(l){e&&e.d(l)}}}function Pe(o){let t,s,e,l,a,u,f,i,_,j;const y=[Ve,Oe],g=[];function c(n,h){return n[15].header||n[1]?0:n[3]?1:-1}~(t=c(o))&&(s=g[t]=y[t](o));const b=o[21].default,d=X(b,o,o[24],null);let m=o[15].footer&&re(o);return{c(){s&&s.c(),e=B(),l=z("div"),d&&d.c(),u=B(),m&&m.c(),f=T(),this.h()},l(n){s&&s.l(n),e=L(n),l=S(n,"DIV",{class:!0,role:!0});var h=F(l);d&&d.l(h),h.forEach(k),u=L(n),m&&m.l(n),f=T(),this.h()},h(){C(l,"class",a=D("p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain",o[13].bodyClass)),C(l,"role","document")},m(n,h){~t&&g[t].m(n,h),E(n,e,h),E(n,l,h),d&&d.m(l,null),E(n,u,h),m&&m.m(n,h),E(n,f,h),i=!0,_||(j=[H(l,"keydown",te(o[12])),H(l,"wheel",te(o[23]),{passive:!0})],_=!0)},p(n,h){let N=t;t=c(n),t===N?~t&&g[t].p(n,h):(s&&(P(),v(g[N],1,1,()=>{g[N]=null}),q()),~t?(s=g[t],s?s.p(n,h):(s=g[t]=y[t](n),s.c()),p(s,1),s.m(e.parentNode,e)):s=null),d&&d.p&&(!i||h&16777216)&&J(d,b,n,n[24],i?Y(b,n[24],h,null):U(n[24]),null),(!i||h&8192&&a!==(a=D("p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain",n[13].bodyClass)))&&C(l,"class",a),n[15].footer?m?(m.p(n,h),h&32768&&p(m,1)):(m=re(n),m.c(),p(m,1),m.m(f.parentNode,f)):m&&(P(),v(m,1,1,()=>{m=null}),q())},i(n){i||(p(s),p(d,n),p(m),i=!0)},o(n){v(s),v(d,n),v(m),i=!1},d(n){n&&(k(e),k(l),k(u),k(f)),~t&&g[t].d(n),d&&d.d(n),m&&m.d(n),_=!1,ne(j)}}}function qe(o){let t,s,e=o[0]&&oe(o);return{c(){e&&e.c(),t=T()},l(l){e&&e.l(l),t=T()},m(l,a){e&&e.m(l,a),E(l,t,a),s=!0},p(l,[a]){l[0]?e?(e.p(l,a),a&1&&p(e,1)):(e=oe(l),e.c(),p(e,1),e.m(t.parentNode,t)):e&&(P(),v(e,1,1,()=>{e=null}),q())},i(l){s||(p(e),s=!0)},o(l){v(e),s=!1},d(l){l&&k(t),e&&e.d(l)}}}function Ae(o,t,s){const e=["open","title","size","placement","autoclose","dismissable","backdropClass","defaultClass","outsideclose","dialogClass"];let l=Z(t,e),{$$slots:a={},$$scope:u}=t;const f=Ce(a);let{open:i=!1}=t,{title:_=""}=t,{size:j="md"}=t,{placement:y="center"}=t,{autoclose:g=!1}=t,{dismissable:c=!0}=t,{backdropClass:b="fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80"}=t,{defaultClass:d="relative flex flex-col mx-auto"}=t,{outsideclose:m=!1}=t,{dialogClass:n="fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex"}=t;const h=ye();function N(r){const w=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT);let A;for(;A=w.nextNode();)if(A instanceof HTMLElement){const R=A,[ge,ke]=de(R);(ge||ke)&&(R.tabIndex=0)}r.focus()}const ce=()=>{switch(y){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"];default:return["justify-center","items-center"]}},ue={xs:"max-w-md",sm:"max-w-lg",md:"max-w-2xl",lg:"max-w-4xl",xl:"max-w-7xl"},me=r=>{const w=r.target;g&&(w==null?void 0:w.tagName)==="BUTTON"&&W(r),m&&w===r.currentTarget&&W(r)},W=r=>{r.preventDefault(),s(0,i=!1)};let Q;const de=r=>[r.scrollWidth>r.clientWidth&&["scroll","auto"].indexOf(getComputedStyle(r).overflowX)>=0,r.scrollHeight>r.clientHeight&&["scroll","auto"].indexOf(getComputedStyle(r).overflowY)>=0];let _e=D(b,t.classBackdrop);function be(r){if(r.key==="Escape"&&c)return W(r)}function he(r){ee.call(this,o,r)}function pe(r){ee.call(this,o,r)}return o.$$set=r=>{s(13,t=K(K({},t),x(r))),s(14,l=Z(t,e)),"open"in r&&s(0,i=r.open),"title"in r&&s(1,_=r.title),"size"in r&&s(2,j=r.size),"placement"in r&&s(16,y=r.placement),"autoclose"in r&&s(17,g=r.autoclose),"dismissable"in r&&s(3,c=r.dismissable),"backdropClass"in r&&s(18,b=r.backdropClass),"defaultClass"in r&&s(19,d=r.defaultClass),"outsideclose"in r&&s(20,m=r.outsideclose),"dialogClass"in r&&s(4,n=r.dialogClass),"$$scope"in r&&s(24,u=r.$$scope)},o.$$.update=()=>{o.$$.dirty&1&&h(i?"open":"close"),s(5,Q=D(d,"w-full divide-y",t.class))},t=x(t),[i,_,j,c,n,Q,N,ce,ue,me,W,_e,be,t,l,f,y,g,b,d,m,a,he,pe,u]}class Ge extends De{constructor(t){super(),Ne(this,t,Ae,qe,ve,{open:0,title:1,size:2,placement:16,autoclose:17,dismissable:3,backdropClass:18,defaultClass:19,outsideclose:20,dialogClass:4})}}export{Ge as M};
