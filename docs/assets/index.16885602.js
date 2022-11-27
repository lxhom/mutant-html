(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=l(o);fetch(o.href,i)}})();function Z(){}function Ze(e){return e()}function Te(){return Object.create(null)}function x(e){e.forEach(Ze)}function xe(e){return typeof e=="function"}function Ce(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ae;function Ne(e,t){return ae||(ae=document.createElement("a")),ae.href=t,e===ae.href}function mt(e){return Object.keys(e).length===0}function k(e,t){e.appendChild(t)}function O(e,t,l){e.insertBefore(t,l||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function Q(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function j(e){return document.createElement(e)}function Y(e){return document.createTextNode(e)}function $(){return Y(" ")}function et(){return Y("")}function F(e,t,l,n){return e.addEventListener(t,l,n),()=>e.removeEventListener(t,l,n)}function C(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function _t(e){return Array.from(e.childNodes)}function $e(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Pe(e,t){e.value=t==null?"":t}function ge(e,t,l,n){l===null?e.style.removeProperty(t):e.style.setProperty(t,l,n?"important":"")}function ee(e,t){for(let l=0;l<e.options.length;l+=1){const n=e.options[l];if(n.__value===t){n.selected=!0;return}}e.selectedIndex=-1}function ve(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function le(e,t,l){e.classList[l?"add":"remove"](t)}let Se;function fe(e){Se=e}const ce=[],te=[],me=[],je=[],ht=Promise.resolve();let we=!1;function pt(){we||(we=!0,ht.then(tt))}function ne(e){me.push(e)}function be(e){je.push(e)}const ke=new Set;let de=0;function tt(){const e=Se;do{for(;de<ce.length;){const t=ce[de];de++,fe(t),gt(t.$$)}for(fe(null),ce.length=0,de=0;te.length;)te.pop()();for(let t=0;t<me.length;t+=1){const l=me[t];ke.has(l)||(ke.add(l),l())}me.length=0}while(ce.length);for(;je.length;)je.pop()();we=!1,ke.clear(),fe(e)}function gt(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}const _e=new Set;let W;function oe(){W={r:0,c:[],p:W}}function ie(){W.r||x(W.c),W=W.p}function T(e,t){e&&e.i&&(_e.delete(e),e.i(t))}function I(e,t,l,n){if(e&&e.o){if(_e.has(e))return;_e.add(e),W.c.push(()=>{_e.delete(e),n&&(l&&e.d(1),n())}),e.o(t)}else n&&n()}function ye(e,t,l){const n=e.$$.props[t];n!==void 0&&(e.$$.bound[n]=l,l(e.$$.ctx[n]))}function ue(e){e&&e.c()}function se(e,t,l,n){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,l),n||ne(()=>{const s=e.$$.on_mount.map(Ze).filter(xe);e.$$.on_destroy?e.$$.on_destroy.push(...s):x(s),e.$$.on_mount=[]}),i.forEach(ne)}function re(e,t){const l=e.$$;l.fragment!==null&&(x(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function vt(e,t){e.$$.dirty[0]===-1&&(ce.push(e),pt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Me(e,t,l,n,o,i,s,c=[-1]){const r=Se;fe(e);const d=e.$$={fragment:null,ctx:[],props:i,update:Z,not_equal:o,bound:Te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:Te(),dirty:c,skip_bound:!1,root:t.target||r.$$.root};s&&s(d.root);let _=!1;if(d.ctx=l?l(e,t.props||{},(v,g,...h)=>{const b=h.length?h[0]:g;return d.ctx&&o(d.ctx[v],d.ctx[v]=b)&&(!d.skip_bound&&d.bound[v]&&d.bound[v](b),_&&vt(e,v)),g}):[],d.update(),_=!0,x(d.before_update),d.fragment=n?n(d.ctx):!1,t.target){if(t.hydrate){const v=_t(t.target);d.fragment&&d.fragment.l(v),v.forEach(E)}else d.fragment&&d.fragment.c();t.intro&&T(e.$$.fragment),se(e,t.target,t.anchor,t.customElement),tt()}fe(r)}class Ee{$destroy(){re(this,1),this.$destroy=Z}$on(t,l){if(!xe(l))return Z;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(l),()=>{const o=n.indexOf(l);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!mt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function bt(){try{let e=[],t=[],l=[],n={},o=s=>[...new Set(s)];e=JSON.parse(localStorage.emoji_data);let i={};for(let s of e){let c=s.cat;if(t.includes(c)||(t.push(c),l.push(s),i[c]={}),i[c][s.root]||(i[c][s.root]=[]),i[c][s.root].push(s),s.root==="hand"){let{morph:r,color:d}=s;n[r]||(n[r]=[]),n[r]=o([...n[r],d])}}return{emojis:e,categories:t,catIcons:l,morphs:n}}catch(e){throw alert("Could not load emoji data. See the console."),console.error("Error loading emoji data",e),e}}function Ae(e){let t,l,n;return{c(){t=j("img"),Ne(t.src,l="https://lxhom.github.io/mutant-html/assets/webp_128/"+e[0].short+".webp")||C(t,"src",l),ge(t,"width","1em"),ge(t,"height","1em"),ge(t,"max-width","1000px"),C(t,"alt",n=e[0].short+" emoji")},m(o,i){O(o,t,i)},p(o,i){i&1&&!Ne(t.src,l="https://lxhom.github.io/mutant-html/assets/webp_128/"+o[0].short+".webp")&&C(t,"src",l),i&1&&n!==(n=o[0].short+" emoji")&&C(t,"alt",n)},d(o){o&&E(t)}}}function kt(e){let t,l=e[0]&&Ae(e);return{c(){l&&l.c(),t=et()},m(n,o){l&&l.m(n,o),O(n,t,o)},p(n,[o]){n[0]?l?l.p(n,o):(l=Ae(n),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},i:Z,o:Z,d(n){l&&l.d(n),n&&E(t)}}}function yt(e,t,l){let{emoji:n}=t;return e.$$set=o=>{"emoji"in o&&l(0,n=o.emoji)},[n]}class he extends Ee{constructor(t){super(),Me(this,t,yt,kt,Ce,{emoji:0})}}function V(...e){location.search.includes("debug")&&console.debug("@@@",...e)}function He(e,t,l){const n=e.slice();return n[45]=t[l],n}function ze(e,t,l){const n=e.slice();return n[48]=t[l],n}function Ie(e,t,l){const n=e.slice();return n[51]=t[l],n}function Be(e,t,l){const n=e.slice();return n[7]=t[l],n}function Re(e,t,l){const n=e.slice();return n[56]=t[l],n}function qe(e,t,l){const n=e.slice();return n[59]=t[l],n}function De(e,t,l){const n=e.slice();return n[62]=t[l],n[64]=l,n}function Ge(e){let t,l,n,o,i,s,c,r,d,_,v,g,h,b,H,U,A,S,X,q,w,D=e[13],a=[];for(let u=0;u<D.length;u+=1)a[u]=Je(De(e,D,u));const M=u=>I(a[u],1,1,()=>{a[u]=null});let p=Object.keys(e[19]),L=[];for(let u=0;u<p.length;u+=1)L[u]=Ke(qe(e,p,u));let B=Object.keys(e[18]),P=[];for(let u=0;u<B.length;u+=1)P[u]=Fe(Re(e,B,u));let z=e[12]==="html"&&Ue(e),G=e[9],N=[];for(let u=0;u<G.length;u+=1)N[u]=Xe(Ie(e,G,u));const pe=u=>I(N[u],1,1,()=>{N[u]=null});return{c(){t=j("div"),l=$(),n=j("div"),o=j("div"),i=j("div"),i.textContent="Categories:\xA0",s=$();for(let u=0;u<a.length;u+=1)a[u].c();c=$(),r=j("div"),r.textContent="Customize",d=$(),_=j("div"),v=j("input"),g=$(),h=j("select");for(let u=0;u<L.length;u+=1)L[u].c();b=$(),H=j("select");for(let u=0;u<P.length;u+=1)P[u].c();U=$(),z&&z.c(),A=$(),S=j("div");for(let u=0;u<N.length;u+=1)N[u].c();C(t,"class","bg-click svelte-1lyade3"),C(r,"class","customize btn svelte-1lyade3"),C(o,"class","categories svelte-1lyade3"),C(v,"type","text"),C(v,"class","input svelte-1lyade3"),C(v,"placeholder","Search emojis..."),C(h,"class","svelte-1lyade3"),e[12]===void 0&&ne(()=>e[27].call(h)),C(H,"class","svelte-1lyade3"),e[11]===void 0&&ne(()=>e[28].call(H)),C(_,"class","search svelte-1lyade3"),C(S,"class","emojis svelte-1lyade3"),C(n,"class","picker svelte-1lyade3")},m(u,y){O(u,t,y),O(u,l,y),O(u,n,y),k(n,o),k(o,i),k(o,s);for(let f=0;f<a.length;f+=1)a[f].m(o,null);k(o,c),k(o,r),k(n,d),k(n,_),k(_,v),Pe(v,e[4]),e[26](v),k(_,g),k(_,h);for(let f=0;f<L.length;f+=1)L[f].m(h,null);ee(h,e[12]),k(_,b),k(_,H);for(let f=0;f<P.length;f+=1)P[f].m(H,null);ee(H,e[11]),k(_,U),z&&z.m(_,null),k(n,A),k(n,S);for(let f=0;f<N.length;f+=1)N[f].m(S,null);X=!0,q||(w=[F(t,"click",e[22]),F(r,"click",e[24]),F(v,"input",e[25]),F(h,"change",e[27]),F(H,"change",e[28])],q=!0)},p(u,y){if(y[0]&24600){D=u[13];let f;for(f=0;f<D.length;f+=1){const J=De(u,D,f);a[f]?(a[f].p(J,y),T(a[f],1)):(a[f]=Je(J),a[f].c(),T(a[f],1),a[f].m(o,c))}for(oe(),f=D.length;f<a.length;f+=1)M(f);ie()}if(y[0]&16&&v.value!==u[4]&&Pe(v,u[4]),y[0]&524288){p=Object.keys(u[19]);let f;for(f=0;f<p.length;f+=1){const J=qe(u,p,f);L[f]?L[f].p(J,y):(L[f]=Ke(J),L[f].c(),L[f].m(h,null))}for(;f<L.length;f+=1)L[f].d(1);L.length=p.length}if(y[0]&528384&&ee(h,u[12]),y[0]&262144){B=Object.keys(u[18]);let f;for(f=0;f<B.length;f+=1){const J=Re(u,B,f);P[f]?P[f].p(J,y):(P[f]=Fe(J),P[f].c(),P[f].m(H,null))}for(;f<P.length;f+=1)P[f].d(1);P.length=B.length}if(y[0]&264192&&ee(H,u[11]),u[12]==="html"?z?z.p(u,y):(z=Ue(u),z.c(),z.m(_,null)):z&&(z.d(1),z=null),y[0]&131584){G=u[9];let f;for(f=0;f<G.length;f+=1){const J=Ie(u,G,f);N[f]?(N[f].p(J,y),T(N[f],1)):(N[f]=Xe(J),N[f].c(),T(N[f],1),N[f].m(S,null))}for(oe(),f=G.length;f<N.length;f+=1)pe(f);ie()}},i(u){if(!X){for(let y=0;y<D.length;y+=1)T(a[y]);for(let y=0;y<G.length;y+=1)T(N[y]);X=!0}},o(u){a=a.filter(Boolean);for(let y=0;y<a.length;y+=1)I(a[y]);N=N.filter(Boolean);for(let y=0;y<N.length;y+=1)I(N[y]);X=!1},d(u){u&&E(t),u&&E(l),u&&E(n),Q(a,u),e[26](null),Q(L,u),Q(P,u),z&&z.d(),Q(N,u),q=!1,x(w)}}}function Je(e){let t,l,n,o,i;l=new he({props:{emoji:e[14][e[64]]}});function s(){return e[23](e[64])}return{c(){t=j("div"),ue(l.$$.fragment),C(t,"class","cat btn svelte-1lyade3"),C(t,"title",e[62]),le(t,"highlight",e[64]===e[3]&&!e[4])},m(c,r){O(c,t,r),se(l,t,null),n=!0,o||(i=F(t,"click",s),o=!0)},p(c,r){e=c,(!n||r[0]&24)&&le(t,"highlight",e[64]===e[3]&&!e[4])},i(c){n||(T(l.$$.fragment,c),n=!0)},o(c){I(l.$$.fragment,c),n=!1},d(c){c&&E(t),re(l),o=!1,i()}}}function Ke(e){let t,l=e[19][e[59]]+"",n;return{c(){t=j("option"),n=Y(l),t.__value=e[59],t.value=t.__value},m(o,i){O(o,t,i),k(t,n)},p:Z,d(o){o&&E(t)}}}function Fe(e){let t,l=e[18][e[56]]+"",n;return{c(){t=j("option"),n=Y(l),t.__value=e[56],t.value=t.__value},m(o,i){O(o,t,i),k(t,n)},p:Z,d(o){o&&E(t)}}}function Ue(e){let t,l,n,o=Object.keys(e[6]),i=[];for(let s=0;s<o.length;s+=1)i[s]=Ve(Be(e,o,s));return{c(){t=j("select");for(let s=0;s<i.length;s+=1)i[s].c();C(t,"class","svelte-1lyade3"),e[7]===void 0&&ne(()=>e[29].call(t))},m(s,c){O(s,t,c);for(let r=0;r<i.length;r+=1)i[r].m(t,null);ee(t,e[7]),l||(n=F(t,"change",e[29]),l=!0)},p(s,c){if(c[0]&64){o=Object.keys(s[6]);let r;for(r=0;r<o.length;r+=1){const d=Be(s,o,r);i[r]?i[r].p(d,c):(i[r]=Ve(d),i[r].c(),i[r].m(t,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=o.length}c[0]&192&&ee(t,s[7])},d(s){s&&E(t),Q(i,s),l=!1,n()}}}function Ve(e){let t,l=e[7]==="custom"?"Custom: ":"",n,o,i=e[6][e[7]]+"",s,c,r;return{c(){t=j("option"),n=Y(l),o=$(),s=Y(i),c=Y("x"),t.__value=r=e[7],t.value=t.__value},m(d,_){O(d,t,_),k(t,n),k(t,o),k(t,s),k(t,c)},p(d,_){_[0]&64&&l!==(l=d[7]==="custom"?"Custom: ":"")&&$e(n,l),_[0]&64&&i!==(i=d[6][d[7]]+"")&&$e(s,i),_[0]&64&&r!==(r=d[7])&&(t.__value=r,t.value=t.__value)},d(d){d&&E(t)}}}function Xe(e){let t,l,n,o,i,s,c,r;n=new he({props:{emoji:e[51]}});function d(){return e[30](e[51])}return{c(){t=j("div"),l=j("div"),ue(n.$$.fragment),i=$(),C(l,"class","emoji svelte-1lyade3"),C(l,"title",o=e[51].desc),C(t,"class","emoji btn svelte-1lyade3")},m(_,v){O(_,t,v),k(t,l),se(n,l,null),k(t,i),s=!0,c||(r=F(t,"click",d),c=!0)},p(_,v){e=_;const g={};v[0]&512&&(g.emoji=e[51]),n.$set(g),(!s||v[0]&512&&o!==(o=e[51].desc))&&C(l,"title",o)},i(_){s||(T(n.$$.fragment,_),s=!0)},o(_){I(n.$$.fragment,_),s=!1},d(_){_&&E(t),re(n),c=!1,r()}}}function Qe(e){let t,l,n,o,i,s,c,r,d,_,v,g,h,b,H,U,A=Object.keys(e[15]),S=[];for(let a=0;a<A.length;a+=1)S[a]=We(ze(e,A,a));const X=a=>I(S[a],1,1,()=>{S[a]=null});let q=e[8],w=[];for(let a=0;a<q.length;a+=1)w[a]=Ye(He(e,q,a));const D=a=>I(w[a],1,1,()=>{w[a]=null});return{c(){t=j("div"),l=$(),n=j("div"),o=j("div"),i=j("div"),i.textContent="Customize",s=$(),c=j("div"),c.textContent="Save",r=$(),d=j("div");for(let a=0;a<S.length;a+=1)S[a].c();_=$(),v=j("div"),g=$(),h=j("div");for(let a=0;a<w.length;a+=1)w[a].c();C(t,"class","bg-click svelte-1lyade3"),C(c,"class","customize svelte-1lyade3"),C(o,"class","categories svelte-1lyade3"),C(d,"class","emojis svelte-1lyade3"),C(v,"class","hr svelte-1lyade3"),C(h,"class","emojis svelte-1lyade3"),C(n,"class","picker svelte-1lyade3")},m(a,M){O(a,t,M),O(a,l,M),O(a,n,M),k(n,o),k(o,i),k(o,s),k(o,c),k(n,r),k(n,d);for(let p=0;p<S.length;p+=1)S[p].m(d,null);k(n,_),k(n,v),k(n,g),k(n,h);for(let p=0;p<w.length;p+=1)w[p].m(h,null);b=!0,H||(U=[F(t,"click",e[31]),F(c,"click",e[32])],H=!0)},p(a,M){if(M[0]&98310){A=Object.keys(a[15]);let p;for(p=0;p<A.length;p+=1){const L=ze(a,A,p);S[p]?(S[p].p(L,M),T(S[p],1)):(S[p]=We(L),S[p].c(),T(S[p],1),S[p].m(d,null))}for(oe(),p=A.length;p<S.length;p+=1)X(p);ie()}if(M[0]&65798){q=a[8];let p;for(p=0;p<q.length;p+=1){const L=He(a,q,p);w[p]?(w[p].p(L,M),T(w[p],1)):(w[p]=Ye(L),w[p].c(),T(w[p],1),w[p].m(h,null))}for(oe(),p=q.length;p<w.length;p+=1)D(p);ie()}},i(a){if(!b){for(let M=0;M<A.length;M+=1)T(S[M]);for(let M=0;M<q.length;M+=1)T(w[M]);b=!0}},o(a){S=S.filter(Boolean);for(let M=0;M<S.length;M+=1)I(S[M]);w=w.filter(Boolean);for(let M=0;M<w.length;M+=1)I(w[M]);b=!1},d(a){a&&E(t),a&&E(l),a&&E(n),Q(S,a),Q(w,a),H=!1,x(U)}}}function We(e){let t,l,n,o,i,s;l=new he({props:{emoji:e[16](e[48],e[1])}});function c(){return e[33](e[48])}return{c(){t=j("div"),ue(l.$$.fragment),n=$(),C(t,"class","emoji btn svelte-1lyade3"),le(t,"highlight",e[2]===e[48])},m(r,d){O(r,t,d),se(l,t,null),k(t,n),o=!0,i||(s=F(t,"click",c),i=!0)},p(r,d){e=r;const _={};d[0]&2&&(_.emoji=e[16](e[48],e[1])),l.$set(_),(!o||d[0]&32772)&&le(t,"highlight",e[2]===e[48])},i(r){o||(T(l.$$.fragment,r),o=!0)},o(r){I(l.$$.fragment,r),o=!1},d(r){r&&E(t),re(l),i=!1,s()}}}function Ye(e){let t,l,n,o,i,s;l=new he({props:{emoji:e[16](e[2],e[45])}});function c(){return e[34](e[45])}return{c(){t=j("div"),ue(l.$$.fragment),n=$(),C(t,"class","emoji btn svelte-1lyade3"),le(t,"highlight",e[1]===e[45])},m(r,d){O(r,t,d),se(l,t,null),k(t,n),o=!0,i||(s=F(t,"click",c),i=!0)},p(r,d){e=r;const _={};d[0]&260&&(_.emoji=e[16](e[2],e[45])),l.$set(_),(!o||d[0]&258)&&le(t,"highlight",e[1]===e[45])},i(r){o||(T(l.$$.fragment,r),o=!0)},o(r){I(l.$$.fragment,r),o=!1},d(r){r&&E(t),re(l),i=!1,s()}}}function jt(e){let t,l,n,o=e[0]&&Ge(e),i=e[10]&&Qe(e);return{c(){o&&o.c(),t=$(),i&&i.c(),l=et()},m(s,c){o&&o.m(s,c),O(s,t,c),i&&i.m(s,c),O(s,l,c),n=!0},p(s,c){s[0]?o?(o.p(s,c),c[0]&1&&T(o,1)):(o=Ge(s),o.c(),T(o,1),o.m(t.parentNode,t)):o&&(oe(),I(o,1,1,()=>{o=null}),ie()),s[10]?i?(i.p(s,c),c[0]&1024&&T(i,1)):(i=Qe(s),i.c(),T(i,1),i.m(l.parentNode,l)):i&&(oe(),I(i,1,1,()=>{i=null}),ie())},i(s){n||(T(o),T(i),n=!0)},o(s){I(o),I(i),n=!1},d(s){o&&o.d(s),s&&E(t),i&&i.d(s),s&&E(l)}}}function wt(e,t,l){var Oe,Le;let{emojis:n,categories:o,catIcons:i,morphs:s}=bt(),c=(Oe=localStorage.emoji_color)!=null?Oe:localStorage.emoji_color="default",r=(Le=localStorage.emoji_morph)!=null?Le:localStorage.emoji_morph="paw",d,_=(m,R="default")=>n.find(K=>K.root==="hand"&&K.morph===m&&K.color===R)||n.find(K=>K.root==="hand"&&K.morph===m),v=0,g="",h=[],{open:b=!1}=t,H=!1,U=-1,A=null,{commentMode:S=!1}=t;document.addEventListener("keydown",m=>{if(V("Got keydown",m),m.ctrlKey&&m.key==="."&&b===!1){if(V("CTRL+. pressed"),A=m.target,A.tagName!=="TEXTAREA"){V("Not in textarea"),alert("Please focus on a text area first!");return}V("Opening emoji picker"),l(12,G=A.placeholder==="leave a comment..."?"md":"html"),m.preventDefault(),l(0,b=!0),U=A.selectionStart}});let X=async m=>{let R=u(m);if(window.running_as_page){if("navigator"in window&&"clipboard"in navigator)await navigator.clipboard.writeText(R);else{let K=document.createElement("textarea");K.value=R,document.body.appendChild(K),K.select(),document.execCommand("copy"),document.body.removeChild(K)}a(`Copied <pre>${R.replace("<","&lt;")}</pre> to clipboard`)}else q(R);l(0,b=!1)},q=m=>{let R=A.value;A.value=R.slice(0,U)+m+R.slice(U),A.selectionStart=U+m.length,A.selectionEnd=U+m.length,A.dispatchEvent(new Event("input",{bubbles:!0}))},w={},{message:D=""}=t,a=m=>{l(20,D=m)},M={128:"128x128 image",32:"32x32 image",svg:"SVG, scalable"},p={128:m=>`https://lxhom.github.io/mutant-html/assets/webp_128/${m}.webp`,32:m=>`https://lxhom.github.io/mutant-html/assets/webp_32/${m}.webp`,svg:m=>`https://lxhom.github.io/mutant-html/assets/svg/${m}.svg`},L="128",B=[.5,.75,1,1.25,1.5,2,5,10];B.custom=1;let P="2",z={html:"HTML (Post)",md:"MD (Comment)"},G="html",N=()=>`width: calc(${B[P]} * var(--emoji-scale, 1.4em)); height: calc(${B[P]} * var(--emoji-scale, 1.4em)); margin: 0; display: inline;`,pe={md:(m,R)=>`![${m}](${R})`,html:(m,R)=>`<img src="${R}" alt="${m}" title="${m}" style="${N()}"/>`},u=m=>{let R=m.desc.replace('"',"'"),K=m.short,dt=p[L](K);return pe[G](R,dt)};V("Emoji picker loaded");const y=()=>l(0,b=!1),f=m=>{l(4,g=""),l(3,v=m)},J=()=>{l(0,b=!1),l(10,H=!0)};function lt(){g=this.value,l(4,g),l(0,b)}function nt(m){te[m?"unshift":"push"](()=>{w=m,l(5,w)})}function ot(){G=ve(this),l(12,G),l(19,z)}function it(){L=ve(this),l(11,L),l(18,M)}function st(){P=ve(this),l(7,P),l(6,B),l(7,P)}const rt=m=>X(m),ct=()=>{l(0,b=!0),l(10,H=!1)},ft=()=>{l(0,b=!0),l(10,H=!1)},ut=m=>l(2,r=m),at=m=>l(1,c=m);return e.$$set=m=>{"open"in m&&l(0,b=m.open),"commentMode"in m&&l(21,S=m.commentMode),"message"in m&&l(20,D=m.message)},e.$$.update=()=>{e.$$.dirty[0]&2&&(localStorage.emoji_color=c),e.$$.dirty[0]&4&&(localStorage.emoji_morph=r),e.$$.dirty[0]&4&&l(8,d=s[r]),e.$$.dirty[0]&1&&l(4,g=""),e.$$.dirty[0]&30&&l(9,h=n.filter(m=>!(o[v]!==m.cat&&!g||m.morph&&m.morph!==r||m.color&&m.color!==c||m.desc.indexOf(g)===-1&&m.short.indexOf(g)===-1))),e.$$.dirty[0]&33&&w&&w.focus&&(console.log("focusing",w),w.focus()),e.$$.dirty[0]&192&&P==="custom"&&l(6,B.custom=+prompt("Enter a custom scale (1 = 100%)",B.custom),B)},[b,c,r,v,g,w,B,P,d,h,H,L,G,o,i,s,_,X,M,z,D,S,y,f,J,lt,nt,ot,it,st,rt,ct,ft,ut,at]}class Ct extends Ee{constructor(t){super(),Me(this,t,wt,jt,Ce,{open:0,commentMode:21,message:20},null,[-1,-1,-1])}}function St(e){let t,l,n,o,i,s,c,r,d,_,v,g;return{c(){t=j("p"),t.innerHTML='Hi there! This is the page hosting Mutant Standard for Cohost. See <a href="https://cohost.org/lexi/post/470324-if-you-ever-wanted-t/" target="_blank">the post on Cohost</a> for more.',l=$(),n=j("p"),n.innerHTML='This uses the <a href="https://mutant.tech">Mutant Standard</a> emoji set.',o=$(),i=j("p"),i.innerHTML='The emoji picker is available as an <a href="mutant-compiled.user.js" target="_blank">userscript</a>. Open it while focusing on a textbox with CTRL+. on Cohost, or use it here:',s=$(),c=j("p"),r=j("button"),r.textContent="Open picker",d=$(),_=j("p")},m(h,b){O(h,t,b),O(h,l,b),O(h,n,b),O(h,o,b),O(h,i,b),O(h,s,b),O(h,c,b),k(c,r),O(h,d,b),O(h,_,b),_.innerHTML=e[2],v||(g=F(r,"click",e[3]),v=!0)},p(h,b){b&4&&(_.innerHTML=h[2])},d(h){h&&E(t),h&&E(l),h&&E(n),h&&E(o),h&&E(i),h&&E(s),h&&E(c),h&&E(d),h&&E(_),v=!1,g()}}}function Mt(e){let t,l,n,o,i,s,c=window.running_as_page&&St(e);function r(g){e[4](g)}function d(g){e[5](g)}function _(g){e[6](g)}let v={};return e[0]!==void 0&&(v.open=e[0]),e[1]!==void 0&&(v.commentMode=e[1]),e[2]!==void 0&&(v.message=e[2]),l=new Ct({props:v}),te.push(()=>ye(l,"open",r)),te.push(()=>ye(l,"commentMode",d)),te.push(()=>ye(l,"message",_)),{c(){c&&c.c(),t=$(),ue(l.$$.fragment)},m(g,h){c&&c.m(g,h),O(g,t,h),se(l,g,h),s=!0},p(g,[h]){window.running_as_page&&c.p(g,h);const b={};!n&&h&1&&(n=!0,b.open=g[0],be(()=>n=!1)),!o&&h&2&&(o=!0,b.commentMode=g[1],be(()=>o=!1)),!i&&h&4&&(i=!0,b.message=g[2],be(()=>i=!1)),l.$set(b)},i(g){s||(T(l.$$.fragment,g),s=!0)},o(g){I(l.$$.fragment,g),s=!1},d(g){c&&c.d(g),g&&E(t),re(l,g)}}}function Et(e,t,l){let n=!1,o=!1,i="";const s=()=>l(0,n=!0);function c(_){n=_,l(0,n)}function r(_){o=_,l(1,o)}function d(_){i=_,l(2,i)}return[n,o,i,s,c,r,d]}class Ot extends Ee{constructor(t){super(),Me(this,t,Et,Mt,Ce,{})}}try{localStorage}catch{alert(`Cookies blocked on ${window.origin}! Cookies are necessary to store emoji metadata, sorry!`)}let Lt=async()=>{if(window.running_as_page){let e=await fetch("assets/data.json");localStorage.emoji_data=await e.text()}else{let e=await GM_fetch("https://lxhom.github.io/mutant-html/assets/data.json");localStorage.emoji_data=await e.text(),alert("Downloaded emoji data! Use CTRL+. in a textbox to open the emoji picker.")}},Tt=async()=>{localStorage.emoji_data||await Lt();let e=!1,t=null,l=null;try{l=JSON.parse(localStorage.emoji_data),l.length>0&&(e=!0)}catch(i){t=i}if(V("Parsing emoji",{success:e,error:t}),!e){t=null,e=!1;try{l=JSON.parse(localStorage.emoji_data),l.length>0&&(e=!0)}catch(i){t=i}if(!e)throw alert("Could not load emoji data. See the console."),console.error("Could not load emoji data",{error:t}),t}V(`Loaded ${l.length} emoji entries`);let n=document.createElement("div");n.id="userscript-app",document.body.appendChild(n),V("Appended target div");const o=new Ot({target:n});V("Svelte initialized on",o.$$.root)};V("running main()");Tt().then(()=>{V("main() finished")});