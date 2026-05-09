import{f as ss,k as Yc,i as Ln,q as as,$ as Jc,l as Kc,x as kr,n as $c,a0 as Zc,o as yo,t as os,j as ir,a1 as jc,a2 as Qc,a3 as Eo,h as eh,a4 as mn,g as Ks,a5 as th,s as nh,K as ih,a6 as rh,a7 as Xa,a8 as sh,a9 as ah,aa as oh,ab as bo,ac as lh,B as ch,b as Yl,p as Jl,ad as ls,ae as hh,af as uh,m as fh,d as dh,ag as ph,ah as mh,ai as gh,aj as To,y as _h,z as Ao}from"./CWv_9xLh.js";function H_(i,e){return e}function vh(i,e,t){for(var n=[],r=e.length,s,a=e.length,o=0;o<r;o++){let f=e[o];Jl(f,()=>{if(s){if(s.pending.delete(f),s.done.add(f),s.pending.size===0){var h=i.outrogroups;$s(i,Xa(s.done)),h.delete(s),h.size===0&&(i.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=n.length===0&&t!==null;if(c){var l=t,u=l.parentNode;uh(u),u.append(l),i.items.clear()}$s(i,e,!c)}else s={pending:new Set(e),done:new Set},(i.outrogroups??=new Set).add(s)}function $s(i,e,t=!0){var n;if(i.pending.size>0){n=new Set;for(const a of i.pending.values())for(const o of a)n.add(i.items.get(o).e)}for(var r=0;r<e.length;r++){var s=e[r];if(n?.has(s)){s.f|=mn;const a=document.createDocumentFragment();fh(s,a)}else dh(e[r],t)}}var wo;function W_(i,e,t,n,r,s=null){var a=i,o=new Map;{var c=i;a=Ln?as(Jc(c)):c.appendChild(ss())}Ln&&Kc();var l=null,u=ih(()=>{var x=t();return rh(x)?x:x==null?[]:Xa(x)}),f,h=new Map,d=!0;function m(x){(p.effect.f&ch)===0&&(p.pending.delete(x),p.fallback=l,xh(p,f,a,e,n),l!==null&&(f.length===0?(l.f&mn)===0?Yl(l):(l.f^=mn,Vi(l,null,a)):Jl(l,()=>{l=null})))}function M(x){p.pending.delete(x)}var g=Yc(()=>{f=kr(u);var x=f.length;let y=!1;if(Ln){var E=$c(a)===Zc;E!==(x===0)&&(a=yo(),as(a),os(!1),y=!0)}for(var w=new Set,A=eh,C=nh(),v=0;v<x;v+=1){Ln&&ir.nodeType===jc&&ir.data===Qc&&(a=ir,y=!0,os(!1));var b=f[v],k=n(b,v),R=d?null:o.get(k);R?(R.v&&Eo(R.v,b),R.i&&Eo(R.i,v),C&&A.unskip_effect(R.e)):(R=Mh(o,d?a:wo??=ss(),b,k,v,r,e,t),d||(R.e.f|=mn),o.set(k,R)),w.add(k)}if(x===0&&s&&!l&&(d?l=Ks(()=>s(a)):(l=Ks(()=>s(wo??=ss())),l.f|=mn)),x>w.size&&th(),Ln&&x>0&&as(yo()),!d)if(h.set(A,w),C){for(const[U,z]of o)w.has(U)||A.skip_effect(z.e);A.oncommit(m),A.ondiscard(M)}else m(A);y&&os(!0),kr(u)}),p={effect:g,items:o,pending:h,outrogroups:null,fallback:l};d=!1,Ln&&(a=ir)}function Pi(i){for(;i!==null&&(i.f&hh)===0;)i=i.next;return i}function xh(i,e,t,n,r){var s=e.length,a=i.items,o=Pi(i.effect.first),c,l=null,u=[],f=[],h,d,m,M;for(M=0;M<s;M+=1){if(h=e[M],d=r(h,M),m=a.get(d).e,i.outrogroups!==null)for(const v of i.outrogroups)v.pending.delete(m),v.done.delete(m);if((m.f&mn)!==0)if(m.f^=mn,m===o)Vi(m,null,t);else{var g=l?l.next:o;m===i.effect.last&&(i.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),An(i,l,m),An(i,m,g),Vi(m,g,t),l=m,u=[],f=[],o=Pi(l.next);continue}if((m.f&ls)!==0&&Yl(m),m!==o){if(c!==void 0&&c.has(m)){if(u.length<f.length){var p=f[0],x;l=p.prev;var y=u[0],E=u[u.length-1];for(x=0;x<u.length;x+=1)Vi(u[x],p,t);for(x=0;x<f.length;x+=1)c.delete(f[x]);An(i,y.prev,E.next),An(i,l,y),An(i,E,p),o=p,l=E,M-=1,u=[],f=[]}else c.delete(m),Vi(m,o,t),An(i,m.prev,m.next),An(i,m,l===null?i.effect.first:l.next),An(i,l,m),l=m;continue}for(u=[],f=[];o!==null&&o!==m;)(c??=new Set).add(o),f.push(o),o=Pi(o.next);if(o===null)continue}(m.f&mn)===0&&u.push(m),l=m,o=Pi(m.next)}if(i.outrogroups!==null){for(const v of i.outrogroups)v.pending.size===0&&($s(i,Xa(v.done)),i.outrogroups?.delete(v));i.outrogroups.size===0&&(i.outrogroups=null)}if(o!==null||c!==void 0){var w=[];if(c!==void 0)for(m of c)(m.f&ls)===0&&w.push(m);for(;o!==null;)(o.f&ls)===0&&o!==i.fallback&&w.push(o),o=Pi(o.next);var A=w.length;if(A>0){var C=s===0?t:null;vh(i,w,C)}}}function Mh(i,e,t,n,r,s,a,o){var c=(a&sh)!==0?(a&ah)===0?oh(t,!1,!1):bo(t):null,l=(a&lh)!==0?bo(r):null;return{v:c,i:l,e:Ks(()=>(s(e,c??t,l??r,o),()=>{i.delete(n)}))}}function Vi(i,e,t){if(i.nodes)for(var n=i.nodes.start,r=i.nodes.end,s=e&&(e.f&mn)===0?e.nodes.start:t;n!==null;){var a=ph(n);if(s.before(n),n===r)return;n=a}}function An(i,e,t){e===null?i.effect.first=t:e.next=t,t===null?i.effect.last=e:t.prev=e}function Sh(i,e,t){var n=i==null?"":""+i;return n===""?null:n}function X_(i,e,t,n,r,s){var a=i.__className;if(Ln||a!==t||a===void 0){var o=Sh(t);(!Ln||o!==i.getAttribute("class"))&&(o==null?i.removeAttribute("class"):i.className=o),i.__className=t}return s}const qa="183",yh=0,Ro=1,Eh=2,Ur=1,bh=2,ki=3,Fn=0,Rt=1,pn=2,vn=0,vi=1,Co=2,Po=3,Do=4,Th=5,Yn=100,Ah=101,wh=102,Rh=103,Ch=104,Ph=200,Dh=201,Ih=202,Lh=203,Zs=204,js=205,Nh=206,Uh=207,Fh=208,Oh=209,Bh=210,zh=211,Vh=212,kh=213,Gh=214,Qs=0,ea=1,ta=2,Mi=3,na=4,ia=5,ra=6,sa=7,Kl=0,Hh=1,Wh=2,en=0,$l=1,Zl=2,jl=3,Ql=4,ec=5,tc=6,nc=7,Io="attached",Xh="detached",ic=300,Zn=301,Si=302,cs=303,hs=304,$r=306,aa=1e3,gn=1001,oa=1002,Mt=1003,qh=1004,rr=1005,bt=1006,us=1007,Kn=1008,Nt=1009,rc=1010,sc=1011,Yi=1012,Ya=1013,nn=1014,Ot=1015,Mn=1016,Ja=1017,Ka=1018,Ji=1020,ac=35902,oc=35899,lc=1021,cc=1022,Bt=1023,Sn=1026,$n=1027,$a=1028,Za=1029,yi=1030,ja=1031,Qa=1033,Fr=33776,Or=33777,Br=33778,zr=33779,la=35840,ca=35841,ha=35842,ua=35843,fa=36196,da=37492,pa=37496,ma=37488,ga=37489,_a=37490,va=37491,xa=37808,Ma=37809,Sa=37810,ya=37811,Ea=37812,ba=37813,Ta=37814,Aa=37815,wa=37816,Ra=37817,Ca=37818,Pa=37819,Da=37820,Ia=37821,La=36492,Na=36494,Ua=36495,Fa=36283,Oa=36284,Ba=36285,za=36286,Gr=2300,Va=2301,fs=2302,Lo=2303,No=2400,Uo=2401,Fo=2402,Yh=2500,q_=0,Y_=1,J_=2,Jh=3200,hc=0,Kh=1,Nn="",Ft="srgb",Ei="srgb-linear",Hr="linear",Ke="srgb",ni=7680,Oo=519,$h=512,Zh=513,jh=514,eo=515,Qh=516,eu=517,to=518,tu=519,ka=35044,Bo="300 es",Qt=2e3,Ki=2001;function nu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function iu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $i(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){const i=$i("canvas");return i.style.display="block",i}const zo={};function Wr(...i){const e="THREE."+i.shift();console.log(e,...i)}function uc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ee(...i){i=uc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ce(...i){i=uc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Xr(...i){const e=i.join(" ");e in zo||(zo[e]=!0,Ee(...i))}function su(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const au={[Qs]:ea,[ta]:ra,[na]:sa,[Mi]:ia,[ea]:Qs,[ra]:ta,[sa]:na,[ia]:Mi};class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vo=1234567;const Hi=Math.PI/180,bi=180/Math.PI;function Yt(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function no(i,e){return(i%e+e)%e}function ou(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function lu(i,e,t){return i!==e?(t-i)/(e-i):0}function Wi(i,e,t){return(1-t)*i+t*e}function cu(i,e,t,n){return Wi(i,e,1-Math.exp(-t*n))}function hu(i,e=1){return e-Math.abs(no(i,e*2)-e)}function uu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function du(i,e){return i+Math.floor(Math.random()*(e-i+1))}function pu(i,e){return i+Math.random()*(e-i)}function mu(i){return i*(.5-Math.random())}function gu(i){i!==void 0&&(Vo=i);let e=Vo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _u(i){return i*Hi}function vu(i){return i*bi}function xu(i){return(i&i-1)===0&&i!==0}function Mu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Su(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yu(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),h=a((e-n)/2),d=s((n-e)/2),m=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*f,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*m,c*d,o*l);break;case"YXY":i.set(c*d,o*u,c*m,o*l);break;case"ZYZ":i.set(c*m,c*d,o*u,o*l);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const K_={DEG2RAD:Hi,RAD2DEG:bi,generateUUID:Yt,clamp:Ve,euclideanModulo:no,mapLinear:ou,inverseLerp:lu,lerp:Wi,damp:cu,pingpong:hu,smoothstep:uu,smootherstep:fu,randInt:du,randFloat:pu,randFloatSpread:mu,seededRandom:gu,degToRad:_u,radToDeg:vu,isPowerOfTwo:xu,ceilPowerOfTwo:Mu,floorPowerOfTwo:Su,setQuaternionFromProperEuler:yu,normalize:$e,denormalize:Xt};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3],h=s[a+0],d=s[a+1],m=s[a+2],M=s[a+3];if(f!==M||c!==h||l!==d||u!==m){let g=c*h+l*d+u*m+f*M;g<0&&(h=-h,d=-d,m=-m,M=-M,g=-g);let p=1-o;if(g<.9995){const x=Math.acos(g),y=Math.sin(x);p=Math.sin(p*x)/y,o=Math.sin(o*x)/y,c=c*p+h*o,l=l*p+d*o,u=u*p+m*o,f=f*p+M*o}else{c=c*p+h*o,l=l*p+d*o,u=u*p+m*o,f=f*p+M*o;const x=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=x,l*=x,u*=x,f*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],h=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+u*f+c*d-l*h,e[t+1]=c*m+u*h+l*f-o*d,e[t+2]=l*m+u*d+o*h-c*f,e[t+3]=u*m-o*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),h=c(n/2),d=c(r/2),m=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"YZX":this._x=h*u*f+l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f-h*d*m;break;case"XZY":this._x=h*u*f-l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f+h*d*m;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ko.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ko.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ds.copy(this).projectOnVector(e),this.sub(ds)}reflect(e){return this.sub(ds.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ds=new D,ko=new jn;class Ne{constructor(e,t,n,r,s,a,o,c,l){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],M=r[0],g=r[3],p=r[6],x=r[1],y=r[4],E=r[7],w=r[2],A=r[5],C=r[8];return s[0]=a*M+o*x+c*w,s[3]=a*g+o*y+c*A,s[6]=a*p+o*E+c*C,s[1]=l*M+u*x+f*w,s[4]=l*g+u*y+f*A,s[7]=l*p+u*E+f*C,s[2]=h*M+d*x+m*w,s[5]=h*g+d*y+m*A,s[8]=h*p+d*E+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*s,d=l*s-a*c,m=t*f+n*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return e[0]=f*M,e[1]=(r*l-u*n)*M,e[2]=(o*n-r*a)*M,e[3]=h*M,e[4]=(u*t-r*c)*M,e[5]=(r*s-o*t)*M,e[6]=d*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ps.makeScale(e,t)),this}rotate(e){return this.premultiply(ps.makeRotation(-e)),this}translate(e,t){return this.premultiply(ps.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ps=new Ne,Go=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ho=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Eu(){const i={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ke&&(r.r=xn(r.r),r.g=xn(r.g),r.b=xn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(r.r=xi(r.r),r.g=xi(r.g),r.b=xi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Nn?Hr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ei]:{primaries:e,whitePoint:n,transfer:Hr,toXYZ:Go,fromXYZ:Ho,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:Go,fromXYZ:Ho,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}const We=Eu();function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ii;class bu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ii===void 0&&(ii=$i("canvas")),ii.width=e.width,ii.height=e.height;const r=ii.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ii}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$i("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tu=0;class io{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Yt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ms(r[a].image)):s.push(ms(r[a]))}else s=ms(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ms(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}let Au=0;const gs=new D;class Tt extends Ai{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=gn,r=gn,s=bt,a=Kn,o=Bt,c=Nt,l=Tt.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Yt(),this.name="",this.source=new io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gs).x}get height(){return this.source.getSize(gs).y}get depth(){return this.source.getSize(gs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case aa:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case aa:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=ic;Tt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],m=c[9],M=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,E=(d+1)/2,w=(p+1)/2,A=(u+h)/4,C=(f+M)/4,v=(m+g)/4;return y>E&&y>w?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=A/n,s=C/n):E>w?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=A/r,s=v/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=C/s,r=v/s),this.set(n,r,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(f-M)/x,this.z=(h-u)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wu extends Ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Tt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new io(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tn extends wu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fc extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ru extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ge{constructor(e,t,n,r,s,a,o,c,l,u,f,h,d,m,M,g){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,f,h,d,m,M,g)}set(e,t,n,r,s,a,o,c,l,u,f,h,d,m,M,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=M,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/ri.setFromMatrixColumn(e,0).length(),s=1/ri.setFromMatrixColumn(e,1).length(),a=1/ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,m=o*u,M=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=d+m*l,t[5]=h-M*l,t[9]=-o*c,t[2]=M-h*l,t[6]=m+d*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,m=l*u,M=l*f;t[0]=h+M*o,t[4]=m*o-d,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=M+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,m=l*u,M=l*f;t[0]=h-M*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,d=a*f,m=o*u,M=o*f;t[0]=c*u,t[4]=m*l-d,t[8]=h*l+M,t[1]=c*f,t[5]=M*l+h,t[9]=d*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,d=a*l,m=o*c,M=o*l;t[0]=c*u,t[4]=M-h*f,t[8]=m*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*f+m,t[10]=h-M*f}else if(e.order==="XZY"){const h=a*c,d=a*l,m=o*c,M=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+M,t[5]=a*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cu,e,Pu)}lookAt(e,t,n){const r=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),wn.crossVectors(n,Dt),wn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),wn.crossVectors(n,Dt)),wn.normalize(),sr.crossVectors(Dt,wn),r[0]=wn.x,r[4]=sr.x,r[8]=Dt.x,r[1]=wn.y,r[5]=sr.y,r[9]=Dt.y,r[2]=wn.z,r[6]=sr.z,r[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],M=n[6],g=n[10],p=n[14],x=n[3],y=n[7],E=n[11],w=n[15],A=r[0],C=r[4],v=r[8],b=r[12],k=r[1],R=r[5],U=r[9],z=r[13],W=r[2],G=r[6],V=r[10],B=r[14],Q=r[3],$=r[7],ce=r[11],pe=r[15];return s[0]=a*A+o*k+c*W+l*Q,s[4]=a*C+o*R+c*G+l*$,s[8]=a*v+o*U+c*V+l*ce,s[12]=a*b+o*z+c*B+l*pe,s[1]=u*A+f*k+h*W+d*Q,s[5]=u*C+f*R+h*G+d*$,s[9]=u*v+f*U+h*V+d*ce,s[13]=u*b+f*z+h*B+d*pe,s[2]=m*A+M*k+g*W+p*Q,s[6]=m*C+M*R+g*G+p*$,s[10]=m*v+M*U+g*V+p*ce,s[14]=m*b+M*z+g*B+p*pe,s[3]=x*A+y*k+E*W+w*Q,s[7]=x*C+y*R+E*G+w*$,s[11]=x*v+y*U+E*V+w*ce,s[15]=x*b+y*z+E*B+w*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],M=e[7],g=e[11],p=e[15],x=c*d-l*h,y=o*d-l*f,E=o*h-c*f,w=a*d-l*u,A=a*h-c*u,C=a*f-o*u;return t*(M*x-g*y+p*E)-n*(m*x-g*w+p*A)+r*(m*y-M*w+p*C)-s*(m*E-M*A+g*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],M=e[13],g=e[14],p=e[15],x=t*o-n*a,y=t*c-r*a,E=t*l-s*a,w=n*c-r*o,A=n*l-s*o,C=r*l-s*c,v=u*M-f*m,b=u*g-h*m,k=u*p-d*m,R=f*g-h*M,U=f*p-d*M,z=h*p-d*g,W=x*z-y*U+E*R+w*k-A*b+C*v;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/W;return e[0]=(o*z-c*U+l*R)*G,e[1]=(r*U-n*z-s*R)*G,e[2]=(M*C-g*A+p*w)*G,e[3]=(h*A-f*C-d*w)*G,e[4]=(c*k-a*z-l*b)*G,e[5]=(t*z-r*k+s*b)*G,e[6]=(g*E-m*C-p*y)*G,e[7]=(u*C-h*E+d*y)*G,e[8]=(a*U-o*k+l*v)*G,e[9]=(n*k-t*U-s*v)*G,e[10]=(m*A-M*E+p*x)*G,e[11]=(f*E-u*A-d*x)*G,e[12]=(o*b-a*R-c*v)*G,e[13]=(t*R-n*b+r*v)*G,e[14]=(M*y-m*w-g*x)*G,e[15]=(u*w-f*y+h*x)*G,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,h=s*l,d=s*u,m=s*f,M=a*u,g=a*f,p=o*f,x=c*l,y=c*u,E=c*f,w=n.x,A=n.y,C=n.z;return r[0]=(1-(M+p))*w,r[1]=(d+E)*w,r[2]=(m-y)*w,r[3]=0,r[4]=(d-E)*A,r[5]=(1-(h+p))*A,r[6]=(g+x)*A,r[7]=0,r[8]=(m+y)*C,r[9]=(g-x)*C,r[10]=(1-(h+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ri.set(r[0],r[1],r[2]).length();const o=ri.set(r[4],r[5],r[6]).length(),c=ri.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Gt.copy(this);const l=1/a,u=1/o,f=1/c;return Gt.elements[0]*=l,Gt.elements[1]*=l,Gt.elements[2]*=l,Gt.elements[4]*=u,Gt.elements[5]*=u,Gt.elements[6]*=u,Gt.elements[8]*=f,Gt.elements[9]*=f,Gt.elements[10]*=f,t.setFromRotationMatrix(Gt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Qt,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let m,M;if(c)m=s/(a-s),M=a*s/(a-s);else if(o===Qt)m=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Ki)m=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Qt,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-r),h=-(t+e)/(t-e),d=-(n+r)/(n-r);let m,M;if(c)m=1/(a-s),M=a/(a-s);else if(o===Qt)m=-2/(a-s),M=-(a+s)/(a-s);else if(o===Ki)m=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ri=new D,Gt=new Ge,Cu=new D(0,0,0),Pu=new D(1,1,1),wn=new D,sr=new D,Dt=new D,Wo=new Ge,Xo=new jn;class rn{constructor(e=0,t=0,n=0,r=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xo.setFromEuler(this),this.setFromQuaternion(Xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class dc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Du=0;const qo=new D,si=new jn,ln=new Ge,ar=new D,Di=new D,Iu=new D,Lu=new jn,Yo=new D(1,0,0),Jo=new D(0,1,0),Ko=new D(0,0,1),$o={type:"added"},Nu={type:"removed"},ai={type:"childadded",child:null},_s={type:"childremoved",child:null};class ht extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Yt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new D,t=new rn,n=new jn,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ne}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(Yo,e)}rotateY(e){return this.rotateOnAxis(Jo,e)}rotateZ(e){return this.rotateOnAxis(Ko,e)}translateOnAxis(e,t){return qo.copy(e).applyQuaternion(this.quaternion),this.position.add(qo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yo,e)}translateY(e){return this.translateOnAxis(Jo,e)}translateZ(e){return this.translateOnAxis(Ko,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ar.copy(e):ar.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Di,ar,this.up):ln.lookAt(ar,Di,this.up),this.quaternion.setFromRotationMatrix(ln),r&&(ln.extractRotation(r.matrixWorld),si.setFromRotationMatrix(ln),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($o),ai.child=e,this.dispatchEvent(ai),ai.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nu),_s.child=e,this.dispatchEvent(_s),_s.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($o),ai.child=e,this.dispatchEvent(ai),ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,Iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ht.DEFAULT_UP=new D(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class or extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uu={type:"move"};class vs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,n),p=this._getHandJoint(l,M);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&h>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uu)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new or;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function xs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=We.workingColorSpace){if(e=no(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=xs(a,s,e+1/3),this.g=xs(a,s,e),this.b=xs(a,s,e-1/3)}return We.colorSpaceToWorking(this,r),this}setStyle(e,t=Ft){function n(s){s!==void 0&&parseFloat(s)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=pc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return We.workingToColorSpace(Et.copy(this),e),Math.round(Ve(Et.r*255,0,255))*65536+Math.round(Ve(Et.g*255,0,255))*256+Math.round(Ve(Et.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Et.copy(this),t);const n=Et.r,r=Et.g,s=Et.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Ft){We.workingToColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,r=Et.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(lr);const n=Wi(Rn.h,lr.h,t),r=Wi(Rn.s,lr.s,t),s=Wi(Rn.l,lr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new ke;ke.NAMES=pc;class mc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new mc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $_ extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ht=new D,cn=new D,Ms=new D,hn=new D,oi=new D,li=new D,Zo=new D,Ss=new D,ys=new D,Es=new D,bs=new st,Ts=new st,As=new st;class qt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ht.subVectors(e,t),r.cross(Ht);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ht.subVectors(r,t),cn.subVectors(n,t),Ms.subVectors(e,t);const a=Ht.dot(Ht),o=Ht.dot(cn),c=Ht.dot(Ms),l=cn.dot(cn),u=cn.dot(Ms),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(l*c-o*u)*h,m=(a*u-o*c)*h;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,hn.x),c.addScaledVector(a,hn.y),c.addScaledVector(o,hn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return bs.setScalar(0),Ts.setScalar(0),As.setScalar(0),bs.fromBufferAttribute(e,t),Ts.fromBufferAttribute(e,n),As.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(bs,s.x),a.addScaledVector(Ts,s.y),a.addScaledVector(As,s.z),a}static isFrontFacing(e,t,n,r){return Ht.subVectors(n,t),cn.subVectors(e,t),Ht.cross(cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ht.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;oi.subVectors(r,n),li.subVectors(s,n),Ss.subVectors(e,n);const c=oi.dot(Ss),l=li.dot(Ss);if(c<=0&&l<=0)return t.copy(n);ys.subVectors(e,r);const u=oi.dot(ys),f=li.dot(ys);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(oi,a);Es.subVectors(e,s);const d=oi.dot(Es),m=li.dot(Es);if(m>=0&&d<=m)return t.copy(s);const M=d*l-c*m;if(M<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(li,o);const g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return Zo.subVectors(s,r),o=(f-u)/(f-u+(d-m)),t.copy(r).addScaledVector(Zo,o);const p=1/(g+M+h);return a=M*p,o=h*p,t.copy(n).addScaledVector(oi,a).addScaledVector(li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class On{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(s,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),hr.subVectors(this.max,Ii),ci.subVectors(e.a,Ii),hi.subVectors(e.b,Ii),ui.subVectors(e.c,Ii),Cn.subVectors(hi,ci),Pn.subVectors(ui,hi),Vn.subVectors(ci,ui);let t=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Vn.z,Vn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Vn.z,0,-Vn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Vn.y,Vn.x,0];return!ws(t,ci,hi,ui,hr)||(t=[1,0,0,0,1,0,0,0,1],!ws(t,ci,hi,ui,hr))?!1:(ur.crossVectors(Cn,Pn),t=[ur.x,ur.y,ur.z],ws(t,ci,hi,ui,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const un=[new D,new D,new D,new D,new D,new D,new D,new D],Wt=new D,cr=new On,ci=new D,hi=new D,ui=new D,Cn=new D,Pn=new D,Vn=new D,Ii=new D,hr=new D,ur=new D,kn=new D;function ws(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){kn.fromArray(i,s);const o=r.x*Math.abs(kn.x)+r.y*Math.abs(kn.y)+r.z*Math.abs(kn.z),c=e.dot(kn),l=t.dot(kn),u=n.dot(kn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ft=new D,fr=new Ae;let Fu=0;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ka,this.updateRanges=[],this.gpuType=Ot,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xt(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xt(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xt(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ka&&(e.usage=this.usage),e}}class gc extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _c extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ou=new On,Li=new D,Rs=new D;class yn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ou.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Li.subVectors(e,this.center);const t=Li.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Li,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Li.copy(e.center).add(Rs)),this.expandByPoint(Li.copy(e.center).sub(Rs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Bu=0;const Ut=new Ge,Cs=new ht,fi=new D,It=new On,Ni=new On,vt=new D;class Ct extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Yt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nu(e)?_c:gc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return Cs.lookAt(e),Cs.updateMatrix(),this.applyMatrix4(Cs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ni.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(It.min,Ni.min),It.expandByPoint(vt),vt.addVectors(It.max,Ni.max),It.expandByPoint(vt)):(It.expandByPoint(Ni.min),It.expandByPoint(Ni.max))}It.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)vt.fromBufferAttribute(o,l),c&&(fi.fromBufferAttribute(e,l),vt.add(fi)),r=Math.max(r,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new D,c[v]=new D;const l=new D,u=new D,f=new D,h=new Ae,d=new Ae,m=new Ae,M=new D,g=new D;function p(v,b,k){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,k),h.fromBufferAttribute(s,v),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,k),u.sub(l),f.sub(l),d.sub(h),m.sub(h);const R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(M.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(R),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(R),o[v].add(M),o[b].add(M),o[k].add(M),c[v].add(g),c[b].add(g),c[k].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,b=x.length;v<b;++v){const k=x[v],R=k.start,U=k.count;for(let z=R,W=R+U;z<W;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new D,E=new D,w=new D,A=new D;function C(v){w.fromBufferAttribute(r,v),A.copy(w);const b=o[v];y.copy(b),y.sub(w.multiplyScalar(w.dot(b))).normalize(),E.crossVectors(A,b);const R=E.dot(c[v])<0?-1:1;a.setXYZW(v,y.x,y.y,y.z,R)}for(let v=0,b=x.length;v<b;++v){const k=x[v],R=k.start,U=k.count;for(let z=R,W=R+U;z<W;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,u=new D,f=new D;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),M=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let d=0,m=0;for(let M=0,g=c.length;M<g;M++){o.isInterleavedBufferAttribute?d=c[M]*o.data.stride+o.offset:d=c[M]*u;for(let p=0;p<u;p++)h[m++]=l[d++]}return new zt(h,u,f)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=e(h,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Z_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ka,this.updateRanges=[],this.version=0,this.uuid=Yt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const At=new D;class vc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Xt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Wr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Wr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let zu=0;class Qn extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Yt(),this.name="",this.type="Material",this.blending=vi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zs,this.blendDst=js,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zs&&(n.blendSrc=this.blendSrc),this.blendDst!==js&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fn=new D,Ps=new D,dr=new D,Dn=new D,Ds=new D,pr=new D,Is=new D;class Zr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ps.copy(e).add(t).multiplyScalar(.5),dr.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(Ps);const s=e.distanceTo(t)*.5,a=-this.direction.dot(dr),o=Dn.dot(this.direction),c=-Dn.dot(dr),l=Dn.lengthSq(),u=Math.abs(1-a*a);let f,h,d,m;if(u>0)if(f=a*c-o,h=a*o-c,m=s*u,f>=0)if(h>=-m)if(h<=m){const M=1/u;f*=M,h*=M,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-m?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l):h<=m?(f=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ps).addScaledVector(dr,h),d}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),r=fn.dot(fn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,r,s){Ds.subVectors(t,e),pr.subVectors(n,e),Is.crossVectors(Ds,pr);let a=this.direction.dot(Is),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);const c=o*this.direction.dot(pr.crossVectors(Dn,pr));if(c<0)return null;const l=o*this.direction.dot(Ds.cross(Dn));if(l<0||c+l>a)return null;const u=-o*Dn.dot(Is);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xc extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jo=new Ge,Gn=new Zr,mr=new yn,Qo=new D,gr=new D,_r=new D,vr=new D,Ls=new D,xr=new D,el=new D,Mr=new D;class Vt extends ht{constructor(e=new Ct,t=new xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){xr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Ls.fromBufferAttribute(f,e),a?xr.addScaledVector(Ls,u):xr.addScaledVector(Ls.sub(t),u))}t.add(xr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(s),Gn.copy(e.ray).recast(e.near),!(mr.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(mr,Qo)===null||Gn.origin.distanceToSquared(Qo)>(e.far-e.near)**2))&&(jo.copy(s).invert(),Gn.copy(e.ray).applyMatrix4(jo),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,M=h.length;m<M;m++){const g=h[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let E=x,w=y;E<w;E+=3){const A=o.getX(E),C=o.getX(E+1),v=o.getX(E+2);r=Sr(this,p,e,n,l,u,f,A,C,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let g=m,p=M;g<p;g+=3){const x=o.getX(g),y=o.getX(g+1),E=o.getX(g+2);r=Sr(this,a,e,n,l,u,f,x,y,E),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,M=h.length;m<M;m++){const g=h[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let E=x,w=y;E<w;E+=3){const A=E,C=E+1,v=E+2;r=Sr(this,p,e,n,l,u,f,A,C,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let g=m,p=M;g<p;g+=3){const x=g,y=g+1,E=g+2;r=Sr(this,a,e,n,l,u,f,x,y,E),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Vu(i,e,t,n,r,s,a,o){let c;if(e.side===Rt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Fn,o),c===null)return null;Mr.copy(o),Mr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Mr);return l<t.near||l>t.far?null:{distance:l,point:Mr.clone(),object:i}}function Sr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,gr),i.getVertexPosition(c,_r),i.getVertexPosition(l,vr);const u=Vu(i,e,t,n,gr,_r,vr,el);if(u){const f=new D;qt.getBarycoord(el,gr,_r,vr,f),r&&(u.uv=qt.getInterpolatedAttribute(r,o,c,l,f,new Ae)),s&&(u.uv1=qt.getInterpolatedAttribute(s,o,c,l,f,new Ae)),a&&(u.normal=qt.getInterpolatedAttribute(a,o,c,l,f,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new D,materialIndex:0};qt.getNormal(gr,_r,vr,h.normal),u.face=h,u.barycoord=f}return u}const tl=new D,nl=new st,il=new st,ku=new D,rl=new Ge,yr=new D,Ns=new yn,sl=new Ge,Us=new Zr;class j_ extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Io,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,yr),this.boundingBox.expandByPoint(yr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,yr),this.boundingSphere.expandByPoint(yr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(r),e.ray.intersectsSphere(Ns)!==!1&&(sl.copy(r).invert(),Us.copy(e.ray).applyMatrix4(sl),!(this.boundingBox!==null&&Us.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Us)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Io?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xh?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ee("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;nl.fromBufferAttribute(r.attributes.skinIndex,e),il.fromBufferAttribute(r.attributes.skinWeight,e),tl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=il.getComponent(s);if(a!==0){const o=nl.getComponent(s);rl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ku.copy(tl).applyMatrix4(rl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gu extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ro extends Tt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Mt,u=Mt,f,h){super(null,a,o,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const al=new Ge,Hu=new Ge;class Mc{constructor(e=[],t=[]){this.uuid=Yt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ee("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Hu;al.multiplyMatrices(o,t[s]),al.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Mc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ro(t,e,e,Bt,Ot);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Ee("Skeleton: No bone found with UUID:",s),a=new Gu),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class ol extends zt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const di=new Ge,ll=new Ge,Er=[],cl=new On,Wu=new Ge,Ui=new Vt,Fi=new yn;class Q_ extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ol(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Wu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,di),cl.copy(e.boundingBox).applyMatrix4(di),this.boundingBox.union(cl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,di),Fi.copy(e.boundingSphere).applyMatrix4(di),this.boundingSphere.union(Fi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ui.geometry=this.geometry,Ui.material=this.material,Ui.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fi.copy(this.boundingSphere),Fi.applyMatrix4(n),e.ray.intersectsSphere(Fi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,di),ll.multiplyMatrices(n,di),Ui.matrixWorld=ll,Ui.raycast(e,Er);for(let a=0,o=Er.length;a<o;a++){const c=Er[a];c.instanceId=s,c.object=this,t.push(c)}Er.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ol(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ro(new Float32Array(r*this.count),r,this.count,$a,Ot));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fs=new D,Xu=new D,qu=new Ne;class qn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Fs.subVectors(n,t).cross(Xu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qu.getNormalMatrix(e),r=this.coplanarPoint(Fs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new yn,Yu=new Ae(.5,.5),br=new D;class so{constructor(e=new qn,t=new qn,n=new qn,r=new qn,s=new qn,a=new qn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qt,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],d=s[7],m=s[8],M=s[9],g=s[10],p=s[11],x=s[12],y=s[13],E=s[14],w=s[15];if(r[0].setComponents(l-a,d-u,p-m,w-x).normalize(),r[1].setComponents(l+a,d+u,p+m,w+x).normalize(),r[2].setComponents(l+o,d+f,p+M,w+y).normalize(),r[3].setComponents(l-o,d-f,p-M,w-y).normalize(),n)r[4].setComponents(c,h,g,E).normalize(),r[5].setComponents(l-c,d-h,p-g,w-E).normalize();else if(r[4].setComponents(l-c,d-h,p-g,w-E).normalize(),t===Qt)r[5].setComponents(l+c,d+h,p+g,w+E).normalize();else if(t===Ki)r[5].setComponents(c,h,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){Hn.center.set(0,0,0);const t=Yu.distanceTo(e.center);return Hn.radius=.7071067811865476+t,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(br.x=r.normal.x>0?e.max.x:e.min.x,br.y=r.normal.y>0?e.max.y:e.min.y,br.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ju extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qr=new D,Yr=new D,hl=new Ge,Oi=new Zr,Tr=new yn,Os=new D,ul=new D;class Sc extends ht{constructor(e=new Ct,t=new Ju){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)qr.fromBufferAttribute(t,r-1),Yr.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=qr.distanceTo(Yr);e.setAttribute("lineDistance",new dt(n,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),Tr.radius+=s,e.ray.intersectsSphere(Tr)===!1)return;hl.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(hl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let M=d,g=m-1;M<g;M+=l){const p=u.getX(M),x=u.getX(M+1),y=Ar(this,e,Oi,c,p,x,M);y&&t.push(y)}if(this.isLineLoop){const M=u.getX(m-1),g=u.getX(d),p=Ar(this,e,Oi,c,M,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let M=d,g=m-1;M<g;M+=l){const p=Ar(this,e,Oi,c,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){const M=Ar(this,e,Oi,c,m-1,d,m-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ar(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(qr.fromBufferAttribute(o,r),Yr.fromBufferAttribute(o,s),t.distanceSqToSegment(qr,Yr,Os,ul)>n)return;Os.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Os);if(!(l<e.near||l>e.far))return{distance:l,point:ul.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const fl=new D,dl=new D;class e0 extends Sc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)fl.fromBufferAttribute(t,r),dl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+fl.distanceTo(dl);e.setAttribute("lineDistance",new dt(n,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class t0 extends Sc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ku extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pl=new Ge,Ga=new Zr,wr=new yn,Rr=new D;class n0 extends ht{constructor(e=new Ct,t=new Ku){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),wr.radius+=s,e.ray.intersectsSphere(wr)===!1)return;pl.copy(r).invert(),Ga.copy(e.ray).applyMatrix4(pl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=h,M=d;m<M;m++){const g=l.getX(m);Rr.fromBufferAttribute(f,g),ml(Rr,g,c,r,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=h,M=d;m<M;m++)Rr.fromBufferAttribute(f,m),ml(Rr,m,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ml(i,e,t,n,r,s,a){const o=Ga.distanceSqToPoint(i);if(o<t){const c=new D;Ga.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class yc extends Tt{constructor(e=[],t=Zn,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zi extends Tt{constructor(e,t,n=nn,r,s,a,o=Mt,c=Mt,l,u=Sn,f=1){if(u!==Sn&&u!==$n)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $u extends Zi{constructor(e,t=nn,n=Zn,r,s,a=Mt,o=Mt,c,l=Sn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ec extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ji extends Ct{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(f,2));function m(M,g,p,x,y,E,w,A,C,v,b){const k=E/C,R=w/v,U=E/2,z=w/2,W=A/2,G=C+1,V=v+1;let B=0,Q=0;const $=new D;for(let ce=0;ce<V;ce++){const pe=ce*R-z;for(let ue=0;ue<G;ue++){const Ue=ue*k-U;$[M]=Ue*x,$[g]=pe*y,$[p]=W,l.push($.x,$.y,$.z),$[M]=0,$[g]=0,$[p]=A>0?1:-1,u.push($.x,$.y,$.z),f.push(ue/C),f.push(1-ce/v),B+=1}}for(let ce=0;ce<v;ce++)for(let pe=0;pe<C;pe++){const ue=h+pe+G*ce,Ue=h+pe+G*(ce+1),at=h+(pe+1)+G*(ce+1),rt=h+(pe+1)+G*ce;c.push(ue,Ue,rt),c.push(Ue,at,rt),Q+=6}o.addGroup(d,Q,b),d+=Q,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ao extends Ct{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),u(),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(s.slice(),3)),this.setAttribute("uv",new dt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new D,E=new D,w=new D;for(let A=0;A<t.length;A+=3)d(t[A+0],y),d(t[A+1],E),d(t[A+2],w),c(y,E,w,x)}function c(x,y,E,w){const A=w+1,C=[];for(let v=0;v<=A;v++){C[v]=[];const b=x.clone().lerp(E,v/A),k=y.clone().lerp(E,v/A),R=A-v;for(let U=0;U<=R;U++)U===0&&v===A?C[v][U]=b:C[v][U]=b.clone().lerp(k,U/R)}for(let v=0;v<A;v++)for(let b=0;b<2*(A-v)-1;b++){const k=Math.floor(b/2);b%2===0?(h(C[v][k+1]),h(C[v+1][k]),h(C[v][k])):(h(C[v][k+1]),h(C[v+1][k+1]),h(C[v+1][k]))}}function l(x){const y=new D;for(let E=0;E<s.length;E+=3)y.x=s[E+0],y.y=s[E+1],y.z=s[E+2],y.normalize().multiplyScalar(x),s[E+0]=y.x,s[E+1]=y.y,s[E+2]=y.z}function u(){const x=new D;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const E=g(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;a.push(E,1-w)}m(),f()}function f(){for(let x=0;x<a.length;x+=6){const y=a[x+0],E=a[x+2],w=a[x+4],A=Math.max(y,E,w),C=Math.min(y,E,w);A>.9&&C<.1&&(y<.2&&(a[x+0]+=1),E<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function h(x){s.push(x.x,x.y,x.z)}function d(x,y){const E=x*3;y.x=e[E+0],y.y=e[E+1],y.z=e[E+2]}function m(){const x=new D,y=new D,E=new D,w=new D,A=new Ae,C=new Ae,v=new Ae;for(let b=0,k=0;b<s.length;b+=9,k+=6){x.set(s[b+0],s[b+1],s[b+2]),y.set(s[b+3],s[b+4],s[b+5]),E.set(s[b+6],s[b+7],s[b+8]),A.set(a[k+0],a[k+1]),C.set(a[k+2],a[k+3]),v.set(a[k+4],a[k+5]),w.copy(x).add(y).add(E).divideScalar(3);const R=g(w);M(A,k+0,x,R),M(C,k+2,y,R),M(v,k+4,E,R)}}function M(x,y,E,w){w<0&&x.x===1&&(a[y]=x.x-1),E.x===0&&E.z===0&&(a[y]=w/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.vertices,e.indices,e.radius,e.detail)}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ee("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const u=n[r],h=n[r+1]-u,d=(a-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new Ae:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,r=[],s=[],a=[],o=new D,c=new Ge;for(let d=0;d<=e;d++){const m=d/e;r[d]=this.getTangentAt(m,new D)}s[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ve(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Ve(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],d*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class bc extends En{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ae){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Zu extends bc{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function oo(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,f){let h=(a-s)/l-(o-s)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,d*=u,r(a,o,h,d)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Cr=new D,Bs=new oo,zs=new oo,Vs=new oo;class ju extends En{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(Cr.subVectors(r[0],r[1]).add(r[0]),l=Cr);const f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Cr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Cr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);M<1e-4&&(M=1),m<1e-4&&(m=M),g<1e-4&&(g=M),Bs.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,m,M,g),zs.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,m,M,g),Vs.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,m,M,g)}else this.curveType==="catmullrom"&&(Bs.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),zs.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Vs.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Bs.calc(c),zs.calc(c),Vs.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gl(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*i+t}function Qu(i,e){const t=1-i;return t*t*e}function ef(i,e){return 2*(1-i)*i*e}function tf(i,e){return i*i*e}function Xi(i,e,t,n){return Qu(i,e)+ef(i,t)+tf(i,n)}function nf(i,e){const t=1-i;return t*t*t*e}function rf(i,e){const t=1-i;return 3*t*t*i*e}function sf(i,e){return 3*(1-i)*i*i*e}function af(i,e){return i*i*i*e}function qi(i,e,t,n,r){return nf(i,e)+rf(i,t)+sf(i,n)+af(i,r)}class of extends En{constructor(e=new Ae,t=new Ae,n=new Ae,r=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ae){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(qi(e,r.x,s.x,a.x,o.x),qi(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lf extends En{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(qi(e,r.x,s.x,a.x,o.x),qi(e,r.y,s.y,a.y,o.y),qi(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cf extends En{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hf extends En{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uf extends En{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Xi(e,r.x,s.x,a.x),Xi(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tc extends En{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Xi(e,r.x,s.x,a.x),Xi(e,r.y,s.y,a.y),Xi(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ff extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(gl(o,c.x,l.x,u.x,f.x),gl(o,c.y,l.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Ae().fromArray(r))}return this}}var df=Object.freeze({__proto__:null,ArcCurve:Zu,CatmullRomCurve3:ju,CubicBezierCurve:of,CubicBezierCurve3:lf,EllipseCurve:bc,LineCurve:cf,LineCurve3:hf,QuadraticBezierCurve:uf,QuadraticBezierCurve3:Tc,SplineCurve:ff});class Ac extends ao{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ac(e.radius,e.detail)}}class jr extends Ct{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=e/o,h=t/c,d=[],m=[],M=[],g=[];for(let p=0;p<u;p++){const x=p*h-a;for(let y=0;y<l;y++){const E=y*f-s;m.push(E,-x,0),M.push(0,0,1),g.push(y/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const y=x+l*p,E=x+l*(p+1),w=x+1+l*(p+1),A=x+1+l*p;d.push(y,E,A),d.push(E,w,A)}this.setIndex(d),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(M,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.widthSegments,e.heightSegments)}}class wc extends Ct{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const c=[],l=[],u=[],f=[],h=new D,d=new D,m=new D;for(let M=0;M<=n;M++){const g=a+M/n*o;for(let p=0;p<=r;p++){const x=p/r*s;d.x=(e+t*Math.cos(g))*Math.cos(x),d.y=(e+t*Math.cos(g))*Math.sin(x),d.z=t*Math.sin(g),l.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),m.subVectors(d,h).normalize(),u.push(m.x,m.y,m.z),f.push(p/r),f.push(M/n)}}for(let M=1;M<=n;M++)for(let g=1;g<=r;g++){const p=(r+1)*M+g-1,x=(r+1)*(M-1)+g-1,y=(r+1)*(M-1)+g,E=(r+1)*M+g;c.push(p,x,E),c.push(x,y,E)}this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Rc extends Ct{constructor(e=new Tc(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,c=new D,l=new Ae;let u=new D;const f=[],h=[],d=[],m=[];M(),this.setIndex(m),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2));function M(){for(let y=0;y<t;y++)g(y);g(s===!1?t:0),x(),p()}function g(y){u=e.getPointAt(y/t,u);const E=a.normals[y],w=a.binormals[y];for(let A=0;A<=r;A++){const C=A/r*Math.PI*2,v=Math.sin(C),b=-Math.cos(C);c.x=b*E.x+v*w.x,c.y=b*E.y+v*w.y,c.z=b*E.z+v*w.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let E=1;E<=r;E++){const w=(r+1)*(y-1)+(E-1),A=(r+1)*y+(E-1),C=(r+1)*y+E,v=(r+1)*(y-1)+E;m.push(w,A,v),m.push(A,C,v)}}function x(){for(let y=0;y<=t;y++)for(let E=0;E<=r;E++)l.x=y/t,l.y=E/r,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Rc(new df[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ti(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function wt(i){const e={};for(let t=0;t<i.length;t++){const n=Ti(i[t]);for(const r in n)e[r]=n[r]}return e}function pf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const mf={clone:Ti,merge:wt};var gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gf,this.fragmentShader=_f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vf extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xf extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class i0 extends xf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Mf extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sf extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Pr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function yf(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function _l(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function Pc(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class Qi{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ef extends Qi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:No,endingEnd:No}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uo:s=e,o=2*t-n;break;case Fo:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Uo:a=e,c=2*n-t;break;case Fo:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-t)/(r-t),M=m*m,g=M*m,p=-h*g+2*h*M-h*m,x=(1+h)*g+(-1.5-2*h)*M+(-.5+h)*m+1,y=(-1-d)*g+(1.5+d)*M+.5*m,E=d*g-d*M;for(let w=0;w!==o;++w)s[w]=p*a[u+w]+x*a[l+w]+y*a[c+w]+E*a[f+w];return s}}class bf extends Qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==o;++h)s[h]=a[l+h]*f+a[c+h]*u;return s}}class Tf extends Qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Af extends Qi{interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.settings||this.DefaultSettings_,f=u.inTangents,h=u.outTangents;if(!f||!h){const M=(n-t)/(r-t),g=1-M;for(let p=0;p!==o;++p)s[p]=a[l+p]*g+a[c+p]*M;return s}const d=o*2,m=e-1;for(let M=0;M!==o;++M){const g=a[l+M],p=a[c+M],x=m*d+M*2,y=h[x],E=h[x+1],w=e*d+M*2,A=f[w],C=f[w+1];let v=(n-t)/(r-t),b,k,R,U,z;for(let W=0;W<8;W++){b=v*v,k=b*v,R=1-v,U=R*R,z=U*R;const V=z*t+3*U*v*y+3*R*b*A+k*r-n;if(Math.abs(V)<1e-10)break;const B=3*U*(y-t)+6*R*v*(A-y)+3*b*(r-A);if(Math.abs(B)<1e-10)break;v=v-V/B,v=Math.max(0,Math.min(1,v))}s[M]=z*g+3*U*v*E+3*R*b*C+k*p}return s}}class Jt{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pr(t,this.TimeBufferType),this.values=Pr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pr(e.times,Array),values:Pr(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ef(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Af(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Gr:t=this.InterpolantFactoryMethodDiscrete;break;case Va:t=this.InterpolantFactoryMethodLinear;break;case fs:t=this.InterpolantFactoryMethodSmooth;break;case Lo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ee("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Va;case this.InterpolantFactoryMethodSmooth:return fs;case this.InterpolantFactoryMethodBezier:return Lo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ce("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(Ce("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Ce("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ce("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&iu(r))for(let o=0,c=r.length;o!==c;++o){const l=r[o];if(isNaN(l)){Ce("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===fs,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{const f=o*n,h=f-n,d=f+n;for(let m=0;m!==n;++m){const M=t[f+m];if(M!==t[h+m]||M!==t[d+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const f=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Jt.prototype.ValueTypeName="";Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=Va;class wi extends Jt{constructor(e,t,n){super(e,t,n)}}wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Gr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Dc extends Jt{constructor(e,t,n,r){super(e,t,n,r)}}Dc.prototype.ValueTypeName="color";class Jr extends Jt{constructor(e,t,n,r){super(e,t,n,r)}}Jr.prototype.ValueTypeName="number";class wf extends Qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t);let l=e*o;for(let u=l+o;l!==u;l+=4)jn.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Qr extends Jt{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new wf(this.times,this.values,this.getValueSize(),e)}}Qr.prototype.ValueTypeName="quaternion";Qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ri extends Jt{constructor(e,t,n){super(e,t,n)}}Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Gr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;class Kr extends Jt{constructor(e,t,n,r){super(e,t,n,r)}}Kr.prototype.ValueTypeName="vector";class r0{constructor(e="",t=-1,n=[],r=Yh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Yt(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Cf(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Jt.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=yf(c);c=_l(c,1,u),l=_l(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Jr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(l)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(Ee("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ce("AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,m,M){if(d.length!==0){const g=[],p=[];Pc(d,g,p,m),g.length!==0&&M.push(new f(h,g,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let f=0;f<l.length;f++){const h=l[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let M=0;M<h[m].morphTargets.length;M++)d[h[m].morphTargets[M]]=-1;for(const M in d){const g=[],p=[];for(let x=0;x!==h[m].morphTargets.length;++x){const y=h[m];g.push(y.time),p.push(y.morphTarget===M?1:0)}r.push(new Jr(".morphTargetInfluence["+M+"]",g,p))}c=d.length*a}else{const d=".bones["+t[f].name+"]";n(Kr,d+".position",h,"pos",r),n(Qr,d+".quaternion",h,"rot",r),n(Kr,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,c,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Rf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Jr;case"vector":case"vector2":case"vector3":case"vector4":return Kr;case"color":return Dc;case"quaternion":return Qr;case"bool":case"boolean":return wi;case"string":return Ri}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Cf(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Rf(i.type);if(i.times===void 0){const t=[],n=[];Pc(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const _n={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(vl(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!vl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function vl(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Pf{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Df=new Pf;class er{constructor(e){this.manager=e!==void 0?e:Df,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}er.DEFAULT_MATERIAL_NAME="__DEFAULT";const dn={};class If extends Error{constructor(e,t){super(e),this.response=t}}class s0 extends er{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=_n.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(dn[e]!==void 0){dn[e].push({onLoad:t,onProgress:n,onError:r});return}dn[e]=[],dn[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=dn[e],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0;let M=0;const g=new ReadableStream({start(p){x();function x(){f.read().then(({done:y,value:E})=>{if(y)p.close();else{M+=E.byteLength;const w=new ProgressEvent("progress",{lengthComputable:m,loaded:M,total:d});for(let A=0,C=u.length;A<C;A++){const v=u[A];v.onProgress&&v.onProgress(w)}p.enqueue(E),x()}},y=>{p.error(y)})}}});return new Response(g)}else throw new If(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{_n.add(`file:${e}`,l);const u=dn[e];delete dn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=dn[e];if(u===void 0)throw this.manager.itemError(e),l;delete dn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const pi=new WeakMap;class Lf extends er{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=_n.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=pi.get(a);f===void 0&&(f=[],pi.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=$i("img");function c(){u(),t&&t(this);const f=pi.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}pi.delete(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),_n.remove(`image:${e}`);const h=pi.get(this)||[];for(let d=0;d<h.length;d++){const m=h[d];m.onError&&m.onError(f)}pi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),_n.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class a0 extends er{constructor(e){super(e)}load(e,t,n,r){const s=new Tt,a=new Lf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class es extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ks=new Ge,xl=new D,Ml=new D;class lo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=Nt,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xl.setFromMatrixPosition(e.matrixWorld),t.position.copy(xl),Ml.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ml),t.updateMatrixWorld(),ks.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ks,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ki||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ks)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dr=new D,Ir=new jn,$t=new D;class Ic extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Qt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Dr,Ir,$t),$t.x===1&&$t.y===1&&$t.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Ir,$t.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Dr,Ir,$t),$t.x===1&&$t.y===1&&$t.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Ir,$t.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const In=new D,Sl=new Ae,yl=new Ae;class Lt extends Ic{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bi*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(In.x,In.y).multiplyScalar(-e/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-e/In.z)}getViewSize(e,t){return this.getViewBounds(e,Sl,yl),t.subVectors(yl,Sl)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Nf extends lo{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=bi*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class o0 extends es{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Nf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Uf extends lo{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0}}class l0 extends es{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Uf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class co extends Ic{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ff extends lo{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class c0 extends es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Ff}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class h0 extends es{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class u0{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Gs=new WeakMap;class f0 extends er{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ee("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ee("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=_n.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{if(Gs.has(a)===!0)r&&r(Gs.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return _n.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Gs.set(c,l),_n.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});_n.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const mi=-90,gi=1;class Of extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Lt(mi,gi,e,t);r.layers=this.layers,this.add(r);const s=new Lt(mi,gi,e,t);s.layers=this.layers,this.add(s);const a=new Lt(mi,gi,e,t);a.layers=this.layers,this.add(a);const o=new Lt(mi,gi,e,t);o.layers=this.layers,this.add(o);const c=new Lt(mi,gi,e,t);c.layers=this.layers,this.add(c);const l=new Lt(mi,gi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Qt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ki)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Bf extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ho="\\[\\]\\.:\\/",zf=new RegExp("["+ho+"]","g"),uo="[^"+ho+"]",Vf="[^"+ho.replace("\\.","")+"]",kf=/((?:WC+[\/:])*)/.source.replace("WC",uo),Gf=/(WCOD+)?/.source.replace("WCOD",Vf),Hf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uo),Wf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uo),Xf=new RegExp("^"+kf+Gf+Hf+Wf+"$"),qf=["material","materials","bones","map"];class Yf{constructor(e,t,n){const r=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zf,"")}static parseTrackName(e){const t=Xf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);qf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[r];if(a===void 0){const l=t.nodeName;Ce("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=Yf;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function El(i,e,t,n){const r=Jf(n);switch(t){case lc:return i*e;case $a:return i*e/r.components*r.byteLength;case Za:return i*e/r.components*r.byteLength;case yi:return i*e*2/r.components*r.byteLength;case ja:return i*e*2/r.components*r.byteLength;case cc:return i*e*3/r.components*r.byteLength;case Bt:return i*e*4/r.components*r.byteLength;case Qa:return i*e*4/r.components*r.byteLength;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ca:case ua:return Math.max(i,16)*Math.max(e,8)/4;case la:case ha:return Math.max(i,8)*Math.max(e,8)/2;case fa:case da:case ma:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pa:case _a:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case La:case Na:case Ua:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ba:case za:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jf(i){switch(i){case Nt:case rc:return{byteLength:1,components:1};case Yi:case sc:case Mn:return{byteLength:2,components:1};case Ja:case Ka:return{byteLength:2,components:4};case nn:case Ya:case Ot:return{byteLength:4,components:1};case ac:case oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);function Lc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Kf(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],M=f[d];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++h,f[h]=M)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const M=f[d];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var $f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ed=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ld=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Md=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Od=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Np=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,im=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_m=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:$f,alphahash_pars_fragment:Zf,alphamap_fragment:jf,alphamap_pars_fragment:Qf,alphatest_fragment:ed,alphatest_pars_fragment:td,aomap_fragment:nd,aomap_pars_fragment:id,batching_pars_vertex:rd,batching_vertex:sd,begin_vertex:ad,beginnormal_vertex:od,bsdfs:ld,iridescence_fragment:cd,bumpmap_pars_fragment:hd,clipping_planes_fragment:ud,clipping_planes_pars_fragment:fd,clipping_planes_pars_vertex:dd,clipping_planes_vertex:pd,color_fragment:md,color_pars_fragment:gd,color_pars_vertex:_d,color_vertex:vd,common:xd,cube_uv_reflection_fragment:Md,defaultnormal_vertex:Sd,displacementmap_pars_vertex:yd,displacementmap_vertex:Ed,emissivemap_fragment:bd,emissivemap_pars_fragment:Td,colorspace_fragment:Ad,colorspace_pars_fragment:wd,envmap_fragment:Rd,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Pd,envmap_pars_vertex:Dd,envmap_physical_pars_fragment:Gd,envmap_vertex:Id,fog_vertex:Ld,fog_pars_vertex:Nd,fog_fragment:Ud,fog_pars_fragment:Fd,gradientmap_pars_fragment:Od,lightmap_pars_fragment:Bd,lights_lambert_fragment:zd,lights_lambert_pars_fragment:Vd,lights_pars_begin:kd,lights_toon_fragment:Hd,lights_toon_pars_fragment:Wd,lights_phong_fragment:Xd,lights_phong_pars_fragment:qd,lights_physical_fragment:Yd,lights_physical_pars_fragment:Jd,lights_fragment_begin:Kd,lights_fragment_maps:$d,lights_fragment_end:Zd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:Qd,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:tp,map_fragment:np,map_pars_fragment:ip,map_particle_fragment:rp,map_particle_pars_fragment:sp,metalnessmap_fragment:ap,metalnessmap_pars_fragment:op,morphinstance_vertex:lp,morphcolor_vertex:cp,morphnormal_vertex:hp,morphtarget_pars_vertex:up,morphtarget_vertex:fp,normal_fragment_begin:dp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:_p,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:Sp,iridescence_pars_fragment:yp,opaque_fragment:Ep,packing:bp,premultiplied_alpha_fragment:Tp,project_vertex:Ap,dithering_fragment:wp,dithering_pars_fragment:Rp,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Lp,shadowmask_pars_fragment:Np,skinbase_vertex:Up,skinning_pars_vertex:Fp,skinning_vertex:Op,skinnormal_vertex:Bp,specularmap_fragment:zp,specularmap_pars_fragment:Vp,tonemapping_fragment:kp,tonemapping_pars_fragment:Gp,transmission_fragment:Hp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:qp,uv_vertex:Yp,worldpos_vertex:Jp,background_vert:Kp,background_frag:$p,backgroundCube_vert:Zp,backgroundCube_frag:jp,cube_vert:Qp,cube_frag:em,depth_vert:tm,depth_frag:nm,distance_vert:im,distance_frag:rm,equirect_vert:sm,equirect_frag:am,linedashed_vert:om,linedashed_frag:lm,meshbasic_vert:cm,meshbasic_frag:hm,meshlambert_vert:um,meshlambert_frag:fm,meshmatcap_vert:dm,meshmatcap_frag:pm,meshnormal_vert:mm,meshnormal_frag:gm,meshphong_vert:_m,meshphong_frag:vm,meshphysical_vert:xm,meshphysical_frag:Mm,meshtoon_vert:Sm,meshtoon_frag:ym,points_vert:Em,points_frag:bm,shadow_vert:Tm,shadow_frag:Am,sprite_vert:wm,sprite_frag:Rm},ae={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},jt={basic:{uniforms:wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:wt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:wt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ke(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:wt([ae.points,ae.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:wt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:wt([ae.common,ae.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:wt([ae.sprite,ae.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:wt([ae.common,ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:wt([ae.lights,ae.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};jt.physical={uniforms:wt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Lr={r:0,b:0,g:0},Wn=new rn,Cm=new Ge;function Pm(i,e,t,n,r,s){const a=new ke(0);let o=r===!0?0:1,c,l,u=null,f=0,h=null;function d(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const E=x.backgroundBlurriness>0;y=e.get(y,E)}return y}function m(x){let y=!1;const E=d(x);E===null?g(a,o):E&&E.isColor&&(g(E,1),y=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(x,y){const E=d(y);E&&(E.isCubeTexture||E.mapping===$r)?(l===void 0&&(l=new Vt(new ji(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Ti(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),Wn.copy(y.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),l.material.uniforms.envMap.value=E,l.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(Wn)),l.material.toneMapped=We.getTransfer(E.colorSpace)!==Ke,(u!==E||f!==E.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Vt(new jr(2,2),new sn({name:"BackgroundMaterial",uniforms:Ti(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=We.getTransfer(E.colorSpace)!==Ke,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,y){x.getRGB(Lr,Cc(i)),t.buffers.color.setClear(Lr.r,Lr.g,Lr.b,y,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:m,addToRenderList:M,dispose:p}}function Dm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(R,U,z,W,G){let V=!1;const B=f(R,W,z,U);s!==B&&(s=B,l(s.object)),V=d(R,W,z,G),V&&m(R,W,z,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,E(R,U,z,W),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function f(R,U,z,W){const G=W.wireframe===!0;let V=n[U.id];V===void 0&&(V={},n[U.id]=V);const B=R.isInstancedMesh===!0?R.id:0;let Q=V[B];Q===void 0&&(Q={},V[B]=Q);let $=Q[z.id];$===void 0&&($={},Q[z.id]=$);let ce=$[G];return ce===void 0&&(ce=h(c()),$[G]=ce),ce}function h(R){const U=[],z=[],W=[];for(let G=0;G<t;G++)U[G]=0,z[G]=0,W[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:W,object:R,attributes:{},index:null}}function d(R,U,z,W){const G=s.attributes,V=U.attributes;let B=0;const Q=z.getAttributes();for(const $ in Q)if(Q[$].location>=0){const pe=G[$];let ue=V[$];if(ue===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),pe===void 0||pe.attribute!==ue||ue&&pe.data!==ue.data)return!0;B++}return s.attributesNum!==B||s.index!==W}function m(R,U,z,W){const G={},V=U.attributes;let B=0;const Q=z.getAttributes();for(const $ in Q)if(Q[$].location>=0){let pe=V[$];pe===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor));const ue={};ue.attribute=pe,pe&&pe.data&&(ue.data=pe.data),G[$]=ue,B++}s.attributes=G,s.attributesNum=B,s.index=W}function M(){const R=s.newAttributes;for(let U=0,z=R.length;U<z;U++)R[U]=0}function g(R){p(R,0)}function p(R,U){const z=s.newAttributes,W=s.enabledAttributes,G=s.attributeDivisors;z[R]=1,W[R]===0&&(i.enableVertexAttribArray(R),W[R]=1),G[R]!==U&&(i.vertexAttribDivisor(R,U),G[R]=U)}function x(){const R=s.newAttributes,U=s.enabledAttributes;for(let z=0,W=U.length;z<W;z++)U[z]!==R[z]&&(i.disableVertexAttribArray(z),U[z]=0)}function y(R,U,z,W,G,V,B){B===!0?i.vertexAttribIPointer(R,U,z,G,V):i.vertexAttribPointer(R,U,z,W,G,V)}function E(R,U,z,W){M();const G=W.attributes,V=z.getAttributes(),B=U.defaultAttributeValues;for(const Q in V){const $=V[Q];if($.location>=0){let ce=G[Q];if(ce===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const pe=ce.normalized,ue=ce.itemSize,Ue=e.get(ce);if(Ue===void 0)continue;const at=Ue.buffer,rt=Ue.type,J=Ue.bytesPerElement,ne=rt===i.INT||rt===i.UNSIGNED_INT||ce.gpuType===Ya;if(ce.isInterleavedBufferAttribute){const se=ce.data,Le=se.stride,we=ce.offset;if(se.isInstancedInterleavedBuffer){for(let Pe=0;Pe<$.locationSize;Pe++)p($.location+Pe,se.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Pe=0;Pe<$.locationSize;Pe++)g($.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Pe=0;Pe<$.locationSize;Pe++)y($.location+Pe,ue/$.locationSize,rt,pe,Le*J,(we+ue/$.locationSize*Pe)*J,ne)}else{if(ce.isInstancedBufferAttribute){for(let se=0;se<$.locationSize;se++)p($.location+se,ce.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let se=0;se<$.locationSize;se++)g($.location+se);i.bindBuffer(i.ARRAY_BUFFER,at);for(let se=0;se<$.locationSize;se++)y($.location+se,ue/$.locationSize,rt,pe,ue*J,ue/$.locationSize*se*J,ne)}}else if(B!==void 0){const pe=B[Q];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv($.location,pe);break;case 3:i.vertexAttrib3fv($.location,pe);break;case 4:i.vertexAttrib4fv($.location,pe);break;default:i.vertexAttrib1fv($.location,pe)}}}}x()}function w(){b();for(const R in n){const U=n[R];for(const z in U){const W=U[z];for(const G in W){const V=W[G];for(const B in V)u(V[B].object),delete V[B];delete W[G]}}delete n[R]}}function A(R){if(n[R.id]===void 0)return;const U=n[R.id];for(const z in U){const W=U[z];for(const G in W){const V=W[G];for(const B in V)u(V[B].object),delete V[B];delete W[G]}}delete n[R.id]}function C(R){for(const U in n){const z=n[U];for(const W in z){const G=z[W];if(G[R.id]===void 0)continue;const V=G[R.id];for(const B in V)u(V[B].object),delete V[B];delete G[R.id]}}}function v(R){for(const U in n){const z=n[U],W=R.isInstancedMesh===!0?R.id:0,G=z[W];if(G!==void 0){for(const V in G){const B=G[V];for(const Q in B)u(B[Q].object),delete B[Q];delete G[V]}delete z[W],Object.keys(z).length===0&&delete n[U]}}}function b(){k(),a=!0,s!==r&&(s=r,l(s.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:k,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:g,disableUnusedAttributes:x}}function Im(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let d=0;for(let m=0;m<f;m++)d+=u[m];t.update(d,n,1)}function c(l,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)a(l[m],u[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,f);let m=0;for(let M=0;M<f;M++)m+=u[M]*h[M];t.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Lm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Bt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Nt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ot&&!v)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ee("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:E,maxSamples:w,samples:A}}function Nm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new qn,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!r||m===null||m.length===0||s&&!g)s?u(null):l();else{const x=s?0:n,y=x*4;let E=p.clippingState||null;c.value=E,E=u(m,h,y,d);for(let w=0;w!==y;++w)E[w]=t[w];p.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,m){const M=f!==null?f.length:0;let g=null;if(M!==0){if(g=c.value,m!==!0||g===null){const p=d+M*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,E=d;y!==M;++y,E+=4)a.copy(f[y]).applyMatrix4(x,o),a.normal.toArray(g,E),g[E+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const Un=4,bl=[.125,.215,.35,.446,.526,.582],Jn=20,Um=256,Bi=new co,Tl=new ke;let Hs=null,Ws=0,Xs=0,qs=!1;const Fm=new D;class Al{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Fm}=s;Hs=this._renderer.getRenderTarget(),Ws=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hs,Ws,Xs),this._renderer.xr.enabled=qs,e.scissorTest=!1,_i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zn||e.mapping===Si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hs=this._renderer.getRenderTarget(),Ws=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:Mn,format:Bt,colorSpace:Ei,depthBuffer:!1},r=wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Om(s)),this._blurMaterial=zm(s,e,t),this._ggxMaterial=Bm(s,e,t)}return r}_compileMaterial(e){const t=new Vt(new Ct,e);this._renderer.compile(t,Bi)}_sceneToCubeUV(e,t,n,r,s){const c=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Tl),f.toneMapping=en,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new ji,new xc({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let p=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,p=!0):(g.color.copy(Tl),p=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):E===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const w=this._cubeSize;_i(r,E*w,y>2?w:0,w,w),f.setRenderTarget(r),p&&f.render(M,c),f.render(e,c)}f.toneMapping=d,f.autoClear=h,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Zn||e.mapping===Si;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;_i(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Bi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=0+l*1.25,d=f*h,{_lodMax:m}=this,M=this._sizeLods[n],g=3*M*(n>m-Un?n-m+Un:0),p=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=m-t,_i(s,g,p,3*M,2*M),r.setRenderTarget(s),r.render(o,Bi),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,_i(e,g,p,3*M,2*M),r.setRenderTarget(e),r.render(o,Bi)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=l;const h=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Jn-1),M=s/m,g=isFinite(s)?1+Math.floor(u*M):Jn;g>Jn&&Ee(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Jn}`);const p=[];let x=0;for(let C=0;C<Jn;++C){const v=C/M,b=Math.exp(-v*v/2);p.push(b),C===0?x+=b:C<g&&(x+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-n;const E=this._sizeLods[r],w=3*E*(r>y-Un?r-y+Un:0),A=4*(this._cubeSize-E);_i(t,w,A,3*E,2*E),c.setRenderTarget(t),c.render(f,Bi)}}function Om(i){const e=[],t=[],n=[];let r=i;const s=i-Un+1+bl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Un?c=bl[a-i+Un-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,M=3,g=2,p=1,x=new Float32Array(M*m*d),y=new Float32Array(g*m*d),E=new Float32Array(p*m*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,v=A>2?0:-1,b=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];x.set(b,M*m*A),y.set(h,g*m*A);const k=[A,A,A,A,A,A];E.set(k,p*m*A)}const w=new Ct;w.setAttribute("position",new zt(x,M)),w.setAttribute("uv",new zt(y,g)),w.setAttribute("faceIndex",new zt(E,p)),n.push(new Vt(w,null)),r>Un&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function wl(i,e,t){const n=new tn(i,e,t);return n.texture.mapping=$r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _i(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Bm(i,e,t){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Um,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ts(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function zm(i,e,t){const n=new Float32Array(Jn),r=new D(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Rl(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Cl(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function ts(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Nc extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new yc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ji(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:vn});s.uniforms.tEquirect.value=t;const a=new Vt(r,s),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=bt),new Of(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Vm(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===cs||d===hs)if(e.has(h)){const m=e.get(h).texture;return o(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const M=new Nc(m.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",l),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,m=d===cs||d===hs,M=d===Zn||d===Si;if(m||M){let g=t.get(h);const p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Al(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const x=h.image;return m&&x&&x.height>0||M&&x&&c(x)?(n===null&&(n=new Al(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,d){return d===cs?h.mapping=Zn:d===hs&&(h.mapping=Si),h}function c(h){let d=0;const m=6;for(let M=0;M<m;M++)h[M]!==void 0&&d++;return d===m}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function km(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Xr("WebGLRenderer: "+n+" extension not supported."),r}}}function Gm(i,e,t,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,m=f.attributes.position;let M=0;if(m===void 0)return;if(d!==null){const x=d.array;M=d.version;for(let y=0,E=x.length;y<E;y+=3){const w=x[y+0],A=x[y+1],C=x[y+2];h.push(w,A,A,C,C,w)}}else{const x=m.array;M=m.version;for(let y=0,E=x.length/3-1;y<E;y+=3){const w=y+0,A=y+1,C=y+2;h.push(w,A,A,C,C,w)}}const g=new(m.count>=65535?_c:gc)(h,1);g.version=M;const p=s.get(f);p&&e.remove(p),s.set(f,g)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Hm(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,d){i.drawElements(n,d,s,h*a),t.update(d,n,1)}function l(h,d,m){m!==0&&(i.drawElementsInstanced(n,d,s,h*a,m),t.update(d,n,m))}function u(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function f(h,d,m,M){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)l(h[p]/a,d[p],M[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,M,0,m);let p=0;for(let x=0;x<m;x++)p+=d[x]*M[x];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Wm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Ce("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Xm(i,e,t){const n=new WeakMap,r=new st;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),m===!0&&(y=2),M===!0&&(y=3);let E=o.attributes.position.count*y,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*w*4*f),C=new fc(A,E,w,f);C.type=Ot,C.needsUpdate=!0;const v=y*4;for(let k=0;k<f;k++){const R=g[k],U=p[k],z=x[k],W=E*w*4*k;for(let G=0;G<R.count;G++){const V=G*v;d===!0&&(r.fromBufferAttribute(R,G),A[W+V+0]=r.x,A[W+V+1]=r.y,A[W+V+2]=r.z,A[W+V+3]=0),m===!0&&(r.fromBufferAttribute(U,G),A[W+V+4]=r.x,A[W+V+5]=r.y,A[W+V+6]=r.z,A[W+V+7]=0),M===!0&&(r.fromBufferAttribute(z,G),A[W+V+8]=r.x,A[W+V+9]=r.y,A[W+V+10]=r.z,A[W+V+11]=z.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new Ae(E,w)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let M=0;M<l.length;M++)d+=l[M];const m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function qm(i,e,t,n,r){let s=new WeakMap;function a(l){const u=r.render.frame,f=l.geometry,h=e.get(l,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Ym={[$l]:"LINEAR_TONE_MAPPING",[Zl]:"REINHARD_TONE_MAPPING",[jl]:"CINEON_TONE_MAPPING",[Ql]:"ACES_FILMIC_TONE_MAPPING",[tc]:"AGX_TONE_MAPPING",[nc]:"NEUTRAL_TONE_MAPPING",[ec]:"CUSTOM_TONE_MAPPING"};function Jm(i,e,t,n,r){const s=new tn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),a=new tn(e,t,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),o=new Ct;o.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new dt([0,2,0,0,2,0],2));const c=new vf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Vt(o,c),u=new co(-1,1,1,-1,0,1);let f=null,h=null,d=!1,m,M=null,g=[],p=!1;this.setSize=function(x,y){s.setSize(x,y),a.setSize(x,y);for(let E=0;E<g.length;E++){const w=g[E];w.setSize&&w.setSize(x,y)}},this.setEffects=function(x){g=x,p=g.length>0&&g[0].isRenderPass===!0;const y=s.width,E=s.height;for(let w=0;w<g.length;w++){const A=g[w];A.setSize&&A.setSize(y,E)}},this.begin=function(x,y){if(d||x.toneMapping===en&&g.length===0)return!1;if(M=y,y!==null){const E=y.width,w=y.height;(s.width!==E||s.height!==w)&&this.setSize(E,w)}return p===!1&&x.setRenderTarget(s),m=x.toneMapping,x.toneMapping=en,!0},this.hasRenderPass=function(){return p},this.end=function(x,y){x.toneMapping=m,d=!0;let E=s,w=a;for(let A=0;A<g.length;A++){const C=g[A];if(C.enabled!==!1&&(C.render(x,w,E,y),C.needsSwap!==!1)){const v=E;E=w,w=v}}if(f!==x.outputColorSpace||h!==x.toneMapping){f=x.outputColorSpace,h=x.toneMapping,c.defines={},We.getTransfer(f)===Ke&&(c.defines.SRGB_TRANSFER="");const A=Ym[h];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(M),x.render(l,u),M=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Uc=new Tt,Ha=new Zi(1,1),Fc=new fc,Oc=new Ru,Bc=new yc,Pl=[],Dl=[],Il=new Float32Array(16),Ll=new Float32Array(9),Nl=new Float32Array(4);function Ci(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Pl[r];if(s===void 0&&(s=new Float32Array(r),Pl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ns(i,e){let t=Dl[e];t===void 0&&(t=new Int32Array(e),Dl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Km(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function Qm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Nl.set(n),i.uniformMatrix2fv(this.addr,!1,Nl),mt(t,n)}}function eg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Ll.set(n),i.uniformMatrix3fv(this.addr,!1,Ll),mt(t,n)}}function tg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Il.set(n),i.uniformMatrix4fv(this.addr,!1,Il),mt(t,n)}}function ng(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function ag(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function hg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ha.compareFunction=t.isReversedDepthBuffer()?to:eo,s=Ha):s=Uc,t.setTexture2D(e||s,r)}function ug(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Oc,r)}function fg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Bc,r)}function dg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Fc,r)}function pg(i){switch(i){case 5126:return Km;case 35664:return $m;case 35665:return Zm;case 35666:return jm;case 35674:return Qm;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return rg;case 35669:case 35673:return sg;case 5125:return ag;case 36294:return og;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return dg}}function mg(i,e){i.uniform1fv(this.addr,e)}function gg(i,e){const t=Ci(e,this.size,2);i.uniform2fv(this.addr,t)}function _g(i,e){const t=Ci(e,this.size,3);i.uniform3fv(this.addr,t)}function vg(i,e){const t=Ci(e,this.size,4);i.uniform4fv(this.addr,t)}function xg(i,e){const t=Ci(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mg(i,e){const t=Ci(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sg(i,e){const t=Ci(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yg(i,e){i.uniform1iv(this.addr,e)}function Eg(i,e){i.uniform2iv(this.addr,e)}function bg(i,e){i.uniform3iv(this.addr,e)}function Tg(i,e){i.uniform4iv(this.addr,e)}function Ag(i,e){i.uniform1uiv(this.addr,e)}function wg(i,e){i.uniform2uiv(this.addr,e)}function Rg(i,e){i.uniform3uiv(this.addr,e)}function Cg(i,e){i.uniform4uiv(this.addr,e)}function Pg(i,e,t){const n=this.cache,r=e.length,s=ns(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ha:a=Uc;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Dg(i,e,t){const n=this.cache,r=e.length,s=ns(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Oc,s[a])}function Ig(i,e,t){const n=this.cache,r=e.length,s=ns(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Bc,s[a])}function Lg(i,e,t){const n=this.cache,r=e.length,s=ns(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Fc,s[a])}function Ng(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return vg;case 35674:return xg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return yg;case 35667:case 35671:return Eg;case 35668:case 35672:return bg;case 35669:case 35673:return Tg;case 5125:return Ag;case 36294:return wg;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Lg}}class Ug{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pg(t.type)}}class Fg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ng(t.type)}}class Og{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ys=/(\w+)(\])?(\[|\.)?/g;function Ul(i,e){i.seq.push(e),i.map[e.id]=e}function Bg(i,e,t){const n=i.name,r=n.length;for(Ys.lastIndex=0;;){const s=Ys.exec(n),a=Ys.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ul(t,l===void 0?new Ug(o,i,e):new Fg(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Og(o),Ul(t,f)),t=f}}}class Vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Bg(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Fl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zg=37297;let Vg=0;function kg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ol=new Ne;function Gg(i){We._getMatrix(Ol,We.workingColorSpace,i);const e=`mat3( ${Ol.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case Hr:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+kg(i.getShaderSource(e),o)}else return s}function Hg(i,e){const t=Gg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Wg={[$l]:"Linear",[Zl]:"Reinhard",[jl]:"Cineon",[Ql]:"ACESFilmic",[tc]:"AgX",[nc]:"Neutral",[ec]:"Custom"};function Xg(i,e){const t=Wg[e];return t===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nr=new D;function qg(){We.getLuminanceCoefficients(Nr);const i=Nr.x.toFixed(4),e=Nr.y.toFixed(4),t=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function Jg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Gi(i){return i!==""}function zl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(i){return i.replace($g,jg)}const Zg=new Map;function jg(i,e){let t=Fe[e];if(t===void 0){const n=Zg.get(e);if(n!==void 0)t=Fe[n],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wa(t)}const Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(i){return i.replace(Qg,e_)}function e_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const t_={[Ur]:"SHADOWMAP_TYPE_PCF",[ki]:"SHADOWMAP_TYPE_VSM"};function n_(i){return t_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const i_={[Zn]:"ENVMAP_TYPE_CUBE",[Si]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE_UV"};function r_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":i_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const s_={[Si]:"ENVMAP_MODE_REFRACTION"};function a_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":s_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const o_={[Kl]:"ENVMAP_BLENDING_MULTIPLY",[Hh]:"ENVMAP_BLENDING_MIX",[Wh]:"ENVMAP_BLENDING_ADD"};function l_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":o_[i.combine]||"ENVMAP_BLENDING_NONE"}function c_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function h_(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=n_(t),l=r_(t),u=a_(t),f=l_(t),h=c_(t),d=Yg(t),m=Jg(s),M=r.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Gi).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Gi).join(`
`),p.length>0&&(p+=`
`)):(g=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),p=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==en?"#define TONE_MAPPING":"",t.toneMapping!==en?Fe.tonemapping_pars_fragment:"",t.toneMapping!==en?Xg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Hg("linearToOutputTexel",t.outputColorSpace),qg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gi).join(`
`)),a=Wa(a),a=zl(a,t),a=Vl(a,t),o=Wa(o),o=zl(o,t),o=Vl(o,t),a=kl(a),o=kl(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+g+a,E=x+p+o,w=Fl(r,r.VERTEX_SHADER,y),A=Fl(r,r.FRAGMENT_SHADER,E);r.attachShader(M,w),r.attachShader(M,A),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(R){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(M)||"",z=r.getShaderInfoLog(w)||"",W=r.getShaderInfoLog(A)||"",G=U.trim(),V=z.trim(),B=W.trim();let Q=!0,$=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,w,A);else{const ce=Bl(r,w,"vertex"),pe=Bl(r,A,"fragment");Ce("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+ce+`
`+pe)}else G!==""?Ee("WebGLProgram: Program Info Log:",G):(V===""||B==="")&&($=!1);$&&(R.diagnostics={runnable:Q,programLog:G,vertexShader:{log:V,prefix:g},fragmentShader:{log:B,prefix:p}})}r.deleteShader(w),r.deleteShader(A),v=new Vr(r,M),b=Kg(r,M)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(M,zg)),k},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vg++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=A,this}let u_=0;class f_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new d_(e),t.set(e,n)),n}}class d_{constructor(e){this.id=u_++,this.code=e,this.usedTimes=0}}function p_(i,e,t,n,r,s){const a=new dc,o=new f_,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function M(v,b,k,R,U){const z=R.fog,W=U.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,B=e.get(v.envMap||G,V),Q=B&&B.mapping===$r?B.image.height:null,$=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Ee("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=ce!==void 0?ce.length:0;let ue=0;W.morphAttributes.position!==void 0&&(ue=1),W.morphAttributes.normal!==void 0&&(ue=2),W.morphAttributes.color!==void 0&&(ue=3);let Ue,at,rt,J;if($){const Je=jt[$];Ue=Je.vertexShader,at=Je.fragmentShader}else Ue=v.vertexShader,at=v.fragmentShader,o.update(v),rt=o.getVertexShaderID(v),J=o.getFragmentShaderID(v);const ne=i.getRenderTarget(),se=i.state.buffers.depth.getReversed(),Le=U.isInstancedMesh===!0,we=U.isBatchedMesh===!0,Pe=!!v.map,gt=!!v.matcap,He=!!B,Ye=!!v.aoMap,et=!!v.lightMap,Oe=!!v.bumpMap,lt=!!v.normalMap,P=!!v.displacementMap,ut=!!v.emissiveMap,qe=!!v.metalnessMap,nt=!!v.roughnessMap,Me=v.anisotropy>0,T=v.clearcoat>0,_=v.dispersion>0,L=v.iridescence>0,Y=v.sheen>0,K=v.transmission>0,q=Me&&!!v.anisotropyMap,me=T&&!!v.clearcoatMap,ie=T&&!!v.clearcoatNormalMap,Te=T&&!!v.clearcoatRoughnessMap,Re=L&&!!v.iridescenceMap,Z=L&&!!v.iridescenceThicknessMap,ee=Y&&!!v.sheenColorMap,ge=Y&&!!v.sheenRoughnessMap,ve=!!v.specularMap,he=!!v.specularColorMap,Be=!!v.specularIntensityMap,I=K&&!!v.transmissionMap,re=K&&!!v.thicknessMap,te=!!v.gradientMap,de=!!v.alphaMap,j=v.alphaTest>0,X=!!v.alphaHash,_e=!!v.extensions;let De=en;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(De=i.toneMapping);const it={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:Ue,fragmentShader:at,defines:v.defines,customVertexShaderID:rt,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:we,batchingColor:we&&U._colorsTexture!==null,instancing:Le,instancingColor:Le&&U.instanceColor!==null,instancingMorph:Le&&U.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ei,alphaToCoverage:!!v.alphaToCoverage,map:Pe,matcap:gt,envMap:He,envMapMode:He&&B.mapping,envMapCubeUVHeight:Q,aoMap:Ye,lightMap:et,bumpMap:Oe,normalMap:lt,displacementMap:P,emissiveMap:ut,normalMapObjectSpace:lt&&v.normalMapType===Kh,normalMapTangentSpace:lt&&v.normalMapType===hc,metalnessMap:qe,roughnessMap:nt,anisotropy:Me,anisotropyMap:q,clearcoat:T,clearcoatMap:me,clearcoatNormalMap:ie,clearcoatRoughnessMap:Te,dispersion:_,iridescence:L,iridescenceMap:Re,iridescenceThicknessMap:Z,sheen:Y,sheenColorMap:ee,sheenRoughnessMap:ge,specularMap:ve,specularColorMap:he,specularIntensityMap:Be,transmission:K,transmissionMap:I,thicknessMap:re,gradientMap:te,opaque:v.transparent===!1&&v.blending===vi&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:j,alphaHash:X,combine:v.combine,mapUv:Pe&&m(v.map.channel),aoMapUv:Ye&&m(v.aoMap.channel),lightMapUv:et&&m(v.lightMap.channel),bumpMapUv:Oe&&m(v.bumpMap.channel),normalMapUv:lt&&m(v.normalMap.channel),displacementMapUv:P&&m(v.displacementMap.channel),emissiveMapUv:ut&&m(v.emissiveMap.channel),metalnessMapUv:qe&&m(v.metalnessMap.channel),roughnessMapUv:nt&&m(v.roughnessMap.channel),anisotropyMapUv:q&&m(v.anisotropyMap.channel),clearcoatMapUv:me&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(v.sheenRoughnessMap.channel),specularMapUv:ve&&m(v.specularMap.channel),specularColorMapUv:he&&m(v.specularColorMap.channel),specularIntensityMapUv:Be&&m(v.specularIntensityMap.channel),transmissionMapUv:I&&m(v.transmissionMap.channel),thicknessMapUv:re&&m(v.thicknessMap.channel),alphaMapUv:de&&m(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(lt||Me),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(Pe||de),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||W.attributes.normal===void 0&&lt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:se,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:Pe&&v.map.isVideoTexture===!0&&We.getTransfer(v.map.colorSpace)===Ke,decodeVideoTextureEmissive:ut&&v.emissiveMap.isVideoTexture===!0&&We.getTransfer(v.emissiveMap.colorSpace)===Ke,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pn,flipSided:v.side===Rt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function g(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const k in v.defines)b.push(k),b.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(p(b,v),x(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function p(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function x(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),v.push(a.mask)}function y(v){const b=d[v.type];let k;if(b){const R=jt[b];k=mf.clone(R.uniforms)}else k=v.uniforms;return k}function E(v,b){let k=u.get(b);return k!==void 0?++k.usedTimes:(k=new h_(i,b,v,r),l.push(k),u.set(b,k)),k}function w(v){if(--v.usedTimes===0){const b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:y,acquireProgram:E,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:C}}function m_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function g_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Hl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,m,M,g,p){let x=i[e];return x===void 0?(x={id:h.id,object:h,geometry:d,material:m,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:g,group:p},i[e]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=m,x.materialVariant=a(h),x.groupOrder=M,x.renderOrder=h.renderOrder,x.z=g,x.group=p),e++,x}function c(h,d,m,M,g,p){const x=o(h,d,m,M,g,p);m.transmission>0?n.push(x):m.transparent===!0?r.push(x):t.push(x)}function l(h,d,m,M,g,p){const x=o(h,d,m,M,g,p);m.transmission>0?n.unshift(x):m.transparent===!0?r.unshift(x):t.unshift(x)}function u(h,d){t.length>1&&t.sort(h||g_),n.length>1&&n.sort(d||Hl),r.length>1&&r.sort(d||Hl)}function f(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function __(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Wl,i.set(n,[a])):r>=s.length?(a=new Wl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function v_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ke};break;case"SpotLight":t={position:new D,direction:new D,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function x_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let M_=0;function S_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function y_(i){const e=new v_,t=x_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const r=new D,s=new Ge,a=new Ge;function o(l){let u=0,f=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,m=0,M=0,g=0,p=0,x=0,y=0,E=0,w=0,A=0,C=0;l.sort(S_);for(let b=0,k=l.length;b<k;b++){const R=l[b],U=R.color,z=R.intensity,W=R.distance;let G=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===yi?G=R.shadow.map.texture:G=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=U.r*z,f+=U.g*z,h+=U.b*z;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],z);C++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const B=R.shadow,Q=t.get(R);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,n.directionalShadow[d]=Q,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=R.shadow.matrix,x++}n.directional[d]=V,d++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(U).multiplyScalar(z),V.distance=W,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[M]=V;const B=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,B.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[M]=B.matrix,R.castShadow){const Q=t.get(R);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,n.spotShadow[M]=Q,n.spotShadowMap[M]=G,E++}M++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(U).multiplyScalar(z),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=V,g++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const B=R.shadow,Q=t.get(R);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,Q.shadowCameraNear=B.camera.near,Q.shadowCameraFar=B.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=R.shadow.matrix,y++}n.point[m]=V,m++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(z),V.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[p]=V,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==d||v.pointLength!==m||v.spotLength!==M||v.rectAreaLength!==g||v.hemiLength!==p||v.numDirectionalShadows!==x||v.numPointShadows!==y||v.numSpotShadows!==E||v.numSpotMaps!==w||v.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=M,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,v.directionalLength=d,v.pointLength=m,v.spotLength=M,v.rectAreaLength=g,v.hemiLength=p,v.numDirectionalShadows=x,v.numPointShadows=y,v.numSpotShadows=E,v.numSpotMaps=w,v.numLightProbes=C,n.version=M_++)}function c(l,u){let f=0,h=0,d=0,m=0,M=0;const g=u.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const y=l[p];if(y.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),f++}else if(y.isSpotLight){const E=n.spot[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const E=n.rectArea[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const E=n.hemi[M];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),M++}}}return{setup:o,setupView:c,state:n}}function Xl(i){const e=new y_(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function E_(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Xl(i),e.set(r,[o])):s>=a.length?(o=new Xl(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,A_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],w_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ql=new Ge,zi=new D,Js=new D;function R_(i,e,t){let n=new so;const r=new Ae,s=new Ae,a=new st,o=new Mf,c=new Sf,l={},u=t.maxTextureSize,f={[Fn]:Rt,[Rt]:Fn,[pn]:pn},h=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:b_,fragmentShader:T_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ct;m.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Vt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ur;let p=this.type;this.render=function(A,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===bh&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ur);const b=i.getRenderTarget(),k=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(vn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=p!==this.type;z&&C.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(G=>G.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,G=A.length;W<G;W++){const V=A[W],B=V.shadow;if(B===void 0){Ee("WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Q=B.getFrameExtents();r.multiply(Q),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,B.mapSize.y=s.y));const $=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=$,B.map===null||z===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ki){if(V.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new tn(r.x,r.y,{format:yi,type:Mn,minFilter:bt,magFilter:bt,generateMipmaps:!1}),B.map.texture.name=V.name+".shadowMap",B.map.depthTexture=new Zi(r.x,r.y,Ot),B.map.depthTexture.name=V.name+".shadowMapDepth",B.map.depthTexture.format=Sn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Mt,B.map.depthTexture.magFilter=Mt}else V.isPointLight?(B.map=new Nc(r.x),B.map.depthTexture=new $u(r.x,nn)):(B.map=new tn(r.x,r.y),B.map.depthTexture=new Zi(r.x,r.y,nn)),B.map.depthTexture.name=V.name+".shadowMap",B.map.depthTexture.format=Sn,this.type===Ur?(B.map.depthTexture.compareFunction=$?to:eo,B.map.depthTexture.minFilter=bt,B.map.depthTexture.magFilter=bt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Mt,B.map.depthTexture.magFilter=Mt);B.camera.updateProjectionMatrix()}const ce=B.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<ce;pe++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,pe),i.clear();else{pe===0&&(i.setRenderTarget(B.map),i.clear());const ue=B.getViewport(pe);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),U.viewport(a)}if(V.isPointLight){const ue=B.camera,Ue=B.matrix,at=V.distance||ue.far;at!==ue.far&&(ue.far=at,ue.updateProjectionMatrix()),zi.setFromMatrixPosition(V.matrixWorld),ue.position.copy(zi),Js.copy(ue.position),Js.add(A_[pe]),ue.up.copy(w_[pe]),ue.lookAt(Js),ue.updateMatrixWorld(),Ue.makeTranslation(-zi.x,-zi.y,-zi.z),ql.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),B._frustum.setFromProjectionMatrix(ql,ue.coordinateSystem,ue.reversedDepth)}else B.updateMatrices(V);n=B.getFrustum(),E(C,v,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===ki&&x(B,v),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,k,R)};function x(A,C){const v=e.update(M);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new tn(r.x,r.y,{format:yi,type:Mn})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,v,h,M,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,v,d,M,null)}function y(A,C,v,b){let k=null;const R=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)k=R;else if(k=v.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=k.uuid,z=C.uuid;let W=l[U];W===void 0&&(W={},l[U]=W);let G=W[z];G===void 0&&(G=k.clone(),W[z]=G,C.addEventListener("dispose",w)),k=G}if(k.visible=C.visible,k.wireframe=C.wireframe,b===ki?k.side=C.shadowSide!==null?C.shadowSide:C.side:k.side=C.shadowSide!==null?C.shadowSide:f[C.side],k.alphaMap=C.alphaMap,k.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,k.map=C.map,k.clipShadows=C.clipShadows,k.clippingPlanes=C.clippingPlanes,k.clipIntersection=C.clipIntersection,k.displacementMap=C.displacementMap,k.displacementScale=C.displacementScale,k.displacementBias=C.displacementBias,k.wireframeLinewidth=C.wireframeLinewidth,k.linewidth=C.linewidth,v.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const U=i.properties.get(k);U.light=v}return k}function E(A,C,v,b,k){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&k===ki)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const z=e.update(A),W=A.material;if(Array.isArray(W)){const G=z.groups;for(let V=0,B=G.length;V<B;V++){const Q=G[V],$=W[Q.materialIndex];if($&&$.visible){const ce=y(A,$,b,k);A.onBeforeShadow(i,A,C,v,z,ce,Q),i.renderBufferDirect(v,null,z,ce,A,Q),A.onAfterShadow(i,A,C,v,z,ce,Q)}}}else if(W.visible){const G=y(A,W,b,k);A.onBeforeShadow(i,A,C,v,z,G,null),i.renderBufferDirect(v,null,z,G,A,null),A.onAfterShadow(i,A,C,v,z,G,null)}}const U=A.children;for(let z=0,W=U.length;z<W;z++)E(U[z],C,v,b,k)}function w(A){A.target.removeEventListener("dispose",w);for(const v in l){const b=l[v],k=A.target.uuid;k in b&&(b[k].dispose(),delete b[k])}}}function C_(i,e){function t(){let I=!1;const re=new st;let te=null;const de=new st(0,0,0,0);return{setMask:function(j){te!==j&&!I&&(i.colorMask(j,j,j,j),te=j)},setLocked:function(j){I=j},setClear:function(j,X,_e,De,it){it===!0&&(j*=De,X*=De,_e*=De),re.set(j,X,_e,De),de.equals(re)===!1&&(i.clearColor(j,X,_e,De),de.copy(re))},reset:function(){I=!1,te=null,de.set(-1,0,0,0)}}}function n(){let I=!1,re=!1,te=null,de=null,j=null;return{setReversed:function(X){if(re!==X){const _e=e.get("EXT_clip_control");X?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),re=X;const De=j;j=null,this.setClear(De)}},getReversed:function(){return re},setTest:function(X){X?ne(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(X){te!==X&&!I&&(i.depthMask(X),te=X)},setFunc:function(X){if(re&&(X=au[X]),de!==X){switch(X){case Qs:i.depthFunc(i.NEVER);break;case ea:i.depthFunc(i.ALWAYS);break;case ta:i.depthFunc(i.LESS);break;case Mi:i.depthFunc(i.LEQUAL);break;case na:i.depthFunc(i.EQUAL);break;case ia:i.depthFunc(i.GEQUAL);break;case ra:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=X}},setLocked:function(X){I=X},setClear:function(X){j!==X&&(j=X,re&&(X=1-X),i.clearDepth(X))},reset:function(){I=!1,te=null,de=null,j=null,re=!1}}}function r(){let I=!1,re=null,te=null,de=null,j=null,X=null,_e=null,De=null,it=null;return{setTest:function(Je){I||(Je?ne(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(Je){re!==Je&&!I&&(i.stencilMask(Je),re=Je)},setFunc:function(Je,an,on){(te!==Je||de!==an||j!==on)&&(i.stencilFunc(Je,an,on),te=Je,de=an,j=on)},setOp:function(Je,an,on){(X!==Je||_e!==an||De!==on)&&(i.stencilOp(Je,an,on),X=Je,_e=an,De=on)},setLocked:function(Je){I=Je},setClear:function(Je){it!==Je&&(i.clearStencil(Je),it=Je)},reset:function(){I=!1,re=null,te=null,de=null,j=null,X=null,_e=null,De=null,it=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],m=null,M=!1,g=null,p=null,x=null,y=null,E=null,w=null,A=null,C=new ke(0,0,0),v=0,b=!1,k=null,R=null,U=null,z=null,W=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,B=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=B>=1):Q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=B>=2);let $=null,ce={};const pe=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),Ue=new st().fromArray(pe),at=new st().fromArray(ue);function rt(I,re,te,de){const j=new Uint8Array(4),X=i.createTexture();i.bindTexture(I,X),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<te;_e++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,j):i.texImage2D(re+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,j);return X}const J={};J[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(Mi),Oe(!1),lt(Ro),ne(i.CULL_FACE),Ye(vn);function ne(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function se(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Le(I,re){return f[I]!==re?(i.bindFramebuffer(I,re),f[I]=re,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=re),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=re),!0):!1}function we(I,re){let te=d,de=!1;if(I){te=h.get(re),te===void 0&&(te=[],h.set(re,te));const j=I.textures;if(te.length!==j.length||te[0]!==i.COLOR_ATTACHMENT0){for(let X=0,_e=j.length;X<_e;X++)te[X]=i.COLOR_ATTACHMENT0+X;te.length=j.length,de=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,de=!0);de&&i.drawBuffers(te)}function Pe(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const gt={[Yn]:i.FUNC_ADD,[Ah]:i.FUNC_SUBTRACT,[wh]:i.FUNC_REVERSE_SUBTRACT};gt[Rh]=i.MIN,gt[Ch]=i.MAX;const He={[Ph]:i.ZERO,[Dh]:i.ONE,[Ih]:i.SRC_COLOR,[Zs]:i.SRC_ALPHA,[Bh]:i.SRC_ALPHA_SATURATE,[Fh]:i.DST_COLOR,[Nh]:i.DST_ALPHA,[Lh]:i.ONE_MINUS_SRC_COLOR,[js]:i.ONE_MINUS_SRC_ALPHA,[Oh]:i.ONE_MINUS_DST_COLOR,[Uh]:i.ONE_MINUS_DST_ALPHA,[zh]:i.CONSTANT_COLOR,[Vh]:i.ONE_MINUS_CONSTANT_COLOR,[kh]:i.CONSTANT_ALPHA,[Gh]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(I,re,te,de,j,X,_e,De,it,Je){if(I===vn){M===!0&&(se(i.BLEND),M=!1);return}if(M===!1&&(ne(i.BLEND),M=!0),I!==Th){if(I!==g||Je!==b){if((p!==Yn||E!==Yn)&&(i.blendEquation(i.FUNC_ADD),p=Yn,E=Yn),Je)switch(I){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFunc(i.ONE,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Do:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ce("WebGLState: Invalid blending: ",I);break}else switch(I){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Po:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Do:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",I);break}x=null,y=null,w=null,A=null,C.set(0,0,0),v=0,g=I,b=Je}return}j=j||re,X=X||te,_e=_e||de,(re!==p||j!==E)&&(i.blendEquationSeparate(gt[re],gt[j]),p=re,E=j),(te!==x||de!==y||X!==w||_e!==A)&&(i.blendFuncSeparate(He[te],He[de],He[X],He[_e]),x=te,y=de,w=X,A=_e),(De.equals(C)===!1||it!==v)&&(i.blendColor(De.r,De.g,De.b,it),C.copy(De),v=it),g=I,b=!1}function et(I,re){I.side===pn?se(i.CULL_FACE):ne(i.CULL_FACE);let te=I.side===Rt;re&&(te=!te),Oe(te),I.blending===vi&&I.transparent===!1?Ye(vn):Ye(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const de=I.stencilWrite;o.setTest(de),de&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ut(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(I){k!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),k=I)}function lt(I){I!==yh?(ne(i.CULL_FACE),I!==R&&(I===Ro?i.cullFace(i.BACK):I===Eh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),R=I}function P(I){I!==U&&(V&&i.lineWidth(I),U=I)}function ut(I,re,te){I?(ne(i.POLYGON_OFFSET_FILL),(z!==re||W!==te)&&(z=re,W=te,a.getReversed()&&(re=-re),i.polygonOffset(re,te))):se(i.POLYGON_OFFSET_FILL)}function qe(I){I?ne(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function nt(I){I===void 0&&(I=i.TEXTURE0+G-1),$!==I&&(i.activeTexture(I),$=I)}function Me(I,re,te){te===void 0&&($===null?te=i.TEXTURE0+G-1:te=$);let de=ce[te];de===void 0&&(de={type:void 0,texture:void 0},ce[te]=de),(de.type!==I||de.texture!==re)&&($!==te&&(i.activeTexture(te),$=te),i.bindTexture(I,re||J[I]),de.type=I,de.texture=re)}function T(){const I=ce[$];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(I){Ce("WebGLState:",I)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(I){Ce("WebGLState:",I)}}function Y(){try{i.texSubImage2D(...arguments)}catch(I){Ce("WebGLState:",I)}}function K(){try{i.texSubImage3D(...arguments)}catch(I){Ce("WebGLState:",I)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Ce("WebGLState:",I)}}function me(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Ce("WebGLState:",I)}}function ie(){try{i.texStorage2D(...arguments)}catch(I){Ce("WebGLState:",I)}}function Te(){try{i.texStorage3D(...arguments)}catch(I){Ce("WebGLState:",I)}}function Re(){try{i.texImage2D(...arguments)}catch(I){Ce("WebGLState:",I)}}function Z(){try{i.texImage3D(...arguments)}catch(I){Ce("WebGLState:",I)}}function ee(I){Ue.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ue.copy(I))}function ge(I){at.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),at.copy(I))}function ve(I,re){let te=l.get(re);te===void 0&&(te=new WeakMap,l.set(re,te));let de=te.get(I);de===void 0&&(de=i.getUniformBlockIndex(re,I.name),te.set(I,de))}function he(I,re){const de=l.get(re).get(I);c.get(re)!==de&&(i.uniformBlockBinding(re,de,I.__bindingPointIndex),c.set(re,de))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},$=null,ce={},f={},h=new WeakMap,d=[],m=null,M=!1,g=null,p=null,x=null,y=null,E=null,w=null,A=null,C=new ke(0,0,0),v=0,b=!1,k=null,R=null,U=null,z=null,W=null,Ue.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:se,bindFramebuffer:Le,drawBuffers:we,useProgram:Pe,setBlending:Ye,setMaterial:et,setFlipSided:Oe,setCullFace:lt,setLineWidth:P,setPolygonOffset:ut,setScissorTest:qe,activeTexture:nt,bindTexture:Me,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:L,texImage2D:Re,texImage3D:Z,updateUBOMapping:ve,uniformBlockBinding:he,texStorage2D:ie,texStorage3D:Te,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:me,scissor:ee,viewport:ge,reset:Be}}function P_(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ae,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,_){return d?new OffscreenCanvas(T,_):$i("canvas")}function M(T,_,L){let Y=1;const K=Me(T);if((K.width>L||K.height>L)&&(Y=L/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Y*K.width),me=Math.floor(Y*K.height);f===void 0&&(f=m(q,me));const ie=_?m(q,me):f;return ie.width=q,ie.height=me,ie.getContext("2d").drawImage(T,0,0,q,me),Ee("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+me+")."),ie}else return"data"in T&&Ee("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function g(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,_,L,Y,K=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=_;if(_===i.RED&&(L===i.FLOAT&&(q=i.R32F),L===i.HALF_FLOAT&&(q=i.R16F),L===i.UNSIGNED_BYTE&&(q=i.R8)),_===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.R8UI),L===i.UNSIGNED_SHORT&&(q=i.R16UI),L===i.UNSIGNED_INT&&(q=i.R32UI),L===i.BYTE&&(q=i.R8I),L===i.SHORT&&(q=i.R16I),L===i.INT&&(q=i.R32I)),_===i.RG&&(L===i.FLOAT&&(q=i.RG32F),L===i.HALF_FLOAT&&(q=i.RG16F),L===i.UNSIGNED_BYTE&&(q=i.RG8)),_===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RG8UI),L===i.UNSIGNED_SHORT&&(q=i.RG16UI),L===i.UNSIGNED_INT&&(q=i.RG32UI),L===i.BYTE&&(q=i.RG8I),L===i.SHORT&&(q=i.RG16I),L===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RGB8UI),L===i.UNSIGNED_SHORT&&(q=i.RGB16UI),L===i.UNSIGNED_INT&&(q=i.RGB32UI),L===i.BYTE&&(q=i.RGB8I),L===i.SHORT&&(q=i.RGB16I),L===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),L===i.UNSIGNED_INT&&(q=i.RGBA32UI),L===i.BYTE&&(q=i.RGBA8I),L===i.SHORT&&(q=i.RGBA16I),L===i.INT&&(q=i.RGBA32I)),_===i.RGB&&(L===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),_===i.RGBA){const me=K?Hr:We.getTransfer(Y);L===i.FLOAT&&(q=i.RGBA32F),L===i.HALF_FLOAT&&(q=i.RGBA16F),L===i.UNSIGNED_BYTE&&(q=me===Ke?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function E(T,_){let L;return T?_===null||_===nn||_===Ji?L=i.DEPTH24_STENCIL8:_===Ot?L=i.DEPTH32F_STENCIL8:_===Yi&&(L=i.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===nn||_===Ji?L=i.DEPTH_COMPONENT24:_===Ot?L=i.DEPTH_COMPONENT32F:_===Yi&&(L=i.DEPTH_COMPONENT16),L}function w(T,_){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Mt&&T.minFilter!==bt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){const _=T.target;_.removeEventListener("dispose",A),v(_),_.isVideoTexture&&u.delete(_)}function C(T){const _=T.target;_.removeEventListener("dispose",C),k(_)}function v(T){const _=n.get(T);if(_.__webglInit===void 0)return;const L=T.source,Y=h.get(L);if(Y){const K=Y[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(T),Object.keys(Y).length===0&&h.delete(L)}n.remove(T)}function b(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const L=T.source,Y=h.get(L);delete Y[_.__cacheKey],a.memory.textures--}function k(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let K=0;K<_.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=T.textures;for(let Y=0,K=L.length;Y<K;Y++){const q=n.get(L[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(L[Y])}n.remove(T)}let R=0;function U(){R=0}function z(){const T=R;return T>=r.maxTextures&&Ee("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),R+=1,T}function W(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function G(T,_){const L=n.get(T);if(T.isVideoTexture&&qe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&L.__version!==T.version){const Y=T.image;if(Y===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{J(L,T,_);return}}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+_)}function V(T,_){const L=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){J(L,T,_);return}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+_)}function B(T,_){const L=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){J(L,T,_);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+_)}function Q(T,_){const L=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&L.__version!==T.version){ne(L,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+_)}const $={[aa]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[oa]:i.MIRRORED_REPEAT},ce={[Mt]:i.NEAREST,[qh]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[bt]:i.LINEAR,[us]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},pe={[$h]:i.NEVER,[tu]:i.ALWAYS,[Zh]:i.LESS,[eo]:i.LEQUAL,[jh]:i.EQUAL,[to]:i.GEQUAL,[Qh]:i.GREATER,[eu]:i.NOTEQUAL};function ue(T,_){if(_.type===Ot&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===bt||_.magFilter===us||_.magFilter===rr||_.magFilter===Kn||_.minFilter===bt||_.minFilter===us||_.minFilter===rr||_.minFilter===Kn)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,$[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,$[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,$[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ce[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ce[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Mt||_.minFilter!==rr&&_.minFilter!==Kn||_.type===Ot&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ue(T,_){let L=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));const Y=_.source;let K=h.get(Y);K===void 0&&(K={},h.set(Y,K));const q=W(_);if(q!==T.__cacheKey){K[q]===void 0&&(K[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),K[q].usedTimes++;const me=K[T.__cacheKey];me!==void 0&&(K[T.__cacheKey].usedTimes--,me.usedTimes===0&&b(_)),T.__cacheKey=q,T.__webglTexture=K[q].texture}return L}function at(T,_,L){return Math.floor(Math.floor(T/L)/_)}function rt(T,_,L,Y){const q=T.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,L,Y,_.data);else{q.sort((Z,ee)=>Z.start-ee.start);let me=0;for(let Z=1;Z<q.length;Z++){const ee=q[me],ge=q[Z],ve=ee.start+ee.count,he=at(ge.start,_.width,4),Be=at(ee.start,_.width,4);ge.start<=ve+1&&he===Be&&at(ge.start+ge.count-1,_.width,4)===he?ee.count=Math.max(ee.count,ge.start+ge.count-ee.start):(++me,q[me]=ge)}q.length=me+1;const ie=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Z=0,ee=q.length;Z<ee;Z++){const ge=q[Z],ve=Math.floor(ge.start/4),he=Math.ceil(ge.count/4),Be=ve%_.width,I=Math.floor(ve/_.width),re=he,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Be,I,re,te,L,Y,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function J(T,_,L){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const K=Ue(T,_),q=_.source;t.bindTexture(Y,T.__webglTexture,i.TEXTURE0+L);const me=n.get(q);if(q.version!==me.__version||K===!0){t.activeTexture(i.TEXTURE0+L);const ie=We.getPrimaries(We.workingColorSpace),Te=_.colorSpace===Nn?null:We.getPrimaries(_.colorSpace),Re=_.colorSpace===Nn||ie===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let Z=M(_.image,!1,r.maxTextureSize);Z=nt(_,Z);const ee=s.convert(_.format,_.colorSpace),ge=s.convert(_.type);let ve=y(_.internalFormat,ee,ge,_.colorSpace,_.isVideoTexture);ue(Y,_);let he;const Be=_.mipmaps,I=_.isVideoTexture!==!0,re=me.__version===void 0||K===!0,te=q.dataReady,de=w(_,Z);if(_.isDepthTexture)ve=E(_.format===$n,_.type),re&&(I?t.texStorage2D(i.TEXTURE_2D,1,ve,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,ve,Z.width,Z.height,0,ee,ge,null));else if(_.isDataTexture)if(Be.length>0){I&&re&&t.texStorage2D(i.TEXTURE_2D,de,ve,Be[0].width,Be[0].height);for(let j=0,X=Be.length;j<X;j++)he=Be[j],I?te&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,he.width,he.height,ee,ge,he.data):t.texImage2D(i.TEXTURE_2D,j,ve,he.width,he.height,0,ee,ge,he.data);_.generateMipmaps=!1}else I?(re&&t.texStorage2D(i.TEXTURE_2D,de,ve,Z.width,Z.height),te&&rt(_,Z,ee,ge)):t.texImage2D(i.TEXTURE_2D,0,ve,Z.width,Z.height,0,ee,ge,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ve,Be[0].width,Be[0].height,Z.depth);for(let j=0,X=Be.length;j<X;j++)if(he=Be[j],_.format!==Bt)if(ee!==null)if(I){if(te)if(_.layerUpdates.size>0){const _e=El(he.width,he.height,_.format,_.type);for(const De of _.layerUpdates){const it=he.data.subarray(De*_e/he.data.BYTES_PER_ELEMENT,(De+1)*_e/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,De,he.width,he.height,1,ee,it)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,Z.depth,ee,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ve,he.width,he.height,Z.depth,0,he.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,Z.depth,ee,ge,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,ve,he.width,he.height,Z.depth,0,ee,ge,he.data)}else{I&&re&&t.texStorage2D(i.TEXTURE_2D,de,ve,Be[0].width,Be[0].height);for(let j=0,X=Be.length;j<X;j++)he=Be[j],_.format!==Bt?ee!==null?I?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,he.width,he.height,ee,he.data):t.compressedTexImage2D(i.TEXTURE_2D,j,ve,he.width,he.height,0,he.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?te&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,he.width,he.height,ee,ge,he.data):t.texImage2D(i.TEXTURE_2D,j,ve,he.width,he.height,0,ee,ge,he.data)}else if(_.isDataArrayTexture)if(I){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ve,Z.width,Z.height,Z.depth),te)if(_.layerUpdates.size>0){const j=El(Z.width,Z.height,_.format,_.type);for(const X of _.layerUpdates){const _e=Z.data.subarray(X*j/Z.data.BYTES_PER_ELEMENT,(X+1)*j/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,Z.width,Z.height,1,ee,ge,_e)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ee,ge,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,Z.width,Z.height,Z.depth,0,ee,ge,Z.data);else if(_.isData3DTexture)I?(re&&t.texStorage3D(i.TEXTURE_3D,de,ve,Z.width,Z.height,Z.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ee,ge,Z.data)):t.texImage3D(i.TEXTURE_3D,0,ve,Z.width,Z.height,Z.depth,0,ee,ge,Z.data);else if(_.isFramebufferTexture){if(re)if(I)t.texStorage2D(i.TEXTURE_2D,de,ve,Z.width,Z.height);else{let j=Z.width,X=Z.height;for(let _e=0;_e<de;_e++)t.texImage2D(i.TEXTURE_2D,_e,ve,j,X,0,ee,ge,null),j>>=1,X>>=1}}else if(Be.length>0){if(I&&re){const j=Me(Be[0]);t.texStorage2D(i.TEXTURE_2D,de,ve,j.width,j.height)}for(let j=0,X=Be.length;j<X;j++)he=Be[j],I?te&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ee,ge,he):t.texImage2D(i.TEXTURE_2D,j,ve,ee,ge,he);_.generateMipmaps=!1}else if(I){if(re){const j=Me(Z);t.texStorage2D(i.TEXTURE_2D,de,ve,j.width,j.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee,ge,Z)}else t.texImage2D(i.TEXTURE_2D,0,ve,ee,ge,Z);g(_)&&p(Y),me.__version=q.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ne(T,_,L){if(_.image.length!==6)return;const Y=Ue(T,_),K=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+L);const q=n.get(K);if(K.version!==q.__version||Y===!0){t.activeTexture(i.TEXTURE0+L);const me=We.getPrimaries(We.workingColorSpace),ie=_.colorSpace===Nn?null:We.getPrimaries(_.colorSpace),Te=_.colorSpace===Nn||me===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Re=_.isCompressedTexture||_.image[0].isCompressedTexture,Z=_.image[0]&&_.image[0].isDataTexture,ee=[];for(let X=0;X<6;X++)!Re&&!Z?ee[X]=M(_.image[X],!0,r.maxCubemapSize):ee[X]=Z?_.image[X].image:_.image[X],ee[X]=nt(_,ee[X]);const ge=ee[0],ve=s.convert(_.format,_.colorSpace),he=s.convert(_.type),Be=y(_.internalFormat,ve,he,_.colorSpace),I=_.isVideoTexture!==!0,re=q.__version===void 0||Y===!0,te=K.dataReady;let de=w(_,ge);ue(i.TEXTURE_CUBE_MAP,_);let j;if(Re){I&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Be,ge.width,ge.height);for(let X=0;X<6;X++){j=ee[X].mipmaps;for(let _e=0;_e<j.length;_e++){const De=j[_e];_.format!==Bt?ve!==null?I?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,0,0,De.width,De.height,ve,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,Be,De.width,De.height,0,De.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,0,0,De.width,De.height,ve,he,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,Be,De.width,De.height,0,ve,he,De.data)}}}else{if(j=_.mipmaps,I&&re){j.length>0&&de++;const X=Me(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Be,X.width,X.height)}for(let X=0;X<6;X++)if(Z){I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ee[X].width,ee[X].height,ve,he,ee[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Be,ee[X].width,ee[X].height,0,ve,he,ee[X].data);for(let _e=0;_e<j.length;_e++){const it=j[_e].image[X].image;I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,0,0,it.width,it.height,ve,he,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,Be,it.width,it.height,0,ve,he,it.data)}}else{I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ve,he,ee[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Be,ve,he,ee[X]);for(let _e=0;_e<j.length;_e++){const De=j[_e];I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,0,0,ve,he,De.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,Be,ve,he,De.image[X])}}}g(_)&&p(i.TEXTURE_CUBE_MAP),q.__version=K.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function se(T,_,L,Y,K,q){const me=s.convert(L.format,L.colorSpace),ie=s.convert(L.type),Te=y(L.internalFormat,me,ie,L.colorSpace),Re=n.get(_),Z=n.get(L);if(Z.__renderTarget=_,!Re.__hasExternalTextures){const ee=Math.max(1,_.width>>q),ge=Math.max(1,_.height>>q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,q,Te,ee,ge,_.depth,0,me,ie,null):t.texImage2D(K,q,Te,ee,ge,0,me,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ut(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,Z.__webglTexture,0,P(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,Z.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(T,_,L){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const Y=_.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,q=E(_.stencilBuffer,K),me=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(_),q,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(_),q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,T)}else{const Y=_.textures;for(let K=0;K<Y.length;K++){const q=Y[K],me=s.convert(q.format,q.colorSpace),ie=s.convert(q.type),Te=y(q.internalFormat,me,ie,q.colorSpace);ut(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(_),Te,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(_),Te,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Te,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(T,_,L){const Y=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ue(i.TEXTURE_CUBE_MAP,_.depthTexture);const Re=s.convert(_.depthTexture.format),Z=s.convert(_.depthTexture.type);let ee;_.depthTexture.format===Sn?ee=i.DEPTH_COMPONENT24:_.depthTexture.format===$n&&(ee=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ee,_.width,_.height,0,Re,Z,null)}}else G(_.depthTexture,0);const q=K.__webglTexture,me=P(_),ie=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,Te=_.depthTexture.format===$n?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Sn)ut(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,ie,q,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,Te,ie,q,0);else if(_.depthTexture.format===$n)ut(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,ie,q,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,Te,ie,q,0);else throw new Error("Unknown depthTexture format")}function Pe(T){const _=n.get(T),L=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=Y}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(L)for(let Y=0;Y<6;Y++)we(_.__webglFramebuffer[Y],T,Y);else{const Y=T.texture.mipmaps;Y&&Y.length>0?we(_.__webglFramebuffer[0],T,0):we(_.__webglFramebuffer,T,0)}else if(L){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),Le(_.__webglDepthbuffer[Y],T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Le(_.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(T,_,L){const Y=n.get(T);_!==void 0&&se(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&Pe(T)}function He(T){const _=T.texture,L=n.get(T),Y=n.get(_);T.addEventListener("dispose",C);const K=T.textures,q=T.isWebGLCubeRenderTarget===!0,me=K.length>1;if(me||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),q){L.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[ie]=[];for(let Te=0;Te<_.mipmaps.length;Te++)L.__webglFramebuffer[ie][Te]=i.createFramebuffer()}else L.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let ie=0;ie<_.mipmaps.length;ie++)L.__webglFramebuffer[ie]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(me)for(let ie=0,Te=K.length;ie<Te;ie++){const Re=n.get(K[ie]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ut(T)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ie=0;ie<K.length;ie++){const Te=K[ie];L.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[ie]);const Re=s.convert(Te.format,Te.colorSpace),Z=s.convert(Te.type),ee=y(Te.internalFormat,Re,Z,Te.colorSpace,T.isXRRenderTarget===!0),ge=P(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ee,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,L.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(L.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ue(i.TEXTURE_CUBE_MAP,_);for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)se(L.__webglFramebuffer[ie][Te],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te);else se(L.__webglFramebuffer[ie],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ie=0,Te=K.length;ie<Te;ie++){const Re=K[ie],Z=n.get(Re);let ee=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ee=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,Z.__webglTexture),ue(ee,Re),se(L.__webglFramebuffer,T,Re,i.COLOR_ATTACHMENT0+ie,ee,0),g(Re)&&p(ee)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,Y.__webglTexture),ue(ie,_),_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)se(L.__webglFramebuffer[Te],T,_,i.COLOR_ATTACHMENT0,ie,Te);else se(L.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,ie,0);g(_)&&p(ie),t.unbindTexture()}T.depthBuffer&&Pe(T)}function Ye(T){const _=T.textures;for(let L=0,Y=_.length;L<Y;L++){const K=_[L];if(g(K)){const q=x(T),me=n.get(K).__webglTexture;t.bindTexture(q,me),p(q),t.unbindTexture()}}}const et=[],Oe=[];function lt(T){if(T.samples>0){if(ut(T)===!1){const _=T.textures,L=T.width,Y=T.height;let K=i.COLOR_BUFFER_BIT;const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(T),ie=_.length>1;if(ie)for(let Re=0;Re<_.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const Te=T.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Re=0;Re<_.length;Re++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[Re]);const Z=n.get(_[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,L,Y,0,0,L,Y,K,i.NEAREST),c===!0&&(et.length=0,Oe.length=0,et.push(i.COLOR_ATTACHMENT0+Re),T.depthBuffer&&T.resolveDepthBuffer===!1&&(et.push(q),Oe.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Re=0;Re<_.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,me.__webglColorRenderbuffer[Re]);const Z=n.get(_[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,Z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function P(T){return Math.min(r.maxSamples,T.samples)}function ut(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function qe(T){const _=a.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function nt(T,_){const L=T.colorSpace,Y=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||L!==Ei&&L!==Nn&&(We.getTransfer(L)===Ke?(Y!==Bt||K!==Nt)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",L)),_}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=V,this.setTexture3D=B,this.setTextureCube=Q,this.rebindTextures=gt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function D_(i,e){function t(n,r=Nn){let s;const a=We.getTransfer(r);if(n===Nt)return i.UNSIGNED_BYTE;if(n===Ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rc)return i.BYTE;if(n===sc)return i.SHORT;if(n===Yi)return i.UNSIGNED_SHORT;if(n===Ya)return i.INT;if(n===nn)return i.UNSIGNED_INT;if(n===Ot)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===lc)return i.ALPHA;if(n===cc)return i.RGB;if(n===Bt)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===$n)return i.DEPTH_STENCIL;if(n===$a)return i.RED;if(n===Za)return i.RED_INTEGER;if(n===yi)return i.RG;if(n===ja)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===Fr||n===Or||n===Br||n===zr)if(a===Ke)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===la||n===ca||n===ha||n===ua)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===la)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ca)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ha)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ua)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fa||n===da||n===pa||n===ma||n===ga||n===_a||n===va)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fa||n===da)return a===Ke?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===pa)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ma)return s.COMPRESSED_R11_EAC;if(n===ga)return s.COMPRESSED_SIGNED_R11_EAC;if(n===_a)return s.COMPRESSED_RG11_EAC;if(n===va)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xa||n===Ma||n===Sa||n===ya||n===Ea||n===ba||n===Ta||n===Aa||n===wa||n===Ra||n===Ca||n===Pa||n===Da||n===Ia)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===xa)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ma)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sa)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ya)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ea)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ba)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ta)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Aa)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ca)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pa)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Da)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ia)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===Na||n===Ua)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===La)return a===Ke?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ua)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fa||n===Oa||n===Ba||n===za)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Fa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Oa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===za)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class N_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ec(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new sn({vertexShader:I_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U_ extends Ai{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,m=null;const M=typeof XRWebGLBinding<"u",g=new N_,p={},x=t.getContextAttributes();let y=null,E=null;const w=[],A=[],C=new Ae;let v=null;const b=new Lt;b.viewport=new st;const k=new Lt;k.viewport=new st;const R=[b,k],U=new Bf;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=w[J];return ne===void 0&&(ne=new vs,w[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=w[J];return ne===void 0&&(ne=new vs,w[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=w[J];return ne===void 0&&(ne=new vs,w[J]=ne),ne.getHandSpace()};function G(J){const ne=A.indexOf(J.inputSource);if(ne===-1)return;const se=w[ne];se!==void 0&&(se.update(J.inputSource,J.frame,l||a),se.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",B);for(let J=0;J<w.length;J++){const ne=A[J];ne!==null&&(A[J]=null,w[J].disconnect(ne))}z=null,W=null,g.reset();for(const J in p)delete p[J];e.setRenderTarget(y),d=null,h=null,f=null,r=null,E=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",V),r.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Le=null,we=null;x.depth&&(we=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=x.stencil?$n:Sn,Le=x.stencil?Ji:nn);const Pe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new tn(h.textureWidth,h.textureHeight,{format:Bt,type:Nt,depthTexture:new Zi(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new tn(d.framebufferWidth,d.framebufferHeight,{format:Bt,type:Nt,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),rt.setContext(r),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(J){for(let ne=0;ne<J.removed.length;ne++){const se=J.removed[ne],Le=A.indexOf(se);Le>=0&&(A[Le]=null,w[Le].disconnect(se))}for(let ne=0;ne<J.added.length;ne++){const se=J.added[ne];let Le=A.indexOf(se);if(Le===-1){for(let Pe=0;Pe<w.length;Pe++)if(Pe>=A.length){A.push(se),Le=Pe;break}else if(A[Pe]===null){A[Pe]=se,Le=Pe;break}if(Le===-1)break}const we=w[Le];we&&we.connect(se)}}const Q=new D,$=new D;function ce(J,ne,se){Q.setFromMatrixPosition(ne.matrixWorld),$.setFromMatrixPosition(se.matrixWorld);const Le=Q.distanceTo($),we=ne.projectionMatrix.elements,Pe=se.projectionMatrix.elements,gt=we[14]/(we[10]-1),He=we[14]/(we[10]+1),Ye=(we[9]+1)/we[5],et=(we[9]-1)/we[5],Oe=(we[8]-1)/we[0],lt=(Pe[8]+1)/Pe[0],P=gt*Oe,ut=gt*lt,qe=Le/(-Oe+lt),nt=qe*-Oe;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(nt),J.translateZ(qe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),we[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Me=gt+qe,T=He+qe,_=P-nt,L=ut+(Le-nt),Y=Ye*He/T*Me,K=et*He/T*Me;J.projectionMatrix.makePerspective(_,L,Y,K,Me,T),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function pe(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ne=J.near,se=J.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(se=g.depthFar)),U.near=k.near=b.near=ne,U.far=k.far=b.far=se,(z!==U.near||W!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,W=U.far),U.layers.mask=J.layers.mask|6,b.layers.mask=U.layers.mask&-5,k.layers.mask=U.layers.mask&-3;const Le=J.parent,we=U.cameras;pe(U,Le);for(let Pe=0;Pe<we.length;Pe++)pe(we[Pe],Le);we.length===2?ce(U,b,k):U.projectionMatrix.copy(b.projectionMatrix),ue(J,U,Le)};function ue(J,ne,se){se===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(se.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=bi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(J){c=J,h!==null&&(h.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(J){return p[J]};let Ue=null;function at(J,ne){if(u=ne.getViewerPose(l||a),m=ne,u!==null){const se=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let Le=!1;se.length!==U.cameras.length&&(U.cameras.length=0,Le=!0);for(let He=0;He<se.length;He++){const Ye=se[He];let et=null;if(d!==null)et=d.getViewport(Ye);else{const lt=f.getViewSubImage(h,Ye);et=lt.viewport,He===0&&(e.setRenderTargetTextures(E,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(E))}let Oe=R[He];Oe===void 0&&(Oe=new Lt,Oe.layers.enable(He),Oe.viewport=new st,R[He]=Oe),Oe.matrix.fromArray(Ye.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ye.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(et.x,et.y,et.width,et.height),He===0&&(U.matrix.copy(Oe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Le===!0&&U.cameras.push(Oe)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const He=f.getDepthInformation(se[0]);He&&He.isValid&&He.texture&&g.init(He,r.renderState)}if(we&&we.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let He=0;He<se.length;He++){const Ye=se[He].camera;if(Ye){let et=p[Ye];et||(et=new Ec,p[Ye]=et);const Oe=f.getCameraImage(Ye);et.sourceTexture=Oe}}}}for(let se=0;se<w.length;se++){const Le=A[se],we=w[se];Le!==null&&we!==void 0&&we.update(Le,ne,l||a)}Ue&&Ue(J,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}const rt=new Lc;rt.setAnimationLoop(at),this.setAnimationLoop=function(J){Ue=J},this.dispose=function(){}}}const Xn=new rn,F_=new Ge;function O_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Cc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,x,y,E){p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,E)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),M(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Rt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Rt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,E=x.envMapRotation;y&&(g.envMap.value=y,Xn.copy(E),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),g.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(Xn)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function M(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function B_(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const E=y.program;n.uniformBlockBinding(x,E)}function l(x,y){let E=r[x.id];E===void 0&&(m(x),E=u(x),r[x.id]=E,x.addEventListener("dispose",g));const w=y.program;n.updateUBOMapping(x,w);const A=e.render.frame;s[x.id]!==A&&(h(x),s[x.id]=A)}function u(x){const y=f();x.__bindingPointIndex=y;const E=i.createBuffer(),w=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=r[x.id],E=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,C=E.length;A<C;A++){const v=Array.isArray(E[A])?E[A]:[E[A]];for(let b=0,k=v.length;b<k;b++){const R=v[b];if(d(R,A,b,w)===!0){const U=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let G=0;G<z.length;G++){const V=z[G],B=M(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,U+W,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,W),W+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,y,E,w){const A=x.value,C=y+"_"+E;if(w[C]===void 0)return typeof A=="number"||typeof A=="boolean"?w[C]=A:w[C]=A.clone(),!0;{const v=w[C];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return w[C]=A,!0}else if(v.equals(A)===!1)return v.copy(A),!0}return!1}function m(x){const y=x.uniforms;let E=0;const w=16;for(let C=0,v=y.length;C<v;C++){const b=Array.isArray(y[C])?y[C]:[y[C]];for(let k=0,R=b.length;k<R;k++){const U=b[k],z=Array.isArray(U.value)?U.value:[U.value];for(let W=0,G=z.length;W<G;W++){const V=z[W],B=M(V),Q=E%w,$=Q%B.boundary,ce=Q+$;E+=$,ce!==0&&w-ce<B.storage&&(E+=w-ce),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=B.storage}}}const A=E%w;return A>0&&(E+=w-A),x.__size=E,x.__cache={},this}function M(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ee("WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}const z_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zt=null;function V_(){return Zt===null&&(Zt=new ro(z_,16,16,yi,Mn),Zt.name="DFG_LUT",Zt.minFilter=bt,Zt.magFilter=bt,Zt.wrapS=gn,Zt.wrapT=gn,Zt.generateMipmaps=!1,Zt.needsUpdate=!0),Zt}class d0{constructor(e={}){const{canvas:t=ru(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Nt}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const M=d,g=new Set([Qa,ja,Za]),p=new Set([Nt,nn,Yi,Ji,Ja,Ka]),x=new Uint32Array(4),y=new Int32Array(4);let E=null,w=null;const A=[],C=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=en,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let k=!1;this._outputColorSpace=Ft;let R=0,U=0,z=null,W=-1,G=null;const V=new st,B=new st;let Q=null;const $=new ke(0);let ce=0,pe=t.width,ue=t.height,Ue=1,at=null,rt=null;const J=new st(0,0,pe,ue),ne=new st(0,0,pe,ue);let se=!1;const Le=new so;let we=!1,Pe=!1;const gt=new Ge,He=new D,Ye=new st,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function lt(){return z===null?Ue:1}let P=n;function ut(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qa}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",it,!1),P===null){const N="webgl2";if(P=ut(N,S),P===null)throw ut(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw Ce("WebGLRenderer: "+S.message),S}let qe,nt,Me,T,_,L,Y,K,q,me,ie,Te,Re,Z,ee,ge,ve,he,Be,I,re,te,de;function j(){qe=new km(P),qe.init(),re=new D_(P,qe),nt=new Lm(P,qe,e,re),Me=new C_(P,qe),nt.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),T=new Wm(P),_=new m_,L=new P_(P,qe,Me,_,nt,re,T),Y=new Vm(b),K=new Kf(P),te=new Dm(P,K),q=new Gm(P,K,T,te),me=new qm(P,q,K,te,T),he=new Xm(P,nt,L),ee=new Nm(_),ie=new p_(b,Y,qe,nt,te,ee),Te=new O_(b,_),Re=new __,Z=new E_(qe),ve=new Pm(b,Y,Me,me,m,c),ge=new R_(b,me,nt),de=new B_(P,T,nt,Me),Be=new Im(P,qe,T),I=new Hm(P,qe,T),T.programs=ie.programs,b.capabilities=nt,b.extensions=qe,b.properties=_,b.renderLists=Re,b.shadowMap=ge,b.state=Me,b.info=T}j(),M!==Nt&&(v=new Jm(M,t.width,t.height,r,s));const X=new U_(b,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=qe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=qe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(S){S!==void 0&&(Ue=S,this.setSize(pe,ue,!1))},this.getSize=function(S){return S.set(pe,ue)},this.setSize=function(S,N,H=!0){if(X.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=S,ue=N,t.width=Math.floor(S*Ue),t.height=Math.floor(N*Ue),H===!0&&(t.style.width=S+"px",t.style.height=N+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(pe*Ue,ue*Ue).floor()},this.setDrawingBufferSize=function(S,N,H){pe=S,ue=N,Ue=H,t.width=Math.floor(S*H),t.height=Math.floor(N*H),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(M===Nt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(V)},this.getViewport=function(S){return S.copy(J)},this.setViewport=function(S,N,H,O){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,N,H,O),Me.viewport(V.copy(J).multiplyScalar(Ue).round())},this.getScissor=function(S){return S.copy(ne)},this.setScissor=function(S,N,H,O){S.isVector4?ne.set(S.x,S.y,S.z,S.w):ne.set(S,N,H,O),Me.scissor(B.copy(ne).multiplyScalar(Ue).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(S){Me.setScissorTest(se=S)},this.setOpaqueSort=function(S){at=S},this.setTransparentSort=function(S){rt=S},this.getClearColor=function(S){return S.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,H=!0){let O=0;if(S){let F=!1;if(z!==null){const oe=z.texture.format;F=g.has(oe)}if(F){const oe=z.texture.type,fe=p.has(oe),le=ve.getClearColor(),xe=ve.getClearAlpha(),ye=le.r,Ie=le.g,ze=le.b;fe?(x[0]=ye,x[1]=Ie,x[2]=ze,x[3]=xe,P.clearBufferuiv(P.COLOR,0,x)):(y[0]=ye,y[1]=Ie,y[2]=ze,y[3]=xe,P.clearBufferiv(P.COLOR,0,y))}else O|=P.COLOR_BUFFER_BIT}N&&(O|=P.DEPTH_BUFFER_BIT),H&&(O|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&P.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",it,!1),ve.dispose(),Re.dispose(),Z.dispose(),_.dispose(),Y.dispose(),me.dispose(),te.dispose(),de.dispose(),ie.dispose(),X.dispose(),X.removeEventListener("sessionstart",po),X.removeEventListener("sessionend",mo),Bn.stop()};function _e(S){S.preventDefault(),Wr("WebGLRenderer: Context Lost."),k=!0}function De(){Wr("WebGLRenderer: Context Restored."),k=!1;const S=T.autoReset,N=ge.enabled,H=ge.autoUpdate,O=ge.needsUpdate,F=ge.type;j(),T.autoReset=S,ge.enabled=N,ge.autoUpdate=H,ge.needsUpdate=O,ge.type=F}function it(S){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Je(S){const N=S.target;N.removeEventListener("dispose",Je),an(N)}function an(S){on(S),_.remove(S)}function on(S){const N=_.get(S).programs;N!==void 0&&(N.forEach(function(H){ie.releaseProgram(H)}),S.isShaderMaterial&&ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,H,O,F,oe){N===null&&(N=et);const fe=F.isMesh&&F.matrixWorld.determinant()<0,le=kc(S,N,H,O,F);Me.setMaterial(O,fe);let xe=H.index,ye=1;if(O.wireframe===!0){if(xe=q.getWireframeAttribute(H),xe===void 0)return;ye=2}const Ie=H.drawRange,ze=H.attributes.position;let be=Ie.start*ye,Ze=(Ie.start+Ie.count)*ye;oe!==null&&(be=Math.max(be,oe.start*ye),Ze=Math.min(Ze,(oe.start+oe.count)*ye)),xe!==null?(be=Math.max(be,0),Ze=Math.min(Ze,xe.count)):ze!=null&&(be=Math.max(be,0),Ze=Math.min(Ze,ze.count));const ct=Ze-be;if(ct<0||ct===1/0)return;te.setup(F,O,le,H,xe);let ot,je=Be;if(xe!==null&&(ot=K.get(xe),je=I,je.setIndex(ot)),F.isMesh)O.wireframe===!0?(Me.setLineWidth(O.wireframeLinewidth*lt()),je.setMode(P.LINES)):je.setMode(P.TRIANGLES);else if(F.isLine){let St=O.linewidth;St===void 0&&(St=1),Me.setLineWidth(St*lt()),F.isLineSegments?je.setMode(P.LINES):F.isLineLoop?je.setMode(P.LINE_LOOP):je.setMode(P.LINE_STRIP)}else F.isPoints?je.setMode(P.POINTS):F.isSprite&&je.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Xr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const St=F._multiDrawStarts,Se=F._multiDrawCounts,Pt=F._multiDrawCount,Xe=xe?K.get(xe).bytesPerElement:1,kt=_.get(O).currentProgram.getUniforms();for(let Kt=0;Kt<Pt;Kt++)kt.setValue(P,"_gl_DrawID",Kt),je.render(St[Kt]/Xe,Se[Kt])}else if(F.isInstancedMesh)je.renderInstances(be,ct,F.count);else if(H.isInstancedBufferGeometry){const St=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Se=Math.min(H.instanceCount,St);je.renderInstances(be,ct,Se)}else je.render(be,ct)};function fo(S,N,H){S.transparent===!0&&S.side===pn&&S.forceSinglePass===!1?(S.side=Rt,S.needsUpdate=!0,nr(S,N,H),S.side=Fn,S.needsUpdate=!0,nr(S,N,H),S.side=pn):nr(S,N,H)}this.compile=function(S,N,H=null){H===null&&(H=S),w=Z.get(H),w.init(N),C.push(w),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),S!==H&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),w.setupLights();const O=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const oe=F.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){const le=oe[fe];fo(le,H,F),O.add(le)}else fo(oe,H,F),O.add(oe)}),w=C.pop(),O},this.compileAsync=function(S,N,H=null){const O=this.compile(S,N,H);return new Promise(F=>{function oe(){if(O.forEach(function(fe){_.get(fe).currentProgram.isReady()&&O.delete(fe)}),O.size===0){F(S);return}setTimeout(oe,10)}qe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let is=null;function Vc(S){is&&is(S)}function po(){Bn.stop()}function mo(){Bn.start()}const Bn=new Lc;Bn.setAnimationLoop(Vc),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(S){is=S,X.setAnimationLoop(S),S===null?Bn.stop():Bn.start()},X.addEventListener("sessionstart",po),X.addEventListener("sessionend",mo),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;const H=X.enabled===!0&&X.isPresenting===!0,O=v!==null&&(z===null||H)&&v.begin(b,z);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,N,z),w=Z.get(S,C.length),w.init(N),C.push(w),gt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Le.setFromProjectionMatrix(gt,Qt,N.reversedDepth),Pe=this.localClippingEnabled,we=ee.init(this.clippingPlanes,Pe),E=Re.get(S,A.length),E.init(),A.push(E),X.enabled===!0&&X.isPresenting===!0){const fe=b.xr.getDepthSensingMesh();fe!==null&&rs(fe,N,-1/0,b.sortObjects)}rs(S,N,0,b.sortObjects),E.finish(),b.sortObjects===!0&&E.sort(at,rt),Oe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Oe&&ve.addToRenderList(E,S),this.info.render.frame++,we===!0&&ee.beginShadows();const F=w.state.shadowsArray;if(ge.render(F,S,N),we===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(O&&v.hasRenderPass())===!1){const fe=E.opaque,le=E.transmissive;if(w.setupLights(),N.isArrayCamera){const xe=N.cameras;if(le.length>0)for(let ye=0,Ie=xe.length;ye<Ie;ye++){const ze=xe[ye];_o(fe,le,S,ze)}Oe&&ve.render(S);for(let ye=0,Ie=xe.length;ye<Ie;ye++){const ze=xe[ye];go(E,S,ze,ze.viewport)}}else le.length>0&&_o(fe,le,S,N),Oe&&ve.render(S),go(E,S,N)}z!==null&&U===0&&(L.updateMultisampleRenderTarget(z),L.updateRenderTargetMipmap(z)),O&&v.end(b),S.isScene===!0&&S.onAfterRender(b,S,N),te.resetDefaultState(),W=-1,G=null,C.pop(),C.length>0?(w=C[C.length-1],we===!0&&ee.setGlobalState(b.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?E=A[A.length-1]:E=null};function rs(S,N,H,O){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Le.intersectsSprite(S)){O&&Ye.setFromMatrixPosition(S.matrixWorld).applyMatrix4(gt);const fe=me.update(S),le=S.material;le.visible&&E.push(S,fe,le,H,Ye.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Le.intersectsObject(S))){const fe=me.update(S),le=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ye.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ye.copy(fe.boundingSphere.center)),Ye.applyMatrix4(S.matrixWorld).applyMatrix4(gt)),Array.isArray(le)){const xe=fe.groups;for(let ye=0,Ie=xe.length;ye<Ie;ye++){const ze=xe[ye],be=le[ze.materialIndex];be&&be.visible&&E.push(S,fe,be,H,Ye.z,ze)}}else le.visible&&E.push(S,fe,le,H,Ye.z,null)}}const oe=S.children;for(let fe=0,le=oe.length;fe<le;fe++)rs(oe[fe],N,H,O)}function go(S,N,H,O){const{opaque:F,transmissive:oe,transparent:fe}=S;w.setupLightsView(H),we===!0&&ee.setGlobalState(b.clippingPlanes,H),O&&Me.viewport(V.copy(O)),F.length>0&&tr(F,N,H),oe.length>0&&tr(oe,N,H),fe.length>0&&tr(fe,N,H),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function _o(S,N,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){const be=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new tn(1,1,{generateMipmaps:!0,type:be?Mn:Nt,minFilter:Kn,samples:Math.max(4,nt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const oe=w.state.transmissionRenderTarget[O.id],fe=O.viewport||V;oe.setSize(fe.z*b.transmissionResolutionScale,fe.w*b.transmissionResolutionScale);const le=b.getRenderTarget(),xe=b.getActiveCubeFace(),ye=b.getActiveMipmapLevel();b.setRenderTarget(oe),b.getClearColor($),ce=b.getClearAlpha(),ce<1&&b.setClearColor(16777215,.5),b.clear(),Oe&&ve.render(H);const Ie=b.toneMapping;b.toneMapping=en;const ze=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),we===!0&&ee.setGlobalState(b.clippingPlanes,O),tr(S,H,O),L.updateMultisampleRenderTarget(oe),L.updateRenderTargetMipmap(oe),qe.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Ze=0,ct=N.length;Ze<ct;Ze++){const ot=N[Ze],{object:je,geometry:St,material:Se,group:Pt}=ot;if(Se.side===pn&&je.layers.test(O.layers)){const Xe=Se.side;Se.side=Rt,Se.needsUpdate=!0,vo(je,H,O,St,Se,Pt),Se.side=Xe,Se.needsUpdate=!0,be=!0}}be===!0&&(L.updateMultisampleRenderTarget(oe),L.updateRenderTargetMipmap(oe))}b.setRenderTarget(le,xe,ye),b.setClearColor($,ce),ze!==void 0&&(O.viewport=ze),b.toneMapping=Ie}function tr(S,N,H){const O=N.isScene===!0?N.overrideMaterial:null;for(let F=0,oe=S.length;F<oe;F++){const fe=S[F],{object:le,geometry:xe,group:ye}=fe;let Ie=fe.material;Ie.allowOverride===!0&&O!==null&&(Ie=O),le.layers.test(H.layers)&&vo(le,N,H,xe,Ie,ye)}}function vo(S,N,H,O,F,oe){S.onBeforeRender(b,N,H,O,F,oe),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(b,N,H,O,S,oe),F.transparent===!0&&F.side===pn&&F.forceSinglePass===!1?(F.side=Rt,F.needsUpdate=!0,b.renderBufferDirect(H,N,O,F,S,oe),F.side=Fn,F.needsUpdate=!0,b.renderBufferDirect(H,N,O,F,S,oe),F.side=pn):b.renderBufferDirect(H,N,O,F,S,oe),S.onAfterRender(b,N,H,O,F,oe)}function nr(S,N,H){N.isScene!==!0&&(N=et);const O=_.get(S),F=w.state.lights,oe=w.state.shadowsArray,fe=F.state.version,le=ie.getParameters(S,F.state,oe,N,H),xe=ie.getProgramCacheKey(le);let ye=O.programs;O.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,O.fog=N.fog;const Ie=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;O.envMap=Y.get(S.envMap||O.environment,Ie),O.envMapRotation=O.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,ye===void 0&&(S.addEventListener("dispose",Je),ye=new Map,O.programs=ye);let ze=ye.get(xe);if(ze!==void 0){if(O.currentProgram===ze&&O.lightsStateVersion===fe)return Mo(S,le),ze}else le.uniforms=ie.getUniforms(S),S.onBeforeCompile(le,b),ze=ie.acquireProgram(le,xe),ye.set(xe,ze),O.uniforms=le.uniforms;const be=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(be.clippingPlanes=ee.uniform),Mo(S,le),O.needsLights=Hc(S),O.lightsStateVersion=fe,O.needsLights&&(be.ambientLightColor.value=F.state.ambient,be.lightProbe.value=F.state.probe,be.directionalLights.value=F.state.directional,be.directionalLightShadows.value=F.state.directionalShadow,be.spotLights.value=F.state.spot,be.spotLightShadows.value=F.state.spotShadow,be.rectAreaLights.value=F.state.rectArea,be.ltc_1.value=F.state.rectAreaLTC1,be.ltc_2.value=F.state.rectAreaLTC2,be.pointLights.value=F.state.point,be.pointLightShadows.value=F.state.pointShadow,be.hemisphereLights.value=F.state.hemi,be.directionalShadowMatrix.value=F.state.directionalShadowMatrix,be.spotLightMatrix.value=F.state.spotLightMatrix,be.spotLightMap.value=F.state.spotLightMap,be.pointShadowMatrix.value=F.state.pointShadowMatrix),O.currentProgram=ze,O.uniformsList=null,ze}function xo(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Vr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Mo(S,N){const H=_.get(S);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function kc(S,N,H,O,F){N.isScene!==!0&&(N=et),L.resetTextureUnits();const oe=N.fog,fe=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?N.environment:null,le=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ei,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,ye=Y.get(O.envMap||fe,xe),Ie=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),be=!!H.morphAttributes.position,Ze=!!H.morphAttributes.normal,ct=!!H.morphAttributes.color;let ot=en;O.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ot=b.toneMapping);const je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,St=je!==void 0?je.length:0,Se=_.get(O),Pt=w.state.lights;if(we===!0&&(Pe===!0||S!==G)){const _t=S===G&&O.id===W;ee.setState(O,S,_t)}let Xe=!1;O.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Pt.state.version||Se.outputColorSpace!==le||F.isBatchedMesh&&Se.batching===!1||!F.isBatchedMesh&&Se.batching===!0||F.isBatchedMesh&&Se.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Se.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Se.instancing===!1||!F.isInstancedMesh&&Se.instancing===!0||F.isSkinnedMesh&&Se.skinning===!1||!F.isSkinnedMesh&&Se.skinning===!0||F.isInstancedMesh&&Se.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Se.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Se.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Se.instancingMorph===!1&&F.morphTexture!==null||Se.envMap!==ye||O.fog===!0&&Se.fog!==oe||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ee.numPlanes||Se.numIntersection!==ee.numIntersection)||Se.vertexAlphas!==Ie||Se.vertexTangents!==ze||Se.morphTargets!==be||Se.morphNormals!==Ze||Se.morphColors!==ct||Se.toneMapping!==ot||Se.morphTargetsCount!==St)&&(Xe=!0):(Xe=!0,Se.__version=O.version);let kt=Se.currentProgram;Xe===!0&&(kt=nr(O,N,F));let Kt=!1,zn=!1,ei=!1;const tt=kt.getUniforms(),xt=Se.uniforms;if(Me.useProgram(kt.program)&&(Kt=!0,zn=!0,ei=!0),O.id!==W&&(W=O.id,zn=!0),Kt||G!==S){Me.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),tt.setValue(P,"projectionMatrix",S.projectionMatrix),tt.setValue(P,"viewMatrix",S.matrixWorldInverse);const Tn=tt.map.cameraPosition;Tn!==void 0&&Tn.setValue(P,He.setFromMatrixPosition(S.matrixWorld)),nt.logarithmicDepthBuffer&&tt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&tt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),G!==S&&(G=S,zn=!0,ei=!0)}if(Se.needsLights&&(Pt.state.directionalShadowMap.length>0&&tt.setValue(P,"directionalShadowMap",Pt.state.directionalShadowMap,L),Pt.state.spotShadowMap.length>0&&tt.setValue(P,"spotShadowMap",Pt.state.spotShadowMap,L),Pt.state.pointShadowMap.length>0&&tt.setValue(P,"pointShadowMap",Pt.state.pointShadowMap,L)),F.isSkinnedMesh){tt.setOptional(P,F,"bindMatrix"),tt.setOptional(P,F,"bindMatrixInverse");const _t=F.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),tt.setValue(P,"boneTexture",_t.boneTexture,L))}F.isBatchedMesh&&(tt.setOptional(P,F,"batchingTexture"),tt.setValue(P,"batchingTexture",F._matricesTexture,L),tt.setOptional(P,F,"batchingIdTexture"),tt.setValue(P,"batchingIdTexture",F._indirectTexture,L),tt.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&tt.setValue(P,"batchingColorTexture",F._colorsTexture,L));const bn=H.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&he.update(F,H,kt),(zn||Se.receiveShadow!==F.receiveShadow)&&(Se.receiveShadow=F.receiveShadow,tt.setValue(P,"receiveShadow",F.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&N.environment!==null&&(xt.envMapIntensity.value=N.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=V_()),zn&&(tt.setValue(P,"toneMappingExposure",b.toneMappingExposure),Se.needsLights&&Gc(xt,ei),oe&&O.fog===!0&&Te.refreshFogUniforms(xt,oe),Te.refreshMaterialUniforms(xt,O,Ue,ue,w.state.transmissionRenderTarget[S.id]),Vr.upload(P,xo(Se),xt,L)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Vr.upload(P,xo(Se),xt,L),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&tt.setValue(P,"center",F.center),tt.setValue(P,"modelViewMatrix",F.modelViewMatrix),tt.setValue(P,"normalMatrix",F.normalMatrix),tt.setValue(P,"modelMatrix",F.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const _t=O.uniformsGroups;for(let Tn=0,ti=_t.length;Tn<ti;Tn++){const So=_t[Tn];de.update(So,kt),de.bind(So,kt)}}return kt}function Gc(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Hc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(S,N,H){const O=_.get(S);O.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),_.get(S.texture).__webglTexture=N,_.get(S.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const H=_.get(S);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const Wc=P.createFramebuffer();this.setRenderTarget=function(S,N=0,H=0){z=S,R=N,U=H;let O=null,F=!1,oe=!1;if(S){const le=_.get(S);if(le.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(P.FRAMEBUFFER,le.__webglFramebuffer),V.copy(S.viewport),B.copy(S.scissor),Q=S.scissorTest,Me.viewport(V),Me.scissor(B),Me.setScissorTest(Q),W=-1;return}else if(le.__webglFramebuffer===void 0)L.setupRenderTarget(S);else if(le.__hasExternalTextures)L.rebindTextures(S,_.get(S.texture).__webglTexture,_.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ie=S.depthTexture;if(le.__boundDepthTexture!==Ie){if(Ie!==null&&_.has(Ie)&&(S.width!==Ie.image.width||S.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(S)}}const xe=S.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(oe=!0);const ye=_.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ye[N])?O=ye[N][H]:O=ye[N],F=!0):S.samples>0&&L.useMultisampledRTT(S)===!1?O=_.get(S).__webglMultisampledFramebuffer:Array.isArray(ye)?O=ye[H]:O=ye,V.copy(S.viewport),B.copy(S.scissor),Q=S.scissorTest}else V.copy(J).multiplyScalar(Ue).floor(),B.copy(ne).multiplyScalar(Ue).floor(),Q=se;if(H!==0&&(O=Wc),Me.bindFramebuffer(P.FRAMEBUFFER,O)&&Me.drawBuffers(S,O),Me.viewport(V),Me.scissor(B),Me.setScissorTest(Q),F){const le=_.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,le.__webglTexture,H)}else if(oe){const le=N;for(let xe=0;xe<S.textures.length;xe++){const ye=_.get(S.textures[xe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+xe,ye.__webglTexture,H,le)}}else if(S!==null&&H!==0){const le=_.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,le.__webglTexture,H)}W=-1},this.readRenderTargetPixels=function(S,N,H,O,F,oe,fe,le=0){if(!(S&&S.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){Me.bindFramebuffer(P.FRAMEBUFFER,xe);try{const ye=S.textures[le],Ie=ye.format,ze=ye.type;if(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!nt.textureFormatReadable(Ie)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(ze)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-O&&H>=0&&H<=S.height-F&&P.readPixels(N,H,O,F,re.convert(Ie),re.convert(ze),oe)}finally{const ye=z!==null?_.get(z).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(S,N,H,O,F,oe,fe,le=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe)if(N>=0&&N<=S.width-O&&H>=0&&H<=S.height-F){Me.bindFramebuffer(P.FRAMEBUFFER,xe);const ye=S.textures[le],Ie=ye.format,ze=ye.type;if(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!nt.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,be),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),P.readPixels(N,H,O,F,re.convert(Ie),re.convert(ze),0);const Ze=z!==null?_.get(z).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Ze);const ct=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await su(P,ct,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,be),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe),P.deleteBuffer(be),P.deleteSync(ct),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,H=0){const O=Math.pow(2,-H),F=Math.floor(S.image.width*O),oe=Math.floor(S.image.height*O),fe=N!==null?N.x:0,le=N!==null?N.y:0;L.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,fe,le,F,oe),Me.unbindTexture()};const Xc=P.createFramebuffer(),qc=P.createFramebuffer();this.copyTextureToTexture=function(S,N,H=null,O=null,F=0,oe=0){let fe,le,xe,ye,Ie,ze,be,Ze,ct;const ot=S.isCompressedTexture?S.mipmaps[oe]:S.image;if(H!==null)fe=H.max.x-H.min.x,le=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,ye=H.min.x,Ie=H.min.y,ze=H.isBox3?H.min.z:0;else{const xt=Math.pow(2,-F);fe=Math.floor(ot.width*xt),le=Math.floor(ot.height*xt),S.isDataArrayTexture?xe=ot.depth:S.isData3DTexture?xe=Math.floor(ot.depth*xt):xe=1,ye=0,Ie=0,ze=0}O!==null?(be=O.x,Ze=O.y,ct=O.z):(be=0,Ze=0,ct=0);const je=re.convert(N.format),St=re.convert(N.type);let Se;N.isData3DTexture?(L.setTexture3D(N,0),Se=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(L.setTexture2DArray(N,0),Se=P.TEXTURE_2D_ARRAY):(L.setTexture2D(N,0),Se=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Pt=P.getParameter(P.UNPACK_ROW_LENGTH),Xe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),kt=P.getParameter(P.UNPACK_SKIP_PIXELS),Kt=P.getParameter(P.UNPACK_SKIP_ROWS),zn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ot.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ot.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ie),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ze);const ei=S.isDataArrayTexture||S.isData3DTexture,tt=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const xt=_.get(S),bn=_.get(N),_t=_.get(xt.__renderTarget),Tn=_.get(bn.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,_t.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let ti=0;ti<xe;ti++)ei&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(S).__webglTexture,F,ze+ti),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(N).__webglTexture,oe,ct+ti)),P.blitFramebuffer(ye,Ie,fe,le,be,Ze,fe,le,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||S.isRenderTargetTexture||_.has(S)){const xt=_.get(S),bn=_.get(N);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Xc),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,qc);for(let _t=0;_t<xe;_t++)ei?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xt.__webglTexture,F,ze+_t):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xt.__webglTexture,F),tt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,bn.__webglTexture,oe,ct+_t):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,bn.__webglTexture,oe),F!==0?P.blitFramebuffer(ye,Ie,fe,le,be,Ze,fe,le,P.COLOR_BUFFER_BIT,P.NEAREST):tt?P.copyTexSubImage3D(Se,oe,be,Ze,ct+_t,ye,Ie,fe,le):P.copyTexSubImage2D(Se,oe,be,Ze,ye,Ie,fe,le);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else tt?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Se,oe,be,Ze,ct,fe,le,xe,je,St,ot.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Se,oe,be,Ze,ct,fe,le,xe,je,ot.data):P.texSubImage3D(Se,oe,be,Ze,ct,fe,le,xe,je,St,ot):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,oe,be,Ze,fe,le,je,St,ot.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,oe,be,Ze,ot.width,ot.height,je,ot.data):P.texSubImage2D(P.TEXTURE_2D,oe,be,Ze,fe,le,je,St,ot);P.pixelStorei(P.UNPACK_ROW_LENGTH,Pt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Xe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,kt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Kt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,zn),oe===0&&N.generateMipmaps&&P.generateMipmap(Se),Me.unbindTexture()},this.initRenderTarget=function(S){_.get(S).__webglFramebuffer===void 0&&L.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?L.setTextureCube(S,0):S.isData3DTexture?L.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?L.setTexture2DArray(S,0):L.setTexture2D(S,0),Me.unbindTexture()},this.resetState=function(){R=0,U=0,z=null,Me.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}class k_{#e=To(_h(new Set));get clickedProjects(){return kr(this.#e)}set clickedProjects(e){Ao(this.#e,e,!0)}#t=To(!1);get gameActive(){return kr(this.#t)}set gameActive(e){Ao(this.#t,e,!0)}trackProject(e){this.clickedProjects.add(e),this.clickedProjects.size>=3&&!this.gameActive&&(this.gameActive=!0)}exitGame(){this.gameActive=!1,this.clickedProjects.clear()}}const zc=Symbol("GAME_STATE");function p0(){return mh(zc,new k_)}function m0(){return gh(zc)}export{Qe as $,h0 as A,zt as B,ju as C,c0 as D,us as E,s0 as F,qh as G,bt as H,Ac as I,Mt as J,oa as K,er as L,xc as M,rr as N,ht as O,Lt as P,jn as Q,aa as R,$_ as S,Rc as T,gn as U,D as V,d0 as W,Ku as X,Qn as Y,Ju as Z,pn as _,Vt as a,Ct as a0,j_ as a1,e0 as a2,Sc as a3,t0 as a4,n0 as a5,or as a6,K_ as a7,co as a8,Mc as a9,r0 as aa,Gu as ab,Gr as ac,Va as ad,vc as ae,Tt as af,Kr as ag,Jr as ah,Qr as ai,We as aj,Fn as ak,Qi as al,On as am,yn as an,Ql as ao,mc as ap,wc as b,l0 as c,xf as d,W_ as e,p0 as f,q_ as g,J_ as h,H_ as i,Y_ as j,u0 as k,i0 as l,Ae as m,ke as n,Ei as o,Ft as p,o0 as q,Ge as r,X_ as s,Q_ as t,m0 as u,ol as v,a0 as w,f0 as x,Z_ as y,Kn as z};
