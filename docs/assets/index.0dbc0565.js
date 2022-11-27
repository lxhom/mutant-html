(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=l(o);fetch(o.href,i)}})();function Z(){}function et(e){return e()}function Ae(){return Object.create(null)}function x(e){e.forEach(et)}function tt(e){return typeof e=="function"}function Ee(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let he;function Pe(e,t){return he||(he=document.createElement("a")),he.href=t,e===he.href}function pt(e){return Object.keys(e).length===0}function v(e,t){e.appendChild(t)}function L(e,t,l){e.insertBefore(t,l||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function Q(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function w(e){return document.createElement(e)}function Y(e){return document.createTextNode(e)}function P(){return Y(" ")}function lt(){return Y("")}function D(e,t,l,n){return e.addEventListener(t,l,n),()=>e.removeEventListener(t,l,n)}function S(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function gt(e){return Array.from(e.childNodes)}function Be(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function He(e,t){e.value=t==null?"":t}function ke(e,t,l,n){l===null?e.style.removeProperty(t):e.style.setProperty(t,l,n?"important":"")}function ee(e,t){for(let l=0;l<e.options.length;l+=1){const n=e.options[l];if(n.__value===t){n.selected=!0;return}}e.selectedIndex=-1}function ve(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function le(e,t,l){e.classList[l?"add":"remove"](t)}let Me;function ae(e){Me=e}const ue=[],te=[],de=[],Se=[],bt=Promise.resolve();let Ce=!1;function kt(){Ce||(Ce=!0,bt.then(nt))}function ne(e){de.push(e)}function je(e){Se.push(e)}const we=new Set;let _e=0;function nt(){const e=Me;do{for(;_e<ue.length;){const t=ue[_e];_e++,ae(t),vt(t.$$)}for(ae(null),ue.length=0,_e=0;te.length;)te.pop()();for(let t=0;t<de.length;t+=1){const l=de[t];we.has(l)||(we.add(l),l())}de.length=0}while(ue.length);for(;Se.length;)Se.pop()();Ce=!1,we.clear(),ae(e)}function vt(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}const pe=new Set;let W;function oe(){W={r:0,c:[],p:W}}function ie(){W.r||x(W.c),W=W.p}function T(e,t){e&&e.i&&(pe.delete(e),e.i(t))}function R(e,t,l,n){if(e&&e.o){if(pe.has(e))return;pe.add(e),W.c.push(()=>{pe.delete(e),n&&(l&&e.d(1),n())}),e.o(t)}else n&&n()}function ye(e,t,l){const n=e.$$.props[t];n!==void 0&&(e.$$.bound[n]=l,l(e.$$.ctx[n]))}function me(e){e&&e.c()}function re(e,t,l,n){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,l),n||ne(()=>{const r=e.$$.on_mount.map(et).filter(tt);e.$$.on_destroy?e.$$.on_destroy.push(...r):x(r),e.$$.on_mount=[]}),i.forEach(ne)}function se(e,t){const l=e.$$;l.fragment!==null&&(x(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function jt(e,t){e.$$.dirty[0]===-1&&(ue.push(e),kt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Oe(e,t,l,n,o,i,r,c=[-1]){const s=Me;ae(e);const a=e.$$={fragment:null,ctx:[],props:i,update:Z,not_equal:o,bound:Ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:Ae(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};r&&r(a.root);let p=!1;if(a.ctx=l?l(e,t.props||{},(k,g,...d)=>{const b=d.length?d[0]:g;return a.ctx&&o(a.ctx[k],a.ctx[k]=b)&&(!a.skip_bound&&a.bound[k]&&a.bound[k](b),p&&jt(e,k)),g}):[],a.update(),p=!0,x(a.before_update),a.fragment=n?n(a.ctx):!1,t.target){if(t.hydrate){const k=gt(t.target);a.fragment&&a.fragment.l(k),k.forEach(E)}else a.fragment&&a.fragment.c();t.intro&&T(e.$$.fragment),re(e,t.target,t.anchor,t.customElement),nt()}ae(s)}class Le{$destroy(){se(this,1),this.$destroy=Z}$on(t,l){if(!tt(l))return Z;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(l),()=>{const o=n.indexOf(l);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!pt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function wt(){try{let e=[],t=[],l=[],n={},o=r=>[...new Set(r)];e=JSON.parse(localStorage.emoji_data);let i={};for(let r of e){let c=r.cat;if(t.includes(c)||(t.push(c),l.push(r),i[c]={}),i[c][r.root]||(i[c][r.root]=[]),i[c][r.root].push(r),r.root==="hand"){let{morph:s,color:a}=r;n[s]||(n[s]=[]),n[s]=o([...n[s],a])}}return{emojis:e,categories:t,catIcons:l,morphs:n}}catch(e){throw alert("Could not load emoji data. See the console."),console.error("Error loading emoji data",e),e}}function Ie(e){let t,l,n;return{c(){t=w("img"),Pe(t.src,l="https://lxhom.github.io/mutant-html/assets/webp_128/"+e[0].short+".webp")||S(t,"src",l),ke(t,"width","1em"),ke(t,"height","1em"),ke(t,"max-width","1000px"),S(t,"alt",n=e[0].short+" emoji")},m(o,i){L(o,t,i)},p(o,i){i&1&&!Pe(t.src,l="https://lxhom.github.io/mutant-html/assets/webp_128/"+o[0].short+".webp")&&S(t,"src",l),i&1&&n!==(n=o[0].short+" emoji")&&S(t,"alt",n)},d(o){o&&E(t)}}}function yt(e){let t,l=e[0]&&Ie(e);return{c(){l&&l.c(),t=lt()},m(n,o){l&&l.m(n,o),L(n,t,o)},p(n,[o]){n[0]?l?l.p(n,o):(l=Ie(n),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},i:Z,o:Z,d(n){l&&l.d(n),n&&E(t)}}}function St(e,t,l){let{emoji:n}=t;return e.$$set=o=>{"emoji"in o&&l(0,n=o.emoji)},[n]}class ge extends Le{constructor(t){super(),Oe(this,t,St,yt,Ee,{emoji:0})}}function U(...e){location.search.includes("debug")&&console.debug("@@@",...e)}function qe(e,t,l){const n=e.slice();return n[47]=t[l],n}function ze(e,t,l){const n=e.slice();return n[50]=t[l],n}function Re(e,t,l){const n=e.slice();return n[53]=t[l],n}function $e(e,t,l){const n=e.slice();return n[7]=t[l],n}function De(e,t,l){const n=e.slice();return n[58]=t[l],n}function Ge(e,t,l){const n=e.slice();return n[61]=t[l],n}function Je(e,t,l){const n=e.slice();return n[64]=t[l],n[66]=l,n}function Ke(e){let t,l,n,o,i,r,c,s,a,p,k,g,d,b,H,K,B,y,X,I,M,F=e[13],m=[];for(let u=0;u<F.length;u+=1)m[u]=Fe(Je(e,F,u));const O=u=>R(m[u],1,1,()=>{m[u]=null});let _=Object.keys(e[19]),C=[];for(let u=0;u<_.length;u+=1)C[u]=Ue(Ge(e,_,u));let G=Object.keys(e[18]),z=[];for(let u=0;u<G.length;u+=1)z[u]=Ve(De(e,G,u));let N=e[12]==="html"&&Xe(e),V=e[9],A=[];for(let u=0;u<V.length;u+=1)A[u]=We(Re(e,V,u));const be=u=>R(A[u],1,1,()=>{A[u]=null});return{c(){t=w("div"),l=P(),n=w("div"),o=w("div"),i=w("div"),i.textContent="Categories:\xA0",r=P();for(let u=0;u<m.length;u+=1)m[u].c();c=P(),s=w("button"),s.textContent="Customize",a=P(),p=w("div"),k=w("input"),g=P(),d=w("select");for(let u=0;u<C.length;u+=1)C[u].c();b=P(),H=w("select");for(let u=0;u<z.length;u+=1)z[u].c();K=P(),N&&N.c(),B=P(),y=w("div");for(let u=0;u<A.length;u+=1)A[u].c();S(t,"class","bg-click svelte-1e9nfnt"),S(s,"class","customize btn svelte-1e9nfnt"),S(o,"class","categories svelte-1e9nfnt"),S(k,"type","text"),S(k,"class","input svelte-1e9nfnt"),S(k,"placeholder","Search emojis..."),S(d,"class","svelte-1e9nfnt"),e[12]===void 0&&ne(()=>e[27].call(d)),S(H,"class","svelte-1e9nfnt"),e[11]===void 0&&ne(()=>e[28].call(H)),S(p,"class","search svelte-1e9nfnt"),S(y,"class","emojis svelte-1e9nfnt"),S(n,"class","picker svelte-1e9nfnt")},m(u,j){L(u,t,j),L(u,l,j),L(u,n,j),v(n,o),v(o,i),v(o,r);for(let f=0;f<m.length;f+=1)m[f].m(o,null);v(o,c),v(o,s),v(n,a),v(n,p),v(p,k),He(k,e[4]),e[26](k),v(p,g),v(p,d);for(let f=0;f<C.length;f+=1)C[f].m(d,null);ee(d,e[12]),v(p,b),v(p,H);for(let f=0;f<z.length;f+=1)z[f].m(H,null);ee(H,e[11]),v(p,K),N&&N.m(p,null),v(n,B),v(n,y);for(let f=0;f<A.length;f+=1)A[f].m(y,null);X=!0,I||(M=[D(t,"click",e[21]),D(t,"keydown",e[22]),D(s,"click",e[24]),D(k,"input",e[25]),D(d,"change",e[27]),D(H,"change",e[28])],I=!0)},p(u,j){if(j[0]&24600){F=u[13];let f;for(f=0;f<F.length;f+=1){const J=Je(u,F,f);m[f]?(m[f].p(J,j),T(m[f],1)):(m[f]=Fe(J),m[f].c(),T(m[f],1),m[f].m(o,c))}for(oe(),f=F.length;f<m.length;f+=1)O(f);ie()}if(j[0]&16&&k.value!==u[4]&&He(k,u[4]),j[0]&524288){_=Object.keys(u[19]);let f;for(f=0;f<_.length;f+=1){const J=Ge(u,_,f);C[f]?C[f].p(J,j):(C[f]=Ue(J),C[f].c(),C[f].m(d,null))}for(;f<C.length;f+=1)C[f].d(1);C.length=_.length}if(j[0]&528384&&ee(d,u[12]),j[0]&262144){G=Object.keys(u[18]);let f;for(f=0;f<G.length;f+=1){const J=De(u,G,f);z[f]?z[f].p(J,j):(z[f]=Ve(J),z[f].c(),z[f].m(H,null))}for(;f<z.length;f+=1)z[f].d(1);z.length=G.length}if(j[0]&264192&&ee(H,u[11]),u[12]==="html"?N?N.p(u,j):(N=Xe(u),N.c(),N.m(p,null)):N&&(N.d(1),N=null),j[0]&131584){V=u[9];let f;for(f=0;f<V.length;f+=1){const J=Re(u,V,f);A[f]?(A[f].p(J,j),T(A[f],1)):(A[f]=We(J),A[f].c(),T(A[f],1),A[f].m(y,null))}for(oe(),f=V.length;f<A.length;f+=1)be(f);ie()}},i(u){if(!X){for(let j=0;j<F.length;j+=1)T(m[j]);for(let j=0;j<V.length;j+=1)T(A[j]);X=!0}},o(u){m=m.filter(Boolean);for(let j=0;j<m.length;j+=1)R(m[j]);A=A.filter(Boolean);for(let j=0;j<A.length;j+=1)R(A[j]);X=!1},d(u){u&&E(t),u&&E(l),u&&E(n),Q(m,u),e[26](null),Q(C,u),Q(z,u),N&&N.d(),Q(A,u),I=!1,x(M)}}}function Fe(e){let t,l,n,o,i;l=new ge({props:{emoji:e[14][e[66]]}});function r(){return e[23](e[66])}return{c(){t=w("button"),me(l.$$.fragment),S(t,"class","cat btn svelte-1e9nfnt"),S(t,"title",e[64]),le(t,"highlight",e[66]===e[3]&&!e[4])},m(c,s){L(c,t,s),re(l,t,null),n=!0,o||(i=D(t,"click",r),o=!0)},p(c,s){e=c,(!n||s[0]&24)&&le(t,"highlight",e[66]===e[3]&&!e[4])},i(c){n||(T(l.$$.fragment,c),n=!0)},o(c){R(l.$$.fragment,c),n=!1},d(c){c&&E(t),se(l),o=!1,i()}}}function Ue(e){let t,l=e[19][e[61]]+"",n;return{c(){t=w("option"),n=Y(l),t.__value=e[61],t.value=t.__value},m(o,i){L(o,t,i),v(t,n)},p:Z,d(o){o&&E(t)}}}function Ve(e){let t,l=e[18][e[58]]+"",n;return{c(){t=w("option"),n=Y(l),t.__value=e[58],t.value=t.__value},m(o,i){L(o,t,i),v(t,n)},p:Z,d(o){o&&E(t)}}}function Xe(e){let t,l,n,o=Object.keys(e[6]),i=[];for(let r=0;r<o.length;r+=1)i[r]=Qe($e(e,o,r));return{c(){t=w("select");for(let r=0;r<i.length;r+=1)i[r].c();S(t,"class","svelte-1e9nfnt"),e[7]===void 0&&ne(()=>e[29].call(t))},m(r,c){L(r,t,c);for(let s=0;s<i.length;s+=1)i[s].m(t,null);ee(t,e[7]),l||(n=D(t,"change",e[29]),l=!0)},p(r,c){if(c[0]&64){o=Object.keys(r[6]);let s;for(s=0;s<o.length;s+=1){const a=$e(r,o,s);i[s]?i[s].p(a,c):(i[s]=Qe(a),i[s].c(),i[s].m(t,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=o.length}c[0]&192&&ee(t,r[7])},d(r){r&&E(t),Q(i,r),l=!1,n()}}}function Qe(e){let t,l=e[7]==="custom"?"Custom: ":"",n,o,i=e[6][e[7]]+"",r,c,s;return{c(){t=w("option"),n=Y(l),o=P(),r=Y(i),c=Y("x"),t.__value=s=e[7],t.value=t.__value},m(a,p){L(a,t,p),v(t,n),v(t,o),v(t,r),v(t,c)},p(a,p){p[0]&64&&l!==(l=a[7]==="custom"?"Custom: ":"")&&Be(n,l),p[0]&64&&i!==(i=a[6][a[7]]+"")&&Be(r,i),p[0]&64&&s!==(s=a[7])&&(t.__value=s,t.value=t.__value)},d(a){a&&E(t)}}}function We(e){let t,l,n,o,i,r,c;l=new ge({props:{emoji:e[53]}});function s(){return e[30](e[53])}return{c(){t=w("button"),me(l.$$.fragment),n=P(),S(t,"class","emoji svelte-1e9nfnt"),S(t,"title",o=e[53].desc)},m(a,p){L(a,t,p),re(l,t,null),v(t,n),i=!0,r||(c=D(t,"click",s),r=!0)},p(a,p){e=a;const k={};p[0]&512&&(k.emoji=e[53]),l.$set(k),(!i||p[0]&512&&o!==(o=e[53].desc))&&S(t,"title",o)},i(a){i||(T(l.$$.fragment,a),i=!0)},o(a){R(l.$$.fragment,a),i=!1},d(a){a&&E(t),se(l),r=!1,c()}}}function Ye(e){let t,l,n,o,i,r,c,s,a,p,k,g,d,b,H,K,B=Object.keys(e[15]),y=[];for(let m=0;m<B.length;m+=1)y[m]=Ze(ze(e,B,m));const X=m=>R(y[m],1,1,()=>{y[m]=null});let I=e[8],M=[];for(let m=0;m<I.length;m+=1)M[m]=xe(qe(e,I,m));const F=m=>R(M[m],1,1,()=>{M[m]=null});return{c(){t=w("div"),l=P(),n=w("div"),o=w("div"),i=w("div"),i.textContent="Customize",r=P(),c=w("button"),c.textContent="Save",s=P(),a=w("div");for(let m=0;m<y.length;m+=1)y[m].c();p=P(),k=w("div"),g=P(),d=w("div");for(let m=0;m<M.length;m+=1)M[m].c();S(t,"class","bg-click svelte-1e9nfnt"),S(c,"class","customize svelte-1e9nfnt"),S(o,"class","categories svelte-1e9nfnt"),S(a,"class","emojis svelte-1e9nfnt"),S(k,"class","hr svelte-1e9nfnt"),S(d,"class","emojis svelte-1e9nfnt"),S(n,"class","picker svelte-1e9nfnt")},m(m,O){L(m,t,O),L(m,l,O),L(m,n,O),v(n,o),v(o,i),v(o,r),v(o,c),v(n,s),v(n,a);for(let _=0;_<y.length;_+=1)y[_].m(a,null);v(n,p),v(n,k),v(n,g),v(n,d);for(let _=0;_<M.length;_+=1)M[_].m(d,null);b=!0,H||(K=[D(t,"click",e[31]),D(t,"keydown",e[32]),D(c,"click",e[33])],H=!0)},p(m,O){if(O[0]&98310){B=Object.keys(m[15]);let _;for(_=0;_<B.length;_+=1){const C=ze(m,B,_);y[_]?(y[_].p(C,O),T(y[_],1)):(y[_]=Ze(C),y[_].c(),T(y[_],1),y[_].m(a,null))}for(oe(),_=B.length;_<y.length;_+=1)X(_);ie()}if(O[0]&66823){I=m[8];let _;for(_=0;_<I.length;_+=1){const C=qe(m,I,_);M[_]?(M[_].p(C,O),T(M[_],1)):(M[_]=xe(C),M[_].c(),T(M[_],1),M[_].m(d,null))}for(oe(),_=I.length;_<M.length;_+=1)F(_);ie()}},i(m){if(!b){for(let O=0;O<B.length;O+=1)T(y[O]);for(let O=0;O<I.length;O+=1)T(M[O]);b=!0}},o(m){y=y.filter(Boolean);for(let O=0;O<y.length;O+=1)R(y[O]);M=M.filter(Boolean);for(let O=0;O<M.length;O+=1)R(M[O]);b=!1},d(m){m&&E(t),m&&E(l),m&&E(n),Q(y,m),Q(M,m),H=!1,x(K)}}}function Ze(e){let t,l,n,o,i,r;l=new ge({props:{emoji:e[16](e[50],e[1])}});function c(){return e[34](e[50])}return{c(){t=w("button"),me(l.$$.fragment),n=P(),S(t,"class","emoji btn svelte-1e9nfnt"),le(t,"highlight",e[2]===e[50])},m(s,a){L(s,t,a),re(l,t,null),v(t,n),o=!0,i||(r=D(t,"click",c),i=!0)},p(s,a){e=s;const p={};a[0]&2&&(p.emoji=e[16](e[50],e[1])),l.$set(p),(!o||a[0]&32772)&&le(t,"highlight",e[2]===e[50])},i(s){o||(T(l.$$.fragment,s),o=!0)},o(s){R(l.$$.fragment,s),o=!1},d(s){s&&E(t),se(l),i=!1,r()}}}function xe(e){let t,l,n,o,i,r;l=new ge({props:{emoji:e[16](e[2],e[47])}});function c(){return e[35](e[47])}return{c(){t=w("button"),me(l.$$.fragment),n=P(),S(t,"class","emoji btn svelte-1e9nfnt"),le(t,"highlight",e[1]===e[47])},m(s,a){L(s,t,a),re(l,t,null),v(t,n),o=!0,i||(r=D(t,"click",c),i=!0)},p(s,a){e=s;const p={};a[0]&260&&(p.emoji=e[16](e[2],e[47])),l.$set(p),(!o||a[0]&258)&&le(t,"highlight",e[1]===e[47])},i(s){o||(T(l.$$.fragment,s),o=!0)},o(s){R(l.$$.fragment,s),o=!1},d(s){s&&E(t),se(l),i=!1,r()}}}function Ct(e){let t,l,n,o=e[0]&&Ke(e),i=e[10]&&Ye(e);return{c(){o&&o.c(),t=P(),i&&i.c(),l=lt()},m(r,c){o&&o.m(r,c),L(r,t,c),i&&i.m(r,c),L(r,l,c),n=!0},p(r,c){r[0]?o?(o.p(r,c),c[0]&1&&T(o,1)):(o=Ke(r),o.c(),T(o,1),o.m(t.parentNode,t)):o&&(oe(),R(o,1,1,()=>{o=null}),ie()),r[10]?i?(i.p(r,c),c[0]&1024&&T(i,1)):(i=Ye(r),i.c(),T(i,1),i.m(l.parentNode,l)):i&&(oe(),R(i,1,1,()=>{i=null}),ie())},i(r){n||(T(o),T(i),n=!0)},o(r){R(o),R(i),n=!1},d(r){o&&o.d(r),r&&E(t),i&&i.d(r),r&&E(l)}}}function Et(e,t,l){var Te,Ne;let{emojis:n,categories:o,catIcons:i,morphs:r}=wt(),c=(Te=localStorage.emoji_color)!=null?Te:localStorage.emoji_color="default",s=(Ne=localStorage.emoji_morph)!=null?Ne:localStorage.emoji_morph="paw",a,p=(h,q="default")=>n.find($=>$.root==="hand"&&$.morph===h&&$.color===q)||n.find($=>$.root==="hand"&&$.morph===h),k=0,g="",d=[],{open:b=!1}=t,H=!1,K=-1,B=null;document.addEventListener("keydown",h=>{if(U("Got keydown",h),h.key==="Escape"&&l(0,b=!1),h.ctrlKey&&h.key==="."&&b===!1){if(U("CTRL+. pressed"),B=h.target,B.tagName!=="TEXTAREA"){U("Not in textarea"),alert("Please focus on a text area first!");return}U("Opening emoji picker"),l(12,N=B.placeholder==="leave a comment..."?"md":"html"),l(11,_=N==="md"?"32":"svg"),h.preventDefault(),l(0,b=!0),K=B.selectionStart}});let y=async h=>{let q=be(h);if(window.running_as_page){if("navigator"in window&&"clipboard"in navigator)await navigator.clipboard.writeText(q);else{let $=document.createElement("textarea");$.value=q,document.body.appendChild($),$.select(),document.execCommand("copy"),document.body.removeChild($)}F(`Copied <pre>${q.replace("<","&lt;")}</pre> to clipboard`)}else X(q);l(0,b=!1)},X=h=>{let q=B.value;B.value=q.slice(0,K)+h+q.slice(K),B.selectionStart=K+h.length,B.selectionEnd=K+h.length,B.dispatchEvent(new Event("input",{bubbles:!0}))},I={},{message:M=""}=t,F=h=>{l(20,M=h)},m={128:"128x128 image",32:"32x32 image",svg:"SVG, scalable"},O={128:h=>`https://lxhom.github.io/mutant-html/assets/webp_128/${h}.webp`,32:h=>`https://lxhom.github.io/mutant-html/assets/webp_32/${h}.webp`,svg:h=>`https://lxhom.github.io/mutant-html/assets/svg/${h}.svg`},_="svg",C=[.5,.75,1,1.25,1.5,2,5,10];C.custom=1;let G="2",z={html:"HTML (Post)",md:"MD (Comment)"},N="html",V=()=>`width: calc(${C[G]} * var(--emoji-scale, 1.4em)); height: calc(${C[G]} * var(--emoji-scale, 1.4em)); margin: 0; display: inline;`,A={md:(h,q)=>`![${h}](${q})`,html:(h,q)=>`<img src="${q}" alt="${h}" title="${h}" style="${V()}"/>`},be=h=>{let q=h.desc.replace('"',"'"),$=h.short,fe=O[_]($)+"#generated_with_https://mutant.us.to/";return A[N](q,fe)};setInterval(()=>{let h=Array.from(document.querySelectorAll('button[title="insert emoji"]:not([disabled])')),q=h[0],$=Array.from(document.querySelectorAll('textarea:not([disabled]):not([name="headline"])')),fe=$[0];if(h.length===1&&$.length===1){q.title="insert default emoji";let ce=document.createElement("button");ce.title="insert mutant standard emoji",ce.innerHTML=`<img src="https://lxhom.github.io/mutant-html/assets/webp_128/soft.webp" alt="smiley making a ':3' face" style="width: calc(1 * var(--emoji-scale, 1.4em)); height: calc(1 * var(--emoji-scale, 1.4em)); margin: 0; display: inline;"/>`,ce.addEventListener("click",Bt=>{console.log("penis"),B=fe,l(12,N=fe.placeholder==="post body (accepts markdown!)"?"html":"md"),l(11,_=N==="md"?"32":"svg"),l(0,b=!0),K=fe.selectionStart}),console.log(ce),q.parentNode.insertBefore(ce,q)}},200),U("Emoji picker loaded");const j=()=>l(0,b=!1),f=()=>l(0,b=!1),J=h=>{l(4,g=""),l(3,k=h)},ot=()=>{l(0,b=!1),l(10,H=!0)};function it(){g=this.value,l(4,g),l(0,b)}function rt(h){te[h?"unshift":"push"](()=>{I=h,l(5,I)})}function st(){N=ve(this),l(12,N),l(19,z)}function ft(){_=ve(this),l(11,_),l(18,m)}function ct(){G=ve(this),l(7,G),l(6,C),l(7,G)}const ut=h=>y(h),at=()=>{l(0,b=!0),l(10,H=!1)},mt=()=>l(0,b=!1),ht=()=>{l(0,b=!0),l(10,H=!1)},_t=h=>l(2,s=h),dt=h=>{l(1,c=h),l(0,b=!0),l(10,H=!1)};return e.$$set=h=>{"open"in h&&l(0,b=h.open),"message"in h&&l(20,M=h.message)},e.$$.update=()=>{e.$$.dirty[0]&2&&(localStorage.emoji_color=c),e.$$.dirty[0]&4&&(localStorage.emoji_morph=s),e.$$.dirty[0]&4&&l(8,a=r[s]),e.$$.dirty[0]&1&&l(4,g=""),e.$$.dirty[0]&30&&l(9,d=n.filter(h=>!(o[k]!==h.cat&&!g||h.morph&&h.morph!==s||h.color&&h.color!==c||h.desc.indexOf(g)===-1&&h.short.indexOf(g)===-1))),e.$$.dirty[0]&33&&I&&I.focus&&(console.log("focusing",I),I.focus()),e.$$.dirty[0]&192&&G==="custom"&&l(6,C.custom=+prompt("Enter a custom scale (1 = 100%)",C.custom),C)},[b,c,s,k,g,I,C,G,a,d,H,_,N,o,i,r,p,y,m,z,M,j,f,J,ot,it,rt,st,ft,ct,ut,at,mt,ht,_t,dt]}class Mt extends Le{constructor(t){super(),Oe(this,t,Et,Ct,Ee,{open:0,message:20},null,[-1,-1,-1])}}function Ot(e){let t,l,n,o,i,r,c,s,a,p,k,g;return{c(){t=w("p"),t.innerHTML='Hi there! This is the page hosting Mutant Standard for Cohost. See <a href="https://cohost.org/lexi/post/470324-if-you-ever-wanted-t/" target="_blank" rel="noreferrer">the post on Cohost</a> for more.',l=P(),n=w("p"),n.innerHTML='This uses the <a href="https://mutant.tech" target="_blank" rel="noreferrer">Mutant Standard</a> emoji set.',o=P(),i=w("p"),i.innerHTML='The emoji picker is available as an <a href="mutant-compiled.user.js" target="_blank" rel="noreferrer">userscript</a>. Open it while focusing on a textbox with CTRL+. on Cohost, or use it here:',r=P(),c=w("p"),s=w("button"),s.textContent="Open picker",a=P(),p=w("p")},m(d,b){L(d,t,b),L(d,l,b),L(d,n,b),L(d,o,b),L(d,i,b),L(d,r,b),L(d,c,b),v(c,s),L(d,a,b),L(d,p,b),p.innerHTML=e[2],k||(g=D(s,"click",e[3]),k=!0)},p(d,b){b&4&&(p.innerHTML=d[2])},d(d){d&&E(t),d&&E(l),d&&E(n),d&&E(o),d&&E(i),d&&E(r),d&&E(c),d&&E(a),d&&E(p),k=!1,g()}}}function Lt(e){let t,l,n,o,i,r,c=window.running_as_page&&Ot(e);function s(g){e[4](g)}function a(g){e[5](g)}function p(g){e[6](g)}let k={};return e[0]!==void 0&&(k.open=e[0]),e[1]!==void 0&&(k.commentMode=e[1]),e[2]!==void 0&&(k.message=e[2]),l=new Mt({props:k}),te.push(()=>ye(l,"open",s)),te.push(()=>ye(l,"commentMode",a)),te.push(()=>ye(l,"message",p)),{c(){c&&c.c(),t=P(),me(l.$$.fragment)},m(g,d){c&&c.m(g,d),L(g,t,d),re(l,g,d),r=!0},p(g,[d]){window.running_as_page&&c.p(g,d);const b={};!n&&d&1&&(n=!0,b.open=g[0],je(()=>n=!1)),!o&&d&2&&(o=!0,b.commentMode=g[1],je(()=>o=!1)),!i&&d&4&&(i=!0,b.message=g[2],je(()=>i=!1)),l.$set(b)},i(g){r||(T(l.$$.fragment,g),r=!0)},o(g){R(l.$$.fragment,g),r=!1},d(g){c&&c.d(g),g&&E(t),se(l,g)}}}function Tt(e,t,l){let n=!1,o=!1,i="";const r=()=>l(0,n=!0);function c(p){n=p,l(0,n)}function s(p){o=p,l(1,o)}function a(p){i=p,l(2,i)}return[n,o,i,r,c,s,a]}class Nt extends Le{constructor(t){super(),Oe(this,t,Tt,Lt,Ee,{})}}try{localStorage}catch{alert(`Cookies blocked on ${window.origin}! Cookies are necessary to store emoji metadata, sorry!`)}let At=async()=>{if(window.running_as_page){let e=await fetch("assets/data.json");localStorage.emoji_data=await e.text()}else{let e=await GM_fetch("https://lxhom.github.io/mutant-html/assets/data.json");localStorage.emoji_data=await e.text(),alert("Downloaded emoji data! Use CTRL+. in a textbox to open the emoji picker.")}},Pt=async()=>{localStorage.emoji_data||await At();let e=!1,t=null,l=null;try{l=JSON.parse(localStorage.emoji_data),l.length>0&&(e=!0)}catch(i){t=i}if(U("Parsing emoji",{success:e,error:t}),!e){t=null,e=!1;try{l=JSON.parse(localStorage.emoji_data),l.length>0&&(e=!0)}catch(i){t=i}if(!e)throw alert("Could not load emoji data. See the console."),console.error("Could not load emoji data",{error:t}),t}U(`Loaded ${l.length} emoji entries`);let n=document.createElement("div");n.id="userscript-app",document.body.appendChild(n),U("Appended target div");const o=new Nt({target:n});U("Svelte initialized on",o.$$.root)};U("running main()");Pt().then(()=>{U("main() finished")});