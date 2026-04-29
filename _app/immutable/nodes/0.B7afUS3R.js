import{c as ba,f as Ca,e as dr,g as In}from"../chunks/DrQ_rLQS.js";import{k as ur,E as pr,ag as Pa,aF as La,aJ as hr,aj as Da,as as rn,at as on,ar as mr,au as Yt,a1 as _r,x as mn,z as St,aH as pi}from"../chunks/D45naz2_.js";import{B as gr,b as vr}from"../chunks/D5yOBRg_.js";import{U as Mt,c as Sr,N as Tt,S as Er,C as He,R as xr,e as Qe,w as qe,V as pt,l as hi,a as wa,M as Qt,F as Ua,W as mi,b as At,d as it,L as $t,H as Ft,D as Lt,B as _t,f as cn,g as Be,h as bn,p as Mr,i as Cn,j as _i,k as Tr,m as Rt,O as jn,n as Ze,E as Ar,o as ft,P as Sn,A as Rr,q as Nn,r as Dt,s as Zt,t as Jt,u as fn,v as Wt,x as An,y as br,z as Cr,G as dn,I as mt,J as $n,K as Kt,Q as gi,T as Pr,X as Lr,Y as tn,Z as Dr,_ as wr,$ as Ur,a0 as Ir,a1 as Nr,a2 as yr,a3 as Fr,a4 as Or,a5 as Br,a6 as Gr,a7 as Hr,a8 as Vr,a9 as kr,aa as Wr,ab as zr,ac as Xr,ad as Yr,ae as yn,af as _n,ag as qr,ah as kt,ai as Kr,aj as $r,ak as ei,al as Zr,am as ti,an as Qr,ao as Jr,ap as jr,aq as eo,ar as Oe,as as to,at as no,au as bt,av as En,aw as xn,ax as io,ay as wt,az as sn,aA as Nt,aB as ao,aC as Ia,aD as Na,aE as ya,aF as Rn,aG as Fa,aH as Oa,aI as Ba,aJ as ni,aK as ro,aL as oo,aM as so,aN as lo,aO as Ga,aP as co,aQ as fo,aR as uo,aS as Fn,aT as On,aU as Bn,aV as Gn,aW as vi,aX as Si,aY as Ei,aZ as xi,a_ as Mi,a$ as Ti,b0 as Ai,b1 as Ri,b2 as bi,b3 as Ci,b4 as Pi,b5 as Li,b6 as Di,b7 as wi,b8 as Ui,b9 as Ii,ba as Ni,bb as yi,bc as Fi,bd as Oi,be as Bi,bf as Gi,bg as Hi,bh as Vi,bi as ki,bj as Wi,bk as zi,bl as Xi,bm as Yi,bn as qi,bo as Ki,bp as $i,bq as po,br as ho,bs as mo,bt as _o,bu as go,bv as vo,bw as So,bx as Eo,by as Zi,bz as xo,bA as Mn,bB as Mo,bC as Qi,bD as Ji,bE as ji,bF as Ha,bG as To,bH as Pn,bI as Ao,bJ as Ro,bK as Va,bL as ii,bM as Zn,bN as ka,bO as Wa,bP as bo,bQ as za,bR as Xa,bS as Ya,bT as qa,bU as Ka,bV as $a,bW as Za,bX as ea,bY as Qa,bZ as Hn,b_ as Vn,b$ as Co,c0 as Po,c1 as ta,c2 as ut,c3 as Lo,c4 as un,c5 as jt,c6 as Do,c7 as wo,c8 as Uo,c9 as Io,ca as No,cb as yo,cc as Fo,cd as Oo,ce as Bo,cf as Go,cg as Ho,ch as kn}from"../chunks/C12I3vMP.js";import{g as na}from"../chunks/Be0LX3ac.js";function Vo(e,n,...t){var i=new gr(e);ur(()=>{const l=n()??null;i.ensure(l,l&&(r=>l(r,...t)))},pr)}const ko=!0,Wo="always",Yd=Object.freeze(Object.defineProperty({__proto__:null,prerender:ko,trailingSlash:Wo},Symbol.toStringTag,{value:"Module"}));function Ja(){let e=null,n=!1,t=null,i=null;function l(r,f){t(r,f),i=e.requestAnimationFrame(l)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(l),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function zo(e){const n=new WeakMap;function t(m,P){const R=m.array,F=m.usage,L=R.byteLength,p=e.createBuffer();e.bindBuffer(P,p),e.bufferData(P,R,F),m.onUploadCallback();let v;if(R instanceof Float32Array)v=e.FLOAT;else if(typeof Float16Array<"u"&&R instanceof Float16Array)v=e.HALF_FLOAT;else if(R instanceof Uint16Array)m.isFloat16BufferAttribute?v=e.HALF_FLOAT:v=e.UNSIGNED_SHORT;else if(R instanceof Int16Array)v=e.SHORT;else if(R instanceof Uint32Array)v=e.UNSIGNED_INT;else if(R instanceof Int32Array)v=e.INT;else if(R instanceof Int8Array)v=e.BYTE;else if(R instanceof Uint8Array)v=e.UNSIGNED_BYTE;else if(R instanceof Uint8ClampedArray)v=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+R);return{buffer:p,type:v,bytesPerElement:R.BYTES_PER_ELEMENT,version:m.version,size:L}}function i(m,P,R){const F=P.array,L=P.updateRanges;if(e.bindBuffer(R,m),L.length===0)e.bufferSubData(R,0,F);else{L.sort((v,T)=>v.start-T.start);let p=0;for(let v=1;v<L.length;v++){const T=L[p],I=L[v];I.start<=T.start+T.count+1?T.count=Math.max(T.count,I.start+I.count-T.start):(++p,L[p]=I)}L.length=p+1;for(let v=0,T=L.length;v<T;v++){const I=L[v];e.bufferSubData(R,I.start*F.BYTES_PER_ELEMENT,F,I.start,I.count)}P.clearUpdateRanges()}P.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),n.get(m)}function r(m){m.isInterleavedBufferAttribute&&(m=m.data);const P=n.get(m);P&&(e.deleteBuffer(P.buffer),n.delete(m))}function f(m,P){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const F=n.get(m);(!F||F.version<m.version)&&n.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const R=n.get(m);if(R===void 0)n.set(m,t(m,P));else if(R.version<m.version){if(R.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(R.buffer,m,P),R.version=m.version}}return{get:l,remove:r,update:f}}var Xo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yo=`#ifdef USE_ALPHAHASH
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
#endif`,qo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ko=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$o=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qo=`#ifdef USE_AOMAP
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
#endif`,Jo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jo=`#ifdef USE_BATCHING
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
#endif`,es=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ts=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ns=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,is=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,as=`#ifdef USE_IRIDESCENCE
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
#endif`,rs=`#ifdef USE_BUMPMAP
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
#endif`,os=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ss=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ls=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cs=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fs=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ds=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,us=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ps=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hs=`#define PI 3.141592653589793
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
} // validated`,ms=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_s=`vec3 transformedNormal = objectNormal;
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
#endif`,gs=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vs=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ss=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Es=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xs="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ms=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ts=`#ifdef USE_ENVMAP
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
#endif`,As=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rs=`#ifdef USE_ENVMAP
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
#endif`,bs=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cs=`#ifdef USE_ENVMAP
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
#endif`,Ps=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ls=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ds=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ws=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Us=`#ifdef USE_GRADIENTMAP
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
}`,Is=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ns=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ys=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fs=`uniform bool receiveShadow;
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
#endif`,Os=`#ifdef USE_ENVMAP
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
#endif`,Bs=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gs=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hs=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vs=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ks=`PhysicalMaterial material;
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
#endif`,Ws=`uniform sampler2D dfgLUT;
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
}`,zs=`
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
#endif`,Xs=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ys=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qs=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ks=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$s=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zs=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qs=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Js=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,js=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,el=`#if defined( USE_POINTS_UV )
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
#endif`,tl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,il=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,al=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ol=`#ifdef USE_MORPHTARGETS
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
#endif`,sl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ll=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cl=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ul=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pl=`#ifdef USE_NORMALMAP
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
#endif`,hl=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ml=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_l=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vl=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sl=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,El=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ml=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Al=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bl=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cl=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ll=`float getShadowMask() {
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
}`,Dl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wl=`#ifdef USE_SKINNING
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
#endif`,Ul=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Il=`#ifdef USE_SKINNING
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
#endif`,Nl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ol=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bl=`#ifdef USE_TRANSMISSION
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
#endif`,Gl=`#ifdef USE_TRANSMISSION
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
#endif`,Hl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xl=`uniform sampler2D t2D;
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
}`,Yl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ql=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$l=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zl=`#include <common>
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
}`,Ql=`#if DEPTH_PACKING == 3200
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
}`,Jl=`#define DISTANCE
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
}`,jl=`#define DISTANCE
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
}`,ec=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nc=`uniform float scale;
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
}`,ic=`uniform vec3 diffuse;
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
}`,ac=`#include <common>
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
}`,rc=`uniform vec3 diffuse;
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
}`,oc=`#define LAMBERT
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
}`,sc=`#define LAMBERT
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
}`,lc=`#define MATCAP
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
}`,cc=`#define MATCAP
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
}`,fc=`#define NORMAL
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
}`,dc=`#define NORMAL
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
}`,uc=`#define PHONG
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
}`,pc=`#define PHONG
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
}`,hc=`#define STANDARD
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
}`,mc=`#define STANDARD
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
}`,_c=`#define TOON
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
}`,gc=`#define TOON
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
}`,vc=`uniform float size;
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
}`,Sc=`uniform vec3 diffuse;
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
}`,Ec=`#include <common>
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
}`,xc=`uniform vec3 color;
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
}`,Mc=`uniform float rotation;
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
}`,Tc=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:Xo,alphahash_pars_fragment:Yo,alphamap_fragment:qo,alphamap_pars_fragment:Ko,alphatest_fragment:$o,alphatest_pars_fragment:Zo,aomap_fragment:Qo,aomap_pars_fragment:Jo,batching_pars_vertex:jo,batching_vertex:es,begin_vertex:ts,beginnormal_vertex:ns,bsdfs:is,iridescence_fragment:as,bumpmap_pars_fragment:rs,clipping_planes_fragment:os,clipping_planes_pars_fragment:ss,clipping_planes_pars_vertex:ls,clipping_planes_vertex:cs,color_fragment:fs,color_pars_fragment:ds,color_pars_vertex:us,color_vertex:ps,common:hs,cube_uv_reflection_fragment:ms,defaultnormal_vertex:_s,displacementmap_pars_vertex:gs,displacementmap_vertex:vs,emissivemap_fragment:Ss,emissivemap_pars_fragment:Es,colorspace_fragment:xs,colorspace_pars_fragment:Ms,envmap_fragment:Ts,envmap_common_pars_fragment:As,envmap_pars_fragment:Rs,envmap_pars_vertex:bs,envmap_physical_pars_fragment:Os,envmap_vertex:Cs,fog_vertex:Ps,fog_pars_vertex:Ls,fog_fragment:Ds,fog_pars_fragment:ws,gradientmap_pars_fragment:Us,lightmap_pars_fragment:Is,lights_lambert_fragment:Ns,lights_lambert_pars_fragment:ys,lights_pars_begin:Fs,lights_toon_fragment:Bs,lights_toon_pars_fragment:Gs,lights_phong_fragment:Hs,lights_phong_pars_fragment:Vs,lights_physical_fragment:ks,lights_physical_pars_fragment:Ws,lights_fragment_begin:zs,lights_fragment_maps:Xs,lights_fragment_end:Ys,logdepthbuf_fragment:qs,logdepthbuf_pars_fragment:Ks,logdepthbuf_pars_vertex:$s,logdepthbuf_vertex:Zs,map_fragment:Qs,map_pars_fragment:Js,map_particle_fragment:js,map_particle_pars_fragment:el,metalnessmap_fragment:tl,metalnessmap_pars_fragment:nl,morphinstance_vertex:il,morphcolor_vertex:al,morphnormal_vertex:rl,morphtarget_pars_vertex:ol,morphtarget_vertex:sl,normal_fragment_begin:ll,normal_fragment_maps:cl,normal_pars_fragment:fl,normal_pars_vertex:dl,normal_vertex:ul,normalmap_pars_fragment:pl,clearcoat_normal_fragment_begin:hl,clearcoat_normal_fragment_maps:ml,clearcoat_pars_fragment:_l,iridescence_pars_fragment:gl,opaque_fragment:vl,packing:Sl,premultiplied_alpha_fragment:El,project_vertex:xl,dithering_fragment:Ml,dithering_pars_fragment:Tl,roughnessmap_fragment:Al,roughnessmap_pars_fragment:Rl,shadowmap_pars_fragment:bl,shadowmap_pars_vertex:Cl,shadowmap_vertex:Pl,shadowmask_pars_fragment:Ll,skinbase_vertex:Dl,skinning_pars_vertex:wl,skinning_vertex:Ul,skinnormal_vertex:Il,specularmap_fragment:Nl,specularmap_pars_fragment:yl,tonemapping_fragment:Fl,tonemapping_pars_fragment:Ol,transmission_fragment:Bl,transmission_pars_fragment:Gl,uv_pars_fragment:Hl,uv_pars_vertex:Vl,uv_vertex:kl,worldpos_vertex:Wl,background_vert:zl,background_frag:Xl,backgroundCube_vert:Yl,backgroundCube_frag:ql,cube_vert:Kl,cube_frag:$l,depth_vert:Zl,depth_frag:Ql,distance_vert:Jl,distance_frag:jl,equirect_vert:ec,equirect_frag:tc,linedashed_vert:nc,linedashed_frag:ic,meshbasic_vert:ac,meshbasic_frag:rc,meshlambert_vert:oc,meshlambert_frag:sc,meshmatcap_vert:lc,meshmatcap_frag:cc,meshnormal_vert:fc,meshnormal_frag:dc,meshphong_vert:uc,meshphong_frag:pc,meshphysical_vert:hc,meshphysical_frag:mc,meshtoon_vert:_c,meshtoon_frag:gc,points_vert:vc,points_frag:Sc,shadow_vert:Ec,shadow_frag:xc,sprite_vert:Mc,sprite_frag:Tc},re={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},xt={basic:{uniforms:ut([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:ut([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:ut([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:ut([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:ut([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:ut([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:ut([re.points,re.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:ut([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:ut([re.common,re.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:ut([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:ut([re.sprite,re.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:ut([re.common,re.displacementmap,{referencePosition:{value:new Be},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:ut([re.lights,re.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};xt.physical={uniforms:ut([xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const gn={r:0,b:0,g:0},Gt=new ka,Ac=new Qt;function Rc(e,n,t,i,l,r){const f=new He(0);let m=l===!0?0:1,P,R,F=null,L=0,p=null;function v(_){let x=_.isScene===!0?_.background:null;if(x&&x.isTexture){const S=_.backgroundBlurriness>0;x=n.get(x,S)}return x}function T(_){let x=!1;const S=v(_);S===null?c(f,m):S&&S.isColor&&(c(S,1),x=!0);const N=e.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,r):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(e.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function I(_,x){const S=v(x);S&&(S.isCubeTexture||S.mapping===Pn)?(R===void 0&&(R=new Rt(new ii(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:Zn(xt.backgroundCube.uniforms),vertexShader:xt.backgroundCube.vertexShader,fragmentShader:xt.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),R.geometry.deleteAttribute("normal"),R.geometry.deleteAttribute("uv"),R.onBeforeRender=function(N,M,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(R.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(R)),Gt.copy(x.backgroundRotation),Gt.x*=-1,Gt.y*=-1,Gt.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Gt.y*=-1,Gt.z*=-1),R.material.uniforms.envMap.value=S,R.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,R.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,R.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,R.material.uniforms.backgroundRotation.value.setFromMatrix4(Ac.makeRotationFromEuler(Gt)),R.material.toneMapped=it.getTransfer(S.colorSpace)!==Ze,(F!==S||L!==S.version||p!==e.toneMapping)&&(R.material.needsUpdate=!0,F=S,L=S.version,p=e.toneMapping),R.layers.enableAll(),_.unshift(R,R.geometry,R.material,0,0,null)):S&&S.isTexture&&(P===void 0&&(P=new Rt(new ni(2,2),new bt({name:"BackgroundMaterial",uniforms:Zn(xt.background.uniforms),vertexShader:xt.background.vertexShader,fragmentShader:xt.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),P.geometry.deleteAttribute("normal"),Object.defineProperty(P.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(P)),P.material.uniforms.t2D.value=S,P.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,P.material.toneMapped=it.getTransfer(S.colorSpace)!==Ze,S.matrixAutoUpdate===!0&&S.updateMatrix(),P.material.uniforms.uvTransform.value.copy(S.matrix),(F!==S||L!==S.version||p!==e.toneMapping)&&(P.material.needsUpdate=!0,F=S,L=S.version,p=e.toneMapping),P.layers.enableAll(),_.unshift(P,P.geometry,P.material,0,0,null))}function c(_,x){_.getRGB(gn,Va(e)),t.buffers.color.setClear(gn.r,gn.g,gn.b,x,r)}function o(){R!==void 0&&(R.geometry.dispose(),R.material.dispose(),R=void 0),P!==void 0&&(P.geometry.dispose(),P.material.dispose(),P=void 0)}return{getClearColor:function(){return f},setClearColor:function(_,x=1){f.set(_),m=x,c(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(_){m=_,c(f,m)},render:T,addToRenderList:I,dispose:o}}function bc(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},l=p(null);let r=l,f=!1;function m(C,V,z,W,Y){let B=!1;const O=L(C,W,z,V);r!==O&&(r=O,R(r.object)),B=v(C,W,z,Y),B&&T(C,W,z,Y),Y!==null&&n.update(Y,e.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,S(C,V,z,W),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function P(){return e.createVertexArray()}function R(C){return e.bindVertexArray(C)}function F(C){return e.deleteVertexArray(C)}function L(C,V,z,W){const Y=W.wireframe===!0;let B=i[V.id];B===void 0&&(B={},i[V.id]=B);const O=C.isInstancedMesh===!0?C.id:0;let ie=B[O];ie===void 0&&(ie={},B[O]=ie);let ae=ie[z.id];ae===void 0&&(ae={},ie[z.id]=ae);let Me=ae[Y];return Me===void 0&&(Me=p(P()),ae[Y]=Me),Me}function p(C){const V=[],z=[],W=[];for(let Y=0;Y<t;Y++)V[Y]=0,z[Y]=0,W[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:z,attributeDivisors:W,object:C,attributes:{},index:null}}function v(C,V,z,W){const Y=r.attributes,B=V.attributes;let O=0;const ie=z.getAttributes();for(const ae in ie)if(ie[ae].location>=0){const Ae=Y[ae];let he=B[ae];if(he===void 0&&(ae==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),ae==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),Ae===void 0||Ae.attribute!==he||he&&Ae.data!==he.data)return!0;O++}return r.attributesNum!==O||r.index!==W}function T(C,V,z,W){const Y={},B=V.attributes;let O=0;const ie=z.getAttributes();for(const ae in ie)if(ie[ae].location>=0){let Ae=B[ae];Ae===void 0&&(ae==="instanceMatrix"&&C.instanceMatrix&&(Ae=C.instanceMatrix),ae==="instanceColor"&&C.instanceColor&&(Ae=C.instanceColor));const he={};he.attribute=Ae,Ae&&Ae.data&&(he.data=Ae.data),Y[ae]=he,O++}r.attributes=Y,r.attributesNum=O,r.index=W}function I(){const C=r.newAttributes;for(let V=0,z=C.length;V<z;V++)C[V]=0}function c(C){o(C,0)}function o(C,V){const z=r.newAttributes,W=r.enabledAttributes,Y=r.attributeDivisors;z[C]=1,W[C]===0&&(e.enableVertexAttribArray(C),W[C]=1),Y[C]!==V&&(e.vertexAttribDivisor(C,V),Y[C]=V)}function _(){const C=r.newAttributes,V=r.enabledAttributes;for(let z=0,W=V.length;z<W;z++)V[z]!==C[z]&&(e.disableVertexAttribArray(z),V[z]=0)}function x(C,V,z,W,Y,B,O){O===!0?e.vertexAttribIPointer(C,V,z,Y,B):e.vertexAttribPointer(C,V,z,W,Y,B)}function S(C,V,z,W){I();const Y=W.attributes,B=z.getAttributes(),O=V.defaultAttributeValues;for(const ie in B){const ae=B[ie];if(ae.location>=0){let Me=Y[ie];if(Me===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor)),Me!==void 0){const Ae=Me.normalized,he=Me.itemSize,Ne=n.get(Me);if(Ne===void 0)continue;const Je=Ne.buffer,je=Ne.type,X=Ne.bytesPerElement,j=je===e.INT||je===e.UNSIGNED_INT||Me.gpuType===Ga;if(Me.isInterleavedBufferAttribute){const ne=Me.data,Le=ne.stride,Te=Me.offset;if(ne.isInstancedInterleavedBuffer){for(let be=0;be<ae.locationSize;be++)o(ae.location+be,ne.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let be=0;be<ae.locationSize;be++)c(ae.location+be);e.bindBuffer(e.ARRAY_BUFFER,Je);for(let be=0;be<ae.locationSize;be++)x(ae.location+be,he/ae.locationSize,je,Ae,Le*X,(Te+he/ae.locationSize*be)*X,j)}else{if(Me.isInstancedBufferAttribute){for(let ne=0;ne<ae.locationSize;ne++)o(ae.location+ne,Me.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ne=0;ne<ae.locationSize;ne++)c(ae.location+ne);e.bindBuffer(e.ARRAY_BUFFER,Je);for(let ne=0;ne<ae.locationSize;ne++)x(ae.location+ne,he/ae.locationSize,je,Ae,he*X,he/ae.locationSize*ne*X,j)}}else if(O!==void 0){const Ae=O[ie];if(Ae!==void 0)switch(Ae.length){case 2:e.vertexAttrib2fv(ae.location,Ae);break;case 3:e.vertexAttrib3fv(ae.location,Ae);break;case 4:e.vertexAttrib4fv(ae.location,Ae);break;default:e.vertexAttrib1fv(ae.location,Ae)}}}}_()}function N(){h();for(const C in i){const V=i[C];for(const z in V){const W=V[z];for(const Y in W){const B=W[Y];for(const O in B)F(B[O].object),delete B[O];delete W[Y]}}delete i[C]}}function M(C){if(i[C.id]===void 0)return;const V=i[C.id];for(const z in V){const W=V[z];for(const Y in W){const B=W[Y];for(const O in B)F(B[O].object),delete B[O];delete W[Y]}}delete i[C.id]}function U(C){for(const V in i){const z=i[V];for(const W in z){const Y=z[W];if(Y[C.id]===void 0)continue;const B=Y[C.id];for(const O in B)F(B[O].object),delete B[O];delete Y[C.id]}}}function d(C){for(const V in i){const z=i[V],W=C.isInstancedMesh===!0?C.id:0,Y=z[W];if(Y!==void 0){for(const B in Y){const O=Y[B];for(const ie in O)F(O[ie].object),delete O[ie];delete Y[B]}delete z[W],Object.keys(z).length===0&&delete i[V]}}}function h(){$(),f=!0,r!==l&&(r=l,R(r.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:h,resetDefaultState:$,dispose:N,releaseStatesOfGeometry:M,releaseStatesOfObject:d,releaseStatesOfProgram:U,initAttributes:I,enableAttribute:c,disableUnusedAttributes:_}}function Cc(e,n,t){let i;function l(R){i=R}function r(R,F){e.drawArrays(i,R,F),t.update(F,i,1)}function f(R,F,L){L!==0&&(e.drawArraysInstanced(i,R,F,L),t.update(F,i,L))}function m(R,F,L){if(L===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,R,0,F,0,L);let v=0;for(let T=0;T<L;T++)v+=F[T];t.update(v,i,1)}function P(R,F,L,p){if(L===0)return;const v=n.get("WEBGL_multi_draw");if(v===null)for(let T=0;T<R.length;T++)f(R[T],F[T],p[T]);else{v.multiDrawArraysInstancedWEBGL(i,R,0,F,0,p,0,L);let T=0;for(let I=0;I<L;I++)T+=F[I]*p[I];t.update(T,i,1)}}this.setMode=l,this.render=r,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=P}function Pc(e,n,t,i){let l;function r(){if(l!==void 0)return l;if(n.has("EXT_texture_filter_anisotropic")===!0){const U=n.get("EXT_texture_filter_anisotropic");l=e.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(U){return!(U!==Dt&&i.convert(U)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(U){const d=U===Ft&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(U!==Mt&&i.convert(U)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Nt&&!d)}function P(U){if(U==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let R=t.precision!==void 0?t.precision:"highp";const F=P(R);F!==R&&(qe("WebGLRenderer:",R,"not supported, using",F,"instead."),R=F);const L=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),v=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),T=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),N=e.getParameter(e.MAX_SAMPLES),M=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:P,textureFormatReadable:f,textureTypeReadable:m,precision:R,logarithmicDepthBuffer:L,reversedDepthBuffer:p,maxTextures:v,maxVertexTextures:T,maxTextureSize:I,maxCubemapSize:c,maxAttributes:o,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:S,maxSamples:N,samples:M}}function Lc(e){const n=this;let t=null,i=0,l=!1,r=!1;const f=new eo,m=new Oe,P={value:null,needsUpdate:!1};this.uniform=P,this.numPlanes=0,this.numIntersection=0,this.init=function(L,p){const v=L.length!==0||p||i!==0||l;return l=p,i=L.length,v},this.beginShadows=function(){r=!0,F(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(L,p){t=F(L,p,0)},this.setState=function(L,p,v){const T=L.clippingPlanes,I=L.clipIntersection,c=L.clipShadows,o=e.get(L);if(!l||T===null||T.length===0||r&&!c)r?F(null):R();else{const _=r?0:i,x=_*4;let S=o.clippingState||null;P.value=S,S=F(T,p,x,v);for(let N=0;N!==x;++N)S[N]=t[N];o.clippingState=S,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=_}};function R(){P.value!==t&&(P.value=t,P.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function F(L,p,v,T){const I=L!==null?L.length:0;let c=null;if(I!==0){if(c=P.value,T!==!0||c===null){const o=v+I*4,_=p.matrixWorldInverse;m.getNormalMatrix(_),(c===null||c.length<o)&&(c=new Float32Array(o));for(let x=0,S=v;x!==I;++x,S+=4)f.copy(L[x]).applyMatrix4(_,m),f.normal.toArray(c,S),c[S+3]=f.constant}P.value=c,P.needsUpdate=!0}return n.numPlanes=I,n.numIntersection=0,c}}const yt=4,ia=[.125,.215,.35,.446,.526,.582],Vt=20,Dc=256,nn=new jn,aa=new He;let Wn=null,zn=0,Xn=0,Yn=!1;const wc=new Be;class ra{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,l=100,r={}){const{size:f=256,position:m=wc}=r;Wn=this._renderer.getRenderTarget(),zn=this._renderer.getActiveCubeFace(),Xn=this._renderer.getActiveMipmapLevel(),Yn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const P=this._allocateTargets();return P.depthBuffer=!0,this._sceneToCubeUV(n,i,l,P,m),t>0&&this._blur(P,0,0,t),this._applyPMREM(P),this._cleanup(P),P}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=la(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(Wn,zn,Xn),this._renderer.xr.enabled=Yn,n.scissorTest=!1,qt(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===un||n.mapping===jt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Wn=this._renderer.getRenderTarget(),zn=this._renderer.getActiveCubeFace(),Xn=this._renderer.getActiveMipmapLevel(),Yn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:Ft,format:Dt,colorSpace:bn,depthBuffer:!1},l=oa(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oa(n,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Uc(r)),this._blurMaterial=Nc(r,n,t),this._ggxMaterial=Ic(r,n,t)}return l}_compileMaterial(n){const t=new Rt(new Cn,n);this._renderer.compile(t,nn)}_sceneToCubeUV(n,t,i,l,r){const P=new Sn(90,1,t,i),R=[1,-1,1,1,1,1],F=[1,1,1,-1,-1,-1],L=this._renderer,p=L.autoClear,v=L.toneMapping;L.getClearColor(aa),L.toneMapping=Tt,L.autoClear=!1,L.state.buffers.depth.getReversed()&&(L.setRenderTarget(l),L.clearDepth(),L.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rt(new ii,new Do({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1})));const I=this._backgroundBox,c=I.material;let o=!1;const _=n.background;_?_.isColor&&(c.color.copy(_),n.background=null,o=!0):(c.color.copy(aa),o=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(P.up.set(0,R[x],0),P.position.set(r.x,r.y,r.z),P.lookAt(r.x+F[x],r.y,r.z)):S===1?(P.up.set(0,0,R[x]),P.position.set(r.x,r.y,r.z),P.lookAt(r.x,r.y+F[x],r.z)):(P.up.set(0,R[x],0),P.position.set(r.x,r.y,r.z),P.lookAt(r.x,r.y,r.z+F[x]));const N=this._cubeSize;qt(l,S*N,x>2?N:0,N,N),L.setRenderTarget(l),o&&L.render(I,P),L.render(n,P)}L.toneMapping=v,L.autoClear=p,n.background=_}_textureToCubeUV(n,t){const i=this._renderer,l=n.mapping===un||n.mapping===jt;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=la()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sa());const r=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=r;const m=r.uniforms;m.envMap.value=n;const P=this._cubeSize;qt(t,0,0,3*P,2*P),i.setRenderTarget(t),i.render(f,nn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const l=this._lodMeshes.length;for(let r=1;r<l;r++)this._applyGGXFilter(n,r-1,r);t.autoClear=i}_applyGGXFilter(n,t,i){const l=this._renderer,r=this._pingPongRenderTarget,f=this._ggxMaterial,m=this._lodMeshes[i];m.material=f;const P=f.uniforms,R=i/(this._lodMeshes.length-1),F=t/(this._lodMeshes.length-1),L=Math.sqrt(R*R-F*F),p=0+R*1.25,v=L*p,{_lodMax:T}=this,I=this._sizeLods[i],c=3*I*(i>T-yt?i-T+yt:0),o=4*(this._cubeSize-I);P.envMap.value=n.texture,P.roughness.value=v,P.mipInt.value=T-t,qt(r,c,o,3*I,2*I),l.setRenderTarget(r),l.render(m,nn),P.envMap.value=r.texture,P.roughness.value=0,P.mipInt.value=T-i,qt(n,c,o,3*I,2*I),l.setRenderTarget(n),l.render(m,nn)}_blur(n,t,i,l,r){const f=this._pingPongRenderTarget;this._halfBlur(n,f,t,i,l,"latitudinal",r),this._halfBlur(f,n,i,i,l,"longitudinal",r)}_halfBlur(n,t,i,l,r,f,m){const P=this._renderer,R=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const F=3,L=this._lodMeshes[l];L.material=R;const p=R.uniforms,v=this._sizeLods[i]-1,T=isFinite(r)?Math.PI/(2*v):2*Math.PI/(2*Vt-1),I=r/T,c=isFinite(r)?1+Math.floor(F*I):Vt;c>Vt&&qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${Vt}`);const o=[];let _=0;for(let U=0;U<Vt;++U){const d=U/I,h=Math.exp(-d*d/2);o.push(h),U===0?_+=h:U<c&&(_+=2*h)}for(let U=0;U<o.length;U++)o[U]=o[U]/_;p.envMap.value=n.texture,p.samples.value=c,p.weights.value=o,p.latitudinal.value=f==="latitudinal",m&&(p.poleAxis.value=m);const{_lodMax:x}=this;p.dTheta.value=T,p.mipInt.value=x-i;const S=this._sizeLods[l],N=3*S*(l>x-yt?l-x+yt:0),M=4*(this._cubeSize-S);qt(t,N,M,3*S,2*S),P.setRenderTarget(t),P.render(L,nn)}}function Uc(e){const n=[],t=[],i=[];let l=e;const r=e-yt+1+ia.length;for(let f=0;f<r;f++){const m=Math.pow(2,l);n.push(m);let P=1/m;f>e-yt?P=ia[f-e+yt-1]:f===0&&(P=0),t.push(P);const R=1/(m-2),F=-R,L=1+R,p=[F,F,L,F,L,L,F,F,L,L,F,L],v=6,T=6,I=3,c=2,o=1,_=new Float32Array(I*T*v),x=new Float32Array(c*T*v),S=new Float32Array(o*T*v);for(let M=0;M<v;M++){const U=M%3*2/3-1,d=M>2?0:-1,h=[U,d,0,U+2/3,d,0,U+2/3,d+1,0,U,d,0,U+2/3,d+1,0,U,d+1,0];_.set(h,I*T*M),x.set(p,c*T*M);const $=[M,M,M,M,M,M];S.set($,o*T*M)}const N=new Cn;N.setAttribute("position",new En(_,I)),N.setAttribute("uv",new En(x,c)),N.setAttribute("faceIndex",new En(S,o)),i.push(new Rt(N,null)),l>yt&&l--}return{lodMeshes:i,sizeLods:n,sigmas:t}}function oa(e,n,t){const i=new At(e,n,t);return i.texture.mapping=Pn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qt(e,n,t,i,l){e.viewport.set(n,t,i,l),e.scissor.set(n,t,i,l)}function Ic(e,n,t){return new bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dc,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ln(),fragmentShader:`

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
		`,blending:wt,depthTest:!1,depthWrite:!1})}function Nc(e,n,t){const i=new Float32Array(Vt),l=new Be(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:Vt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ln(),fragmentShader:`

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
		`,blending:wt,depthTest:!1,depthWrite:!1})}function sa(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ln(),fragmentShader:`

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
		`,blending:wt,depthTest:!1,depthWrite:!1})}function la(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ln(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function Ln(){return`

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
	`}class ja extends At{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},l=[i,i,i,i,i,i];this.texture=new Wa(l),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ii(5,5,5),r=new bt({name:"CubemapFromEquirect",uniforms:Zn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_t,blending:wt});r.uniforms.tEquirect.value=t;const f=new Rt(l,r),m=t.minFilter;return t.minFilter===$t&&(t.minFilter=mt),new bo(1,10,this).update(n,f),t.minFilter=m,f.geometry.dispose(),f.material.dispose(),this}clear(n,t=!0,i=!0,l=!0){const r=n.getRenderTarget();for(let f=0;f<6;f++)n.setRenderTarget(this,f),n.clear(t,i,l);n.setRenderTarget(r)}}function yc(e){let n=new WeakMap,t=new WeakMap,i=null;function l(p,v=!1){return p==null?null:v?f(p):r(p)}function r(p){if(p&&p.isTexture){const v=p.mapping;if(v===Hn||v===Vn)if(n.has(p)){const T=n.get(p).texture;return m(T,p.mapping)}else{const T=p.image;if(T&&T.height>0){const I=new ja(T.height);return I.fromEquirectangularTexture(e,p),n.set(p,I),p.addEventListener("dispose",R),m(I.texture,p.mapping)}else return null}}return p}function f(p){if(p&&p.isTexture){const v=p.mapping,T=v===Hn||v===Vn,I=v===un||v===jt;if(T||I){let c=t.get(p);const o=c!==void 0?c.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==o)return i===null&&(i=new ra(e)),c=T?i.fromEquirectangular(p,c):i.fromCubemap(p,c),c.texture.pmremVersion=p.pmremVersion,t.set(p,c),c.texture;if(c!==void 0)return c.texture;{const _=p.image;return T&&_&&_.height>0||I&&_&&P(_)?(i===null&&(i=new ra(e)),c=T?i.fromEquirectangular(p):i.fromCubemap(p),c.texture.pmremVersion=p.pmremVersion,t.set(p,c),p.addEventListener("dispose",F),c.texture):null}}}return p}function m(p,v){return v===Hn?p.mapping=un:v===Vn&&(p.mapping=jt),p}function P(p){let v=0;const T=6;for(let I=0;I<T;I++)p[I]!==void 0&&v++;return v===T}function R(p){const v=p.target;v.removeEventListener("dispose",R);const T=n.get(v);T!==void 0&&(n.delete(v),T.dispose())}function F(p){const v=p.target;v.removeEventListener("dispose",F);const T=t.get(v);T!==void 0&&(t.delete(v),T.dispose())}function L(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:l,dispose:L}}function Fc(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const l=e.getExtension(i);return n[i]=l,l}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const l=t(i);return l===null&&wa("WebGLRenderer: "+i+" extension not supported."),l}}}function Oc(e,n,t,i){const l={},r=new WeakMap;function f(L){const p=L.target;p.index!==null&&n.remove(p.index);for(const T in p.attributes)n.remove(p.attributes[T]);p.removeEventListener("dispose",f),delete l[p.id];const v=r.get(p);v&&(n.remove(v),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function m(L,p){return l[p.id]===!0||(p.addEventListener("dispose",f),l[p.id]=!0,t.memory.geometries++),p}function P(L){const p=L.attributes;for(const v in p)n.update(p[v],e.ARRAY_BUFFER)}function R(L){const p=[],v=L.index,T=L.attributes.position;let I=0;if(T===void 0)return;if(v!==null){const _=v.array;I=v.version;for(let x=0,S=_.length;x<S;x+=3){const N=_[x+0],M=_[x+1],U=_[x+2];p.push(N,M,M,U,U,N)}}else{const _=T.array;I=T.version;for(let x=0,S=_.length/3-1;x<S;x+=3){const N=x+0,M=x+1,U=x+2;p.push(N,M,M,U,U,N)}}const c=new(T.count>=65535?Co:Po)(p,1);c.version=I;const o=r.get(L);o&&n.remove(o),r.set(L,c)}function F(L){const p=r.get(L);if(p){const v=L.index;v!==null&&p.version<v.version&&R(L)}else R(L);return r.get(L)}return{get:m,update:P,getWireframeAttribute:F}}function Bc(e,n,t){let i;function l(p){i=p}let r,f;function m(p){r=p.type,f=p.bytesPerElement}function P(p,v){e.drawElements(i,v,r,p*f),t.update(v,i,1)}function R(p,v,T){T!==0&&(e.drawElementsInstanced(i,v,r,p*f,T),t.update(v,i,T))}function F(p,v,T){if(T===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,r,p,0,T);let c=0;for(let o=0;o<T;o++)c+=v[o];t.update(c,i,1)}function L(p,v,T,I){if(T===0)return;const c=n.get("WEBGL_multi_draw");if(c===null)for(let o=0;o<p.length;o++)R(p[o]/f,v[o],I[o]);else{c.multiDrawElementsInstancedWEBGL(i,v,0,r,p,0,I,0,T);let o=0;for(let _=0;_<T;_++)o+=v[_]*I[_];t.update(o,i,1)}}this.setMode=l,this.setIndex=m,this.render=P,this.renderInstances=R,this.renderMultiDraw=F,this.renderMultiDrawInstances=L}function Gc(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,f,m){switch(t.calls++,f){case e.TRIANGLES:t.triangles+=m*(r/3);break;case e.LINES:t.lines+=m*(r/2);break;case e.LINE_STRIP:t.lines+=m*(r-1);break;case e.LINE_LOOP:t.lines+=m*r;break;case e.POINTS:t.points+=m*r;break;default:Qe("WebGLInfo: Unknown draw mode:",f);break}}function l(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:l,update:i}}function Hc(e,n,t){const i=new WeakMap,l=new pt;function r(f,m,P){const R=f.morphTargetInfluences,F=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,L=F!==void 0?F.length:0;let p=i.get(m);if(p===void 0||p.count!==L){let h=function(){U.dispose(),i.delete(m),m.removeEventListener("dispose",h)};p!==void 0&&p.texture.dispose();const v=m.morphAttributes.position!==void 0,T=m.morphAttributes.normal!==void 0,I=m.morphAttributes.color!==void 0,c=m.morphAttributes.position||[],o=m.morphAttributes.normal||[],_=m.morphAttributes.color||[];let x=0;v===!0&&(x=1),T===!0&&(x=2),I===!0&&(x=3);let S=m.attributes.position.count*x,N=1;S>n.maxTextureSize&&(N=Math.ceil(S/n.maxTextureSize),S=n.maxTextureSize);const M=new Float32Array(S*N*4*L),U=new Ha(M,S,N,L);U.type=Nt,U.needsUpdate=!0;const d=x*4;for(let $=0;$<L;$++){const C=c[$],V=o[$],z=_[$],W=S*N*4*$;for(let Y=0;Y<C.count;Y++){const B=Y*d;v===!0&&(l.fromBufferAttribute(C,Y),M[W+B+0]=l.x,M[W+B+1]=l.y,M[W+B+2]=l.z,M[W+B+3]=0),T===!0&&(l.fromBufferAttribute(V,Y),M[W+B+4]=l.x,M[W+B+5]=l.y,M[W+B+6]=l.z,M[W+B+7]=0),I===!0&&(l.fromBufferAttribute(z,Y),M[W+B+8]=l.x,M[W+B+9]=l.y,M[W+B+10]=l.z,M[W+B+11]=z.itemSize===4?l.w:1)}}p={count:L,texture:U,size:new ft(S,N)},i.set(m,p),m.addEventListener("dispose",h)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)P.getUniforms().setValue(e,"morphTexture",f.morphTexture,t);else{let v=0;for(let I=0;I<R.length;I++)v+=R[I];const T=m.morphTargetsRelative?1:1-v;P.getUniforms().setValue(e,"morphTargetBaseInfluence",T),P.getUniforms().setValue(e,"morphTargetInfluences",R)}P.getUniforms().setValue(e,"morphTargetsTexture",p.texture,t),P.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}return{update:r}}function Vc(e,n,t,i,l){let r=new WeakMap;function f(R){const F=l.render.frame,L=R.geometry,p=n.get(R,L);if(r.get(p)!==F&&(n.update(p),r.set(p,F)),R.isInstancedMesh&&(R.hasEventListener("dispose",P)===!1&&R.addEventListener("dispose",P),r.get(R)!==F&&(t.update(R.instanceMatrix,e.ARRAY_BUFFER),R.instanceColor!==null&&t.update(R.instanceColor,e.ARRAY_BUFFER),r.set(R,F))),R.isSkinnedMesh){const v=R.skeleton;r.get(v)!==F&&(v.update(),r.set(v,F))}return p}function m(){r=new WeakMap}function P(R){const F=R.target;F.removeEventListener("dispose",P),i.releaseStatesOfObject(F),t.remove(F.instanceMatrix),F.instanceColor!==null&&t.remove(F.instanceColor)}return{update:f,dispose:m}}const kc={[Za]:"LINEAR_TONE_MAPPING",[$a]:"REINHARD_TONE_MAPPING",[Ka]:"CINEON_TONE_MAPPING",[qa]:"ACES_FILMIC_TONE_MAPPING",[Ya]:"AGX_TONE_MAPPING",[Xa]:"NEUTRAL_TONE_MAPPING",[za]:"CUSTOM_TONE_MAPPING"};function Wc(e,n,t,i,l){const r=new At(n,t,{type:e,depthBuffer:i,stencilBuffer:l}),f=new At(n,t,{type:Ft,depthBuffer:!1,stencilBuffer:!1}),m=new Cn;m.setAttribute("position",new _i([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new _i([0,2,0,0,2,0],2));const P=new Tr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),R=new Rt(m,P),F=new jn(-1,1,1,-1,0,1);let L=null,p=null,v=!1,T,I=null,c=[],o=!1;this.setSize=function(_,x){r.setSize(_,x),f.setSize(_,x);for(let S=0;S<c.length;S++){const N=c[S];N.setSize&&N.setSize(_,x)}},this.setEffects=function(_){c=_,o=c.length>0&&c[0].isRenderPass===!0;const x=r.width,S=r.height;for(let N=0;N<c.length;N++){const M=c[N];M.setSize&&M.setSize(x,S)}},this.begin=function(_,x){if(v||_.toneMapping===Tt&&c.length===0)return!1;if(I=x,x!==null){const S=x.width,N=x.height;(r.width!==S||r.height!==N)&&this.setSize(S,N)}return o===!1&&_.setRenderTarget(r),T=_.toneMapping,_.toneMapping=Tt,!0},this.hasRenderPass=function(){return o},this.end=function(_,x){_.toneMapping=T,v=!0;let S=r,N=f;for(let M=0;M<c.length;M++){const U=c[M];if(U.enabled!==!1&&(U.render(_,N,S,x),U.needsSwap!==!1)){const d=S;S=N,N=d}}if(L!==_.outputColorSpace||p!==_.toneMapping){L=_.outputColorSpace,p=_.toneMapping,P.defines={},it.getTransfer(L)===Ze&&(P.defines.SRGB_TRANSFER="");const M=kc[p];M&&(P.defines[M]=""),P.needsUpdate=!0}P.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(I),_.render(R,F),I=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){r.dispose(),f.dispose(),m.dispose(),P.dispose()}}const er=new Fo,Qn=new An(1,1),tr=new Ha,nr=new wo,ir=new Wa,ca=[],fa=[],da=new Float32Array(16),ua=new Float32Array(9),pa=new Float32Array(4);function en(e,n,t){const i=e[0];if(i<=0||i>0)return e;const l=n*t;let r=ca[l];if(r===void 0&&(r=new Float32Array(l),ca[l]=r),n!==0){i.toArray(r,0);for(let f=1,m=0;f!==n;++f)m+=t,e[f].toArray(r,m)}return r}function rt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ot(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Dn(e,n){let t=fa[n];t===void 0&&(t=new Int32Array(n),fa[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function zc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Xc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(rt(t,n))return;e.uniform2fv(this.addr,n),ot(t,n)}}function Yc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(rt(t,n))return;e.uniform3fv(this.addr,n),ot(t,n)}}function qc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(rt(t,n))return;e.uniform4fv(this.addr,n),ot(t,n)}}function Kc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(rt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ot(t,n)}else{if(rt(t,i))return;pa.set(i),e.uniformMatrix2fv(this.addr,!1,pa),ot(t,i)}}function $c(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(rt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ot(t,n)}else{if(rt(t,i))return;ua.set(i),e.uniformMatrix3fv(this.addr,!1,ua),ot(t,i)}}function Zc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(rt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ot(t,n)}else{if(rt(t,i))return;da.set(i),e.uniformMatrix4fv(this.addr,!1,da),ot(t,i)}}function Qc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Jc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(rt(t,n))return;e.uniform2iv(this.addr,n),ot(t,n)}}function jc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(rt(t,n))return;e.uniform3iv(this.addr,n),ot(t,n)}}function ef(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(rt(t,n))return;e.uniform4iv(this.addr,n),ot(t,n)}}function tf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function nf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(rt(t,n))return;e.uniform2uiv(this.addr,n),ot(t,n)}}function af(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(rt(t,n))return;e.uniform3uiv(this.addr,n),ot(t,n)}}function rf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(rt(t,n))return;e.uniform4uiv(this.addr,n),ot(t,n)}}function of(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l);let r;this.type===e.SAMPLER_2D_SHADOW?(Qn.compareFunction=t.isReversedDepthBuffer()?ei:ti,r=Qn):r=er,t.setTexture2D(n||r,l)}function sf(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTexture3D(n||nr,l)}function lf(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTextureCube(n||ir,l)}function cf(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTexture2DArray(n||tr,l)}function ff(e){switch(e){case 5126:return zc;case 35664:return Xc;case 35665:return Yc;case 35666:return qc;case 35674:return Kc;case 35675:return $c;case 35676:return Zc;case 5124:case 35670:return Qc;case 35667:case 35671:return Jc;case 35668:case 35672:return jc;case 35669:case 35673:return ef;case 5125:return tf;case 36294:return nf;case 36295:return af;case 36296:return rf;case 35678:case 36198:case 36298:case 36306:case 35682:return of;case 35679:case 36299:case 36307:return sf;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return cf}}function df(e,n){e.uniform1fv(this.addr,n)}function uf(e,n){const t=en(n,this.size,2);e.uniform2fv(this.addr,t)}function pf(e,n){const t=en(n,this.size,3);e.uniform3fv(this.addr,t)}function hf(e,n){const t=en(n,this.size,4);e.uniform4fv(this.addr,t)}function mf(e,n){const t=en(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function _f(e,n){const t=en(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function gf(e,n){const t=en(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function vf(e,n){e.uniform1iv(this.addr,n)}function Sf(e,n){e.uniform2iv(this.addr,n)}function Ef(e,n){e.uniform3iv(this.addr,n)}function xf(e,n){e.uniform4iv(this.addr,n)}function Mf(e,n){e.uniform1uiv(this.addr,n)}function Tf(e,n){e.uniform2uiv(this.addr,n)}function Af(e,n){e.uniform3uiv(this.addr,n)}function Rf(e,n){e.uniform4uiv(this.addr,n)}function bf(e,n,t){const i=this.cache,l=n.length,r=Dn(t,l);rt(i,r)||(e.uniform1iv(this.addr,r),ot(i,r));let f;this.type===e.SAMPLER_2D_SHADOW?f=Qn:f=er;for(let m=0;m!==l;++m)t.setTexture2D(n[m]||f,r[m])}function Cf(e,n,t){const i=this.cache,l=n.length,r=Dn(t,l);rt(i,r)||(e.uniform1iv(this.addr,r),ot(i,r));for(let f=0;f!==l;++f)t.setTexture3D(n[f]||nr,r[f])}function Pf(e,n,t){const i=this.cache,l=n.length,r=Dn(t,l);rt(i,r)||(e.uniform1iv(this.addr,r),ot(i,r));for(let f=0;f!==l;++f)t.setTextureCube(n[f]||ir,r[f])}function Lf(e,n,t){const i=this.cache,l=n.length,r=Dn(t,l);rt(i,r)||(e.uniform1iv(this.addr,r),ot(i,r));for(let f=0;f!==l;++f)t.setTexture2DArray(n[f]||tr,r[f])}function Df(e){switch(e){case 5126:return df;case 35664:return uf;case 35665:return pf;case 35666:return hf;case 35674:return mf;case 35675:return _f;case 35676:return gf;case 5124:case 35670:return vf;case 35667:case 35671:return Sf;case 35668:case 35672:return Ef;case 35669:case 35673:return xf;case 5125:return Mf;case 36294:return Tf;case 36295:return Af;case 36296:return Rf;case 35678:case 36198:case 36298:case 36306:case 35682:return bf;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return Lf}}class wf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ff(t.type)}}class Uf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Df(t.type)}}class If{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const l=this.seq;for(let r=0,f=l.length;r!==f;++r){const m=l[r];m.setValue(n,t[m.id],i)}}}const qn=/(\w+)(\])?(\[|\.)?/g;function ha(e,n){e.seq.push(n),e.map[n.id]=n}function Nf(e,n,t){const i=e.name,l=i.length;for(qn.lastIndex=0;;){const r=qn.exec(i),f=qn.lastIndex;let m=r[1];const P=r[2]==="]",R=r[3];if(P&&(m=m|0),R===void 0||R==="["&&f+2===l){ha(t,R===void 0?new wf(m,e,n):new Uf(m,e,n));break}else{let L=t.map[m];L===void 0&&(L=new If(m),ha(t,L)),t=L}}}class Tn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let f=0;f<i;++f){const m=n.getActiveUniform(t,f),P=n.getUniformLocation(t,m.name);Nf(m,P,this)}const l=[],r=[];for(const f of this.seq)f.type===n.SAMPLER_2D_SHADOW||f.type===n.SAMPLER_CUBE_SHADOW||f.type===n.SAMPLER_2D_ARRAY_SHADOW?l.push(f):r.push(f);l.length>0&&(this.seq=l.concat(r))}setValue(n,t,i,l){const r=this.map[t];r!==void 0&&r.setValue(n,i,l)}setOptional(n,t,i){const l=t[i];l!==void 0&&this.setValue(n,i,l)}static upload(n,t,i,l){for(let r=0,f=t.length;r!==f;++r){const m=t[r],P=i[m.id];P.needsUpdate!==!1&&m.setValue(n,P.value,l)}}static seqWithValue(n,t){const i=[];for(let l=0,r=n.length;l!==r;++l){const f=n[l];f.id in t&&i.push(f)}return i}}function ma(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const yf=37297;let Ff=0;function Of(e,n){const t=e.split(`
`),i=[],l=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let f=l;f<r;f++){const m=f+1;i.push(`${m===n?">":" "} ${m}: ${t[f]}`)}return i.join(`
`)}const _a=new Oe;function Bf(e){it._getMatrix(_a,it.workingColorSpace,e);const n=`mat3( ${_a.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(e)){case Qa:return[n,"LinearTransferOETF"];case Ze:return[n,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function ga(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const f=/ERROR: 0:(\d+)/.exec(r);if(f){const m=parseInt(f[1]);return t.toUpperCase()+`

`+r+`

`+Of(e.getShaderSource(n),m)}else return r}function Gf(e,n){const t=Bf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Hf={[Za]:"Linear",[$a]:"Reinhard",[Ka]:"Cineon",[qa]:"ACESFilmic",[Ya]:"AgX",[Xa]:"Neutral",[za]:"Custom"};function Vf(e,n){const t=Hf[n];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vn=new Be;function kf(){it.getLuminanceCoefficients(vn);const e=vn.x.toFixed(4),n=vn.y.toFixed(4),t=vn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ln).join(`
`)}function zf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Xf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let l=0;l<i;l++){const r=e.getActiveAttrib(n,l),f=r.name;let m=1;r.type===e.FLOAT_MAT2&&(m=2),r.type===e.FLOAT_MAT3&&(m=3),r.type===e.FLOAT_MAT4&&(m=4),t[f]={type:r.type,location:e.getAttribLocation(n,f),locationSize:m}}return t}function ln(e){return e!==""}function va(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Sa(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Yf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jn(e){return e.replace(Yf,Kf)}const qf=new Map;function Kf(e,n){let t=De[n];if(t===void 0){const i=qf.get(n);if(i!==void 0)t=De[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return Jn(t)}const $f=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ea(e){return e.replace($f,Zf)}function Zf(e,n,t,i){let l="";for(let r=parseInt(n);r<parseInt(t);r++)l+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return l}function xa(e){let n=`precision ${e.precision} float;
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
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}const Qf={[xn]:"SHADOWMAP_TYPE_PCF",[sn]:"SHADOWMAP_TYPE_VSM"};function Jf(e){return Qf[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jf={[un]:"ENVMAP_TYPE_CUBE",[jt]:"ENVMAP_TYPE_CUBE",[Pn]:"ENVMAP_TYPE_CUBE_UV"};function ed(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":jf[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const td={[jt]:"ENVMAP_MODE_REFRACTION"};function nd(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":td[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const id={[yo]:"ENVMAP_BLENDING_MULTIPLY",[No]:"ENVMAP_BLENDING_MIX",[Io]:"ENVMAP_BLENDING_ADD"};function ad(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":id[e.combine]||"ENVMAP_BLENDING_NONE"}function rd(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function od(e,n,t,i){const l=e.getContext(),r=t.defines;let f=t.vertexShader,m=t.fragmentShader;const P=Jf(t),R=ed(t),F=nd(t),L=ad(t),p=rd(t),v=Wf(t),T=zf(r),I=l.createProgram();let c,o,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(ln).join(`
`),c.length>0&&(c+=`
`),o=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(ln).join(`
`),o.length>0&&(o+=`
`)):(c=[xa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+F:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+P:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ln).join(`
`),o=[xa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+R:"",t.envMap?"#define "+F:"",t.envMap?"#define "+L:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+P:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tt?"#define TONE_MAPPING":"",t.toneMapping!==Tt?De.tonemapping_pars_fragment:"",t.toneMapping!==Tt?Vf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Gf("linearToOutputTexel",t.outputColorSpace),kf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ln).join(`
`)),f=Jn(f),f=va(f,t),f=Sa(f,t),m=Jn(m),m=va(m,t),m=Sa(m,t),f=Ea(f),m=Ea(m),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,c=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,o=["#define varying in",t.glslVersion===ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const x=_+c+f,S=_+o+m,N=ma(l,l.VERTEX_SHADER,x),M=ma(l,l.FRAGMENT_SHADER,S);l.attachShader(I,N),l.attachShader(I,M),t.index0AttributeName!==void 0?l.bindAttribLocation(I,0,t.index0AttributeName):t.morphTargets===!0&&l.bindAttribLocation(I,0,"position"),l.linkProgram(I);function U(C){if(e.debug.checkShaderErrors){const V=l.getProgramInfoLog(I)||"",z=l.getShaderInfoLog(N)||"",W=l.getShaderInfoLog(M)||"",Y=V.trim(),B=z.trim(),O=W.trim();let ie=!0,ae=!0;if(l.getProgramParameter(I,l.LINK_STATUS)===!1)if(ie=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(l,I,N,M);else{const Me=ga(l,N,"vertex"),Ae=ga(l,M,"fragment");Qe("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(I,l.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+Me+`
`+Ae)}else Y!==""?qe("WebGLProgram: Program Info Log:",Y):(B===""||O==="")&&(ae=!1);ae&&(C.diagnostics={runnable:ie,programLog:Y,vertexShader:{log:B,prefix:c},fragmentShader:{log:O,prefix:o}})}l.deleteShader(N),l.deleteShader(M),d=new Tn(l,I),h=Xf(l,I)}let d;this.getUniforms=function(){return d===void 0&&U(this),d};let h;this.getAttributes=function(){return h===void 0&&U(this),h};let $=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=l.getProgramParameter(I,yf)),$},this.destroy=function(){i.releaseStatesOfProgram(this),l.deleteProgram(I),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ff++,this.cacheKey=n,this.usedTimes=1,this.program=I,this.vertexShader=N,this.fragmentShader=M,this}let sd=0;class ld{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,l=this._getShaderStage(t),r=this._getShaderStage(i),f=this._getShaderCacheForMaterial(n);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(r)===!1&&(f.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new cd(n),t.set(n,i)),i}}class cd{constructor(n){this.id=sd++,this.code=n,this.usedTimes=0}}function fd(e,n,t,i,l,r){const f=new Lo,m=new ld,P=new Set,R=[],F=new Map,L=i.logarithmicDepthBuffer;let p=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(d){return P.add(d),d===0?"uv":`uv${d}`}function I(d,h,$,C,V){const z=C.fog,W=V.geometry,Y=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?C.environment:null,B=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,O=n.get(d.envMap||Y,B),ie=O&&O.mapping===Pn?O.image.height:null,ae=v[d.type];d.precision!==null&&(p=i.getMaxPrecision(d.precision),p!==d.precision&&qe("WebGLProgram.getParameters:",d.precision,"not supported, using",p,"instead."));const Me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ae=Me!==void 0?Me.length:0;let he=0;W.morphAttributes.position!==void 0&&(he=1),W.morphAttributes.normal!==void 0&&(he=2),W.morphAttributes.color!==void 0&&(he=3);let Ne,Je,je,X;if(ae){const ke=xt[ae];Ne=ke.vertexShader,Je=ke.fragmentShader}else Ne=d.vertexShader,Je=d.fragmentShader,m.update(d),je=m.getVertexShaderID(d),X=m.getFragmentShaderID(d);const j=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),Le=V.isInstancedMesh===!0,Te=V.isBatchedMesh===!0,be=!!d.map,st=!!d.matcap,ye=!!O,Ve=!!d.aoMap,Xe=!!d.lightMap,we=!!d.bumpMap,tt=!!d.normalMap,g=!!d.displacementMap,at=!!d.emissiveMap,Ge=!!d.metalnessMap,Ke=!!d.roughnessMap,ge=d.anisotropy>0,u=d.clearcoat>0,a=d.dispersion>0,A=d.iridescence>0,k=d.sheen>0,q=d.transmission>0,H=ge&&!!d.anisotropyMap,de=u&&!!d.clearcoatMap,ee=u&&!!d.clearcoatNormalMap,xe=u&&!!d.clearcoatRoughnessMap,Re=A&&!!d.iridescenceMap,K=A&&!!d.iridescenceThicknessMap,Q=k&&!!d.sheenColorMap,ue=k&&!!d.sheenRoughnessMap,me=!!d.specularMap,le=!!d.specularColorMap,Ue=!!d.specularIntensityMap,E=q&&!!d.transmissionMap,te=q&&!!d.thicknessMap,J=!!d.gradientMap,fe=!!d.alphaMap,Z=d.alphaTest>0,G=!!d.alphaHash,pe=!!d.extensions;let Ce=Tt;d.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ce=e.toneMapping);const $e={shaderID:ae,shaderType:d.type,shaderName:d.name,vertexShader:Ne,fragmentShader:Je,defines:d.defines,customVertexShaderID:je,customFragmentShaderID:X,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:p,batching:Te,batchingColor:Te&&V._colorsTexture!==null,instancing:Le,instancingColor:Le&&V.instanceColor!==null,instancingMorph:Le&&V.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:bn,alphaToCoverage:!!d.alphaToCoverage,map:be,matcap:st,envMap:ye,envMapMode:ye&&O.mapping,envMapCubeUVHeight:ie,aoMap:Ve,lightMap:Xe,bumpMap:we,normalMap:tt,displacementMap:g,emissiveMap:at,normalMapObjectSpace:tt&&d.normalMapType===Ro,normalMapTangentSpace:tt&&d.normalMapType===Ao,metalnessMap:Ge,roughnessMap:Ke,anisotropy:ge,anisotropyMap:H,clearcoat:u,clearcoatMap:de,clearcoatNormalMap:ee,clearcoatRoughnessMap:xe,dispersion:a,iridescence:A,iridescenceMap:Re,iridescenceThicknessMap:K,sheen:k,sheenColorMap:Q,sheenRoughnessMap:ue,specularMap:me,specularColorMap:le,specularIntensityMap:Ue,transmission:q,transmissionMap:E,thicknessMap:te,gradientMap:J,opaque:d.transparent===!1&&d.blending===Mn&&d.alphaToCoverage===!1,alphaMap:fe,alphaTest:Z,alphaHash:G,combine:d.combine,mapUv:be&&T(d.map.channel),aoMapUv:Ve&&T(d.aoMap.channel),lightMapUv:Xe&&T(d.lightMap.channel),bumpMapUv:we&&T(d.bumpMap.channel),normalMapUv:tt&&T(d.normalMap.channel),displacementMapUv:g&&T(d.displacementMap.channel),emissiveMapUv:at&&T(d.emissiveMap.channel),metalnessMapUv:Ge&&T(d.metalnessMap.channel),roughnessMapUv:Ke&&T(d.roughnessMap.channel),anisotropyMapUv:H&&T(d.anisotropyMap.channel),clearcoatMapUv:de&&T(d.clearcoatMap.channel),clearcoatNormalMapUv:ee&&T(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&T(d.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&T(d.iridescenceMap.channel),iridescenceThicknessMapUv:K&&T(d.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&T(d.sheenColorMap.channel),sheenRoughnessMapUv:ue&&T(d.sheenRoughnessMap.channel),specularMapUv:me&&T(d.specularMap.channel),specularColorMapUv:le&&T(d.specularColorMap.channel),specularIntensityMapUv:Ue&&T(d.specularIntensityMap.channel),transmissionMapUv:E&&T(d.transmissionMap.channel),thicknessMapUv:te&&T(d.thicknessMap.channel),alphaMapUv:fe&&T(d.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(tt||ge),vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(be||fe),fog:!!z,useFog:d.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:d.wireframe===!1&&(d.flatShading===!0||W.attributes.normal===void 0&&tt===!1&&(d.isMeshLambertMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)),sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:L,reversedDepthBuffer:ne,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:he,numDirLights:h.directional.length,numPointLights:h.point.length,numSpotLights:h.spot.length,numSpotLightMaps:h.spotLightMap.length,numRectAreaLights:h.rectArea.length,numHemiLights:h.hemi.length,numDirLightShadows:h.directionalShadowMap.length,numPointLightShadows:h.pointShadowMap.length,numSpotLightShadows:h.spotShadowMap.length,numSpotLightShadowsWithMaps:h.numSpotLightShadowsWithMaps,numLightProbes:h.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:d.dithering,shadowMapEnabled:e.shadowMap.enabled&&$.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ce,decodeVideoTexture:be&&d.map.isVideoTexture===!0&&it.getTransfer(d.map.colorSpace)===Ze,decodeVideoTextureEmissive:at&&d.emissiveMap.isVideoTexture===!0&&it.getTransfer(d.emissiveMap.colorSpace)===Ze,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===Lt,flipSided:d.side===_t,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:pe&&d.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&d.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return $e.vertexUv1s=P.has(1),$e.vertexUv2s=P.has(2),$e.vertexUv3s=P.has(3),P.clear(),$e}function c(d){const h=[];if(d.shaderID?h.push(d.shaderID):(h.push(d.customVertexShaderID),h.push(d.customFragmentShaderID)),d.defines!==void 0)for(const $ in d.defines)h.push($),h.push(d.defines[$]);return d.isRawShaderMaterial===!1&&(o(h,d),_(h,d),h.push(e.outputColorSpace)),h.push(d.customProgramCacheKey),h.join()}function o(d,h){d.push(h.precision),d.push(h.outputColorSpace),d.push(h.envMapMode),d.push(h.envMapCubeUVHeight),d.push(h.mapUv),d.push(h.alphaMapUv),d.push(h.lightMapUv),d.push(h.aoMapUv),d.push(h.bumpMapUv),d.push(h.normalMapUv),d.push(h.displacementMapUv),d.push(h.emissiveMapUv),d.push(h.metalnessMapUv),d.push(h.roughnessMapUv),d.push(h.anisotropyMapUv),d.push(h.clearcoatMapUv),d.push(h.clearcoatNormalMapUv),d.push(h.clearcoatRoughnessMapUv),d.push(h.iridescenceMapUv),d.push(h.iridescenceThicknessMapUv),d.push(h.sheenColorMapUv),d.push(h.sheenRoughnessMapUv),d.push(h.specularMapUv),d.push(h.specularColorMapUv),d.push(h.specularIntensityMapUv),d.push(h.transmissionMapUv),d.push(h.thicknessMapUv),d.push(h.combine),d.push(h.fogExp2),d.push(h.sizeAttenuation),d.push(h.morphTargetsCount),d.push(h.morphAttributeCount),d.push(h.numDirLights),d.push(h.numPointLights),d.push(h.numSpotLights),d.push(h.numSpotLightMaps),d.push(h.numHemiLights),d.push(h.numRectAreaLights),d.push(h.numDirLightShadows),d.push(h.numPointLightShadows),d.push(h.numSpotLightShadows),d.push(h.numSpotLightShadowsWithMaps),d.push(h.numLightProbes),d.push(h.shadowMapType),d.push(h.toneMapping),d.push(h.numClippingPlanes),d.push(h.numClipIntersection),d.push(h.depthPacking)}function _(d,h){f.disableAll(),h.instancing&&f.enable(0),h.instancingColor&&f.enable(1),h.instancingMorph&&f.enable(2),h.matcap&&f.enable(3),h.envMap&&f.enable(4),h.normalMapObjectSpace&&f.enable(5),h.normalMapTangentSpace&&f.enable(6),h.clearcoat&&f.enable(7),h.iridescence&&f.enable(8),h.alphaTest&&f.enable(9),h.vertexColors&&f.enable(10),h.vertexAlphas&&f.enable(11),h.vertexUv1s&&f.enable(12),h.vertexUv2s&&f.enable(13),h.vertexUv3s&&f.enable(14),h.vertexTangents&&f.enable(15),h.anisotropy&&f.enable(16),h.alphaHash&&f.enable(17),h.batching&&f.enable(18),h.dispersion&&f.enable(19),h.batchingColor&&f.enable(20),h.gradientMap&&f.enable(21),d.push(f.mask),f.disableAll(),h.fog&&f.enable(0),h.useFog&&f.enable(1),h.flatShading&&f.enable(2),h.logarithmicDepthBuffer&&f.enable(3),h.reversedDepthBuffer&&f.enable(4),h.skinning&&f.enable(5),h.morphTargets&&f.enable(6),h.morphNormals&&f.enable(7),h.morphColors&&f.enable(8),h.premultipliedAlpha&&f.enable(9),h.shadowMapEnabled&&f.enable(10),h.doubleSided&&f.enable(11),h.flipSided&&f.enable(12),h.useDepthPacking&&f.enable(13),h.dithering&&f.enable(14),h.transmission&&f.enable(15),h.sheen&&f.enable(16),h.opaque&&f.enable(17),h.pointsUvs&&f.enable(18),h.decodeVideoTexture&&f.enable(19),h.decodeVideoTextureEmissive&&f.enable(20),h.alphaToCoverage&&f.enable(21),d.push(f.mask)}function x(d){const h=v[d.type];let $;if(h){const C=xt[h];$=To.clone(C.uniforms)}else $=d.uniforms;return $}function S(d,h){let $=F.get(h);return $!==void 0?++$.usedTimes:($=new od(e,h,d,l),R.push($),F.set(h,$)),$}function N(d){if(--d.usedTimes===0){const h=R.indexOf(d);R[h]=R[R.length-1],R.pop(),F.delete(d.cacheKey),d.destroy()}}function M(d){m.remove(d)}function U(){m.dispose()}return{getParameters:I,getProgramCacheKey:c,getUniforms:x,acquireProgram:S,releaseProgram:N,releaseShaderCache:M,programs:R,dispose:U}}function dd(){let e=new WeakMap;function n(f){return e.has(f)}function t(f){let m=e.get(f);return m===void 0&&(m={},e.set(f,m)),m}function i(f){e.delete(f)}function l(f,m,P){e.get(f)[m]=P}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:l,dispose:r}}function ud(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function Ma(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Ta(){const e=[];let n=0;const t=[],i=[],l=[];function r(){n=0,t.length=0,i.length=0,l.length=0}function f(p){let v=0;return p.isInstancedMesh&&(v+=2),p.isSkinnedMesh&&(v+=1),v}function m(p,v,T,I,c,o){let _=e[n];return _===void 0?(_={id:p.id,object:p,geometry:v,material:T,materialVariant:f(p),groupOrder:I,renderOrder:p.renderOrder,z:c,group:o},e[n]=_):(_.id=p.id,_.object=p,_.geometry=v,_.material=T,_.materialVariant=f(p),_.groupOrder=I,_.renderOrder=p.renderOrder,_.z=c,_.group=o),n++,_}function P(p,v,T,I,c,o){const _=m(p,v,T,I,c,o);T.transmission>0?i.push(_):T.transparent===!0?l.push(_):t.push(_)}function R(p,v,T,I,c,o){const _=m(p,v,T,I,c,o);T.transmission>0?i.unshift(_):T.transparent===!0?l.unshift(_):t.unshift(_)}function F(p,v){t.length>1&&t.sort(p||ud),i.length>1&&i.sort(v||Ma),l.length>1&&l.sort(v||Ma)}function L(){for(let p=n,v=e.length;p<v;p++){const T=e[p];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:i,transparent:l,init:r,push:P,unshift:R,finish:L,sort:F}}function pd(){let e=new WeakMap;function n(i,l){const r=e.get(i);let f;return r===void 0?(f=new Ta,e.set(i,[f])):l>=r.length?(f=new Ta,r.push(f)):f=r[l],f}function t(){e=new WeakMap}return{get:n,dispose:t}}function hd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Be,color:new He};break;case"SpotLight":t={position:new Be,direction:new Be,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Be,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Be,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new Be,halfWidth:new Be,halfHeight:new Be};break}return e[n.id]=t,t}}}function md(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let _d=0;function gd(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function vd(e){const n=new hd,t=md(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let R=0;R<9;R++)i.probe.push(new Be);const l=new Be,r=new Qt,f=new Qt;function m(R){let F=0,L=0,p=0;for(let h=0;h<9;h++)i.probe[h].set(0,0,0);let v=0,T=0,I=0,c=0,o=0,_=0,x=0,S=0,N=0,M=0,U=0;R.sort(gd);for(let h=0,$=R.length;h<$;h++){const C=R[h],V=C.color,z=C.intensity,W=C.distance;let Y=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===dn?Y=C.shadow.map.texture:Y=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)F+=V.r*z,L+=V.g*z,p+=V.b*z;else if(C.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(C.sh.coefficients[B],z);U++}else if(C.isDirectionalLight){const B=n.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const O=C.shadow,ie=t.get(C);ie.shadowIntensity=O.intensity,ie.shadowBias=O.bias,ie.shadowNormalBias=O.normalBias,ie.shadowRadius=O.radius,ie.shadowMapSize=O.mapSize,i.directionalShadow[v]=ie,i.directionalShadowMap[v]=Y,i.directionalShadowMatrix[v]=C.shadow.matrix,_++}i.directional[v]=B,v++}else if(C.isSpotLight){const B=n.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(V).multiplyScalar(z),B.distance=W,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,i.spot[I]=B;const O=C.shadow;if(C.map&&(i.spotLightMap[N]=C.map,N++,O.updateMatrices(C),C.castShadow&&M++),i.spotLightMatrix[I]=O.matrix,C.castShadow){const ie=t.get(C);ie.shadowIntensity=O.intensity,ie.shadowBias=O.bias,ie.shadowNormalBias=O.normalBias,ie.shadowRadius=O.radius,ie.shadowMapSize=O.mapSize,i.spotShadow[I]=ie,i.spotShadowMap[I]=Y,S++}I++}else if(C.isRectAreaLight){const B=n.get(C);B.color.copy(V).multiplyScalar(z),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),i.rectArea[c]=B,c++}else if(C.isPointLight){const B=n.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const O=C.shadow,ie=t.get(C);ie.shadowIntensity=O.intensity,ie.shadowBias=O.bias,ie.shadowNormalBias=O.normalBias,ie.shadowRadius=O.radius,ie.shadowMapSize=O.mapSize,ie.shadowCameraNear=O.camera.near,ie.shadowCameraFar=O.camera.far,i.pointShadow[T]=ie,i.pointShadowMap[T]=Y,i.pointShadowMatrix[T]=C.shadow.matrix,x++}i.point[T]=B,T++}else if(C.isHemisphereLight){const B=n.get(C);B.skyColor.copy(C.color).multiplyScalar(z),B.groundColor.copy(C.groundColor).multiplyScalar(z),i.hemi[o]=B,o++}}c>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=F,i.ambient[1]=L,i.ambient[2]=p;const d=i.hash;(d.directionalLength!==v||d.pointLength!==T||d.spotLength!==I||d.rectAreaLength!==c||d.hemiLength!==o||d.numDirectionalShadows!==_||d.numPointShadows!==x||d.numSpotShadows!==S||d.numSpotMaps!==N||d.numLightProbes!==U)&&(i.directional.length=v,i.spot.length=I,i.rectArea.length=c,i.point.length=T,i.hemi.length=o,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+N-M,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=U,d.directionalLength=v,d.pointLength=T,d.spotLength=I,d.rectAreaLength=c,d.hemiLength=o,d.numDirectionalShadows=_,d.numPointShadows=x,d.numSpotShadows=S,d.numSpotMaps=N,d.numLightProbes=U,i.version=_d++)}function P(R,F){let L=0,p=0,v=0,T=0,I=0;const c=F.matrixWorldInverse;for(let o=0,_=R.length;o<_;o++){const x=R[o];if(x.isDirectionalLight){const S=i.directional[L];S.direction.setFromMatrixPosition(x.matrixWorld),l.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(l),S.direction.transformDirection(c),L++}else if(x.isSpotLight){const S=i.spot[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(c),S.direction.setFromMatrixPosition(x.matrixWorld),l.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(l),S.direction.transformDirection(c),v++}else if(x.isRectAreaLight){const S=i.rectArea[T];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(c),f.identity(),r.copy(x.matrixWorld),r.premultiply(c),f.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(f),S.halfHeight.applyMatrix4(f),T++}else if(x.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(c),p++}else if(x.isHemisphereLight){const S=i.hemi[I];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(c),I++}}}return{setup:m,setupView:P,state:i}}function Aa(e){const n=new vd(e),t=[],i=[];function l(F){R.camera=F,t.length=0,i.length=0}function r(F){t.push(F)}function f(F){i.push(F)}function m(){n.setup(t)}function P(F){n.setupView(t,F)}const R={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:l,state:R,setupLights:m,setupLightsView:P,pushLight:r,pushShadow:f}}function Sd(e){let n=new WeakMap;function t(l,r=0){const f=n.get(l);let m;return f===void 0?(m=new Aa(e),n.set(l,[m])):r>=f.length?(m=new Aa(e),f.push(m)):m=f[r],m}function i(){n=new WeakMap}return{get:t,dispose:i}}const Ed=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xd=`uniform sampler2D shadow_pass;
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
}`,Md=[new Be(1,0,0),new Be(-1,0,0),new Be(0,1,0),new Be(0,-1,0),new Be(0,0,1),new Be(0,0,-1)],Td=[new Be(0,-1,0),new Be(0,-1,0),new Be(0,0,1),new Be(0,0,-1),new Be(0,-1,0),new Be(0,-1,0)],Ra=new Qt,an=new Be,Kn=new Be;function Ad(e,n,t){let i=new Ua;const l=new ft,r=new ft,f=new pt,m=new to,P=new no,R={},F=t.maxTextureSize,L={[cn]:_t,[_t]:cn,[Lt]:Lt},p=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Ed,fragmentShader:xd}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const T=new Cn;T.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const I=new Rt(T,p),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xn;let o=this.type;this.render=function(M,U,d){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||M.length===0)return;this.type===io&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=xn);const h=e.getRenderTarget(),$=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),V=e.state;V.setBlending(wt),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=o!==this.type;z&&U.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(Y=>Y.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,Y=M.length;W<Y;W++){const B=M[W],O=B.shadow;if(O===void 0){qe("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;l.copy(O.mapSize);const ie=O.getFrameExtents();l.multiply(ie),r.copy(O.mapSize),(l.x>F||l.y>F)&&(l.x>F&&(r.x=Math.floor(F/ie.x),l.x=r.x*ie.x,O.mapSize.x=r.x),l.y>F&&(r.y=Math.floor(F/ie.y),l.y=r.y*ie.y,O.mapSize.y=r.y));const ae=e.state.buffers.depth.getReversed();if(O.camera._reversedDepth=ae,O.map===null||z===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===sn){if(B.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new At(l.x,l.y,{format:dn,type:Ft,minFilter:mt,magFilter:mt,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new An(l.x,l.y,Nt),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=Jt,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=kt,O.map.depthTexture.magFilter=kt}else B.isPointLight?(O.map=new ja(l.x),O.map.depthTexture=new ao(l.x,Wt)):(O.map=new At(l.x,l.y),O.map.depthTexture=new An(l.x,l.y,Wt)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=Jt,this.type===xn?(O.map.depthTexture.compareFunction=ae?ei:ti,O.map.depthTexture.minFilter=mt,O.map.depthTexture.magFilter=mt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=kt,O.map.depthTexture.magFilter=kt);O.camera.updateProjectionMatrix()}const Me=O.map.isWebGLCubeRenderTarget?6:1;for(let Ae=0;Ae<Me;Ae++){if(O.map.isWebGLCubeRenderTarget)e.setRenderTarget(O.map,Ae),e.clear();else{Ae===0&&(e.setRenderTarget(O.map),e.clear());const he=O.getViewport(Ae);f.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),V.viewport(f)}if(B.isPointLight){const he=O.camera,Ne=O.matrix,Je=B.distance||he.far;Je!==he.far&&(he.far=Je,he.updateProjectionMatrix()),an.setFromMatrixPosition(B.matrixWorld),he.position.copy(an),Kn.copy(he.position),Kn.add(Md[Ae]),he.up.copy(Td[Ae]),he.lookAt(Kn),he.updateMatrixWorld(),Ne.makeTranslation(-an.x,-an.y,-an.z),Ra.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Ra,he.coordinateSystem,he.reversedDepth)}else O.updateMatrices(B);i=O.getFrustum(),S(U,d,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===sn&&_(O,d),O.needsUpdate=!1}o=this.type,c.needsUpdate=!1,e.setRenderTarget(h,$,C)};function _(M,U){const d=n.update(I);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,v.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new At(l.x,l.y,{format:dn,type:Ft})),p.uniforms.shadow_pass.value=M.map.depthTexture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,e.setRenderTarget(M.mapPass),e.clear(),e.renderBufferDirect(U,null,d,p,I,null),v.uniforms.shadow_pass.value=M.mapPass.texture,v.uniforms.resolution.value=M.mapSize,v.uniforms.radius.value=M.radius,e.setRenderTarget(M.map),e.clear(),e.renderBufferDirect(U,null,d,v,I,null)}function x(M,U,d,h){let $=null;const C=d.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)$=C;else if($=d.isPointLight===!0?P:m,e.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const V=$.uuid,z=U.uuid;let W=R[V];W===void 0&&(W={},R[V]=W);let Y=W[z];Y===void 0&&(Y=$.clone(),W[z]=Y,U.addEventListener("dispose",N)),$=Y}if($.visible=U.visible,$.wireframe=U.wireframe,h===sn?$.side=U.shadowSide!==null?U.shadowSide:U.side:$.side=U.shadowSide!==null?U.shadowSide:L[U.side],$.alphaMap=U.alphaMap,$.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,$.map=U.map,$.clipShadows=U.clipShadows,$.clippingPlanes=U.clippingPlanes,$.clipIntersection=U.clipIntersection,$.displacementMap=U.displacementMap,$.displacementScale=U.displacementScale,$.displacementBias=U.displacementBias,$.wireframeLinewidth=U.wireframeLinewidth,$.linewidth=U.linewidth,d.isPointLight===!0&&$.isMeshDistanceMaterial===!0){const V=e.properties.get($);V.light=d}return $}function S(M,U,d,h,$){if(M.visible===!1)return;if(M.layers.test(U.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&$===sn)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,M.matrixWorld);const z=n.update(M),W=M.material;if(Array.isArray(W)){const Y=z.groups;for(let B=0,O=Y.length;B<O;B++){const ie=Y[B],ae=W[ie.materialIndex];if(ae&&ae.visible){const Me=x(M,ae,h,$);M.onBeforeShadow(e,M,U,d,z,Me,ie),e.renderBufferDirect(d,null,z,Me,M,ie),M.onAfterShadow(e,M,U,d,z,Me,ie)}}}else if(W.visible){const Y=x(M,W,h,$);M.onBeforeShadow(e,M,U,d,z,Y,null),e.renderBufferDirect(d,null,z,Y,M,null),M.onAfterShadow(e,M,U,d,z,Y,null)}}const V=M.children;for(let z=0,W=V.length;z<W;z++)S(V[z],U,d,h,$)}function N(M){M.target.removeEventListener("dispose",N);for(const d in R){const h=R[d],$=M.target.uuid;$ in h&&(h[$].dispose(),delete h[$])}}}function Rd(e,n){function t(){let E=!1;const te=new pt;let J=null;const fe=new pt(0,0,0,0);return{setMask:function(Z){J!==Z&&!E&&(e.colorMask(Z,Z,Z,Z),J=Z)},setLocked:function(Z){E=Z},setClear:function(Z,G,pe,Ce,$e){$e===!0&&(Z*=Ce,G*=Ce,pe*=Ce),te.set(Z,G,pe,Ce),fe.equals(te)===!1&&(e.clearColor(Z,G,pe,Ce),fe.copy(te))},reset:function(){E=!1,J=null,fe.set(-1,0,0,0)}}}function i(){let E=!1,te=!1,J=null,fe=null,Z=null;return{setReversed:function(G){if(te!==G){const pe=n.get("EXT_clip_control");G?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),te=G;const Ce=Z;Z=null,this.setClear(Ce)}},getReversed:function(){return te},setTest:function(G){G?j(e.DEPTH_TEST):ne(e.DEPTH_TEST)},setMask:function(G){J!==G&&!E&&(e.depthMask(G),J=G)},setFunc:function(G){if(te&&(G=Oo[G]),fe!==G){switch(G){case So:e.depthFunc(e.NEVER);break;case vo:e.depthFunc(e.ALWAYS);break;case go:e.depthFunc(e.LESS);break;case gi:e.depthFunc(e.LEQUAL);break;case _o:e.depthFunc(e.EQUAL);break;case mo:e.depthFunc(e.GEQUAL);break;case ho:e.depthFunc(e.GREATER);break;case po:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}fe=G}},setLocked:function(G){E=G},setClear:function(G){Z!==G&&(Z=G,te&&(G=1-G),e.clearDepth(G))},reset:function(){E=!1,J=null,fe=null,Z=null,te=!1}}}function l(){let E=!1,te=null,J=null,fe=null,Z=null,G=null,pe=null,Ce=null,$e=null;return{setTest:function(ke){E||(ke?j(e.STENCIL_TEST):ne(e.STENCIL_TEST))},setMask:function(ke){te!==ke&&!E&&(e.stencilMask(ke),te=ke)},setFunc:function(ke,Ct,Pt){(J!==ke||fe!==Ct||Z!==Pt)&&(e.stencilFunc(ke,Ct,Pt),J=ke,fe=Ct,Z=Pt)},setOp:function(ke,Ct,Pt){(G!==ke||pe!==Ct||Ce!==Pt)&&(e.stencilOp(ke,Ct,Pt),G=ke,pe=Ct,Ce=Pt)},setLocked:function(ke){E=ke},setClear:function(ke){$e!==ke&&(e.clearStencil(ke),$e=ke)},reset:function(){E=!1,te=null,J=null,fe=null,Z=null,G=null,pe=null,Ce=null,$e=null}}}const r=new t,f=new i,m=new l,P=new WeakMap,R=new WeakMap;let F={},L={},p=new WeakMap,v=[],T=null,I=!1,c=null,o=null,_=null,x=null,S=null,N=null,M=null,U=new He(0,0,0),d=0,h=!1,$=null,C=null,V=null,z=null,W=null;const Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,O=0;const ie=e.getParameter(e.VERSION);ie.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(ie)[1]),B=O>=1):ie.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),B=O>=2);let ae=null,Me={};const Ae=e.getParameter(e.SCISSOR_BOX),he=e.getParameter(e.VIEWPORT),Ne=new pt().fromArray(Ae),Je=new pt().fromArray(he);function je(E,te,J,fe){const Z=new Uint8Array(4),G=e.createTexture();e.bindTexture(E,G),e.texParameteri(E,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(E,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let pe=0;pe<J;pe++)E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,fe,0,e.RGBA,e.UNSIGNED_BYTE,Z):e.texImage2D(te+pe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Z);return G}const X={};X[e.TEXTURE_2D]=je(e.TEXTURE_2D,e.TEXTURE_2D,1),X[e.TEXTURE_CUBE_MAP]=je(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[e.TEXTURE_2D_ARRAY]=je(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),X[e.TEXTURE_3D]=je(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),f.setClear(1),m.setClear(0),j(e.DEPTH_TEST),f.setFunc(gi),we(!1),tt(Zi),j(e.CULL_FACE),Ve(wt);function j(E){F[E]!==!0&&(e.enable(E),F[E]=!0)}function ne(E){F[E]!==!1&&(e.disable(E),F[E]=!1)}function Le(E,te){return L[E]!==te?(e.bindFramebuffer(E,te),L[E]=te,E===e.DRAW_FRAMEBUFFER&&(L[e.FRAMEBUFFER]=te),E===e.FRAMEBUFFER&&(L[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Te(E,te){let J=v,fe=!1;if(E){J=p.get(te),J===void 0&&(J=[],p.set(te,J));const Z=E.textures;if(J.length!==Z.length||J[0]!==e.COLOR_ATTACHMENT0){for(let G=0,pe=Z.length;G<pe;G++)J[G]=e.COLOR_ATTACHMENT0+G;J.length=Z.length,fe=!0}}else J[0]!==e.BACK&&(J[0]=e.BACK,fe=!0);fe&&e.drawBuffers(J)}function be(E){return T!==E?(e.useProgram(E),T=E,!0):!1}const st={[tn]:e.FUNC_ADD,[Lr]:e.FUNC_SUBTRACT,[Pr]:e.FUNC_REVERSE_SUBTRACT};st[Bo]=e.MIN,st[Go]=e.MAX;const ye={[zr]:e.ZERO,[Wr]:e.ONE,[kr]:e.SRC_COLOR,[Vr]:e.SRC_ALPHA,[Hr]:e.SRC_ALPHA_SATURATE,[Gr]:e.DST_COLOR,[Br]:e.DST_ALPHA,[Or]:e.ONE_MINUS_SRC_COLOR,[Fr]:e.ONE_MINUS_SRC_ALPHA,[yr]:e.ONE_MINUS_DST_COLOR,[Nr]:e.ONE_MINUS_DST_ALPHA,[Ir]:e.CONSTANT_COLOR,[Ur]:e.ONE_MINUS_CONSTANT_COLOR,[wr]:e.CONSTANT_ALPHA,[Dr]:e.ONE_MINUS_CONSTANT_ALPHA};function Ve(E,te,J,fe,Z,G,pe,Ce,$e,ke){if(E===wt){I===!0&&(ne(e.BLEND),I=!1);return}if(I===!1&&(j(e.BLEND),I=!0),E!==Mo){if(E!==c||ke!==h){if((o!==tn||S!==tn)&&(e.blendEquation(e.FUNC_ADD),o=tn,S=tn),ke)switch(E){case Mn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ji:e.blendFunc(e.ONE,e.ONE);break;case Ji:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Qi:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Qe("WebGLState: Invalid blending: ",E);break}else switch(E){case Mn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ji:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Ji:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qi:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",E);break}_=null,x=null,N=null,M=null,U.set(0,0,0),d=0,c=E,h=ke}return}Z=Z||te,G=G||J,pe=pe||fe,(te!==o||Z!==S)&&(e.blendEquationSeparate(st[te],st[Z]),o=te,S=Z),(J!==_||fe!==x||G!==N||pe!==M)&&(e.blendFuncSeparate(ye[J],ye[fe],ye[G],ye[pe]),_=J,x=fe,N=G,M=pe),(Ce.equals(U)===!1||$e!==d)&&(e.blendColor(Ce.r,Ce.g,Ce.b,$e),U.copy(Ce),d=$e),c=E,h=!1}function Xe(E,te){E.side===Lt?ne(e.CULL_FACE):j(e.CULL_FACE);let J=E.side===_t;te&&(J=!J),we(J),E.blending===Mn&&E.transparent===!1?Ve(wt):Ve(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),f.setFunc(E.depthFunc),f.setTest(E.depthTest),f.setMask(E.depthWrite),r.setMask(E.colorWrite);const fe=E.stencilWrite;m.setTest(fe),fe&&(m.setMask(E.stencilWriteMask),m.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),m.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),at(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?j(e.SAMPLE_ALPHA_TO_COVERAGE):ne(e.SAMPLE_ALPHA_TO_COVERAGE)}function we(E){$!==E&&(E?e.frontFace(e.CW):e.frontFace(e.CCW),$=E)}function tt(E){E!==Eo?(j(e.CULL_FACE),E!==C&&(E===Zi?e.cullFace(e.BACK):E===xo?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ne(e.CULL_FACE),C=E}function g(E){E!==V&&(B&&e.lineWidth(E),V=E)}function at(E,te,J){E?(j(e.POLYGON_OFFSET_FILL),(z!==te||W!==J)&&(z=te,W=J,f.getReversed()&&(te=-te),e.polygonOffset(te,J))):ne(e.POLYGON_OFFSET_FILL)}function Ge(E){E?j(e.SCISSOR_TEST):ne(e.SCISSOR_TEST)}function Ke(E){E===void 0&&(E=e.TEXTURE0+Y-1),ae!==E&&(e.activeTexture(E),ae=E)}function ge(E,te,J){J===void 0&&(ae===null?J=e.TEXTURE0+Y-1:J=ae);let fe=Me[J];fe===void 0&&(fe={type:void 0,texture:void 0},Me[J]=fe),(fe.type!==E||fe.texture!==te)&&(ae!==J&&(e.activeTexture(J),ae=J),e.bindTexture(E,te||X[E]),fe.type=E,fe.texture=te)}function u(){const E=Me[ae];E!==void 0&&E.type!==void 0&&(e.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function a(){try{e.compressedTexImage2D(...arguments)}catch(E){Qe("WebGLState:",E)}}function A(){try{e.compressedTexImage3D(...arguments)}catch(E){Qe("WebGLState:",E)}}function k(){try{e.texSubImage2D(...arguments)}catch(E){Qe("WebGLState:",E)}}function q(){try{e.texSubImage3D(...arguments)}catch(E){Qe("WebGLState:",E)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(E){Qe("WebGLState:",E)}}function de(){try{e.compressedTexSubImage3D(...arguments)}catch(E){Qe("WebGLState:",E)}}function ee(){try{e.texStorage2D(...arguments)}catch(E){Qe("WebGLState:",E)}}function xe(){try{e.texStorage3D(...arguments)}catch(E){Qe("WebGLState:",E)}}function Re(){try{e.texImage2D(...arguments)}catch(E){Qe("WebGLState:",E)}}function K(){try{e.texImage3D(...arguments)}catch(E){Qe("WebGLState:",E)}}function Q(E){Ne.equals(E)===!1&&(e.scissor(E.x,E.y,E.z,E.w),Ne.copy(E))}function ue(E){Je.equals(E)===!1&&(e.viewport(E.x,E.y,E.z,E.w),Je.copy(E))}function me(E,te){let J=R.get(te);J===void 0&&(J=new WeakMap,R.set(te,J));let fe=J.get(E);fe===void 0&&(fe=e.getUniformBlockIndex(te,E.name),J.set(E,fe))}function le(E,te){const fe=R.get(te).get(E);P.get(te)!==fe&&(e.uniformBlockBinding(te,fe,E.__bindingPointIndex),P.set(te,fe))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),f.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),F={},ae=null,Me={},L={},p=new WeakMap,v=[],T=null,I=!1,c=null,o=null,_=null,x=null,S=null,N=null,M=null,U=new He(0,0,0),d=0,h=!1,$=null,C=null,V=null,z=null,W=null,Ne.set(0,0,e.canvas.width,e.canvas.height),Je.set(0,0,e.canvas.width,e.canvas.height),r.reset(),f.reset(),m.reset()}return{buffers:{color:r,depth:f,stencil:m},enable:j,disable:ne,bindFramebuffer:Le,drawBuffers:Te,useProgram:be,setBlending:Ve,setMaterial:Xe,setFlipSided:we,setCullFace:tt,setLineWidth:g,setPolygonOffset:at,setScissorTest:Ge,activeTexture:Ke,bindTexture:ge,unbindTexture:u,compressedTexImage2D:a,compressedTexImage3D:A,texImage2D:Re,texImage3D:K,updateUBOMapping:me,uniformBlockBinding:le,texStorage2D:ee,texStorage3D:xe,texSubImage2D:k,texSubImage3D:q,compressedTexSubImage2D:H,compressedTexSubImage3D:de,scissor:Q,viewport:ue,reset:Ue}}function bd(e,n,t,i,l,r,f){const m=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,P=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),R=new ft,F=new WeakMap;let L;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(u,a){return v?new OffscreenCanvas(u,a):Uo("canvas")}function I(u,a,A){let k=1;const q=ge(u);if((q.width>A||q.height>A)&&(k=A/Math.max(q.width,q.height)),k<1)if(typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap||typeof VideoFrame<"u"&&u instanceof VideoFrame){const H=Math.floor(k*q.width),de=Math.floor(k*q.height);L===void 0&&(L=T(H,de));const ee=a?T(H,de):L;return ee.width=H,ee.height=de,ee.getContext("2d").drawImage(u,0,0,H,de),qe("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+H+"x"+de+")."),ee}else return"data"in u&&qe("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),u;return u}function c(u){return u.generateMipmaps}function o(u){e.generateMipmap(u)}function _(u){return u.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:u.isWebGL3DRenderTarget?e.TEXTURE_3D:u.isWebGLArrayRenderTarget||u.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(u,a,A,k,q=!1){if(u!==null){if(e[u]!==void 0)return e[u];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+u+"'")}let H=a;if(a===e.RED&&(A===e.FLOAT&&(H=e.R32F),A===e.HALF_FLOAT&&(H=e.R16F),A===e.UNSIGNED_BYTE&&(H=e.R8)),a===e.RED_INTEGER&&(A===e.UNSIGNED_BYTE&&(H=e.R8UI),A===e.UNSIGNED_SHORT&&(H=e.R16UI),A===e.UNSIGNED_INT&&(H=e.R32UI),A===e.BYTE&&(H=e.R8I),A===e.SHORT&&(H=e.R16I),A===e.INT&&(H=e.R32I)),a===e.RG&&(A===e.FLOAT&&(H=e.RG32F),A===e.HALF_FLOAT&&(H=e.RG16F),A===e.UNSIGNED_BYTE&&(H=e.RG8)),a===e.RG_INTEGER&&(A===e.UNSIGNED_BYTE&&(H=e.RG8UI),A===e.UNSIGNED_SHORT&&(H=e.RG16UI),A===e.UNSIGNED_INT&&(H=e.RG32UI),A===e.BYTE&&(H=e.RG8I),A===e.SHORT&&(H=e.RG16I),A===e.INT&&(H=e.RG32I)),a===e.RGB_INTEGER&&(A===e.UNSIGNED_BYTE&&(H=e.RGB8UI),A===e.UNSIGNED_SHORT&&(H=e.RGB16UI),A===e.UNSIGNED_INT&&(H=e.RGB32UI),A===e.BYTE&&(H=e.RGB8I),A===e.SHORT&&(H=e.RGB16I),A===e.INT&&(H=e.RGB32I)),a===e.RGBA_INTEGER&&(A===e.UNSIGNED_BYTE&&(H=e.RGBA8UI),A===e.UNSIGNED_SHORT&&(H=e.RGBA16UI),A===e.UNSIGNED_INT&&(H=e.RGBA32UI),A===e.BYTE&&(H=e.RGBA8I),A===e.SHORT&&(H=e.RGBA16I),A===e.INT&&(H=e.RGBA32I)),a===e.RGB&&(A===e.UNSIGNED_INT_5_9_9_9_REV&&(H=e.RGB9_E5),A===e.UNSIGNED_INT_10F_11F_11F_REV&&(H=e.R11F_G11F_B10F)),a===e.RGBA){const de=q?Qa:it.getTransfer(k);A===e.FLOAT&&(H=e.RGBA32F),A===e.HALF_FLOAT&&(H=e.RGBA16F),A===e.UNSIGNED_BYTE&&(H=de===Ze?e.SRGB8_ALPHA8:e.RGBA8),A===e.UNSIGNED_SHORT_4_4_4_4&&(H=e.RGBA4),A===e.UNSIGNED_SHORT_5_5_5_1&&(H=e.RGB5_A1)}return(H===e.R16F||H===e.R32F||H===e.RG16F||H===e.RG32F||H===e.RGBA16F||H===e.RGBA32F)&&n.get("EXT_color_buffer_float"),H}function S(u,a){let A;return u?a===null||a===Wt||a===fn?A=e.DEPTH24_STENCIL8:a===Nt?A=e.DEPTH32F_STENCIL8:a===Rn&&(A=e.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):a===null||a===Wt||a===fn?A=e.DEPTH_COMPONENT24:a===Nt?A=e.DEPTH_COMPONENT32F:a===Rn&&(A=e.DEPTH_COMPONENT16),A}function N(u,a){return c(u)===!0||u.isFramebufferTexture&&u.minFilter!==kt&&u.minFilter!==mt?Math.log2(Math.max(a.width,a.height))+1:u.mipmaps!==void 0&&u.mipmaps.length>0?u.mipmaps.length:u.isCompressedTexture&&Array.isArray(u.image)?a.mipmaps.length:1}function M(u){const a=u.target;a.removeEventListener("dispose",M),d(a),a.isVideoTexture&&F.delete(a)}function U(u){const a=u.target;a.removeEventListener("dispose",U),$(a)}function d(u){const a=i.get(u);if(a.__webglInit===void 0)return;const A=u.source,k=p.get(A);if(k){const q=k[a.__cacheKey];q.usedTimes--,q.usedTimes===0&&h(u),Object.keys(k).length===0&&p.delete(A)}i.remove(u)}function h(u){const a=i.get(u);e.deleteTexture(a.__webglTexture);const A=u.source,k=p.get(A);delete k[a.__cacheKey],f.memory.textures--}function $(u){const a=i.get(u);if(u.depthTexture&&(u.depthTexture.dispose(),i.remove(u.depthTexture)),u.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(a.__webglFramebuffer[k]))for(let q=0;q<a.__webglFramebuffer[k].length;q++)e.deleteFramebuffer(a.__webglFramebuffer[k][q]);else e.deleteFramebuffer(a.__webglFramebuffer[k]);a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[k])}else{if(Array.isArray(a.__webglFramebuffer))for(let k=0;k<a.__webglFramebuffer.length;k++)e.deleteFramebuffer(a.__webglFramebuffer[k]);else e.deleteFramebuffer(a.__webglFramebuffer);if(a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let k=0;k<a.__webglColorRenderbuffer.length;k++)a.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[k]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}const A=u.textures;for(let k=0,q=A.length;k<q;k++){const H=i.get(A[k]);H.__webglTexture&&(e.deleteTexture(H.__webglTexture),f.memory.textures--),i.remove(A[k])}i.remove(u)}let C=0;function V(){C=0}function z(){const u=C;return u>=l.maxTextures&&qe("WebGLTextures: Trying to use "+u+" texture units while this GPU supports only "+l.maxTextures),C+=1,u}function W(u){const a=[];return a.push(u.wrapS),a.push(u.wrapT),a.push(u.wrapR||0),a.push(u.magFilter),a.push(u.minFilter),a.push(u.anisotropy),a.push(u.internalFormat),a.push(u.format),a.push(u.type),a.push(u.generateMipmaps),a.push(u.premultiplyAlpha),a.push(u.flipY),a.push(u.unpackAlignment),a.push(u.colorSpace),a.join()}function Y(u,a){const A=i.get(u);if(u.isVideoTexture&&Ge(u),u.isRenderTargetTexture===!1&&u.isExternalTexture!==!0&&u.version>0&&A.__version!==u.version){const k=u.image;if(k===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{X(A,u,a);return}}else u.isExternalTexture&&(A.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,A.__webglTexture,e.TEXTURE0+a)}function B(u,a){const A=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&A.__version!==u.version){X(A,u,a);return}else u.isExternalTexture&&(A.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,A.__webglTexture,e.TEXTURE0+a)}function O(u,a){const A=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&A.__version!==u.version){X(A,u,a);return}t.bindTexture(e.TEXTURE_3D,A.__webglTexture,e.TEXTURE0+a)}function ie(u,a){const A=i.get(u);if(u.isCubeDepthTexture!==!0&&u.version>0&&A.__version!==u.version){j(A,u,a);return}t.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+a)}const ae={[Yr]:e.REPEAT,[$n]:e.CLAMP_TO_EDGE,[Xr]:e.MIRRORED_REPEAT},Me={[kt]:e.NEAREST,[qr]:e.NEAREST_MIPMAP_NEAREST,[_n]:e.NEAREST_MIPMAP_LINEAR,[mt]:e.LINEAR,[yn]:e.LINEAR_MIPMAP_NEAREST,[$t]:e.LINEAR_MIPMAP_LINEAR},Ae={[jr]:e.NEVER,[Jr]:e.ALWAYS,[Qr]:e.LESS,[ti]:e.LEQUAL,[Zr]:e.EQUAL,[ei]:e.GEQUAL,[$r]:e.GREATER,[Kr]:e.NOTEQUAL};function he(u,a){if(a.type===Nt&&n.has("OES_texture_float_linear")===!1&&(a.magFilter===mt||a.magFilter===yn||a.magFilter===_n||a.magFilter===$t||a.minFilter===mt||a.minFilter===yn||a.minFilter===_n||a.minFilter===$t)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(u,e.TEXTURE_WRAP_S,ae[a.wrapS]),e.texParameteri(u,e.TEXTURE_WRAP_T,ae[a.wrapT]),(u===e.TEXTURE_3D||u===e.TEXTURE_2D_ARRAY)&&e.texParameteri(u,e.TEXTURE_WRAP_R,ae[a.wrapR]),e.texParameteri(u,e.TEXTURE_MAG_FILTER,Me[a.magFilter]),e.texParameteri(u,e.TEXTURE_MIN_FILTER,Me[a.minFilter]),a.compareFunction&&(e.texParameteri(u,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(u,e.TEXTURE_COMPARE_FUNC,Ae[a.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(a.magFilter===kt||a.minFilter!==_n&&a.minFilter!==$t||a.type===Nt&&n.has("OES_texture_float_linear")===!1)return;if(a.anisotropy>1||i.get(a).__currentAnisotropy){const A=n.get("EXT_texture_filter_anisotropic");e.texParameterf(u,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,l.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy}}}function Ne(u,a){let A=!1;u.__webglInit===void 0&&(u.__webglInit=!0,a.addEventListener("dispose",M));const k=a.source;let q=p.get(k);q===void 0&&(q={},p.set(k,q));const H=W(a);if(H!==u.__cacheKey){q[H]===void 0&&(q[H]={texture:e.createTexture(),usedTimes:0},f.memory.textures++,A=!0),q[H].usedTimes++;const de=q[u.__cacheKey];de!==void 0&&(q[u.__cacheKey].usedTimes--,de.usedTimes===0&&h(a)),u.__cacheKey=H,u.__webglTexture=q[H].texture}return A}function Je(u,a,A){return Math.floor(Math.floor(u/A)/a)}function je(u,a,A,k){const H=u.updateRanges;if(H.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,a.width,a.height,A,k,a.data);else{H.sort((K,Q)=>K.start-Q.start);let de=0;for(let K=1;K<H.length;K++){const Q=H[de],ue=H[K],me=Q.start+Q.count,le=Je(ue.start,a.width,4),Ue=Je(Q.start,a.width,4);ue.start<=me+1&&le===Ue&&Je(ue.start+ue.count-1,a.width,4)===le?Q.count=Math.max(Q.count,ue.start+ue.count-Q.start):(++de,H[de]=ue)}H.length=de+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),xe=e.getParameter(e.UNPACK_SKIP_PIXELS),Re=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,a.width);for(let K=0,Q=H.length;K<Q;K++){const ue=H[K],me=Math.floor(ue.start/4),le=Math.ceil(ue.count/4),Ue=me%a.width,E=Math.floor(me/a.width),te=le,J=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ue),e.pixelStorei(e.UNPACK_SKIP_ROWS,E),t.texSubImage2D(e.TEXTURE_2D,0,Ue,E,te,J,A,k,a.data)}u.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,xe),e.pixelStorei(e.UNPACK_SKIP_ROWS,Re)}}function X(u,a,A){let k=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(k=e.TEXTURE_3D);const q=Ne(u,a),H=a.source;t.bindTexture(k,u.__webglTexture,e.TEXTURE0+A);const de=i.get(H);if(H.version!==de.__version||q===!0){t.activeTexture(e.TEXTURE0+A);const ee=it.getPrimaries(it.workingColorSpace),xe=a.colorSpace===Kt?null:it.getPrimaries(a.colorSpace),Re=a.colorSpace===Kt||ee===xe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let K=I(a.image,!1,l.maxTextureSize);K=Ke(a,K);const Q=r.convert(a.format,a.colorSpace),ue=r.convert(a.type);let me=x(a.internalFormat,Q,ue,a.colorSpace,a.isVideoTexture);he(k,a);let le;const Ue=a.mipmaps,E=a.isVideoTexture!==!0,te=de.__version===void 0||q===!0,J=H.dataReady,fe=N(a,K);if(a.isDepthTexture)me=S(a.format===Zt,a.type),te&&(E?t.texStorage2D(e.TEXTURE_2D,1,me,K.width,K.height):t.texImage2D(e.TEXTURE_2D,0,me,K.width,K.height,0,Q,ue,null));else if(a.isDataTexture)if(Ue.length>0){E&&te&&t.texStorage2D(e.TEXTURE_2D,fe,me,Ue[0].width,Ue[0].height);for(let Z=0,G=Ue.length;Z<G;Z++)le=Ue[Z],E?J&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,le.width,le.height,Q,ue,le.data):t.texImage2D(e.TEXTURE_2D,Z,me,le.width,le.height,0,Q,ue,le.data);a.generateMipmaps=!1}else E?(te&&t.texStorage2D(e.TEXTURE_2D,fe,me,K.width,K.height),J&&je(a,K,Q,ue)):t.texImage2D(e.TEXTURE_2D,0,me,K.width,K.height,0,Q,ue,K.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){E&&te&&t.texStorage3D(e.TEXTURE_2D_ARRAY,fe,me,Ue[0].width,Ue[0].height,K.depth);for(let Z=0,G=Ue.length;Z<G;Z++)if(le=Ue[Z],a.format!==Dt)if(Q!==null)if(E){if(J)if(a.layerUpdates.size>0){const pe=ea(le.width,le.height,a.format,a.type);for(const Ce of a.layerUpdates){const $e=le.data.subarray(Ce*pe/le.data.BYTES_PER_ELEMENT,(Ce+1)*pe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,Ce,le.width,le.height,1,Q,$e)}a.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,K.depth,Q,le.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,me,le.width,le.height,K.depth,0,le.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else E?J&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,K.depth,Q,ue,le.data):t.texImage3D(e.TEXTURE_2D_ARRAY,Z,me,le.width,le.height,K.depth,0,Q,ue,le.data)}else{E&&te&&t.texStorage2D(e.TEXTURE_2D,fe,me,Ue[0].width,Ue[0].height);for(let Z=0,G=Ue.length;Z<G;Z++)le=Ue[Z],a.format!==Dt?Q!==null?E?J&&t.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,le.width,le.height,Q,le.data):t.compressedTexImage2D(e.TEXTURE_2D,Z,me,le.width,le.height,0,le.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):E?J&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,le.width,le.height,Q,ue,le.data):t.texImage2D(e.TEXTURE_2D,Z,me,le.width,le.height,0,Q,ue,le.data)}else if(a.isDataArrayTexture)if(E){if(te&&t.texStorage3D(e.TEXTURE_2D_ARRAY,fe,me,K.width,K.height,K.depth),J)if(a.layerUpdates.size>0){const Z=ea(K.width,K.height,a.format,a.type);for(const G of a.layerUpdates){const pe=K.data.subarray(G*Z/K.data.BYTES_PER_ELEMENT,(G+1)*Z/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,G,K.width,K.height,1,Q,ue,pe)}a.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Q,ue,K.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,me,K.width,K.height,K.depth,0,Q,ue,K.data);else if(a.isData3DTexture)E?(te&&t.texStorage3D(e.TEXTURE_3D,fe,me,K.width,K.height,K.depth),J&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Q,ue,K.data)):t.texImage3D(e.TEXTURE_3D,0,me,K.width,K.height,K.depth,0,Q,ue,K.data);else if(a.isFramebufferTexture){if(te)if(E)t.texStorage2D(e.TEXTURE_2D,fe,me,K.width,K.height);else{let Z=K.width,G=K.height;for(let pe=0;pe<fe;pe++)t.texImage2D(e.TEXTURE_2D,pe,me,Z,G,0,Q,ue,null),Z>>=1,G>>=1}}else if(Ue.length>0){if(E&&te){const Z=ge(Ue[0]);t.texStorage2D(e.TEXTURE_2D,fe,me,Z.width,Z.height)}for(let Z=0,G=Ue.length;Z<G;Z++)le=Ue[Z],E?J&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,Q,ue,le):t.texImage2D(e.TEXTURE_2D,Z,me,Q,ue,le);a.generateMipmaps=!1}else if(E){if(te){const Z=ge(K);t.texStorage2D(e.TEXTURE_2D,fe,me,Z.width,Z.height)}J&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,Q,ue,K)}else t.texImage2D(e.TEXTURE_2D,0,me,Q,ue,K);c(a)&&o(k),de.__version=H.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function j(u,a,A){if(a.image.length!==6)return;const k=Ne(u,a),q=a.source;t.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture,e.TEXTURE0+A);const H=i.get(q);if(q.version!==H.__version||k===!0){t.activeTexture(e.TEXTURE0+A);const de=it.getPrimaries(it.workingColorSpace),ee=a.colorSpace===Kt?null:it.getPrimaries(a.colorSpace),xe=a.colorSpace===Kt||de===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=a.isCompressedTexture||a.image[0].isCompressedTexture,K=a.image[0]&&a.image[0].isDataTexture,Q=[];for(let G=0;G<6;G++)!Re&&!K?Q[G]=I(a.image[G],!0,l.maxCubemapSize):Q[G]=K?a.image[G].image:a.image[G],Q[G]=Ke(a,Q[G]);const ue=Q[0],me=r.convert(a.format,a.colorSpace),le=r.convert(a.type),Ue=x(a.internalFormat,me,le,a.colorSpace),E=a.isVideoTexture!==!0,te=H.__version===void 0||k===!0,J=q.dataReady;let fe=N(a,ue);he(e.TEXTURE_CUBE_MAP,a);let Z;if(Re){E&&te&&t.texStorage2D(e.TEXTURE_CUBE_MAP,fe,Ue,ue.width,ue.height);for(let G=0;G<6;G++){Z=Q[G].mipmaps;for(let pe=0;pe<Z.length;pe++){const Ce=Z[pe];a.format!==Dt?me!==null?E?J&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe,0,0,Ce.width,Ce.height,me,Ce.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe,Ue,Ce.width,Ce.height,0,Ce.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):E?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe,0,0,Ce.width,Ce.height,me,le,Ce.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe,Ue,Ce.width,Ce.height,0,me,le,Ce.data)}}}else{if(Z=a.mipmaps,E&&te){Z.length>0&&fe++;const G=ge(Q[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,fe,Ue,G.width,G.height)}for(let G=0;G<6;G++)if(K){E?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Q[G].width,Q[G].height,me,le,Q[G].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ue,Q[G].width,Q[G].height,0,me,le,Q[G].data);for(let pe=0;pe<Z.length;pe++){const $e=Z[pe].image[G].image;E?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe+1,0,0,$e.width,$e.height,me,le,$e.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe+1,Ue,$e.width,$e.height,0,me,le,$e.data)}}else{E?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,me,le,Q[G]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ue,me,le,Q[G]);for(let pe=0;pe<Z.length;pe++){const Ce=Z[pe];E?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe+1,0,0,me,le,Ce.image[G]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe+1,Ue,me,le,Ce.image[G])}}}c(a)&&o(e.TEXTURE_CUBE_MAP),H.__version=q.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function ne(u,a,A,k,q,H){const de=r.convert(A.format,A.colorSpace),ee=r.convert(A.type),xe=x(A.internalFormat,de,ee,A.colorSpace),Re=i.get(a),K=i.get(A);if(K.__renderTarget=a,!Re.__hasExternalTextures){const Q=Math.max(1,a.width>>H),ue=Math.max(1,a.height>>H);q===e.TEXTURE_3D||q===e.TEXTURE_2D_ARRAY?t.texImage3D(q,H,xe,Q,ue,a.depth,0,de,ee,null):t.texImage2D(q,H,xe,Q,ue,0,de,ee,null)}t.bindFramebuffer(e.FRAMEBUFFER,u),at(a)?m.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,q,K.__webglTexture,0,g(a)):(q===e.TEXTURE_2D||q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,q,K.__webglTexture,H),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Le(u,a,A){if(e.bindRenderbuffer(e.RENDERBUFFER,u),a.depthBuffer){const k=a.depthTexture,q=k&&k.isDepthTexture?k.type:null,H=S(a.stencilBuffer,q),de=a.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;at(a)?m.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,g(a),H,a.width,a.height):A?e.renderbufferStorageMultisample(e.RENDERBUFFER,g(a),H,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,H,a.width,a.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,de,e.RENDERBUFFER,u)}else{const k=a.textures;for(let q=0;q<k.length;q++){const H=k[q],de=r.convert(H.format,H.colorSpace),ee=r.convert(H.type),xe=x(H.internalFormat,de,ee,H.colorSpace);at(a)?m.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,g(a),xe,a.width,a.height):A?e.renderbufferStorageMultisample(e.RENDERBUFFER,g(a),xe,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,xe,a.width,a.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(u,a,A){const k=a.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,u),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(a.depthTexture);if(q.__renderTarget=a,(!q.__webglTexture||a.depthTexture.image.width!==a.width||a.depthTexture.image.height!==a.height)&&(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),k){if(q.__webglInit===void 0&&(q.__webglInit=!0,a.depthTexture.addEventListener("dispose",M)),q.__webglTexture===void 0){q.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),he(e.TEXTURE_CUBE_MAP,a.depthTexture);const Re=r.convert(a.depthTexture.format),K=r.convert(a.depthTexture.type);let Q;a.depthTexture.format===Jt?Q=e.DEPTH_COMPONENT24:a.depthTexture.format===Zt&&(Q=e.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Q,a.width,a.height,0,Re,K,null)}}else Y(a.depthTexture,0);const H=q.__webglTexture,de=g(a),ee=k?e.TEXTURE_CUBE_MAP_POSITIVE_X+A:e.TEXTURE_2D,xe=a.depthTexture.format===Zt?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(a.depthTexture.format===Jt)at(a)?m.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,xe,ee,H,0,de):e.framebufferTexture2D(e.FRAMEBUFFER,xe,ee,H,0);else if(a.depthTexture.format===Zt)at(a)?m.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,xe,ee,H,0,de):e.framebufferTexture2D(e.FRAMEBUFFER,xe,ee,H,0);else throw new Error("Unknown depthTexture format")}function be(u){const a=i.get(u),A=u.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==u.depthTexture){const k=u.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),k){const q=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,k.removeEventListener("dispose",q)};k.addEventListener("dispose",q),a.__depthDisposeCallback=q}a.__boundDepthTexture=k}if(u.depthTexture&&!a.__autoAllocateDepthBuffer)if(A)for(let k=0;k<6;k++)Te(a.__webglFramebuffer[k],u,k);else{const k=u.texture.mipmaps;k&&k.length>0?Te(a.__webglFramebuffer[0],u,0):Te(a.__webglFramebuffer,u,0)}else if(A){a.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[k]),a.__webglDepthbuffer[k]===void 0)a.__webglDepthbuffer[k]=e.createRenderbuffer(),Le(a.__webglDepthbuffer[k],u,!1);else{const q=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=a.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,H)}}else{const k=u.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),Le(a.__webglDepthbuffer,u,!1);else{const q=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,H)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function st(u,a,A){const k=i.get(u);a!==void 0&&ne(k.__webglFramebuffer,u,u.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),A!==void 0&&be(u)}function ye(u){const a=u.texture,A=i.get(u),k=i.get(a);u.addEventListener("dispose",U);const q=u.textures,H=u.isWebGLCubeRenderTarget===!0,de=q.length>1;if(de||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=a.version,f.memory.textures++),H){A.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(a.mipmaps&&a.mipmaps.length>0){A.__webglFramebuffer[ee]=[];for(let xe=0;xe<a.mipmaps.length;xe++)A.__webglFramebuffer[ee][xe]=e.createFramebuffer()}else A.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){A.__webglFramebuffer=[];for(let ee=0;ee<a.mipmaps.length;ee++)A.__webglFramebuffer[ee]=e.createFramebuffer()}else A.__webglFramebuffer=e.createFramebuffer();if(de)for(let ee=0,xe=q.length;ee<xe;ee++){const Re=i.get(q[ee]);Re.__webglTexture===void 0&&(Re.__webglTexture=e.createTexture(),f.memory.textures++)}if(u.samples>0&&at(u)===!1){A.__webglMultisampledFramebuffer=e.createFramebuffer(),A.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let ee=0;ee<q.length;ee++){const xe=q[ee];A.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,A.__webglColorRenderbuffer[ee]);const Re=r.convert(xe.format,xe.colorSpace),K=r.convert(xe.type),Q=x(xe.internalFormat,Re,K,xe.colorSpace,u.isXRRenderTarget===!0),ue=g(u);e.renderbufferStorageMultisample(e.RENDERBUFFER,ue,Q,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,A.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),u.depthBuffer&&(A.__webglDepthRenderbuffer=e.createRenderbuffer(),Le(A.__webglDepthRenderbuffer,u,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(H){t.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),he(e.TEXTURE_CUBE_MAP,a);for(let ee=0;ee<6;ee++)if(a.mipmaps&&a.mipmaps.length>0)for(let xe=0;xe<a.mipmaps.length;xe++)ne(A.__webglFramebuffer[ee][xe],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe);else ne(A.__webglFramebuffer[ee],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);c(a)&&o(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ee=0,xe=q.length;ee<xe;ee++){const Re=q[ee],K=i.get(Re);let Q=e.TEXTURE_2D;(u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(Q=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(Q,K.__webglTexture),he(Q,Re),ne(A.__webglFramebuffer,u,Re,e.COLOR_ATTACHMENT0+ee,Q,0),c(Re)&&o(Q)}t.unbindTexture()}else{let ee=e.TEXTURE_2D;if((u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(ee=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ee,k.__webglTexture),he(ee,a),a.mipmaps&&a.mipmaps.length>0)for(let xe=0;xe<a.mipmaps.length;xe++)ne(A.__webglFramebuffer[xe],u,a,e.COLOR_ATTACHMENT0,ee,xe);else ne(A.__webglFramebuffer,u,a,e.COLOR_ATTACHMENT0,ee,0);c(a)&&o(ee),t.unbindTexture()}u.depthBuffer&&be(u)}function Ve(u){const a=u.textures;for(let A=0,k=a.length;A<k;A++){const q=a[A];if(c(q)){const H=_(u),de=i.get(q).__webglTexture;t.bindTexture(H,de),o(H),t.unbindTexture()}}}const Xe=[],we=[];function tt(u){if(u.samples>0){if(at(u)===!1){const a=u.textures,A=u.width,k=u.height;let q=e.COLOR_BUFFER_BIT;const H=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=i.get(u),ee=a.length>1;if(ee)for(let Re=0;Re<a.length;Re++)t.bindFramebuffer(e.FRAMEBUFFER,de.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,de.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const xe=u.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Re=0;Re<a.length;Re++){if(u.resolveDepthBuffer&&(u.depthBuffer&&(q|=e.DEPTH_BUFFER_BIT),u.stencilBuffer&&u.resolveStencilBuffer&&(q|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,de.__webglColorRenderbuffer[Re]);const K=i.get(a[Re]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,K,0)}e.blitFramebuffer(0,0,A,k,0,0,A,k,q,e.NEAREST),P===!0&&(Xe.length=0,we.length=0,Xe.push(e.COLOR_ATTACHMENT0+Re),u.depthBuffer&&u.resolveDepthBuffer===!1&&(Xe.push(H),we.push(H),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,we)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let Re=0;Re<a.length;Re++){t.bindFramebuffer(e.FRAMEBUFFER,de.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.RENDERBUFFER,de.__webglColorRenderbuffer[Re]);const K=i.get(a[Re]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,de.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.TEXTURE_2D,K,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(u.depthBuffer&&u.resolveDepthBuffer===!1&&P){const a=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[a])}}}function g(u){return Math.min(l.maxSamples,u.samples)}function at(u){const a=i.get(u);return u.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&a.__useRenderToTexture!==!1}function Ge(u){const a=f.render.frame;F.get(u)!==a&&(F.set(u,a),u.update())}function Ke(u,a){const A=u.colorSpace,k=u.format,q=u.type;return u.isCompressedTexture===!0||u.isVideoTexture===!0||A!==bn&&A!==Kt&&(it.getTransfer(A)===Ze?(k!==Dt||q!==Mt)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",A)),a}function ge(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement?(R.width=u.naturalWidth||u.width,R.height=u.naturalHeight||u.height):typeof VideoFrame<"u"&&u instanceof VideoFrame?(R.width=u.displayWidth,R.height=u.displayHeight):(R.width=u.width,R.height=u.height),R}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=B,this.setTexture3D=O,this.setTextureCube=ie,this.rebindTextures=st,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Cd(e,n){function t(i,l=Kt){let r;const f=it.getTransfer(l);if(i===Mt)return e.UNSIGNED_BYTE;if(i===Fa)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Oa)return e.UNSIGNED_SHORT_5_5_5_1;if(i===ro)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===oo)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===so)return e.BYTE;if(i===lo)return e.SHORT;if(i===Rn)return e.UNSIGNED_SHORT;if(i===Ga)return e.INT;if(i===Wt)return e.UNSIGNED_INT;if(i===Nt)return e.FLOAT;if(i===Ft)return e.HALF_FLOAT;if(i===co)return e.ALPHA;if(i===fo)return e.RGB;if(i===Dt)return e.RGBA;if(i===Jt)return e.DEPTH_COMPONENT;if(i===Zt)return e.DEPTH_STENCIL;if(i===uo)return e.RED;if(i===ya)return e.RED_INTEGER;if(i===dn)return e.RG;if(i===Na)return e.RG_INTEGER;if(i===Ia)return e.RGBA_INTEGER;if(i===Fn||i===On||i===Bn||i===Gn)if(f===Ze)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Fn)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===On)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Fn)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===On)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bn)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gn)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vi||i===Si||i===Ei||i===xi)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===vi)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Si)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ei)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xi)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mi||i===Ti||i===Ai||i===Ri||i===bi||i===Ci||i===Pi)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Mi||i===Ti)return f===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ai)return f===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ri)return r.COMPRESSED_R11_EAC;if(i===bi)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ci)return r.COMPRESSED_RG11_EAC;if(i===Pi)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Li||i===Di||i===wi||i===Ui||i===Ii||i===Ni||i===yi||i===Fi||i===Oi||i===Bi||i===Gi||i===Hi||i===Vi||i===ki)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Li)return f===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Di)return f===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wi)return f===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ui)return f===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ii)return f===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ni)return f===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yi)return f===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fi)return f===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oi)return f===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bi)return f===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gi)return f===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hi)return f===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vi)return f===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ki)return f===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wi||i===zi||i===Xi)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===Wi)return f===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zi)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xi)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yi||i===qi||i===Ki||i===$i)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yi)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qi)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ki)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$i)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Pd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ld=`
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

}`;class Dd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Ba(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new bt({vertexShader:Pd,fragmentShader:Ld,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wd extends Ar{constructor(n,t){super();const i=this;let l=null,r=1,f=null,m="local-floor",P=1,R=null,F=null,L=null,p=null,v=null,T=null;const I=typeof XRWebGLBinding<"u",c=new Dd,o={},_=t.getContextAttributes();let x=null,S=null;const N=[],M=[],U=new ft;let d=null;const h=new Sn;h.viewport=new pt;const $=new Sn;$.viewport=new pt;const C=[h,$],V=new Rr;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=N[X];return j===void 0&&(j=new Nn,N[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=N[X];return j===void 0&&(j=new Nn,N[X]=j),j.getGripSpace()},this.getHand=function(X){let j=N[X];return j===void 0&&(j=new Nn,N[X]=j),j.getHandSpace()};function Y(X){const j=M.indexOf(X.inputSource);if(j===-1)return;const ne=N[j];ne!==void 0&&(ne.update(X.inputSource,X.frame,R||f),ne.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",O);for(let X=0;X<N.length;X++){const j=M[X];j!==null&&(M[X]=null,N[X].disconnect(j))}z=null,W=null,c.reset();for(const X in o)delete o[X];n.setRenderTarget(x),v=null,p=null,L=null,l=null,S=null,je.stop(),i.isPresenting=!1,n.setPixelRatio(d),n.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){m=X,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return R||f},this.setReferenceSpace=function(X){R=X},this.getBaseLayer=function(){return p!==null?p:v},this.getBinding=function(){return L===null&&I&&(L=new XRWebGLBinding(l,t)),L},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(x=n.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",B),l.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),d=n.getPixelRatio(),n.getSize(U),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Le=null,Te=null;_.depth&&(Te=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=_.stencil?Zt:Jt,Le=_.stencil?fn:Wt);const be={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};L=this.getBinding(),p=L.createProjectionLayer(be),l.updateRenderState({layers:[p]}),n.setPixelRatio(1),n.setSize(p.textureWidth,p.textureHeight,!1),S=new At(p.textureWidth,p.textureHeight,{format:Dt,type:Mt,depthTexture:new An(p.textureWidth,p.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:_.stencil,colorSpace:n.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ne={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};v=new XRWebGLLayer(l,t,ne),l.updateRenderState({baseLayer:v}),n.setPixelRatio(1),n.setSize(v.framebufferWidth,v.framebufferHeight,!1),S=new At(v.framebufferWidth,v.framebufferHeight,{format:Dt,type:Mt,colorSpace:n.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(P),R=null,f=await l.requestReferenceSpace(m),je.setContext(l),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function O(X){for(let j=0;j<X.removed.length;j++){const ne=X.removed[j],Le=M.indexOf(ne);Le>=0&&(M[Le]=null,N[Le].disconnect(ne))}for(let j=0;j<X.added.length;j++){const ne=X.added[j];let Le=M.indexOf(ne);if(Le===-1){for(let be=0;be<N.length;be++)if(be>=M.length){M.push(ne),Le=be;break}else if(M[be]===null){M[be]=ne,Le=be;break}if(Le===-1)break}const Te=N[Le];Te&&Te.connect(ne)}}const ie=new Be,ae=new Be;function Me(X,j,ne){ie.setFromMatrixPosition(j.matrixWorld),ae.setFromMatrixPosition(ne.matrixWorld);const Le=ie.distanceTo(ae),Te=j.projectionMatrix.elements,be=ne.projectionMatrix.elements,st=Te[14]/(Te[10]-1),ye=Te[14]/(Te[10]+1),Ve=(Te[9]+1)/Te[5],Xe=(Te[9]-1)/Te[5],we=(Te[8]-1)/Te[0],tt=(be[8]+1)/be[0],g=st*we,at=st*tt,Ge=Le/(-we+tt),Ke=Ge*-we;if(j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ke),X.translateZ(Ge),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Te[10]===-1)X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const ge=st+Ge,u=ye+Ge,a=g-Ke,A=at+(Le-Ke),k=Ve*ye/u*ge,q=Xe*ye/u*ge;X.projectionMatrix.makePerspective(a,A,k,q,ge,u),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Ae(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;let j=X.near,ne=X.far;c.texture!==null&&(c.depthNear>0&&(j=c.depthNear),c.depthFar>0&&(ne=c.depthFar)),V.near=$.near=h.near=j,V.far=$.far=h.far=ne,(z!==V.near||W!==V.far)&&(l.updateRenderState({depthNear:V.near,depthFar:V.far}),z=V.near,W=V.far),V.layers.mask=X.layers.mask|6,h.layers.mask=V.layers.mask&-5,$.layers.mask=V.layers.mask&-3;const Le=X.parent,Te=V.cameras;Ae(V,Le);for(let be=0;be<Te.length;be++)Ae(Te[be],Le);Te.length===2?Me(V,h,$):V.projectionMatrix.copy(h.projectionMatrix),he(X,V,Le)};function he(X,j,ne){ne===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(ne.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=br*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(p===null&&v===null))return P},this.setFoveation=function(X){P=X,p!==null&&(p.fixedFoveation=X),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=X)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(V)},this.getCameraTexture=function(X){return o[X]};let Ne=null;function Je(X,j){if(F=j.getViewerPose(R||f),T=j,F!==null){const ne=F.views;v!==null&&(n.setRenderTargetFramebuffer(S,v.framebuffer),n.setRenderTarget(S));let Le=!1;ne.length!==V.cameras.length&&(V.cameras.length=0,Le=!0);for(let ye=0;ye<ne.length;ye++){const Ve=ne[ye];let Xe=null;if(v!==null)Xe=v.getViewport(Ve);else{const tt=L.getViewSubImage(p,Ve);Xe=tt.viewport,ye===0&&(n.setRenderTargetTextures(S,tt.colorTexture,tt.depthStencilTexture),n.setRenderTarget(S))}let we=C[ye];we===void 0&&(we=new Sn,we.layers.enable(ye),we.viewport=new pt,C[ye]=we),we.matrix.fromArray(Ve.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ve.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),ye===0&&(V.matrix.copy(we.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Le===!0&&V.cameras.push(we)}const Te=l.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&I){L=i.getBinding();const ye=L.getDepthInformation(ne[0]);ye&&ye.isValid&&ye.texture&&c.init(ye,l.renderState)}if(Te&&Te.includes("camera-access")&&I){n.state.unbindTexture(),L=i.getBinding();for(let ye=0;ye<ne.length;ye++){const Ve=ne[ye].camera;if(Ve){let Xe=o[Ve];Xe||(Xe=new Ba,o[Ve]=Xe);const we=L.getCameraImage(Ve);Xe.sourceTexture=we}}}}for(let ne=0;ne<N.length;ne++){const Le=M[ne],Te=N[ne];Le!==null&&Te!==void 0&&Te.update(Le,j,R||f)}Ne&&Ne(X,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),T=null}const je=new Ja;je.setAnimationLoop(Je),this.setAnimationLoop=function(X){Ne=X},this.dispose=function(){}}}const Ht=new ka,Ud=new Qt;function Id(e,n){function t(c,o){c.matrixAutoUpdate===!0&&c.updateMatrix(),o.value.copy(c.matrix)}function i(c,o){o.color.getRGB(c.fogColor.value,Va(e)),o.isFog?(c.fogNear.value=o.near,c.fogFar.value=o.far):o.isFogExp2&&(c.fogDensity.value=o.density)}function l(c,o,_,x,S){o.isMeshBasicMaterial?r(c,o):o.isMeshLambertMaterial?(r(c,o),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)):o.isMeshToonMaterial?(r(c,o),L(c,o)):o.isMeshPhongMaterial?(r(c,o),F(c,o),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)):o.isMeshStandardMaterial?(r(c,o),p(c,o),o.isMeshPhysicalMaterial&&v(c,o,S)):o.isMeshMatcapMaterial?(r(c,o),T(c,o)):o.isMeshDepthMaterial?r(c,o):o.isMeshDistanceMaterial?(r(c,o),I(c,o)):o.isMeshNormalMaterial?r(c,o):o.isLineBasicMaterial?(f(c,o),o.isLineDashedMaterial&&m(c,o)):o.isPointsMaterial?P(c,o,_,x):o.isSpriteMaterial?R(c,o):o.isShadowMaterial?(c.color.value.copy(o.color),c.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function r(c,o){c.opacity.value=o.opacity,o.color&&c.diffuse.value.copy(o.color),o.emissive&&c.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(c.map.value=o.map,t(o.map,c.mapTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.bumpMap&&(c.bumpMap.value=o.bumpMap,t(o.bumpMap,c.bumpMapTransform),c.bumpScale.value=o.bumpScale,o.side===_t&&(c.bumpScale.value*=-1)),o.normalMap&&(c.normalMap.value=o.normalMap,t(o.normalMap,c.normalMapTransform),c.normalScale.value.copy(o.normalScale),o.side===_t&&c.normalScale.value.negate()),o.displacementMap&&(c.displacementMap.value=o.displacementMap,t(o.displacementMap,c.displacementMapTransform),c.displacementScale.value=o.displacementScale,c.displacementBias.value=o.displacementBias),o.emissiveMap&&(c.emissiveMap.value=o.emissiveMap,t(o.emissiveMap,c.emissiveMapTransform)),o.specularMap&&(c.specularMap.value=o.specularMap,t(o.specularMap,c.specularMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest);const _=n.get(o),x=_.envMap,S=_.envMapRotation;x&&(c.envMap.value=x,Ht.copy(S),Ht.x*=-1,Ht.y*=-1,Ht.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ht.y*=-1,Ht.z*=-1),c.envMapRotation.value.setFromMatrix4(Ud.makeRotationFromEuler(Ht)),c.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=o.reflectivity,c.ior.value=o.ior,c.refractionRatio.value=o.refractionRatio),o.lightMap&&(c.lightMap.value=o.lightMap,c.lightMapIntensity.value=o.lightMapIntensity,t(o.lightMap,c.lightMapTransform)),o.aoMap&&(c.aoMap.value=o.aoMap,c.aoMapIntensity.value=o.aoMapIntensity,t(o.aoMap,c.aoMapTransform))}function f(c,o){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,o.map&&(c.map.value=o.map,t(o.map,c.mapTransform))}function m(c,o){c.dashSize.value=o.dashSize,c.totalSize.value=o.dashSize+o.gapSize,c.scale.value=o.scale}function P(c,o,_,x){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,c.size.value=o.size*_,c.scale.value=x*.5,o.map&&(c.map.value=o.map,t(o.map,c.uvTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest)}function R(c,o){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,c.rotation.value=o.rotation,o.map&&(c.map.value=o.map,t(o.map,c.mapTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest)}function F(c,o){c.specular.value.copy(o.specular),c.shininess.value=Math.max(o.shininess,1e-4)}function L(c,o){o.gradientMap&&(c.gradientMap.value=o.gradientMap)}function p(c,o){c.metalness.value=o.metalness,o.metalnessMap&&(c.metalnessMap.value=o.metalnessMap,t(o.metalnessMap,c.metalnessMapTransform)),c.roughness.value=o.roughness,o.roughnessMap&&(c.roughnessMap.value=o.roughnessMap,t(o.roughnessMap,c.roughnessMapTransform)),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)}function v(c,o,_){c.ior.value=o.ior,o.sheen>0&&(c.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),c.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(c.sheenColorMap.value=o.sheenColorMap,t(o.sheenColorMap,c.sheenColorMapTransform)),o.sheenRoughnessMap&&(c.sheenRoughnessMap.value=o.sheenRoughnessMap,t(o.sheenRoughnessMap,c.sheenRoughnessMapTransform))),o.clearcoat>0&&(c.clearcoat.value=o.clearcoat,c.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(c.clearcoatMap.value=o.clearcoatMap,t(o.clearcoatMap,c.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,t(o.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(c.clearcoatNormalMap.value=o.clearcoatNormalMap,t(o.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===_t&&c.clearcoatNormalScale.value.negate())),o.dispersion>0&&(c.dispersion.value=o.dispersion),o.iridescence>0&&(c.iridescence.value=o.iridescence,c.iridescenceIOR.value=o.iridescenceIOR,c.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(c.iridescenceMap.value=o.iridescenceMap,t(o.iridescenceMap,c.iridescenceMapTransform)),o.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=o.iridescenceThicknessMap,t(o.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),o.transmission>0&&(c.transmission.value=o.transmission,c.transmissionSamplerMap.value=_.texture,c.transmissionSamplerSize.value.set(_.width,_.height),o.transmissionMap&&(c.transmissionMap.value=o.transmissionMap,t(o.transmissionMap,c.transmissionMapTransform)),c.thickness.value=o.thickness,o.thicknessMap&&(c.thicknessMap.value=o.thicknessMap,t(o.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=o.attenuationDistance,c.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(c.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(c.anisotropyMap.value=o.anisotropyMap,t(o.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=o.specularIntensity,c.specularColor.value.copy(o.specularColor),o.specularColorMap&&(c.specularColorMap.value=o.specularColorMap,t(o.specularColorMap,c.specularColorMapTransform)),o.specularIntensityMap&&(c.specularIntensityMap.value=o.specularIntensityMap,t(o.specularIntensityMap,c.specularIntensityMapTransform))}function T(c,o){o.matcap&&(c.matcap.value=o.matcap)}function I(c,o){const _=n.get(o).light;c.referencePosition.value.setFromMatrixPosition(_.matrixWorld),c.nearDistance.value=_.shadow.camera.near,c.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:l}}function Nd(e,n,t,i){let l={},r={},f=[];const m=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function P(_,x){const S=x.program;i.uniformBlockBinding(_,S)}function R(_,x){let S=l[_.id];S===void 0&&(T(_),S=F(_),l[_.id]=S,_.addEventListener("dispose",c));const N=x.program;i.updateUBOMapping(_,N);const M=n.render.frame;r[_.id]!==M&&(p(_),r[_.id]=M)}function F(_){const x=L();_.__bindingPointIndex=x;const S=e.createBuffer(),N=_.__size,M=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,N,M),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,S),S}function L(){for(let _=0;_<m;_++)if(f.indexOf(_)===-1)return f.push(_),_;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const x=l[_.id],S=_.uniforms,N=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let M=0,U=S.length;M<U;M++){const d=Array.isArray(S[M])?S[M]:[S[M]];for(let h=0,$=d.length;h<$;h++){const C=d[h];if(v(C,M,h,N)===!0){const V=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let Y=0;Y<z.length;Y++){const B=z[Y],O=I(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,e.bufferSubData(e.UNIFORM_BUFFER,V+W,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,V,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function v(_,x,S,N){const M=_.value,U=x+"_"+S;if(N[U]===void 0)return typeof M=="number"||typeof M=="boolean"?N[U]=M:N[U]=M.clone(),!0;{const d=N[U];if(typeof M=="number"||typeof M=="boolean"){if(d!==M)return N[U]=M,!0}else if(d.equals(M)===!1)return d.copy(M),!0}return!1}function T(_){const x=_.uniforms;let S=0;const N=16;for(let U=0,d=x.length;U<d;U++){const h=Array.isArray(x[U])?x[U]:[x[U]];for(let $=0,C=h.length;$<C;$++){const V=h[$],z=Array.isArray(V.value)?V.value:[V.value];for(let W=0,Y=z.length;W<Y;W++){const B=z[W],O=I(B),ie=S%N,ae=ie%O.boundary,Me=ie+ae;S+=ae,Me!==0&&N-Me<O.storage&&(S+=N-Me),V.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=O.storage}}}const M=S%N;return M>0&&(S+=N-M),_.__size=S,_.__cache={},this}function I(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",_),x}function c(_){const x=_.target;x.removeEventListener("dispose",c);const S=f.indexOf(x.__bindingPointIndex);f.splice(S,1),e.deleteBuffer(l[x.id]),delete l[x.id],delete r[x.id]}function o(){for(const _ in l)e.deleteBuffer(l[_]);f=[],l={},r={}}return{bind:P,update:R,dispose:o}}const yd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Et=null;function Fd(){return Et===null&&(Et=new Cr(yd,16,16,dn,Ft),Et.name="DFG_LUT",Et.minFilter=mt,Et.magFilter=mt,Et.wrapS=$n,Et.wrapT=$n,Et.generateMipmaps=!1,Et.needsUpdate=!0),Et}class Od{constructor(n={}){const{canvas:t=Sr(),context:i=null,depth:l=!0,stencil:r=!1,alpha:f=!1,antialias:m=!1,premultipliedAlpha:P=!0,preserveDrawingBuffer:R=!1,powerPreference:F="default",failIfMajorPerformanceCaveat:L=!1,reversedDepthBuffer:p=!1,outputBufferType:v=Mt}=n;this.isWebGLRenderer=!0;let T;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=i.getContextAttributes().alpha}else T=f;const I=v,c=new Set([Ia,Na,ya]),o=new Set([Mt,Wt,Rn,fn,Fa,Oa]),_=new Uint32Array(4),x=new Int32Array(4);let S=null,N=null;const M=[],U=[];let d=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const h=this;let $=!1;this._outputColorSpace=Er;let C=0,V=0,z=null,W=-1,Y=null;const B=new pt,O=new pt;let ie=null;const ae=new He(0);let Me=0,Ae=t.width,he=t.height,Ne=1,Je=null,je=null;const X=new pt(0,0,Ae,he),j=new pt(0,0,Ae,he);let ne=!1;const Le=new Ua;let Te=!1,be=!1;const st=new Qt,ye=new Be,Ve=new pt,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function tt(){return z===null?Ne:1}let g=i;function at(s,b){return t.getContext(s,b)}try{const s={alpha:!0,depth:l,stencil:r,antialias:m,premultipliedAlpha:P,preserveDrawingBuffer:R,powerPreference:F,failIfMajorPerformanceCaveat:L};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xr}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",$e,!1),g===null){const b="webgl2";if(g=at(b,s),g===null)throw at(b)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(s){throw Qe("WebGLRenderer: "+s.message),s}let Ge,Ke,ge,u,a,A,k,q,H,de,ee,xe,Re,K,Q,ue,me,le,Ue,E,te,J,fe;function Z(){Ge=new Fc(g),Ge.init(),te=new Cd(g,Ge),Ke=new Pc(g,Ge,n,te),ge=new Rd(g,Ge),Ke.reversedDepthBuffer&&p&&ge.buffers.depth.setReversed(!0),u=new Gc(g),a=new dd,A=new bd(g,Ge,ge,a,Ke,te,u),k=new yc(h),q=new zo(g),J=new bc(g,q),H=new Oc(g,q,u,J),de=new Vc(g,H,q,J,u),le=new Hc(g,Ke,A),Q=new Lc(a),ee=new fd(h,k,Ge,Ke,J,Q),xe=new Id(h,a),Re=new pd,K=new Sd(Ge),me=new Rc(h,k,ge,de,T,P),ue=new Ad(h,de,Ke),fe=new Nd(g,u,Ke,ge),Ue=new Cc(g,Ge,u),E=new Bc(g,Ge,u),u.programs=ee.programs,h.capabilities=Ke,h.extensions=Ge,h.properties=a,h.renderLists=Re,h.shadowMap=ue,h.state=ge,h.info=u}Z(),I!==Mt&&(d=new Wc(I,t.width,t.height,l,r));const G=new wd(h,g);this.xr=G,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const s=Ge.get("WEBGL_lose_context");s&&s.loseContext()},this.forceContextRestore=function(){const s=Ge.get("WEBGL_lose_context");s&&s.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(s){s!==void 0&&(Ne=s,this.setSize(Ae,he,!1))},this.getSize=function(s){return s.set(Ae,he)},this.setSize=function(s,b,y=!0){if(G.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=s,he=b,t.width=Math.floor(s*Ne),t.height=Math.floor(b*Ne),y===!0&&(t.style.width=s+"px",t.style.height=b+"px"),d!==null&&d.setSize(t.width,t.height),this.setViewport(0,0,s,b)},this.getDrawingBufferSize=function(s){return s.set(Ae*Ne,he*Ne).floor()},this.setDrawingBufferSize=function(s,b,y){Ae=s,he=b,Ne=y,t.width=Math.floor(s*y),t.height=Math.floor(b*y),this.setViewport(0,0,s,b)},this.setEffects=function(s){if(I===Mt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(s){for(let b=0;b<s.length;b++)if(s[b].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}d.setEffects(s||[])},this.getCurrentViewport=function(s){return s.copy(B)},this.getViewport=function(s){return s.copy(X)},this.setViewport=function(s,b,y,w){s.isVector4?X.set(s.x,s.y,s.z,s.w):X.set(s,b,y,w),ge.viewport(B.copy(X).multiplyScalar(Ne).round())},this.getScissor=function(s){return s.copy(j)},this.setScissor=function(s,b,y,w){s.isVector4?j.set(s.x,s.y,s.z,s.w):j.set(s,b,y,w),ge.scissor(O.copy(j).multiplyScalar(Ne).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(s){ge.setScissorTest(ne=s)},this.setOpaqueSort=function(s){Je=s},this.setTransparentSort=function(s){je=s},this.getClearColor=function(s){return s.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(s=!0,b=!0,y=!0){let w=0;if(s){let D=!1;if(z!==null){const oe=z.texture.format;D=c.has(oe)}if(D){const oe=z.texture.type,ce=o.has(oe),se=me.getClearColor(),_e=me.getClearAlpha(),Se=se.r,Pe=se.g,Ie=se.b;ce?(_[0]=Se,_[1]=Pe,_[2]=Ie,_[3]=_e,g.clearBufferuiv(g.COLOR,0,_)):(x[0]=Se,x[1]=Pe,x[2]=Ie,x[3]=_e,g.clearBufferiv(g.COLOR,0,x))}else w|=g.COLOR_BUFFER_BIT}b&&(w|=g.DEPTH_BUFFER_BIT),y&&(w|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w!==0&&g.clear(w)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),me.dispose(),Re.dispose(),K.dispose(),a.dispose(),k.dispose(),de.dispose(),J.dispose(),fe.dispose(),ee.dispose(),G.dispose(),G.removeEventListener("sessionstart",ri),G.removeEventListener("sessionend",oi),Ot.stop()};function pe(s){s.preventDefault(),hi("WebGLRenderer: Context Lost."),$=!0}function Ce(){hi("WebGLRenderer: Context Restored."),$=!1;const s=u.autoReset,b=ue.enabled,y=ue.autoUpdate,w=ue.needsUpdate,D=ue.type;Z(),u.autoReset=s,ue.enabled=b,ue.autoUpdate=y,ue.needsUpdate=w,ue.type=D}function $e(s){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",s.statusMessage)}function ke(s){const b=s.target;b.removeEventListener("dispose",ke),Ct(b)}function Ct(s){Pt(s),a.remove(s)}function Pt(s){const b=a.get(s).programs;b!==void 0&&(b.forEach(function(y){ee.releaseProgram(y)}),s.isShaderMaterial&&ee.releaseShaderCache(s))}this.renderBufferDirect=function(s,b,y,w,D,oe){b===null&&(b=Xe);const ce=D.isMesh&&D.matrixWorld.determinant()<0,se=rr(s,b,y,w,D);ge.setMaterial(w,ce);let _e=y.index,Se=1;if(w.wireframe===!0){if(_e=H.getWireframeAttribute(y),_e===void 0)return;Se=2}const Pe=y.drawRange,Ie=y.attributes.position;let Ee=Pe.start*Se,We=(Pe.start+Pe.count)*Se;oe!==null&&(Ee=Math.max(Ee,oe.start*Se),We=Math.min(We,(oe.start+oe.count)*Se)),_e!==null?(Ee=Math.max(Ee,0),We=Math.min(We,_e.count)):Ie!=null&&(Ee=Math.max(Ee,0),We=Math.min(We,Ie.count));const nt=We-Ee;if(nt<0||nt===1/0)return;J.setup(D,w,se,y,_e);let et,ze=Ue;if(_e!==null&&(et=q.get(_e),ze=E,ze.setIndex(et)),D.isMesh)w.wireframe===!0?(ge.setLineWidth(w.wireframeLinewidth*tt()),ze.setMode(g.LINES)):ze.setMode(g.TRIANGLES);else if(D.isLine){let dt=w.linewidth;dt===void 0&&(dt=1),ge.setLineWidth(dt*tt()),D.isLineSegments?ze.setMode(g.LINES):D.isLineLoop?ze.setMode(g.LINE_LOOP):ze.setMode(g.LINE_STRIP)}else D.isPoints?ze.setMode(g.POINTS):D.isSprite&&ze.setMode(g.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)wa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))ze.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const dt=D._multiDrawStarts,ve=D._multiDrawCounts,ht=D._multiDrawCount,Fe=_e?q.get(_e).bytesPerElement:1,gt=a.get(w).currentProgram.getUniforms();for(let vt=0;vt<ht;vt++)gt.setValue(g,"_gl_DrawID",vt),ze.render(dt[vt]/Fe,ve[vt])}else if(D.isInstancedMesh)ze.renderInstances(Ee,nt,D.count);else if(y.isInstancedBufferGeometry){const dt=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,ve=Math.min(y.instanceCount,dt);ze.renderInstances(Ee,nt,ve)}else ze.render(Ee,nt)};function ai(s,b,y){s.transparent===!0&&s.side===Lt&&s.forceSinglePass===!1?(s.side=_t,s.needsUpdate=!0,hn(s,b,y),s.side=cn,s.needsUpdate=!0,hn(s,b,y),s.side=Lt):hn(s,b,y)}this.compile=function(s,b,y=null){y===null&&(y=s),N=K.get(y),N.init(b),U.push(N),y.traverseVisible(function(D){D.isLight&&D.layers.test(b.layers)&&(N.pushLight(D),D.castShadow&&N.pushShadow(D))}),s!==y&&s.traverseVisible(function(D){D.isLight&&D.layers.test(b.layers)&&(N.pushLight(D),D.castShadow&&N.pushShadow(D))}),N.setupLights();const w=new Set;return s.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const oe=D.material;if(oe)if(Array.isArray(oe))for(let ce=0;ce<oe.length;ce++){const se=oe[ce];ai(se,y,D),w.add(se)}else ai(oe,y,D),w.add(oe)}),N=U.pop(),w},this.compileAsync=function(s,b,y=null){const w=this.compile(s,b,y);return new Promise(D=>{function oe(){if(w.forEach(function(ce){a.get(ce).currentProgram.isReady()&&w.delete(ce)}),w.size===0){D(s);return}setTimeout(oe,10)}Ge.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let wn=null;function ar(s){wn&&wn(s)}function ri(){Ot.stop()}function oi(){Ot.start()}const Ot=new Ja;Ot.setAnimationLoop(ar),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(s){wn=s,G.setAnimationLoop(s),s===null?Ot.stop():Ot.start()},G.addEventListener("sessionstart",ri),G.addEventListener("sessionend",oi),this.render=function(s,b){if(b!==void 0&&b.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;const y=G.enabled===!0&&G.isPresenting===!0,w=d!==null&&(z===null||y)&&d.begin(h,z);if(s.matrixWorldAutoUpdate===!0&&s.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(d===null||d.isCompositing()===!1)&&(G.cameraAutoUpdate===!0&&G.updateCamera(b),b=G.getCamera()),s.isScene===!0&&s.onBeforeRender(h,s,b,z),N=K.get(s,U.length),N.init(b),U.push(N),st.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),Le.setFromProjectionMatrix(st,mi,b.reversedDepth),be=this.localClippingEnabled,Te=Q.init(this.clippingPlanes,be),S=Re.get(s,M.length),S.init(),M.push(S),G.enabled===!0&&G.isPresenting===!0){const ce=h.xr.getDepthSensingMesh();ce!==null&&Un(ce,b,-1/0,h.sortObjects)}Un(s,b,0,h.sortObjects),S.finish(),h.sortObjects===!0&&S.sort(Je,je),we=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,we&&me.addToRenderList(S,s),this.info.render.frame++,Te===!0&&Q.beginShadows();const D=N.state.shadowsArray;if(ue.render(D,s,b),Te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset(),(w&&d.hasRenderPass())===!1){const ce=S.opaque,se=S.transmissive;if(N.setupLights(),b.isArrayCamera){const _e=b.cameras;if(se.length>0)for(let Se=0,Pe=_e.length;Se<Pe;Se++){const Ie=_e[Se];li(ce,se,s,Ie)}we&&me.render(s);for(let Se=0,Pe=_e.length;Se<Pe;Se++){const Ie=_e[Se];si(S,s,Ie,Ie.viewport)}}else se.length>0&&li(ce,se,s,b),we&&me.render(s),si(S,s,b)}z!==null&&V===0&&(A.updateMultisampleRenderTarget(z),A.updateRenderTargetMipmap(z)),w&&d.end(h),s.isScene===!0&&s.onAfterRender(h,s,b),J.resetDefaultState(),W=-1,Y=null,U.pop(),U.length>0?(N=U[U.length-1],Te===!0&&Q.setGlobalState(h.clippingPlanes,N.state.camera)):N=null,M.pop(),M.length>0?S=M[M.length-1]:S=null};function Un(s,b,y,w){if(s.visible===!1)return;if(s.layers.test(b.layers)){if(s.isGroup)y=s.renderOrder;else if(s.isLOD)s.autoUpdate===!0&&s.update(b);else if(s.isLight)N.pushLight(s),s.castShadow&&N.pushShadow(s);else if(s.isSprite){if(!s.frustumCulled||Le.intersectsSprite(s)){w&&Ve.setFromMatrixPosition(s.matrixWorld).applyMatrix4(st);const ce=de.update(s),se=s.material;se.visible&&S.push(s,ce,se,y,Ve.z,null)}}else if((s.isMesh||s.isLine||s.isPoints)&&(!s.frustumCulled||Le.intersectsObject(s))){const ce=de.update(s),se=s.material;if(w&&(s.boundingSphere!==void 0?(s.boundingSphere===null&&s.computeBoundingSphere(),Ve.copy(s.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ve.copy(ce.boundingSphere.center)),Ve.applyMatrix4(s.matrixWorld).applyMatrix4(st)),Array.isArray(se)){const _e=ce.groups;for(let Se=0,Pe=_e.length;Se<Pe;Se++){const Ie=_e[Se],Ee=se[Ie.materialIndex];Ee&&Ee.visible&&S.push(s,ce,Ee,y,Ve.z,Ie)}}else se.visible&&S.push(s,ce,se,y,Ve.z,null)}}const oe=s.children;for(let ce=0,se=oe.length;ce<se;ce++)Un(oe[ce],b,y,w)}function si(s,b,y,w){const{opaque:D,transmissive:oe,transparent:ce}=s;N.setupLightsView(y),Te===!0&&Q.setGlobalState(h.clippingPlanes,y),w&&ge.viewport(B.copy(w)),D.length>0&&pn(D,b,y),oe.length>0&&pn(oe,b,y),ce.length>0&&pn(ce,b,y),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function li(s,b,y,w){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[w.id]===void 0){const Ee=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[w.id]=new At(1,1,{generateMipmaps:!0,type:Ee?Ft:Mt,minFilter:$t,samples:Math.max(4,Ke.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const oe=N.state.transmissionRenderTarget[w.id],ce=w.viewport||B;oe.setSize(ce.z*h.transmissionResolutionScale,ce.w*h.transmissionResolutionScale);const se=h.getRenderTarget(),_e=h.getActiveCubeFace(),Se=h.getActiveMipmapLevel();h.setRenderTarget(oe),h.getClearColor(ae),Me=h.getClearAlpha(),Me<1&&h.setClearColor(16777215,.5),h.clear(),we&&me.render(y);const Pe=h.toneMapping;h.toneMapping=Tt;const Ie=w.viewport;if(w.viewport!==void 0&&(w.viewport=void 0),N.setupLightsView(w),Te===!0&&Q.setGlobalState(h.clippingPlanes,w),pn(s,y,w),A.updateMultisampleRenderTarget(oe),A.updateRenderTargetMipmap(oe),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let We=0,nt=b.length;We<nt;We++){const et=b[We],{object:ze,geometry:dt,material:ve,group:ht}=et;if(ve.side===Lt&&ze.layers.test(w.layers)){const Fe=ve.side;ve.side=_t,ve.needsUpdate=!0,ci(ze,y,w,dt,ve,ht),ve.side=Fe,ve.needsUpdate=!0,Ee=!0}}Ee===!0&&(A.updateMultisampleRenderTarget(oe),A.updateRenderTargetMipmap(oe))}h.setRenderTarget(se,_e,Se),h.setClearColor(ae,Me),Ie!==void 0&&(w.viewport=Ie),h.toneMapping=Pe}function pn(s,b,y){const w=b.isScene===!0?b.overrideMaterial:null;for(let D=0,oe=s.length;D<oe;D++){const ce=s[D],{object:se,geometry:_e,group:Se}=ce;let Pe=ce.material;Pe.allowOverride===!0&&w!==null&&(Pe=w),se.layers.test(y.layers)&&ci(se,b,y,_e,Pe,Se)}}function ci(s,b,y,w,D,oe){s.onBeforeRender(h,b,y,w,D,oe),s.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,s.matrixWorld),s.normalMatrix.getNormalMatrix(s.modelViewMatrix),D.onBeforeRender(h,b,y,w,s,oe),D.transparent===!0&&D.side===Lt&&D.forceSinglePass===!1?(D.side=_t,D.needsUpdate=!0,h.renderBufferDirect(y,b,w,D,s,oe),D.side=cn,D.needsUpdate=!0,h.renderBufferDirect(y,b,w,D,s,oe),D.side=Lt):h.renderBufferDirect(y,b,w,D,s,oe),s.onAfterRender(h,b,y,w,D,oe)}function hn(s,b,y){b.isScene!==!0&&(b=Xe);const w=a.get(s),D=N.state.lights,oe=N.state.shadowsArray,ce=D.state.version,se=ee.getParameters(s,D.state,oe,b,y),_e=ee.getProgramCacheKey(se);let Se=w.programs;w.environment=s.isMeshStandardMaterial||s.isMeshLambertMaterial||s.isMeshPhongMaterial?b.environment:null,w.fog=b.fog;const Pe=s.isMeshStandardMaterial||s.isMeshLambertMaterial&&!s.envMap||s.isMeshPhongMaterial&&!s.envMap;w.envMap=k.get(s.envMap||w.environment,Pe),w.envMapRotation=w.environment!==null&&s.envMap===null?b.environmentRotation:s.envMapRotation,Se===void 0&&(s.addEventListener("dispose",ke),Se=new Map,w.programs=Se);let Ie=Se.get(_e);if(Ie!==void 0){if(w.currentProgram===Ie&&w.lightsStateVersion===ce)return di(s,se),Ie}else se.uniforms=ee.getUniforms(s),s.onBeforeCompile(se,h),Ie=ee.acquireProgram(se,_e),Se.set(_e,Ie),w.uniforms=se.uniforms;const Ee=w.uniforms;return(!s.isShaderMaterial&&!s.isRawShaderMaterial||s.clipping===!0)&&(Ee.clippingPlanes=Q.uniform),di(s,se),w.needsLights=sr(s),w.lightsStateVersion=ce,w.needsLights&&(Ee.ambientLightColor.value=D.state.ambient,Ee.lightProbe.value=D.state.probe,Ee.directionalLights.value=D.state.directional,Ee.directionalLightShadows.value=D.state.directionalShadow,Ee.spotLights.value=D.state.spot,Ee.spotLightShadows.value=D.state.spotShadow,Ee.rectAreaLights.value=D.state.rectArea,Ee.ltc_1.value=D.state.rectAreaLTC1,Ee.ltc_2.value=D.state.rectAreaLTC2,Ee.pointLights.value=D.state.point,Ee.pointLightShadows.value=D.state.pointShadow,Ee.hemisphereLights.value=D.state.hemi,Ee.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Ee.spotLightMatrix.value=D.state.spotLightMatrix,Ee.spotLightMap.value=D.state.spotLightMap,Ee.pointShadowMatrix.value=D.state.pointShadowMatrix),w.currentProgram=Ie,w.uniformsList=null,Ie}function fi(s){if(s.uniformsList===null){const b=s.currentProgram.getUniforms();s.uniformsList=Tn.seqWithValue(b.seq,s.uniforms)}return s.uniformsList}function di(s,b){const y=a.get(s);y.outputColorSpace=b.outputColorSpace,y.batching=b.batching,y.batchingColor=b.batchingColor,y.instancing=b.instancing,y.instancingColor=b.instancingColor,y.instancingMorph=b.instancingMorph,y.skinning=b.skinning,y.morphTargets=b.morphTargets,y.morphNormals=b.morphNormals,y.morphColors=b.morphColors,y.morphTargetsCount=b.morphTargetsCount,y.numClippingPlanes=b.numClippingPlanes,y.numIntersection=b.numClipIntersection,y.vertexAlphas=b.vertexAlphas,y.vertexTangents=b.vertexTangents,y.toneMapping=b.toneMapping}function rr(s,b,y,w,D){b.isScene!==!0&&(b=Xe),A.resetTextureUnits();const oe=b.fog,ce=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?b.environment:null,se=z===null?h.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:bn,_e=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Se=k.get(w.envMap||ce,_e),Pe=w.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,Ie=!!y.attributes.tangent&&(!!w.normalMap||w.anisotropy>0),Ee=!!y.morphAttributes.position,We=!!y.morphAttributes.normal,nt=!!y.morphAttributes.color;let et=Tt;w.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(et=h.toneMapping);const ze=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,dt=ze!==void 0?ze.length:0,ve=a.get(w),ht=N.state.lights;if(Te===!0&&(be===!0||s!==Y)){const lt=s===Y&&w.id===W;Q.setState(w,s,lt)}let Fe=!1;w.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==ht.state.version||ve.outputColorSpace!==se||D.isBatchedMesh&&ve.batching===!1||!D.isBatchedMesh&&ve.batching===!0||D.isBatchedMesh&&ve.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&ve.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&ve.instancing===!1||!D.isInstancedMesh&&ve.instancing===!0||D.isSkinnedMesh&&ve.skinning===!1||!D.isSkinnedMesh&&ve.skinning===!0||D.isInstancedMesh&&ve.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&ve.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&ve.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&ve.instancingMorph===!1&&D.morphTexture!==null||ve.envMap!==Se||w.fog===!0&&ve.fog!==oe||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Q.numPlanes||ve.numIntersection!==Q.numIntersection)||ve.vertexAlphas!==Pe||ve.vertexTangents!==Ie||ve.morphTargets!==Ee||ve.morphNormals!==We||ve.morphColors!==nt||ve.toneMapping!==et||ve.morphTargetsCount!==dt)&&(Fe=!0):(Fe=!0,ve.__version=w.version);let gt=ve.currentProgram;Fe===!0&&(gt=hn(w,b,D));let vt=!1,Bt=!1,zt=!1;const Ye=gt.getUniforms(),ct=ve.uniforms;if(ge.useProgram(gt.program)&&(vt=!0,Bt=!0,zt=!0),w.id!==W&&(W=w.id,Bt=!0),vt||Y!==s){ge.buffers.depth.getReversed()&&s.reversedDepth!==!0&&(s._reversedDepth=!0,s.updateProjectionMatrix()),Ye.setValue(g,"projectionMatrix",s.projectionMatrix),Ye.setValue(g,"viewMatrix",s.matrixWorldInverse);const It=Ye.map.cameraPosition;It!==void 0&&It.setValue(g,ye.setFromMatrixPosition(s.matrixWorld)),Ke.logarithmicDepthBuffer&&Ye.setValue(g,"logDepthBufFC",2/(Math.log(s.far+1)/Math.LN2)),(w.isMeshPhongMaterial||w.isMeshToonMaterial||w.isMeshLambertMaterial||w.isMeshBasicMaterial||w.isMeshStandardMaterial||w.isShaderMaterial)&&Ye.setValue(g,"isOrthographic",s.isOrthographicCamera===!0),Y!==s&&(Y=s,Bt=!0,zt=!0)}if(ve.needsLights&&(ht.state.directionalShadowMap.length>0&&Ye.setValue(g,"directionalShadowMap",ht.state.directionalShadowMap,A),ht.state.spotShadowMap.length>0&&Ye.setValue(g,"spotShadowMap",ht.state.spotShadowMap,A),ht.state.pointShadowMap.length>0&&Ye.setValue(g,"pointShadowMap",ht.state.pointShadowMap,A)),D.isSkinnedMesh){Ye.setOptional(g,D,"bindMatrix"),Ye.setOptional(g,D,"bindMatrixInverse");const lt=D.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),Ye.setValue(g,"boneTexture",lt.boneTexture,A))}D.isBatchedMesh&&(Ye.setOptional(g,D,"batchingTexture"),Ye.setValue(g,"batchingTexture",D._matricesTexture,A),Ye.setOptional(g,D,"batchingIdTexture"),Ye.setValue(g,"batchingIdTexture",D._indirectTexture,A),Ye.setOptional(g,D,"batchingColorTexture"),D._colorsTexture!==null&&Ye.setValue(g,"batchingColorTexture",D._colorsTexture,A));const Ut=y.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&le.update(D,y,gt),(Bt||ve.receiveShadow!==D.receiveShadow)&&(ve.receiveShadow=D.receiveShadow,Ye.setValue(g,"receiveShadow",D.receiveShadow)),(w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial)&&w.envMap===null&&b.environment!==null&&(ct.envMapIntensity.value=b.environmentIntensity),ct.dfgLUT!==void 0&&(ct.dfgLUT.value=Fd()),Bt&&(Ye.setValue(g,"toneMappingExposure",h.toneMappingExposure),ve.needsLights&&or(ct,zt),oe&&w.fog===!0&&xe.refreshFogUniforms(ct,oe),xe.refreshMaterialUniforms(ct,w,Ne,he,N.state.transmissionRenderTarget[s.id]),Tn.upload(g,fi(ve),ct,A)),w.isShaderMaterial&&w.uniformsNeedUpdate===!0&&(Tn.upload(g,fi(ve),ct,A),w.uniformsNeedUpdate=!1),w.isSpriteMaterial&&Ye.setValue(g,"center",D.center),Ye.setValue(g,"modelViewMatrix",D.modelViewMatrix),Ye.setValue(g,"normalMatrix",D.normalMatrix),Ye.setValue(g,"modelMatrix",D.matrixWorld),w.isShaderMaterial||w.isRawShaderMaterial){const lt=w.uniformsGroups;for(let It=0,Xt=lt.length;It<Xt;It++){const ui=lt[It];fe.update(ui,gt),fe.bind(ui,gt)}}return gt}function or(s,b){s.ambientLightColor.needsUpdate=b,s.lightProbe.needsUpdate=b,s.directionalLights.needsUpdate=b,s.directionalLightShadows.needsUpdate=b,s.pointLights.needsUpdate=b,s.pointLightShadows.needsUpdate=b,s.spotLights.needsUpdate=b,s.spotLightShadows.needsUpdate=b,s.rectAreaLights.needsUpdate=b,s.hemisphereLights.needsUpdate=b}function sr(s){return s.isMeshLambertMaterial||s.isMeshToonMaterial||s.isMeshPhongMaterial||s.isMeshStandardMaterial||s.isShadowMaterial||s.isShaderMaterial&&s.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(s,b,y){const w=a.get(s);w.__autoAllocateDepthBuffer=s.resolveDepthBuffer===!1,w.__autoAllocateDepthBuffer===!1&&(w.__useRenderToTexture=!1),a.get(s.texture).__webglTexture=b,a.get(s.depthTexture).__webglTexture=w.__autoAllocateDepthBuffer?void 0:y,w.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(s,b){const y=a.get(s);y.__webglFramebuffer=b,y.__useDefaultFramebuffer=b===void 0};const lr=g.createFramebuffer();this.setRenderTarget=function(s,b=0,y=0){z=s,C=b,V=y;let w=null,D=!1,oe=!1;if(s){const se=a.get(s);if(se.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(g.FRAMEBUFFER,se.__webglFramebuffer),B.copy(s.viewport),O.copy(s.scissor),ie=s.scissorTest,ge.viewport(B),ge.scissor(O),ge.setScissorTest(ie),W=-1;return}else if(se.__webglFramebuffer===void 0)A.setupRenderTarget(s);else if(se.__hasExternalTextures)A.rebindTextures(s,a.get(s.texture).__webglTexture,a.get(s.depthTexture).__webglTexture);else if(s.depthBuffer){const Pe=s.depthTexture;if(se.__boundDepthTexture!==Pe){if(Pe!==null&&a.has(Pe)&&(s.width!==Pe.image.width||s.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(s)}}const _e=s.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(oe=!0);const Se=a.get(s).__webglFramebuffer;s.isWebGLCubeRenderTarget?(Array.isArray(Se[b])?w=Se[b][y]:w=Se[b],D=!0):s.samples>0&&A.useMultisampledRTT(s)===!1?w=a.get(s).__webglMultisampledFramebuffer:Array.isArray(Se)?w=Se[y]:w=Se,B.copy(s.viewport),O.copy(s.scissor),ie=s.scissorTest}else B.copy(X).multiplyScalar(Ne).floor(),O.copy(j).multiplyScalar(Ne).floor(),ie=ne;if(y!==0&&(w=lr),ge.bindFramebuffer(g.FRAMEBUFFER,w)&&ge.drawBuffers(s,w),ge.viewport(B),ge.scissor(O),ge.setScissorTest(ie),D){const se=a.get(s.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+b,se.__webglTexture,y)}else if(oe){const se=b;for(let _e=0;_e<s.textures.length;_e++){const Se=a.get(s.textures[_e]);g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0+_e,Se.__webglTexture,y,se)}}else if(s!==null&&y!==0){const se=a.get(s.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,se.__webglTexture,y)}W=-1},this.readRenderTargetPixels=function(s,b,y,w,D,oe,ce,se=0){if(!(s&&s.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=a.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&ce!==void 0&&(_e=_e[ce]),_e){ge.bindFramebuffer(g.FRAMEBUFFER,_e);try{const Se=s.textures[se],Pe=Se.format,Ie=Se.type;if(s.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+se),!Ke.textureFormatReadable(Pe)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Ie)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=s.width-w&&y>=0&&y<=s.height-D&&g.readPixels(b,y,w,D,te.convert(Pe),te.convert(Ie),oe)}finally{const Se=z!==null?a.get(z).__webglFramebuffer:null;ge.bindFramebuffer(g.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(s,b,y,w,D,oe,ce,se=0){if(!(s&&s.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=a.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&ce!==void 0&&(_e=_e[ce]),_e)if(b>=0&&b<=s.width-w&&y>=0&&y<=s.height-D){ge.bindFramebuffer(g.FRAMEBUFFER,_e);const Se=s.textures[se],Pe=Se.format,Ie=Se.type;if(s.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+se),!Ke.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Ee),g.bufferData(g.PIXEL_PACK_BUFFER,oe.byteLength,g.STREAM_READ),g.readPixels(b,y,w,D,te.convert(Pe),te.convert(Ie),0);const We=z!==null?a.get(z).__webglFramebuffer:null;ge.bindFramebuffer(g.FRAMEBUFFER,We);const nt=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await Mr(g,nt,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Ee),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,oe),g.deleteBuffer(Ee),g.deleteSync(nt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(s,b=null,y=0){const w=Math.pow(2,-y),D=Math.floor(s.image.width*w),oe=Math.floor(s.image.height*w),ce=b!==null?b.x:0,se=b!==null?b.y:0;A.setTexture2D(s,0),g.copyTexSubImage2D(g.TEXTURE_2D,y,0,0,ce,se,D,oe),ge.unbindTexture()};const cr=g.createFramebuffer(),fr=g.createFramebuffer();this.copyTextureToTexture=function(s,b,y=null,w=null,D=0,oe=0){let ce,se,_e,Se,Pe,Ie,Ee,We,nt;const et=s.isCompressedTexture?s.mipmaps[oe]:s.image;if(y!==null)ce=y.max.x-y.min.x,se=y.max.y-y.min.y,_e=y.isBox3?y.max.z-y.min.z:1,Se=y.min.x,Pe=y.min.y,Ie=y.isBox3?y.min.z:0;else{const ct=Math.pow(2,-D);ce=Math.floor(et.width*ct),se=Math.floor(et.height*ct),s.isDataArrayTexture?_e=et.depth:s.isData3DTexture?_e=Math.floor(et.depth*ct):_e=1,Se=0,Pe=0,Ie=0}w!==null?(Ee=w.x,We=w.y,nt=w.z):(Ee=0,We=0,nt=0);const ze=te.convert(b.format),dt=te.convert(b.type);let ve;b.isData3DTexture?(A.setTexture3D(b,0),ve=g.TEXTURE_3D):b.isDataArrayTexture||b.isCompressedArrayTexture?(A.setTexture2DArray(b,0),ve=g.TEXTURE_2D_ARRAY):(A.setTexture2D(b,0),ve=g.TEXTURE_2D),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,b.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,b.unpackAlignment);const ht=g.getParameter(g.UNPACK_ROW_LENGTH),Fe=g.getParameter(g.UNPACK_IMAGE_HEIGHT),gt=g.getParameter(g.UNPACK_SKIP_PIXELS),vt=g.getParameter(g.UNPACK_SKIP_ROWS),Bt=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,et.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,et.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Se),g.pixelStorei(g.UNPACK_SKIP_ROWS,Pe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Ie);const zt=s.isDataArrayTexture||s.isData3DTexture,Ye=b.isDataArrayTexture||b.isData3DTexture;if(s.isDepthTexture){const ct=a.get(s),Ut=a.get(b),lt=a.get(ct.__renderTarget),It=a.get(Ut.__renderTarget);ge.bindFramebuffer(g.READ_FRAMEBUFFER,lt.__webglFramebuffer),ge.bindFramebuffer(g.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Xt=0;Xt<_e;Xt++)zt&&(g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,a.get(s).__webglTexture,D,Ie+Xt),g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,a.get(b).__webglTexture,oe,nt+Xt)),g.blitFramebuffer(Se,Pe,ce,se,Ee,We,ce,se,g.DEPTH_BUFFER_BIT,g.NEAREST);ge.bindFramebuffer(g.READ_FRAMEBUFFER,null),ge.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else if(D!==0||s.isRenderTargetTexture||a.has(s)){const ct=a.get(s),Ut=a.get(b);ge.bindFramebuffer(g.READ_FRAMEBUFFER,cr),ge.bindFramebuffer(g.DRAW_FRAMEBUFFER,fr);for(let lt=0;lt<_e;lt++)zt?g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,ct.__webglTexture,D,Ie+lt):g.framebufferTexture2D(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,ct.__webglTexture,D),Ye?g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,Ut.__webglTexture,oe,nt+lt):g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,Ut.__webglTexture,oe),D!==0?g.blitFramebuffer(Se,Pe,ce,se,Ee,We,ce,se,g.COLOR_BUFFER_BIT,g.NEAREST):Ye?g.copyTexSubImage3D(ve,oe,Ee,We,nt+lt,Se,Pe,ce,se):g.copyTexSubImage2D(ve,oe,Ee,We,Se,Pe,ce,se);ge.bindFramebuffer(g.READ_FRAMEBUFFER,null),ge.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else Ye?s.isDataTexture||s.isData3DTexture?g.texSubImage3D(ve,oe,Ee,We,nt,ce,se,_e,ze,dt,et.data):b.isCompressedArrayTexture?g.compressedTexSubImage3D(ve,oe,Ee,We,nt,ce,se,_e,ze,et.data):g.texSubImage3D(ve,oe,Ee,We,nt,ce,se,_e,ze,dt,et):s.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,oe,Ee,We,ce,se,ze,dt,et.data):s.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,oe,Ee,We,et.width,et.height,ze,et.data):g.texSubImage2D(g.TEXTURE_2D,oe,Ee,We,ce,se,ze,dt,et);g.pixelStorei(g.UNPACK_ROW_LENGTH,ht),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Fe),g.pixelStorei(g.UNPACK_SKIP_PIXELS,gt),g.pixelStorei(g.UNPACK_SKIP_ROWS,vt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Bt),oe===0&&b.generateMipmaps&&g.generateMipmap(ve),ge.unbindTexture()},this.initRenderTarget=function(s){a.get(s).__webglFramebuffer===void 0&&A.setupRenderTarget(s)},this.initTexture=function(s){s.isCubeTexture?A.setTextureCube(s,0):s.isData3DTexture?A.setTexture3D(s,0):s.isDataArrayTexture||s.isCompressedArrayTexture?A.setTexture2DArray(s,0):A.setTexture2D(s,0),ge.unbindTexture()},this.resetState=function(){C=0,V=0,z=null,ge.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(n),t.unpackColorSpace=it._getUnpackColorSpace()}}var Bd=Ca('<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden"><canvas class="svelte-122agbd"></canvas></div>');function Gd(e,n){Pa(n,!0);let t,i,l,r,f,m,P=0,R=0,F=new ft(.5,.5),L=new ft(.5,.5);function p(){if(R=window.scrollY,f){const M=f.material;M.uniforms.uMouseScrollY.value=R*5e-4}}const v={surface:"#f9f9fb",variant:"#e2e2e4",accent:"#ba002c",ink:"#1a1c1d",teal:"#006672",outline:"#916f6b"},T=`
    varying vec2 vUv;

    void main() {
    		vUv = uv;
    		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
	`,I=`
		uniform float uTime;
		uniform vec2 uResolution;
		uniform vec2 uMouse;
		uniform vec3 uSurface;
		uniform vec3 uVariant;
		uniform vec3 uAccent;
		uniform vec3 uInk;
		uniform vec3 uTeal;
		uniform vec3 uOutline;
		uniform float uMouseScrollY;

		varying vec2 vUv;

		float gridMask(vec2 p, float cells) {
			vec2 c = abs(fract(p * cells - 0.5) - 0.5);
			return smoothstep(0.038, 0.0, min(c.x, c.y));
		}

		void main() {
			float t = uTime;
			float aspect = uResolution.x / max(uResolution.y, 1.0);

			vec2 toward = (uMouse - vUv) * 0.28;
			vec2 uv = vUv ;

			vec2 drift = vec2(sin(t * 0.04), cos(t * 0.035)) * 0.004;
            drift.y -= uMouseScrollY;

			vec2 p = vec2(uv.x * aspect, uv.y) + drift;

			vec3 base = mix(uSurface, uVariant, uv.y * 0.55 + sin(t * 0.08) * 0.012);

			float fine = gridMask(p+ toward, 22.0);
			float coarse = gridMask(p + 0.12+ toward, 7.0);
			vec3 col = base;
			col = mix(col, uOutline, coarse * 0.06);
			col = mix(col, uInk, fine * 0.045);
			col = mix(col, uAccent, fine * 0.085);

			float tick = gridMask(p * vec2(1.0, 3.2) + vec2(0.0, 0.31), 3.0);
			col = mix(col, uTeal, tick * fine * 0.07);

			vec2 q = uv - 0.5;
			float vig = 1.0 - dot(q, q) * 0.85;
			float alpha = 0.38 * vig;

			gl_FragColor = vec4(col, alpha);
		}
	`;function c(){i=new Ho,l=new jn(-1,1,1,-1,0,2),l.position.set(0,0,1),l.lookAt(0,0,0),r=new Od({canvas:t,alpha:!0,antialias:!0,powerPreference:"low-power"}),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setClearColor(0,0),r.setSize(window.innerWidth,window.innerHeight);const M=new ni(2,2),U=new bt({uniforms:{uTime:{value:0},uResolution:{value:new ft(window.innerWidth,window.innerHeight)},uMouse:{value:F.clone()},uMouseScrollY:{value:R},uSurface:{value:new He(v.surface)},uVariant:{value:new He(v.variant)},uAccent:{value:new He(v.accent)},uInk:{value:new He(v.ink)},uTeal:{value:new He(v.teal)},uOutline:{value:new He(v.outline)}},vertexShader:T,fragmentShader:I,transparent:!0,depthWrite:!1,depthTest:!1});f=new Rt(M,U),i.add(f)}function o(){if(m=requestAnimationFrame(o),P+=.016,F.lerp(L,.06),f){const M=f.material;M.uniforms.uTime.value=P,M.uniforms.uMouse.value=F}r.render(i,l)}function _(M){L.x=M.clientX/window.innerWidth,L.y=1-M.clientY/window.innerHeight}function x(){if(!r||!l)return;const M=window.innerWidth,U=window.innerHeight;r.setSize(M,U);const d=f?.material;d&&d.uniforms.uResolution.value.set(M,U)}La(()=>{c(),o(),R=window.scrollY,window.addEventListener("mousemove",_),window.addEventListener("resize",x),window.addEventListener("scroll",p)}),hr(()=>{window.removeEventListener("mousemove",_),window.removeEventListener("resize",x),window.removeEventListener("scroll",p),cancelAnimationFrame(m),r?.dispose(),f?.geometry.dispose(),f?.material?.dispose()});var S=Bd(),N=rn(S);vr(N,M=>t=M,()=>t),on(S),ba(e,S),Da()}var Hd=Ca('<div class="font-body text-on-surface selection:bg-primary selection:text-on-primary flex min-h-screen flex-col antialiased"><div class="bg-surface fixed inset-0 -z-50"></div> <!> <aside class="fixed top-0 left-0 z-40 hidden h-screen w-64 flex-col border-r border-[#ba002c]/20 bg-[#f3f3f5] py-8 pt-24 lg:flex"><div class="mb-12 px-6"><div class="font-headline text-on-surface text-lg font-black">SYSTEM_STATUS</div> <div class="text-primary font-label text-[10px] tracking-[0.2em] uppercase">ONLINE // VER_2.0.4</div></div> <nav class="flex-1 space-y-2"><a href="/"><span class="font-label text-sm font-bold tracking-widest uppercase">Portal</span></a> <a href="/#about"><span class="font-label text-sm font-bold tracking-widest uppercase">Dossier</span></a> <a href="/#contact"><span class="font-label text-sm font-bold tracking-widest uppercase">Interface</span></a></nav> <div class="mt-auto px-4 pb-8"><p class="bg-primary text-on-primary font-headline clip-path-button hover:bg-on-surface inline-block w-full py-3 text-center text-xs tracking-widest transition-colors">DOWNLOAD_CV</p></div></aside> <main class="relative min-h-screen overflow-hidden pt-24 lg:ml-64"><!></main></div>');function qd(e,n){Pa(n,!0);let t=pi(""),i=pi(!1),l;function r(){clearTimeout(l),St(i,!0),l=setTimeout(()=>{St(i,!1),f()},750)}function f(){if(mn(i))return;const o=document.getElementById("about"),_=document.getElementById("contact"),x=window.scrollY,S=window.innerHeight,N=Math.max(0,document.documentElement.scrollHeight-S);if(x<72){St(t,"");return}if(x>=N-100){St(t,"contact");return}if(o&&_){const M=S*.38,U=_.getBoundingClientRect().top,d=o.getBoundingClientRect().top;U<=M?St(t,"contact"):d<=M?St(t,"about"):St(t,"")}}async function m(o,_){if(o.defaultPrevented||o.button!==0||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey)return;if(o.preventDefault(),_==="portal"){St(t,""),await na("/"),window.scrollTo({top:0,behavior:"auto"}),f();return}const x=_==="about"?"about":"contact";St(t,x,!0),St(i,!0),await na(`/#${x}`,{noScroll:!0,keepFocus:!0}),document.getElementById(x)?.scrollIntoView({behavior:"smooth",block:"start"}),r()}La(()=>(window.addEventListener("scroll",f,{passive:!0}),f(),()=>{window.removeEventListener("scroll",f),clearTimeout(l)}));var P=Hd(),R=Yt(rn(P),2);Gd(R,{});var F=Yt(R,2),L=Yt(rn(F),2),p=rn(L),v=Yt(p,2),T=Yt(v,2);on(L),_r(2),on(F);var I=Yt(F,2),c=rn(I);Vo(c,()=>n.children),on(I),on(P),mr(()=>{kn(p,1,`clip-path-tactical relative z-10 mx-4 block flex items-center gap-4 p-4 transition-all ${mn(t)===""?"cursor-default bg-[#ba002c] text-white":"cursor-pointer border-[#ba002c] text-[#1a1c1d] opacity-50 hover:border-l-4 hover:bg-[#e2e2e4] hover:opacity-100"}`),kn(v,1,`clip-path-tactical relative z-10 mx-4 block flex items-center gap-4 p-4 transition-all ${mn(t)==="about"?"cursor-default bg-[#ba002c] text-white":"cursor-pointer border-[#ba002c] text-[#1a1c1d] opacity-50 hover:border-l-4 hover:bg-[#e2e2e4] hover:opacity-100"}`),kn(T,1,`clip-path-tactical relative z-10 mx-4 block flex items-center gap-4 p-4 transition-all ${mn(t)==="contact"?"cursor-default bg-[#ba002c] text-white":"cursor-pointer border-[#ba002c] text-[#1a1c1d] opacity-50 hover:border-l-4 hover:bg-[#e2e2e4] hover:opacity-100"}`)}),In("click",p,o=>m(o,"portal")),In("click",v,o=>m(o,"about")),In("click",T,o=>m(o,"contact")),ba(e,P),Da()}dr(["click"]);export{qd as component,Yd as universal};
