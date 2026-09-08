(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=`attached`,u=1e3,d=1001,f=1002,p=1003,m=1004,h=1005,g=1006,_=1007,v=1008,y=1009,b=1010,x=1011,S=1012,C=1013,w=1014,T=1015,E=1016,D=1017,ee=1018,te=1020,O=35902,ne=35899,re=1021,k=1022,ie=1023,ae=1026,oe=1027,se=1028,ce=1029,le=1030,ue=1031,de=1033,fe=33776,pe=33777,A=33778,me=33779,he=35840,ge=35841,_e=35842,ve=35843,ye=36196,be=37492,xe=37496,Se=37488,Ce=37489,we=37490,Te=37491,Ee=37808,De=37809,Oe=37810,ke=37811,Ae=37812,je=37813,Me=37814,Ne=37815,Pe=37816,Fe=37817,Ie=37818,Le=37819,j=37820,Re=37821,ze=36492,Be=36494,M=36495,Ve=36283,N=36284,P=36285,He=36286,Ue=2201,We=2202,Ge=2300,Ke=2301,qe=2302,Je=2303,Ye=2400,Xe=2401,Ze=2402,Qe=2500,$e=2501,et=3200,tt=`srgb`,nt=`srgb-linear`,rt=`linear`,it=`srgb`,at=7680,ot=35044,st=2e3;function ct(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function lt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ut(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function dt(){let e=ut(`canvas`);return e.style.display=`block`,e}var ft={};function pt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function mt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function F(...e){e=mt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function I(...e){e=mt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ht(...e){let t=e.join(` `);t in ft||(ft[t]=!0,F(...e))}function gt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var _t={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},vt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},yt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),bt=1234567,xt=Math.PI/180,St=180/Math.PI;function Ct(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yt[e&255]+yt[e>>8&255]+yt[e>>16&255]+yt[e>>24&255]+`-`+yt[t&255]+yt[t>>8&255]+`-`+yt[t>>16&15|64]+yt[t>>24&255]+`-`+yt[n&63|128]+yt[n>>8&255]+`-`+yt[n>>16&255]+yt[n>>24&255]+yt[r&255]+yt[r>>8&255]+yt[r>>16&255]+yt[r>>24&255]).toLowerCase()}function L(e,t,n){return Math.max(t,Math.min(n,e))}function wt(e,t){return(e%t+t)%t}function Tt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Et(e,t,n){return e===t?0:(n-e)/(t-e)}function Dt(e,t,n){return(1-n)*e+n*t}function Ot(e,t,n,r){return Dt(e,t,1-Math.exp(-n*r))}function kt(e,t=1){return t-Math.abs(wt(e,t*2)-t)}function At(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function jt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Mt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Nt(e,t){return e+Math.random()*(t-e)}function Pt(e){return e*(.5-Math.random())}function Ft(e){e!==void 0&&(bt=e);let t=bt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function It(e){return e*xt}function Lt(e){return e*St}function Rt(e){return!(e&e-1)&&e!==0}function zt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Bt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Vt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:F(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ht(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Ut(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Wt={DEG2RAD:xt,RAD2DEG:St,generateUUID:Ct,clamp:L,euclideanModulo:wt,mapLinear:Tt,inverseLerp:Et,lerp:Dt,damp:Ot,pingpong:kt,smoothstep:At,smootherstep:jt,randInt:Mt,randFloat:Nt,randFloatSpread:Pt,seededRandom:Ft,degToRad:It,radToDeg:Lt,isPowerOfTwo:Rt,ceilPowerOfTwo:zt,floorPowerOfTwo:Bt,setQuaternionFromProperEuler:Vt,normalize:Ut,denormalize:Ht};o=Symbol.iterator;var R=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=L(this.x,e.x,t.x),this.y=L(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=L(this.x,e,t),this.y=L(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(L(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(L(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=R,e.prototype.isVector2=!0;var Gt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:F(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(L(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var z=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=L(this.x,e.x,t.x),this.y=L(this.y,e.y,t.y),this.z=L(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=L(this.x,e,t),this.y=L(this.y,e,t),this.z=L(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(L(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kt.copy(this).projectOnVector(e),this.sub(Kt)}reflect(e){return this.sub(Kt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(L(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=z,t.prototype.isVector3=!0;var Kt=new z,qt=new Gt,B=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ht(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Jt.makeScale(e,t)),this}rotate(e){return ht(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Jt.makeRotation(-e)),this}translate(e,t){return ht(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Jt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=B,n.prototype.isMatrix3=!0;var Jt=new B,Yt=new B().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xt=new B().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zt(){let e={enabled:!0,workingColorSpace:nt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Qt(e.r),e.g=Qt(e.g),e.b=Qt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=$t(e.r),e.g=$t(e.g),e.b=$t(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?rt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ht(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ht(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[nt]:{primaries:t,whitePoint:r,transfer:rt,toXYZ:Yt,fromXYZ:Xt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:tt},outputColorSpaceConfig:{drawingBufferColorSpace:tt}},[tt]:{primaries:t,whitePoint:r,transfer:it,toXYZ:Yt,fromXYZ:Xt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:tt}}}),e}var V=Zt();function Qt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function $t(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var en,tn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{en===void 0&&(en=ut(`canvas`)),en.width=e.width,en.height=e.height;let t=en.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=en}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ut(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Qt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Qt(t[e]/255)*255):t[e]=Qt(t[e]);return{data:t,width:e.width,height:e.height}}return F(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},nn=0,rn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nn++}),this.uuid=Ct(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(an(r[t].image)):e.push(an(r[t]))}else e=an(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function an(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?tn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(F(`Texture: Unable to serialize Texture.`),{})}var on=0,sn=new z,cn=class e extends vt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=d,i=d,a=g,o=v,s=ie,c=y,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:on++}),this.uuid=Ct(),this.name=``,this.source=new rn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new R(0,0),this.repeat=new R(1,1),this.center=new R(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new B,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sn).x}get height(){return this.source.getSize(sn).y}get depth(){return this.source.getSize(sn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){F(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){F(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case u:e.x-=Math.floor(e.x);break;case d:e.x=e.x<0?0:1;break;case f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case u:e.y-=Math.floor(e.y);break;case d:e.y=e.y<0?0:1;break;case f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null,cn.DEFAULT_MAPPING=300,cn.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var ln=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=L(this.x,e.x,t.x),this.y=L(this.y,e.y,t.y),this.z=L(this.z,e.z,t.z),this.w=L(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=L(this.x,e,t),this.y=L(this.y,e,t),this.z=L(this.z,e,t),this.w=L(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(L(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=ln,r.prototype.isVector4=!0;var un=class extends vt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:g,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ln(0,0,e,t),this.scissorTest=!1,this.viewport=new ln(0,0,e,t),this.textures=[];let r=new cn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:g,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new rn(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},dn=class extends un{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fn=class extends cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=p,this.minFilter=p,this.wrapR=d,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},pn=class extends cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=p,this.minFilter=p,this.wrapR=d,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},H=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/mn.setFromMatrixColumn(e,0).length(),i=1/mn.setFromMatrixColumn(e,1).length(),a=1/mn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gn,e,_n)}lookAt(e,t,n){let r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),vn.crossVectors(n,bn),vn.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),vn.crossVectors(n,bn)),vn.normalize(),yn.crossVectors(bn,vn),r[0]=vn.x,r[4]=yn.x,r[8]=bn.x,r[1]=vn.y,r[5]=yn.y,r[9]=bn.y,r[2]=vn.z,r[6]=yn.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],te=r[2],O=r[6],ne=r[10],re=r[14],k=r[3],ie=r[7],ae=r[11],oe=r[15];return i[0]=a*x+o*T+s*te+c*k,i[4]=a*S+o*E+s*O+c*ie,i[8]=a*C+o*D+s*ne+c*ae,i[12]=a*w+o*ee+s*re+c*oe,i[1]=l*x+u*T+d*te+f*k,i[5]=l*S+u*E+d*O+f*ie,i[9]=l*C+u*D+d*ne+f*ae,i[13]=l*w+u*ee+d*re+f*oe,i[2]=p*x+m*T+h*te+g*k,i[6]=p*S+m*E+h*O+g*ie,i[10]=p*C+m*D+h*ne+g*ae,i[14]=p*w+m*ee+h*re+g*oe,i[3]=_*x+v*T+y*te+b*k,i[7]=_*S+v*E+y*O+b*ie,i[11]=_*C+v*D+y*ne+b*ae,i[15]=_*w+v*ee+y*re+b*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,te=_*ee-v*D+y*E+b*T-x*w+S*C;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/te;return e[0]=(o*ee-s*D+c*E)*O,e[1]=(r*D-n*ee-i*E)*O,e[2]=(m*S-h*x+g*b)*O,e[3]=(d*x-u*S-f*b)*O,e[4]=(s*T-a*ee-c*w)*O,e[5]=(t*ee-r*T+i*w)*O,e[6]=(h*y-p*S-g*v)*O,e[7]=(l*S-d*y+f*v)*O,e[8]=(a*D-o*T+c*C)*O,e[9]=(n*T-t*D-i*C)*O,e[10]=(p*x-m*y+g*_)*O,e[11]=(u*y-l*x-f*_)*O,e[12]=(o*w-a*E-s*C)*O,e[13]=(t*E-n*w+r*C)*O,e[14]=(m*v-p*b-h*_)*O,e[15]=(l*b-u*v+d*_)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=mn.set(r[0],r[1],r[2]).length(),o=mn.set(r[4],r[5],r[6]).length(),s=mn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),hn.copy(this);let c=1/a,l=1/o,u=1/s;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=l,hn.elements[5]*=l,hn.elements[6]*=l,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=st,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=st,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=H,i.prototype.isMatrix4=!0;var mn=new z,hn=new H,gn=new z(0,0,0),_n=new z(1,1,1),vn=new z,yn=new z,bn=new z,xn=new H,Sn=new Gt,Cn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(L(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-L(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(L(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-L(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(L(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-L(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:F(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sn.setFromEuler(this),this.setFromQuaternion(Sn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER=`XYZ`;var wn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Tn=0,En=new z,Dn=new Gt,On=new H,kn=new z,An=new z,jn=new z,Mn=new Gt,Nn=new z(1,0,0),Pn=new z(0,1,0),Fn=new z(0,0,1),In={type:`added`},Ln={type:`removed`},Rn={type:`childadded`,child:null},zn={type:`childremoved`,child:null},Bn=class e extends vt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tn++}),this.uuid=Ct(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new z,n=new Cn,r=new Gt,i=new z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new H},normalMatrix:{value:new B}}),this.matrix=new H,this.matrixWorld=new H,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.premultiply(Dn),this}rotateX(e){return this.rotateOnAxis(Nn,e)}rotateY(e){return this.rotateOnAxis(Pn,e)}rotateZ(e){return this.rotateOnAxis(Fn,e)}translateOnAxis(e,t){return En.copy(e).applyQuaternion(this.quaternion),this.position.add(En.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nn,e)}translateY(e){return this.translateOnAxis(Pn,e)}translateZ(e){return this.translateOnAxis(Fn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kn.copy(e):kn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),An.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(An,kn,this.up):On.lookAt(kn,An,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),Dn.setFromRotationMatrix(On),this.quaternion.premultiply(Dn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(I(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(In),Rn.child=e,this.dispatchEvent(Rn),Rn.child=null):I(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ln),zn.child=e,this.dispatchEvent(zn),zn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(In),Rn.child=e,this.dispatchEvent(Rn),Rn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(An,e,jn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(An,Mn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Bn.DEFAULT_UP=new z(0,1,0),Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var U=class extends Bn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Vn={type:`move`},Hn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new U,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new U,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new U,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new U;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Un={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Gn={h:0,s:0,l:0};function Kn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,V.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=V.workingColorSpace){return this.r=e,this.g=t,this.b=n,V.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=V.workingColorSpace){if(e=wt(e,1),t=L(t,0,1),n=L(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Kn(i,r,e+1/3),this.g=Kn(i,r,e),this.b=Kn(i,r,e-1/3)}return V.colorSpaceToWorking(this,r),this}setStyle(e,t=tt){function n(t){t!==void 0&&parseFloat(t)<1&&F(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:F(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);F(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let n=Un[e.toLowerCase()];return n===void 0?F(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qt(e.r),this.g=Qt(e.g),this.b=Qt(e.b),this}copyLinearToSRGB(e){return this.r=$t(e.r),this.g=$t(e.g),this.b=$t(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return V.workingToColorSpace(qn.copy(this),e),Math.round(L(qn.r*255,0,255))*65536+Math.round(L(qn.g*255,0,255))*256+Math.round(L(qn.b*255,0,255))}getHexString(e=tt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=V.workingColorSpace){V.workingToColorSpace(qn.copy(this),t);let n=qn.r,r=qn.g,i=qn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=V.workingColorSpace){return V.workingToColorSpace(qn.copy(this),t),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=tt){V.workingToColorSpace(qn.copy(this),e);let t=qn.r,n=qn.g,r=qn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Gn);let n=Dt(Wn.h,Gn.h,t),r=Dt(Wn.s,Gn.s,t),i=Dt(Wn.l,Gn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qn=new W;W.NAMES=Un;var Jn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new W(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Yn=class extends Bn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xn=new z,Zn=new z,Qn=new z,$n=new z,er=new z,tr=new z,nr=new z,rr=new z,ir=new z,ar=new z,or=new ln,sr=new ln,cr=new ln,lr=class e{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xn.subVectors(e,t),r.cross(Xn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Xn.subVectors(r,t),Zn.subVectors(n,t),Qn.subVectors(e,t);let a=Xn.dot(Xn),o=Xn.dot(Zn),s=Xn.dot(Qn),c=Zn.dot(Zn),l=Zn.dot(Qn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$n)!==null&&$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,$n)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,$n.x),s.addScaledVector(a,$n.y),s.addScaledVector(o,$n.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return or.setScalar(0),sr.setScalar(0),cr.setScalar(0),or.fromBufferAttribute(e,t),sr.fromBufferAttribute(e,n),cr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(or,i.x),a.addScaledVector(sr,i.y),a.addScaledVector(cr,i.z),a}static isFrontFacing(e,t,n,r){return Xn.subVectors(n,t),Zn.subVectors(e,t),Xn.cross(Zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Xn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;er.subVectors(r,n),tr.subVectors(i,n),rr.subVectors(e,n);let s=er.dot(rr),c=tr.dot(rr);if(s<=0&&c<=0)return t.copy(n);ir.subVectors(e,r);let l=er.dot(ir),u=tr.dot(ir);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(er,a);ar.subVectors(e,i);let f=er.dot(ar),p=tr.dot(ar);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(tr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return nr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(nr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ur=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,fr):fr.fromBufferAttribute(r,t),fr.applyMatrix4(e.matrixWorld),this.expandByPoint(fr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),pr.copy(e.boundingBox)),pr.applyMatrix4(e.matrixWorld),this.union(pr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fr),fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),xr.subVectors(this.max,br),mr.subVectors(e.a,br),hr.subVectors(e.b,br),gr.subVectors(e.c,br),_r.subVectors(hr,mr),vr.subVectors(gr,hr),yr.subVectors(mr,gr);let t=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-yr.z,yr.y,_r.z,0,-_r.x,vr.z,0,-vr.x,yr.z,0,-yr.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-yr.y,yr.x,0];return!wr(t,mr,hr,gr,xr)||(t=[1,0,0,0,1,0,0,0,1],!wr(t,mr,hr,gr,xr))?!1:(Sr.crossVectors(_r,vr),t=[Sr.x,Sr.y,Sr.z],wr(t,mr,hr,gr,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},dr=[new z,new z,new z,new z,new z,new z,new z,new z],fr=new z,pr=new ur,mr=new z,hr=new z,gr=new z,_r=new z,vr=new z,yr=new z,br=new z,xr=new z,Sr=new z,Cr=new z;function wr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Cr.fromArray(e,a);let o=i.x*Math.abs(Cr.x)+i.y*Math.abs(Cr.y)+i.z*Math.abs(Cr.z),s=t.dot(Cr),c=n.dot(Cr),l=r.dot(Cr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Tr=new z,Er=new R,Dr=0,Or=class extends vt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ot,this.updateRanges=[],this.gpuType=T,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXYZ(t,Tr.x,Tr.y,Tr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix4(e),this.setXYZ(t,Tr.x,Tr.y,Tr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyNormalMatrix(e),this.setXYZ(t,Tr.x,Tr.y,Tr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.transformDirection(e),this.setXYZ(t,Tr.x,Tr.y,Tr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ht(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ht(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ht(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ht(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ht(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},kr=class extends Or{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ar=class extends Or{constructor(e,t,n){super(new Uint32Array(e),t,n)}},jr=class extends Or{constructor(e,t,n){super(new Float32Array(e),t,n)}},Mr=new ur,Nr=new z,Pr=new z,Fr=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Mr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);let t=Nr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Nr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(Pr)),this.expandByPoint(Nr.copy(e.center).sub(Pr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ir=0,Lr=new H,Rr=new Bn,zr=new z,Br=new ur,Vr=new ur,Hr=new z,Ur=class e extends vt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ir++}),this.uuid=Ct(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ct(e)?Ar:kr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new B().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Lr.makeRotationFromQuaternion(e),this.applyMatrix4(Lr),this}rotateX(e){return Lr.makeRotationX(e),this.applyMatrix4(Lr),this}rotateY(e){return Lr.makeRotationY(e),this.applyMatrix4(Lr),this}rotateZ(e){return Lr.makeRotationZ(e),this.applyMatrix4(Lr),this}translate(e,t,n){return Lr.makeTranslation(e,t,n),this.applyMatrix4(Lr),this}scale(e,t,n){return Lr.makeScale(e,t,n),this.applyMatrix4(Lr),this}lookAt(e){return Rr.lookAt(e),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new jr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&F(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){I(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Br.setFromBufferAttribute(n),this.morphTargetsRelative?(Hr.addVectors(this.boundingBox.min,Br.min),this.boundingBox.expandByPoint(Hr),Hr.addVectors(this.boundingBox.max,Br.max),this.boundingBox.expandByPoint(Hr)):(this.boundingBox.expandByPoint(Br.min),this.boundingBox.expandByPoint(Br.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&I(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){I(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Br.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Vr.setFromBufferAttribute(n),this.morphTargetsRelative?(Hr.addVectors(Br.min,Vr.min),Br.expandByPoint(Hr),Hr.addVectors(Br.max,Vr.max),Br.expandByPoint(Hr)):(Br.expandByPoint(Vr.min),Br.expandByPoint(Vr.max))}Br.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Hr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Hr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Hr.fromBufferAttribute(a,t),o&&(zr.fromBufferAttribute(e,t),Hr.add(zr)),r=Math.max(r,n.distanceToSquared(Hr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&I(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){I(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Or(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new z,s[e]=new z;let c=new z,l=new z,u=new z,d=new R,f=new R,p=new R,m=new z,h=new z;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new z,y=new z,b=new z,x=new z;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Or(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new z,i=new z,a=new z,o=new z,s=new z,c=new z,l=new z,u=new z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Hr.fromBufferAttribute(e,t),Hr.normalize(),e.setXYZ(t,Hr.x,Hr.y,Hr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Or(a,r,i)}if(this.index===null)return F(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Wr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=ot,this.updateRanges=[],this.version=0,this.uuid=Ct()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ct()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ct()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gr=new z,Kr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix4(e),this.setXYZ(t,Gr.x,Gr.y,Gr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyNormalMatrix(e),this.setXYZ(t,Gr.x,Gr.y,Gr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.transformDirection(e),this.setXYZ(t,Gr.x,Gr.y,Gr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ht(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ht(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ht(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ht(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ht(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){pt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Or(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){pt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qr=0,Jr=class extends vt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qr++}),this.uuid=Ct(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=at,this.stencilZFail=at,this.stencilZPass=at,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){F(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){F(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new R().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new R().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Yr=new z,Xr=new z,Zr=new z,Qr=new z,$r=new z,ei=new z,ti=new z,ni=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yr.copy(this.origin).addScaledVector(this.direction,t),Yr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xr.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Xr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),o=Qr.dot(this.direction),s=-Qr.dot(Zr),c=Qr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Xr).addScaledVector(Zr,d),f}intersectSphere(e,t){Yr.subVectors(e.center,this.origin);let n=Yr.dot(this.direction),r=Yr.dot(Yr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yr)!==null}intersectTriangle(e,t,n,r,i){$r.subVectors(t,e),ei.subVectors(n,e),ti.crossVectors($r,ei);let a=this.direction.dot(ti),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qr.subVectors(this.origin,e);let s=o*this.direction.dot(ei.crossVectors(Qr,ei));if(s<0)return null;let c=o*this.direction.dot($r.cross(Qr));if(c<0||s+c>a)return null;let l=-o*Qr.dot(ti);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},G=class extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ri=new H,ii=new ni,ai=new Fr,oi=new z,si=new z,ci=new z,li=new z,ui=new z,di=new z,fi=new z,pi=new z,mi=class extends Bn{constructor(e=new Ur,t=new G){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){di.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ui.fromBufferAttribute(s,e),a?di.addScaledVector(ui,r):di.addScaledVector(ui.sub(t),r))}t.add(di)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ai.copy(n.boundingSphere),ai.applyMatrix4(i),ii.copy(e.ray).recast(e.near),!(ai.containsPoint(ii.origin)===!1&&(ii.intersectSphere(ai,oi)===null||ii.origin.distanceToSquared(oi)>(e.far-e.near)**2))&&(ri.copy(i).invert(),ii.copy(e.ray).applyMatrix4(ri),(n.boundingBox===null||ii.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=gi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=gi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=gi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=gi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function hi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;pi.copy(s),pi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(pi);return l<n.near||l>n.far?null:{distance:l,point:pi.clone(),object:e}}function gi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,si),e.getVertexPosition(c,ci),e.getVertexPosition(l,li);let u=hi(e,t,n,r,si,ci,li,fi);if(u){let e=new z;lr.getBarycoord(fi,si,ci,li,e),i&&(u.uv=lr.getInterpolatedAttribute(i,s,c,l,e,new R)),a&&(u.uv1=lr.getInterpolatedAttribute(a,s,c,l,e,new R)),o&&(u.normal=lr.getInterpolatedAttribute(o,s,c,l,e,new z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new z,materialIndex:0};lr.getNormal(si,ci,li,t.normal),u.face=t,u.barycoord=e}return u}var _i=new ln,vi=new ln,yi=new ln,bi=new ln,xi=new H,Si=new z,Ci=new Fr,wi=new H,Ti=new ni,Ei=class extends mi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=l,this.bindMatrix=new H,this.bindMatrixInverse=new H,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ur),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Si),this.boundingBox.expandByPoint(Si)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Si),this.boundingSphere.expandByPoint(Si)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ci.copy(this.boundingSphere),Ci.applyMatrix4(r),e.ray.intersectsSphere(Ci)!==!1&&(wi.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(wi),(this.boundingBox===null||Ti.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Ti)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ln,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():F(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;vi.fromBufferAttribute(r.attributes.skinIndex,e),yi.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(_i.copy(t),t.set(0,0,0,0)):(_i.set(...t,1),t.set(0,0,0)),_i.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=yi.getComponent(e);if(r!==0){let i=vi.getComponent(e);xi.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(bi.copy(_i).applyMatrix4(xi),r)}}return t.isVector4&&(t.w=_i.w),t.applyMatrix4(this.bindMatrixInverse)}},Di=class extends Bn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Oi=class extends cn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=p,l=p,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ki=new H,Ai=new H,ji=class e{constructor(e=[],t=[]){this.uuid=Ct(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){F(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new H)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new H;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Ai;ki.multiplyMatrices(i,t[r]),ki.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Oi(t,e,e,ie,T);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(F(`Skeleton: No bone found with UUID:`,r),i=new Di),this.bones.push(i),this.boneInverses.push(new H().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Mi=class extends Or{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ni=new H,Pi=new H,Fi=[],Ii=new ur,Li=new H,Ri=new mi,zi=new Fr,Bi=class extends mi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Li)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ur),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),Ii.copy(e.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Ii)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),zi.copy(e.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(zi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ri.geometry=this.geometry,Ri.material=this.material,Ri.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zi.copy(this.boundingSphere),zi.applyMatrix4(n),e.ray.intersectsSphere(zi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ni),Pi.multiplyMatrices(n,Ni),Ri.matrixWorld=Pi,Ri.raycast(e,Fi);for(let e=0,n=Fi.length;e<n;e++){let n=Fi[e];n.instanceId=i,n.object=this,t.push(n)}Fi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oi(new Float32Array(r*this.count),r,this.count,se,T));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vi=new z,Hi=new z,Ui=new B,Wi=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Vi.subVectors(n,t).cross(Hi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Vi),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ui.getNormalMatrix(e),r=this.coplanarPoint(Vi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gi=new Fr,Ki=new R(.5,.5),qi=new z,Ji=class{constructor(e=new Wi,t=new Wi,n=new Wi,r=new Wi,i=new Wi,a=new Wi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=st,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476+Ki.distanceTo(e.center),Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(qi.x=r.normal.x>0?e.max.x:e.min.x,qi.y=r.normal.y>0?e.max.y:e.min.y,qi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yi=class extends Jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xi=new z,Zi=new z,Qi=new H,$i=new ni,ea=new Fr,ta=new z,na=new z,ra=class extends Bn{constructor(e=new Ur,t=new Yi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Xi.fromBufferAttribute(t,e-1),Zi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Xi.distanceTo(Zi);e.setAttribute(`lineDistance`,new jr(n,1))}else F(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),ea.radius+=i,e.ray.intersectsSphere(ea)===!1)return;Qi.copy(r).invert(),$i.copy(e.ray).applyMatrix4(Qi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=ia(this,e,$i,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=ia(this,e,$i,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=ia(this,e,$i,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=ia(this,e,$i,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ia(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Xi.fromBufferAttribute(s,i),Zi.fromBufferAttribute(s,a),n.distanceSqToSegment(Xi,Zi,ta,na)>r)return;ta.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ta);if(!(c<t.near||c>t.far))return{distance:c,point:na.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var aa=new z,oa=new z,sa=class extends ra{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)aa.fromBufferAttribute(t,e),oa.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+aa.distanceTo(oa);e.setAttribute(`lineDistance`,new jr(n,1))}else F(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ca=class extends ra{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},la=class extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ua=new H,da=new ni,fa=new Fr,pa=new z,ma=class extends Bn{constructor(e=new Ur,t=new la){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),fa.radius+=i,e.ray.intersectsSphere(fa)===!1)return;ua.copy(r).invert(),da.copy(e.ray).applyMatrix4(ua);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);pa.fromBufferAttribute(l,n),ha(pa,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)pa.fromBufferAttribute(l,a),ha(pa,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ha(e,t,n,r,i,a,o){let s=da.distanceSqToPoint(e);if(s<n){let n=new z;da.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ga=class extends cn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_a=class extends cn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},va=class extends cn{constructor(e,t,n=w,r,i,a,o=p,s=p,c,l=ae,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ya=class extends va{constructor(e,t=w,n=301,r,i,a=p,o=p,s,c=ae){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ba=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},K=class e extends Ur{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new jr(c,3)),this.setAttribute(`normal`,new jr(l,3)),this.setAttribute(`uv`,new jr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},xa=class e extends Ur{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new z,g=new z;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new jr(o,3)),this.setAttribute(`normal`,new jr(s,3)),this.setAttribute(`uv`,new jr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Sa=class e extends Ur{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new z,l=new R;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new jr(a,3)),this.setAttribute(`normal`,new jr(o,3)),this.setAttribute(`uv`,new jr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ca=class e extends Ur{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new jr(u,3)),this.setAttribute(`normal`,new jr(d,3)),this.setAttribute(`uv`,new jr(f,2));function _(){let a=new z,_=new z,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new R,m=new z,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wa=class e extends Ca{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ta=class e extends Ur{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new jr(i,3)),this.setAttribute(`normal`,new jr(i.slice(),3)),this.setAttribute(`uv`,new jr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new z,r=new z,i=new z;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new z;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new z;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new z,t=new z,n=new z,r=new z,o=new R,s=new R,c=new R;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ea=class e extends Ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Da=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){F(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new R:new z);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,r=[],i=[],a=[],o=new z,s=new H;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new z)}i[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(L(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(L(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Oa=class extends Da{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new R){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ka=class extends Oa{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Aa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ja=new z,Ma=new z,Na=new Aa,Pa=new Aa,Fa=new Aa,Ia=class extends Da{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ma.subVectors(r[0],r[1]).add(r[0]),c=Ma);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ja.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ja),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Na.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Pa.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Fa.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Na.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Pa.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Fa.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Na.calc(s),Pa.calc(s),Fa.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function La(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ra(e,t){let n=1-e;return n*n*t}function za(e,t){return 2*(1-e)*e*t}function Ba(e,t){return e*e*t}function Va(e,t,n,r){return Ra(e,t)+za(e,n)+Ba(e,r)}function Ha(e,t){let n=1-e;return n*n*n*t}function Ua(e,t){let n=1-e;return 3*n*n*e*t}function Wa(e,t){return 3*(1-e)*e*e*t}function Ga(e,t){return e*e*e*t}function Ka(e,t,n,r,i){return Ha(e,t)+Ua(e,n)+Wa(e,r)+Ga(e,i)}var qa=class extends Da{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ka(e,r.x,i.x,a.x,o.x),Ka(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ja=class extends Da{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ka(e,r.x,i.x,a.x,o.x),Ka(e,r.y,i.y,a.y,o.y),Ka(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ya=class extends Da{constructor(e=new R,t=new R){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Da{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends Da{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Va(e,r.x,i.x,a.x),Va(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends Da{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Va(e,r.x,i.x,a.x),Va(e,r.y,i.y,a.y),Va(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=Object.freeze({__proto__:null,ArcCurve:ka,CatmullRomCurve3:Ia,CubicBezierCurve:qa,CubicBezierCurve3:Ja,EllipseCurve:Oa,LineCurve:Ya,LineCurve3:Xa,QuadraticBezierCurve:Za,QuadraticBezierCurve3:Qa,SplineCurve:class extends Da{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new R){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(La(o,s.x,c.x,l.x,u.x),La(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this}}}),eo=class e extends Ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},to=class e extends Ta{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},no=class e extends Ur{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new jr(p,3)),this.setAttribute(`normal`,new jr(m,3)),this.setAttribute(`uv`,new jr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ro=class e extends Ur{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new z,d=new z,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new jr(p,3)),this.setAttribute(`normal`,new jr(m,3)),this.setAttribute(`uv`,new jr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},io=class e extends Ur{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new z,f=new z,p=new z;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new jr(c,3)),this.setAttribute(`normal`,new jr(l,3)),this.setAttribute(`uv`,new jr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},ao=class e extends Ur{constructor(e=new Qa(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new z,s=new z,c=new R,l=new z,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new jr(u,3)),this.setAttribute(`normal`,new jr(d,3)),this.setAttribute(`uv`,new jr(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new $a[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function oo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(co(i))i.isRenderTargetTexture?(F(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(co(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function so(e){let t={};for(let n=0;n<e.length;n++){let r=oo(e[n]);for(let e in r)t[e]=r[e]}return t}function co(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function lo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function uo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:V.workingColorSpace}var fo={clone:oo,merge:so},po=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ho=class extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=po,this.fragmentShader=mo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=lo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new ln().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new H().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},go=class extends ho{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},q=class extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_o=class extends q{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new R(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return L(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new W(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new W(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new W(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},vo=class extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=et,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yo=class extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function bo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function xo(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function So(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Co(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var wo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},To=class extends wo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ye,endingEnd:Ye}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xe:i=e,o=2*t-n;break;case Ze:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Xe:a=e,s=2*n-t;break;case Ze:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Eo=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Do=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Oo=class extends wo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},ko=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=bo(t,this.TimeBufferType),this.values=bo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bo(e.times,Array),values:bo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ge:t=this.InterpolantFactoryMethodDiscrete;break;case Ke:t=this.InterpolantFactoryMethodLinear;break;case qe:t=this.InterpolantFactoryMethodSmooth;break;case Je:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return F(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ge;case this.InterpolantFactoryMethodLinear:return Ke;case this.InterpolantFactoryMethodSmooth:return qe;case this.InterpolantFactoryMethodBezier:return Je}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(I(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(I(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){I(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){I(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&lt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){I(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===qe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ko.prototype.ValueTypeName=``,ko.prototype.TimeBufferType=Float32Array,ko.prototype.ValueBufferType=Float32Array,ko.prototype.DefaultInterpolation=Ke;var Ao=class extends ko{constructor(e,t,n){super(e,t,n)}};Ao.prototype.ValueTypeName=`bool`,Ao.prototype.ValueBufferType=Array,Ao.prototype.DefaultInterpolation=Ge,Ao.prototype.InterpolantFactoryMethodLinear=void 0,Ao.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends ko{constructor(e,t,n,r){super(e,t,n,r)}};jo.prototype.ValueTypeName=`color`;var Mo=class extends ko{constructor(e,t,n,r){super(e,t,n,r)}};Mo.prototype.ValueTypeName=`number`;var No=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Gt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Po=class extends ko{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}};Po.prototype.ValueTypeName=`quaternion`,Po.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends ko{constructor(e,t,n){super(e,t,n)}};Fo.prototype.ValueTypeName=`string`,Fo.prototype.ValueBufferType=Array,Fo.prototype.DefaultInterpolation=Ge,Fo.prototype.InterpolantFactoryMethodLinear=void 0,Fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends ko{constructor(e,t,n,r){super(e,t,n,r)}};Io.prototype.ValueTypeName=`vector`;var Lo=class{constructor(e=``,t=-1,n=[],r=Qe){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Ct(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(zo(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(ko.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=xo(o);o=So(o,1,c),s=So(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new Mo(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Ro(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return Mo;case`vector`:case`vector2`:case`vector3`:case`vector4`:return Io;case`color`:return jo;case`quaternion`:return Po;case`bool`:case`boolean`:return Ao;case`string`:return Fo}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function zo(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=Ro(e.type);if(e.times===void 0){let t=[],n=[];Co(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var Bo={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Vo(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Vo(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Vo(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Ho=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Uo=class{constructor(e){this.manager=e===void 0?Ho:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Uo.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Wo={},Go=class extends Error{constructor(e,t){super(e),this.response=t}},Ko=class extends Uo{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=Bo.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(Wo[e]!==void 0){Wo[e].push({onLoad:t,onProgress:n,onError:r});return}Wo[e]=[],Wo[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&F(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=Wo[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new Go(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{Bo.add(`file:${e}`,t);let n=Wo[e];delete Wo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=Wo[e];if(n===void 0)throw this.manager.itemError(e),t;delete Wo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},qo=new WeakMap,Jo=class extends Uo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Bo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=qo.get(a);e===void 0&&(e=[],qo.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=ut(`img`);function s(){l(),t&&t(this);let n=qo.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}qo.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Bo.remove(`image:${e}`);let n=qo.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}qo.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Bo.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Yo=class extends Uo{constructor(e){super(e)}load(e,t,n,r){let i=new cn,a=new Jo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Xo=class extends Bn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Zo=class extends Xo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Qo=new H,$o=new z,es=new z,ts=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new R(512,512),this.mapType=y,this.map=null,this.mapPass=null,this.matrix=new H,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ji,this._frameExtents=new R(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;$o.setFromMatrixPosition(e.matrixWorld),t.position.copy($o),es.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(es),t.updateMatrixWorld(),Qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ns=new z,rs=new Gt,is=new z,as=class extends Bn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new H,this.projectionMatrix=new H,this.projectionMatrixInverse=new H,this.coordinateSystem=st,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ns,rs,is),is.x===1&&is.y===1&&is.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ns,rs,is.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ns,rs,is),is.x===1&&is.y===1&&is.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ns,rs,is.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},os=new z,ss=new R,cs=new R,ls=class extends as{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=St*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return St*2*Math.atan(Math.tan(xt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,ss,cs),t.subVectors(cs,ss)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},us=class extends ts{constructor(){super(new ls(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=St*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ds=class extends Xo{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new us}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},fs=class extends ts{constructor(){super(new ls(90,1,.5,500)),this.isPointLightShadow=!0}},ps=class extends Xo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new fs}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ms=class extends as{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hs=class extends ts{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gs=class extends Xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new hs}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},_s=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},vs=new WeakMap,ys=class extends Uo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&F(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&F(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Bo.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{vs.has(a)===!0?(r&&r(vs.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(i.options,{colorSpaceConversion:`none`}))}).then(function(n){Bo.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e)}).catch(function(t){r&&r(t),vs.set(s,t),Bo.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});Bo.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},bs=-90,xs=1,Ss=class extends Bn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ls(bs,xs,e,t);r.layers=this.layers,this.add(r);let i=new ls(bs,xs,e,t);i.layers=this.layers,this.add(i);let a=new ls(bs,xs,e,t);a.layers=this.layers,this.add(a);let o=new ls(bs,xs,e,t);o.layers=this.layers,this.add(o);let s=new ls(bs,xs,e,t);s.layers=this.layers,this.add(s);let c=new ls(bs,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Cs=class extends ls{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ws=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,i,a;switch(t){case`quaternion`:r=this._slerp,i=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case`string`:case`bool`:r=this._select,i=this._select,a=this._setAdditiveIdentityOther,this.buffer=Array(n*5);break;default:r=this._lerp,i=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=i,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,i=e*r+r,a=this.cumulativeWeight;if(a===0){for(let e=0;e!==r;++e)n[i+e]=n[e];a=t}else{a+=t;let e=t/a;this._mixBufferRegion(n,i,0,e,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,i=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){let e=t*this._origIndex;this._mixBufferRegion(n,r,e,1-i,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let e=t,i=t+t;e!==i;++e)if(n[e]!==n[e+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let e=n,i=r;e!==i;++e)t[e]=t[r+e%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,i){if(r>=.5)for(let r=0;r!==i;++r)e[t+r]=e[n+r]}_slerp(e,t,n,r){Gt.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,i){let a=this._workIndex*i;Gt.multiplyQuaternionsFlat(e,a,e,t,e,n),Gt.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,i){let a=1-r;for(let o=0;o!==i;++o){let i=t+o;e[i]=e[i]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,i){for(let a=0;a!==i;++a){let i=t+a;e[i]=e[i]+e[n+a]*r}}},Ts=`\\[\\]\\.:\\/`,Es=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ds=`[^\\[\\]\\.:\\/]`,Os=`[^`+Ts.replace(`\\.`,``)+`]`,ks=`((?:WC+[\\/:])*)`.replace(`WC`,Ds),As=`(WCOD+)?`.replace(`WCOD`,Os),js=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ds),Ms=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ds),Ns=RegExp(`^`+ks+As+js+Ms+`$`),Ps=[`material`,`materials`,`bones`,`map`],Fs=class{constructor(e,t,n){let r=n||Is.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Is=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Es,``)}static parseTrackName(e){let t=Ns.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ps.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){F(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){I(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){I(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){I(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){I(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){I(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){I(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){I(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;I(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){I(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){I(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Is.Composite=Fs,Is.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Is.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Is.prototype.GetterByBindingType=[Is.prototype._getValue_direct,Is.prototype._getValue_array,Is.prototype._getValue_arrayElement,Is.prototype._getValue_toArray],Is.prototype.SetterByBindingTypeAndVersioning=[[Is.prototype._setValue_direct,Is.prototype._setValue_direct_setNeedsUpdate,Is.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Is.prototype._setValue_array,Is.prototype._setValue_array_setNeedsUpdate,Is.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Is.prototype._setValue_arrayElement,Is.prototype._setValue_arrayElement_setNeedsUpdate,Is.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Is.prototype._setValue_fromArray,Is.prototype._setValue_fromArray_setNeedsUpdate,Is.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ls=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let i=t.tracks,a=i.length,o=Array(a),s={endingStart:Ye,endingEnd:Ye};for(let e=0;e!==a;++e){let t=i[e].createInterpolant(null);o[e]=t,t.settings=s}this._interpolantSettings=s,this._interpolants=o,this._propertyBindings=Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Ue,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let n=this._clip.duration,r=e._clip.duration,i=r/n,a=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,i,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,i=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let s=o.parameterPositions,c=o.sampleValues;return s[0]=i,s[1]=i+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let i=this._startTime;if(i!==null){let r=(e-i)*n;r<0||n===0?t=0:(this._startTime=null,t=n*r)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let e=this._interpolants,t=this._propertyBindings;switch(this.blendMode){case $e:for(let n=0,r=e.length;n!==r;++n)e[n].evaluate(a),t[n].accumulateAdditive(o);break;case Qe:default:for(let n=0,i=e.length;n!==i;++n)e[n].evaluate(a),t[n].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,i=this._loopCount,a=n===We;if(e===0)return i===-1?r:a&&(i&1)==1?t-r:r;if(n===2200){i===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));handle_stop:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break handle_stop}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e<0?-1:1})}}else{if(i===-1&&(e>=0?(i=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let n=Math.floor(r/t);r-=t*n,i+=Math.abs(n);let o=this.repetitions-i;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e>0?1:-1});else{if(o===1){let t=e<0;this._setEndings(t,!t,a)}else this._setEndings(!1,!1,a);this._loopCount=i,this.time=r,this._mixer.dispatchEvent({type:`loop`,action:this,loopDelta:n})}}else this._loopCount=i,this.time=r;if(a&&(i&1)==1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Xe,r.endingEnd=Xe):(r.endingStart=e?this.zeroSlopeAtStart?Xe:Ye:Ze,r.endingEnd=t?this.zeroSlopeAtEnd?Xe:Ye:Ze)}_scheduleFading(e,t,n){let r=this._mixer,i=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,s=a.sampleValues;return o[0]=i,s[0]=t,o[1]=i+e,s[1]=n,this}},Rs=new Float32Array(1),zs=class extends vt{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,i=r.length,a=e._propertyBindings,o=e._interpolants,s=n.uuid,c=this._bindingsByRootAndName,l=c[s];l===void 0&&(l={},c[s]=l);for(let e=0;e!==i;++e){let i=r[e],c=i.name,u=l[c];if(u!==void 0)++u.referenceCount,a[e]=u;else{if(u=a[e],u!==void 0){u._cacheIndex===null&&(++u.referenceCount,this._addInactiveBinding(u,s,c));continue}let r=t&&t._propertyBindings[e].binding.parsedPath;u=new ws(Is.create(n,c,r),i.ValueTypeName,i.getValueSize()),++u.referenceCount,this._addInactiveBinding(u,s,c),a[e]=u}o[e].resultBuffer=u.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let t=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,t)}let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,i=this._actionsByClip,a=i[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=a;else{let t=a.knownActions;e._byClipCacheIndex=t.length,t.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let i=e._clip.uuid,a=this._actionsByClip,o=a[i],s=o.knownActions,c=s[s.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,s[l]=c,s.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],s.length===0&&delete a[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,i=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,i=n.path,a=this._bindingsByRootAndName,o=a[r],s=t[t.length-1],c=e._cacheIndex;s._cacheIndex=c,t[c]=s,t.pop(),delete o[i],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Eo(new Float32Array(2),new Float32Array(2),1,Rs),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,i=t[r];e.__cacheIndex=r,t[r]=e,i.__cacheIndex=n,t[n]=i}clipAction(e,t,n){let r=t||this._root,i=r.uuid,a=typeof e==`string`?Lo.findByName(r,e):e,o=a===null?e:a.uuid,s=this._actionsByClip[o],c=null;if(n===void 0&&(n=a===null?Qe:a.blendMode),s!==void 0){let e=s.actionByRoot[i];if(e!==void 0&&e.blendMode===n)return e;c=s.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let l=new Ls(this,a,t,n);return this._bindAction(l,c),this._addInactiveAction(l,o,i),l}existingAction(e,t){let n=t||this._root,r=n.uuid,i=typeof e==`string`?Lo.findByName(n,e):e,a=i?i.uuid:e,o=this._actionsByClip[a];return o===void 0?null:o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,i=Math.sign(e),a=this._accuIndex^=1;for(let o=0;o!==n;++o)t[o]._update(r,e,i,a);let o=this._bindings,s=this._nActiveBindings;for(let e=0;e!==s;++e)o[e].apply(a);return this}setTime(e){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,i=r[n];if(i!==void 0){let e=i.knownActions;for(let n=0,r=e.length;n!==r;++n){let r=e[n];this._deactivateAction(r);let i=r._cacheIndex,a=t[t.length-1];r._cacheIndex=null,r._byClipCacheIndex=null,a._cacheIndex=i,t[i]=a,t.pop(),this._removeInactiveBindingsForAction(r)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let e in n){let r=n[e].actionByRoot[t];r!==void 0&&(this._deactivateAction(r),this._removeInactiveAction(r))}let r=this._bindingsByRootAndName[t];if(r!==void 0)for(let e in r){let t=r[e];t.restoreOriginalState(),this._removeInactiveBinding(t)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Bs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,F(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;var Vs=new z,Hs=new H,Us=new H,Ws=class extends sa{constructor(e){let t=Gs(e),n=new Ur,r=[],i=[];for(let e=0;e<t.length;e++){let n=t[e];n.parent&&n.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),i.push(0,0,0),i.push(0,0,0))}n.setAttribute(`position`,new jr(r,3)),n.setAttribute(`color`,new jr(i,3));let a=new Yi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type=`SkeletonHelper`,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;let o=new W(255),s=new W(65280);this.setColors(o,s)}updateMatrixWorld(e){let t=this.bones,n=this.geometry,r=n.getAttribute(`position`);Us.copy(this.root.matrixWorld).invert();for(let e=0,n=0;e<t.length;e++){let i=t[e];i.parent&&i.parent.isBone&&(Hs.multiplyMatrices(Us,i.matrixWorld),Vs.setFromMatrixPosition(Hs),r.setXYZ(n,Vs.x,Vs.y,Vs.z),Hs.multiplyMatrices(Us,i.parent.matrixWorld),Vs.setFromMatrixPosition(Hs),r.setXYZ(n+1,Vs.x,Vs.y,Vs.z),n+=2)}n.getAttribute(`position`).needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){let n=this.geometry.getAttribute(`color`);for(let r=0;r<n.count;r+=2)n.setXYZ(r,e.r,e.g,e.b),n.setXYZ(r+1,t.r,t.g,t.b);return n.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};function Gs(e){let t=[];e.isBone===!0&&t.push(e);for(let n=0;n<e.children.length;n++)t.push(...Gs(e.children[n]));return t}function Ks(e,t,n,r){let i=qs(r);switch(n){case re:return e*t;case se:return e*t/i.components*i.byteLength;case ce:return e*t/i.components*i.byteLength;case le:return e*t*2/i.components*i.byteLength;case ue:return e*t*2/i.components*i.byteLength;case k:return e*t*3/i.components*i.byteLength;case ie:return e*t*4/i.components*i.byteLength;case de:return e*t*4/i.components*i.byteLength;case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case A:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:case ve:return Math.max(e,16)*Math.max(t,8)/4;case he:case _e:return Math.max(e,8)*Math.max(t,8)/2;case ye:case be:case Se:case Ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case xe:case we:case Te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case De:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Oe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ke:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ae:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case je:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Me:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ne:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Pe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Fe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ie:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Le:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case j:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Re:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ze:case Be:case M:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ve:case N:return Math.ceil(e/4)*Math.ceil(t/4)*8;case P:case He:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function qs(e){switch(e){case y:case b:return{byteLength:1,components:1};case S:case x:case E:return{byteLength:2,components:1};case D:case ee:return{byteLength:2,components:4};case w:case C:case T:return{byteLength:4,components:1};case O:case ne:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?F(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function Js(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ys(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
		return 0.5 / max( gv + gl, EPSILON );
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
}`,lights_fragment_begin:`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
void main() {
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Y={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new B}},envmap:{envMap:{value:null},envMapRotation:{value:new B},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new B}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new B}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new B},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new B},normalScale:{value:new R(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new B},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new B}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new B}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new B}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0},uvTransform:{value:new B}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new R(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}}},Xs={basic:{uniforms:so([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:so([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:so([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:so([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:so([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new W(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:so([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:so([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:so([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:so([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:so([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:so([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new B},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new B}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distance:{uniforms:so([Y.common,Y.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distance_vert,fragmentShader:J.distance_frag},shadow:{uniforms:so([Y.lights,Y.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};Xs.physical={uniforms:so([Xs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new B},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new B},clearcoatNormalScale:{value:new R(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new B},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new B},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new B},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new B},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new B},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new B},transmissionSamplerSize:{value:new R},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new B},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new B},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new B},anisotropyVector:{value:new R},anisotropyMap:{value:null},anisotropyMapTransform:{value:new B}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var Zs={r:0,b:0,g:0},Qs=new H,$s=new B;$s.set(-1,0,0,0,1,0,0,0,1);function ec(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new mi(new K(1,1,1),new ho({name:`BackgroundCubeMaterial`,uniforms:oo(Xs.backgroundCube.uniforms),vertexShader:Xs.backgroundCube.vertexShader,fragmentShader:Xs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Qs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply($s),l.material.toneMapped=V.getTransfer(i.colorSpace)!==it,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new mi(new no(2,2),new ho({name:`BackgroundMaterial`,uniforms:oo(Xs.background.uniforms),vertexShader:Xs.background.vertexShader,fragmentShader:Xs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=V.getTransfer(i.colorSpace)!==it,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Zs,uo(e)),n.buffers.color.setClear(Zs.r,Zs.g,Zs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function tc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function nc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function rc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(F(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&F(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ic(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Wi,s=new B,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ac=4,oc=[.125,.215,.35,.446,.526,.582],sc=20,cc=256,lc=new ms,uc=new W,dc=null,fc=0,pc=0,mc=!1,hc=new z,gc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=hc}=i;dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dc,fc,pc),this._renderer.xr.enabled=mc,e.scissorTest=!1,yc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:g,minFilter:g,generateMipmaps:!1,type:E,format:ie,colorSpace:nt,depthBuffer:!1},r=vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_c(r)),this._blurMaterial=xc(r,e,t),this._ggxMaterial=bc(r,e,t)}return r}_compileMaterial(e){let t=new mi(new Ur,e);this._renderer.compile(t,lc)}_sceneToCubeUV(e,t,n,r,i){let a=new ls(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(uc),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mi(new K,new G({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(uc),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;yc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;yc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,lc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ac?n-d+ac:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,yc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,lc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,yc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,lc)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&I(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):sc;m>sc&&F(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sc}`);let h=[],g=0;for(let e=0;e<sc;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];yc(t,3*v*(r>_-ac?r-_+ac:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,lc)}};function _c(e){let t=[],n=[],r=[],i=e,a=e-ac+1+oc.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-ac?s=oc[o-e+ac-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Ur;h.setAttribute(`position`,new Or(f,3)),h.setAttribute(`uv`,new Or(p,2)),h.setAttribute(`faceIndex`,new Or(m,1)),r.push(new mi(h,null)),i>ac&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function vc(e,t,n){let r=new dn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function yc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function bc(e,t,n){return new ho({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:cc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function xc(e,t,n){let r=new Float32Array(sc),i=new z(0,1,0);return new ho({name:`SphericalGaussianBlur`,defines:{n:sc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sc(){return new ho({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cc(){return new ho({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wc(){return`

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
	`}var Tc=class extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ga(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new K(5,5,5),i=new ho({name:`CubemapFromEquirect`,uniforms:oo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new mi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=g),new Ss(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Ec(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Tc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new gc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new gc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Dc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ht(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Oc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Ar:kr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function kc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ac(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:I(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function jc(e,t,n){let r=new WeakMap,i=new ln;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new fn(h,p,m,u);g.type=T,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new R(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Mc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Nc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Pc(e,t,n,r,i,a){let o=new dn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new va(t,n):void 0}),s=new dn(t,n,{type:E,depthBuffer:!1,stencilBuffer:!1}),c=new Ur;c.setAttribute(`position`,new jr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new jr([0,2,0,0,2,0],2));let l=new go({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new mi(c,l),d=new ms(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],v=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},V.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=Nc[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var Fc=new cn,Ic=new va(1,1),Lc=new fn,Rc=new pn,zc=new ga,Bc=[],Vc=[],Hc=new Float32Array(16),Uc=new Float32Array(9),Wc=new Float32Array(4);function Gc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Bc[i];if(a===void 0&&(a=new Float32Array(i),Bc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Kc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function qc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Jc(e,t){let n=Vc[t];n===void 0&&(n=new Int32Array(t),Vc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Yc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Kc(n,t))return;e.uniform2fv(this.addr,t),qc(n,t)}}function Zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Kc(n,t))return;e.uniform3fv(this.addr,t),qc(n,t)}}function Qc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Kc(n,t))return;e.uniform4fv(this.addr,t),qc(n,t)}}function $c(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Kc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),qc(n,t)}else{if(Kc(n,r))return;Wc.set(r),e.uniformMatrix2fv(this.addr,!1,Wc),qc(n,r)}}function el(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Kc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),qc(n,t)}else{if(Kc(n,r))return;Uc.set(r),e.uniformMatrix3fv(this.addr,!1,Uc),qc(n,r)}}function tl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Kc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),qc(n,t)}else{if(Kc(n,r))return;Hc.set(r),e.uniformMatrix4fv(this.addr,!1,Hc),qc(n,r)}}function nl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Kc(n,t))return;e.uniform2iv(this.addr,t),qc(n,t)}}function il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Kc(n,t))return;e.uniform3iv(this.addr,t),qc(n,t)}}function al(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Kc(n,t))return;e.uniform4iv(this.addr,t),qc(n,t)}}function ol(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Kc(n,t))return;e.uniform2uiv(this.addr,t),qc(n,t)}}function cl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Kc(n,t))return;e.uniform3uiv(this.addr,t),qc(n,t)}}function ll(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Kc(n,t))return;e.uniform4uiv(this.addr,t),qc(n,t)}}function ul(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ic.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ic):a=Fc,n.setTexture2D(t||a,i)}function dl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Rc,i)}function fl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||zc,i)}function pl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Lc,i)}function ml(e){switch(e){case 5126:return Yc;case 35664:return Xc;case 35665:return Zc;case 35666:return Qc;case 35674:return $c;case 35675:return el;case 35676:return tl;case 5124:case 35670:return nl;case 35667:case 35671:return rl;case 35668:case 35672:return il;case 35669:case 35673:return al;case 5125:return ol;case 36294:return sl;case 36295:return cl;case 36296:return ll;case 35678:case 36198:case 36298:case 36306:case 35682:return ul;case 35679:case 36299:case 36307:return dl;case 35680:case 36300:case 36308:case 36293:return fl;case 36289:case 36303:case 36311:case 36292:return pl}}function hl(e,t){e.uniform1fv(this.addr,t)}function gl(e,t){let n=Gc(t,this.size,2);e.uniform2fv(this.addr,n)}function _l(e,t){let n=Gc(t,this.size,3);e.uniform3fv(this.addr,n)}function vl(e,t){let n=Gc(t,this.size,4);e.uniform4fv(this.addr,n)}function yl(e,t){let n=Gc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function bl(e,t){let n=Gc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function xl(e,t){let n=Gc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Sl(e,t){e.uniform1iv(this.addr,t)}function Cl(e,t){e.uniform2iv(this.addr,t)}function wl(e,t){e.uniform3iv(this.addr,t)}function Tl(e,t){e.uniform4iv(this.addr,t)}function El(e,t){e.uniform1uiv(this.addr,t)}function Dl(e,t){e.uniform2uiv(this.addr,t)}function Ol(e,t){e.uniform3uiv(this.addr,t)}function kl(e,t){e.uniform4uiv(this.addr,t)}function Al(e,t,n){let r=this.cache,i=t.length,a=Jc(n,i);Kc(r,a)||(e.uniform1iv(this.addr,a),qc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ic:Fc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function jl(e,t,n){let r=this.cache,i=t.length,a=Jc(n,i);Kc(r,a)||(e.uniform1iv(this.addr,a),qc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Rc,a[e])}function Ml(e,t,n){let r=this.cache,i=t.length,a=Jc(n,i);Kc(r,a)||(e.uniform1iv(this.addr,a),qc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||zc,a[e])}function Nl(e,t,n){let r=this.cache,i=t.length,a=Jc(n,i);Kc(r,a)||(e.uniform1iv(this.addr,a),qc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Lc,a[e])}function Pl(e){switch(e){case 5126:return hl;case 35664:return gl;case 35665:return _l;case 35666:return vl;case 35674:return yl;case 35675:return bl;case 35676:return xl;case 5124:case 35670:return Sl;case 35667:case 35671:return Cl;case 35668:case 35672:return wl;case 35669:case 35673:return Tl;case 5125:return El;case 36294:return Dl;case 36295:return Ol;case 36296:return kl;case 35678:case 36198:case 36298:case 36306:case 35682:return Al;case 35679:case 36299:case 36307:return jl;case 35680:case 36300:case 36308:case 36293:return Ml;case 36289:case 36303:case 36311:case 36292:return Nl}}var Fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ml(t.type)}},Il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pl(t.type)}},Ll=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Rl=/(\w+)(\])?(\[|\.)?/g;function zl(e,t){e.seq.push(t),e.map[t.id]=t}function Bl(e,t,n){let r=e.name,i=r.length;for(Rl.lastIndex=0;;){let a=Rl.exec(r),o=Rl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){zl(n,l===void 0?new Fl(s,e,t):new Il(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ll(s),zl(n,e)),n=e}}}var Vl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Bl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Hl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ul=37297,Wl=0;function Gl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Kl=new B;function ql(e){V._getMatrix(Kl,V.workingColorSpace,e);let t=`mat3( ${Kl.elements.map(e=>e.toFixed(4))} )`;switch(V.getTransfer(e)){case rt:return[t,`LinearTransferOETF`];case it:return[t,`sRGBTransferOETF`];default:return F(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Jl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Gl(e.getShaderSource(t),r)}return i}function Yl(e,t){let n=ql(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Xl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Zl(e,t){let n=Xl[t];return n===void 0?(F(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ql=new z;function $l(){return V.getLuminanceCoefficients(Ql),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ql.x.toFixed(4)}, ${Ql.y.toFixed(4)}, ${Ql.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function eu(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ru).join(`
`)}function tu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function nu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ru(e){return e!==``}function iu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function au(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ou=/^[ \t]*#include +<([\w\d./]+)>/gm;function su(e){return e.replace(ou,lu)}var cu=new Map;function lu(e,t){let n=J[t];if(n===void 0){let e=cu.get(t);if(e!==void 0)n=J[e],F(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return su(n)}var uu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(e){return e.replace(uu,fu)}function fu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function pu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var mu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function hu(e){return mu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var gu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function _u(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:gu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var vu={302:`ENVMAP_MODE_REFRACTION`};function yu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:vu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var bu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function xu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:bu[e.combine]||`ENVMAP_BLENDING_NONE`}function Su(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Cu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=hu(n),l=_u(n),u=yu(n),d=xu(n),f=Su(n),p=eu(n),m=tu(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ru).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ru).join(`
`),_.length>0&&(_+=`
`)):(g=[pu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ru).join(`
`),_=[pu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:Zl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,Yl(`linearToOutputTexel`,n.outputColorSpace),$l(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ru).join(`
`)),o=su(o),o=iu(o,n),o=au(o,n),s=su(s),s=iu(s,n),s=au(s,n),o=du(o),s=du(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Hl(i,i.VERTEX_SHADER,y),S=Hl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Jl(i,x,`vertex`),n=Jl(i,S,`fragment`);I(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):F(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Vl(i,h),T=nu(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Ul)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Wl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var wu=0,Tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Eu(e),t.set(e,n)),n}},Eu=class{constructor(e){this.id=wu++,this.code=e,this.usedTimes=0}};function Du(e){return e===1030||e===37490||e===36285}function Ou(e,t,n,r,i,a){let o=new wn,s=new Tu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&F(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,te,O;if(C){let e=Xs[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),te=e.id,O=t.id}let ne=e.getRenderTarget(),re=e.state.buffers.depth.getReversed(),k=h.isInstancedMesh===!0,ie=h.isBatchedMesh===!0,ae=!!i.map,oe=!!i.matcap,se=!!x,ce=!!i.aoMap,le=!!i.lightMap,ue=!!i.bumpMap&&i.wireframe===!1,de=!!i.normalMap,fe=!!i.displacementMap,pe=!!i.emissiveMap,A=!!i.metalnessMap,me=!!i.roughnessMap,he=i.anisotropy>0,ge=i.clearcoat>0,_e=i.dispersion>0,ve=i.iridescence>0,ye=i.sheen>0,be=i.transmission>0,xe=he&&!!i.anisotropyMap,Se=ge&&!!i.clearcoatMap,Ce=ge&&!!i.clearcoatNormalMap,we=ge&&!!i.clearcoatRoughnessMap,Te=ve&&!!i.iridescenceMap,Ee=ve&&!!i.iridescenceThicknessMap,De=ye&&!!i.sheenColorMap,Oe=ye&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=be&&!!i.transmissionMap,Ne=be&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,Ie=i.alphaTest>0,Le=!!i.alphaHash,j=!!i.extensions,Re=0;i.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Re=e.toneMapping);let ze={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:te,customFragmentShaderID:O,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ie,batchingColor:ie&&h._colorsTexture!==null,instancing:k,instancingColor:k&&h.instanceColor!==null,instancingMorph:k&&h.morphTexture!==null,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:V.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ae,matcap:oe,envMap:se,envMapMode:se&&x.mapping,envMapCubeUVHeight:S,aoMap:ce,lightMap:le,bumpMap:ue,normalMap:de,displacementMap:fe,emissiveMap:pe,normalMapObjectSpace:de&&i.normalMapType===1,normalMapTangentSpace:de&&i.normalMapType===0,packedNormalMap:de&&i.normalMapType===0&&Du(i.normalMap.format),metalnessMap:A,roughnessMap:me,anisotropy:he,anisotropyMap:xe,clearcoat:ge,clearcoatMap:Se,clearcoatNormalMap:Ce,clearcoatRoughnessMap:we,dispersion:_e,iridescence:ve,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ye,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:be,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Ie,alphaHash:Le,combine:i.combine,mapUv:ae&&m(i.map.channel),aoMapUv:ce&&m(i.aoMap.channel),lightMapUv:le&&m(i.lightMap.channel),bumpMapUv:ue&&m(i.bumpMap.channel),normalMapUv:de&&m(i.normalMap.channel),displacementMapUv:fe&&m(i.displacementMap.channel),emissiveMapUv:pe&&m(i.emissiveMap.channel),metalnessMapUv:A&&m(i.metalnessMap.channel),roughnessMapUv:me&&m(i.roughnessMap.channel),anisotropyMapUv:xe&&m(i.anisotropyMap.channel),clearcoatMapUv:Se&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&m(i.sheenRoughnessMap.channel),specularMapUv:ke&&m(i.specularMap.channel),specularColorMapUv:Ae&&m(i.specularColorMap.channel),specularIntensityMapUv:je&&m(i.specularIntensityMap.channel),transmissionMapUv:Me&&m(i.transmissionMap.channel),thicknessMapUv:Ne&&m(i.thicknessMap.channel),alphaMapUv:Fe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(de||he),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ae||Fe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&de===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:ae&&i.map.isVideoTexture===!0&&V.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:pe&&i.emissiveMap.isVideoTexture===!0&&V.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:j&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(j&&i.extensions.multiDraw===!0||ie)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Xs[t];n=fo.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Cu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ku(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Au(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ju(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Mu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Au),r.length>1&&r.sort(t||ju),i.length>1&&i.sort(t||ju),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Nu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Mu,e.set(t,[i])):n>=r.length?(i=new Mu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Pu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new z,color:new W};break;case`SpotLight`:n={position:new z,direction:new z,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new z,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new z,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new z,halfWidth:new z,halfHeight:new z}}return e[t.id]=n,n}}}function Fu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Iu=0;function Lu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ru(e){let t=new Pu,n=Fu(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new z);let i=new z,a=new H,o=new H;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Lu);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Iu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function zu(e){let t=new Ru(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Bu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new zu(e),t.set(n,[a])):r>=i.length?(a=new zu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Vu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hu=`uniform sampler2D shadow_pass;
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
}`,Uu=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Wu=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Gu=new H,Ku=new z,qu=new z;function Ju(e,t,n){let r=new Ji,i=new R,a=new R,o=new ln,s=new vo,c=new yo,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new ho({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R},radius:{value:4}},vertexShader:Vu,fragmentShader:Hu}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let h=new Ur;h.setAttribute(`position`,new Or(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new mi(h,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(F(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){F(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){F(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new dn(i.x,i.y,{format:le,type:E,minFilter:g,magFilter:g,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new va(i.x,i.y,T),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ae,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=p,d.map.depthTexture.magFilter=p}else l.isPointLight?(d.map=new Tc(i.x),d.map.depthTexture=new ya(i.x,w)):(d.map=new dn(i.x,i.y),d.map.depthTexture=new va(i.x,i.y,w)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ae,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=g,d.map.depthTexture.magFilter=g):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=p,d.map.depthTexture.magFilter=p);d.camera.updateProjectionMatrix()}let v=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<v;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ku.setFromMatrixPosition(l.matrixWorld),e.position.copy(Ku),qu.copy(e.position),qu.add(Uu[t]),e.up.copy(Wu[t]),e.lookAt(qu),e.updateMatrixWorld(),n.makeTranslation(-Ku.x,-Ku.y,-Ku.z),Gu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Gu,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),S(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new dn(i.x,i.y,{format:le,type:E})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Yu(e,t){function n(){let t=!1,n=new ln,r=null,i=new ln(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?A(e.DEPTH_TEST):me(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=_t[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?A(e.STENCIL_TEST):me(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,ee=null,te=null,O=null,ne=null,re=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ie=0,ae=e.getParameter(e.VERSION);ae.indexOf(`WebGL`)===-1?ae.indexOf(`OpenGL ES`)!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),k=ie>=2):(ie=parseFloat(/^WebGL (\d)/.exec(ae)[1]),k=ie>=1);let oe=null,se={},ce=e.getParameter(e.SCISSOR_BOX),le=e.getParameter(e.VIEWPORT),ue=new ln().fromArray(ce),de=new ln().fromArray(le);function fe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let pe={};pe[e.TEXTURE_2D]=fe(e.TEXTURE_2D,e.TEXTURE_2D,1),pe[e.TEXTURE_CUBE_MAP]=fe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[e.TEXTURE_2D_ARRAY]=fe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),pe[e.TEXTURE_3D]=fe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),A(e.DEPTH_TEST),o.setFunc(3),Se(!1),Ce(1),A(e.CULL_FACE),be(0);function A(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function me(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function he(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ge(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function _e(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ve={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ve[103]=e.MIN,ve[104]=e.MAX;let ye={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function be(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(me(e.BLEND),g=!1);return}if(g===!1&&(A(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:I(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:I(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:I(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:I(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(ve[n],ve[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ye[r],ye[i],ye[o],ye[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function xe(t,n){t.side===2?me(e.CULL_FACE):A(e.CULL_FACE);let r=t.side===1;n&&(r=!r),Se(r),t.blending===1&&t.transparent===!1?be(0):be(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Te(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?A(e.SAMPLE_ALPHA_TO_COVERAGE):me(e.SAMPLE_ALPHA_TO_COVERAGE)}function Se(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Ce(t){t===0?me(e.CULL_FACE):(A(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function we(t){t!==te&&(k&&e.lineWidth(t),te=t)}function Te(t,n,r){t?(A(e.POLYGON_OFFSET_FILL),(O!==n||ne!==r)&&(O=n,ne=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):me(e.POLYGON_OFFSET_FILL)}function Ee(t){t?A(e.SCISSOR_TEST):me(e.SCISSOR_TEST)}function De(t){t===void 0&&(t=e.TEXTURE0+re-1),oe!==t&&(e.activeTexture(t),oe=t)}function Oe(t,n,r){r===void 0&&(r=oe===null?e.TEXTURE0+re-1:oe);let i=se[r];i===void 0&&(i={type:void 0,texture:void 0},se[r]=i),(i.type!==t||i.texture!==n)&&(oe!==r&&(e.activeTexture(r),oe=r),e.bindTexture(t,n||pe[t]),i.type=t,i.texture=n)}function ke(){let t=se[oe];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ae(){try{e.compressedTexImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function je(){try{e.compressedTexImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Me(){try{e.texSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ne(){try{e.texSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Pe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Fe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ie(){try{e.texStorage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Le(){try{e.texStorage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function j(){try{e.texImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Re(){try{e.texImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function ze(t){return d[t]===void 0?e.getParameter(t):d[t]}function Be(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function M(t){ue.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ue.copy(t))}function Ve(t){de.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),de.copy(t))}function N(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function P(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function He(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},oe=null,se={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,ee=null,te=null,O=null,ne=null,ue.set(0,0,e.canvas.width,e.canvas.height),de.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:A,disable:me,bindFramebuffer:he,drawBuffers:ge,useProgram:_e,setBlending:be,setMaterial:xe,setFlipSided:Se,setCullFace:Ce,setLineWidth:we,setPolygonOffset:Te,setScissorTest:Ee,activeTexture:De,bindTexture:Oe,unbindTexture:ke,compressedTexImage2D:Ae,compressedTexImage3D:je,texImage2D:j,texImage3D:Re,pixelStorei:Be,getParameter:ze,updateUBOMapping:N,uniformBlockBinding:P,texStorage2D:Ie,texStorage3D:Le,texSubImage2D:Me,texSubImage3D:Ne,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Fe,scissor:M,viewport:Ve,reset:He}}function Xu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new R,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):ut(`canvas`)}function T(e,t,n){let r=1,i=ze(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),F(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&F(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function te(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];F(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||F(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?rt:V.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function O(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,F(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ne(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function k(e){let t=e.target;t.removeEventListener(`dispose`,k),se(t)}function ie(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ae(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function ae(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function se(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ce=0;function le(){ce=0}function ue(){return ce}function de(e){ce=e}function fe(){let e=ce;return e>=i.maxTextures&&F(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),ce+=1,e}function pe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function A(t,i){let a=r.get(t);if(t.isVideoTexture&&j(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)F(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)F(`WebGLRenderer: Texture marked for update but image is incomplete`);else{we(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function me(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){we(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function he(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){we(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ge(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){Te(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let _e={[u]:e.REPEAT,[d]:e.CLAMP_TO_EDGE,[f]:e.MIRRORED_REPEAT},ve={[p]:e.NEAREST,[m]:e.NEAREST_MIPMAP_NEAREST,[h]:e.NEAREST_MIPMAP_LINEAR,[g]:e.LINEAR,[_]:e.LINEAR_MIPMAP_NEAREST,[v]:e.LINEAR_MIPMAP_LINEAR},ye={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function be(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&F(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,_e[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,_e[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,_e[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ve[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ve[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ye[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function xe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,re));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=pe(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ae(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function Se(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ce(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Se(n.start,r.width,4),c=Se(t.start,r.width,4);n.start<=i+1&&a===c&&Se(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function we(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=xe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=V.getPrimaries(V.workingColorSpace),r=o.colorSpace===``?null:V.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Re(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=te(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);be(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=ne(o,t);if(o.isDepthTexture)p=O(o.format===oe,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&Ce(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=Ks(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data)}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=Ks(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=ze(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=ze(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Te(t,o,s){if(o.image.length!==6)return;let c=xe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=V.getPrimaries(V.workingColorSpace),r=o.colorSpace===``?null:V.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Re(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=te(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=ne(o,h);be(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=ze(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ee(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=te(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Le(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ie(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=O(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Le(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=te(o.internalFormat,c,l,o.normalized,o.colorSpace);Le(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Oe(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,re)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),be(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else A(i.depthTexture,0);let u=l.__webglTexture,d=Ie(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Le(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Le(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ke(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Oe(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Oe(i.__webglFramebuffer[0],t,0):Oe(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),De(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),De(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ae(t,n,i){let a=r.get(t);n!==void 0&&Ee(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ke(t)}function je(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,k);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Le(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=te(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ie(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),De(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),be(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ee(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ee(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),be(c,a),Ee(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),be(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ee(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ee(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&ke(t)}function Me(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=ee(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Ne=[],Pe=[];function Fe(t){if(t.samples>0){if(Le(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ne.length=0,Pe.length=0,Ne.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Ne.push(l),Pe.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Pe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ne))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ie(e){return Math.min(i.maxSamples,e.samples)}function Le(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function j(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Re(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(V.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&F(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):I(`WebGLTextures: Unsupported texture color space:`,n)),t}function ze(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=fe,this.resetTextureUnits=le,this.getTextureUnits=ue,this.setTextureUnits=de,this.setTexture2D=A,this.setTexture2DArray=me,this.setTexture3D=he,this.setTextureCube=ge,this.rebindTextures=Ae,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Zu(e,t){function n(n,r=``){let i,a=V.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Qu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$u=`
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

}`,ed=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ba(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ho({vertexShader:Qu,fragmentShader:$u,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mi(new no(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},td=class extends vt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new ed,g={},_=t.getContextAttributes(),v=null,b=null,x=[],S=[],C=new R,T=null,E=new ls;E.viewport=new ln;let D=new ls;D.viewport=new ln;let ee=[E,D],O=new Cs,ne=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Hn,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Hn,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Hn,x[e]=t),t.getHandSpace()};function k(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function se(){r.removeEventListener(`select`,k),r.removeEventListener(`selectstart`,k),r.removeEventListener(`selectend`,k),r.removeEventListener(`squeeze`,k),r.removeEventListener(`squeezestart`,k),r.removeEventListener(`squeezeend`,k),r.removeEventListener(`end`,se),r.removeEventListener(`inputsourceschange`,ce);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}ne=null,re=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,b=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&F(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&F(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,k),r.addEventListener(`selectstart`,k),r.addEventListener(`selectend`,k),r.addEventListener(`squeeze`,k),r.addEventListener(`squeezestart`,k),r.addEventListener(`squeezeend`,k),r.addEventListener(`end`,se),r.addEventListener(`inputsourceschange`,ce),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?oe:ae,a=_.stencil?te:w);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new dn(d.textureWidth,d.textureHeight,{format:ie,type:y,depthTexture:new va(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new dn(f.framebufferWidth,f.framebufferHeight,{format:ie,type:y,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ce(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let le=new z,ue=new z;function de(e,t,n){le.setFromMatrixPosition(t.matrixWorld),ue.setFromMatrixPosition(n.matrixWorld);let r=le.distanceTo(ue),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function fe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=D.near=E.near=t,O.far=D.far=E.far=n,(ne!==O.near||re!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),ne=O.near,re=O.far),O.layers.mask=e.layers.mask|6,E.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;fe(O,i);for(let e=0;e<a.length;e++)fe(a[e],i);a.length===2?de(O,E,D):O.projectionMatrix.copy(E.projectionMatrix),pe(e,O,i)};function pe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=St*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let A=null;function me(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=ee[n];o===void 0&&(o=new ls,o.layers.enable(n),o.viewport=new ln,ee[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ba,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}A&&A(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let he=new Js;he.setAnimationLoop(me),this.setAnimationLoop=function(e){A=e},this.dispose=function(){}}},nd=new H,rd=new B;rd.set(-1,0,0,0,1,0,0,0,1);function id(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,uo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(nd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(rd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ad(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return I(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?F(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):F(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var od=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),sd=null;function cd(){return sd===null&&(sd=new Oi(od,16,16,le,E),sd.name=`DFG_LUT`,sd.minFilter=g,sd.magFilter=g,sd.wrapS=d,sd.wrapT=d,sd.generateMipmaps=!1,sd.needsUpdate=!0),sd}var ld=class{constructor(e={}){let{canvas:t=dt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=y}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([de,ue,ce]),g=new Set([y,w,S,te,D,ee]),_=new Uint32Array(4),b=new Int32Array(4),x=new z,C=null,T=null,O=[],ne=[],re=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,ie=!1,ae=null,oe=null,se=null,le=null;this._outputColorSpace=tt;let fe=0,pe=0,A=null,me=-1,he=null,ge=new ln,_e=new ln,ve=null,ye=new W(0),be=0,xe=t.width,Se=t.height,Ce=1,we=null,Te=null,Ee=new ln(0,0,xe,Se),De=new ln(0,0,xe,Se),Oe=!1,ke=new Ji,Ae=!1,je=!1,Me=new H,Ne=new z,Pe=new ln,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function Le(){return A===null?Ce:1}let j=n;function Re(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),j===null){let t=`webgl2`;if(j=Re(t,e),j===null)throw Re(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw I(`WebGLRenderer: `+e.message),e}let ze,Be,M,Ve,N,P,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,nt,rt,it,at;function ot(){ze=new Dc(j),ze.init(),rt=new Zu(j,ze),Be=new rc(j,ze,e,rt),M=new Yu(j,ze),Be.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),oe=j.createFramebuffer(),se=j.createFramebuffer(),le=j.createFramebuffer(),Ve=new Ac(j),N=new ku,P=new Xu(j,ze,M,N,Be,rt,Ve),He=new Ec(k),Ue=new Ys(j),it=new tc(j,Ue),We=new Oc(j,Ue,Ve,it),Ge=new Mc(j,We,Ue,it,Ve),$e=new jc(j,Be,P),Xe=new ic(N),Ke=new Ou(k,He,ze,Be,it,Xe),qe=new id(k,N),Je=new Nu,Ye=new Bu(ze),Qe=new ec(k,He,M,Ge,p,s),Ze=new Ju(k,Ge,Be),at=new ad(j,Ve,Be,M),et=new nc(j,ze,Ve),nt=new kc(j,ze,Ve),Ve.programs=Ke.programs,k.capabilities=Be,k.extensions=ze,k.properties=N,k.renderLists=Je,k.shadowMap=Ze,k.state=M,k.info=Ve}ot(),m!==1009&&(re=new Pc(m,t.width,t.height,o,r,i));let ct=new td(k,j);this.xr=ct,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let e=ze.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ze.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(e){e!==void 0&&(Ce=e,this.setSize(xe,Se,!1))},this.getSize=function(e){return e.set(xe,Se)},this.setSize=function(e,n,r=!0){if(ct.isPresenting){F(`WebGLRenderer: Can't change size while VR device is presenting.`);return}xe=e,Se=n,t.width=Math.floor(e*Ce),t.height=Math.floor(n*Ce),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),re!==null&&re.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(xe*Ce,Se*Ce).floor()},this.setDrawingBufferSize=function(e,n,r){xe=e,Se=n,Ce=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){I(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){F(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}re.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ge)},this.getViewport=function(e){return e.copy(Ee)},this.setViewport=function(e,t,n,r){e.isVector4?Ee.set(e.x,e.y,e.z,e.w):Ee.set(e,t,n,r),M.viewport(ge.copy(Ee).multiplyScalar(Ce).round())},this.getScissor=function(e){return e.copy(De)},this.setScissor=function(e,t,n,r){e.isVector4?De.set(e.x,e.y,e.z,e.w):De.set(e,t,n,r),M.scissor(_e.copy(De).multiplyScalar(Ce).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(e){M.setScissorTest(Oe=e)},this.setOpaqueSort=function(e){we=e},this.setTransparentSort=function(e){Te=e},this.getClearColor=function(e){return e.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(A!==null){let t=A.texture.format;e=h.has(t)}if(e){let e=A.texture.type,t=g.has(e),n=Qe.getClearColor(),r=Qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,j.clearBufferuiv(j.COLOR,0,_)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,j.clearBufferiv(j.COLOR,0,b))}else r|=j.COLOR_BUFFER_BIT}t&&(r|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&j.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ae=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),Qe.dispose(),Je.dispose(),Ye.dispose(),N.dispose(),He.dispose(),Ge.dispose(),it.dispose(),at.dispose(),Ke.dispose(),ct.dispose(),ct.removeEventListener(`sessionstart`,xt),ct.removeEventListener(`sessionend`,St),Ct.stop()};function lt(e){e.preventDefault(),pt(`WebGLRenderer: Context Lost.`),ie=!0}function ut(){pt(`WebGLRenderer: Context Restored.`),ie=!1;let e=Ve.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;ot(),Ve.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function ft(e){I(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function mt(e){let t=e.target;t.removeEventListener(`dispose`,mt),ht(t)}function ht(e){_t(e),N.remove(e)}function _t(e){let t=N.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Fe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Mt(e,t,n,r,i);M.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=et;if(c!==null&&(h=Ue.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(M.setLineWidth(r.wireframeLinewidth*Le()),g.setMode(j.LINES)):g.setMode(j.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),M.setLineWidth(e*Le()),i.isLineSegments?g.setMode(j.LINES):i.isLineLoop?g.setMode(j.LINE_LOOP):g.setMode(j.LINE_STRIP)}else i.isPoints?g.setMode(j.POINTS):i.isSprite&&g.setMode(j.TRIANGLES);if(i.isBatchedMesh){if(ze.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=N.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(j,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function vt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ot(e,t,n),e.side=0,e.needsUpdate=!0,Ot(e,t,n),e.side=2):Ot(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),T=Ye.get(n),T.init(t),ne.push(T),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(T.pushLight(e),e.castShadow&&T.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(T.pushLight(e),e.castShadow&&T.pushShadow(e))}),T.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];vt(a,n,e),r.add(a)}else vt(t,n,e),r.add(t)}}),T=ne.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){N.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}ze.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let yt=null;function bt(e){yt&&yt(e)}function xt(){Ct.stop()}function St(){Ct.start()}let Ct=new Js;Ct.setAnimationLoop(bt),typeof self<`u`&&Ct.setContext(self),this.setAnimationLoop=function(e){yt=e,ct.setAnimationLoop(e),e===null?Ct.stop():Ct.start()},ct.addEventListener(`sessionstart`,xt),ct.addEventListener(`sessionend`,St),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){I(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;ae!==null&&ae.renderStart(e,t);let n=ct.enabled===!0&&ct.isPresenting===!0,r=re!==null&&(A===null||n)&&re.begin(k,A);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(re===null||re.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(t),t=ct.getCamera()),e.isScene===!0&&e.onBeforeRender(k,e,t,A),T=Ye.get(e,ne.length),T.init(t),T.state.textureUnits=P.getTextureUnits(),ne.push(T),Me.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ke.setFromProjectionMatrix(Me,st,t.reversedDepth),je=this.localClippingEnabled,Ae=Xe.init(this.clippingPlanes,je),C=Je.get(e,O.length),C.init(),O.push(C),ct.enabled===!0&&ct.isPresenting===!0){let e=k.xr.getDepthSensingMesh();e!==null&&L(e,t,-1/0,k.sortObjects)}L(e,t,0,k.sortObjects),C.finish(),k.sortObjects===!0&&C.sort(we,Te,t.reversedDepth),Ie=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Ie&&Qe.addToRenderList(C,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ae===!0&&Xe.beginShadows();let i=T.state.shadowsArray;if(Ze.render(i,e,t),Ae===!0&&Xe.endShadows(),(r&&re.hasRenderPass())===!1){let n=C.opaque,r=C.transmissive;if(T.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Tt(n,r,e,a)}Ie&&Qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];wt(C,e,n,n.viewport)}}else r.length>0&&Tt(n,r,e,t),Ie&&Qe.render(e),wt(C,e,t)}A!==null&&pe===0&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),r&&re.end(k),e.isScene===!0&&e.onAfterRender(k,e,t),it.resetDefaultState(),me=-1,he=null,ne.pop(),ne.length>0?(T=ne[ne.length-1],P.setTextureUnits(T.state.textureUnits),Ae===!0&&Xe.setGlobalState(k.clippingPlanes,T.state.camera)):T=null,O.pop(),C=O.length>0?O[O.length-1]:null,ae!==null&&ae.renderEnd()};function L(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)T.pushLightProbeGrid(e);else if(e.isLight)T.pushLight(e),e.castShadow&&T.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ke.intersectsSprite(e)){r&&Pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Me);let t=Ge.update(e),i=e.material;i.visible&&C.push(e,t,i,n,Pe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ke.intersectsObject(e))){let t=Ge.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Pe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Pe.copy(e.boundingSphere.center)),Pe.applyMatrix4(e.matrixWorld).applyMatrix4(Me)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&C.push(e,t,s,n,Pe.z,o)}}else i.visible&&C.push(e,t,i,n,Pe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)L(i[e],t,n,r)}function wt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;T.setupLightsView(n),Ae===!0&&Xe.setGlobalState(k.clippingPlanes,n),r&&M.viewport(ge.copy(r)),i.length>0&&Et(i,t,n),a.length>0&&Et(a,t,n),o.length>0&&Et(o,t,n),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[r.id]===void 0){let e=ze.has(`EXT_color_buffer_half_float`)||ze.has(`EXT_color_buffer_float`);T.state.transmissionRenderTarget[r.id]=new dn(1,1,{generateMipmaps:!0,type:e?E:y,minFilter:v,samples:Math.max(4,Be.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:V.workingColorSpace})}let a=T.state.transmissionRenderTarget[r.id],o=r.viewport||ge;a.setSize(o.z*k.transmissionResolutionScale,o.w*k.transmissionResolutionScale);let s=k.getRenderTarget(),c=k.getActiveCubeFace(),l=k.getActiveMipmapLevel();k.setRenderTarget(a),k.getClearColor(ye),be=k.getClearAlpha(),be<1&&k.setClearColor(16777215,.5),k.clear(),Ie&&Qe.render(n);let u=k.toneMapping;k.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),T.setupLightsView(r),Ae===!0&&Xe.setGlobalState(k.clippingPlanes,r),Et(e,n,r),P.updateMultisampleRenderTarget(a),P.updateRenderTargetMipmap(a),ze.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Dt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(P.updateMultisampleRenderTarget(a),P.updateRenderTargetMipmap(a))}k.setRenderTarget(s,c,l),k.setClearColor(ye,be),d!==void 0&&(r.viewport=d),k.toneMapping=u}function Et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Dt(o,t,n,s,l,c)}}function Dt(e,t,n,r,i,a){e.onBeforeRender(k,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(k,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=2):k.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(k,t,n,r,i,a)}function Ot(e,t,n){t.isScene!==!0&&(t=Fe);let r=N.get(e),i=T.state.lights,a=T.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,T.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=He.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,mt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return At(e,s),d}else s.uniforms=Ke.getUniforms(e),ae!==null&&e.isNodeMaterial&&ae.build(e,n,s),e.onBeforeCompile(s,k),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),At(e,s),r.needsLights=Pt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=T.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function kt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Vl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function At(e,t){let n=N.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function jt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];x.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(x))return n}return null}function Mt(e,t,n,r,i){t.isScene!==!0&&(t=Fe),P.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=A===null?k.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:V.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=He.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(h=k.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=N.get(r),y=T.state.lights;if(Ae===!0&&(je===!0||e!==he)){let t=e===he&&r.id===me;Xe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=T.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Ot(r,t,i),ae&&r.isNodeMaterial&&ae.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,E=x.getUniforms(),D=v.uniforms;if(M.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==me&&(me=r.id,C=!0),v.needsLights){let e=jt(T.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||he!==e){M.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(j,`projectionMatrix`,e.projectionMatrix),E.setValue(j,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(j,Ne.setFromMatrixPosition(e.matrixWorld)),Be.logarithmicDepthBuffer&&E.setValue(j,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(j,`isOrthographic`,e.isOrthographicCamera===!0),he!==e&&(he=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&E.setValue(j,`directionalShadowMap`,y.state.directionalShadowMap,P),y.state.spotShadowMap.length>0&&E.setValue(j,`spotShadowMap`,y.state.spotShadowMap,P),y.state.pointShadowMap.length>0&&E.setValue(j,`pointShadowMap`,y.state.pointShadowMap,P)),i.isSkinnedMesh){E.setOptional(j,i,`bindMatrix`),E.setOptional(j,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(j,`boneTexture`,e.boneTexture,P))}i.isBatchedMesh&&(E.setOptional(j,i,`batchingTexture`),E.setValue(j,`batchingTexture`,i._matricesTexture,P),E.setOptional(j,i,`batchingIdTexture`),E.setValue(j,`batchingIdTexture`,i._indirectTexture,P),E.setOptional(j,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(j,`batchingColorTexture`,i._colorsTexture,P));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&$e.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(j,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=cd()),C){if(E.setValue(j,`toneMappingExposure`,k.toneMappingExposure),v.needsLights&&Nt(D,w),a&&r.fog===!0&&qe.refreshFogUniforms(D,a),qe.refreshMaterialUniforms(D,r,Ce,Se,T.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}Vl.upload(j,kt(v),D,P)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Vl.upload(j,kt(v),D,P),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(j,`center`,i.center),E.setValue(j,`modelViewMatrix`,i.modelViewMatrix),E.setValue(j,`normalMatrix`,i.normalMatrix),E.setValue(j,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,x),at.bind(n,x)}}return x}function Nt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return pe},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(e,t,n){let r=N.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),N.get(e.texture).__webglTexture=t,N.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=N.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){A=e,fe=t,pe=n;let r=null,i=!1,a=!1;if(e){let o=N.get(e);if(o.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(j.FRAMEBUFFER,o.__webglFramebuffer),ge.copy(e.viewport),_e.copy(e.scissor),ve=e.scissorTest,M.viewport(ge),M.scissor(_e),M.setScissorTest(ve),me=-1;return}if(o.__webglFramebuffer===void 0)P.setupRenderTarget(e);else if(o.__hasExternalTextures)P.rebindTextures(e,N.get(e.texture).__webglTexture,N.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&N.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);P.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=N.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&P.useMultisampledRTT(e)===!1?N.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ge.copy(e.viewport),_e.copy(e.scissor),ve=e.scissorTest}else ge.copy(Ee).multiplyScalar(Ce).floor(),_e.copy(De).multiplyScalar(Ce).floor(),ve=Oe;if(n!==0&&(r=oe),M.bindFramebuffer(j.FRAMEBUFFER,r)&&M.drawBuffers(e,r),M.viewport(ge),M.scissor(_e),M.setScissorTest(ve),i){let r=N.get(e.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=N.get(e.textures[t]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=N.get(e.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,t.__webglTexture,n)}me=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=N.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){M.bindFramebuffer(j.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+s),!Be.textureFormatReadable(c)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Be.textureTypeReadable(l)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&j.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=A===null?null:N.get(A).__webglFramebuffer;M.bindFramebuffer(j.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=N.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){M.bindFramebuffer(j.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+s),!Be.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Be.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,d),j.bufferData(j.PIXEL_PACK_BUFFER,a.byteLength,j.STREAM_READ),j.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0);let f=A===null?null:N.get(A).__webglFramebuffer;M.bindFramebuffer(j.FRAMEBUFFER,f);let p=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await gt(j,p,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,d),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,a),j.deleteBuffer(d),j.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;P.setTexture2D(e,0),j.copyTexSubImage2D(j.TEXTURE_2D,n,0,0,o,s,i,a),M.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(P.setTexture3D(t,0),v=j.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(P.setTexture2DArray(t,0),v=j.TEXTURE_2D_ARRAY):(P.setTexture2D(t,0),v=j.TEXTURE_2D),M.activeTexture(j.TEXTURE0),M.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,t.flipY),M.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),M.pixelStorei(j.UNPACK_ALIGNMENT,t.unpackAlignment);let y=M.getParameter(j.UNPACK_ROW_LENGTH),b=M.getParameter(j.UNPACK_IMAGE_HEIGHT),x=M.getParameter(j.UNPACK_SKIP_PIXELS),S=M.getParameter(j.UNPACK_SKIP_ROWS),C=M.getParameter(j.UNPACK_SKIP_IMAGES);M.pixelStorei(j.UNPACK_ROW_LENGTH,h.width),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,h.height),M.pixelStorei(j.UNPACK_SKIP_PIXELS,l),M.pixelStorei(j.UNPACK_SKIP_ROWS,u),M.pixelStorei(j.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=N.get(e),r=N.get(t),h=N.get(n.__renderTarget),g=N.get(r.__renderTarget);M.bindFramebuffer(j.READ_FRAMEBUFFER,h.__webglFramebuffer),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,N.get(e).__webglTexture,i,d+n),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,N.get(t).__webglTexture,a,m+n)),j.blitFramebuffer(l,u,o,s,f,p,o,s,j.DEPTH_BUFFER_BIT,j.NEAREST);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||N.has(e)){let n=N.get(e),r=N.get(t);M.bindFramebuffer(j.READ_FRAMEBUFFER,se),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,n.__webglTexture,i),T?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,r.__webglTexture,a),i===0?T?j.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):j.copyTexSubImage2D(v,a,f,p,l,u,o,s):j.blitFramebuffer(l,u,o,s,f,p,o,s,j.COLOR_BUFFER_BIT,j.NEAREST);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?j.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?j.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):j.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):j.texSubImage2D(j.TEXTURE_2D,a,f,p,o,s,g,_,h);M.pixelStorei(j.UNPACK_ROW_LENGTH,y),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,b),M.pixelStorei(j.UNPACK_SKIP_PIXELS,x),M.pixelStorei(j.UNPACK_SKIP_ROWS,S),M.pixelStorei(j.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&j.generateMipmap(v),M.unbindTexture()},this.initRenderTarget=function(e){N.get(e).__webglFramebuffer===void 0&&P.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?P.setTextureCube(e,0):e.isData3DTexture?P.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?P.setTexture2DArray(e,0):P.setTexture2D(e,0),M.unbindTexture()},this.resetState=function(){fe=0,pe=0,A=null,M.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return st}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=V._getDrawingBufferColorSpace(e),t.unpackColorSpace=V._getUnpackColorSpace()}};function ud(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function dd(e,t){return t.getBoneName===void 0?t.names[e.name]:t.getBoneName(e)}function fd(e,t,n={}){let r=new Gt,i=new z,a=new H,o=new H;n.preserveBoneMatrix=n.preserveBoneMatrix===void 0||n.preserveBoneMatrix,n.preserveBonePositions=n.preserveBonePositions===void 0||n.preserveBonePositions,n.useTargetMatrix=n.useTargetMatrix!==void 0&&n.useTargetMatrix,n.hip=n.hip===void 0?`hip`:n.hip,n.hipInfluence=n.hipInfluence===void 0?new z(1,1,1):n.hipInfluence,n.scale=n.scale===void 0?1:n.scale,n.names=n.names||{};let s=t.isObject3D?t.skeleton.bones:gd(t),c=e.isObject3D?e.skeleton.bones:gd(e),l,u,d,f;if(e.isObject3D?e.skeleton.pose():(n.useTargetMatrix=!0,n.preserveBoneMatrix=!1),n.preserveBonePositions){f=[];for(let e=0;e<c.length;e++)f.push(c[e].position.clone())}if(n.preserveBoneMatrix){e.updateMatrixWorld(),e.matrixWorld.identity();for(let t=0;t<e.children.length;++t)e.children[t].updateMatrixWorld(!0)}for(let t=0;t<c.length;++t)l=c[t],u=dd(l,n),d=hd(u,s),o.copy(l.matrixWorld),d&&(d.updateMatrixWorld(),n.useTargetMatrix?a.copy(d.matrixWorld):(a.copy(e.matrixWorld).invert(),a.multiply(d.matrixWorld)),i.setFromMatrixScale(a),a.scale(i.set(1/i.x,1/i.y,1/i.z)),o.makeRotationFromQuaternion(r.setFromRotationMatrix(a)),e.isObject3D&&n.localOffsets&&n.localOffsets[l.name]&&o.multiply(n.localOffsets[l.name]),o.copyPosition(a)),u===n.hip&&(o.elements[12]*=n.scale*n.hipInfluence.x,o.elements[13]*=n.scale*n.hipInfluence.y,o.elements[14]*=n.scale*n.hipInfluence.z,n.hipPosition!==void 0&&(o.elements[12]+=n.hipPosition.x*n.scale,o.elements[13]+=n.hipPosition.y*n.scale,o.elements[14]+=n.hipPosition.z*n.scale)),l.parent?(l.matrix.copy(l.parent.matrixWorld).invert(),l.matrix.multiply(o)):l.matrix.copy(o),l.matrix.decompose(l.position,l.quaternion,l.scale),l.updateMatrixWorld();if(n.preserveBonePositions)for(let e=0;e<c.length;++e)l=c[e],u=dd(l,n)||l.name,u!==n.hip&&l.position.copy(f[e]);n.preserveBoneMatrix&&e.updateMatrixWorld(!0)}function pd(e,t,n,r={}){r.useFirstFramePosition=r.useFirstFramePosition!==void 0&&r.useFirstFramePosition,r.fps=r.fps===void 0?Math.max(...n.tracks.map(e=>e.times.length))/n.duration:r.fps,r.names=r.names||[],t.isObject3D||(t=_d(t));let i=Math.round(n.duration*(r.fps/1e3)*1e3),a=n.duration/(i-1),o=[],s=new zs(t),c=gd(e.skeleton),l=[],u,d,f,p,m;s.clipAction(n).play();let h=0,g=i;r.trim===void 0?s.update(0):(h=Math.round(r.trim[0]*r.fps),g=Math.min(Math.round(r.trim[1]*r.fps),i)-h,s.update(r.trim[0])),t.updateMatrixWorld();for(let n=0;n<g;++n){let i=n*a;fd(e,t,r);for(let e=0;e<c.length;++e)d=c[e],m=dd(d,r)||d.name,f=hd(m,t.skeleton),f&&(p=l[e]=l[e]||{bone:d},r.hip===m&&(p.pos||(p.pos={times:new Float32Array(g),values:new Float32Array(g*3)}),r.useFirstFramePosition&&(n===0&&(u=d.position.clone()),d.position.sub(u)),p.pos.times[n]=i,d.position.toArray(p.pos.values,n*3)),p.quat||(p.quat={times:new Float32Array(g),values:new Float32Array(g*4)}),p.quat.times[n]=i,d.quaternion.toArray(p.quat.values,n*4));n===g-2?s.update(a-1e-7):s.update(a),t.updateMatrixWorld()}for(let e=0;e<l.length;++e)p=l[e],p&&(p.pos&&o.push(new Io(`.bones[`+p.bone.name+`].position`,p.pos.times,p.pos.values)),o.push(new Po(`.bones[`+p.bone.name+`].quaternion`,p.quat.times,p.quat.values)));return s.uncacheAction(n),new Lo(n.name,-1,o)}function md(e){let t=new Map,n=new Map,r=e.clone();return vd(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function hd(e,t){for(let n=0,r=gd(t);n<r.length;n++)if(e===r[n].name)return r[n]}function gd(e){return Array.isArray(e)?e:e.bones}function _d(e){let t=new Ws(e.bones[0]);return t.skeleton=e,t}function vd(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)vd(e.children[r],t.children[r],n)}var yd=class extends Uo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Td(e)}),this.register(function(e){return new Ed(e)}),this.register(function(e){return new Fd(e)}),this.register(function(e){return new Id(e)}),this.register(function(e){return new Ld(e)}),this.register(function(e){return new Od(e)}),this.register(function(e){return new kd(e)}),this.register(function(e){return new Ad(e)}),this.register(function(e){return new jd(e)}),this.register(function(e){return new wd(e)}),this.register(function(e){return new Md(e)}),this.register(function(e){return new Dd(e)}),this.register(function(e){return new Pd(e)}),this.register(function(e){return new Nd(e)}),this.register(function(e){return new Sd(e)}),this.register(function(e){return new Rd(e,X.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Rd(e,X.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new zd(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=_s.extractUrlBase(e);a=_s.resolveURL(t,this.path)}else a=_s.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new Ko(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===Bd){try{a[X.KHR_BINARY_GLTF]=new Ud(e)}catch(e){r&&r(e);return}i=JSON.parse(a[X.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new gf(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case X.KHR_MATERIALS_UNLIT:a[t]=new Cd;break;case X.KHR_DRACO_MESH_COMPRESSION:a[t]=new Wd(i,this.dracoLoader);break;case X.KHR_TEXTURE_TRANSFORM:a[t]=new Gd;break;case X.KHR_MESH_QUANTIZATION:a[t]=new Kd;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function bd(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function xd(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var X={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},Sd=class{constructor(e){this.parser=e,this.name=X.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new W(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],nt);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new gs(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new ps(s),o.distance=c;break;case`spot`:o=new ds(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),cf(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},Cd=class{constructor(){this.name=X.KHR_MATERIALS_UNLIT}getMaterialType(){return G}extendParams(e,t,n){let r=[];e.color=new W(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],nt),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,tt))}return Promise.all(r)}},wd=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Td=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:_o}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new R(e,e)}return Promise.all(r)}},Ed=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_DISPERSION}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:_o}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},Dd=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:_o}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},Od=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_SHEEN}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:_o}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new W(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],nt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,tt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},kd=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:_o}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},Ad=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_VOLUME}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:_o}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new W().setRGB(i[0],i[1],i[2],nt),Promise.all(r)}},jd=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_IOR}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:_o}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);return n===null?Promise.resolve():(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3),Promise.resolve())}},Md=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_SPECULAR}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:_o}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new W().setRGB(i[0],i[1],i[2],nt),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,tt)),Promise.all(r)}},Nd=class{constructor(e){this.parser=e,this.name=X.EXT_MATERIALS_BUMP}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:_o}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},Pd=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:_o}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},Fd=class{constructor(e){this.parser=e,this.name=X.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},Id=class{constructor(e){this.parser=e,this.name=X.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Ld=class{constructor(e){this.parser=e,this.name=X.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Rd=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},zd=class{constructor(e){this.name=X.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==Xd.TRIANGLES&&e.mode!==Xd.TRIANGLE_STRIP&&e.mode!==Xd.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new H,n=new z,a=new Gt,s=new z(1,1,1),c=new Bi(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));for(let t in o)if(t===`_COLOR_0`){let e=o[t];c.instanceColor=new Mi(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,o[t]);Bn.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},Bd=`glTF`,Vd=12,Hd={JSON:1313821514,BIN:5130562},Ud=class{constructor(e){this.name=X.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Vd),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bd)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Vd,i=new DataView(e,Vd),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Hd.JSON){let r=new Uint8Array(e,Vd+a,t);this.content=n.decode(r)}else if(r===Hd.BIN){let n=Vd+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},Wd=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=X.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=tf[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=tf[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=Zd[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,nt,n)})})}},Gd=class{constructor(){this.name=X.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0?e:(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0,e)}},Kd=class{constructor(){this.name=X.KHR_MESH_QUANTIZATION}},qd=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},Jd=new Gt,Yd=class extends qd{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return Jd.fromArray(i).normalize().toArray(i),i}},Xd={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Zd={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qd={9728:p,9729:g,9984:m,9985:_,9986:h,9987:v},$d={33071:d,33648:f,10497:u},ef={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tf={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},nf={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},rf={CUBICSPLINE:void 0,LINEAR:Ke,STEP:Ge},af={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function of(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new q({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function sf(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function cf(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function lf(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function uf(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function df(e){let t,n=e.extensions&&e.extensions[X.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+ff(n.attributes):e.indices+`:`+ff(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+ff(e.targets[n]);return t}function ff(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function pf(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function mf(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var hf=new H,gf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bd,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new Yo(this.options.manager):new ys(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ko(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return sf(i,a,r),cf(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[X.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(_s.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=ef[r.type],t=Zd[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new Or(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=ef[r.type],o=Zd[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new Wr(f,u/s),t.cache.add(n,c)),p=new Kr(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new Or(f,a,d);if(r.sparse!==void 0){let t=ef.SCALAR,n=Zd[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new Or(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=Qd[n.magFilter]||1006,t.minFilter=Qd[n.minFilter]||1008,t.wrapS=$d[n.wrapS]||1e3,t.wrapT=$d[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new cn(e);t.needsUpdate=!0,n(t)}),t.load(_s.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),cf(e,a),e.userData.mimeType=a.mimeType||mf(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[X.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[X.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[X.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new la,Jr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Yi,Jr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return q}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[X.KHR_MATERIALS_UNLIT]){let e=r[X.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new W(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],nt),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,tt)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||af.OPAQUE;if(l===af.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===af.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==G&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new R(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==G&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==G){let e=i.emissiveFactor;o.emissive=new W().setRGB(e[0],e[1],e[2],nt)}return i.emissiveTexture!==void 0&&a!==G&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,tt)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),cf(n,i),t.associations.set(n,{materials:e}),i.extensions&&sf(r,n,i),n})}createUniqueName(e){let t=Is.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[X.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return vf(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=df(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[X.KHR_DRACO_MESH_COMPRESSION]?i(o):vf(new Ur,o,t),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?of(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===Xd.TRIANGLES||u.mode===Xd.TRIANGLE_STRIP||u.mode===Xd.TRIANGLE_FAN||u.mode===void 0)d=i.isSkinnedMesh===!0?new Ei(l,f):new mi(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),u.mode===Xd.TRIANGLE_STRIP?d.geometry=ud(d.geometry,1):u.mode===Xd.TRIANGLE_FAN&&(d.geometry=ud(d.geometry,2));else if(u.mode===Xd.LINES)d=new sa(l,f);else if(u.mode===Xd.LINE_STRIP)d=new ra(l,f);else if(u.mode===Xd.LINE_LOOP)d=new ca(l,f);else if(u.mode===Xd.POINTS)d=new ma(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&uf(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),cf(d,i),u.extensions&&sf(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&sf(r,c[0],i),c[0];let l=new U;i.extensions&&sf(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new ls(Wt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new ms(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),cf(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new H;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new ji(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new Lo(i,void 0,l);return cf(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,hf)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new z().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new Di:t.length>1?new U:t.length===1?t[0]:new Bn,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),cf(o,i),i.extensions&&sf(n,o,i),i.matrix!==void 0){let e=new H;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new U;n.name&&(i.name=r.createUniqueName(n.name)),cf(i,n),n.extensions&&sf(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(md(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof Jr||e instanceof cn)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}nf[i.path]===nf.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(nf[i.path]){case nf.weights:l=Mo;break;case nf.rotation:l=Po;break;case nf.translation:case nf.scale:l=Io;break;default:switch(n.itemSize){case 1:l=Mo;break;default:l=Io}}let u=r.interpolation===void 0?Ke:rf[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+nf[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=pf(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof Po?Yd:qd)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function _f(e,t,n){let r=t.attributes,i=new ur;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new z(t[0],t[1],t[2]),new z(a[0],a[1],a[2])),e.normalized){let t=pf(Zd[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new z,t=new z;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=pf(Zd[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new Fr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function vf(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=tf[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return V.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${V.workingColorSpace}" not supported.`),cf(e,t),_f(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:lf(e,t.targets,n)})}var yf=new z;function bf(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;yf.copy(t),yf[r]=0,yf.normalize();let l=.5*o/(o+s),u=1-yf.angleTo(e)/c;return Math.sign(yf[n])===1?u*l:s/(o+s)+l+l*(1-u)}var xf=class e extends K{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new z,c=new z,l=new z(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new z,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=bf(m,c,`z`,`y`,i,n),f[a+1]=1-bf(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-bf(m,c,`z`,`y`,i,n),f[a+1]=1-bf(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-bf(m,c,`x`,`z`,i,e),f[a+1]=bf(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-bf(m,c,`x`,`z`,i,e),f[a+1]=1-bf(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-bf(m,c,`x`,`y`,i,e),f[a+1]=1-bf(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=bf(m,c,`x`,`y`,i,e),f[a+1]=1-bf(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},Sf=[{id:1,title:`El despertar de Gala`,location:`Barrio del Mirador · Zerath`,theme:`neighborhood`,story:`La onda que destruyó la ventana dejó el barrio sin luz. Gala sale entre casas, jardines y vecinos escondidos mientras una patrulla corrupta registra cada calle.`,objective:`Rescatá a los vecinos y derrotá al capitán Varex`,missionLabel:`VECINOS`,unlock:{icon:`◉`,name:`Pulso circular`,description:`Anillos de energía que salen de sus manos y golpean a distancia.`},fog:2504518,sky:1518139,accent:16725588,bounds:{x:27,z:48},start:[0,0,39],exit:[0,0,-43],commander:`CAPITÁN VAREX`,targets:[{kind:`survivor`,label:`Casa de los Arrayanes`,position:[-17,0,19],encounter:{soldiers:2,shooters:0}},{kind:`survivor`,label:`Parada del barrio`,position:[16,0,2],encounter:{soldiers:2,shooters:1}},{kind:`survivor`,label:`Plaza del Mirador`,position:[-12,0,-25],encounter:{soldiers:3,shooters:1,commander:!0}}]},{id:2,title:`La señal de Ivo`,location:`Pueblo de Arrayanes`,theme:`town`,story:`En el pueblo, todas las radios repiten la misma voz. Gala encuentra a Ivo, otro huésped de un custodio. Él puede intervenir antenas y convertir las señales que las atraviesan en descargas.`,objective:`Ayudá a Ivo a recuperar las tres antenas del pueblo`,missionLabel:`ANTENAS`,unlock:{icon:`↟`,name:`Impulso de onda`,description:`Gala lanza dos discos contra el suelo para elevarse y avanzar con velocidad.`},fog:3424829,sky:2177596,accent:16729694,bounds:{x:30,z:49},start:[2,0,40],exit:[-2,0,-44],ally:!0,commander:`COMANDANTE SELIX`,targets:[{kind:`antenna`,label:`Antena de la estación`,position:[18,0,22],encounter:{soldiers:2,shooters:1}},{kind:`antenna`,label:`Repetidora de la plaza`,position:[-18,0,-3],encounter:{soldiers:3,shooters:1}},{kind:`antenna`,label:`Torre de comunicaciones`,position:[14,0,-29],encounter:{soldiers:2,shooters:2,commander:!0}}]},{id:3,title:`Las calles intervenidas`,location:`Barrio ferroviario de Auren`,theme:`railway`,story:`La señal conduce a otra ciudad. En Auren, las vías separan a los sobrevivientes y los altavoces alteran sus recuerdos. Ivo localiza tres transmisores ocultos entre depósitos y edificios.`,objective:`Destruí los transmisores y liberá el barrio ferroviario`,missionLabel:`TRANSMISORES`,unlock:{icon:`◌`,name:`Discos protectores`,description:`Tres discos orbitan a Gala, interceptan proyectiles y reducen el daño.`},fog:3420996,sky:2369083,accent:15220325,bounds:{x:31,z:50},start:[-3,0,41],exit:[3,0,-45],ally:!0,commander:`CORONEL BRAX`,targets:[{kind:`transmitter`,label:`Depósito del oeste`,position:[-20,0,19],encounter:{soldiers:3,shooters:1}},{kind:`transmitter`,label:`Paso ferroviario`,position:[2,0,-5],encounter:{soldiers:2,shooters:2,heavies:1}},{kind:`transmitter`,label:`Torre de control`,position:[20,0,-28],encounter:{soldiers:3,shooters:2,commander:!0}}]},{id:4,title:`La fábrica sumergida`,location:`Complejo Orpheon · Exterior`,theme:`factory`,story:`Las transmisiones convergen en Orpheon. El agua cubre parte del complejo y las máquinas siguen funcionando solas. Griox usa los generadores para proyectarse y convertir recuerdos en trampas.`,objective:`Apagá los generadores y enfrentá la proyección de Griox`,missionLabel:`GENERADORES`,unlock:{icon:`◎`,name:`Pulso resonante`,description:`Dos anillos consecutivos atraviesan blindajes y núcleos de energía.`},fog:3550519,sky:2695984,accent:16739125,bounds:{x:32,z:51},start:[0,0,42],exit:[0,0,-45],ally:!0,firstGriox:!0,commander:`TENIENTE DRAVOX`,targets:[{kind:`generator`,label:`Bomba hidráulica`,position:[-21,0,20],encounter:{soldiers:3,shooters:2}},{kind:`generator`,label:`Subestación Orpheon`,position:[20,0,1],encounter:{soldiers:3,shooters:1,heavies:1}},{kind:`generator`,label:`Puerta de carga`,position:[-13,0,-28],encounter:{soldiers:3,shooters:2,heavies:1,commander:!0}}]},{id:5,title:`El círculo incompleto`,location:`Núcleo de Orpheon`,theme:`core`,story:`Bien adentro de la fábrica, la materia de Griox crece sobre las paredes y copia cada onda perfecta. Gala deberá romper sus anclas mentales antes de enfrentarlo en el núcleo.`,objective:`Rompé las anclas mentales y destruí a Griox`,missionLabel:`ANCLAS`,unlock:{icon:`◔`,name:`Onda de ruptura`,description:`Impulso y pulso pueden combinarse para crear una onda imposible de copiar.`},fog:2957351,sky:1840411,accent:16723792,bounds:{x:27,z:48},start:[0,0,39],exit:[0,0,-40],ally:!0,finalBoss:!0,commander:`GUARDIA DEL NÚCLEO`,targets:[{kind:`anchor`,label:`Ancla de la memoria`,position:[-18,0,18],encounter:{soldiers:3,shooters:2,heavies:1}},{kind:`anchor`,label:`Ancla del miedo`,position:[18,0,-2],encounter:{soldiers:3,shooters:2,heavies:1}},{kind:`anchor`,label:`Ancla de la voluntad`,position:[-12,0,-27],encounter:{soldiers:4,shooters:2,heavies:1,commander:!0}}]}];function Cf(e){"@babel/helpers - typeof";return Cf=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Cf(e)}function wf(e,t){if(Cf(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Cf(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Tf(e){var t=wf(e,`string`);return Cf(t)==`symbol`?t:t+``}function Ef(e,t,n){return(t=Tf(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Df=new z(0,1,0);new z(0,0,-1);var Of=Wt.clamp,kf=`./zerath-gala-6.0.0.glb`,Af=`./zerath-militares-6.0.0.glb`,jf=class{constructor(){this.context=null,this.ambience=null,this.ambienceTimer=0,this.lastStep=0}unlock(){if(!this.context){let e=window.AudioContext||window.webkitAudioContext;e&&(this.context=new e)}this.context?.state===`suspended`&&this.context.resume()}tone(e,t,n=`sine`,r=.035,i=e){if(!this.context)return;let a=this.context.currentTime,o=this.context.createOscillator(),s=this.context.createGain();o.type=n,o.frequency.setValueAtTime(e,a),o.frequency.exponentialRampToValueAtTime(Math.max(30,i),a+t),s.gain.setValueAtTime(r,a),s.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(s).connect(this.context.destination),o.start(a),o.stop(a+t)}shot(){this.tone(170,.12,`sawtooth`,.026,70),this.tone(520,.09,`sine`,.018,260)}dash(){this.tone(80,.28,`sawtooth`,.045,390)}shield(){this.tone(220,.42,`sine`,.035,760)}impact(){this.tone(95,.1,`square`,.022,48)}hurt(){this.tone(78,.22,`sawtooth`,.03,42)}wave(){this.tone(145,.5,`sine`,.028,310)}noise(e=.5,t=.035,n=90){if(!this.context)return;let r=this.context.currentTime,i=Math.ceil(this.context.sampleRate*e),a=this.context.createBuffer(1,i,this.context.sampleRate),o=a.getChannelData(0);for(let e=0;e<i;e+=1)o[e]=(Math.random()*2-1)*(1-e/i);let s=this.context.createBufferSource(),c=this.context.createBiquadFilter(),l=this.context.createGain();s.buffer=a,c.type=`highpass`,c.frequency.value=n,l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(1e-4,r+e),s.connect(c).connect(l).connect(this.context.destination),s.start(r)}cue(e){this.context&&(e===`beam`?(this.tone(44,2.4,`sawtooth`,.055,118),this.tone(320,1.8,`sine`,.022,58),this.noise(2,.025,30)):e===`glass`?(this.noise(.7,.11,1700),[1480,2120,2790].forEach((e,t)=>setTimeout(()=>this.tone(e,.2,`triangle`,.018,420),t*55))):e===`crowd`?(this.noise(1.7,.025,380),this.tone(510,.8,`sawtooth`,.009,260),setTimeout(()=>this.tone(430,.9,`sawtooth`,.008,220),260)):e===`ally`?(this.tone(330,.35,`sine`,.025,660),setTimeout(()=>this.tone(495,.42,`sine`,.02,990),120)):e===`griox`&&(this.tone(72,1.2,`sawtooth`,.05,34),this.tone(137,1.5,`square`,.012,69)))}startAmbience(e=`city`){if(!this.context)return;this.stopAmbience();let t=this.context.createGain();t.gain.value=e===`core`?.019:e===`factory`?.015:.011,t.connect(this.context.destination);let n=this.context.createOscillator(),r=this.context.createOscillator();n.type=`sine`,r.type=e===`town`||e===`neighborhood`?`triangle`:`sine`,n.frequency.value=e===`core`?41:e===`factory`?47:55,r.frequency.value=e===`town`?146.8:e===`railway`?123.5:110,n.connect(t),r.connect(t),n.start(),r.start(),this.ambience={gain:t,bass:n,upper:r};let i=()=>{if(!this.ambience||!this.context)return;let t=e===`factory`||e===`core`;this.tone(t?64:82,t?.9:.55,`sine`,t?.011:.006,t?42:58),Math.random()>.57&&this.noise(.24,t?.006:.003,t?210:520),this.ambienceTimer=window.setTimeout(i,t?1900+Math.random()*1700:3100+Math.random()*2600)};this.ambienceTimer=window.setTimeout(i,900)}stopAmbience(){if(clearTimeout(this.ambienceTimer),this.ambienceTimer=0,!this.ambience)return;let e=this.context?.currentTime||0;this.ambience.gain.gain.cancelScheduledValues(e),this.ambience.gain.gain.setTargetAtTime(1e-4,e,.08),this.ambience.bass.stop(e+.45),this.ambience.upper.stop(e+.45),this.ambience=null}step(e=!1){this.context&&(this.tone(e?84:72,.055,`triangle`,e?.012:.008,48),this.noise(.045,e?.014:.009,90))}objective(e=`signal`){let t=e===`survivor`?420:e===`antenna`?360:250;this.tone(t,.45,`sine`,.025,t*1.8),setTimeout(()=>this.tone(t*1.5,.36,`triangle`,.018,t*2.15),110)}};function Mf(e){let t=e%2147483647;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}function Z(e,t,n=!0,r=!1){let i=new mi(e,t);return i.castShadow=n,i.receiveShadow=r,i}function Nf(e,t){e.rotation.y=Math.atan2(-t.x,-t.z)}function Pf(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t,n(r.getContext(`2d`),e,t);let i=new _a(r);return i.colorSpace=tt,i.wrapS=i.wrapT=u,i.anisotropy=4,i}function Ff(e){return Pf(512,1024,(t,n,r)=>{t.fillStyle=e===`town`?`#171b19`:`#111217`,t.fillRect(0,0,n,r);let i=Mf(951+e.length*19);for(let e=0;e<5200;e+=1){let e=Math.floor(18+i()*34);t.fillStyle=`rgba(${e},${e+1},${e+3},${.08+i()*.2})`,t.fillRect(i()*n,i()*r,1+i()*2.2,1+i()*2.2)}t.strokeStyle=`rgba(194,196,182,.5)`,t.lineWidth=5,t.setLineDash([54,50]),t.beginPath(),t.moveTo(n/2,0),t.lineTo(n/2,r),t.stroke(),t.setLineDash([]),t.strokeStyle=`rgba(6,7,9,.72)`,t.lineWidth=2;for(let e=0;e<18;e+=1){let e=i()*n,a=i()*r;t.beginPath(),t.moveTo(e,a);for(let n=0;n<5;n+=1)e+=(i()-.5)*44,a+=18+i()*44,t.lineTo(e,a);t.stroke()}})}function If(e,t=!1){return Pf(256,512,(n,r,i)=>{let a=Mf(e),o=n.createLinearGradient(0,0,r,i);o.addColorStop(0,t?`#211b17`:`#15191f`),o.addColorStop(1,`#080a0e`),n.fillStyle=o,n.fillRect(0,0,r,i);for(let e=18;e<i-12;e+=35)for(let i=14;i<r-10;i+=31)n.fillStyle=a()>.82?`rgba(255,${t?146:192},${t?82:160},${.28+a()*.45})`:`rgba(25,32,42,.7)`,n.fillRect(i,e,16,20),n.fillStyle=`rgba(0,0,0,.42)`,n.fillRect(i+7,e,2,20);n.fillStyle=`rgba(0,0,0,.22)`;for(let e=0;e<18;e+=1)n.fillRect(a()*r,0,1+a()*3,i)})}function Lf(e,t){return Pf(256,256,(n,r,i)=>{let a=Mf(e*31+17);n.fillStyle=`#${t.toString(16).padStart(6,`0`)}`,n.fillRect(0,0,r,i);for(let e=0;e<4400;e+=1){let e=a()>.5?255:0;n.fillStyle=`rgba(${e},${e},${e},${.012+a()*.038})`;let t=.5+a()*2.2;n.fillRect(a()*r,a()*i,t,t)}let o=n.createLinearGradient(0,0,0,i);o.addColorStop(0,`rgba(0,0,0,.03)`),o.addColorStop(.66,`rgba(0,0,0,.06)`),o.addColorStop(1,`rgba(19,24,22,.34)`),n.fillStyle=o,n.fillRect(0,0,r,i),n.strokeStyle=`rgba(33,28,26,.32)`,n.lineWidth=1.2;for(let e=0;e<7;e+=1){let e=a()*r,t=a()*i;n.beginPath(),n.moveTo(e,t);for(let r=0;r<4;r+=1)e+=(a()-.5)*20,t+=9+a()*22,n.lineTo(e,t);n.stroke()}})}function Rf(e){return Pf(256,256,(t,n,r)=>{let i=Mf(e*53+29),a=e%2!=0;t.fillStyle=a?`#4a302d`:`#343b3e`,t.fillRect(0,0,n,r);for(let e=-24;e<r+24;e+=24){let r=Math.floor(e/24)%2*22;for(let o=-44;o<n+44;o+=44){let n=Math.floor(22+i()*24);t.fillStyle=a?`rgba(${n+42},${n+16},${n+11},.28)`:`rgba(${n+15},${n+20},${n+22},.3)`,t.fillRect(o+r+1,e+1,42,22),t.strokeStyle=`rgba(0,0,0,.38)`,t.strokeRect(o+r,e,44,24)}}})}function zf(e){return Pf(192,192,(t,n,r)=>{let i=Mf(e*97+43);t.fillStyle=`#244a36`,t.fillRect(0,0,n,r);for(let e=0;e<820;e+=1){let e=62+Math.floor(i()*48);t.fillStyle=`rgba(${24+Math.floor(i()*24)},${e},${42+Math.floor(i()*25)},${.25+i()*.48})`,t.beginPath(),t.ellipse(i()*n,i()*r,1.2+i()*3.7,.7+i()*2,i()*Math.PI,0,Math.PI*2),t.fill()}})}function Bf(e){return Pf(512,512,(t,n,r)=>{let i=e===`neighborhood`||e===`town`,a=Mf(1409+e.length*113);t.fillStyle=i?e===`town`?`#34423a`:`#3b493e`:e===`core`?`#2d292e`:`#34383d`,t.fillRect(0,0,n,r);for(let e=0;e<9e3;e+=1){let e=a()*n,o=a()*r;if(i){let n=55+Math.floor(a()*44);t.strokeStyle=`rgba(${34+Math.floor(a()*26)},${n},${38+Math.floor(a()*24)},${.16+a()*.3})`,t.lineWidth=.5+a(),t.beginPath(),t.moveTo(e,o),t.lineTo(e+(a()-.5)*2.5,o-1.5-a()*4),t.stroke()}else{let n=46+Math.floor(a()*45);t.fillStyle=`rgba(${n},${n},${n+2},${.08+a()*.2})`,t.fillRect(e,o,.6+a()*2.4,.6+a()*2.4)}}t.strokeStyle=i?`rgba(38,29,24,.25)`:`rgba(12,13,15,.35)`,t.lineWidth=1.3;for(let e=0;e<12;e+=1){let e=a()*n,i=a()*r;t.beginPath(),t.moveTo(e,i);for(let n=0;n<6;n+=1)e+=(a()-.5)*42,i+=12+a()*35,t.lineTo(e,i);t.stroke()}})}var Vf=class{constructor(e,t={}){Ef(this,`animate`,()=>{requestAnimationFrame(this.animate);let e=Math.min(this.clock.getDelta(),.035);if(this.updateAmbient(e),this.state===`playing`){this.elapsed+=e,this.updatePlayer(e),this.updateEnemies(e),this.updateAlly(e),this.updatePickups(e),this.updateProjectiles(e),this.updateEffects(e),this.checkProgress();let t=this.elapsed*1000;if(this.pendingWaveAt>0&&t>=this.pendingWaveAt&&(this.pendingWaveAt=0,this.spawnWave()),this.pendingGrioxAt>0&&t>=this.pendingGrioxAt&&(this.pendingGrioxAt=0,this.spawnGriox()),this.pendingFinishAt>0&&t>=this.pendingFinishAt&&(this.pendingFinishAt=0,this.finish(!0)),t-this.lastHudAt>90){this.lastHudAt=t,this.callbacks.onHud?.(this.hudState()),this.callbacks.onPowerChange?.(this.powerState());let e=this.missionTargets.filter(e=>e.userData.state===`available`).sort((e,t)=>e.position.distanceToSquared(this.player.position)-t.position.distanceToSquared(this.player.position))[0];this.callbacks.onRoute?.({progress:this.routeProgress(),checkpoint:this.completedObjectives,total:this.missionTargets.length,mode:this.enemies.length?`combat`:this.exitOpen?`exit`:`explore`,label:this.activeTarget?.userData.label||e?.userData.label||`EXPLORÁ EL ÁREA`})}}else if(this.state===`menu`)this.updateEffects(e);this.updateCamera(e),this.renderer.render(this.scene,this.camera)}),this.mount=e,this.callbacks=t,this.isTouch=matchMedia(`(hover: none), (pointer: coarse)`).matches,this.sound=new jf,this.clock=new Bs,this.keys=new Set,this.joystick=new R,this.cameraYaw=0,this.cameraPitch=.12,this.cameraDistance=this.isTouch?innerHeight>innerWidth?6.2:5.45:5.05,this.state=`menu`,this.levelIndex=0,this.health=100,this.echo=100,this.elapsed=0,this.kills=0,this.wave=0,this.completedObjectives=0,this.missionTargets=[],this.activeTarget=null,this.exitMarker=null,this.exitOpen=!1,this.enemies=[],this.projectiles=[],this.effects=[],this.ambient=[],this.pendingWaveAt=0,this.pendingGrioxAt=0,this.pendingFinishAt=0,this.grioxSpawned=!1,this.shotCooldown=0,this.dashCooldown=0,this.shieldCooldown=0,this.shieldTime=0,this.shootHeld=!1,this.velocityY=0,this.grounded=!0,this.airDashUsed=!1,this.dashTime=0,this.dashDirection=new z,this.lastDashAt=-1e4,this.lastImperfectHint=-1e4,this.lastHudAt=0,this.mainBoss=null,this.colliders=[],this.pickups=[],this.routeObjects=[],this.ally=null,this.playerRecoil=0,this.playerHurt=0,this.lastFootstep=-1,this.shotHand=0,this.runCycle=0,this.moveBlend=0,this.sprintBlend=0,this.stepSide=0,this.worldToken=0,this.gltfLoader=new yd,this.modelAssets=new Map,this.sharedModelGeometries=new Set,this.sharedModelMaterials=new Set,this.sharedModelTextures=new Set,this.galaMotionClips=null,this.renderer=new ld({antialias:!this.isTouch,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.isTouch?1.45:1.9)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.outputColorSpace=tt,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.56,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.mount.appendChild(this.renderer.domElement),this.camera=new ls(49,innerWidth/innerHeight,.1,220),this.cameraFill=new ps(14478591,this.isTouch?5.8:4.6,15,1.75),this.cameraFill.position.set(0,.4,-.8),this.camera.add(this.cameraFill),this.createSharedAssets(),this.buildWorld(0),this.bindSystemEvents(),this.animate()}createSharedAssets(){this.geometries={projectile:new io(.34,.055,8,24),enemyBullet:new ro(.12,8,8),body:new xa(.38,.78,4,8),head:new ro(.31,14,10),limb:new xa(.12,.58,3,7),hand:new ro(.15,10,8),soldierBody:new K(.72,1.05,.4),soldierHead:new ro(.29,10,8),soldierLimb:new K(.18,.76,.2)},this.materials={galaCloth:new q({color:1512474,roughness:.82,metalness:.1}),galaDark:new q({color:526090,roughness:.92}),skin:new q({color:9132632,roughness:.9}),redEnergy:new G({color:16724043,transparent:!0,opacity:.9,blending:2,depthWrite:!1}),greenEnergy:new G({color:7929653,transparent:!0,opacity:.94,blending:2,depthWrite:!1}),whiteEnergy:new G({color:16771562,transparent:!0,opacity:.92,blending:2,depthWrite:!1}),military:new q({color:2239272,roughness:.76,metalness:.28}),militaryDark:new q({color:724750,roughness:.74,metalness:.36}),visor:new G({color:13833521})}}bindSystemEvents(){addEventListener(`resize`,()=>this.resize()),addEventListener(`keydown`,e=>{this.keys.add(e.code),(e.code===`KeyQ`||e.code===`Space`)&&(e.preventDefault(),this.tryDash()),e.code===`KeyE`&&this.tryShield(),(e.code===`Escape`||e.code===`KeyP`)&&this.callbacks.onPauseRequest&&this.callbacks.onPauseRequest()}),addEventListener(`keyup`,e=>this.keys.delete(e.code)),addEventListener(`blur`,()=>{this.keys.clear(),this.shootHeld=!1})}bindCanvasControls(){let e=this.renderer.domElement,t=!1,n=0,r=0;e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`pointerdown`,i=>{this.state===`playing`&&i.pointerType===`mouse`&&(this.sound.unlock(),i.button===0&&this.setShootHeld(!0),i.button===2&&(t=!0,n=i.clientX,r=i.clientY,e.setPointerCapture(i.pointerId)))}),e.addEventListener(`pointermove`,e=>{t&&(this.addLook(e.clientX-n,e.clientY-r),n=e.clientX,r=e.clientY)});let i=e=>{e.pointerType===`mouse`&&(e.button===0&&this.setShootHeld(!1),e.button===2&&(t=!1))};e.addEventListener(`pointerup`,i),e.addEventListener(`pointercancel`,i),e.addEventListener(`wheel`,e=>{this.cameraDistance=Of(this.cameraDistance+Math.sign(e.deltaY)*.45,3.9,8.5)},{passive:!0})}resize(){this.camera.aspect=innerWidth/innerHeight,this.isTouch&&(this.cameraDistance=innerHeight>innerWidth?6.2:5.45),this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.isTouch?1.45:1.9))}disposeWorld(){if(!this.scene)return;let e=new Set(Object.values(this.geometries||{})),t=new Set(Object.values(this.materials||{}));this.scene.traverse(n=>{n.geometry&&!e.has(n.geometry)&&!this.sharedModelGeometries.has(n.geometry)&&n.geometry.dispose?.(),(Array.isArray(n.material)?n.material:n.material?[n.material]:[]).forEach(e=>{t.has(e)||this.sharedModelMaterials.has(e)||(e.map&&!this.sharedModelTextures.has(e.map)&&e.map.dispose?.(),e.normalMap&&!this.sharedModelTextures.has(e.normalMap)&&e.normalMap.dispose?.(),e.roughnessMap&&!this.sharedModelTextures.has(e.roughnessMap)&&e.roughnessMap.dispose?.(),e.metalnessMap&&!this.sharedModelTextures.has(e.metalnessMap)&&e.metalnessMap.dispose?.(),e.dispose?.())})})}buildWorld(e){let t=Sf[e];this.disposeWorld(),this.worldToken+=1;let n=this.worldToken;this.scene=new Yn,this.scene.background=new W(t.sky),this.scene.fog=new Jn(t.fog,t.theme===`core`?.0095:.00435),this.enemies=[],this.projectiles=[],this.effects=[],this.ambient=[],this.colliders=[],this.pickups=[],this.routeObjects=[],this.missionTargets=[],this.completedObjectives=0,this.activeTarget=null,this.exitMarker=null,this.exitOpen=!1,this.ally=null,this.mainBoss=null;let r=t.theme!==`core`;r&&this.addSkyDome(t);let i=new Zo(r?13099764:11376554,t.theme===`core`?3481641:3817534,r?2.85:2.15);this.scene.add(i);let a=new gs(r?16120063:16769503,r?4.45:3.65);a.position.set(-22,34,24),a.castShadow=!0,a.shadow.mapSize.set(this.isTouch?512:1024,this.isTouch?512:1024),a.shadow.camera.left=-35,a.shadow.camera.right=35,a.shadow.camera.top=38,a.shadow.camera.bottom=-32,a.shadow.camera.far=120,this.scene.add(a);let o=new gs(9354195,r?1.78:1.05);o.position.set(24,12,-30),this.scene.add(o);let s=new ps(t.accent,r?24:34,62,1.5);s.position.set(0,r?7:5,-24),this.scene.add(s),this.scene.add(this.camera);let c=Bf(t.theme);c.repeat.set(10,16);let l=Z(new no(72,112),new q({map:c,bumpMap:c,bumpScale:.035,color:12765123,roughness:.92,metalness:t.theme===`core`?.22:.04}),!1,!0);if(l.rotation.x=-Math.PI/2,this.scene.add(l),this.addEnvironment(e),this.addRubble(e),this.addAsh(e),t.theme===`railway`&&this.addHelicopter(),t.theme===`core`&&this.addMineMatter(),this.addPickups(e),this.addMissionTargets(t),e===0){let e=Z(new Ca(.7,3.1,74,18,1,!0),new G({color:3604450,transparent:!0,opacity:.16,blending:2,side:2,depthWrite:!1}),!1);e.position.set(-7,35,-46),this.scene.add(e);let t=new ps(4587496,28,80,1.1);t.position.set(-7,18,-43),this.scene.add(t),this.ambient.push({kind:`beam`,object:e,light:t})}this.player=this.createGala(),this.player.position.fromArray(t.start),this.scene.add(this.player),this.upgradeGalaModel(this.player,n),this.createShieldVisual(),t.ally&&this.createAlly(),this.camera.position.copy(this.player.position).add(new z(0,3.2,6)),this.updateCamera(1)}loadModelAsset(e){if(this.modelAssets.has(e))return this.modelAssets.get(e);let t=new Promise((t,n)=>{this.gltfLoader.load(e,e=>{e.scene.traverse(e=>{e.isMesh&&(e.geometry&&this.sharedModelGeometries.add(e.geometry),(Array.isArray(e.material)?e.material:[e.material]).filter(Boolean).forEach(e=>{this.sharedModelMaterials.add(e),Object.values(e).forEach(t=>{t?.isTexture&&(t.colorSpace=t===e.map?tt:t.colorSpace,t.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.sharedModelTextures.add(t))})}))}),t(e)},void 0,n)}).catch(t=>{throw this.modelAssets.delete(e),t});return this.modelAssets.set(e,t),t}createGalaDiffuseTexture(e){if(this.galaDiffuseTexture)return this.galaDiffuseTexture;let t=e?.image;if(!t?.width||!t?.height)return e;try{let n=document.createElement(`canvas`);n.width=t.width,n.height=t.height;let r=n.getContext(`2d`,{willReadFrequently:!0});r.drawImage(t,0,0);let i=r.getImageData(0,0,n.width,n.height),a=i.data;for(let e=0;e<a.length;e+=4){let t=a[e],n=a[e+1],r=a[e+2],i=t>145&&n>105&&r<115&&t<n*1.65,o=t>48&&t>n*1.18&&n>r*1.08&&!(t>135&&n<72);if(i){let i=(t+n+r)/3;a[e]=24+i*.1,a[e+1]=25+i*.085,a[e+2]=31+i*.1}else if(o){let i=(t+n+r)/3;a[e]=Math.min(208,112+i*.43),a[e+1]=Math.min(158,72+i*.34),a[e+2]=Math.min(143,64+i*.3)}}r.putImageData(i,0,0);let o=new _a(n);return o.colorSpace=tt,o.flipY=e.flipY,o.wrapS=e.wrapS,o.wrapT=e.wrapT,o.minFilter=e.minFilter,o.magFilter=e.magFilter,o.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),o.needsUpdate=!0,this.galaDiffuseTexture=o,this.sharedModelTextures.add(o),o}catch(t){return console.warn(`No se pudo aplicar la paleta visual de Gala.`,t),e}}prepareHumanVisual(e,t,n=`gala`){let r=md(e),i=new U;i.rotation.y=Math.PI,i.add(r),i.updateMatrixWorld(!0);let a=new ur().setFromObject(i),o=a.getSize(new z),s=a.getCenter(new z),c=t/Math.max(.01,o.y);return i.scale.setScalar(c),i.position.set(-s.x*c,-a.min.y*c,-s.z*c),r.traverse(e=>{if(!e.isMesh)return;e.castShadow=!0,e.receiveShadow=!0;let t=(Array.isArray(e.material)?e.material:[e.material]).map(e=>{let t=e.clone();return`roughness`in t&&(t.roughness=Math.max(n===`gala`?.5:.66,t.roughness)),`metalness`in t&&(t.metalness=Math.min(n===`gala`?.26:.18,t.metalness)),`envMapIntensity`in t&&(t.envMapIntensity=n===`gala`?.75:.55),n===`gala`&&t.map&&(t.map=this.createGalaDiffuseTexture(t.map),t.color?.setHex(16777215)),t.needsUpdate=!0,t});e.material=Array.isArray(e.material)?t:t[0]}),i.updateMatrixWorld(!0),{visual:i,model:r}}createHandPower(e){let t=new U,n=[],r=new ps(16722247,4.8,4.2,2);t.add(r);let i=Z(new io(.22,.021,8,36),new G({color:16726871,transparent:!0,opacity:.96,blending:2,depthWrite:!1}),!1);i.rotation.y=e*.22,t.add(i),n.push(i);for(let r=0;r<3;r+=1){let i=Z(new io(.12+r*.036,.007,5,22,Math.PI*(1.05+r*.12)),new G({color:r===1?16751186:16721736,transparent:!0,opacity:.82,blending:2,depthWrite:!1}),!1);i.rotation.set(r*.65,e*(.34+r*.22),r*1.14),t.add(i),n.push(i)}return{anchor:t,rings:n}}findSkinnedMesh(e){let t=null;return e.traverse(e=>{!t&&e.isSkinnedMesh&&(t=e)}),t}buildGalaMotionClips(e,t){if(this.galaMotionClips)return this.galaMotionClips;let n=md(t.scene),r=this.findSkinnedMesh(n);if(!e||!r)return null;let i={};for(let n of[`Idle`,`Walk`,`Run`]){let a=t.animations.find(e=>e.name.toLowerCase()===n.toLowerCase());a&&(i[n.toLowerCase()]=pd(e,r,a,{hip:`mixamorigHips`,getBoneName:e=>e.name,preserveBonePositions:!0,preserveBoneMatrix:!0,useFirstFramePosition:!0,hipInfluence:new z(0,1,0)}))}return this.galaMotionClips=i,i}setRigAction(e,t,n=.22){if(!e?.actions||e.currentAction===t||!e.actions[t])return;let r=e.actions[e.currentAction],i=e.actions[t];n<=0||!r?(r?.stop(),i.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play()):(r.fadeOut(n),i.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(n).play()),e.currentAction=t}async upgradeGalaModel(e,t){try{let[n,r]=await Promise.all([this.loadModelAsset(kf),this.loadModelAsset(Af)]);if(t!==this.worldToken||e!==this.player||!e.parent)return;let{visual:i,model:a}=this.prepareHumanVisual(n.scene,2.16,`gala`),o=this.findSkinnedMesh(a),s=this.buildGalaMotionClips(o,r),c=o&&s?new zs(o):null,l={};c&&Object.entries(s).forEach(([e,t])=>{l[e]=c.clipAction(t)});let u=[],d=[];for(let[e,t]of[[-1,`mixamorigLeftHand`],[1,`mixamorigRightHand`]]){let n=a.getObjectByName(t);if(!n)continue;let r=this.createHandPower(e);n.add(r.anchor),u.push(r.anchor),d.push(...r.rings)}e.add(i),e.userData.bodyRoot.visible=!1,u.length===2&&(e.userData.hands=u,e.userData.energyRings=d),e.userData.realRig={visual:i,model:a,skinned:o,mixer:c,actions:l,currentAction:null},this.setRigAction(e.userData.realRig,`idle`,0),c?.update(1/60),this.callbacks.onToast?.(`MODELO HUMANO Y ANIMACIONES CARGADOS`)}catch(e){console.warn(`No se pudo cargar el modelo humano de Gala; se mantiene el modelo compatible.`,e),this.modelWarningShown||(this.modelWarningShown=!0,this.callbacks.onToast?.(`CONEXIÓN LENTA · USANDO MODELO COMPATIBLE`))}}async upgradeMilitaryModel(e,t){try{let n=await this.loadModelAsset(Af);if(t!==this.worldToken||!e.parent)return;let r=e.userData.type===`heavy`?2.28:e.userData.type===`commander`?2.36:2.02,{visual:i,model:a}=this.prepareHumanVisual(n.scene,r,`military`);a.traverse(t=>{t.isMesh&&(Array.isArray(t.material)?t.material:[t.material]).forEach(t=>{t.color&&(e.userData.type===`commander`?t.color.multiply(new W(.78,.38,.42)):e.userData.type===`heavy`?t.color.multiply(new W(.62,.68,.62)):e.userData.type===`shooter`&&t.color.multiply(new W(.7,.78,.86)))})});let o=new zs(a),s={};for(let e of n.animations){let t=e.name.toLowerCase();(t===`idle`||t===`walk`||t===`run`)&&(s[t]=o.clipAction(e))}if(e.userData.fallbackChildren.forEach(e=>{e.visible=!1}),e.add(i),e.userData.realRig={visual:i,model:a,mixer:o,actions:s,currentAction:null},this.setRigAction(e.userData.realRig,`idle`,0),e.userData.type===`commander`){let t=Z(new io(.72,.035,8,40),new G({color:16726356,transparent:!0,opacity:.72,blending:2,depthWrite:!1}),!1);t.rotation.x=Math.PI/2,t.position.y=.08,e.add(t),e.userData.commanderAura=t}}catch(e){console.warn(`No se pudo cargar el modelo militar; se mantiene el modelo compatible.`,e)}}addSkyDome(e){let t=new W(e.sky).multiplyScalar(.72),n=new W(e.theme===`town`||e.theme===`neighborhood`?7243666:e.theme===`factory`?7755616:6054008),r=Z(new ro(105,28,18),new ho({uniforms:{topColor:{value:t},horizonColor:{value:n}},vertexShader:`varying float vHeight; void main(){ vHeight = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`uniform vec3 topColor; uniform vec3 horizonColor; varying float vHeight; void main(){ float h=smoothstep(-0.18,0.68,vHeight); gl_FragColor=vec4(mix(horizonColor,topColor,h),1.0); }`,side:1,depthWrite:!1}),!1);this.scene.add(r);let i=Z(new ro(2.1,24,18),new G({color:14214893}),!1);i.position.set(-42,42,-72),this.scene.add(i);for(let e=0;e<5;e+=1){let t=Z(new no(25+e*4,4.5+e%2*1.8),new G({color:11845830,transparent:!0,opacity:.07+e%2*.025,depthWrite:!1,side:2}),!1);t.position.set(-45+e*22,24+e%3*5,-72+e%2*9),this.scene.add(t),this.ambient.push({kind:`cloud`,object:t,offset:e})}}addEnvironment(e){let t=Sf[e].theme;t===`neighborhood`?this.addNeighborhood():t===`town`?this.addTown():t===`railway`?this.addRailwayDistrict():t===`factory`?this.addFactoryYard():this.addFactoryCore(),this.addPuddlesAndFire(e)}addRoad(e,t,n,r,i=0){let a=Ff(Sf[this.levelIndex].theme);a.repeat.set(Math.max(1,n/11),Math.max(1,r/22));let o=Z(new no(n,r),new q({map:a,color:12830926,roughness:.62,metalness:.18}),!1,!0);o.rotation.x=-Math.PI/2,o.rotation.z=i,o.position.set(e,.018,t),this.scene.add(o)}addNeighborhood(){this.addRoad(0,0,12,104),this.addRoad(0,9,54,10,Math.PI/2),this.addRoad(0,-24,54,9,Math.PI/2);let e=[[-19,34,.05],[18,33,-.08],[-19,20,-.04],[20,19,.04],[-20,-2,.04],[19,-5,-.05],[-20,-19,-.03],[20,-23,.05],[-20,-38,.04],[20,-39,-.03]];e.forEach(([e,t,n],r)=>this.createHouse(e,t,n,300+r)),e.forEach(([e,t],n)=>{this.createShrub(e+(n%2?-4:4),t-2.8,.85+n%3*.1,120+n),this.createShrub(e+(n%2?3.6:-3.6),t+2.4,.7+n%2*.12,140+n)}),[-13,-8,8,14].forEach((e,t)=>this.createTree(e,-31+t%2*9,.92+t*.04,t)),[-11,11].forEach((e,t)=>this.createTree(e,29-t*13,.82,10+t)),this.createPlayground(-13,-25),this.createBusStop(15,2),[[-5,31],[5,19],[-4,-12],[4,-35]].forEach(([e,t],n)=>this.createStreetLight(e,t,e>0?1:-1,n)),this.createCar(-3.7,24,2702159,.04),this.createCar(4,-14,7876925,-.08),this.createCar(-4,-38,4606030,.12)}addTown(){this.addRoad(0,0,13,106),this.addRoad(0,0,58,11,Math.PI/2);let e=Z(new Ca(12,12,.18,32),new q({color:7828589,roughness:.88}),!1,!0);e.position.y=.05,this.scene.add(e);let t=0;for(let e of[-40,-25,-11,15,29,42])[-1,1].forEach(n=>{this.createHouse(n*(22.5+t%2*1.2),e,n*-.04,510+t,.88+t%3*.07),t+=1});for(let e=0;e<18;e+=1){let t=e/18*Math.PI*2;this.createTree(Math.sin(t)*(15+e%2*7),Math.cos(t)*(19+e%3*5),.74+e%4*.07,30+e)}let n=Z(new Ca(2.4,2.7,.55,28),new q({color:9277323,roughness:.75}),!0,!0);n.position.set(0,.28,0),this.scene.add(n);let r=Z(new Ca(2.08,2.08,.08,28),new _o({color:5080216,roughness:.15,metalness:.2,transparent:!0,opacity:.78}),!1);r.position.set(0,.57,0),this.scene.add(r),this.ambient.push({kind:`water`,object:r,offset:0}),this.createCar(4,31,3229018,.03),this.createCar(-4,-34,6172715,-.05)}addRailwayDistrict(){this.addRoad(0,0,12,106),this.addRoad(0,19,60,10,Math.PI/2),this.addRoad(0,-26,60,9,Math.PI/2);let e=Z(new no(17,106),new q({color:4012603,roughness:1}),!1,!0);e.rotation.x=-Math.PI/2,e.position.set(-14,.03,0),this.scene.add(e);let t=new q({color:9607068,roughness:.42,metalness:.86});[-17,-11].forEach(e=>{let n=Z(new K(.12,.12,104),t,!1,!0);n.position.set(e,.12,0),this.scene.add(n)});let n=new q({color:3876894,roughness:.96});for(let e=-48;e<=48;e+=1.9){let t=Z(new K(8.4,.12,.32),n,!1,!0);t.position.set(-14,.08,e),this.scene.add(t)}for(let e=-41,t=0;e<=41;e+=16,t+=1)this.createBuilding(25,e,11,11,10+t%3*4,1,710+t,!1),t%2==0&&this.createTree(7,e+4,.82,70+t);this.createFactoryUnit(-27,21,-1,Mf(812)),this.createFactoryUnit(-27,-27,-1,Mf(813)),this.createCar(4,30,2504e3,.04),this.createCar(4,-16,7683122,-.07)}addFactoryYard(){this.addRoad(0,0,16,108),this.addRoad(0,5,61,14,Math.PI/2);let e=Mf(931);[[-27,31,-1],[27,28,1],[-28,4,-1],[28,-4,1],[-27,-31,-1],[27,-34,1]].forEach(([t,n,r])=>this.createFactoryUnit(t,n,r,e));let t=[9582893,3362658,7427886];[[-13,33],[14,25],[-19,-9],[19,-24]].forEach(([e,n],r)=>{let i=Z(new K(5.8,2.6,2.4),new q({color:t[r%3],roughness:.7,metalness:.5}),!0,!0);i.position.set(e,1.3,n),i.rotation.y=r%2?Math.PI/2:0,this.scene.add(i),this.colliders.push({x:e,z:n,radius:2.3})});for(let e=0;e<8;e+=1)this.createStreetLight((e%2?1:-1)*9,41-e*12,e%2?1:-1,100+e)}addFactoryCore(){let e=new q({color:4604232,roughness:.5,metalness:.52});for(let t=-45;t<=45;t+=6)for(let n=-24;n<=24;n+=6){let r=Z(new K(5.82,.16,5.82),e,!1,!0);r.position.set(n,.05,t),this.scene.add(r)}let t=new q({color:3748922,roughness:.58,metalness:.58}),n=Z(new K(64,.8,106),t,!1,!0);n.position.set(0,12,0),this.scene.add(n),[-30,30].forEach(e=>{let n=Z(new K(3,17,106),t,!0,!0);n.position.set(e,8.5,0),this.scene.add(n)}),[-52,52].forEach(e=>{let n=Z(new K(64,17,2.5),t,!0,!0);n.position.set(0,8.5,e),this.scene.add(n)});for(let e=-42,n=0;e<=42;e+=12,n+=1){[-1,1].forEach(r=>{let i=Z(new Ca(.72,.92,9,12),t,!0,!0);i.position.set(r*22,4.5,e),this.scene.add(i);let a=new ps(n%2?16726355:14018805,8,16,1.7);a.position.set(r*20,5.4,e),this.scene.add(a)});let r=Z(new K(5.5,.14,.34),new G({color:n%2?16744592:15201535}),!1);r.position.set(0,11.45,e),this.scene.add(r)}let r=Z(new io(13,.28,12,64),new q({color:7304315,emissive:3277324,emissiveIntensity:1.4,metalness:.72,roughness:.3}),!0);r.rotation.x=Math.PI/2,r.position.set(0,.18,-34),this.scene.add(r),this.ambient.push({kind:`coreRing`,object:r,offset:0})}createHouse(e,t,n,r,i=1){let a=Mf(r),o=new U,s=[11968909,10464168,11570563,9018257][r%4],c=Lf(r,s);c.repeat.set(2.2,1.35);let l=new q({map:c,bumpMap:c,bumpScale:.028,color:15196892,roughness:.89}),u=Z(new K(7.4,4.2,6.2),l,!0,!0);u.position.y=2.1,o.add(u);let d=Rf(r);d.repeat.set(2.8,2.2);let f=Z(new wa(5.25,2.25,4),new q({map:d,bumpMap:d,bumpScale:.045,color:14078410,roughness:.92}),!0);f.position.y=5.2,f.rotation.y=Math.PI/4,o.add(f);let p=Z(new K(7.5,.38,6.3),new q({color:5591373,roughness:.96}),!0,!0);p.position.y=.19,o.add(p);let m=new q({color:r%2?3942691:2634298,roughness:.78,metalness:.08}),h=Z(new xf(1.1,2.05,.12,2,.035),m,!0);h.position.set(0,1.05,-3.16),o.add(h);let g=new q({color:12696240,roughness:.83});[-.61,.61].forEach(e=>{let t=Z(new K(.09,2.2,.1),g);t.position.set(e,1.1,-3.23),o.add(t)});let _=Z(new K(1.31,.1,.1),g);_.position.set(0,2.18,-3.23),o.add(_);let v=Z(new ro(.045,10,8),new q({color:12888686,metalness:.88,roughness:.28}),!1);v.position.set(.39,1.03,-3.25),o.add(v);let y=new q({color:13223869,roughness:.7,metalness:.04});[-2.25,2.25].forEach((e,t)=>{let n=Z(new no(1.38,1.28),new _o({color:a()>.35?11106632:2376275,emissive:a()>.46?6959636:397594,emissiveIntensity:.62,roughness:.08,metalness:.26,transparent:!0,opacity:.9}),!1);n.position.set(e,2.25,-3.172),o.add(n);let i=Z(new K(1.58,.085,.1),y);i.position.set(e,2.92,-3.23),o.add(i);let s=i.clone();s.position.y=1.58,o.add(s),[-.75,.75].forEach(t=>{let n=Z(new K(.085,1.43,.1),y);n.position.set(e+t,2.25,-3.23),o.add(n)});let c=Z(new K(.06,1.3,.08),y,!1);c.position.set(e,2.25,-3.24),o.add(c);let l=Z(new K(1.4,.055,.08),y,!1);if(l.position.set(e,2.25,-3.24),o.add(l),t===0&&r%3==0){let t=Z(new no(.25,1.2),new G({color:9316148,transparent:!0,opacity:.8}),!1);t.position.set(e-.34,2.25,-3.185),o.add(t)}});let b=Z(new K(3.1,.22,1.35),new q({color:7827562,roughness:.95}),!0,!0);b.position.set(0,.12,-3.55),o.add(b);let x=Z(new K(2.15,.16,.62),new q({color:6775647,roughness:.98}),!0,!0);x.position.set(0,.08,-4.22),o.add(x);let S=Z(new K(.62,1.45,.68),new q({color:6114372,roughness:.96}),!0);S.position.set(r%2?-2.1:2.1,5.52,.72),o.add(S),o.position.set(e,0,t),o.rotation.y=(e<0?-Math.PI/2:Math.PI/2)+n,o.scale.setScalar(i),this.scene.add(o),this.colliders.push({x:e,z:t,radius:3.05*i})}createPlayground(e,t){let n=new q({color:9250358,roughness:.6,metalness:.48}),r=Z(new K(4.4,.14,.14),n);r.position.set(e,2.7,t),this.scene.add(r),[-1,1].forEach(r=>{let i=Z(new Ca(.09,.09,2.8,9),n);i.position.set(e+r*2.05,1.4,t),this.scene.add(i);let a=Z(new Ca(.025,.025,1.7,6),new q({color:8751502,metalness:.8,roughness:.35}));a.position.set(e+r*.75,1.8,t),this.scene.add(a)})}createBusStop(e,t){let n=new _o({color:7902112,transparent:!0,opacity:.42,roughness:.12,metalness:.25}),r=Z(new K(4.3,2.8,.12),n,!0);r.position.set(e,1.4,t+1.2),this.scene.add(r);let i=Z(new K(4.5,.12,1.6),new q({color:4541780,roughness:.5,metalness:.64}));i.position.set(e,2.85,t+.55),this.scene.add(i);let a=Z(new K(3,.18,.55),new q({color:6900018,roughness:.9}));a.position.set(e,.65,t+.55),this.scene.add(a)}addPuddlesAndFire(e){let t=Sf[e],n=Mf(1103+e*67),r=new _o({color:4350579,roughness:.12,metalness:.38,transparent:!0,opacity:.52});for(let e=0;e<(this.isTouch?10:16);e+=1){let e=Z(new Sa(.7+n()*1.6,18),r,!1);e.scale.x=1.2+n()*1.9,e.rotation.x=-Math.PI/2,e.position.set((n()-.5)*48,.035,-45+n()*90),this.scene.add(e)}let i=t.theme===`neighborhood`||t.theme===`town`?3:5;for(let e=0;e<i;e+=1){let t=Z(new wa(.18+n()*.13,.7+n(),8),new G({color:16742954,transparent:!0,opacity:.9}),!1);t.position.set((n()-.5)*48,.48,-42+n()*84),this.scene.add(t);let r=new ps(16729375,7,12,2);r.position.copy(t.position).add(new z(0,1,0)),this.scene.add(r),this.ambient.push({kind:`fire`,object:t,light:r,offset:e})}}createBuilding(e,t,n,r,i,a,o,s=!1){let c=If(o,s);c.repeat.set(Math.max(1,n/6),Math.max(1,i/9));let l=new q({map:c,color:s?13154468:9870760,roughness:.78,metalness:.16}),u=Z(new K(n,i,r),l,!0,!0);u.position.set(e,i/2-(o%5==0?.5:0),t),u.rotation.z=o%11==0?a*.018:0,this.scene.add(u),this.colliders.push({x:e,z:t,radius:Math.min(n,r)*.43});let d=Z(new no(n*.93,i*.9),new G({map:c,color:16777215,transparent:!0,opacity:.82}),!1);if(d.position.set(e-a*(n/2+.015),Math.max(2.3,i/2),t),d.rotation.y=a>0?-Math.PI/2:Math.PI/2,this.scene.add(d),s){let a=Z(new wa(Math.max(n,r)*.7,2.1,4),new q({color:2103065,roughness:.95}));a.position.set(e,i+.9,t),a.rotation.y=Math.PI/4,this.scene.add(a)}else if(o%3==0){let n=Z(new Ca(.04,.07,3.5,7),new q({color:3356995,metalness:.8,roughness:.4}));n.position.set(e,i+1.7,t),this.scene.add(n)}}createCar(e,t,n,r=0){let i=new U,a=new _o({color:n,roughness:.25,metalness:.66,clearcoat:.72,clearcoatRoughness:.23}),o=new _o({color:1254446,roughness:.08,metalness:.24,transparent:!0,opacity:.78,transmission:.08}),s=Z(new xf(1.75,.56,3.65,3,.18),a);s.position.y=.58,i.add(s);let c=Z(new xf(1.68,.16,1.12,2,.06),a);c.position.set(0,.9,-1.12),c.rotation.x=.035,i.add(c);let l=Z(new xf(1.45,.65,1.72,3,.17),o);l.position.set(0,1.03,-.08),l.rotation.x=.02,i.add(l);let u=new q({color:460552,roughness:.95}),d=new q({color:9212825,metalness:.88,roughness:.25});for(let e of[-1,1])for(let t of[-1.15,1.15]){let n=Z(new Ca(.3,.3,.2,20),u);n.rotation.z=Math.PI/2,n.position.set(e*.9,.34,t),i.add(n);let r=Z(new Ca(.16,.16,.215,16),d,!1);r.rotation.z=Math.PI/2,r.position.copy(n.position),i.add(r)}let f=new q({color:2106409,metalness:.44,roughness:.55});for(let e of[-1.84,1.84]){let t=Z(new xf(1.58,.13,.11,2,.035),f);t.position.set(0,.43,e),i.add(t)}let p=new G({color:15918789}),m=new G({color:13178671});for(let e of[-1,1]){let t=Z(new xf(.42,.16,.035,2,.025),p,!1);t.position.set(e*.51,.66,-1.84),i.add(t);let n=Z(new xf(.38,.16,.035,2,.025),m,!1);n.position.set(e*.53,.66,1.84),i.add(n)}i.position.set(e,0,t),i.rotation.y=r,this.scene.add(i),this.colliders.push({x:e,z:t,radius:1.35})}createTree(e,t,n=1,r=0){let i=new U,a=Lf(710+r,5979434);a.repeat.set(1.2,3.4);let o=new q({map:a,bumpMap:a,bumpScale:.04,color:12428943,roughness:.98}),s=Z(new Ca(.18,.31,3.8,16),o);s.position.y=1.9,i.add(s),[-1,1].forEach(e=>{let t=Z(new Ca(.07,.12,1.7,9),o);t.position.set(e*.42,3.15,0),t.rotation.z=e*-.62,i.add(t)});let c=new U,l=zf(800+r);l.repeat.set(1.5,1.5);let u=[9548958,10666151,7904648].map(e=>new q({map:l,bumpMap:l,bumpScale:.035,color:e,roughness:.88}));[[0,4.2,0],[-.82,3.78,.2],[.78,3.92,-.16],[-.3,4.82,-.1],[.38,4.58,.48],[.18,3.68,-.62],[-.55,4.35,-.48],[.73,4.42,-.52],[-.08,4.05,.72]].forEach(([e,t,n],r)=>{let i=Z(new ro(.92+r%2*.16,18,13),u[r%u.length]);i.position.set(e,t,n),i.rotation.set(r*.31,r*.67,r*.23),i.scale.set(1.08+r%3*.08,.78+r%4*.075,.92+r%2*.1),c.add(i)}),i.add(c),i.scale.setScalar(n),i.position.set(e,0,t),this.scene.add(i),this.ambient.push({kind:`tree`,object:i,crown:c,offset:r})}createShrub(e,t,n=1,r=0){let i=new U,a=new q({color:r%2?3235651:3895372,roughness:.94});[[0,.48,0],[-.38,.34,.1],[.4,.37,-.08],[.05,.3,.38]].forEach(([e,t,n],r)=>{let o=Z(new ro(.48+r%2*.09,10,8),a);o.position.set(e,t,n),o.scale.y=.78,i.add(o)}),i.position.set(e,0,t),i.scale.setScalar(n),this.scene.add(i),this.ambient.push({kind:`shrub`,object:i,offset:r})}createStreetLight(e,t,n,r){let i=new U,a=new q({color:3027769,metalness:.76,roughness:.44}),o=Z(new Ca(.08,.13,5.8,9),a);o.position.y=2.9,i.add(o);let s=Z(new K(1.2,.08,.1),a);s.position.set(-n*.55,5.74,0),i.add(s);let c=Z(new ro(.14,10,8),new G({color:14478591}));if(c.position.set(-n*1.1,5.63,0),i.add(c),i.position.set(e,0,t),this.scene.add(i),r%4==0){let e=new ps(13166079,3.8,13,1.8);e.position.copy(i.position).add(new z(-n*1.1,5.6,0)),this.scene.add(e)}}createFactoryUnit(e,t,n,r){let i=new U,a=new q({color:2369579,roughness:.6,metalness:.62}),o=new q({color:4858390,roughness:.83,metalness:.36}),s=Z(new K(10+r()*4,8+r()*6,10),r()>.35?a:o);s.position.y=s.geometry.parameters.height/2,i.add(s);let c=Z(new Ca(2,2.4,10+r()*5,16),a);c.position.set(-n*4,5.4,1.5),i.add(c);let l=Z(new Ca(.32,.32,8,10),o);l.rotation.z=Math.PI/2,l.position.set(-n*2.7,4.8,-3.5),i.add(l),i.position.set(e,0,t),this.scene.add(i),this.colliders.push({x:e,z:t,radius:5.2})}createMineWall(e,t,n,r){let i=new q({color:1248528,roughness:.94,metalness:.14}),a=Z(new Ea(5+r()*2,1),i,!0,!0);a.scale.set(1.3,1.8+r(),1.5),a.position.set(e,5.5,t+(r()-.5)*3),a.rotation.set(r(),r(),r()),this.scene.add(a)}addRubble(e){let t=Mf(1337+e*37),n=new Bi(new K(1,1,1),new q({color:2696746,roughness:.96}),this.isTouch?28:48),r=new Bn;for(let e=0;e<n.count;e+=1)r.position.set((t()-.5)*56,.05+t()*.22,-47+t()*94),r.rotation.set(t()*Math.PI,t()*Math.PI,t()*Math.PI),r.scale.set(.2+t()*1.2,.12+t()*.45,.25+t()*1.1),r.updateMatrix(),n.setMatrixAt(e,r.matrix);n.castShadow=!0,n.receiveShadow=!0,this.scene.add(n)}addAsh(e){let t=Mf(203+e*19),n=this.isTouch?260:520,r=new Float32Array(n*3);for(let e=0;e<n;e+=1)r[e*3]=(t()-.5)*64,r[e*3+1]=t()*22,r[e*3+2]=-52+t()*104;let i=new Ur;i.setAttribute(`position`,new Or(r,3));let a=new ma(i,new la({color:Sf[e].theme===`core`?16759491:14083307,size:.045,transparent:!0,opacity:.48}));this.scene.add(a),this.ambient.push({kind:`ash`,object:a})}addHelicopter(){let e=new U,t=new q({color:592909,metalness:.45,roughness:.6}),n=Z(new xa(.7,1.9,4,8),t);n.rotation.z=Math.PI/2,e.add(n);let r=Z(new K(2.7,.18,.22),t);r.position.x=2,e.add(r);let i=Z(new K(5.2,.035,.12),t,!1);i.position.y=.9,e.add(i);let a=new ds(15332607,40,30,Math.PI/9,.55,1.3);a.position.set(-.5,-.1,0),a.target.position.set(-5,-18,3),e.add(a,a.target),e.position.set(-20,18,-26),e.scale.setScalar(.82),this.scene.add(e),this.ambient.push({kind:`helicopter`,object:e,rotor:i,offset:Math.random()*10})}addImpulsePads(e){(e===3?[[-13,-4],[12,5],[0,-16]]:[[-10,7],[11,-9]]).forEach(([e,t],n)=>{let r=Z(new io(1.25,.075,8,30),new G({color:16726867,transparent:!0,opacity:.48,blending:2}));r.rotation.x=Math.PI/2,r.position.set(e,.08,t),this.scene.add(r),this.ambient.push({kind:`pad`,object:r,offset:n})})}addMineMatter(){let e=new q({color:328709,roughness:.4,metalness:.5}),t=new G({color:16771048,transparent:!0,opacity:.72});for(let n=0;n<22;n+=1){let r=n%2?1:-1,i=Z(new wa(.55+n%4*.18,4+n%5*1.2,6),e);if(i.position.set(r*(14.5+n%3*1.5),1.5,-45+n*4.2),i.rotation.z=(Math.random()-.5)*.8,this.scene.add(i),n%3==0){let e=Z(new io(1.1,.04,5,20),t,!1);e.position.copy(i.position),e.position.y=.18,e.rotation.x=Math.PI/2,this.scene.add(e)}}}addMissionTargets(e){e.targets.forEach((e,t)=>{let n=new U,r=new q({color:5462883,roughness:.5,metalness:.72}),i=new q({color:1513500,roughness:.68,metalness:.42}),a=new G({color:e.kind===`anchor`?16767199:16730210,transparent:!0,opacity:.92,blending:2,depthWrite:!1}),o;if(e.kind===`survivor`){let e=Z(new xa(.31,.68,5,12),new q({color:t%2?7493189:4281963,roughness:.88}));e.position.y=.95,e.rotation.z=t%2?-.12:.12,n.add(e);let r=Z(new ro(.25,16,12),new q({color:12157544,roughness:.82}));r.position.set(0,1.62,-.04),n.add(r),o=r}else if(e.kind===`antenna`){let e=Z(new Ca(.09,.16,5.8,10),r);e.position.y=2.9,n.add(e);for(let e=1.1;e<5.6;e+=1.1){let t=Z(new K(1.5-e*.12,.07,.07),r);t.position.y=e,n.add(t)}o=Z(new ro(.28,14,10),a,!1),o.position.y=5.8,n.add(o);for(let e=0;e<3;e+=1){let t=Z(new io(.55+e*.35,.025,7,28,Math.PI),a.clone(),!1);t.position.y=5.9,t.rotation.z=Math.PI/2,n.add(t)}}else if(e.kind===`transmitter`){let e=Z(new K(1.45,1.8,1.15),i,!0,!0);e.position.y=.9,n.add(e);let t=Z(new ro(.95,18,10,0,Math.PI*2,0,Math.PI/2),r);t.scale.z=.2,t.position.set(0,2.18,0),t.rotation.x=-.55,n.add(t),o=Z(new ro(.24,14,10),a,!1),o.position.set(0,1.12,-.6),n.add(o)}else if(e.kind===`generator`){let e=Z(new Ca(1.15,1.4,1.15,18),i,!0,!0);e.position.y=.58,n.add(e),o=Z(new Ca(.58,.58,2.55,20),a,!1),o.position.y=1.9,n.add(o);let t=Z(new io(1.08,.09,8,32),r);t.rotation.x=Math.PI/2,t.position.y=2,n.add(t)}else{o=Z(new to(1.05,1),new q({color:1248531,emissive:13178678,emissiveIntensity:2.2,roughness:.36,metalness:.66})),o.position.y=1.5,o.scale.y=1.8,n.add(o);for(let e=0;e<3;e+=1){let t=Z(new io(1.35+e*.28,.035,8,36),a.clone(),!1);t.position.y=1.5,t.rotation.set(e*.7,e*.9,e*.35),n.add(t)}}let s=Z(new io(1.75,.055,8,40),new G({color:16730468,transparent:!0,opacity:.75,blending:2,depthWrite:!1}),!1);s.rotation.x=Math.PI/2,s.position.y=.11,n.add(s);let c=Z(new Ca(.16,1.3,8,16,1,!0),new G({color:16725589,transparent:!0,opacity:.09,blending:2,side:2,depthWrite:!1}),!1);c.position.y=4,n.add(c);let l=new ps(16725332,7,12,2);l.position.y=2,n.add(l),n.position.fromArray(e.position),n.userData={...e,index:t,core:o,beacon:s,beam:c,light:l,state:`available`,completed:!1},this.scene.add(n),this.missionTargets.push(n),this.ambient.push({kind:`mission`,object:n,core:o,beacon:s,beam:c,light:l,offset:t})});let t=new U,n=Z(new io(2.15,.11,9,48),new G({color:7927270,transparent:!0,opacity:.82,blending:2,depthWrite:!1}),!1);n.position.y=2.25,t.add(n);let r=Z(new Ca(.35,2.2,6.5,18,1,!0),new G({color:7665638,transparent:!0,opacity:.13,blending:2,side:2,depthWrite:!1}),!1);r.position.y=3.25,t.add(r),t.position.fromArray(e.exit),t.visible=!1,t.userData={ring:n,beam:r},this.scene.add(t),this.exitMarker=t,this.ambient.push({kind:`exit`,object:t,ring:n,beam:r,offset:0})}revealExit(){!this.exitOpen&&this.exitMarker&&(this.exitOpen=!0,this.exitMarker.visible=!0,this.spawnEnergyRing(this.exitMarker.position.clone().add(new z(0,.12,0)),7340006,2.8,!0),this.callbacks.onToast?.(`OBJETIVO CUMPLIDO · SE ABRIÓ EL CAMINO`),this.callbacks.onRoute?.({progress:1,checkpoint:this.completedObjectives,total:this.missionTargets.length,mode:`exit`,label:`SALIDA DESBLOQUEADA`}))}addPickups(e){if(Sf[e].theme===`core`)return;let t=[[[-10,29],[11,13],[-16,-8],[15,-34]],[[-11,34],[9,15],[-12,-19],[17,-37]],[[8,32],[-5,10],[13,-17],[-20,-38]],[[-10,35],[15,15],[-18,-12],[12,-36]]];t[Math.min(e,t.length-1)].forEach(([e,t],n)=>{let r=new U,i=Z(new K(.8,.28,.58),new q({color:3811611,roughness:.95}));i.position.y=.2,r.add(i);for(let e=0;e<3;e+=1){let t=Z(new ro(.16,10,8),new q({color:e===1?15377453:12133937,emissive:e===1?4858368:3670024,emissiveIntensity:.7}));t.position.set((e-1)*.2,.46+e%2*.08,0),r.add(t)}let a=Z(new io(.54,.025,7,24),new G({color:8257418,transparent:!0,opacity:.72,blending:2}),!1);a.rotation.x=Math.PI/2,a.position.y=.08,r.add(a);let o=new ps(7470973,2.6,5,2);o.position.y=.8,r.add(o),r.position.set(e,0,t),r.userData={halo:a,collected:!1,index:n},this.scene.add(r),this.pickups.push(r),this.ambient.push({kind:`pickup`,object:r,halo:a,offset:n})})}createAlly(){let e=new U,t=new q({color:2372397,roughness:.78,metalness:.08}),n=new q({color:11106398,roughness:.86}),r=Z(new xa(.36,.82,6,14),t);r.position.y=1.4,e.add(r);let i=Z(new ro(.29,20,16),n);i.position.y=2.26,e.add(i);let a=Z(new ro(.31,16,12),new q({color:1512463,roughness:.96}));a.position.set(0,2.41,.04),a.scale.y=.62,e.add(a);let o={arms:[],legs:[]},s=[];[-1,1].forEach(n=>{let r=new U;r.position.set(n*.47,1.72,0);let i=Z(new xa(.105,.58,5,10),t);i.position.y=-.36,r.add(i),e.add(r),o.arms.push(r);let a=Z(new ro(.13,12,10),new q({color:9617789,emissive:7205454,emissiveIntensity:2.8,roughness:.45}));a.position.set(n*.48,.93,-.02),e.add(a);let c=Z(new io(.25,.025,7,28,Math.PI*1.45),new G({color:10221181,transparent:!0,opacity:.74,blending:2,depthWrite:!1}),!1);c.position.copy(a.position),c.rotation.y=n*.18,e.add(c),s.push(c);let l=new U;l.position.set(n*.19,.84,0);let u=Z(new xa(.115,.68,5,10),new q({color:1382683,roughness:.88}));u.position.y=-.4,l.add(u),e.add(l),o.legs.push(l)});let c=Sf[this.levelIndex].start;e.position.set(c[0]-2.1,0,c[2]+1.8),e.userData={shootTimer:1.2,limbs:o,signals:s,moving:!1},this.ally=e,this.scene.add(e)}createGala(){let e=new U,t=new U;e.add(t);let n=new q({color:12155241,roughness:.67,metalness:.015}),r=new q({color:13667193,roughness:.62}),i=new q({color:3421244,roughness:.7}),a=new q({color:2435121,roughness:.57,metalness:.16}),o=new q({color:3159616,roughness:.76}),s=new q({color:1514016,roughness:.62,metalness:.16}),c=new q({color:5594473,roughness:.48,metalness:.24}),l=Z(new xa(.34,.38,7,14),o);l.position.y=1.05,l.scale.set(1,.88,.68),t.add(l);let u=Z(new xa(.4,.72,7,16),i);u.position.y=1.55,u.scale.set(.94,1.06,.66),t.add(u);let d=Z(new xa(.43,.7,7,16),a);d.position.set(0,1.56,.08),d.scale.set(1,1.04,.66),t.add(d);let f=Z(new K(.025,.95,.025),new q({color:8027266,metalness:.85,roughness:.28}),!1);f.position.set(0,1.52,-.31),t.add(f);let p=Z(new Ca(.13,.15,.27,16),n);p.position.y=2.1,t.add(p);let m=new U;m.position.y=2.39,t.add(m);let h=Z(new ro(.32,28,22),r);h.scale.set(.86,1.08,.91),m.add(h);let g=Z(new ro(.25,24,18),r);g.position.set(0,-.13,-.035),g.scale.set(.92,.76,.92),m.add(g),[-1,1].forEach(e=>{let t=Z(new ro(.065,14,10),n,!1);t.position.set(e*.278,0,.005),t.scale.set(.5,1,.55),m.add(t)});let _=[],v=new q({color:2168090,roughness:.55});[-1,1].forEach(e=>{let t=new U;t.position.set(e*.105,.04,-.291);let n=Z(new ro(.055,14,10),new q({color:15985125,roughness:.5}),!1);n.scale.set(1.25,.68,.32),t.add(n);let r=Z(new ro(.025,12,9),new q({color:4940378,roughness:.42}),!1);r.position.z=-.052,r.scale.z=.45,t.add(r);let i=Z(new ro(.012,10,8),v,!1);i.position.z=-.071,t.add(i),m.add(t),_.push(t);let a=Z(new K(.13,.018,.018),v,!1);a.position.set(e*.11,.12,-.306),a.rotation.z=e*-.08,m.add(a)});let y=Z(new wa(.038,.13,12),r,!1);y.position.set(0,-.04,-.325),y.rotation.x=-Math.PI/2,m.add(y);let b=Z(new io(.07,.012,7,18,Math.PI),new q({color:7284275,roughness:.56}),!1);b.position.set(0,-.15,-.308),b.rotation.z=Math.PI,m.add(b);let x=new q({color:1446166,roughness:.88,metalness:.03}),S=new q({color:2891814,roughness:.82}),C=new U,w=[];for(let e=0;e<4;e+=1){let t=8+e*2;for(let n=0;n<t;n+=1){let r=n/t*Math.PI*2+e*.28;if(e>0&&Math.cos(r)<-.54&&Math.abs(Math.sin(r))<.68)continue;let i=.31+e*.045,a=Z(new ro(.105+n%3*.014,12,10),(n+e)%4==0?S:x);a.position.set(Math.sin(r)*i,.3-e*.16+Math.sin(n*1.7)*.025,Math.cos(r)*i*.72+.06),C.add(a),w.push(a)}}m.add(C);let T={arms:[],legs:[],forearms:[],knees:[],feet:[],boots:[]},E=[],D=[];[-1,1].forEach(e=>{let n=new U;n.position.set(e*.47,1.78,.01),n.rotation.z=e*-.08;let i=Z(new xa(.115,.42,6,12),a);i.position.y=-.29,n.add(i);let l=new U;l.position.y=-.5;let u=Z(new xa(.105,.4,6,12),a);u.position.y=-.22,l.add(u),n.add(l);let d=Z(new ro(.145,14,10),a);d.scale.set(1.05,.9,.95),n.add(d),t.add(n),T.arms.push(n),T.forearms.push(l);let f=new U;f.position.y=-.43;let p=Z(new ro(.14,16,12),r);p.scale.set(.88,1.05,.68),f.add(p);for(let e=0;e<4;e+=1){let t=Z(new xa(.018,.09,4,7),r);t.position.set((e-1.5)*.035,-.11,-.015),f.add(t)}l.add(f),E.push(f);let m=new ps(16720965,5.8,5.5,2);f.add(m);let h=Z(new io(.3,.028,8,36),new G({color:16725588,transparent:!0,opacity:.94,blending:2,depthWrite:!1}),!1);h.rotation.y=e*.16,f.add(h),D.push(h);for(let t=0;t<3;t+=1){let n=Z(new io(.19+t*.055,.008,5,18,Math.PI*1.25),new G({color:t===1?16756560:16721991,transparent:!0,opacity:.8,blending:2,depthWrite:!1}),!1);n.rotation.set(t*.7,e*(.4+t*.25),t*1.1),f.add(n),D.push(n)}let g=new U;g.position.set(e*.2,1,0);let _=Z(new xa(.13,.36,6,12),o);_.position.y=-.31,g.add(_);let v=Z(new K(.018,.54,.018),c,!1);v.position.set(e*.095,-.3,-.105),g.add(v);let y=new U;y.position.y=-.57;let b=Z(new xa(.115,.26,6,12),o);b.position.y=-.24,y.add(b);let x=Z(new ro(.125,14,10),o);x.position.set(0,-.015,-.09),x.scale.set(1,.78,.5),y.add(x);let S=Z(new K(.25,.2,.47),s);S.position.set(0,-.38,-.09),y.add(S);let C=Z(new K(.27,.045,.5),c);C.position.set(0,-.49,-.09),y.add(C),g.add(y),t.add(g),T.legs.push(g),T.knees.push(y),T.feet.push(S),T.boots.push(S)});let ee=[];[-1,1].forEach(e=>{let n=Z(new K(.34,.78,.08),a);n.position.set(e*.2,.9,.25),n.rotation.x=.08,t.add(n),ee.push(n)});let te=Z(new Sa(.72,24),new G({color:0,transparent:!0,opacity:.42,depthWrite:!1}),!1);te.rotation.x=-Math.PI/2,te.position.y=.025,e.add(te);let O=new ps(16767189,2.2,4.5,2);O.position.set(0,2.65,-1.15),t.add(O);let ne=new ps(16725588,2.6,5.5,2);return ne.position.set(0,2.1,1.1),t.add(ne),e.userData.limbs=T,e.userData.hands=E,e.userData.energyRings=D,e.userData.head=m,e.userData.headMesh=h,e.userData.bodyRoot=t,e.userData.waist=l,e.userData.torso=u,e.userData.jacket=d,e.userData.eyeGroups=_,e.userData.curls=w,e.userData.coatTails=ee,e.userData.nextBlink=1.2+Math.random()*2.8,e.userData.blink=0,e}createShieldVisual(){this.shieldGroup=new U;for(let e=0;e<3;e+=1){let t=new U,n=Z(new Ca(.95,.95,.055,36,1,!0),new G({color:16725584,transparent:!0,opacity:.28,blending:2,side:2,depthWrite:!1}),!1);n.rotation.z=Math.PI/2,t.add(n);let r=Z(new io(.95,.055,8,40),new G({color:16743310,transparent:!0,opacity:.92,blending:2,depthWrite:!1}),!1);r.rotation.y=Math.PI/2,t.add(r);let i=Z(new io(.58,.028,7,32),new G({color:16725584,transparent:!0,opacity:.78,blending:2,depthWrite:!1}),!1);i.rotation.y=Math.PI/2,t.add(i),t.position.set(Math.cos(e*Math.PI*2/3)*1.05,1.45,Math.sin(e*Math.PI*2/3)*1.05),t.rotation.y=-e*Math.PI*2/3,this.shieldGroup.add(t)}this.shieldGroup.visible=!1,this.player.add(this.shieldGroup)}startLevel(e){this.levelIndex=Of(e,0,Sf.length-1),this.buildWorld(this.levelIndex),this.state=`playing`,this.health=100,this.echo=100,this.elapsed=0,this.kills=0,this.wave=0,this.completedObjectives=0,this.activeTarget=null,this.exitOpen=!1,this.pendingWaveAt=0,this.pendingGrioxAt=0,this.pendingFinishAt=0,this.grioxSpawned=!1,this.shotCooldown=0,this.dashCooldown=0,this.shieldCooldown=0,this.shieldTime=0,this.velocityY=0,this.dashTime=0,this.airDashUsed=!1,this.runCycle=0,this.moveBlend=0,this.sprintBlend=0,this.stepSide=0,this.cameraYaw=0,this.cameraPitch=.12,this.sound.unlock(),this.sound.startAmbience(Sf[this.levelIndex].theme),this.callbacks.onHud?.(this.hudState()),this.callbacks.onPowerChange?.(this.powerState()),this.callbacks.onRoute?.({progress:0,checkpoint:0,total:Sf[this.levelIndex].targets.length,mode:`explore`,label:`EXPLORÁ EL ÁREA`})}restartLevel(){this.startLevel(this.levelIndex)}setState(e){this.state=e,e!==`playing`&&(this.shootHeld=!1),e===`menu`&&this.sound.stopAmbience()}unlockAudio(){this.sound.unlock()}cinematicCue(e){this.sound.unlock(),this.sound.cue(e)}setJoystick(e,t){this.joystick.set(Of(e,-1,1),Of(t,-1,1))}addLook(e,t){this.cameraYaw-=e*(this.isTouch?.0048:.004),this.cameraPitch=Of(this.cameraPitch+t*.0032,-.08,.46)}flipCamera(){this.cameraYaw+=Math.PI}setShootHeld(e){this.shootHeld=e,e&&this.shoot()}powerState(){return{dashUnlocked:this.levelIndex>=1,shieldUnlocked:this.levelIndex>=2,dashCooldown:this.dashCooldown,shieldCooldown:this.shieldCooldown,shieldActive:this.shieldTime>0}}hudState(){return{health:this.health,echo:this.echo,levelIndex:this.levelIndex,wave:this.wave,completedObjectives:this.completedObjectives,totalObjectives:this.missionTargets.length,enemies:this.enemies.length,elapsed:this.elapsed}}spawnWave(){if(this.state!==`playing`||!this.activeTarget)return;let e=Sf[this.levelIndex],t=this.activeTarget.userData.encounter,n=this.activeTarget.position.clone();this.wave+=1;let r=0,i=(i,a)=>{for(let o=0;o<a;o+=1){let a=this.createMilitary(i),o=r/Math.max(1,(t.soldiers||0)+(t.shooters||0)+(t.heavies||0))*Math.PI*2+Math.random()*.45,s=5.5+r%3*1.7+Math.random()*1.4;a.position.set(Of(n.x+Math.sin(o)*s,-e.bounds.x+2,e.bounds.x-2),0,Of(n.z+Math.cos(o)*s,-e.bounds.z+2,e.bounds.z-2)),this.scene.add(a),this.enemies.push(a),r+=1}};if(i(`soldier`,t.soldiers||0),i(`shooter`,t.shooters||0),i(`heavy`,t.heavies||0),t.commander){let t=this.createMilitary(`commander`,e.commander);t.position.set(Of(n.x+7.2,-e.bounds.x+2,e.bounds.x-2),0,Of(n.z-5.5,-e.bounds.z+2,e.bounds.z-2)),this.scene.add(t),this.enemies.push(t),this.mainBoss=t,this.callbacks.onBoss?.({active:!0,name:e.commander,health:t.userData.health,maxHealth:t.userData.maxHealth,phase:`COMANDANTE`})}this.sound.wave(),this.callbacks.onRoute?.({progress:this.routeProgress(),checkpoint:this.completedObjectives,total:this.missionTargets.length,mode:`combat`,label:this.activeTarget.userData.label}),this.callbacks.onWave?.({wave:this.wave,enemies:this.enemies.length,commander:!!t.commander,label:this.activeTarget.userData.label}),this.callbacks.onToast?.(`OLEADA EN ${this.activeTarget.userData.label.toUpperCase()} · ${this.enemies.length} ENEMIGOS`)}createMilitary(e,t=``){let n=new U,r=Z(new xa(.4,.78,5,12),e===`commander`?this.materials.militaryDark:this.materials.military);r.position.y=1.32,r.scale.z=.68,n.add(r);let i=Z(new K(.82,.7,.5),this.materials.militaryDark);i.position.set(0,1.38,0),n.add(i);let a=Z(new ro(.29,18,14),new q({color:9990753,roughness:.86}));a.position.y=2.12,n.add(a);let o=Z(new ro(.33,18,12,0,Math.PI*2,0,Math.PI*.62),this.materials.militaryDark);o.position.y=2.2,o.rotation.x=.12,n.add(o);let s=Z(new K(.43,.065,.035),this.materials.visor,!1);s.position.set(0,2.15,-.292),n.add(s);let c=Z(new K(.22,.17,.1),this.materials.militaryDark);c.position.set(0,2.02,-.28),n.add(c);let l={arms:[],legs:[]};[-1,1].forEach(e=>{let t=Z(this.geometries.soldierLimb,this.materials.military);t.position.set(e*.49,1.32,0),n.add(t),l.arms.push(t);let r=Z(new ro(.2,10,8),this.materials.militaryDark);r.scale.set(1.2,.65,1),r.position.set(e*.51,1.7,0),n.add(r);let i=Z(this.geometries.soldierLimb,this.materials.militaryDark);i.position.set(e*.22,.48,0),n.add(i),l.legs.push(i)});let u=Z(new K(e===`heavy`?.18:.12,.14,e===`heavy`?1.35:.9),this.materials.militaryDark);u.position.set(.32,1.4,-.48),n.add(u);let d=Z(new Ca(.045,.045,e===`heavy`?.7:.48,8),new q({color:5857641,metalness:.82,roughness:.32}));d.rotation.x=Math.PI/2,d.position.set(.32,1.4,e===`heavy`?-1.38:-1),n.add(d);let f=68+this.levelIndex*7,p=2.25+this.levelIndex*.08,m=8+this.levelIndex,h=.62;if(e===`shooter`&&(f*=.86),e===`heavy`&&(f*=2.25,p*=.63,m*=1.55,h=.82,n.scale.setScalar(1.2)),e===`commander`){f=310+this.levelIndex*45,p=2.05,m=14+this.levelIndex*1.5,h=.88,n.scale.setScalar(1.28);let e=Z(new wa(.17,.55,4),this.materials.visor);e.position.set(0,2.65,0),n.add(e)}return n.userData={type:e,name:t,health:f,maxHealth:f,speed:p,damage:m,radius:h,shootTimer:.8+Math.random()*1.5,meleeTimer:0,limbs:l,phase:1,isBoss:e===`commander`,hitFlash:0,baseScale:n.scale.x},e!==`heavy`&&e!==`commander`&&n.scale.setScalar(1.08),n.userData.baseScale=n.scale.x,n.userData.fallbackChildren=[...n.children],this.upgradeMilitaryModel(n,this.worldToken),n}createGriox(e=!1){let t=new U,n=new q({color:1512474,emissive:1180169,emissiveIntensity:.85,roughness:.32,metalness:.66}),r=new q({color:2822168,emissive:5440791,emissiveIntensity:1.75,roughness:.43,metalness:.42}),i=new G({color:16772846,transparent:!0,opacity:.94,blending:2}),a=Z(new eo(1.65,1),n);a.position.y=2.5,a.scale.set(1.1,1.5,.88),t.add(a);let o=Z(new eo(.55,1),i,!1);o.position.set(0,2.5,-1.05),t.add(o);let s=new ps(16770793,18,15,1.7);s.position.set(0,2.5,-.8),t.add(s),[-1,1].forEach(e=>{let n=Z(new ro(.11,14,10),i,!1);n.position.set(e*.27,3.15,-1.2),n.scale.set(1,.48,.5),t.add(n)});let c=Z(new io(2.3,.075,8,52),new G({color:16721224,transparent:!0,opacity:.52,blending:2,depthWrite:!1}),!1);c.position.y=2.55,c.rotation.y=Math.PI/2,t.add(c);let l=[];for(let e=0;e<18;e+=1){let i=e/18*Math.PI*2,a=Z(new wa(.18+e%4*.06,1.3+e%5*.24,5),e%3==0?r:n);a.position.set(Math.sin(i)*1.25,2.5+Math.cos(e*2.1)*1.35,Math.cos(i)*.7),a.rotation.z=Math.sin(i)*.9,a.rotation.x=Math.cos(i)*.8,t.add(a),l.push(a)}let u=[];for(let e=0;e<7;e+=1){let n=e/7*Math.PI*2,i=Z(new ao(new Ia([new z(Math.sin(n)*.7,2.1,Math.cos(n)*.6),new z(Math.sin(n+.4)*1.8,1.3,Math.cos(n+.4)*1.8),new z(Math.sin(n)*3.3,.25,Math.cos(n)*3.3)]),12,.1+e%2*.045,5,!1),r);t.add(i),u.push(i)}let d=Z(new io(.42,.07,5,16,Math.PI),i,!1);d.position.set(0,2.05,-1.38),d.rotation.z=Math.PI,t.add(d);let f=e?360:820;return t.userData={type:`griox`,name:`GRIOX`,health:f,maxHealth:f,speed:1.35,damage:18,radius:1.65,shootTimer:1.2,shockwaveTimer:4.3,meleeTimer:0,phase:1,isBoss:!0,isGriox:!0,isProjection:e,circleBroken:!1,spikes:l,tendrils:u,chest:o,aura:c,hitFlash:0},t.scale.setScalar(e?1.02:1.22),t}spawnGriox(){this.grioxSpawned=!0;let e=!(!Sf[this.levelIndex].firstGriox||Sf[this.levelIndex].finalBoss),t=this.createGriox(e);t.position.fromArray(Sf[this.levelIndex].exit),t.position.z-=Sf[this.levelIndex].finalBoss?5:2,this.scene.add(t),this.enemies.push(t),this.mainBoss=t,this.callbacks.onBoss?.({active:!0,name:`GRIOX`,health:t.userData.health,maxHealth:t.userData.maxHealth,phase:`FASE I`}),this.callbacks.onToast?.(e?`GRIOX APARECIÓ · ES UNA PROYECCIÓN MENTAL`:`GRIOX DESPERTÓ · NO CONFÍES EN SU VOZ`),this.sound.wave()}shoot(){if(this.state!==`playing`||this.shotCooldown>0)return;let e=this.levelIndex>=3,t=e?10:7;if(this.echo<t){this.callbacks.onToast?.(`ECO INSUFICIENTE`);return}this.echo-=t,this.shotCooldown=e?.34:.28,this.player.updateMatrixWorld(!0);let n=this.player.position.clone().add(new z(0,1.45,0)),r=new z(-Math.sin(this.cameraYaw),-.03-this.cameraPitch*.08,-Math.cos(this.cameraYaw)).normalize(),i=r.clone(),a=null,o=1/0;for(let e of this.enemies){let t=e.position.clone().add(new z(0,e.userData.isGriox?2.3:1.2,0)).sub(n),i=t.length(),s=t.clone().normalize().dot(r),c=i*(1.15-s);i<31&&s>.42&&c<o&&(a=e,o=c)}a&&(i=a.position.clone().add(new z(0,a.userData.isGriox?2.2:1.15,0)).sub(n).normalize());let s=e?2:1;for(let t=0;t<s;t+=1){let n=s===2?t:this.shotHand++%2,r=this.player.userData.hands[n].getWorldPosition(new z),a=s===2?t===0?-.025:.025:0,o=i.clone().applyAxisAngle(Df,a);this.createProjectile(`player`,r,o,e?24:34,18.5,`ring`),this.spawnEnergyRing(r.clone().add(o.clone().multiplyScalar(.26)),t===1?16747069:16724043,.58,!1)}let c=i.clone();c.y=0,c.lengthSq()>.01&&Nf(this.player,c.normalize()),this.playerRecoil=.18,this.sound.shot()}tryDash(){if(this.state!==`playing`||this.levelIndex<1||this.dashCooldown>0||this.echo<23||!this.grounded&&(this.levelIndex<3||this.airDashUsed))return;let e=this.getMoveDirection();e.lengthSq()<.05&&e.set(-Math.sin(this.cameraYaw),0,-Math.cos(this.cameraYaw)),e.normalize(),this.dashDirection.copy(e),this.dashTime=.34,this.velocityY=this.grounded?6.8:Math.max(2.4,this.velocityY+2.8),this.grounded=!1,this.player.position.y>.2&&(this.airDashUsed=!0),this.echo-=23,this.dashCooldown=this.levelIndex>=3?.78:1.38,this.lastDashAt=performance.now();let t=new z(e.z,0,-e.x).multiplyScalar(.43);this.spawnImpulseDisc(this.player.position.clone().add(t),16721223),this.spawnImpulseDisc(this.player.position.clone().sub(t),16742968),this.sound.dash(),navigator.vibrate?.(22)}tryShield(){this.state!==`playing`||this.levelIndex<2||this.shieldCooldown>0||this.echo<38||(this.echo-=38,this.shieldTime=3.2,this.shieldCooldown=7.2,this.shieldGroup.visible=!0,this.sound.shield(),this.callbacks.onToast?.(this.levelIndex>=4?`DISCOS ACTIVOS · LOS DISPAROS REGRESAN`:`DISCOS PROTECTORES ACTIVOS`))}getMoveDirection(){let e=this.joystick.x,t=-this.joystick.y;(this.keys.has(`KeyA`)||this.keys.has(`ArrowLeft`))&&--e,(this.keys.has(`KeyD`)||this.keys.has(`ArrowRight`))&&(e+=1),(this.keys.has(`KeyW`)||this.keys.has(`ArrowUp`))&&(t+=1),(this.keys.has(`KeyS`)||this.keys.has(`ArrowDown`))&&--t;let n=new z(-Math.sin(this.cameraYaw),0,-Math.cos(this.cameraYaw)),r=new z(Math.cos(this.cameraYaw),0,-Math.sin(this.cameraYaw)),i=n.multiplyScalar(t).add(r.multiplyScalar(e));return i.lengthSq()>1&&i.normalize(),i}createProjectile(e,t,n,r,i,a=`bullet`){let o=a===`ring`?Z(this.geometries.projectile,this.materials.redEnergy.clone(),!1):Z(this.geometries.enemyBullet,e===`player`?this.materials.redEnergy.clone():e===`ally`?this.materials.greenEnergy.clone():this.materials.whiteEnergy.clone(),!1);o.position.copy(t),a===`ring`&&o.quaternion.setFromUnitVectors(new z(0,0,1),n.clone().normalize()),this.scene.add(o),this.projectiles.push({mesh:o,owner:e,velocity:n.clone().normalize().multiplyScalar(i),damage:r,life:2.8,radius:a===`ring`?.5:.17,style:a})}spawnEnergyRing(e,t=16724043,n=1,r=!1){let i=new G({color:t,transparent:!0,opacity:.72,blending:2,depthWrite:!1}),a=Z(new io(.52,.045,7,26),i,!1);a.position.copy(e),r&&(a.rotation.x=Math.PI/2),a.scale.setScalar(n*.45),this.scene.add(a),this.effects.push({object:a,life:.45,maxLife:.45,grow:2.6*n})}spawnImpulseDisc(e,t){let n=new U,r=Z(new Ca(.62,.62,.055,32),new G({color:t,transparent:!0,opacity:.42,blending:2,depthWrite:!1}),!1),i=Z(new io(.64,.045,8,36),new G({color:t,transparent:!0,opacity:.94,blending:2,depthWrite:!1}),!1);i.rotation.x=Math.PI/2,n.add(r,i),n.position.copy(e),n.position.y=.09,this.scene.add(n),this.effects.push({object:n,life:.48,maxLife:.48,impulse:!0})}spawnFootstep(e,t){let n=new z(e?.2:-.2,0,0).applyQuaternion(this.player.quaternion),r=new z(0,0,.12).applyQuaternion(this.player.quaternion),i=this.player.position.clone().add(n).add(r);i.y=.045;let a=Z(new Sa(t?.22:.16,14),new G({color:t?14146013:9476514,transparent:!0,opacity:t?.28:.18,depthWrite:!1}),!1);a.rotation.x=-Math.PI/2,a.scale.set(.7,1.35,1),a.position.copy(i),this.scene.add(a),this.effects.push({object:a,life:.34,maxLife:.34,grow:t?1.45:.9})}updatePlayer(e){let t=this.getMoveDirection(),n=t.lengthSq()>.02,r=Of(t.length(),0,1),i=n&&this.grounded&&(this.isTouch&&!this.clickPath?.length&&r>.72||this.keys.has(`ShiftLeft`)||this.keys.has(`ShiftRight`));this.player.userData.isMoving=n,this.player.userData.isRunning=i;let a=this.player.position.clone();if(this.dashTime>0)this.player.position.addScaledVector(this.dashDirection,18*e),this.dashTime-=e;else if(n){let n=this.grounded?i?7.35:4.65:4.15;this.player.position.addScaledVector(t,n*e),Nf(this.player,t)}this.grounded||(this.velocityY-=15.5*e,this.player.position.y+=this.velocityY*e,this.player.position.y<=0&&(this.player.position.y=0,this.velocityY=0,this.grounded=!0,this.airDashUsed=!1,this.spawnEnergyRing(this.player.position.clone().add(new z(0,.08,0)),16721471,.75,!0)));let o=Sf[this.levelIndex].bounds;this.player.position.x=Of(this.player.position.x,-o.x,o.x),this.player.position.z=Of(this.player.position.z,-o.z,o.z);this.resolvePlayerMotion(a);let s=this.player.userData.limbs,c=1-Math.exp(-e*11),l=1-Math.exp(-e*25);this.moveBlend=Wt.lerp(this.moveBlend,n&&this.grounded?1:0,c),this.sprintBlend=Wt.lerp(this.sprintBlend,+!!i,c),this.runCycle+=e*Wt.lerp(7.8,13.4,this.sprintBlend)*Math.max(.22,this.moveBlend);let u=Math.sin(this.runCycle),d=Math.sin(this.runCycle+Math.PI/2),f=u*(Wt.lerp(.52,.98,this.sprintBlend)*this.moveBlend),p=Math.max(0,-u)*this.moveBlend,m=Math.max(0,u)*this.moveBlend,h=Math.abs(d)*Wt.lerp(.022,.078,this.sprintBlend)*this.moveBlend,g=Math.sin(this.elapsed*1.9)*.018;this.playerRecoil=Math.max(0,this.playerRecoil-e),this.playerHurt=Math.max(0,this.playerHurt-e);let _=this.playerRecoil>0?-1.38:null;s.arms[0].rotation.x=Wt.lerp(s.arms[0].rotation.x,_??f*.82,l),s.arms[1].rotation.x=Wt.lerp(s.arms[1].rotation.x,_??-f*.82,l),s.arms[0].rotation.z=Wt.lerp(s.arms[0].rotation.z,-.08-this.sprintBlend*.08,l),s.arms[1].rotation.z=Wt.lerp(s.arms[1].rotation.z,.08+this.sprintBlend*.08,l),s.forearms[0].rotation.x=Wt.lerp(s.forearms[0].rotation.x,this.playerRecoil>0?-.55:-.18-p*(.42+this.sprintBlend*.22),l),s.forearms[1].rotation.x=Wt.lerp(s.forearms[1].rotation.x,this.playerRecoil>0?-.55:-.18-m*(.42+this.sprintBlend*.22),l),s.legs[0].rotation.x=Wt.lerp(s.legs[0].rotation.x,-f,l),s.legs[1].rotation.x=Wt.lerp(s.legs[1].rotation.x,f,l),s.legs[0].rotation.z=Wt.lerp(s.legs[0].rotation.z,-.018-d*.025*this.moveBlend,l),s.legs[1].rotation.z=Wt.lerp(s.legs[1].rotation.z,.018+d*.025*this.moveBlend,l),s.knees[0].rotation.x=Wt.lerp(s.knees[0].rotation.x,p*(.72+this.sprintBlend*.5),l),s.knees[1].rotation.x=Wt.lerp(s.knees[1].rotation.x,m*(.72+this.sprintBlend*.5),l),s.feet[0].rotation.x=Wt.lerp(s.feet[0].rotation.x,-p*.38+Math.max(0,u)*.12,l),s.feet[1].rotation.x=Wt.lerp(s.feet[1].rotation.x,-m*.38+Math.max(0,-u)*.12,l);let v=this.player.userData.bodyRoot;if(v.position.y=Wt.lerp(v.position.y,this.grounded?h:0,c),v.rotation.x=Wt.lerp(v.rotation.x,this.dashTime>0?-.25:-.025-this.sprintBlend*.11,c),v.rotation.z=Wt.lerp(v.rotation.z,u*.022*this.moveBlend,c),this.player.userData.waist.rotation.y=u*.075*this.moveBlend,this.player.userData.torso.rotation.x=Wt.lerp(this.player.userData.torso.rotation.x,this.dashTime>0?-.12:0,c),this.player.userData.torso.rotation.y=-u*.052*this.moveBlend,this.player.userData.torso.scale.y=1.06+g,this.player.userData.jacket.scale.y=1.04+g*.7,this.player.userData.head.rotation.x=Wt.lerp(this.player.userData.head.rotation.x,this.sprintBlend*.065,c),this.player.userData.head.rotation.y=-u*.022*this.moveBlend,this.player.userData.head.rotation.z=u*.018*this.moveBlend+Math.sin(this.elapsed*1.7)*(n?.012:.009)+(this.playerHurt>0?.12:0),this.player.userData.energyRings.forEach((t,n)=>{t.rotation.z+=e*(n%2?-4.6:4.6);let r=1+Math.sin(this.elapsed*7+n)*.12;t.scale.setScalar(r)}),this.player.userData.curls.forEach((e,t)=>{e.rotation.z=Math.sin(this.elapsed*(i?8.5:3.1)+t*.7)*(n?.1+this.sprintBlend*.13:.035),e.rotation.x=Math.cos(this.elapsed*6.7+t)*this.sprintBlend*.055}),this.player.userData.coatTails.forEach((e,t)=>{e.rotation.x=Wt.lerp(e.rotation.x,n?.2+this.sprintBlend*.34+Math.sin(this.runCycle*2+t)*(.06+this.sprintBlend*.07):.08,c)}),this.player.userData.nextBlink-=e,this.player.userData.nextBlink<=0&&this.player.userData.blink<=0&&(this.player.userData.blink=.14,this.player.userData.nextBlink=2.1+Math.random()*3.7),this.player.userData.blink>0){this.player.userData.blink-=e;let t=Of(this.player.userData.blink/.14,0,1),n=Math.max(.07,Math.abs(t-.5)*2);this.player.userData.eyeGroups.forEach(e=>{e.scale.y=n})}else this.player.userData.eyeGroups.forEach(e=>{e.scale.y=1});let y=this.player.userData.realRig;if(y?.mixer){let t=!this.grounded||i||this.dashTime>0?`run`:n?`walk`:`idle`;this.setRigAction(y,t),y.mixer.timeScale=this.dashTime>0?1.55:i?1.18:n?1:.92,y.mixer.update(e),y.visual.rotation.x=Wt.lerp(y.visual.rotation.x,this.dashTime>0?-.16:i?-.035:0,c),y.visual.rotation.z=Wt.lerp(y.visual.rotation.z,this.playerHurt>0?.1:u*.01*this.moveBlend,c)}n&&this.grounded&&this.elapsed-this.lastFootstep>(i?.255:.43)&&(this.lastFootstep=this.elapsed,this.stepSide=1-this.stepSide,this.sound.step(i),this.spawnFootstep(this.stepSide,i)),this.echo=Math.min(100,this.echo+(this.shieldTime>0?5:14)*e),this.shotCooldown=Math.max(0,this.shotCooldown-e),this.dashCooldown=Math.max(0,this.dashCooldown-e),this.shieldCooldown=Math.max(0,this.shieldCooldown-e),this.shootHeld&&this.shoot(),this.shieldTime>0?(this.shieldTime-=e,this.shieldGroup.visible=!0,this.shieldGroup.rotation.y+=e*3.8,this.shieldGroup.children.forEach((e,t)=>{e.position.y=1.38+Math.sin(this.elapsed*4+t*2.1)*.22})):this.shieldGroup.visible=!1}updateEnemies(e){for(let t of[...this.enemies]){let n=t.userData;if(n.shootTimer-=e,n.meleeTimer-=e,n.hitFlash=Math.max(0,n.hitFlash-e),n.isGriox){this.updateGriox(t,e);continue}let r=n.hitFlash>0?1+n.hitFlash*.9:1;t.scale.setScalar(n.baseScale*r),t.rotation.z=n.hitFlash>0?Math.sin(n.hitFlash*70)*.09:Wt.lerp(t.rotation.z,0,.2);let i=this.player.position.clone().sub(t.position);i.y=0;let a=i.length(),o=a>.01?i.normalize():new z,s=n.type===`shooter`?12:n.type===`heavy`?7:4.2,c=a>s;if(c&&t.position.addScaledVector(o,n.speed*e),o.lengthSq()>.01&&Nf(t,o),n.realRig?.mixer){let t=c?n.type===`heavy`?`walk`:`run`:`idle`;this.setRigAction(n.realRig,t,.18),n.realRig.mixer.timeScale=n.type===`heavy`?.82:n.type===`commander`?1.08:1,n.realRig.mixer.update(e)}n.commanderAura&&(n.commanderAura.rotation.z+=e*1.8,n.commanderAura.material.opacity=.55+Math.sin(this.elapsed*4.2)*.17);let l=Math.sin(this.elapsed*7+t.id)*(a>s?.45:.08);if(n.limbs.arms[0].rotation.x=l,n.limbs.arms[1].rotation.x=-l,n.limbs.legs[0].rotation.x=-l,n.limbs.legs[1].rotation.x=l,(n.type!==`soldier`||a<8.5)&&a<20&&n.shootTimer<=0){let e=t.position.clone().add(new z(0,1.45,0)),r=this.player.position.clone().add(new z(0,1,0)).sub(e).normalize(),i=n.type===`commander`?3:n.type===`heavy`?2:1;for(let t=0;t<i;t+=1)this.createProjectile(`enemy`,e,r.clone().applyAxisAngle(Df,(t-(i-1)/2)*.09),n.damage,8.5+this.levelIndex*.3,`bullet`);n.shootTimer=n.type===`commander`?1.15:n.type===`shooter`?1.55:2.1}a<n.radius+.7&&n.meleeTimer<=0&&(this.damagePlayer(n.damage*.75),n.meleeTimer=1.15)}}updateAlly(e){if(!this.ally||!this.player)return;let t=this.player.position.clone().add(new z(-2.1,0,2.7)).sub(this.ally.position);t.y=0;let n=t.length(),r=n>.25;if(n>.25){let r=t.normalize();this.ally.position.addScaledVector(r,Math.min(6.3*e,n)),Nf(this.ally,r)}let i=this.ally.userData.limbs,a=r?Math.sin(this.elapsed*9.2+1.4)*.58:0;if(i.arms[0].rotation.x=Wt.lerp(i.arms[0].rotation.x,a,.18),i.arms[1].rotation.x=Wt.lerp(i.arms[1].rotation.x,-a,.18),i.legs[0].rotation.x=Wt.lerp(i.legs[0].rotation.x,-a,.18),i.legs[1].rotation.x=Wt.lerp(i.legs[1].rotation.x,a,.18),this.ally.userData.signals.forEach((t,n)=>{t.rotation.z+=e*(n?-3.2:3.2),t.scale.setScalar(.9+Math.sin(this.elapsed*5+n)*.12)}),this.ally.userData.shootTimer-=e,this.enemies.length&&this.ally.userData.shootTimer<=0){let e=this.enemies.reduce((e,t)=>{let n=t.position.distanceToSquared(this.ally.position);return!e||n<e.distance?{enemy:t,distance:n}:e},null)?.enemy;if(e&&e.position.distanceTo(this.ally.position)<24){let t=this.ally.position.clone().add(new z(0,1.35,0)),n=e.position.clone().add(new z(0,1.1,0)).sub(t).normalize();if(this.createProjectile(`ally`,t,n,18,17,`bullet`),this.spawnEnergyRing(t,7929653,.38,!1),Sf[this.levelIndex].theme===`town`||Sf[this.levelIndex].theme===`railway`){let e=this.ally.position.clone().add(new z(0,2.45,0));this.spawnEnergyRing(e,9303405,.52,!1)}this.ally.userData.shootTimer=1.35}}}updatePickups(e){for(let t of[...this.pickups])t.userData.halo.rotation.z+=e*1.8,t.position.y=Math.sin(this.elapsed*2.3+t.userData.index)*.035,!t.userData.collected&&t.position.distanceTo(this.player.position)<1.45&&(t.userData.collected=!0,this.health=Math.min(100,this.health+34),this.echo=Math.min(100,this.echo+24),this.callbacks.onToast?.(`PROVISIONES ENCONTRADAS · VIDA +34`),this.callbacks.onHud?.(this.hudState()),this.spawnEnergyRing(t.position.clone().add(new z(0,.5,0)),7929723,.8,!1),this.scene.remove(t),this.pickups.splice(this.pickups.indexOf(t),1),this.sound.tone(620,.35,`sine`,.025,940))}updateGriox(e,t){let n=e.userData,r=this.player.position.clone().sub(e.position);r.y=0;let i=r.length(),a=i>.01?r.normalize():new z;if(i>9&&e.position.addScaledVector(a,n.speed*t),Nf(e,a),e.position.y=Math.sin(this.elapsed*1.4)*.18,n.spikes.forEach((e,n)=>{e.rotation.y+=t*(n%2?.4:-.35),e.scale.y=1+Math.sin(this.elapsed*2.3+n)*.08}),n.chest.scale.setScalar(.92+Math.sin(this.elapsed*5)*.13),n.aura.rotation.z+=t*.8,n.aura.material.opacity=.4+Math.sin(this.elapsed*3.5)*.16,n.shockwaveTimer-=t,n.shootTimer<=0&&i<31){let t=e.position.clone().add(new z(0,2.5,0)),r=this.player.position.clone().add(new z(0,.9,0)).sub(t).normalize(),i=n.phase+2;for(let e=0;e<i;e+=1){let a=(e-(i-1)/2)*.12;this.createProjectile(`enemy`,t,r.clone().applyAxisAngle(Df,a),13+n.phase*2,10+n.phase,`bullet`)}n.shootTimer=Math.max(.65,1.5-n.phase*.18)}if(n.shockwaveTimer<=0){let t=9+n.phase*3;for(let r=0;r<t;r+=1){let i=r/t*Math.PI*2,a=new z(Math.sin(i),0,Math.cos(i));this.createProjectile(`enemy`,e.position.clone().add(new z(0,.45,0)),a,10+n.phase*2,7.5+n.phase,`bullet`)}this.spawnEnergyRing(e.position.clone().add(new z(0,.12,0)),16771306,2.3,!0),n.shockwaveTimer=Math.max(2.5,5.2-n.phase*.65),this.callbacks.onToast?.(n.phase===3?`GRIOX ESTÁ DENTRO DE TU MENTE`:`ONDA MENTAL · ALEJATE`)}}updateProjectiles(e){for(let t=this.projectiles.length-1;t>=0;--t){let n=this.projectiles[t];n.mesh.position.addScaledVector(n.velocity,e),n.life-=e,n.style===`ring`&&(n.mesh.rotation.z+=e*7);let r=n.life<=0||n.mesh.position.length()>75;if(!r&&n.owner!==`enemy`){for(let e of[...this.enemies])if(e.position.clone().add(new z(0,e.userData.isGriox?2.1:1.15,0)).distanceTo(n.mesh.position)<e.userData.radius+n.radius){this.damageEnemy(e,n.damage),this.spawnEnergyRing(n.mesh.position,16728152,.42,!1),this.sound.impact(),r=!0;break}}else!r&&n.owner===`enemy`&&this.player.position.clone().add(new z(0,1,0)).distanceTo(n.mesh.position)<.82+n.radius&&(this.shieldTime>0?this.levelIndex>=4?(n.owner=`player`,n.damage=32,n.velocity.multiplyScalar(-1.45),n.mesh.material.dispose(),n.mesh.material=this.materials.redEnergy.clone(),this.spawnEnergyRing(n.mesh.position,16724043,.65,!1),r=!1):(this.spawnEnergyRing(n.mesh.position,16724043,.65,!1),r=!0):(this.damagePlayer(n.damage),r=!0));r&&(this.scene.remove(n.mesh),n.mesh.material?.dispose?.(),this.projectiles.splice(t,1))}}damageEnemy(e,t){let n=e.userData;if(n.isProjection&&n.health-t<=n.maxHealth*.18){n.health=0,this.callbacks.onToast?.(`GRIOX ROMPE LA PROYECCIÓN Y ESCAPA HACIA LA MINA`),this.sound.cue(`griox`),this.killEnemy(e);return}if(n.isGriox&&!n.circleBroken){let r=n.maxHealth*.26,i=n.health-t;if(i<=r){if(performance.now()-this.lastDashAt<1800)n.circleBroken=!0,n.health=Math.max(1,i),this.callbacks.onToast?.(`¡CÍRCULO INCOMPLETO! GRIOX YA NO PUEDE COPIARTE`),this.spawnEnergyRing(e.position.clone().add(new z(0,2.3,0)),16719165,3.4,!1),this.sound.dash();else{n.health=r,performance.now()-this.lastImperfectHint>2500&&(this.lastImperfectHint=performance.now(),this.callbacks.onToast?.(`GRIOX COPIA LOS ATAQUES PERFECTOS · USÁ IMPULSO + PULSO`)),this.updateBossCallback(e);return}}else n.health=i}else n.health-=t;if(n.hitFlash=.12,!n.isGriox){let t=e.position.clone().sub(this.player.position).setY(0);t.lengthSq()>.01&&e.position.addScaledVector(t.normalize(),.28)}n.isBoss&&this.updateBossCallback(e),n.health<=0&&this.killEnemy(e)}updateBossCallback(e){let t=e.userData;if(t.isGriox){let e=t.health/t.maxHealth,n=e>.67?1:e>.35?2:3;n!==t.phase&&(t.phase=n,this.callbacks.onToast?.(`GRIOX · FASE ${[`I`,`II`,`III`][n-1]}`)),this.callbacks.onBoss?.({active:!0,name:`GRIOX`,health:t.health,maxHealth:t.maxHealth,phase:`FASE ${[`I`,`II`,`III`][n-1]}`})}else this.callbacks.onBoss?.({active:!0,name:t.name,health:t.health,maxHealth:t.maxHealth,phase:`COMANDANTE`})}killEnemy(e){let t=this.enemies.indexOf(e);t<0||(this.enemies.splice(t,1),this.effects.push({object:e,life:.72,maxLife:.72,death:!0,grow:0}),this.kills+=1,this.spawnEnergyRing(e.position.clone().add(new z(0,1.1,0)),e.userData.isGriox?16777215:16721471,e.userData.isBoss?2.2:.9,!1),e===this.mainBoss&&(this.mainBoss=null,this.callbacks.onBoss?.({active:!1})),this.callbacks.onHud?.(this.hudState()))}damagePlayer(e){if(this.state!==`playing`)return;let t=this.shieldTime>0?e*.18:e;this.health=Math.max(0,this.health-t),this.playerHurt=.34,this.callbacks.onDamage?.(t),this.callbacks.onHud?.(this.hudState()),this.sound.hurt(),navigator.vibrate?.(28),this.health<=0&&this.finish(!1)}updateEffects(e){for(let t=this.effects.length-1;t>=0;--t){let n=this.effects[t];n.life-=e;let r=1-n.life/n.maxLife;if(n.death)n.object.rotation.x=r*1.38,n.object.position.y=Math.max(0,Math.sin(r*Math.PI)*.16);else if(n.impulse){let e=.75+r*2.4;n.object.scale.set(e,1,e),n.object.children.forEach(e=>{e.material&&(e.material.opacity=Math.max(0,(e.geometry.type===`TorusGeometry`?.94:.42)*(1-r)))})}else n.fadeGroup?(n.object.position.y=r*1.6,n.object.traverse(e=>{e.material&&(e.material.transparent=!0,e.material.opacity=Math.max(0,1-r))})):(n.object.scale.setScalar(.45+r*n.grow),n.object.material&&(n.object.material.opacity=Math.max(0,.72*(1-r))));n.life<=0&&(this.scene.remove(n.object),!n.fadeGroup&&!n.death&&!n.impulse?(n.object.geometry?.dispose?.(),n.object.material?.dispose?.()):n.impulse&&n.object.children.forEach(e=>{e.geometry?.dispose?.(),e.material?.dispose?.()}),this.effects.splice(t,1))}}updateAmbient(e){for(let t of this.ambient)if(t.kind===`fire`)t.object.scale.y=.85+Math.sin(this.clock.elapsedTime*12+t.offset)*.2,t.light.intensity=4.2+Math.sin(this.clock.elapsedTime*9+t.offset)*1.1;else if(t.kind===`helicopter`)t.rotor.rotation.y+=e*25,t.object.position.x=-18+Math.sin(this.clock.elapsedTime*.17+t.offset)*11,t.object.position.z=-23+Math.cos(this.clock.elapsedTime*.13+t.offset)*8,t.object.rotation.y=Math.sin(this.clock.elapsedTime*.2)*.2;else if(t.kind===`cloud`)t.object.position.x+=e*(.32+t.offset*.035),t.object.position.x>62&&(t.object.position.x=-62);else if(t.kind===`pad`)t.object.rotation.z+=e*(t.offset%2?-1.2:1.2),t.object.material.opacity=.34+Math.sin(this.clock.elapsedTime*3+t.offset)*.14;else if(t.kind===`ash`){let n=t.object.geometry.attributes.position;for(let t=1;t<n.array.length;t+=3)n.array[t]-=e*.65,n.array[t]<0&&(n.array[t]=18);n.needsUpdate=!0}else t.kind===`tree`?(t.crown.rotation.z=Math.sin(this.clock.elapsedTime*.72+t.offset)*.045,t.crown.rotation.x=Math.cos(this.clock.elapsedTime*.54+t.offset)*.022):t.kind===`shrub`?(t.object.rotation.z=Math.sin(this.clock.elapsedTime*.9+t.offset)*.025,t.object.scale.y=.98+Math.sin(this.clock.elapsedTime*1.3+t.offset)*.025):t.kind===`gate`&&!t.object.userData.open?t.laser.material.opacity=.46+Math.sin(this.clock.elapsedTime*7+t.offset)*.22:t.kind===`pickup`?t.halo.material.opacity=.5+Math.sin(this.clock.elapsedTime*4+t.offset)*.22:t.kind===`beam`?(t.object.material.opacity=.12+Math.sin(this.clock.elapsedTime*2.1)*.04,t.light.intensity=24+Math.sin(this.clock.elapsedTime*3.2)*6):t.kind===`mission`&&!t.object.userData.completed?(t.beacon.rotation.z+=e*(t.offset%2?-1.1:1.1),t.beacon.material.opacity=.58+Math.sin(this.clock.elapsedTime*4.2+t.offset)*.18,t.beam.material.opacity=.065+Math.sin(this.clock.elapsedTime*2.2+t.offset)*.035,t.light.intensity=6+Math.sin(this.clock.elapsedTime*5+t.offset)*1.5,t.object.userData.kind!==`survivor`&&(t.core.rotation.y+=e*.55)):t.kind===`exit`&&t.object.visible?(t.ring.rotation.z+=e*1.3,t.beam.material.opacity=.1+Math.sin(this.clock.elapsedTime*3.4)*.035):t.kind===`water`?(t.object.material.opacity=.68+Math.sin(this.clock.elapsedTime*1.8)*.08,t.object.rotation.y+=e*.04):t.kind===`coreRing`&&(t.object.rotation.z+=e*.08)}updateCamera(e){if(!this.player)return;let t=Math.cos(this.cameraPitch)*this.cameraDistance,n=new z(Math.cos(this.cameraYaw),0,-Math.sin(this.cameraYaw)).multiplyScalar(this.isTouch?.46:.62),r=this.player.userData.isMoving&&this.grounded?Math.sin(this.runCycle*2)*(.018+this.sprintBlend*.028)*this.moveBlend:0,i=this.player.position.clone().add(new z(Math.sin(this.cameraYaw)*t,1.86+Math.sin(this.cameraPitch)*this.cameraDistance+r,Math.cos(this.cameraYaw)*t)).add(n),a=this.player.position.clone().add(new z(0,1.45,0)),o=i.clone().sub(a),s=o.x*o.x+o.z*o.z,c=1;if(s>.01)for(let e of this.colliders){let t=e.x-a.x,n=e.z-a.z,r=Of((t*o.x+n*o.z)/s,0,1),i=a.x+o.x*r,l=a.z+o.z*r,u=e.radius+.42;(i-e.x)**2+(l-e.z)**2<u*u&&(c=Math.min(c,Math.max(.28,r-.08)))}c<1&&i.lerpVectors(a,i,c),i.y=Math.max(i.y,this.player.position.y+1.58);let l=1-.002**Math.min(e,.1);this.camera.position.lerp(i,l);let u=this.player.position.clone().add(new z(0,1.28,0)).addScaledVector(n,.24);this.camera.lookAt(u),this.camera.fov=Wt.lerp(this.camera.fov,this.dashTime>0?57:49,.08),this.camera.updateProjectionMatrix()}routeProgress(){return this.missionTargets.length?Of(this.completedObjectives/this.missionTargets.length,0,1):0}checkProgress(){if(this.state!==`playing`||this.pendingWaveAt||this.pendingGrioxAt||this.pendingFinishAt)return;let e=Sf[this.levelIndex];if(this.enemies.length>0)return;if(this.activeTarget?.userData.state===`engaged`){let e=this.activeTarget;if(e.userData.state=`completed`,e.userData.completed=!0,e.userData.beam.visible=!1,e.userData.beacon.material.color.setHex(7401944),e.userData.beacon.material.opacity=.58,e.userData.light.color.setHex(7401944),e.userData.light.intensity=3,this.completedObjectives+=1,this.sound.objective(e.userData.kind),this.spawnEnergyRing(e.position.clone().add(new z(0,.12,0)),7401944,1.9,!0),this.ally&&(e.userData.kind===`antenna`||e.userData.kind===`transmitter`)){for(let t=0;t<3;t+=1)setTimeout(()=>{e.parent===this.scene&&this.spawnEnergyRing(e.position.clone().add(new z(0,2.2+t*.55,0)),9237357,.65+t*.22,!1)},t*130);this.callbacks.onToast?.(`IVO RECUPERÓ LA SEÑAL · ${e.userData.label.toUpperCase()}`)}else this.callbacks.onToast?.(`${e.userData.label.toUpperCase()} · OBJETIVO COMPLETADO`);this.callbacks.onHud?.(this.hudState()),this.activeTarget=null,this.completedObjectives>=this.missionTargets.length?this.revealExit():this.callbacks.onRoute?.({progress:this.routeProgress(),checkpoint:this.completedObjectives,total:this.missionTargets.length,mode:`explore`,label:`BUSCÁ EL PRÓXIMO OBJETIVO`});return}if(this.completedObjectives>=this.missionTargets.length){let t=this.player.position.distanceTo(this.exitMarker.position),n=e.finalBoss||e.firstGriox;if(n&&!this.grioxSpawned&&t<8.5){this.exitMarker.visible=!1,this.pendingGrioxAt=performance.now()+900,this.callbacks.onToast?.(e.finalBoss?`EL NÚCLEO SE ABRE · GRIOX ESTÁ ESPERANDO`:`LAS MÁQUINAS HABLAN CON LA VOZ DE GRIOX`);return}if(n&&this.grioxSpawned){this.pendingFinishAt=performance.now()+1150;return}!n&&this.exitOpen&&t<2.8&&(this.pendingFinishAt=performance.now()+500);return}let t=null,n=1/0;for(let e of this.missionTargets){if(e.userData.state!==`available`)continue;let r=e.position.distanceTo(this.player.position);r<n&&(t=e,n=r)}t&&n<3.35&&(this.activeTarget=t,t.userData.state=`engaged`,t.userData.light.intensity=12,this.pendingWaveAt=performance.now()+520,this.callbacks.onToast?.(`${t.userData.label.toUpperCase()} · PRESENCIA HOSTIL`),this.callbacks.onRoute?.({progress:this.routeProgress(),checkpoint:this.completedObjectives,total:this.missionTargets.length,mode:`combat`,label:t.userData.label}))}finish(e){this.state===`playing`&&(this.state=`result`,this.shootHeld=!1,this.sound.stopAmbience(),this.callbacks.onEnd?.({success:e,levelIndex:this.levelIndex,time:this.elapsed,kills:this.kills,health:this.health}))}},Hf=`6.0.0-navigation`;document.documentElement.dataset.zerathBuild=Hf;var Q=e=>document.querySelector(e),$={game:Q(`#game`),hud:Q(`#hud`),touchControls:Q(`#touch-controls`),start:Q(`#start-screen`),levelSelect:Q(`#level-select`),briefing:Q(`#briefing`),pause:Q(`#pause-screen`),result:Q(`#result-screen`),cutscene:Q(`#cutscene`),cutsceneImage:Q(`#cutscene-image`),cutsceneKicker:Q(`#cutscene-kicker`),cutsceneTitle:Q(`#cutscene-title`),cutsceneText:Q(`#cutscene-text`),cutsceneDots:Q(`#cutscene-dots`),cutsceneSkip:Q(`#cutscene-skip`),cutsceneNext:Q(`#cutscene-next`),startButton:Q(`#start-button`),continueButton:Q(`#continue-button`),continueLevel:Q(`#continue-level`),levelsButton:Q(`#levels-button`),levelGrid:Q(`#level-grid`),enterLevel:Q(`#enter-level`),pauseButton:Q(`#pause-button`),resumeButton:Q(`#resume-button`),restartButton:Q(`#restart-button`),menuButton:Q(`#menu-button`),nextButton:Q(`#next-button`),retryResult:Q(`#retry-result`),resultMenu:Q(`#result-menu`),healthFill:Q(`#health-fill`),healthValue:Q(`#health-value`),echoFill:Q(`#echo-fill`),echoValue:Q(`#echo-value`),levelKicker:Q(`#level-kicker`),levelName:Q(`#level-name`),objective:Q(`#objective`),waveChip:Q(`#wave-chip`),enemyCount:Q(`#enemy-count`),routeFill:Q(`#route-fill`),routeLabel:Q(`#route-label`),routePercent:Q(`#route-percent`),bossHud:Q(`#boss-hud`),bossName:Q(`#boss-name`),bossPhase:Q(`#boss-phase`),bossFill:Q(`#boss-fill`),powerShot:Q(`#power-shot`),powerDash:Q(`#power-dash`),powerShield:Q(`#power-shield`),damage:Q(`#damage-vignette`),toast:Q(`#toast`),briefNumber:Q(`#brief-number`),briefLocation:Q(`#brief-location`),briefTitle:Q(`#brief-title`),briefStory:Q(`#brief-story`),unlockIcon:Q(`#unlock-icon`),unlockName:Q(`#unlock-name`),unlockDescription:Q(`#unlock-description`),resultKicker:Q(`#result-kicker`),resultTitle:Q(`#result-title`),resultCopy:Q(`#result-copy`),resultTime:Q(`#result-time`),resultKills:Q(`#result-kills`),resultHealth:Q(`#result-health`),shootTouch:Q(`#shoot-touch`),dashTouch:Q(`#dash-touch`),shieldTouch:Q(`#shield-touch`),cameraTouch:Q(`#camera-touch`),joystick:Q(`#joystick`),joystickThumb:Q(`#joystick-thumb`),lookZone:Q(`#look-zone`),rotateNotice:Q(`#rotate-notice`),playPortrait:Q(`#play-portrait`)},Uf=matchMedia(`(hover: none), (pointer: coarse)`).matches,Wf=0,Gf=0,Kf=0,qf=null,Jf=1;try{Jf=Math.max(1,Math.min(Sf.length,Number(localStorage.getItem(`zerath-unlocked`))||1))}catch{Jf=1}function Yf(e){Jf=Math.max(Jf,Math.min(Sf.length,e));try{localStorage.setItem(`zerath-unlocked`,String(Jf))}catch{}}function Xf(){[$.start,$.levelSelect,$.briefing,$.pause,$.result,$.cutscene].forEach(e=>{e.classList.add(`hidden`),e.classList.remove(`active`)})}function Zf(e,t=2100){clearTimeout(Gf),$.toast.textContent=e,$.toast.classList.add(`show`),Gf=setTimeout(()=>$.toast.classList.remove(`show`),t)}function Qf(e){let t=Math.max(0,Math.floor(e));return`${String(Math.floor(t/60)).padStart(2,`0`)}:${String(t%60).padStart(2,`0`)}`}var $f={prologue:[{image:`./zerath-cinematica-01-6.0.0.webp`,kicker:`PRÓLOGO · 00:17`,title:`EL CIELO SE ABRE`,text:`Gala observa Zerath desde su departamento. Entonces un rayo turquesa atraviesa las nubes y cae en el centro de la ciudad. Primero llega el silencio. Después, las sirenas y los gritos.`,cue:`beam`},{image:`./zerath-cinematica-02-6.0.0.webp`,kicker:`EL CUSTODIO`,title:`DOS MANOS, UN ECO`,text:`Una presencia de Aethrion entra en su cuerpo. Gala intenta contenerla, pero de sus manos escapan anillos rojos con venas de fuego. La descarga revienta la ventana hacia la calle.`,cue:`glass`},{image:`./zerath-cinematica-03-6.0.0.webp`,kicker:`ZERATH · NOCHE CERO`,title:`EL PRIMER PASO`,text:`Gala cruza el hueco que dejó la onda. Abajo, una patrulla bloquea la salida del barrio. Sus ojos están abiertos, pero una sola voz habla a través de todos: Griox.`,cue:`crowd`}],ally:[{image:`./zerath-cinematica-04-6.0.0.webp`,kicker:`CAPÍTULO II`,title:`LA SEÑAL DE IVO`,text:`Entre los árboles de Arrayanes, Gala encuentra a Ivo. Otro custodio vive dentro de él. Puede intervenir antenas, dominar las ondas de radio y convertir una transmisión enemiga en un arma. No sabe dónde está Griox, pero sí cómo seguir su señal.`,cue:`ally`}],griox:[{image:`./zerath-cinematica-05-6.0.0.webp`,kicker:`CAPÍTULO IV`,title:`LA FÁBRICA RECUERDA`,text:`La señal conduce al complejo Orpheon. Allí, Griox no ataca el cuerpo: reescribe pasillos, voces y recuerdos. Gala tendrá que pelear sin confiar por completo en lo que ve.`,cue:`griox`}],ending:[{image:`./zerath-cinematica-06-6.0.0.webp`,kicker:`EPÍLOGO`,title:`EL CÍRCULO INCOMPLETO`,text:`Griox copia cada onda perfecta. Gala deja la última abierta y libera todo su eco a través de la grieta. La conexión se corta. Por primera vez desde la caída, Zerath despierta en silencio.`,cue:`beam`}]};function ep(e,t){let n=0;clearTimeout(Kf),Xf(),$.hud.classList.add(`hidden`),$.touchControls.classList.add(`hidden`),$.cutscene.classList.remove(`hidden`),rp.setState(`cinematic`),rp.unlockAudio();let r=()=>{clearTimeout(Kf),qf=null,$.cutscene.classList.add(`hidden`),t?.()},i=()=>{let t=e[n];$.cutsceneImage.classList.remove(`frame-in`),$.cutsceneImage.src=t.image,$.cutsceneImage.alt=t.title,$.cutsceneKicker.textContent=t.kicker,$.cutsceneTitle.textContent=t.title,$.cutsceneText.textContent=t.text,$.cutsceneDots.replaceChildren(...e.map((e,t)=>{let r=document.createElement(`i`);return t===n&&r.classList.add(`active`),r})),$.cutsceneImage.offsetWidth,$.cutsceneImage.classList.add(`frame-in`),rp.cinematicCue(t.cue),clearTimeout(Kf),Kf=window.setTimeout(()=>qf?.(),Math.min(14000,Math.max(8000,t.text.split(/\s+/).length*300+1500)))};qf=()=>{n>=e.length-1?r():(n+=1,i())},$.cutsceneNext.onclick=()=>qf?.(),$.cutsceneSkip.onclick=r,i()}function tp(e,t){e===1?ep($f.ally,t):e===3?ep($f.griox,t):t()}function np(e){return`${e} ${e===1?`enemigo`:`enemigos`}`}/* DUAL: ZERATH — campaign revision 4.0.
 * Uses the original bundled Three.js engine and supplied artwork.
 * Motion is baked into Gala's own skeleton; never retarget a live skinned mesh.
 */

function zrCreateGame(mount,callbacks){
  try{return new Vf(mount,callbacks);}
  catch(error){
    const panel=document.getElementById('load-error');panel.hidden=false;
    panel.querySelector('p').textContent='No se pudo iniciar la imagen 3D. Abrí el juego en un navegador actualizado con WebGL 2 y volvé a intentarlo.';
    document.getElementById('load-retry').onclick=()=>location.reload();
    console.error('ZERATH no pudo iniciar.',error);throw error;
  }
}

const ZR = { version: '4.0.0', waveCounts: [[3,4,5],[4,5,6],[5,6,7],[6,7,8],[7,8,9]], bossHealth: [420,570,740,920,1500] };
const legacy = {};
for (const key of Object.getOwnPropertyNames(Vf.prototype)) legacy[key] = Vf.prototype[key];

Sf.forEach((level,index) => {
  level.firstGriox = false;
  level.finalBoss = index === 4;
  level.missionLabel = 'RESCATES';
  level.targets.forEach((target,n) => {
    target.encounter = { soldiers: Math.max(2,ZR.waveCounts[index][n]-2-Math.floor(index/2)), shooters:2, heavies:Math.floor(index/2) };
    if (index === 0 && n === 0) target.encounter = {soldiers:2,shooters:1,heavies:0};
    target.civilians = 2;
  });
  level.objective = index===4 ? 'Rescatá a los cautivos, rompé las anclas y derrotá a Griox' : 'Liberá a los civiles en tres zonas y derrotá al jefe militar';
  level.sky = [0x6999b8,0x82a8bd,0x7a99ae,0x687e90,0x263342][index];
  level.fog = [0x8ca5af,0xa0b3ba,0x94a6b1,0x8297a1,0x3b4650][index];
});
Sf[0].story = 'Gala despierta después del impacto. Sus manos arden con un eco rojo y dorado. En la calle, los militares de Griox mantienen a sus vecinos cautivos. Rescatá a los seis civiles y abrí el paso hacia Arrayanes.';
Sf[1].story = 'Los vecinos hablan de transportes llenos de prisioneros. Ivo escucha sus voces a través de las antenas de Arrayanes. Recuperá la señal, liberá a los cautivos y enfrentá al comandante Selix.';
Sf[2].story = 'Los militares usan el ferrocarril de Auren para trasladar personas a Orpheon. Gala e Ivo deben cortar las transmisiones y sacar a los prisioneros de los depósitos. El coronel Brax protege el último convoy.';
Sf[3].story = 'En el exterior de Orpheon, los cautivos alimentan la señal de Griox. Apagá los generadores y liberá a las personas atrapadas. Dravox custodia la entrada al núcleo.';
Sf[4].story = 'Quedan seis personas conectadas a las anclas mentales. Liberarlas debilitará a Griox. En el enfrentamiento final, combiná Impulso y Pulso para romper el círculo que le permite copiar tus ataques.';
Sf[0].unlock.description += ' Q o Espacio: esquivar. R: golpe de eco cercano.';

// Quieter surface textures: preserve material detail without oversized random cracks.
Lf = function(seed,color) {
  return Pf(256,256,(ctx,w,h) => {
    const random=Mf(seed*31+17);
    ctx.fillStyle='#'+color.toString(16).padStart(6,'0');ctx.fillRect(0,0,w,h);
    for(let i=0;i<2400;i++){const c=random()>.5?255:0;ctx.fillStyle=`rgba(${c},${c},${c},.027)`;ctx.fillRect(random()*w,random()*h,1,1);}
  });
};

Object.assign(Vf.prototype, {
  async loadModelAsset(url) {
    if(this.modelAssets.has(url)) return this.modelAssets.get(url);
    const promise=(async()=>{
      let asset;
      if(url.startsWith('data:')){
        const raw=atob(url.slice(url.indexOf(',')+1));
        const bytes=new Uint8Array(raw.length);
        for(let i=0;i<raw.length;i++)bytes[i]=raw.charCodeAt(i);
        asset=await this.gltfLoader.parseAsync(bytes.buffer,'');
      }else asset=await this.gltfLoader.loadAsync(url);
      asset.scene.traverse(mesh=>{
        if(!mesh.isMesh)return;
        this.sharedModelGeometries.add(mesh.geometry);
        for(const material of Array.isArray(mesh.material)?mesh.material:[mesh.material]){
          this.sharedModelMaterials.add(material);
          Object.values(material).forEach(texture=>{
            if(texture?.isTexture){texture.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy());this.sharedModelTextures.add(texture);}
          });
        }
      });
      return asset;
    })();
    this.modelAssets.set(url,promise);
    return promise;
  },

  prepareHumanVisual(source,height,role='gala') {
    const model=md(source),visual=new U();
    visual.rotation.y=Math.PI;
    visual.add(model);model.updateMatrixWorld(true);
    const box=new ur().setFromObject(model),size=box.getSize(new z()),center=box.getCenter(new z());
    const scale=height/size.y;
    model.position.x-=center.x;model.position.z-=center.z;model.position.y-=box.min.y;
    visual.scale.setScalar(scale);
    model.traverse(mesh=>{
      if(!mesh.isMesh)return;
      mesh.castShadow=true;
      // Broad daylight shadows on a small animated mesh produced severe shadow acne.
      mesh.receiveShadow=false;
      if(mesh.isSkinnedMesh)mesh.frustumCulled=false;
      const materials=(Array.isArray(mesh.material)?mesh.material:[mesh.material]).map(original=>{
        const material=original.clone();
        material.roughness=role==='military'?.8:.72;
        material.metalness=role==='military'?.08:.06;
        material.normalScale?.set(.5,.5);
        material.transparent=false;material.opacity=1;material.depthWrite=true;material.alphaTest=0;
        if(role==='gala' && material.map)material.map=this.createGalaDiffuseTexture(material.map);
        if(material.color)material.color.setHex(role==='military'?0xe5e7e1:0xffffff);
        material.needsUpdate=true;return material;
      });
      mesh.material=Array.isArray(mesh.material)?materials:materials[0];
    });
    visual.updateMatrixWorld(true);
    return {visual,model};
  },

  makeHumanRig(asset,height,role) {
    const {visual,model}=this.prepareHumanVisual(asset.scene,height,role);
    const mixer=new zs(model),actions={};
    for(const clip of asset.animations){
      const name=clip.name.toLowerCase();
      if(!['idle','walk','run'].includes(name))continue;
      const clean=clip.clone();
      clean.tracks=clean.tracks.filter(track=>model.getObjectByName(track.name.split('.')[0]));
      actions[name]=mixer.clipAction(clean);
    }
    const rig={visual,model,mixer,actions,currentAction:null};
    this.setRigAction(rig,'idle',0);mixer.update(0);
    visual.updateMatrixWorld(true);
    return rig;
  },

  async upgradeGalaModel(actor,token) {
    try{
      const asset=await this.loadModelAsset(kf);
      if(token!==this.worldToken||actor!==this.player||!actor.parent)return;
      const rig=this.makeHumanRig(asset,2.05,'gala');
      actor.add(rig.visual);actor.userData.realRig=rig;
      actor.userData.bodyRoot.visible=false;
      const hands=[],rings=[];
      actor.updateMatrixWorld(true);
      for(const [side,name] of [[-1,'mixamorigLeftHand'],[1,'mixamorigRightHand']]){
        const bone=rig.model.getObjectByName(name);
        if(!bone)continue;
        const power=this.createHandPower(side),worldScale=bone.getWorldScale(new z());
        power.anchor.scale.setScalar(1/Math.max(.001,worldScale.x));
        // One small hand light per character keeps the echo visible without washing out skin.
        power.anchor.children.filter(c=>c.isPointLight).forEach(c=>{c.intensity=1.2;c.distance=2.2;});
        bone.add(power.anchor);hands.push(power.anchor);rings.push(...power.rings);
      }
      if(hands.length===2){actor.userData.hands=hands;actor.userData.energyRings=rings;}
    }catch(error){
      console.error('No se pudo preparar a Gala.',error);
      this.callbacks.onToast?.('No se pudo cargar el personaje. Recargá la partida.');
      throw error;
    }
  },

  async upgradeMilitaryModel(actor,token) {
    const asset=await this.loadModelAsset(Af);
    if(token!==this.worldToken||!actor.parent)return;
    const data=actor.userData,rig=this.makeHumanRig(asset,data.isBoss?2.25:data.type==='heavy'?2.18:1.96,'military');
    // Scale is applied once. Each clone owns its skeleton, mixer and materials.
    actor.scale.setScalar(1);data.baseScale=1;
    data.fallbackChildren.forEach(child=>child.visible=false);
    actor.add(rig.visual);data.realRig=rig;
    rig.model.traverse(mesh=>{
      if(!mesh.isMesh)return;
      for(const material of Array.isArray(mesh.material)?mesh.material:[mesh.material]){
        if(data.isBoss)material.color?.setHex(0xc1aaa4);
        else if(data.type==='heavy')material.color?.setHex(0xbcc4b6);
        material.emissive?.setHex(0x000000);
      }
    });
    // A restrained red marker distinguishes corruption; it does not recolor the entire uniform.
    const marker=Z(new io(data.isBoss?.72:.43,.018,6,32),new G({color:0xc64043,transparent:true,opacity:.55,depthWrite:false}),false);
    marker.rotation.x=-Math.PI/2;marker.position.y=.055;actor.add(marker);data.commanderAura=marker;
  },

  buildWorld(index) {
    this.civilians=[];this.roadCount=0;this.rescued=0;this.bossSpawned=false;this.bossDefeated=false;
    legacy.buildWorld.call(this,index);
    this.renderer.toneMappingExposure=1.14;
    this.cameraFill.intensity=1.5;
    this.scene.traverse(object=>{
      if(object.isDirectionalLight&&object.castShadow){
        object.intensity=3.1;object.shadow.bias=-.00018;object.shadow.normalBias=.035;
        object.shadow.mapSize.set(this.isTouch?1024:2048,this.isTouch?1024:2048);
        object.shadow.camera.left=-38;object.shadow.camera.right=38;object.shadow.camera.top=58;object.shadow.camera.bottom=-58;
        object.shadow.camera.updateProjectionMatrix();
      }else if(object.isHemisphereLight)object.intensity=2.15;
      if(object.isMesh&&object.material?.bumpScale>.025)object.material.bumpScale=.012;
    });
    // Cap local lamps to avoid very expensive shaders on phones.
    let lamps=0;const remove=[];
    this.scene.traverse(object=>{if(object.isPointLight&&object!==this.cameraFill&&++lamps>5)remove.push(object);});
    remove.forEach(light=>light.removeFromParent());
    this.playerReady=Promise.all([this.loadModelAsset(kf),this.loadModelAsset(Af)]);
    this.playerReady.catch(()=>{});
    this.cameraDistance=this.isTouch?(innerHeight>innerWidth?6.8:6.4):6.1;
    this.cameraPitch=.17;
    this.enemyBars=[];
  },

  addSkyDome(level) {
    // Atmospheric sphere; no translucent crossing rectangles in the sky.
    const top=new W(level.sky),horizon=new W(level.fog);
    const dome=Z(new ro(110,28,18),new ho({
      uniforms:{topColor:{value:top},horizonColor:{value:horizon}},
      vertexShader:'varying float altitude;void main(){altitude=normalize(position).y;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
      fragmentShader:'uniform vec3 topColor;uniform vec3 horizonColor;varying float altitude;void main(){gl_FragColor=vec4(mix(horizonColor,topColor,smoothstep(-.05,.75,altitude)),1.0);}',
      side:1,depthWrite:false
    }),false);this.scene.add(dome);
  },

  addRoad(x,zPos,width,length) {
    const cross=width>length,w=Math.min(width,length),h=Math.max(width,length);
    const texture=Ff(Sf[this.levelIndex].theme);texture.repeat.set(1,Math.max(1,h/30));
    const road=Z(new no(w,h),new q({map:texture,color:0xb0b3b7,roughness:.93,metalness:0,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),false,true);
    road.rotation.x=-Math.PI/2;road.rotation.z=cross?Math.PI/2:0;
    road.position.set(x,.025+(this.roadCount++||0)*.006,zPos);this.scene.add(road);
  },

  isFree(position,radius=.55) {
    const bounds=Sf[this.levelIndex].bounds;
    return Math.abs(position.x)<bounds.x-radius&&Math.abs(position.z)<bounds.z-radius&&this.colliders.every(c=>Math.hypot(position.x-c.x,position.z-c.z)>c.radius+radius+.12);
  },
  freePosition(desired,radius=.6) {
    if(this.isFree(desired,radius))return desired.clone().setY(0);
    for(let ring=1;ring<=24;ring++)for(let n=0;n<20;n++){
      const angle=n/20*Math.PI*2,p=desired.clone().add(new z(Math.sin(angle)*ring*.55,0,Math.cos(angle)*ring*.55));
      if(this.isFree(p,radius))return p.setY(0);
    }
    return new z(0,0,Sf[this.levelIndex].start[2]-4);
  },
  moveActor(actor,direction,speed,dt,radius=.6) {
    if(direction.lengthSq()<.001)return;
    const before=actor.position.clone(),step=speed*dt;
    const desired=before.clone().addScaledVector(direction,step);
    if(this.isFree(desired,radius)){actor.position.copy(desired);return;}
    for(const angle of [.55,-.55,1.05,-1.05,1.55,-1.55]){
      const slide=direction.clone().applyAxisAngle(Df,angle),candidate=before.clone().addScaledVector(slide,step);
      if(this.isFree(candidate,radius)){actor.position.copy(candidate);return;}
    }
  },

  addMissionTargets(level) {
    const saved=level.targets;
    // Mission locations must be reachable; the original first neighbor was inside a house collider.
    level.targets=saved.map(target=>({...target,position:this.freePosition(new z(...target.position),2.2).toArray()}));
    legacy.addMissionTargets.call(this,level);level.targets=saved;
    this.missionTargets.forEach((target,index)=>{
      if(target.userData.kind==='survivor'){
        const originals=target.children.filter(c=>c!==target.userData.beacon&&c!==target.userData.beam&&c!==target.userData.light);
        originals.forEach(c=>c.visible=false);
      }
      target.userData.rescueProgress=0;target.userData.people=[];
      for(let n=0;n<2;n++){
        const pos=this.freePosition(target.position.clone().add(new z(n?1:-1,0,.7)),.5);
        const person=new U();person.position.copy(pos);person.rotation.y=Math.PI*.85;
        person.userData={rescued:false,evacuated:false,time:0,index:index*2+n,target};
        this.scene.add(person);this.civilians.push(person);target.userData.people.push(person);
        this.upgradeCivilian(person,this.worldToken,index*2+n);
      }
    });
    this.exitMarker.position.copy(this.freePosition(new z(...level.exit),3));
  },
  async upgradeCivilian(person,token,index) {
    const asset=await this.loadModelAsset(kf);
    if(token!==this.worldToken||!person.parent)return;
    const rig=this.makeHumanRig(asset,index%2?1.72:1.84,'civilian');
    rig.model.traverse(mesh=>{
      if(mesh.isMesh)(Array.isArray(mesh.material)?mesh.material:[mesh.material]).forEach(m=>{
        m.color?.setHex([0xc8d3e3,0xe9d4ba,0xb7c6af,0xd7b4ad,0xc9b9db,0xabc9ca][index%6]);
      });
    });
    person.add(rig.visual);person.userData.rig=rig;
  },

  createAlly() {
    legacy.createAlly.call(this);
    const actor=this.ally,token=this.worldToken;
    this.loadModelAsset(Af).then(asset=>{
      if(token!==this.worldToken||actor!==this.ally)return;
      const rig=this.makeHumanRig(asset,1.99,'military');
      actor.children.forEach(child=>child.visible=false);
      rig.model.traverse(mesh=>{if(mesh.isMesh)(Array.isArray(mesh.material)?mesh.material:[mesh.material]).forEach(m=>m.color?.setHex(0xacccbd));});
      actor.add(rig.visual);actor.userData.realRig=rig;
    }).catch(error=>console.warn('Ivo conserva su modelo compatible.',error));
  },
  updateAlly(dt) {
    const before=this.ally?.position.clone();
    legacy.updateAlly.call(this,dt);
    const rig=this.ally?.userData.realRig;
    if(rig){this.setRigAction(rig,before.distanceTo(this.ally.position)>.005?'run':'idle');rig.mixer.update(dt*.86);}
  },

  startLevel(index) {
    legacy.startLevel.call(this,index);
    this.rescued=0;this.supplyTimer=20;this.invulnerable=0;this.meleeCooldown=0;
    this.bossSpawned=false;this.bossDefeated=false;this.rescueProgress=0;
    this.keys.clear();this.joystick.set(0,0);this.shootHeld=false;this.lastDashAt=-10000;
    this.lastHudAt=-1000;this.lastFootstep=-1;this.navClock=0;
    this.cameraDistance=this.isTouch?(innerHeight>innerWidth?6.8:6.4):6.1;this.cameraPitch=.17;
    this.pendingWaveAt=0;this.pendingGrioxAt=0;this.pendingFinishAt=0;
    this.state='playing';this.updateCamera(1);
    this.callbacks.onToast?.('Acercate a la señal dorada. Hay personas custodiadas.');
  },
  setState(state) {
    legacy.setState.call(this,state);
    if(state!=='playing'){this.keys.clear();this.joystick.set(0,0);this.shootHeld=false;}
  },
  powerState() {return {dashUnlocked:true,shieldUnlocked:this.levelIndex>=2,dashCooldown:this.dashCooldown,shieldCooldown:this.shieldCooldown,shieldActive:this.shieldTime>0};},
  hudState() {return {...legacy.hudState.call(this),rescued:this.rescued||0,totalCivilians:6};},

  spawnWave() {
    if(this.state!=='playing'||!this.activeTarget)return;
    const target=this.activeTarget,settings=target.userData.encounter;
    const roster=[...Array(settings.soldiers||0).fill('soldier'),...Array(settings.shooters||0).fill('shooter'),...Array(settings.heavies||0).fill('heavy')];
    this.wave++;
    roster.forEach((type,index)=>{
      const actor=this.createMilitary(type),angle=index/roster.length*Math.PI*2;
      let position=this.freePosition(target.position.clone().add(new z(Math.sin(angle)*7,0,Math.cos(angle)*7)),.8);
      if(position.distanceTo(this.player.position)<5)position=this.freePosition(target.position.clone().add(new z(Math.sin(angle)*10,0,-9)),.8);
      actor.position.copy(position);this.scene.add(actor);this.enemies.push(actor);
    });
    this.sound.wave();
    this.callbacks.onWave?.({wave:this.wave,enemies:this.enemies.length,commander:false,label:target.userData.label});
    this.callbacks.onToast?.(`OLEADA ${this.wave}/3 · LIBERÁ A LOS CIVILES`);
  },

  createMilitary(type,name='') {
    const actor=legacy.createMilitary.call(this,type,name),d=actor.userData;
    d.health=d.maxHealth=type==='commander'?ZR.bossHealth[this.levelIndex]:type==='heavy'?145+this.levelIndex*12:62+this.levelIndex*9;
    d.radius=type==='commander'?.83:type==='heavy'?.74:.62;
    d.speed=type==='commander'?2.5:type==='heavy'?1.9:2.7+this.levelIndex*.12;
    d.shootTimer=1.8+Math.random();d.windup=0;d.attackClock=5;d.regenClock=15;d.regenWindup=0;d.regenDamage=0;
    return actor;
  },

  spawnCampaignBoss() {
    if(this.bossSpawned)return;
    this.bossSpawned=true;this.grioxSpawned=this.levelIndex===4;
    const boss=this.levelIndex===4?this.createGriox(false):this.createMilitary('commander',Sf[this.levelIndex].commander);
    const d=boss.userData;
    d.health=d.maxHealth=ZR.bossHealth[this.levelIndex];d.regenClock=15;d.regenWindup=0;d.regenDamage=0;d.attackClock=5;d.phase=1;
    boss.position.copy(this.freePosition(this.exitMarker.position.clone().add(new z(0,0,5)),1.5));
    this.scene.add(boss);this.enemies.push(boss);this.mainBoss=boss;
    this.exitMarker.visible=false;
    this.updateBossCallback(boss);this.sound.cue(this.levelIndex===4?'griox':'wave');
    this.callbacks.onToast?.(this.levelIndex===4?'GRIOX · ROMPÉ EL CÍRCULO':'EL JEFE BLOQUEA LA SALIDA');
  },

  checkProgress() {
    if(this.state!=='playing'||this.pendingWaveAt||this.pendingFinishAt)return;
    if(this.enemies.length)return;
    if(this.activeTarget?.userData.state==='engaged'){
      this.activeTarget.userData.state='cleared';this.callbacks.onToast?.('ZONA ASEGURADA · ACERCATE A LOS CIVILES PARA LIBERARLOS');
    }
    if(this.activeTarget?.userData.state==='cleared')return;
    if(this.completedObjectives===this.missionTargets.length){
      if(!this.bossSpawned){this.spawnCampaignBoss();return;}
      if(this.bossDefeated){
        this.revealExit();
        if(this.player.position.distanceTo(this.exitMarker.position)<3.3)this.pendingFinishAt=this.elapsed*1000+650;
      }
      return;
    }
    const target=this.missionTargets.find(t=>t.userData.state==='available');
    if(target&&target.position.distanceTo(this.player.position)<17){
      this.activeTarget=target;target.userData.state='engaged';this.pendingWaveAt=this.elapsed*1000+1200;
      this.callbacks.onToast?.('PATRULLA EN ALERTA · PREPARATE');
    }
  },

  updateRescues(dt) {
    const target=this.activeTarget;
    if(target?.userData.state==='cleared'){
      const distance=target.position.distanceTo(this.player.position);
      target.userData.rescueProgress=distance<3.2?Math.min(1,target.userData.rescueProgress+dt/1.2):0;
      const ui=document.getElementById('rescue-prompt');
      if(ui){ui.hidden=distance>=5;ui.textContent=distance<3.2?`LIBERANDO CIVILES · ${Math.round(target.userData.rescueProgress*100)}%`:'ACERCATE PARA LIBERAR A LOS CIVILES';}
      if(target.userData.rescueProgress>=1){
        target.userData.state='completed';target.userData.completed=true;target.userData.beam.visible=false;
        target.userData.beacon.material.color.setHex(0x72d6ad);target.userData.light.color.setHex(0x72d6ad);target.userData.light.intensity=1;
        this.completedObjectives++;this.rescued+=2;this.activeTarget=null;
        target.userData.people.forEach((person,i)=>{
          person.userData.rescued=true;
          person.userData.destination=this.freePosition(new z(i?8:-8,0,Math.min(Sf[this.levelIndex].bounds.z-2,target.position.z+13)),.5);
        });
        this.health=Math.min(100,this.health+18);this.echo=Math.min(100,this.echo+25);
        this.sound.objective('survivor');this.callbacks.onToast?.(`DOS PERSONAS A SALVO · ${this.rescued}/6 · VIDA +18`);
        if(ui)ui.hidden=true;
      }
    }
    for(const person of this.civilians){
      const d=person.userData;if(d.evacuated)continue;
      let moving=false;
      if(d.rescued){
        const direction=d.destination.clone().sub(person.position).setY(0);
        if(direction.length()>1){moving=true;this.moveActor(person,direction.normalize(),3,dt,.38);Nf(person,direction);}
        d.time+=dt;if(d.time>11){d.evacuated=true;person.visible=false;}
      }
      if(d.rig){this.setRigAction(d.rig,moving?'run':'idle',.3);d.rig.mixer.update(dt*.9);}
    }
  },

  addPickups(index) {
    const start=Sf[index].start[2];
    for(const [x,zPos] of [[-8,start-6],[9,4],[-8,-29]])this.spawnMedkit(this.freePosition(new z(x,0,zPos),.6));
  },
  spawnMedkit(position) {
    if(this.pickups.length>=6)return;
    const group=new U(),material=new q({color:0x406d5f,roughness:.85});
    const box=Z(new K(.58,.3,.44),material);box.position.y=.32;group.add(box);
    const white=new G({color:0xe7fff1});
    for(const dimensions of [[.3,.014,.075],[.075,.014,.27]]){
      const cross=Z(new K(...dimensions),white,false);cross.position.y=.48;group.add(cross);
    }
    const halo=Z(new io(.48,.025,6,32),new G({color:0x91e3b2,transparent:true,opacity:.75,depthWrite:false}),false);
    halo.rotation.x=-Math.PI/2;halo.position.y=.08;group.add(halo);group.position.copy(position).setY(0);
    group.userData={halo,index:this.pickups.length,collected:false};this.scene.add(group);this.pickups.push(group);
  },
  updatePickups(dt) {
    for(const pickup of [...this.pickups]){
      pickup.userData.halo.rotation.z+=dt;
      pickup.position.y=.06+Math.sin(this.elapsed*2.6+pickup.id)*.06;
      if(this.health<100&&pickup.position.distanceTo(this.player.position)<1.45){
        this.health=Math.min(100,this.health+32);this.echo=Math.min(100,this.echo+20);
        this.callbacks.onToast?.('BOTIQUÍN · VIDA +32');this.sound.tone(640,.24,'sine',.025,920);
        this.pickups.splice(this.pickups.indexOf(pickup),1);this.disposeActor(pickup);
      }
    }
    this.supplyTimer-=dt;
    if(this.supplyTimer<=0){
      this.supplyTimer=22;
      if(this.health<85&&this.pickups.length<5){
        this.spawnMedkit(this.freePosition(this.player.position.clone().add(new z(4,0,4)),.6));
        this.callbacks.onToast?.('HAY UN BOTIQUÍN CERCA · BUSCÁ EL ARO VERDE');
      }
    }
  },

  clearShot(from,to) {
    const dx=to.x-from.x,dz=to.z-from.z,length=dx*dx+dz*dz;
    if(length<.001)return true;
    return this.colliders.every(c=>{
      const t=Of(((c.x-from.x)*dx+(c.z-from.z)*dz)/length,0,1);
      if(from.y+(to.y-from.y)*t>4.8)return true;
      return Math.hypot(from.x+dx*t-c.x,from.z+dz*t-c.z)>c.radius*.84;
    });
  },
  segmentDistance(point,from,to) {
    const segment=to.clone().sub(from),length=segment.lengthSq();
    const t=length?Of(point.clone().sub(from).dot(segment)/length,0,1):0;
    return point.distanceTo(from.clone().addScaledVector(segment,t));
  },

  updateEnemies(dt) {
    for(const actor of [...this.enemies]){
      const d=actor.userData;
      d.shootTimer-=dt;d.meleeTimer-=dt;d.hitFlash=Math.max(0,(d.hitFlash||0)-dt);
      if(d.isBoss)this.updateBossAbilities(actor,dt);
      if(d.isGriox){
        if(!d.regenWindup)legacy.updateGriox.call(this,actor,dt);
        continue;
      }
      const offset=this.player.position.clone().sub(actor.position).setY(0),distance=offset.length();
      const direction=distance>.001?offset.normalize():new z(0,0,-1);
      const hold=d.type==='shooter'?11:d.type==='heavy'?7:d.isBoss?6:4.5;
      const canSee=this.clearShot(actor.position.clone().setY(1.4),this.player.position.clone().add(new z(0,1.2,0)));
      const moving=(distance>hold||!canSee)&&!d.regenWindup&&!d.windup;
      if(moving)this.moveActor(actor,direction,d.speed*(d.phase===2?1.15:1),dt,d.radius);
      if(distance<2.4&&!d.regenWindup)this.moveActor(actor,direction.clone().negate(),1.7,dt,d.radius);
      for(const other of this.enemies){
        if(actor===other)continue;
        const away=actor.position.clone().sub(other.position).setY(0),gap=away.length();
        if(gap>.01&&gap<d.radius+other.userData.radius+.12)this.moveActor(actor,away.normalize(),1.7,dt,d.radius);
      }
      Nf(actor,direction);
      if(d.realRig){
        this.setRigAction(d.realRig,moving?(d.type==='heavy'?'walk':'run'):'idle',.2);
        d.realRig.mixer.timeScale=moving?.82:1;d.realRig.mixer.update(dt);
      }
      // No scaling the whole skeleton when hit: use a short lean and color flash.
      actor.rotation.z=d.hitFlash>0?Math.sin(d.hitFlash*60)*.035:0;
      if(d.commanderAura){d.commanderAura.material.opacity=d.windup||d.regenWindup?.92:.36;d.commanderAura.rotation.z+=dt;}
      if(!d.regenWindup&&d.windup>0){
        d.windup-=dt;
        if(d.windup<=0){
          const start=actor.position.clone().add(new z(.18,1.43,-.15));
          if(this.clearShot(start,d.aim)){
            const aim=d.aim.clone().sub(start).normalize(),count=d.isBoss?3:d.type==='heavy'?2:1;
            for(let i=0;i<count;i++)this.createProjectile('enemy',start,aim.clone().applyAxisAngle(Df,(i-(count-1)/2)*.09),d.damage,12+this.levelIndex,'bullet');
          }
          d.shootTimer=(d.isBoss?1.2:d.type==='shooter'?1.65:2.25)*(d.phase===2?.78:1);
        }
      }else if(!d.regenWindup&&distance<24&&d.shootTimer<=0&&canSee){
        d.windup=d.isBoss?.65:.8;
        d.aim=this.player.position.clone().add(new z(0,1,0));
      }
      if(distance<1.35&&d.meleeTimer<=0){this.damagePlayer(d.damage*.7);d.meleeTimer=1.4;}
      this.updateRifle(actor);
    }
  },

  updateRifle(actor) {
    const d=actor.userData;
    if(!d.realRig)return;
    if(!d.rifle){
      const gun=new U(),dark=new q({color:0x24282b,metalness:.5,roughness:.5});
      const body=Z(new K(.085,.13,.47),dark);body.position.z=-.22;gun.add(body);
      const barrel=Z(new Ca(.025,.025,.36,8),dark);barrel.rotation.x=Math.PI/2;barrel.position.z=-.61;gun.add(barrel);
      const stock=Z(new K(.075,.12,.22),dark);stock.position.z=.1;gun.add(stock);
      const magazine=Z(new K(.065,.17,.1),dark);magazine.position.set(0,-.1,-.2);gun.add(magazine);
      actor.add(gun);d.rifle=gun;
    }
    const hand=d.realRig.model.getObjectByName('mixamorigRightHand');
    if(hand){actor.updateMatrixWorld(true);d.rifle.position.copy(actor.worldToLocal(hand.getWorldPosition(new z())));}
    else d.rifle.position.set(.3,1.4,-.3);
  },

  updateBossAbilities(actor,dt) {
    const d=actor.userData;
    d.regenClock-=dt;d.attackClock-=dt;
    if(d.regenWindup>0){
      d.regenWindup-=dt;
      if(d.regenWindup<=0){
        d.health=Math.min(d.maxHealth,d.health+d.maxHealth*.1);
        d.regenClock=18;this.updateBossCallback(actor);
        this.spawnEnergyRing(actor.position.clone().add(new z(0,1.2,0)),0xe1b362,1.6,false);
        this.callbacks.onToast?.('EL JEFE RECUPERÓ VIDA');
      }
    }else if(d.regenClock<=0&&d.health<d.maxHealth*.93){
      d.regenWindup=2.6;d.regenDamage=0;d.windup=0;
      this.callbacks.onToast?.('EL JEFE INTENTA CURARSE · ATACALO PARA INTERRUMPIR');
      this.updateBossCallback(actor);
    }
    if(d.attackClock<=0&&!d.regenWindup){
      d.attackClock=d.isGriox?7:d.phase===2?6:8;
      const radius=d.isGriox?4.5:3.2+this.levelIndex*.3;
      this.warnArea(this.player.position.clone(),radius,1.6,18+this.levelIndex*3);
      if(this.levelIndex===2)this.warnArea(this.player.position.clone().add(new z(4,0,0)),2.4,2,16);
      this.callbacks.onToast?.(d.isGriox?'GRIOX MARCA TU POSICIÓN · SALÍ DEL CÍRCULO':'ATAQUE PESADO · SALÍ DE LA ZONA ROJA');
    }
  },
  warnArea(position,radius,delay,damage) {
    this.hazards??=[];
    const ring=Z(new io(radius,.055,8,56),new G({color:0xff5946,transparent:true,opacity:.8,depthWrite:false}),false);
    ring.rotation.x=-Math.PI/2;ring.position.copy(position).setY(.09);this.scene.add(ring);
    this.hazards.push({ring,radius,delay,damage,total:delay});
  },

  shoot() {
    if(this.state!=='playing'||this.shotCooldown>0||this.echo<(this.levelIndex>=3?10:7))return;
    const upgraded=this.levelIndex>=3,cost=upgraded?10:7;
    const from=this.player.position.clone().add(new z(0,1.35,0));
    const forward=new z(-Math.sin(this.cameraYaw),0,-Math.cos(this.cameraYaw));
    let target=null,best=Infinity;
    for(const enemy of this.enemies){
      const center=enemy.position.clone().add(new z(0,enemy.userData.isGriox?2.2:1.2,0));
      const delta=center.clone().sub(from),distance=delta.length(),dot=delta.normalize().dot(forward);
      const score=distance*(1.45-dot);
      if(distance<33&&dot>.46&&score<best&&this.clearShot(from,center)){target=center;best=score;}
    }
    const direction=target?target.sub(from).normalize():forward;
    this.echo-=cost;this.shotCooldown=upgraded?.34:.3;this.playerRecoil=.26;
    Nf(this.player,direction);this.player.updateMatrixWorld(true);
    const count=upgraded?2:1;
    for(let i=0;i<count;i++){
      const index=count===2?i:this.shotHand++%2;
      let origin=this.player.userData.hands[index]?.getWorldPosition(new z())||from.clone();
      // A corrupt or unfinished visual must never move the projectile outside the body.
      if(origin.distanceTo(from)>2.4)origin=from.clone();
      const aim=direction.clone().applyAxisAngle(Df,count===2?(i?-.018:.018):0);
      this.createProjectile('player',origin,aim,upgraded?26:34,25,'ring');
    }
    this.sound.shot();
  },
  tryDash() {
    if(this.state!=='playing'||this.dashCooldown>0)return;
    if(this.levelIndex>=1){legacy.tryDash.call(this);if(this.dashTime>0){this.invulnerable=.48;this.lastDashAt=this.elapsed*1000;}return;}
    if(this.echo<18)return;
    const direction=this.getMoveDirection();if(direction.lengthSq()<.01)direction.set(-Math.sin(this.cameraYaw),0,-Math.cos(this.cameraYaw));
    this.dashDirection.copy(direction.normalize());this.dashTime=.22;this.dashCooldown=1.6;this.echo-=18;this.invulnerable=.4;this.sound.dash();
  },
  tryMelee() {
    if(this.state!=='playing'||this.meleeCooldown>0)return;
    this.meleeCooldown=.75;this.playerRecoil=.38;
    this.spawnEnergyRing(this.player.position.clone().add(new z(0,1,0)),0xffb15a,1.8,false);
    for(const enemy of [...this.enemies])if(enemy.position.distanceTo(this.player.position)<2.7){this.damageEnemy(enemy,48);this.echo=Math.min(100,this.echo+6);}
    this.sound.impact();
  },

  updatePlayer(dt) {
    this.invulnerable=Math.max(0,(this.invulnerable||0)-dt);this.meleeCooldown=Math.max(0,(this.meleeCooldown||0)-dt);
    legacy.updatePlayer.call(this,dt);
    if(this.keys.has('KeyF'))this.shoot();
    const rig=this.player.userData.realRig;
    if(rig && this.playerRecoil>0){
      // Upper-body aiming layer, blended over locomotion. Legs retain their animation.
      const alpha=Math.min(1,this.playerRecoil/.13);
      for(const name of ['mixamorigLeftArm','mixamorigRightArm']){
        const bone=rig.model.getObjectByName(name);
        if(bone){const desired=bone.quaternion.clone();desired.premultiply(desired.clone().setFromAxisAngle(new z(1,0,0),-.22*alpha));bone.quaternion.copy(desired);}
      }
    }
    this.updateRescues(dt);this.updateNavigation(dt);
    for(const hazard of [...(this.hazards||[])]){
      hazard.delay-=dt;hazard.ring.material.opacity=.35+.55*Math.abs(Math.sin(hazard.delay*10));
      if(hazard.delay<=0){
        const position=hazard.ring.position;
        if(Math.hypot(position.x-this.player.position.x,position.z-this.player.position.z)<hazard.radius&&this.player.position.y<1.2)this.damagePlayer(hazard.damage);
        this.spawnEnergyRing(position.clone(),0xffa45c,hazard.radius,true);
        this.disposeActor(hazard.ring);this.hazards.splice(this.hazards.indexOf(hazard),1);
      }
    }
  },

  updateProjectiles(dt) {
    for(let i=this.projectiles.length-1;i>=0;i--){
      const shot=this.projectiles[i],before=shot.mesh.position.clone();
      shot.mesh.position.addScaledVector(shot.velocity,dt);shot.life-=dt;
      let remove=shot.life<=0||shot.mesh.position.y<.04||!this.clearShot(before,shot.mesh.position);
      if(!remove&&shot.owner!=='enemy'){
        for(const enemy of [...this.enemies]){
          const center=enemy.position.clone().add(new z(0,enemy.userData.isGriox?2.1:1.15,0));
          if(this.segmentDistance(center,before,shot.mesh.position)<enemy.userData.radius+shot.radius){
            this.damageEnemy(enemy,shot.damage);this.sound.impact();this.spawnEnergyRing(shot.mesh.position.clone(),0xffb36a,.45,false);remove=true;break;
          }
        }
      }else if(!remove&&shot.owner==='enemy'){
        const center=this.player.position.clone().add(new z(0,1.05,0));
        if(this.segmentDistance(center,before,shot.mesh.position)<.6+shot.radius){
          if(this.shieldTime>0&&this.levelIndex>=4){shot.owner='player';shot.damage=38;shot.velocity.multiplyScalar(-1.4);shot.mesh.material.color.setHex(0xff473c);}
          else{if(this.shieldTime<=0)this.damagePlayer(shot.damage);remove=true;}
        }
      }
      if(shot.style==='ring')shot.mesh.rotation.z+=dt*8;
      if(remove){this.scene.remove(shot.mesh);shot.mesh.material?.dispose();this.projectiles.splice(i,1);}
    }
  },

  damageEnemy(enemy,damage) {
    if(!this.enemies.includes(enemy))return;
    const d=enemy.userData;
    if(d.regenWindup>0){
      d.regenDamage+=damage;
      if(d.regenDamage>=55){d.regenWindup=0;d.regenClock=17;this.callbacks.onToast?.('REGENERACIÓN INTERRUMPIDA');}
    }
    if(d.isGriox&&!d.circleBroken&&d.health-damage<=d.maxHealth*.24){
      if(this.elapsed*1000-this.lastDashAt<2100){d.circleBroken=true;this.callbacks.onToast?.('¡CÍRCULO ROTO! TERMINÁ CON GRIOX');this.spawnEnergyRing(enemy.position.clone().add(new z(0,2,0)),0xffbd65,3.4,false);}
      else{d.health=d.maxHealth*.24;this.callbacks.onToast?.('IMPULSO + PULSO · ATACÁ JUSTO DESPUÉS DE ESQUIVAR');this.updateBossCallback(enemy);return;}
    }
    d.health=Math.max(0,d.health-damage);d.hitFlash=.13;
    if(d.isBoss)this.updateBossCallback(enemy);
    if(d.health<=0)this.killEnemy(enemy);
  },
  damagePlayer(damage) {
    if(this.state!=='playing'||this.invulnerable>0)return;
    this.invulnerable=.46;
    legacy.damagePlayer.call(this,damage);
  },
  updateBossCallback(enemy) {
    const d=enemy.userData;
    d.phase=d.isGriox?(d.health/d.maxHealth>.67?1:d.health/d.maxHealth>.35?2:3):(d.health/d.maxHealth>.45?1:2);
    this.callbacks.onBoss?.({active:true,name:d.isGriox?'GRIOX':d.name,health:d.health,maxHealth:d.maxHealth,
      phase:d.regenWindup>0?'REGENERANDO · ATACÁ PARA INTERRUMPIR':`FASE ${d.phase}${d.isGriox&&d.phase===3?' · IMPULSO + PULSO':''}`});
  },
  killEnemy(enemy) {
    if(!this.enemies.includes(enemy))return;
    const boss=enemy===this.mainBoss;
    legacy.killEnemy.call(this,enemy);
    if(boss){
      this.bossDefeated=true;
      for(const shot of this.projectiles){this.scene.remove(shot.mesh);shot.mesh.material?.dispose();}this.projectiles=[];
      for(const hazard of this.hazards||[])this.disposeActor(hazard.ring);this.hazards=[];
      this.callbacks.onToast?.('JEFE DERROTADO · LLEGÁ A LA SALIDA');this.health=Math.min(100,this.health+25);
    }else if(this.kills%4===0)this.spawnMedkit(this.freePosition(enemy.position,.5));
  },
  disposeActor(actor) {
    const geometries=new Set(Object.values(this.geometries||{})),materials=new Set(Object.values(this.materials||{})),disposed=new Set();
    actor.removeFromParent();
    actor.traverse(object=>{
      if(object.skeleton&&!disposed.has(object.skeleton)){disposed.add(object.skeleton);object.skeleton.dispose();}
      if(object.geometry&&!geometries.has(object.geometry)&&!this.sharedModelGeometries.has(object.geometry)&&!disposed.has(object.geometry)){disposed.add(object.geometry);object.geometry.dispose();}
      for(const material of Array.isArray(object.material)?object.material:object.material?[object.material]:[]){
        if(!materials.has(material)&&!this.sharedModelMaterials.has(material)&&!disposed.has(material)){disposed.add(material);material.dispose();}
      }
    });
  },
  updateEffects(dt) {
    const expired=this.effects.filter(effect=>effect.death&&effect.life<=dt).map(effect=>effect.object);
    legacy.updateEffects.call(this,dt);expired.forEach(actor=>this.disposeActor(actor));
  },
  disposeWorld() {
    for(const actor of [this.player,...(this.enemies||[]),...(this.civilians||[])]){
      const rig=actor?.userData.realRig||actor?.userData.rig;
      if(rig){rig.mixer.stopAllAction();rig.mixer.uncacheRoot(rig.model);}
      actor?.traverse(object=>object.skeleton?.dispose());
    }
    this.hazards=[];legacy.disposeWorld.call(this);
  },

  updateCamera(dt) {
    if(!this.player)return;
    const target=this.player.position.clone().add(new z(0,1.13,0));
    const distance=Math.max(this.cameraDistance,5.8),horizontal=Math.cos(this.cameraPitch)*distance;
    const side=new z(Math.cos(this.cameraYaw),0,-Math.sin(this.cameraYaw)).multiplyScalar(.48);
    let position=this.player.position.clone().add(new z(Math.sin(this.cameraYaw)*horizontal,2.45+Math.sin(this.cameraPitch)*distance,Math.cos(this.cameraYaw)*horizontal)).add(side);
    const segment=position.clone().sub(target),length=segment.x*segment.x+segment.z*segment.z;
    let fraction=1;
    for(const collider of this.colliders){
      const t=Of(((collider.x-target.x)*segment.x+(collider.z-target.z)*segment.z)/Math.max(.01,length),0,1);
      const near=target.clone().addScaledVector(segment,t);
      if(near.y<6&&Math.hypot(near.x-collider.x,near.z-collider.z)<collider.radius+.25)fraction=Math.min(fraction,Math.max(.52,t-.08));
    }
    if(fraction<1){position.lerpVectors(target,position,fraction);position.y=Math.max(position.y,this.player.position.y+3.6);}
    this.camera.position.lerp(position,dt>=1?1:1-Math.exp(-8*dt));
    this.camera.lookAt(target);this.camera.fov=Wt.lerp(this.camera.fov,this.dashTime>0?61:56,Math.min(1,dt*8));this.camera.updateProjectionMatrix();
  },
  resize() {
    legacy.resize.call(this);
    this.cameraDistance=this.isTouch?(innerHeight>innerWidth?6.8:6.4):6.1;
  },
  addLook(dx,dy) {
    if(this.state!=='playing')return;
    this.cameraYaw-=dx*(this.isTouch?.0048:.004);
    this.cameraPitch=Of(this.cameraPitch+dy*.0032,-.08,.43);
  },

  updateNavigation(dt) {
    this.navClock=(this.navClock||0)-dt;if(this.navClock>0)return;this.navClock=.12;
    const canvas=document.getElementById('radar'),label=document.getElementById('direction-label');
    if(!canvas)return;
    const ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height,center=w/2,scale=1.8;
    ctx.clearRect(0,0,w,h);ctx.fillStyle='#101c23d9';ctx.beginPath();ctx.arc(center,center,center-1,0,Math.PI*2);ctx.fill();ctx.save();ctx.beginPath();ctx.arc(center,center,center-6,0,Math.PI*2);ctx.clip();
    const point=position=>{const offset=position.clone().sub(this.player.position).applyAxisAngle(Df,-this.cameraYaw);return [center+offset.x*scale,center+offset.z*scale];};
    ctx.strokeStyle='#60758055';ctx.lineWidth=1;
    for(const collider of this.colliders){const [x,y]=point(new z(collider.x,0,collider.z));ctx.beginPath();ctx.arc(x,y,collider.radius*scale,0,Math.PI*2);ctx.stroke();}
    const dot=(position,color,radius)=>{const [x,y]=point(position);ctx.fillStyle=color;ctx.beginPath();ctx.arc(x,y,radius,0,Math.PI*2);ctx.fill();};
    for(const target of this.missionTargets)if(!target.userData.completed)dot(target.position,'#f4cd80',4);
    for(const kit of this.pickups)dot(kit.position,'#7de2b4',2.5);
    for(const enemy of this.enemies)dot(enemy.position,'#ff6860',enemy.userData.isBoss?5:2.5);
    if(this.exitOpen)dot(this.exitMarker.position,'#88e5c2',5);
    ctx.restore();ctx.fillStyle='#ffffff';ctx.beginPath();ctx.moveTo(center,center-5);ctx.lineTo(center-4,center+4);ctx.lineTo(center+4,center+4);ctx.closePath();ctx.fill();
    const objective=this.activeTarget||this.missionTargets.find(t=>!t.userData.completed)||this.mainBoss||this.exitMarker;
    if(objective&&label){
      const delta=objective.position.clone().sub(this.player.position),distance=delta.length();
      const angle=Math.atan2(delta.x,-delta.z)+this.cameraYaw;
      document.getElementById('direction-arrow').style.transform=`rotate(${angle}rad)`;
      label.textContent=`${Math.round(distance)} m · ${this.mainBoss?'JEFE':this.exitOpen?'SALIDA':this.activeTarget?.userData.state==='cleared'?'LIBERÁ A LOS CIVILES':'RESCATE'}`;
    }
    const rescues=document.getElementById('rescued-count');if(rescues)rescues.textContent=`${this.rescued}/6 A SALVO`;
  },
});

// Story sequences use the supplied artwork, with motion, subtitles and a skip control.
// Every transition now has its own narrative beat.
function zrStoryScenes(chapter) {
  const frames={
    1:[...$f.ally,{...$f.prologue[2],kicker:'PERSONAS DESAPARECIDAS',title:'LOS TRANSPORTES',text:'Los vecinos liberados señalan las vías. Los militares están llevando personas a una fábrica. Gala no piensa dejar a nadie atrás.',cue:'crowd'}],
    2:[{...$f.ally[0],kicker:'CAPÍTULO III · AUREN',title:'EL ÚLTIMO CONVOY',text:'Ivo intercepta una lista de prisioneros. El próximo tren sale de Auren. Gala sigue la señal mientras los sobrevivientes buscan refugio en Arrayanes.',cue:'ally'},{...$f.prologue[2],kicker:'LA VOZ EN LAS RADIOS',title:'GRIOX YA LO SABE',text:'Todas las radios pronuncian el nombre de Gala a la vez. «Venís a salvarlos. Eso te hace predecible». Ella sigue caminando.',cue:'griox'}],
    3:[...$f.griox,{...$f.ally[0],kicker:'LAS PERSONAS SON LA SEÑAL',title:'NADIE QUEDA ATRÁS',text:'Las antenas no transmitían órdenes: transmitían recuerdos robados. Los cautivos de Orpheon siguen conectados. Gala e Ivo deben apagar los generadores antes de entrar.',cue:'ally'}],
    4:[{...$f.griox[0],kicker:'CAPÍTULO V · EL NÚCLEO',title:'SEIS VOCES',text:'Dravox cae y la puerta de Orpheon se abre. Del otro lado, seis personas permanecen unidas a las anclas mentales. Griox las usa para reconstruirse.',cue:'griox'},{...$f.prologue[1],kicker:'EL CÍRCULO INCOMPLETO',title:'UNA ONDA DIFERENTE',text:'«Copia todo lo que repetís», dice Ivo. Gala mira sus manos. Si rompe el ritmo, si dispara justo después de un impulso, el círculo ya no será perfecto.',cue:'beam'}]
  };return frames[chapter]||$f.prologue;
}
tp = function(chapter,done){ep(zrStoryScenes(chapter),done);};

function zrInitializeInterface(game) {
  document.documentElement.dataset.zerathBuild=ZR.version;
  const defaultHud=game.callbacks.onHud;
  game.callbacks.onHud=state=>{
    defaultHud?.(state);
    $.waveChip.textContent=`OLEADAS ${Math.min(3,state.wave)}/3`;
    $.enemyCount.textContent=state.enemies?`${state.enemies} HOSTILES`:`${state.rescued||0}/6 PERSONAS A SALVO`;
  };
  game.callbacks.onRoute=({progress})=>{
    $.routeFill.style.width=`${progress*100}%`;$.routePercent.textContent=`${game.completedObjectives}/3`;
    if(game.mainBoss){$.routeLabel.textContent='DERROTÁ AL JEFE';$.objective.textContent=game.levelIndex===4?'Griox · combiná Impulso y Pulso para romper el círculo':'Interrumpí su curación y esquivá las zonas rojas';}
    else if(game.bossDefeated){$.routeLabel.textContent='SALIDA ABIERTA';$.objective.textContent='Las personas están a salvo · seguí la señal verde';}
    else if(game.activeTarget?.userData.state==='cleared'){$.routeLabel.textContent='LIBERÁ A LOS CIVILES';$.objective.textContent='Acercate a la señal dorada y quedate junto a las personas';}
    else{$.routeLabel.textContent='ZONAS LIBERADAS';$.objective.textContent=game.enemies.length?'Derrotá a la patrulla que custodia a los civiles':'Seguí la señal dorada para encontrar a los cautivos';}
  };
  const finish=game.callbacks.onEnd;
  game.callbacks.onEnd=result=>{
    finish?.(result);
    document.getElementById('result-rescues').textContent=`${game.rescued}/6`;
    if(result.success&&result.levelIndex<4)$.resultCopy.textContent=`Seis personas están a salvo. El jefe cayó y el camino hacia ${Sf[result.levelIndex+1].location} está abierto. Gala e Ivo siguen la señal de los prisioneros.`;
    if(result.success&&result.levelIndex===4)$.resultCopy.textContent='Griox perdió el control de Zerath. Gala liberó a los últimos cautivos y rompió el círculo. Las personas que rescataste pueden volver a casa.';
  };
  document.getElementById('melee-touch').addEventListener('pointerdown',event=>{event.preventDefault();game.tryMelee();});
  addEventListener('keydown',event=>{
    if(event.repeat)return;
    if(event.code==='KeyR')game.tryMelee();
    if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.code)&&game.state==='playing')event.preventDefault();
  });
  // Pointer release outside the canvas must not leave the attack held down.
  addEventListener('pointerup',event=>{if(event.pointerType==='mouse'&&event.button===2)game.setShootHeld(false);});
  addEventListener('blur',()=>{if(game.state==='playing')cp();});
  game.renderer.domElement.addEventListener('webglcontextlost',event=>{
    event.preventDefault();game.setState('paused');
    const error=document.getElementById('load-error');error.hidden=false;
    error.querySelector('p').textContent='El dispositivo perdió la imagen del juego. Recargá para volver al último nivel desbloqueado.';
  });
  document.getElementById('sound-toggle').addEventListener('click',()=>{
    game.sound.unlock();const context=game.sound.context;
    if(!context)return;
    game.audioMuted=!game.audioMuted;
    if(game.audioMuted)context.suspend();else context.resume();
    document.getElementById('sound-toggle').textContent=game.audioMuted?'SONIDO: APAGADO':'SONIDO: ACTIVADO';
  });
  const unlockAudio=game.sound.unlock.bind(game.sound);
  game.sound.unlock=()=>{if(!game.audioMuted)unlockAudio();};
  const select=document.getElementById('graphics-quality');
  const quality=mode=>{
    const pixel=mode==='smooth'?1:mode==='detail'?1.75:game.isTouch?1.25:1.6;
    game.renderer.setPixelRatio(Math.min(devicePixelRatio,pixel));
    game.renderer.shadowMap.enabled=mode!=='smooth';
    game.renderer.shadowMap.needsUpdate=true;
  };
  select.value=game.isTouch?'balanced':'detail';quality(select.value);select.addEventListener('change',()=>quality(select.value));
  addEventListener('resize',()=>quality(select.value));
  // Retain only this game's old cache cleanup. Never unregister unrelated service workers.
  document.getElementById('load-retry').addEventListener('click',()=>location.reload());
}

const ZR5_TEXTURES={"asphalt_02_diff":"./zerath-material-01-6.0.0.jpg","brick_wall_02_rough":"./zerath-material-02-6.0.0.jpg","brick_wall_02_nor_gl":"./zerath-material-03-6.0.0.jpg","asphalt_02_nor_gl":"./zerath-material-04-6.0.0.jpg","plaster_stone_wall_02_nor_gl":"./zerath-material-05-6.0.0.jpg","brick_wall_02_diff":"./zerath-material-06-6.0.0.jpg","asphalt_02_rough":"./zerath-material-07-6.0.0.jpg","plaster_stone_wall_02_diff":"./zerath-material-08-6.0.0.jpg","plaster_stone_wall_02_rough":"./zerath-material-09-6.0.0.jpg"};
const ZR5_MALE="./zerath-ivo-6.0.0.glb";
/* ZERATH 5 — compact streets, scanned materials and native human motion.
   All assets are packaged locally. Geometry is rendered in real time. */
const zr5Previous = {};
for (const key of Object.getOwnPropertyNames(Vf.prototype)) zr5Previous[key]=Vf.prototype[key];
ZR.version='5.0.0';
Sf.forEach((level,i)=>{
  level.bounds={x:18,z:45};level.start=[0,0,38];level.exit=[0,0,-39];
  const locations=[[-7.1,0,20],[7.1,0,0],[-7.1,0,-23]];
  level.targets.forEach((target,n)=>target.position=locations[n]);
  level.sky=[0x596a7a,0x696f7b,0x566778,0x52616d,0x344453][i];
  level.fog=[0x81919b,0x8f9093,0x84949d,0x778b93,0x516472][i];
});

function zr5Box(w,h,d,tile=2){
  const geo=new K(w,h,d),uv=geo.attributes.uv;
  for(let side=0;side<6;side++){
    const widths=[d,d,w,w,w,w],heights=[h,h,d,d,h,h];
    for(let n=0;n<4;n++){const i=side*4+n;uv.setXY(i,uv.getX(i)*widths[side]/tile,uv.getY(i)*heights[side]/tile);}
  }
  return geo;
}
function zr5Solid(color,roughness=.8,metalness=0){return new q({color,roughness,metalness});}

Object.assign(Vf.prototype,{
  ensureCityAssets(){
    if(this.cityAssets)return;
    this.cityAssets={};const pending=[];
    for(const [name,src] of Object.entries(ZR5_TEXTURES)){
      const texture=new cn();texture.wrapS=texture.wrapT=1000;
      texture.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());
      if(name.endsWith('_diff'))texture.colorSpace=tt;
      this.sharedModelTextures.add(texture);this.cityAssets[name]=texture;
      pending.push(new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>{texture.image=img;texture.needsUpdate=true;resolve();};img.onerror=reject;img.src=src;}));
    }
    // A soft environment provides reflected sky and window light on wet surfaces.
    const env=Pf(512,256,(ctx,w,h)=>{
      const gradient=ctx.createLinearGradient(0,0,0,h);gradient.addColorStop(0,'#6f879d');gradient.addColorStop(.45,'#bac7ca');gradient.addColorStop(.56,'#687576');gradient.addColorStop(1,'#192429');ctx.fillStyle=gradient;ctx.fillRect(0,0,w,h);
      ctx.fillStyle='#e4c19a';ctx.fillRect(150,82,28,22);ctx.fillStyle='#d0d9df';ctx.fillRect(325,28,80,65);
    });env.mapping=303;env.colorSpace=tt;this.cityEnvironment=env;this.sharedModelTextures.add(env);
    this.visualAssetsReady=Promise.all(pending);this.visualAssetsReady.catch(error=>console.error('No se pudieron cargar las superficies.',error));
  },
  cityPBR(name,color,roughness=.82){
    const a=this.cityAssets;
    return new q({color,map:a[name+'_diff'],normalMap:a[name+'_nor_gl'],normalScale:new R(.65,.65),roughnessMap:a[name+'_rough'],roughness,metalness:0,envMapIntensity:.45});
  },
  addEnvironment(index){
    this.ensureCityAssets();this.scene.environment=this.cityEnvironment;this.scene.environmentIntensity=.38;
    this.cityBatches=new Map();this.cityProps=new U();this.cityProps.name='Arquitectura de Zerath';this.scene.add(this.cityProps);
    this.cityM={brick:this.cityPBR('brick_wall_02',index===1?0xb5a695:0xa49a90),plaster:this.cityPBR('plaster_stone_wall_02',index===3?0x9aacae:0xb9bcb6),road:this.cityPBR('asphalt_02',0x818990,.52),pavement:this.cityPBR('plaster_stone_wall_02',0x8e999c,.93),stone:zr5Solid(0x697472),trim:zr5Solid(0xa3aaa4),metal:zr5Solid(0x303c43,.58,.65),rust:zr5Solid(0x634939,.8,.35),dark:zr5Solid(0x16222a,.42,.15),wood:zr5Solid(0x544e43),glass:zr5Solid(0x738f9a,.2,.68),warm:new q({color:0xcbb081,emissive:0xffb966,emissiveIntensity:.65,roughness:.5}),paint:zr5Solid(0xb5ac88),red:zr5Solid(0x543532,.75,.1)};
    // The old ground remains below this continuous, correctly tiled surface.
    const surface=Z(new no(42,94),this.cityM.road,false,true);
    surface.geometry.attributes.uv.array.forEach((v,i,a)=>a[i]=v*(i%2?94/3:42/3));
    surface.rotation.x=-Math.PI/2;surface.position.y=.012;this.cityProps.add(surface);
    for(const side of [-1,1]){
      this.cityBox('pavement',side*7.85,.025,0,3.6,.05,90,0,false,true,2.1);
      for(let zz=-44;zz<45;zz+=1.2)this.cityBox('stone',side*6.05,.07,zz,.18,.14,1.17);
    }
    if(index<2)this.addResidentialStreet(index);
    else this.addIndustrialStreet(index);
    this.addStreetDetails(index);
    this.flushCityBatches();
  },
  cityBox(key,x,y,zz,w,h,d,rotation=0,cast=false,tiled=false,tile=2){
    const material=typeof key==='string'?this.cityM[key]:key;
    if(tiled){const mesh=Z(zr5Box(w,h,d,tile),material,cast,true);mesh.position.set(x,y,zz);mesh.rotation.y=rotation;this.cityProps.add(mesh);return mesh;}
    const batchKey=material.uuid+':box:'+cast;
    if(!this.cityBatches.has(batchKey))this.cityBatches.set(batchKey,{geometry:new K(1,1,1),material,cast,matrices:[]});
    const transform=new U();transform.position.set(x,y,zz);transform.rotation.y=rotation;transform.scale.set(w,h,d);transform.updateMatrix();this.cityBatches.get(batchKey).matrices.push(transform.matrix.clone());
  },
  cityCylinder(key,x,y,zz,radius,height,axis='y',cast=false){
    const material=typeof key==='string'?this.cityM[key]:key,batchKey=material.uuid+':cyl:'+cast;
    if(!this.cityBatches.has(batchKey))this.cityBatches.set(batchKey,{geometry:new Ca(1,1,1,10),material,cast,matrices:[]});
    const transform=new U();transform.position.set(x,y,zz);transform.scale.set(radius,height,radius);
    if(axis==='x')transform.rotation.z=Math.PI/2;if(axis==='z')transform.rotation.x=Math.PI/2;
    transform.updateMatrix();this.cityBatches.get(batchKey).matrices.push(transform.matrix.clone());
  },
  flushCityBatches(){
    for(const {geometry,material,cast,matrices} of this.cityBatches.values()){
      const batch=new Bi(geometry,material,matrices.length);matrices.forEach((matrix,i)=>batch.setMatrixAt(i,matrix));batch.castShadow=cast;batch.receiveShadow=true;batch.computeBoundingSphere();this.cityProps.add(batch);
    }
    this.cityBatches.clear();
  },
  cityCollider(x,zz,w,d,height=5){this.colliders.push({x,z:zz,radius:Math.min(w,d)/2,hx:w/2,hz:d/2,height});},
  cityBuilding(side,zz,width,floors,seed,industrial=false,offset=0){
    const random=Mf(seed),depth=8.4,height=floors*3.05+1.1,x=side*(13.7+offset),face=side*(9.5+offset);
    const surface=industrial?'brick':seed%3===0?'brick':'plaster';
    this.cityBox(surface,x,height/2,zz,depth,height,width,0,true,true,2.1);
    this.cityCollider(x,zz,depth,width,height);
    // Plinth, floor courses and an overhanging roof have their own silhouette.
    this.cityBox('stone',face,.55,zz,.19,1.1,width+.04);
    this.cityBox('stone',x,height+.08,zz,depth+.6,.25,width+.45,0,true);
    this.cityBox('trim',face-side*.18,height-.22,zz,.65,.18,width+.45);
    for(let floor=1;floor<=floors;floor++){
      const fy=(floor-1)*3.05+2;
      if(floor>1)this.cityBox('stone',face,fy-1.5,zz,.27,.16,width);
      const columns=Math.max(2,Math.floor(width/2.45));
      for(let c=0;c<columns;c++){
        const wz=zz+(c-(columns-1)/2)*2.45,lit=random()>.76;
        this.cityBox('dark',face-side*.045,fy,wz,.14,2.15,1.52);
        this.cityBox(lit?'warm':'glass',face-side*.12,fy,wz,.04,1.88,1.28);
        for(const dz of [-.74,.74])this.cityBox('trim',face-side*.18,fy,wz+dz,.18,2.23,.11);
        for(const dy of [-1.05,1.05])this.cityBox('trim',face-side*.18,fy+dy,wz,.18,.11,1.56);
        this.cityBox('metal',face-side*.2,fy,wz,.08,2.04,.065);
        this.cityBox('metal',face-side*.2,fy+.12,wz,.08,.07,1.43);
        this.cityBox('stone',face-side*.23,fy-1.17,wz,.49,.17,1.74);
        // Broken panes and boarded windows vary between occupied and abandoned homes.
        if(random()>.78){this.cityBox('wood',face-side*.26,fy-.2,wz,.07,.16,1.55,.04);this.cityBox('wood',face-side*.28,fy+.32,wz,.07,.14,1.55,-.03);}
        if(!industrial&&floor>1&&c===1&&seed%2===0){
          this.cityBox('stone',face-side*.74,fy-1.17,wz,1.5,.16,2.25,0,true);
          this.cityBox('metal',face-side*1.43,fy-.17,wz,.07,.07,2.2);
          for(let bar=-1.04;bar<=1.05;bar+=.21)this.cityBox('metal',face-side*1.43,fy-.64,wz+bar,.035,.99,.035);
          for(const end of [-1.06,1.06])this.cityBox('metal',face-side*.8,fy-.17,wz+end,1.2,.055,.055);
        }
      }
    }
    // Downpipes, masonry joints, roof vents and a street-level entrance.
    for(const wz of [zz-width/2+.19,zz+width/2-.19])this.cityCylinder('metal',face-side*.16,height/2,wz,.055,height);
    const doorZ=zz-width*.27;
    this.cityBox('dark',face-side*.09,1.12,doorZ,.13,2.24,1.5);
    this.cityBox('wood',face-side*.17,1.06,doorZ,.08,2.08,1.27);
    this.cityBox('metal',face-side*.23,1.15,doorZ+.39,.1,.17,.045);
    this.cityBox('stone',face-side*.35,.06,doorZ,.7,.12,1.78);
    this.cityCylinder('metal',x+side*1.3,height+.6,zz,.2,1.3);
    this.cityBox('brick',x-side*1.8,height+.7,zz+1.7,.7,1.4,.8,0,true,true);
    if(seed%3===1){
      this.citySign(face-side*.29,2.92,zz,'FARMACIA',side,0x718477);
      const canopy=this.cityBox('metal',face-side*.75,2.55,zz,1.4,.16,width*.75,0,true);
    }else if(seed%3===2&&!industrial)this.citySign(face-side*.26,2.9,zz,['MIRADOR','ALMACÉN','ARRAYANES'][seed%3],side,0x826d53);
  },
  citySign(x,y,zz,text,side,color){
    const texture=Pf(512,96,(ctx,w,h)=>{ctx.fillStyle='#'+color.toString(16).padStart(6,'0');ctx.fillRect(0,0,w,h);ctx.strokeStyle='#b8b3a3';ctx.lineWidth=4;ctx.strokeRect(8,8,w-16,h-16);ctx.fillStyle='#e4dfcf';ctx.font='600 39px Georgia';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,w/2,h/2);});
    const sign=Z(new no(3.9,.72),new q({map:texture,roughness:.9}),false);sign.position.set(x,y,zz);sign.rotation.y=-side*Math.PI/2;this.cityProps.add(sign);
  },
  addResidentialStreet(index){
    let seed=141+index*60;
    for(const side of [-1,1])for(const [n,zz] of [38,27,15,3,-9,-21,-33,-44].entries()){
      const pocket=side<0&&(n===1||n===5)||side>0&&n===3;
      this.cityBuilding(side,zz,9.6,index===0?3+n%2:4+n%3,seed++,false,pocket?4.8:0);
      if(pocket)this.cityFence(side*15,zz,8.8,side);
    }
    // The end of the vista is a real facade, with a gap into the next district.
    for(const side of [-1,1])this.cityBuilding(side,-57,14,6,seed++,false);
    if(index===1){
      const base=Z(new Ca(2,2.3,.5,32),this.cityM.stone,true,true);base.position.set(0,.25,-10);this.cityProps.add(base);this.cityCollider(0,-10,4.2,4.2,1);
      const bowl=Z(new io(1.78,.19,10,32),this.cityM.trim);bowl.rotation.x=-Math.PI/2;bowl.position.set(0,.65,-10);this.cityProps.add(bowl);
      const center=Z(new Ca(.22,.42,2,12),this.cityM.stone,true);center.position.set(0,1.35,-10);this.cityProps.add(center);
    }
  },
  cityFence(x,zz,length,side){
    for(let p=-length/2;p<=length/2;p+=.45)this.cityBox('metal',x,1,zz+p,.055,2,.055);
    for(const y of [.45,1.75])this.cityBox('metal',x,y,zz,.065,.065,length);
    this.cityBox('stone',x,.18,zz,.3,.36,length);
  },
  addIndustrialStreet(index){
    let seed=770+index*10;
    for(const side of [-1,1])for(const [n,zz] of [37,20,3,-14,-31,-48].entries()){
      this.cityBuilding(side,zz,15,index===2?4:3+n%2,seed++,true);
      // External steam mains, flanges and inspection ladders.
      for(const y of [4.5,5.05]){
        this.cityCylinder('rust',side*9.02,y,zz,.18,14.7,'z');
        for(let k=-6;k<=6;k+=3)this.cityCylinder('metal',side*9.02,y,zz+k,.235,.12,'z');
      }
      for(const dx of [-.35,.35])this.cityBox('metal',side*8.98,3.15,zz+dx,.06,6.3,.06);
      for(let y=.4;y<6.4;y+=.36)this.cityBox('metal',side*8.98,y,zz,.08,.05,.75);
    }
    if(index===2){
      for(const x of [-3.2,-1.8])this.cityBox('metal',x,.05,0,.1,.1,89);
      for(let zz=-43;zz<44;zz+=.9)this.cityBox('wood',-2.5,.035,zz,2.5,.065,.2);
      this.cityTrain(3.8,-12);this.cityTrain(3.8,-29);
      this.cityBox('metal',0,8.7,-27,19,.45,1.1,0,true);
      this.cityBox('metal',0,8.7,16,19,.45,1.1,0,true);
    }
    if(index>=3){
      for(const zz of [-31,-3,25]){
        this.cityBox('metal',0,8.5,zz,19,.5,2.2,0,true);
        for(const side of [-1,1])this.cityBox('metal',side*8.4,4.1,zz,.35,8.2,.35,0,true);
        for(const edge of [-.95,.95]){
          this.cityBox('metal',0,9.65,zz+edge,18.2,.08,.08);
          for(let x=-8.6;x<9;x+=.7)this.cityBox('metal',x,9.08,zz+edge,.045,1.12,.045);
        }
        this.cityCylinder('rust',0,7.45,zz+.7,.25,18,'x');
      }
      for(const side of [-1,1])for(const zz of [29,9,-14])this.cityTank(side*7.8,zz);
    }
    if(index===4){
      // Tall foundry nave: rafters, clerestory glazing and damaged roof sections.
      for(let zz=-44;zz<46;zz+=7.2){
        for(const side of [-1,1]){
          this.cityBox('metal',side*8.9,6.7,zz,.38,13.4,.42,0,true);
          this.cityBox('metal',side*4.6,13.4,zz,9.2,.28,.32,0,true);
        }
        this.cityBox('glass',0,13.55,zz,7.3,.1,5.8);
      }
      for(const side of [-1,1])for(let zz=-35;zz<38;zz+=9){
        const points=[new z(side*8.6,.1,zz),new z(side*7.8,2.2,zz-1),new z(side*9.2,5.6,zz+2),new z(side*9.3,9.5,zz-1)];
        const vine=Z(new ao(new Ia(points),20,.17,7,false),new q({color:0x231e21,roughness:.42,metalness:.28}),true);this.cityProps.add(vine);
        const vein=Z(new ao(new Ia(points),20,.025,5,false),new q({color:0x8c302e,emissive:0x842a20,emissiveIntensity:.9}),false);vein.position.z+=.15;this.cityProps.add(vein);
      }
    }
  },
  cityTank(x,zz){
    this.cityCylinder('metal',x,1.3,zz,.62,2.6,'y',true);
    for(const y of [.15,.6,2,2.5])this.cityCylinder('rust',x,y,zz,.66,.085);
    this.cityCylinder('rust',x,2.95,zz,.095,.8);this.cityCollider(x,zz,1.3,1.3,3);
  },
  cityTrain(x,zz){
    this.cityBox('red',x,1.65,zz,2.7,2.7,10.8,0,true);this.cityBox('metal',x,3.08,zz,2.87,.24,11);
    for(const side of [-1,1])for(let k=-4.5;k<5;k+=1.8){
      this.cityBox('dark',x+side*1.37,2.14,zz+k,.05,1.15,1.14);this.cityBox('metal',x+side*1.4,2.14,zz+k-.61,.1,1.5,.07);
    }
    for(const k of [-3.5,3.5])for(const side of [-1,1])this.cityCylinder('metal',x+side*1.18,.42,zz+k,.42,.24,'x',true);
    this.cityCollider(x,zz,2.8,10.9,3.3);
  },
  addStreetDetails(index){
    const random=Mf(891+index);
    for(let zz=-41;zz<43;zz+=5.2)if(index<2)this.cityBox('paint',0,.026,zz,.13,.009,1.7);
    for(const side of [-1,1])for(let zz=-37;zz<=38;zz+=15){
      const x=side*6.9;
      this.cityCylinder('metal',x,2.4,zz,.068,4.8,'y',true);this.cityCylinder('metal',x-side*.46,4.75,zz,.053,1,'x');
      this.cityBox('metal',x-side*.91,4.77,zz,.66,.15,.33);this.cityBox('warm',x-side*.91,4.68,zz,.56,.025,.25);
      // Small light pools have a soft edge; only three lamps are actual local lights.
      if(side===-1&&zz>-20&&zz<26){const light=new ps(0xffb46e,4.7,9,2);light.position.set(x-side*.85,4.4,zz);this.scene.add(light);}
      this.cityBox('metal',side*8.35,.72,zz+3,1.1,1.44,.65,0,true);this.cityBox('stone',side*8.35,1.5,zz+3,1.2,.12,.74);
      this.cityCylinder('metal',side*7.7,.12,zz+4.3,.4,.05);
      for(let s=0;s<5;s++)this.cityBox('dark',side*7.7-.25+s*.12,.151,zz+4.3,.035,.008,.6);
    }
    for(let i=0;i<180;i++){
      const side=i%2?1:-1,x=side*(6.2+random()*2.7),zz=-42+random()*85;
      this.cityBox(i%3?'stone':'brick',x,.08+random()*.08,zz,.09+random()*.25,.1+random()*.17,.13+random()*.36,random()*Math.PI);
    }
    for(let i=0;i<18;i++){
      const x=(i%2?1:-1)*(2.5+random()*3.2),zz=-40+random()*81;
      const puddle=Z(new no(.7+random()*2.4,.8+random()*2.3),new _o({color:0x6b7c85,normalMap:this.cityAssets.asphalt_02_nor_gl,normalScale:new R(.018,.018),metalness:.26,roughness:.16,transparent:true,opacity:.32,depthWrite:false,envMapIntensity:.85}),false);
      puddle.rotation.x=-Math.PI/2;puddle.rotation.z=random()*Math.PI;puddle.position.set(x,.028,zz);this.cityProps.add(puddle);
    }
    if(index<2){this.createCar(-3.7,26,0x3f4e52,.06);this.createCar(4.1,-29,0x4e4340,-.1);}
    // Street barricades leave wide, legible routes for the rescue waves.
    for(const [x,zz] of [[-3,8],[3,-17]]){
      this.cityBox('stone',x,.47,zz,2.7,.94,.48,0,true,true,2);this.cityCollider(x,zz,2.7,.48,.95);
      for(let k=-1;k<=1;k++)this.cityBox('paint',x+k*.75,.61,zz+.246,.3,.38,.02,.15);
    }
    if(index<3){
      for(const [x,zz] of [[-8.25,34],[8.5,-14],[-8,-34]]){
        this.cityCylinder('wood',x,2.7,zz,.12,5.4,'y',true);
        for(let n=0;n<6;n++){
          const a=n*2.39,tip=new z(x+Math.sin(a)*(1.2+n*.12),4.1+n*.27,zz+Math.cos(a)*1.6);
          const stem=Z(new ao(new Ia([new z(x,2.4+n*.3,zz),new z(x+Math.sin(a)*.7,3.8+n*.2,zz+Math.cos(a)*.9),tip]),7,.026+n*.004,5,false),this.cityM.wood,true);this.cityProps.add(stem);
        }
      }
    }
    // Distant roofline reinforces scale beyond the playable streets.
    for(const side of [-1,1])for(let n=0;n<10;n++){
      const height=12+random()*17;this.cityBox('plaster',side*(25+random()*5),height/2,-63+n*13,9,height,10,0,false,true,3);
    }
  },
  addRubble(){},
  addPuddlesAndFire(){},
  addMineMatter(){},
  addSkyDome(level){
    const material=new ho({uniforms:{topColor:{value:new W(level.sky)},horizonColor:{value:new W(level.fog)}},side:1,depthWrite:false,
      vertexShader:'varying vec3 direction;void main(){direction=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
      fragmentShader:`varying vec3 direction;uniform vec3 topColor;uniform vec3 horizonColor;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
      void main(){vec3 d=normalize(direction);vec2 p=d.xz/(max(.08,d.y)+.25)*2.;float n=noise(p)*.5+noise(p*2.1)*.25+noise(p*4.3)*.125+noise(p*8.7)*.0625;vec3 sky=mix(horizonColor,topColor,smoothstep(0.,.85,d.y));sky=mix(sky,sky*.61,smoothstep(.28,.68,n)*smoothstep(-.02,.2,d.y));gl_FragColor=vec4(sky,1.);}`});
    this.scene.add(Z(new ro(130,28,18),material,false));
  },
  buildWorld(index){
    zr5Previous.buildWorld.call(this,index);
    this.renderer.toneMappingExposure=1.18;this.scene.fog.density=index===4?.012:.009;
    this.scene.traverse(object=>{
      if(object.isHemisphereLight){object.color.setHex(0xc1d3df);object.groundColor.setHex(0x4f565b);object.intensity=1.3;}
      if(object.isDirectionalLight){
        object.color.setHex(object.castShadow?0xffedcc:0x94b8d0);object.intensity=object.castShadow?2.55:.8;
        if(object.castShadow){this.citySun=object;object.shadow.camera.left=-19;object.shadow.camera.right=19;object.shadow.camera.top=25;object.shadow.camera.bottom=-25;object.shadow.normalBias=.025;object.shadow.bias=-.00015;object.shadow.camera.updateProjectionMatrix();this.scene.add(object.target);}
      }
    });
    this.cameraFill.intensity=2.15;this.cameraFill.distance=12;
    this.cameraDistance=this.isTouch?6.7:6.3;this.cameraPitch=.16;
    this.playerReady=Promise.all([this.loadModelAsset(kf),this.loadModelAsset(Af),this.loadModelAsset(ZR5_MALE),this.visualAssetsReady]);
  },
  prepareHumanVisual(source,height,role='gala'){
    const native=!!source.getObjectByName('Bip01');
    if(!native)return zr5Previous.prepareHumanVisual.call(this,source,height,role);
    const model=md(source),visual=new U();visual.add(model);
    // Rocketbox uses -Z as forward, unlike the military asset.
    model.updateMatrixWorld(true);const box=new ur().setFromObject(model),size=box.getSize(new z()),center=box.getCenter(new z());
    model.position.set(-center.x,-box.min.y+.6,-center.z);visual.scale.setScalar(height/size.y);
    model.traverse(mesh=>{
      if(!mesh.isMesh)return;mesh.castShadow=true;mesh.receiveShadow=false;mesh.frustumCulled=false;
      mesh.material=(Array.isArray(mesh.material)?mesh.material:[mesh.material]).map(original=>{
        const m=original.clone();m.normalScale?.set(.4,.4);m.roughness=m.name.includes('head')?.66:.82;m.metalness=0;
        if(role==='gala'&&m.name.includes('body'))m.color.setHex(0xa2a09c);
        if(m.name.includes('opacity')){m.alphaTest=.48;m.transparent=false;m.side=2;m.depthWrite=true;}
        return m;
      });
      if(mesh.material.length===1)mesh.material=mesh.material[0];
    });
    visual.updateMatrixWorld(true);return {visual,model};
  },
  async upgradeGalaModel(actor,token){
    const asset=await this.loadModelAsset(kf);if(token!==this.worldToken||actor!==this.player||!actor.parent)return;
    const rig=this.makeHumanRig(asset,1.98,'gala');actor.add(rig.visual);actor.userData.realRig=rig;actor.userData.bodyRoot.visible=false;
    const hands=[],rings=[];actor.updateMatrixWorld(true);
    for(const [side,name] of [[-1,'Bip01_L_Hand'],[1,'Bip01_R_Hand']]){
      const bone=rig.model.getObjectByName(name);if(!bone)continue;
      const power=this.createHandPower(side),scale=bone.getWorldScale(new z());power.anchor.scale.setScalar(.7/scale.x);
      power.anchor.children.filter(c=>c.isPointLight).forEach(light=>{light.intensity=.65;light.distance=1.8;});
      bone.add(power.anchor);hands.push(power.anchor);rings.push(...power.rings);
    }
    actor.userData.hands=hands;actor.userData.energyRings=rings;
  },
  async upgradeCivilian(person,token,index){
    const asset=await this.loadModelAsset(index%2?ZR5_MALE:kf);if(token!==this.worldToken||!person.parent)return;
    const rig=this.makeHumanRig(asset,index%2?1.87:1.73,'civilian');
    rig.model.traverse(mesh=>{if(mesh.isMesh)for(const m of Array.isArray(mesh.material)?mesh.material:[mesh.material])if(m.name.includes('body'))m.color?.setHex([0xa5aabd,0xb9af98,0x8ea7a4,0xa19c95,0xb3aeb8,0x8d9993][index%6]);});
    person.add(rig.visual);person.userData.rig=rig;rig.mixer.update(index*.77);
  },
  createAlly(){
    legacy.createAlly.call(this);const actor=this.ally,token=this.worldToken;
    this.loadModelAsset(ZR5_MALE).then(asset=>{
      if(token!==this.worldToken||actor!==this.ally)return;actor.children.forEach(c=>c.visible=false);
      const rig=this.makeHumanRig(asset,2.04,'ally');actor.add(rig.visual);actor.userData.realRig=rig;
      const hand=rig.model.getObjectByName('Bip01_R_Hand');if(hand){actor.updateMatrixWorld(true);const power=this.createHandPower(1);power.anchor.scale.setScalar(.6/hand.getWorldScale(new z()).x);power.anchor.traverse(o=>{if(o.material?.color)o.material.color.setHex(0x73c59a);if(o.material?.emissive)o.material.emissive.setHex(0x2c804e);if(o.isPointLight)o.intensity=.3;});hand.add(power.anchor);}
    }).catch(error=>console.error('No se pudo cargar a Ivo.',error));
  },
  isFree(position,radius=.55){
    const bounds=Sf[this.levelIndex].bounds;
    if(Math.abs(position.x)>=bounds.x-radius||Math.abs(position.z)>=bounds.z-radius)return false;
    return this.colliders.every(c=>c.hx!==undefined ? Math.hypot(Math.max(0,Math.abs(position.x-c.x)-c.hx),Math.max(0,Math.abs(position.z-c.z)-c.hz))>radius+.1 : Math.hypot(position.x-c.x,position.z-c.z)>c.radius+radius+.12);
  },
  clearShot(from,to){
    for(const c of this.colliders){
      const height=c.height||3.8;if(Math.min(from.y,to.y)>height)continue;
      if(c.hx!==undefined){
        let near=0,far=1;
        for(const key of ['x','z']){const half=key==='x'?c.hx:c.hz,delta=to[key]-from[key],minimum=c[key]-half-.025,maximum=c[key]+half+.025;
          if(Math.abs(delta)<1e-7){if(from[key]<minimum||from[key]>maximum){near=2;break;}}
          else{let a=(minimum-from[key])/delta,b=(maximum-from[key])/delta;if(a>b)[a,b]=[b,a];near=Math.max(near,a);far=Math.min(far,b);}
        }
        if(near<=far&&near<=1&&far>=0&&from.y+(to.y-from.y)*Math.max(0,near)<height)return false;
      }else{
        const dx=to.x-from.x,dz=to.z-from.z,l=dx*dx+dz*dz,t=l?Of(((c.x-from.x)*dx+(c.z-from.z)*dz)/l,0,1):0;
        if(Math.hypot(from.x+dx*t-c.x,from.z+dz*t-c.z)<c.radius&&from.y+(to.y-from.y)*t<height)return false;
      }
    }return true;
  },
  updateCamera(dt){
    if(!this.player)return;
    const target=this.player.position.clone().add(new z(0,1.13,0));
    const distance=Math.max(this.cameraDistance,5.8),horizontal=Math.cos(this.cameraPitch)*distance;
    const position=this.player.position.clone().add(new z(Math.sin(this.cameraYaw)*horizontal+.48*Math.cos(this.cameraYaw),2.45+Math.sin(this.cameraPitch)*distance,Math.cos(this.cameraYaw)*horizontal-.48*Math.sin(this.cameraYaw)));
    const segment=position.clone().sub(target);let fraction=1;
    for(const c of this.colliders){
      let near=0,far=1;
      for(const key of ['x','z']){
        const half=(key==='x'?c.hx:c.hz)??c.radius,delta=segment[key],lo=c[key]-half-.3,hi=c[key]+half+.3;
        if(Math.abs(delta)<1e-7){if(target[key]<lo||target[key]>hi){near=2;break;}}
        else{let a=(lo-target[key])/delta,b=(hi-target[key])/delta;if(a>b)[a,b]=[b,a];near=Math.max(near,a);far=Math.min(far,b);}
      }
      if(near<=far&&target.y+segment.y*near<(c.height||3.8))fraction=Math.min(fraction,Math.max(.3,near-.08));
    }
    if(fraction<1){position.lerpVectors(target,position,fraction);position.y=Math.max(position.y,this.player.position.y+3.15);}
    this.camera.position.lerp(position,dt>=1?1:1-Math.exp(-8*dt));this.camera.lookAt(target);
    this.camera.fov=Wt.lerp(this.camera.fov,this.dashTime>0?61:56,Math.min(1,dt*8));this.camera.updateProjectionMatrix();
    if(this.citySun&&this.player){const p=this.player.position;this.citySun.position.set(p.x-15,26,p.z+13);this.citySun.target.position.set(p.x,0,p.z-5);this.citySun.target.updateMatrixWorld();}
  },
  updateAlly(dt){
    const before=this.ally?.position.clone();zr5Previous.updateAlly.call(this,dt);
    if(!before)return;
    const desired=this.ally.position.clone(),direction=desired.clone().sub(before);direction.y=0;
    this.ally.position.copy(before);
    if(direction.lengthSq()>.00001)this.moveActor(this.ally,direction.normalize(),6.3,dt,.52);
    if(this.ally.position.distanceTo(this.player.position)>14)this.ally.position.copy(this.freePosition(this.player.position.clone().add(new z(1.8,0,2.5)),.6));
  },
  createGriox(projection=false){
    const monster=zr5Previous.createGriox.call(this,projection),d=monster.userData;
    monster.children.forEach(object=>{if(object.isMesh&&!d.tendrils.includes(object)&&object!==d.chest&&object!==d.aura&&!d.spikes.includes(object))object.visible=false;});
    d.spikes.forEach(object=>object.visible=false);d.spikes=[];
    const shell=new q({color:0x252529,roughness:.37,metalness:.28,normalMap:this.cityAssets?.plaster_stone_wall_02_nor_gl,normalScale:new R(1.2,1.2)}),vein=new q({color:0x771d27,emissive:0xb12c22,emissiveIntensity:.6,roughness:.5});
    const body=Z(new xa(.68,1.4,8,14),shell,true);body.position.y=2.55;body.scale.set(1.1,1,.72);monster.add(body);
    const skull=Z(new ro(.45,18,14),shell,true);skull.position.set(0,3.73,-.1);skull.scale.set(.8,1.24,.9);monster.add(skull);
    for(const side of [-1,1]){
      const eye=Z(new ro(.055,10,8),new G({color:0xffcf9c}),false);eye.position.set(side*.15,3.82,-.465);monster.add(eye);
      const leg=Z(new ao(new Ia([new z(side*.4,2,0),new z(side*.6,1.05,-.12),new z(side*.78,.1,.38)]),20,.24,9,false),shell,true);monster.add(leg);
      const arm=Z(new ao(new Ia([new z(side*.6,3.3,0),new z(side*1.2,2.55,-.1),new z(side*1.6,1.95,-.52)]),20,.17,9,false),shell,true);monster.add(arm);
    }
    for(let n=0;n<24;n++){
      const angle=n/24*Math.PI*2,reach=1.5+n%5*.32;
      const points=[new z(Math.sin(angle)*.42,2.9+Math.cos(angle)*.5,.32),new z(Math.sin(angle)*reach,3.3+Math.cos(angle)*1.15,.55),new z(Math.sin(angle+.22)*(reach+.75),3.6+Math.cos(angle)*1.9,.2),new z(Math.sin(angle+.6)*(reach+.9),4+Math.cos(angle)*2.1,-.2)];
      const limb=Z(new ao(new Ia(points),22,.065+n%3*.028,6,false),n%5===0?vein:shell,true);monster.add(limb);d.tendrils.push(limb);
    }
    d.chest.scale.setScalar(.55);d.chest.position.set(0,2.8,-.64);d.aura.material.opacity=.16;
    return monster;
  }
});

/* ZERATH 6 — ground commands, obstacle-aware walking and a raised camera.
 * Navigation and physical movement share the same footprint and colliders.
 */
const zr6Previous = {};
for (const key of Object.getOwnPropertyNames(Vf.prototype)) zr6Previous[key] = Vf.prototype[key];
ZR.version = '6.0.0';
const ZR6_RADIUS = .54;
const ZR6_MOVE_KEYS = ['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'];

class ZrNavigationGrid {
  constructor(bounds, free, step=.75) {
    this.bounds=bounds;this.free=free;this.step=step;
    this.width=Math.floor(bounds.x*2/step)+1;this.height=Math.floor(bounds.z*2/step)+1;
    this.open=new Uint8Array(this.width*this.height);
    for(let id=0;id<this.open.length;id++)this.open[id]=+free(this.point(id));
  }
  point(id) { return new z((id%this.width)*this.step-this.bounds.x,0,Math.floor(id/this.width)*this.step-this.bounds.z); }
  inside(p) { return Math.abs(p.x)<this.bounds.x-ZR6_RADIUS && Math.abs(p.z)<this.bounds.z-ZR6_RADIUS; }
  segment(a,b) {
    const count=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/.2));
    for(let i=0;i<=count;i++)if(!this.free(new z(a.x+(b.x-a.x)*i/count,0,a.z+(b.z-a.z)*i/count)))return false;
    return true;
  }
  nearest(p,requireSegment=false,maxDistance=2) {
    const cx=Math.round((p.x+this.bounds.x)/this.step),cy=Math.round((p.z+this.bounds.z)/this.step),reach=Math.ceil(maxDistance/this.step);
    let best=-1,distance=maxDistance*maxDistance;
    for(let y=Math.max(0,cy-reach);y<=Math.min(this.height-1,cy+reach);y++)for(let x=Math.max(0,cx-reach);x<=Math.min(this.width-1,cx+reach);x++){
      const id=y*this.width+x;if(!this.open[id])continue;
      const point=this.point(id),d=(p.x-point.x)**2+(p.z-point.z)**2;
      if(d<=distance&&(!requireSegment||this.segment(p,point))){best=id;distance=d;}
    }
    return best;
  }
  plan(from,requested) {
    if(!this.inside(requested)||!this.free(from))return null;
    const to=requested.clone().setY(0);
    if(!this.free(to)){
      const snapped=this.nearest(to,false,1.8);if(snapped<0)return null;
      to.copy(this.point(snapped));
    }
    if(this.segment(from,to))return {points:[to],destination:to.clone()};
    const start=this.nearest(from,true),goal=this.nearest(to,true);
    if(start<0||goal<0)return null;
    const size=this.open.length,g=new Float64Array(size),parent=new Int32Array(size),closed=new Uint8Array(size),heap=[];
    g.fill(Infinity);parent.fill(-1);g[start]=0;
    const heuristic=id=>Math.hypot(id%this.width-goal%this.width,Math.floor(id/this.width)-Math.floor(goal/this.width));
    const push=(id,score)=>{
      const item={id,score};heap.push(item);let n=heap.length-1;
      while(n>0){const p=(n-1)>>1;if(heap[p].score<=score)break;heap[n]=heap[p];n=p;}heap[n]=item;
    };
    const pop=()=>{
      const first=heap[0],last=heap.pop();if(heap.length){let n=0;while(n*2+1<heap.length){let child=n*2+1;if(child+1<heap.length&&heap[child+1].score<heap[child].score)child++;if(heap[child].score>=last.score)break;heap[n]=heap[child];n=child;}heap[n]=last;}return first.id;
    };
    push(start,heuristic(start));let found=false;
    while(heap.length){
      const id=pop();if(closed[id])continue;if(id===goal){found=true;break;}closed[id]=1;
      const x=id%this.width,y=Math.floor(id/this.width);
      for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){
        if((!dx&&!dy)||x+dx<0||x+dx>=this.width||y+dy<0||y+dy>=this.height)continue;
        const next=id+dy*this.width+dx;if(!this.open[next]||closed[next])continue;
        if(dx&&dy&&(!this.open[id+dx]||!this.open[id+dy*this.width]))continue;
        const cost=g[id]+(dx&&dy?Math.SQRT2:1);if(cost>=g[next])continue;
        if(!this.segment(this.point(id),this.point(next)))continue;
        g[next]=cost;parent[next]=id;push(next,cost+heuristic(next));
      }
    }
    if(!found)return null;
    const raw=[to];for(let id=goal;id!==-1;id=parent[id])raw.push(this.point(id));raw.push(from.clone().setY(0));raw.reverse();
    const points=[];let anchor=0;
    while(anchor<raw.length-1){let next=raw.length-1;while(next>anchor+1&&!this.segment(raw[anchor],raw[next]))next--;points.push(raw[next]);anchor=next;}
    return {points,destination:to.clone()};
  }
}

Object.assign(Vf.prototype,{
  buildWorld(index) {
    this.clickPath=[];this.clickDestination=null;this.pointerAim=null;this.attackTarget=null;this.occludingArchitecture=[];
    zr6Previous.buildWorld.call(this,index);
    this.navigationGrid=new ZrNavigationGrid(Sf[index].bounds,p=>this.isFree(p,ZR6_RADIUS+.035));
    this.createNavigationMarkers();this.resetTacticalCamera();
  },
  startLevel(index) {
    zr6Previous.startLevel.call(this,index);
    this.cancelMove();this.pointerAim=null;this.attackTarget=null;this.resetTacticalCamera();this.updateCamera(1);
    this.callbacks.onToast?.(this.isTouch?'TOCÁ EL SUELO PARA CAMINAR · PULSO PARA ATACAR':'CLIC EN EL SUELO: CAMINAR · CLIC DERECHO / F: PULSO');
  },
  resetTacticalCamera() {
    this.cameraYaw=.38;this.cameraPitch=.91;this.cameraDistance=23;
    this.tacticalZoom=23;this.cameraFollow=this.player?.position.clone()||new z();
  },
  cityBuilding(...args) {
    const root=this.cityProps,batches=this.cityBatches,group=new U();group.name='Edificio';
    this.cityProps=group;this.cityBatches=new Map();
    try{zr6Previous.cityBuilding.apply(this,args);this.flushCityBatches();}
    finally{this.cityProps=root;this.cityBatches=batches;}
    root.add(group);
    const owned=new Map();group.traverse(object=>{
      if(!object.isMesh)return;
      const clone=material=>{if(!owned.has(material)){const copy=material.clone();owned.set(material,copy);}return owned.get(material);};
      object.material=Array.isArray(object.material)?object.material.map(clone):clone(object.material);
    });
    group.updateMatrixWorld(true);
    this.occludingArchitecture.push({group,bounds:new ur().setFromObject(group),materials:[...owned.values()],opacity:1});
  },
  createNavigationMarkers() {
    const group=new U();group.name='Destino de Gala';
    const material=new G({color:0xf0d596,transparent:true,opacity:.95,depthWrite:false});
    const ring=Z(new io(.45,.025,6,48),material,false);ring.rotation.x=-Math.PI/2;group.add(ring);
    for(const side of [-1,1]){
      const tick=Z(new K(.12,.013,.035),material,false);tick.position.set(side*.62,0,0);group.add(tick);
      const other=Z(new K(.035,.013,.12),material,false);other.position.set(0,0,side*.62);group.add(other);
    }
    group.position.y=.14;group.visible=false;this.scene.add(group);this.destinationMarker=group;this.markerPulse=0;
    const dots=new Bi(new Sa(.047,8),new G({color:0xf0d596,transparent:true,opacity:.65,depthWrite:false}),48);
    dots.count=0;dots.frustumCulled=false;this.scene.add(dots);this.routeDots=dots;
    const selection=Z(new io(.73,.025,6,48),new G({color:0xff6b5f,transparent:true,opacity:.8,depthWrite:false}),false);
    selection.rotation.x=-Math.PI/2;selection.visible=false;this.scene.add(selection);this.targetMarker=selection;
  },
  cancelMove() {
    this.clickPath=[];this.clickDestination=null;this.navigationStuck=0;
    if(this.destinationMarker)this.destinationMarker.visible=false;
    if(this.routeDots)this.routeDots.count=0;
  },
  commandMove(point) {
    if(this.state!=='playing'||!point||!this.navigationGrid)return false;
    const route=this.navigationGrid.plan(this.player.position.clone().setY(0),point);
    if(!route){this.callbacks.onToast?.('NO HAY PASO · MARCÁ OTRO LUGAR DEL SUELO');return false;}
    this.clickPath=route.points;this.clickDestination=route.destination;this.navigationStuck=0;
    this.destinationMarker.position.copy(route.destination).setY(.14);this.destinationMarker.visible=true;this.markerPulse=.5;
    this.updateRouteDots();return true;
  },
  getMoveDirection() {
    const manual=zr6Previous.getMoveDirection.call(this);
    if(manual.lengthSq()>.025){if(this.clickPath?.length)this.cancelMove();return manual;}
    if(!this.clickPath?.length)return new z();
    while(this.clickPath.length){
      const direction=this.clickPath[0].clone().sub(this.player.position).setY(0),distance=direction.length();
      if(distance<.1){this.clickPath.shift();continue;}
      const sprint=this.keys.has('ShiftLeft')||this.keys.has('ShiftRight');
      const speed=this.grounded?(sprint?7.35:4.65):4.15;
      return direction.normalize().multiplyScalar(Math.min(1,distance/Math.max(.001,speed*(this.navigationDt||1/60))));
    }
    this.cancelMove();return new z();
  },
  resolvePlayerMotion(before) {
    const desired=this.player.position.clone(),dx=desired.x-before.x,dz=desired.z-before.z;
    const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.16)),position=before.clone().setY(desired.y);
    for(let i=0;i<steps;i++){
      const next=position.clone().add(new z(dx/steps,0,dz/steps));
      if(this.isFree(next,ZR6_RADIUS)){position.copy(next);continue;}
      // Physical input can slide along walls; route following remains on its safe segment.
      if(!this.clickPath?.length){
        const slideX=position.clone().add(new z(dx/steps,0,0));if(this.isFree(slideX,ZR6_RADIUS))position.copy(slideX);
        const slideZ=position.clone().add(new z(0,0,dz/steps));if(this.isFree(slideZ,ZR6_RADIUS))position.copy(slideZ);
      }
    }
    this.player.position.copy(position);
  },
  updatePlayer(dt) {
    this.navigationDt=dt;const before=this.player.position.clone();
    zr6Previous.updatePlayer.call(this,dt);
    if(this.clickPath?.length){
      if(this.dashTime<=0&&before.distanceTo(this.player.position)<.005)this.navigationStuck=(this.navigationStuck||0)+dt;else this.navigationStuck=0;
      if(this.navigationStuck>.45){const destination=this.clickDestination.clone();this.cancelMove();this.commandMove(destination);}
    }
    this.markerPulse=Math.max(0,(this.markerPulse||0)-dt);
    if(this.destinationMarker?.visible)this.destinationMarker.scale.setScalar(1+this.markerPulse*.6+Math.sin(this.elapsed*4)*.035);
    if(this.routeDots&&this.elapsed>=(this.nextRouteDots||0)){this.nextRouteDots=this.elapsed+.1;this.updateRouteDots();}
    if(this.attackTarget&&!this.enemies.includes(this.attackTarget))this.attackTarget=null;
    if(this.targetMarker){this.targetMarker.visible=!!this.attackTarget;if(this.attackTarget)this.targetMarker.position.copy(this.attackTarget.position).setY(.14);}
  },
  updateRouteDots() {
    if(!this.routeDots)return;
    const transform=new U();transform.rotation.x=-Math.PI/2;let count=0;
    const points=[this.player.position,...(this.clickPath||[])];
    for(let n=1;n<points.length&&count<48;n++){
      const from=points[n-1],to=points[n],length=Math.hypot(to.x-from.x,to.z-from.z);
      for(let d=.7;d<length&&count<48;d+=.85){transform.position.lerpVectors(from,to,d/length).setY(.135);transform.updateMatrix();this.routeDots.setMatrixAt(count++,transform.matrix);}
    }
    this.routeDots.count=count;this.routeDots.instanceMatrix.needsUpdate=true;
  },
  screenRay(clientX,clientY) {
    const rect=this.renderer.domElement.getBoundingClientRect();
    if(!rect.width||!rect.height||clientX<rect.left||clientX>rect.right||clientY<rect.top||clientY>rect.bottom)return null;
    this.camera.updateMatrixWorld(true);
    const origin=this.camera.position.clone(),direction=new z((clientX-rect.left)/rect.width*2-1,1-(clientY-rect.top)/rect.height*2,.5).unproject(this.camera).sub(origin).normalize();
    return {origin,direction};
  },
  rayBoxFraction(origin,delta,box) {
    let near=0,far=1;
    for(const axis of ['x','y','z']){
      if(Math.abs(delta[axis])<1e-8){if(origin[axis]<box.min[axis]||origin[axis]>box.max[axis])return null;}
      else{let a=(box.min[axis]-origin[axis])/delta[axis],b=(box.max[axis]-origin[axis])/delta[axis];if(a>b)[a,b]=[b,a];near=Math.max(near,a);far=Math.min(far,b);if(near>far)return null;}
    }
    return near;
  },
  groundAt(clientX,clientY) {
    const ray=this.screenRay(clientX,clientY);if(!ray||ray.direction.y>=-.001)return null;
    const distance=(.13-ray.origin.y)/ray.direction.y;if(distance<=0||distance>180)return null;
    const delta=ray.direction.clone().multiplyScalar(distance),point=ray.origin.clone().add(delta).setY(0);
    for(const building of this.occludingArchitecture||[])if(building.opacity>.5&&this.rayBoxFraction(ray.origin,delta,building.bounds)!==null)return null;
    return point;
  },
  enemyAt(clientX,clientY) {
    const ray=this.screenRay(clientX,clientY);if(!ray)return null;
    let target=null,best=Infinity;
    for(const enemy of this.enemies){
      const p=enemy.position,radius=Math.max(.7,enemy.userData.radius),height=enemy.userData.isGriox?5:2.4;
      const box=new ur(new z(p.x-radius,p.y,p.z-radius),new z(p.x+radius,p.y+height,p.z+radius));
      const fraction=this.rayBoxFraction(ray.origin,ray.direction.clone().multiplyScalar(150),box);
      if(fraction!==null&&fraction<best&&this.clearShot(this.player.position.clone().add(new z(0,1.35,0)),p.clone().add(new z(0,1.2,0)))){best=fraction;target=enemy;}
    }
    return target;
  },
  shoot() {
    const upgraded=this.levelIndex>=3,cost=upgraded?10:7;
    if(this.state!=='playing'||this.shotCooldown>0||this.echo<cost)return;
    const from=this.player.position.clone().add(new z(0,1.35,0));
    let target=this.attackTarget&&this.enemies.includes(this.attackTarget)?this.attackTarget:null,best=Infinity;
    const canHit=enemy=>from.distanceTo(enemy.position)<33&&this.clearShot(from,enemy.position.clone().add(new z(0,enemy.userData.isGriox?2.2:1.2,0)));
    if(target&&!canHit(target))target=null;
    if(!target)for(const enemy of this.enemies){
      if(!canHit(enemy))continue;
      const score=this.pointerAim?Math.hypot(enemy.position.x-this.pointerAim.x,enemy.position.z-this.pointerAim.z):from.distanceTo(enemy.position);
      if(score<best){best=score;target=enemy;}
    }
    let direction;
    if(target){direction=target.position.clone().add(new z(0,target.userData.isGriox?2.2:1.2,0)).sub(from).normalize();this.attackTarget=target;}
    else if(this.pointerAim)direction=this.pointerAim.clone().setY(from.y).sub(from).normalize();
    else direction=new z(-Math.sin(this.player.rotation.y),0,-Math.cos(this.player.rotation.y));
    if(direction.lengthSq()<.001)return;
    this.echo-=cost;this.shotCooldown=upgraded?.34:.3;this.playerRecoil=.26;
    Nf(this.player,direction);this.player.updateMatrixWorld(true);
    for(let i=0;i<(upgraded?2:1);i++){
      const hand=upgraded?i:this.shotHand++%2;
      let origin=this.player.userData.hands[hand]?.getWorldPosition(new z())||from.clone();
      if(origin.distanceTo(from)>2.4)origin=from.clone();
      const destination=target?target.position.clone().add(new z(0,target.userData.isGriox?2.2:1.2,0)):from.clone().addScaledVector(direction,25);
      const aim=destination.sub(origin).normalize();
      this.createProjectile('player',origin,aim,upgraded?26:34,25,'ring');
    }
    this.sound.shot();
  },
  tryDash() {
    const active=this.dashTime;zr6Previous.tryDash.call(this);
    if(this.dashTime>active)this.cancelMove();
  },
  setState(state) {
    zr6Previous.setState.call(this,state);
    if(state!=='playing'){this.cancelMove();this.pointerAim=null;this.attackTarget=null;this.groundPointers?.clear();}
  },
  finish(success) { this.cancelMove();this.attackTarget=null;zr6Previous.finish.call(this,success); },
  bindCanvasControls() {
    const canvas=this.renderer.domElement,pointers=new Map();this.groundPointers=pointers;
    canvas.style.touchAction='none';canvas.style.cursor='crosshair';
    canvas.addEventListener('contextmenu',event=>event.preventDefault());
    canvas.addEventListener('pointerdown',event=>{
      if(this.state!=='playing')return;event.preventDefault();this.sound.unlock();
      const touch=event.pointerType==='touch',entry={x:event.clientX,y:event.clientY,startX:event.clientX,startY:event.clientY,button:event.button,touch,moved:false};
      pointers.set(event.pointerId,entry);canvas.setPointerCapture?.(event.pointerId);
      if(touch){if(pointers.size>1)for(const p of pointers.values())p.moved=true;return;}
      if(event.button===0){const point=this.groundAt(event.clientX,event.clientY);if(point)this.commandMove(point);else this.callbacks.onToast?.('MARCÁ UN LUGAR DEL SUELO');}
      if(event.button===2){this.pointerAim=this.groundAt(event.clientX,event.clientY);this.attackTarget=this.enemyAt(event.clientX,event.clientY);this.setShootHeld(true);}
    });
    canvas.addEventListener('pointermove',event=>{
      if(this.state!=='playing')return;
      const entry=pointers.get(event.pointerId);
      if(entry){
        const dx=event.clientX-entry.x,dy=event.clientY-entry.y;
        if(Math.hypot(event.clientX-entry.startX,event.clientY-entry.startY)>9)entry.moved=true;
        if(entry.button===1||(entry.touch&&pointers.size>=2))this.addLook(dx,dy);
        entry.x=event.clientX;entry.y=event.clientY;
      }
      if(event.pointerType==='mouse'){
        this.pointerAim=this.groundAt(event.clientX,event.clientY);
        if(this.shootHeld)this.attackTarget=this.enemyAt(event.clientX,event.clientY);
      }
    });
    const release=event=>{
      const entry=pointers.get(event.pointerId);pointers.delete(event.pointerId);
      if(entry?.touch&&!entry.moved&&event.type==='pointerup'&&this.state==='playing'){
        const point=this.groundAt(event.clientX,event.clientY);if(point)this.commandMove(point);else this.callbacks.onToast?.('TOCÁ UN LUGAR DEL SUELO');
      }
      if(event.button===2||event.type==='pointercancel')this.setShootHeld(false);
      if(canvas.hasPointerCapture?.(event.pointerId))canvas.releasePointerCapture(event.pointerId);
    };
    canvas.addEventListener('pointerup',release);canvas.addEventListener('pointercancel',release);
    canvas.addEventListener('lostpointercapture',event=>{pointers.delete(event.pointerId);this.setShootHeld(false);});
    addEventListener('pointerup',event=>{if(event.button===2)this.setShootHeld(false);});
    canvas.addEventListener('wheel',event=>{if(this.state!=='playing')return;event.preventDefault();this.tacticalZoom=Of((this.tacticalZoom||23)+Math.sign(event.deltaY)*1.5,17,31);},{passive:false});
    addEventListener('keydown',event=>{
      if(this.state!=='playing')return;
      if(ZR6_MOVE_KEYS.includes(event.code)||event.code==='KeyX'){this.cancelMove();if(event.code==='KeyX')this.setShootHeld(false);}
      if(event.code==='KeyC'&&!event.repeat)this.flipCamera();
    });
  },
  addLook(dx,dy) {
    if(this.state!=='playing')return;
    this.cameraYaw-=dx*.004;this.cameraPitch=Of(this.cameraPitch+dy*.002,.78,1.13);
  },
  flipCamera() { this.cameraYaw+=Math.PI/2; },
  resize() {
    const zoom=this.tacticalZoom||23;legacy.resize.call(this);this.cameraDistance=zoom;
  },
  updateCamera(dt) {
    if(!this.player)return;
    const alpha=dt>=1?1:1-Math.exp(-7*dt),focus=this.player.position.clone().setY(.7);
    this.cameraFollow??=focus.clone();this.cameraFollow.lerp(focus,alpha);
    this.cameraDistance=Wt.lerp(this.cameraDistance,this.tacticalZoom||23,alpha);
    const distance=this.cameraDistance,pitch=this.cameraPitch||.91,horizontal=Math.cos(pitch)*distance;
    const desired=this.cameraFollow.clone().add(new z(Math.sin(this.cameraYaw)*horizontal,Math.sin(pitch)*distance,Math.cos(this.cameraYaw)*horizontal));
    this.camera.position.lerp(desired,alpha);this.camera.lookAt(this.cameraFollow);
    this.camera.fov=43;this.camera.updateProjectionMatrix();this.camera.updateMatrixWorld(true);
    const targets=[this.player.position.clone().setY(.25),this.player.position.clone().setY(1.3),this.player.position.clone().setY(2.1)];
    for(const building of this.occludingArchitecture||[]){
      const occluded=targets.some(target=>this.rayBoxFraction(this.camera.position,target.clone().sub(this.camera.position),building.bounds)!==null);
      const opacity=Wt.lerp(building.opacity,occluded?.13:1,dt>=1?1:1-Math.exp(-12*dt));building.opacity=opacity;
      for(const material of building.materials){const transparent=opacity<.99;if(material.transparent!==transparent){material.transparent=transparent;material.depthWrite=!transparent;material.needsUpdate=true;}material.opacity=transparent?opacity:1;}
    }
    if(this.citySun){const p=this.player.position;this.citySun.position.set(p.x-15,26,p.z+13);this.citySun.target.position.set(p.x,0,p.z-5);this.citySun.target.updateMatrixWorld();}
  }
});

const zr6InitializeInterface=zrInitializeInterface;
zrInitializeInterface=function(game){
  zr6InitializeInterface(game);
  const pause=document.querySelector('.pause-controls');
  if(pause)pause.innerHTML='Clic izquierdo / tocar el suelo: caminar<br>Clic derecho / F: pulso · R: golpe cercano<br>Espacio / Q: esquivar · E: discos · X: detenerse<br>WASD / flechas: mover · Shift: correr<br>Rueda: acercar · Arrastrar con botón central: cámara<br>C: girar cámara · Celular: dos dedos para girar';
  const hint=document.querySelector('.desktop-hint');if(hint)hint.textContent='Clic: caminar · Derecho / F: pulso · Espacio: esquivar';
  const mobile=document.querySelector('.mobile-hint');if(mobile)mobile.textContent='Tocá el suelo para caminar · Botones para combatir · Dos dedos: cámara';
  document.getElementById('look-zone')?.setAttribute('aria-hidden','true');
  const controls=document.createElement('div');controls.id='navigation-help';
  controls.textContent=game.isTouch?'TOCÁ EL SUELO PARA CAMINAR':'CLIC: CAMINAR   ·   DERECHO / F: PULSO   ·   X: DETENER';
  document.getElementById('hud').appendChild(controls);
  document.getElementById('power-shot').innerHTML='<i>F</i> PULSO';
  document.getElementById('power-dash').innerHTML='<i>ESP</i> IMPULSO';
  document.getElementById('power-shield').innerHTML='<i>E</i> DISCOS';
};

var rp=zrCreateGame($.game,{onHud(e){let t=Math.max(0,e.health),n=Math.max(0,e.echo);$.healthFill.style.width=`${t}%`,$.healthValue.textContent=Math.ceil(t),$.echoFill.style.width=`${n}%`,$.echoValue.textContent=Math.ceil(n);let r=Sf[e.levelIndex];$.waveChip.textContent=`${r.missionLabel} ${e.completedObjectives}/${e.totalObjectives||r.targets.length}`,$.enemyCount.textContent=e.enemies?np(e.enemies):`ÁREA PARA EXPLORAR`},onWave({enemies:e,commander:t,label:n}){$.enemyCount.textContent=np(e),$.objective.textContent=t?`Derrotá al comandante en ${n}`:`Asegurá ${n}`},onRoute({progress:e,checkpoint:t,total:n,mode:r,label:i}){let a=Math.round(e*100);$.routeFill.style.width=`${a}%`,$.routePercent.textContent=`${a}%`,r===`combat`?$.routeLabel.textContent=`COMBATE · ${i||`OBJETIVO`}`:r===`exit`||t>=n?($.routeLabel.textContent=`CAMINO DESBLOQUEADO`,rp.enemies?.length||($.objective.textContent=Sf[rp.levelIndex].finalBoss||Sf[rp.levelIndex].firstGriox?`Entrá al núcleo marcado por la señal`:`Llegá a la salida iluminada`)):($.routeLabel.textContent=`${Sf[rp.levelIndex].missionLabel} · ${t}/${n}`,rp.enemies?.length||($.objective.textContent=`Explorá el área · próxima pista: ${i||`desconocida`}`))},onBoss(e){$.bossHud.classList.toggle(`hidden`,!e.active),e.active&&($.bossName.textContent=e.name,$.bossPhase.textContent=e.phase,$.bossFill.style.width=`${Math.max(0,e.health/e.maxHealth)*100}%`)},onPowerChange(e){$.powerDash.classList.toggle(`locked`,!e.dashUnlocked),$.powerShield.classList.toggle(`locked`,!e.shieldUnlocked),$.dashTouch.classList.toggle(`locked`,!e.dashUnlocked),$.shieldTouch.classList.toggle(`locked`,!e.shieldUnlocked),$.dashTouch.classList.toggle(`cooldown`,e.dashCooldown>0),$.shieldTouch.classList.toggle(`cooldown`,e.shieldCooldown>0)},onToast:Zf,onDamage(){$.damage.classList.add(`hit`),setTimeout(()=>$.damage.classList.remove(`hit`),150)},onPauseRequest(){rp.state===`playing`?cp():rp.state===`paused`&&lp()},onEnd:fp});rp.bindCanvasControls();zrInitializeInterface(rp);function ip(){$.levelGrid.replaceChildren(),Sf.forEach((e,t)=>{let n=e.id<=Jf,r=document.createElement(`button`);r.className=`level-tile${n?``:` locked`}`,r.disabled=!n,r.innerHTML=`
      <span class="level-index">0${e.id}</span>
      <strong>${e.title}</strong>
      <small>${e.location}</small>
    `,n&&r.addEventListener(`click`,()=>op(t)),$.levelGrid.appendChild(r)})}function ap(){let e=Jf>1;$.continueButton.classList.toggle(`hidden`,!e),$.continueLevel.textContent=Jf}function op(e){Wf=e;let t=Sf[e];Xf(),$.briefNumber.textContent=String(t.id).padStart(2,`0`),$.briefLocation.textContent=t.location.toUpperCase(),$.briefTitle.textContent=t.title.toUpperCase(),$.briefStory.textContent=t.story,$.unlockIcon.textContent=t.unlock.icon,$.unlockName.textContent=t.unlock.name.toUpperCase(),$.unlockDescription.textContent=t.unlock.description,$.briefing.classList.remove(`hidden`),rp.setState(`briefing`)}async function sp(){
  const button=$.enterLevel;button.disabled=true;button.textContent='PREPARANDO EL NIVEL…';
  try{
    await Promise.all([rp.loadModelAsset(kf),rp.loadModelAsset(Af),rp.loadModelAsset(ZR5_MALE),rp.visualAssetsReady]);
    const level=Sf[Wf];Xf();$.hud.classList.remove('hidden');$.touchControls.classList.toggle('hidden',!Uf);
    $.levelKicker.textContent=`NIVEL ${level.id}`;$.levelName.textContent=level.title;$.objective.textContent=level.objective;$.bossHud.classList.add('hidden');
    rp.startLevel(Wf);document.getElementById('rescue-prompt').hidden=true;
    Zf(Uf?'TOCÁ EL SUELO: CAMINAR · PULSO: ATACAR':'CLIC: CAMINAR · DERECHO / F: PULSO · ESPACIO: ESQUIVAR',4300);
  }catch(error){document.getElementById('load-error').hidden=false;}
  finally{button.disabled=false;button.textContent='ENTRAR EN ZERATH →';}
}
function cp(){rp.state===`playing`&&(rp.setState(`paused`),$.pause.classList.remove(`hidden`))}function lp(){rp.state===`paused`&&($.pause.classList.add(`hidden`),rp.setState(`playing`))}function up(){Xf(),$.hud.classList.remove(`hidden`),$.touchControls.classList.toggle(`hidden`,!Uf),rp.restartLevel()}function dp(){Xf(),$.hud.classList.add(`hidden`),$.touchControls.classList.add(`hidden`),$.start.classList.remove(`hidden`),$.start.classList.add(`active`),rp.setState(`menu`),ip(),ap()}function fp(e){if($.hud.classList.add(`hidden`),$.touchControls.classList.add(`hidden`),Xf(),$.result.classList.remove(`hidden`),$.resultTime.textContent=Qf(e.time),$.resultKills.textContent=e.kills,$.resultHealth.textContent=`${Math.ceil(e.health)}%`,$.retryResult.classList.toggle(`hidden`,e.success),$.nextButton.classList.toggle(`hidden`,!e.success),e.success){Yf(e.levelIndex+2);let t=e.levelIndex===Sf.length-1;$.resultKicker.textContent=t?`CONEXIÓN INTERRUMPIDA`:`NIVEL SUPERADO`,$.resultTitle.textContent=t?`EL SILENCIO DE GRIOX`:`ZERATH RESISTE`,$.resultCopy.textContent=t?`Gala dejó el círculo incompleto y Griox no pudo copiarlo. El núcleo de Orpheon sigue en pie, pero la voz que dominaba Zerath finalmente se apagó.`:`El camino hacia ${Sf[e.levelIndex+1].location} quedó abierto. Gala siente que su eco acaba de cambiar.`,$.nextButton.innerHTML=t?`VER EPÍLOGO <span>→</span>`:`SIGUIENTE CAPÍTULO <span>→</span>`}else $.resultKicker.textContent=`GALA CAYÓ`,$.resultTitle.textContent=`GRIOX SIGUE HABLANDO`,$.resultCopy.textContent=`La corrupción no ganó todavía. Volvé a entrar, conservá el eco para el momento correcto y rompé la formación militar.`}$.startButton.addEventListener(`click`,()=>{rp.unlockAudio(),ep($f.prologue,()=>op(0))}),$.continueButton.addEventListener(`click`,()=>op(Jf-1)),$.levelsButton.addEventListener(`click`,()=>{ip(),$.levelSelect.classList.remove(`hidden`)}),$.enterLevel.addEventListener(`click`,sp),$.pauseButton.addEventListener(`click`,cp),$.resumeButton.addEventListener(`click`,lp),$.restartButton.addEventListener(`click`,up),$.menuButton.addEventListener(`click`,dp),$.resultMenu.addEventListener(`click`,dp),$.retryResult.addEventListener(`click`,up),$.nextButton.addEventListener(`click`,()=>{if(rp.levelIndex>=Sf.length-1)ep($f.ending,dp);else{let e=rp.levelIndex+1;tp(e,()=>op(e))}}),document.querySelectorAll(`[data-close="level-select"]`).forEach(e=>{e.addEventListener(`click`,()=>$.levelSelect.classList.add(`hidden`))});function pp(e,t,n=null){e.addEventListener(`pointerdown`,n=>{n.preventDefault(),n.stopPropagation(),rp.unlockAudio(),e.setPointerCapture?.(n.pointerId),t()});let r=e=>{e.preventDefault(),e.stopPropagation(),n?.()};e.addEventListener(`pointerup`,r),e.addEventListener(`pointercancel`,r)}pp($.shootTouch,()=>rp.setShootHeld(!0),()=>rp.setShootHeld(!1)),pp($.dashTouch,()=>rp.tryDash()),pp($.shieldTouch,()=>rp.tryShield()),pp($.cameraTouch,()=>rp.flipCamera());var mp=null;function hp(e){let t=$.joystick.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,i=t.width*.31,a=e.clientX-n,o=e.clientY-r,s=Math.hypot(a,o);s>i&&(a=a/s*i,o=o/s*i),$.joystickThumb.style.transform=`translate(calc(-50% + ${a}px), calc(-50% + ${o}px))`,rp.setJoystick(a/i,o/i)}$.joystick.addEventListener(`pointerdown`,e=>{e.preventDefault(),mp=e.pointerId,$.joystick.setPointerCapture(e.pointerId),hp(e)}),$.joystick.addEventListener(`pointermove`,e=>{e.pointerId===mp&&hp(e)});function gp(e){e.pointerId===mp&&(mp=null,rp.setJoystick(0,0),$.joystickThumb.style.transform=`translate(-50%, -50%)`)}$.joystick.addEventListener(`pointerup`,gp),$.joystick.addEventListener(`pointercancel`,gp);var _p=null,vp=0,yp=0;$.lookZone.addEventListener(`pointerdown`,e=>{e.preventDefault(),_p=e.pointerId,vp=e.clientX,yp=e.clientY,$.lookZone.setPointerCapture(e.pointerId)}),$.lookZone.addEventListener(`pointermove`,e=>{e.pointerId===_p&&(rp.addLook(e.clientX-vp,e.clientY-yp),vp=e.clientX,yp=e.clientY)});function bp(e){e.pointerId===_p&&(_p=null)}$.lookZone.addEventListener(`pointerup`,bp),$.lookZone.addEventListener(`pointercancel`,bp),$.playPortrait.addEventListener(`click`,()=>$.rotateNotice.classList.add(`dismissed`)),Uf&&$.rotateNotice.classList.remove(`hidden`),document.addEventListener(`visibilitychange`,()=>{document.hidden&&rp.state===`playing`&&cp()}),ip(),ap();