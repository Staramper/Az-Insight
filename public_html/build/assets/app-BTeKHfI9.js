var en="top",xn="bottom",bn="right",tn="left",kc="auto",Ro=[en,xn,bn,tn],tr="start",lo="end",$_="clippingParents",Nh="viewport",Gr="popper",X_="reference",Bf=Ro.reduce(function(t,e){return t.concat([e+"-"+tr,e+"-"+lo])},[]),Dh=[].concat(Ro,[kc]).reduce(function(t,e){return t.concat([e,e+"-"+tr,e+"-"+lo])},[]),q_="beforeRead",j_="read",Y_="afterRead",K_="beforeMain",Z_="main",J_="afterMain",Q_="beforeWrite",ev="write",tv="afterWrite",nv=[q_,j_,Y_,K_,Z_,J_,Q_,ev,tv];function ui(t){return t?(t.nodeName||"").toLowerCase():null}function Tn(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function nr(t){var e=Tn(t).Element;return t instanceof e||t instanceof Element}function On(t){var e=Tn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Ih(t){if(typeof ShadowRoot>"u")return!1;var e=Tn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function FS(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var i=e.styles[n]||{},s=e.attributes[n]||{},r=e.elements[n];!On(r)||!ui(r)||(Object.assign(r.style,i),Object.keys(s).forEach(function(o){var a=s[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function BS(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(i){var s=e.elements[i],r=e.attributes[i]||{},o=Object.keys(e.styles.hasOwnProperty(i)?e.styles[i]:n[i]),a=o.reduce(function(l,c){return l[c]="",l},{});!On(s)||!ui(s)||(Object.assign(s.style,a),Object.keys(r).forEach(function(l){s.removeAttribute(l)}))})}}const Oh={name:"applyStyles",enabled:!0,phase:"write",fn:FS,effect:BS,requires:["computeStyles"]};function oi(t){return t.split("-")[0]}var qs=Math.max,oc=Math.min,co=Math.round;function kf(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function iv(){return!/^((?!chrome|android).)*safari/i.test(kf())}function uo(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var i=t.getBoundingClientRect(),s=1,r=1;e&&On(t)&&(s=t.offsetWidth>0&&co(i.width)/t.offsetWidth||1,r=t.offsetHeight>0&&co(i.height)/t.offsetHeight||1);var o=nr(t)?Tn(t):window,a=o.visualViewport,l=!iv()&&n,c=(i.left+(l&&a?a.offsetLeft:0))/s,u=(i.top+(l&&a?a.offsetTop:0))/r,f=i.width/s,h=i.height/r;return{width:f,height:h,top:u,right:c+f,bottom:u+h,left:c,x:c,y:u}}function Uh(t){var e=uo(t),n=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:i}}function sv(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Ih(n)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function Li(t){return Tn(t).getComputedStyle(t)}function kS(t){return["table","td","th"].indexOf(ui(t))>=0}function ys(t){return((nr(t)?t.ownerDocument:t.document)||window.document).documentElement}function Hc(t){return ui(t)==="html"?t:t.assignedSlot||t.parentNode||(Ih(t)?t.host:null)||ys(t)}function vp(t){return!On(t)||Li(t).position==="fixed"?null:t.offsetParent}function HS(t){var e=/firefox/i.test(kf()),n=/Trident/i.test(kf());if(n&&On(t)){var i=Li(t);if(i.position==="fixed")return null}var s=Hc(t);for(Ih(s)&&(s=s.host);On(s)&&["html","body"].indexOf(ui(s))<0;){var r=Li(s);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return s;s=s.parentNode}return null}function La(t){for(var e=Tn(t),n=vp(t);n&&kS(n)&&Li(n).position==="static";)n=vp(n);return n&&(ui(n)==="html"||ui(n)==="body"&&Li(n).position==="static")?e:n||HS(t)||e}function Fh(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ea(t,e,n){return qs(t,oc(e,n))}function VS(t,e,n){var i=ea(t,e,n);return i>n?n:i}function rv(){return{top:0,right:0,bottom:0,left:0}}function ov(t){return Object.assign({},rv(),t)}function av(t,e){return e.reduce(function(n,i){return n[i]=t,n},{})}var zS=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,ov(typeof e!="number"?e:av(e,Ro))};function GS(t){var e,n=t.state,i=t.name,s=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=oi(n.placement),l=Fh(a),c=[tn,bn].indexOf(a)>=0,u=c?"height":"width";if(!(!r||!o)){var f=zS(s.padding,n),h=Uh(r),p=l==="y"?en:tn,g=l==="y"?xn:bn,v=n.rects.reference[u]+n.rects.reference[l]-o[l]-n.rects.popper[u],m=o[l]-n.rects.reference[l],d=La(r),T=d?l==="y"?d.clientHeight||0:d.clientWidth||0:0,_=v/2-m/2,b=f[p],C=T-h[u]-f[g],A=T/2-h[u]/2+_,w=ea(b,A,C),P=l;n.modifiersData[i]=(e={},e[P]=w,e.centerOffset=w-A,e)}}function WS(t){var e=t.state,n=t.options,i=n.element,s=i===void 0?"[data-popper-arrow]":i;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||sv(e.elements.popper,s)&&(e.elements.arrow=s))}const lv={name:"arrow",enabled:!0,phase:"main",fn:GS,effect:WS,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function fo(t){return t.split("-")[1]}var $S={top:"auto",right:"auto",bottom:"auto",left:"auto"};function XS(t,e){var n=t.x,i=t.y,s=e.devicePixelRatio||1;return{x:co(n*s)/s||0,y:co(i*s)/s||0}}function Ep(t){var e,n=t.popper,i=t.popperRect,s=t.placement,r=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,f=t.isFixed,h=o.x,p=h===void 0?0:h,g=o.y,v=g===void 0?0:g,m=typeof u=="function"?u({x:p,y:v}):{x:p,y:v};p=m.x,v=m.y;var d=o.hasOwnProperty("x"),T=o.hasOwnProperty("y"),_=tn,b=en,C=window;if(c){var A=La(n),w="clientHeight",P="clientWidth";if(A===Tn(n)&&(A=ys(n),Li(A).position!=="static"&&a==="absolute"&&(w="scrollHeight",P="scrollWidth")),A=A,s===en||(s===tn||s===bn)&&r===lo){b=xn;var x=f&&A===C&&C.visualViewport?C.visualViewport.height:A[w];v-=x-i.height,v*=l?1:-1}if(s===tn||(s===en||s===xn)&&r===lo){_=bn;var E=f&&A===C&&C.visualViewport?C.visualViewport.width:A[P];p-=E-i.width,p*=l?1:-1}}var D=Object.assign({position:a},c&&$S),I=u===!0?XS({x:p,y:v},Tn(n)):{x:p,y:v};if(p=I.x,v=I.y,l){var N;return Object.assign({},D,(N={},N[b]=T?"0":"",N[_]=d?"0":"",N.transform=(C.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",N))}return Object.assign({},D,(e={},e[b]=T?v+"px":"",e[_]=d?p+"px":"",e.transform="",e))}function qS(t){var e=t.state,n=t.options,i=n.gpuAcceleration,s=i===void 0?!0:i,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:oi(e.placement),variation:fo(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Ep(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Ep(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Bh={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:qS,data:{}};var Qa={passive:!0};function jS(t){var e=t.state,n=t.instance,i=t.options,s=i.scroll,r=s===void 0?!0:s,o=i.resize,a=o===void 0?!0:o,l=Tn(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&c.forEach(function(u){u.addEventListener("scroll",n.update,Qa)}),a&&l.addEventListener("resize",n.update,Qa),function(){r&&c.forEach(function(u){u.removeEventListener("scroll",n.update,Qa)}),a&&l.removeEventListener("resize",n.update,Qa)}}const kh={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:jS,data:{}};var YS={left:"right",right:"left",bottom:"top",top:"bottom"};function $l(t){return t.replace(/left|right|bottom|top/g,function(e){return YS[e]})}var KS={start:"end",end:"start"};function yp(t){return t.replace(/start|end/g,function(e){return KS[e]})}function Hh(t){var e=Tn(t),n=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:n,scrollTop:i}}function Vh(t){return uo(ys(t)).left+Hh(t).scrollLeft}function ZS(t,e){var n=Tn(t),i=ys(t),s=n.visualViewport,r=i.clientWidth,o=i.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;var c=iv();(c||!c&&e==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:r,height:o,x:a+Vh(t),y:l}}function JS(t){var e,n=ys(t),i=Hh(t),s=(e=t.ownerDocument)==null?void 0:e.body,r=qs(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=qs(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-i.scrollLeft+Vh(t),l=-i.scrollTop;return Li(s||n).direction==="rtl"&&(a+=qs(n.clientWidth,s?s.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function zh(t){var e=Li(t),n=e.overflow,i=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+i)}function cv(t){return["html","body","#document"].indexOf(ui(t))>=0?t.ownerDocument.body:On(t)&&zh(t)?t:cv(Hc(t))}function ta(t,e){var n;e===void 0&&(e=[]);var i=cv(t),s=i===((n=t.ownerDocument)==null?void 0:n.body),r=Tn(i),o=s?[r].concat(r.visualViewport||[],zh(i)?i:[]):i,a=e.concat(o);return s?a:a.concat(ta(Hc(o)))}function Hf(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function QS(t,e){var n=uo(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Sp(t,e,n){return e===Nh?Hf(ZS(t,n)):nr(e)?QS(e,n):Hf(JS(ys(t)))}function ex(t){var e=ta(Hc(t)),n=["absolute","fixed"].indexOf(Li(t).position)>=0,i=n&&On(t)?La(t):t;return nr(i)?e.filter(function(s){return nr(s)&&sv(s,i)&&ui(s)!=="body"}):[]}function tx(t,e,n,i){var s=e==="clippingParents"?ex(t):[].concat(e),r=[].concat(s,[n]),o=r[0],a=r.reduce(function(l,c){var u=Sp(t,c,i);return l.top=qs(u.top,l.top),l.right=oc(u.right,l.right),l.bottom=oc(u.bottom,l.bottom),l.left=qs(u.left,l.left),l},Sp(t,o,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function uv(t){var e=t.reference,n=t.element,i=t.placement,s=i?oi(i):null,r=i?fo(i):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(s){case en:l={x:o,y:e.y-n.height};break;case xn:l={x:o,y:e.y+e.height};break;case bn:l={x:e.x+e.width,y:a};break;case tn:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var c=s?Fh(s):null;if(c!=null){var u=c==="y"?"height":"width";switch(r){case tr:l[c]=l[c]-(e[u]/2-n[u]/2);break;case lo:l[c]=l[c]+(e[u]/2-n[u]/2);break}}return l}function ho(t,e){e===void 0&&(e={});var n=e,i=n.placement,s=i===void 0?t.placement:i,r=n.strategy,o=r===void 0?t.strategy:r,a=n.boundary,l=a===void 0?$_:a,c=n.rootBoundary,u=c===void 0?Nh:c,f=n.elementContext,h=f===void 0?Gr:f,p=n.altBoundary,g=p===void 0?!1:p,v=n.padding,m=v===void 0?0:v,d=ov(typeof m!="number"?m:av(m,Ro)),T=h===Gr?X_:Gr,_=t.rects.popper,b=t.elements[g?T:h],C=tx(nr(b)?b:b.contextElement||ys(t.elements.popper),l,u,o),A=uo(t.elements.reference),w=uv({reference:A,element:_,strategy:"absolute",placement:s}),P=Hf(Object.assign({},_,w)),x=h===Gr?P:A,E={top:C.top-x.top+d.top,bottom:x.bottom-C.bottom+d.bottom,left:C.left-x.left+d.left,right:x.right-C.right+d.right},D=t.modifiersData.offset;if(h===Gr&&D){var I=D[s];Object.keys(E).forEach(function(N){var G=[bn,xn].indexOf(N)>=0?1:-1,q=[en,xn].indexOf(N)>=0?"y":"x";E[N]+=I[q]*G})}return E}function nx(t,e){e===void 0&&(e={});var n=e,i=n.placement,s=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?Dh:l,u=fo(i),f=u?a?Bf:Bf.filter(function(g){return fo(g)===u}):Ro,h=f.filter(function(g){return c.indexOf(g)>=0});h.length===0&&(h=f);var p=h.reduce(function(g,v){return g[v]=ho(t,{placement:v,boundary:s,rootBoundary:r,padding:o})[oi(v)],g},{});return Object.keys(p).sort(function(g,v){return p[g]-p[v]})}function ix(t){if(oi(t)===kc)return[];var e=$l(t);return[yp(t),e,yp(e)]}function sx(t){var e=t.state,n=t.options,i=t.name;if(!e.modifiersData[i]._skip){for(var s=n.mainAxis,r=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,u=n.boundary,f=n.rootBoundary,h=n.altBoundary,p=n.flipVariations,g=p===void 0?!0:p,v=n.allowedAutoPlacements,m=e.options.placement,d=oi(m),T=d===m,_=l||(T||!g?[$l(m)]:ix(m)),b=[m].concat(_).reduce(function(ne,de){return ne.concat(oi(de)===kc?nx(e,{placement:de,boundary:u,rootBoundary:f,padding:c,flipVariations:g,allowedAutoPlacements:v}):de)},[]),C=e.rects.reference,A=e.rects.popper,w=new Map,P=!0,x=b[0],E=0;E<b.length;E++){var D=b[E],I=oi(D),N=fo(D)===tr,G=[en,xn].indexOf(I)>=0,q=G?"width":"height",z=ho(e,{placement:D,boundary:u,rootBoundary:f,altBoundary:h,padding:c}),K=G?N?bn:tn:N?xn:en;C[q]>A[q]&&(K=$l(K));var k=$l(K),le=[];if(r&&le.push(z[I]<=0),a&&le.push(z[K]<=0,z[k]<=0),le.every(function(ne){return ne})){x=D,P=!1;break}w.set(D,le)}if(P)for(var ce=g?3:1,xe=function(de){var _e=b.find(function(pe){var Ce=w.get(pe);if(Ce)return Ce.slice(0,de).every(function(Pe){return Pe})});if(_e)return x=_e,"break"},we=ce;we>0;we--){var je=xe(we);if(je==="break")break}e.placement!==x&&(e.modifiersData[i]._skip=!0,e.placement=x,e.reset=!0)}}const fv={name:"flip",enabled:!0,phase:"main",fn:sx,requiresIfExists:["offset"],data:{_skip:!1}};function xp(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function bp(t){return[en,bn,xn,tn].some(function(e){return t[e]>=0})}function rx(t){var e=t.state,n=t.name,i=e.rects.reference,s=e.rects.popper,r=e.modifiersData.preventOverflow,o=ho(e,{elementContext:"reference"}),a=ho(e,{altBoundary:!0}),l=xp(o,i),c=xp(a,s,r),u=bp(l),f=bp(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const hv={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:rx};function ox(t,e,n){var i=oi(t),s=[tn,en].indexOf(i)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*s,[tn,bn].indexOf(i)>=0?{x:a,y:o}:{x:o,y:a}}function ax(t){var e=t.state,n=t.options,i=t.name,s=n.offset,r=s===void 0?[0,0]:s,o=Dh.reduce(function(u,f){return u[f]=ox(f,e.rects,r),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[i]=o}const dv={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ax};function lx(t){var e=t.state,n=t.name;e.modifiersData[n]=uv({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Gh={name:"popperOffsets",enabled:!0,phase:"read",fn:lx,data:{}};function cx(t){return t==="x"?"y":"x"}function ux(t){var e=t.state,n=t.options,i=t.name,s=n.mainAxis,r=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,f=n.padding,h=n.tether,p=h===void 0?!0:h,g=n.tetherOffset,v=g===void 0?0:g,m=ho(e,{boundary:l,rootBoundary:c,padding:f,altBoundary:u}),d=oi(e.placement),T=fo(e.placement),_=!T,b=Fh(d),C=cx(b),A=e.modifiersData.popperOffsets,w=e.rects.reference,P=e.rects.popper,x=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,E=typeof x=="number"?{mainAxis:x,altAxis:x}:Object.assign({mainAxis:0,altAxis:0},x),D=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,I={x:0,y:0};if(A){if(r){var N,G=b==="y"?en:tn,q=b==="y"?xn:bn,z=b==="y"?"height":"width",K=A[b],k=K+m[G],le=K-m[q],ce=p?-P[z]/2:0,xe=T===tr?w[z]:P[z],we=T===tr?-P[z]:-w[z],je=e.elements.arrow,ne=p&&je?Uh(je):{width:0,height:0},de=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:rv(),_e=de[G],pe=de[q],Ce=ea(0,w[z],ne[z]),Pe=_?w[z]/2-ce-Ce-_e-E.mainAxis:xe-Ce-_e-E.mainAxis,De=_?-w[z]/2+ce+Ce+pe+E.mainAxis:we+Ce+pe+E.mainAxis,X=e.elements.arrow&&La(e.elements.arrow),Ue=X?b==="y"?X.clientTop||0:X.clientLeft||0:0,L=(N=D==null?void 0:D[b])!=null?N:0,U=K+Pe-L-Ue,V=K+De-L,te=ea(p?oc(k,U):k,K,p?qs(le,V):le);A[b]=te,I[b]=te-K}if(a){var M,S=b==="x"?en:tn,O=b==="x"?xn:bn,F=A[C],H=C==="y"?"height":"width",B=F+m[S],ie=F-m[O],Y=[en,tn].indexOf(d)!==-1,ae=(M=D==null?void 0:D[C])!=null?M:0,he=Y?B:F-w[H]-P[H]-ae+E.altAxis,se=Y?F+w[H]+P[H]-ae-E.altAxis:ie,fe=p&&Y?VS(he,F,se):ea(p?he:B,F,p?se:ie);A[C]=fe,I[C]=fe-F}e.modifiersData[i]=I}}const pv={name:"preventOverflow",enabled:!0,phase:"main",fn:ux,requiresIfExists:["offset"]};function fx(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function hx(t){return t===Tn(t)||!On(t)?Hh(t):fx(t)}function dx(t){var e=t.getBoundingClientRect(),n=co(e.width)/t.offsetWidth||1,i=co(e.height)/t.offsetHeight||1;return n!==1||i!==1}function px(t,e,n){n===void 0&&(n=!1);var i=On(e),s=On(e)&&dx(e),r=ys(e),o=uo(t,s,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!n)&&((ui(e)!=="body"||zh(r))&&(a=hx(e)),On(e)?(l=uo(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=Vh(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function mx(t){var e=new Map,n=new Set,i=[];t.forEach(function(r){e.set(r.name,r)});function s(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&s(l)}}),i.push(r)}return t.forEach(function(r){n.has(r.name)||s(r)}),i}function gx(t){var e=mx(t);return nv.reduce(function(n,i){return n.concat(e.filter(function(s){return s.phase===i}))},[])}function _x(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function vx(t){var e=t.reduce(function(n,i){var s=n[i.name];return n[i.name]=s?Object.assign({},s,i,{options:Object.assign({},s.options,i.options),data:Object.assign({},s.data,i.data)}):i,n},{});return Object.keys(e).map(function(n){return e[n]})}var Tp={placement:"bottom",modifiers:[],strategy:"absolute"};function Mp(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function Vc(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,i=n===void 0?[]:n,s=e.defaultOptions,r=s===void 0?Tp:s;return function(a,l,c){c===void 0&&(c=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Tp,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},f=[],h=!1,p={state:u,setOptions:function(d){var T=typeof d=="function"?d(u.options):d;v(),u.options=Object.assign({},r,u.options,T),u.scrollParents={reference:nr(a)?ta(a):a.contextElement?ta(a.contextElement):[],popper:ta(l)};var _=gx(vx([].concat(i,u.options.modifiers)));return u.orderedModifiers=_.filter(function(b){return b.enabled}),g(),p.update()},forceUpdate:function(){if(!h){var d=u.elements,T=d.reference,_=d.popper;if(Mp(T,_)){u.rects={reference:px(T,La(_),u.options.strategy==="fixed"),popper:Uh(_)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(E){return u.modifiersData[E.name]=Object.assign({},E.data)});for(var b=0;b<u.orderedModifiers.length;b++){if(u.reset===!0){u.reset=!1,b=-1;continue}var C=u.orderedModifiers[b],A=C.fn,w=C.options,P=w===void 0?{}:w,x=C.name;typeof A=="function"&&(u=A({state:u,options:P,name:x,instance:p})||u)}}}},update:_x(function(){return new Promise(function(m){p.forceUpdate(),m(u)})}),destroy:function(){v(),h=!0}};if(!Mp(a,l))return p;p.setOptions(c).then(function(m){!h&&c.onFirstUpdate&&c.onFirstUpdate(m)});function g(){u.orderedModifiers.forEach(function(m){var d=m.name,T=m.options,_=T===void 0?{}:T,b=m.effect;if(typeof b=="function"){var C=b({state:u,name:d,instance:p,options:_}),A=function(){};f.push(C||A)}})}function v(){f.forEach(function(m){return m()}),f=[]}return p}}var Ex=Vc(),yx=[kh,Gh,Bh,Oh],Sx=Vc({defaultModifiers:yx}),xx=[kh,Gh,Bh,Oh,dv,fv,pv,lv,hv],Wh=Vc({defaultModifiers:xx});const mv=Object.freeze(Object.defineProperty({__proto__:null,afterMain:J_,afterRead:Y_,afterWrite:tv,applyStyles:Oh,arrow:lv,auto:kc,basePlacements:Ro,beforeMain:K_,beforeRead:q_,beforeWrite:Q_,bottom:xn,clippingParents:$_,computeStyles:Bh,createPopper:Wh,createPopperBase:Ex,createPopperLite:Sx,detectOverflow:ho,end:lo,eventListeners:kh,flip:fv,hide:hv,left:tn,main:Z_,modifierPhases:nv,offset:dv,placements:Dh,popper:Gr,popperGenerator:Vc,popperOffsets:Gh,preventOverflow:pv,read:j_,reference:X_,right:bn,start:tr,top:en,variationPlacements:Bf,viewport:Nh,write:ev},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Bi=new Map,Cu={set(t,e,n){Bi.has(t)||Bi.set(t,new Map);const i=Bi.get(t);if(!i.has(e)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(e,n)},get(t,e){return Bi.has(t)&&Bi.get(t).get(e)||null},remove(t,e){if(!Bi.has(t))return;const n=Bi.get(t);n.delete(e),n.size===0&&Bi.delete(t)}},bx=1e6,Tx=1e3,Vf="transitionend",gv=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(e,n)=>`#${CSS.escape(n)}`)),t),Mx=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),Ax=t=>{do t+=Math.floor(Math.random()*bx);while(document.getElementById(t));return t},wx=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const i=Number.parseFloat(e),s=Number.parseFloat(n);return!i&&!s?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*Tx)},_v=t=>{t.dispatchEvent(new Event(Vf))},Ai=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),fs=t=>Ai(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(gv(t)):null,Po=t=>{if(!Ai(t)||t.getClientRects().length===0)return!1;const e=getComputedStyle(t).getPropertyValue("visibility")==="visible",n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const i=t.closest("summary");if(i&&i.parentNode!==n||i===null)return!1}return e},hs=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",vv=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?vv(t.parentNode):null},ac=()=>{},Na=t=>{t.offsetHeight},Ev=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Ru=[],Cx=t=>{document.readyState==="loading"?(Ru.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of Ru)e()}),Ru.push(t)):t()},Bn=()=>document.documentElement.dir==="rtl",Hn=t=>{Cx(()=>{const e=Ev();if(e){const n=t.NAME,i=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=i,t.jQueryInterface)}})},an=(t,e=[],n=t)=>typeof t=="function"?t(...e):n,yv=(t,e,n=!0)=>{if(!n){an(t);return}const s=wx(e)+5;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener(Vf,o),an(t))};e.addEventListener(Vf,o),setTimeout(()=>{r||_v(e)},s)},$h=(t,e,n,i)=>{const s=t.length;let r=t.indexOf(e);return r===-1?!n&&i?t[s-1]:t[0]:(r+=n?1:-1,i&&(r=(r+s)%s),t[Math.max(0,Math.min(r,s-1))])},Rx=/[^.]*(?=\..*)\.|.*/,Px=/\..*/,Lx=/::\d+$/,Pu={};let Ap=1;const Sv={mouseenter:"mouseover",mouseleave:"mouseout"},Nx=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function xv(t,e){return e&&`${e}::${Ap++}`||t.uidEvent||Ap++}function bv(t){const e=xv(t);return t.uidEvent=e,Pu[e]=Pu[e]||{},Pu[e]}function Dx(t,e){return function n(i){return Xh(i,{delegateTarget:t}),n.oneOff&&ue.off(t,i.type,e),e.apply(t,[i])}}function Ix(t,e,n){return function i(s){const r=t.querySelectorAll(e);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return Xh(s,{delegateTarget:o}),i.oneOff&&ue.off(t,s.type,e,n),n.apply(o,[s])}}function Tv(t,e,n=null){return Object.values(t).find(i=>i.callable===e&&i.delegationSelector===n)}function Mv(t,e,n){const i=typeof e=="string",s=i?n:e||n;let r=Av(t);return Nx.has(r)||(r=t),[i,s,r]}function wp(t,e,n,i,s){if(typeof e!="string"||!t)return;let[r,o,a]=Mv(e,n,i);e in Sv&&(o=(g=>function(v){if(!v.relatedTarget||v.relatedTarget!==v.delegateTarget&&!v.delegateTarget.contains(v.relatedTarget))return g.call(this,v)})(o));const l=bv(t),c=l[a]||(l[a]={}),u=Tv(c,o,r?n:null);if(u){u.oneOff=u.oneOff&&s;return}const f=xv(o,e.replace(Rx,"")),h=r?Ix(t,n,o):Dx(t,o);h.delegationSelector=r?n:null,h.callable=o,h.oneOff=s,h.uidEvent=f,c[f]=h,t.addEventListener(a,h,r)}function zf(t,e,n,i,s){const r=Tv(e[n],i,s);r&&(t.removeEventListener(n,r,!!s),delete e[n][r.uidEvent])}function Ox(t,e,n,i){const s=e[n]||{};for(const[r,o]of Object.entries(s))r.includes(i)&&zf(t,e,n,o.callable,o.delegationSelector)}function Av(t){return t=t.replace(Px,""),Sv[t]||t}const ue={on(t,e,n,i){wp(t,e,n,i,!1)},one(t,e,n,i){wp(t,e,n,i,!0)},off(t,e,n,i){if(typeof e!="string"||!t)return;const[s,r,o]=Mv(e,n,i),a=o!==e,l=bv(t),c=l[o]||{},u=e.startsWith(".");if(typeof r<"u"){if(!Object.keys(c).length)return;zf(t,l,o,r,s?n:null);return}if(u)for(const f of Object.keys(l))Ox(t,l,f,e.slice(1));for(const[f,h]of Object.entries(c)){const p=f.replace(Lx,"");(!a||e.includes(p))&&zf(t,l,o,h.callable,h.delegationSelector)}},trigger(t,e,n){if(typeof e!="string"||!t)return null;const i=Ev(),s=Av(e),r=e!==s;let o=null,a=!0,l=!0,c=!1;r&&i&&(o=i.Event(e,n),i(t).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());const u=Xh(new Event(e,{bubbles:a,cancelable:!0}),n);return c&&u.preventDefault(),l&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function Xh(t,e={}){for(const[n,i]of Object.entries(e))try{t[n]=i}catch{Object.defineProperty(t,n,{configurable:!0,get(){return i}})}return t}function Cp(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function Lu(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const wi={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${Lu(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${Lu(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter(i=>i.startsWith("bs")&&!i.startsWith("bsConfig"));for(const i of n){let s=i.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),e[s]=Cp(t.dataset[i])}return e},getDataAttribute(t,e){return Cp(t.getAttribute(`data-bs-${Lu(e)}`))}};class Da{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,n){const i=Ai(n)?wi.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof i=="object"?i:{},...Ai(n)?wi.getDataAttributes(n):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const[i,s]of Object.entries(n)){const r=e[i],o=Ai(r)?"element":Mx(r);if(!new RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${s}".`)}}}const Ux="5.3.3";class Kn extends Da{constructor(e,n){super(),e=fs(e),e&&(this._element=e,this._config=this._getConfig(n),Cu.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Cu.remove(this._element,this.constructor.DATA_KEY),ue.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,i=!0){yv(e,n,i)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return Cu.get(fs(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return Ux}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const Nu=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?n.trim():null}return e?e.split(",").map(n=>gv(n)).join(","):null},Re={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let i=t.parentNode.closest(e);for(;i;)n.push(i),i=i.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(n=>!hs(n)&&Po(n))},getSelectorFromElement(t){const e=Nu(t);return e&&Re.findOne(e)?e:null},getElementFromSelector(t){const e=Nu(t);return e?Re.findOne(e):null},getMultipleElementsFromSelector(t){const e=Nu(t);return e?Re.find(e):[]}},zc=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,i=t.NAME;ue.on(document,n,`[data-bs-dismiss="${i}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),hs(this))return;const r=Re.getElementFromSelector(this)||this.closest(`.${i}`);t.getOrCreateInstance(r)[e]()})},Fx="alert",Bx="bs.alert",wv=`.${Bx}`,kx=`close${wv}`,Hx=`closed${wv}`,Vx="fade",zx="show";class Gc extends Kn{static get NAME(){return Fx}close(){if(ue.trigger(this._element,kx).defaultPrevented)return;this._element.classList.remove(zx);const n=this._element.classList.contains(Vx);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),ue.trigger(this._element,Hx),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=Gc.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}zc(Gc,"close");Hn(Gc);const Gx="button",Wx="bs.button",$x=`.${Wx}`,Xx=".data-api",qx="active",Rp='[data-bs-toggle="button"]',jx=`click${$x}${Xx}`;class Wc extends Kn{static get NAME(){return Gx}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(qx))}static jQueryInterface(e){return this.each(function(){const n=Wc.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}ue.on(document,jx,Rp,t=>{t.preventDefault();const e=t.target.closest(Rp);Wc.getOrCreateInstance(e).toggle()});Hn(Wc);const Yx="swipe",Lo=".bs.swipe",Kx=`touchstart${Lo}`,Zx=`touchmove${Lo}`,Jx=`touchend${Lo}`,Qx=`pointerdown${Lo}`,eb=`pointerup${Lo}`,tb="touch",nb="pen",ib="pointer-event",sb=40,rb={endCallback:null,leftCallback:null,rightCallback:null},ob={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class lc extends Da{constructor(e,n){super(),this._element=e,!(!e||!lc.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return rb}static get DefaultType(){return ob}static get NAME(){return Yx}dispose(){ue.off(this._element,Lo)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),an(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=sb)return;const n=e/this._deltaX;this._deltaX=0,n&&an(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(ue.on(this._element,Qx,e=>this._start(e)),ue.on(this._element,eb,e=>this._end(e)),this._element.classList.add(ib)):(ue.on(this._element,Kx,e=>this._start(e)),ue.on(this._element,Zx,e=>this._move(e)),ue.on(this._element,Jx,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===nb||e.pointerType===tb)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ab="carousel",lb="bs.carousel",Ss=`.${lb}`,Cv=".data-api",cb="ArrowLeft",ub="ArrowRight",fb=500,zo="next",Sr="prev",Wr="left",Xl="right",hb=`slide${Ss}`,Du=`slid${Ss}`,db=`keydown${Ss}`,pb=`mouseenter${Ss}`,mb=`mouseleave${Ss}`,gb=`dragstart${Ss}`,_b=`load${Ss}${Cv}`,vb=`click${Ss}${Cv}`,Rv="carousel",el="active",Eb="slide",yb="carousel-item-end",Sb="carousel-item-start",xb="carousel-item-next",bb="carousel-item-prev",Pv=".active",Lv=".carousel-item",Tb=Pv+Lv,Mb=".carousel-item img",Ab=".carousel-indicators",wb="[data-bs-slide], [data-bs-slide-to]",Cb='[data-bs-ride="carousel"]',Rb={[cb]:Xl,[ub]:Wr},Pb={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Lb={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ia extends Kn{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Re.findOne(Ab,this._element),this._addEventListeners(),this._config.ride===Rv&&this.cycle()}static get Default(){return Pb}static get DefaultType(){return Lb}static get NAME(){return ab}next(){this._slide(zo)}nextWhenVisible(){!document.hidden&&Po(this._element)&&this.next()}prev(){this._slide(Sr)}pause(){this._isSliding&&_v(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){ue.one(this._element,Du,()=>this.cycle());return}this.cycle()}}to(e){const n=this._getItems();if(e>n.length-1||e<0)return;if(this._isSliding){ue.one(this._element,Du,()=>this.to(e));return}const i=this._getItemIndex(this._getActive());if(i===e)return;const s=e>i?zo:Sr;this._slide(s,n[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&ue.on(this._element,db,e=>this._keydown(e)),this._config.pause==="hover"&&(ue.on(this._element,pb,()=>this.pause()),ue.on(this._element,mb,()=>this._maybeEnableCycle())),this._config.touch&&lc.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const i of Re.find(Mb,this._element))ue.on(i,gb,s=>s.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(Wr)),rightCallback:()=>this._slide(this._directionToOrder(Xl)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),fb+this._config.interval))}};this._swipeHelper=new lc(this._element,n)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=Rb[e.key];n&&(e.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const n=Re.findOne(Pv,this._indicatorsElement);n.classList.remove(el),n.removeAttribute("aria-current");const i=Re.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);i&&(i.classList.add(el),i.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(e,n=null){if(this._isSliding)return;const i=this._getActive(),s=e===zo,r=n||$h(this._getItems(),i,s,this._config.wrap);if(r===i)return;const o=this._getItemIndex(r),a=p=>ue.trigger(this._element,p,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(i),to:o});if(a(hb).defaultPrevented||!i||!r)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const u=s?Sb:yb,f=s?xb:bb;r.classList.add(f),Na(r),i.classList.add(u),r.classList.add(u);const h=()=>{r.classList.remove(u,f),r.classList.add(el),i.classList.remove(el,f,u),this._isSliding=!1,a(Du)};this._queueCallback(h,i,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(Eb)}_getActive(){return Re.findOne(Tb,this._element)}_getItems(){return Re.find(Lv,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return Bn()?e===Wr?Sr:zo:e===Wr?zo:Sr}_orderToDirection(e){return Bn()?e===Sr?Wr:Xl:e===Sr?Xl:Wr}static jQueryInterface(e){return this.each(function(){const n=Ia.getOrCreateInstance(this,e);if(typeof e=="number"){n.to(e);return}if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}ue.on(document,vb,wb,function(t){const e=Re.getElementFromSelector(this);if(!e||!e.classList.contains(Rv))return;t.preventDefault();const n=Ia.getOrCreateInstance(e),i=this.getAttribute("data-bs-slide-to");if(i){n.to(i),n._maybeEnableCycle();return}if(wi.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});ue.on(window,_b,()=>{const t=Re.find(Cb);for(const e of t)Ia.getOrCreateInstance(e)});Hn(Ia);const Nb="collapse",Db="bs.collapse",Oa=`.${Db}`,Ib=".data-api",Ob=`show${Oa}`,Ub=`shown${Oa}`,Fb=`hide${Oa}`,Bb=`hidden${Oa}`,kb=`click${Oa}${Ib}`,Iu="show",jr="collapse",tl="collapsing",Hb="collapsed",Vb=`:scope .${jr} .${jr}`,zb="collapse-horizontal",Gb="width",Wb="height",$b=".collapse.show, .collapse.collapsing",Gf='[data-bs-toggle="collapse"]',Xb={parent:null,toggle:!0},qb={parent:"(null|element)",toggle:"boolean"};class ha extends Kn{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const i=Re.find(Gf);for(const s of i){const r=Re.getSelectorFromElement(s),o=Re.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Xb}static get DefaultType(){return qb}static get NAME(){return Nb}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren($b).filter(a=>a!==this._element).map(a=>ha.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||ue.trigger(this._element,Ob).defaultPrevented)return;for(const a of e)a.hide();const i=this._getDimension();this._element.classList.remove(jr),this._element.classList.add(tl),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(tl),this._element.classList.add(jr,Iu),this._element.style[i]="",ue.trigger(this._element,Ub)},o=`scroll${i[0].toUpperCase()+i.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[i]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||ue.trigger(this._element,Fb).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Na(this._element),this._element.classList.add(tl),this._element.classList.remove(jr,Iu);for(const s of this._triggerArray){const r=Re.getElementFromSelector(s);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(tl),this._element.classList.add(jr),ue.trigger(this._element,Bb)};this._element.style[n]="",this._queueCallback(i,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Iu)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=fs(e.parent),e}_getDimension(){return this._element.classList.contains(zb)?Gb:Wb}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Gf);for(const n of e){const i=Re.getElementFromSelector(n);i&&this._addAriaAndCollapsedClass([n],this._isShown(i))}}_getFirstLevelChildren(e){const n=Re.find(Vb,this._config.parent);return Re.find(e,this._config.parent).filter(i=>!n.includes(i))}_addAriaAndCollapsedClass(e,n){if(e.length)for(const i of e)i.classList.toggle(Hb,!n),i.setAttribute("aria-expanded",n)}static jQueryInterface(e){const n={};return typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1),this.each(function(){const i=ha.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof i[e]>"u")throw new TypeError(`No method named "${e}"`);i[e]()}})}}ue.on(document,kb,Gf,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();for(const e of Re.getMultipleElementsFromSelector(this))ha.getOrCreateInstance(e,{toggle:!1}).toggle()});Hn(ha);const Pp="dropdown",jb="bs.dropdown",fr=`.${jb}`,qh=".data-api",Yb="Escape",Lp="Tab",Kb="ArrowUp",Np="ArrowDown",Zb=2,Jb=`hide${fr}`,Qb=`hidden${fr}`,eT=`show${fr}`,tT=`shown${fr}`,Nv=`click${fr}${qh}`,Dv=`keydown${fr}${qh}`,nT=`keyup${fr}${qh}`,$r="show",iT="dropup",sT="dropend",rT="dropstart",oT="dropup-center",aT="dropdown-center",Hs='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',lT=`${Hs}.${$r}`,ql=".dropdown-menu",cT=".navbar",uT=".navbar-nav",fT=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",hT=Bn()?"top-end":"top-start",dT=Bn()?"top-start":"top-end",pT=Bn()?"bottom-end":"bottom-start",mT=Bn()?"bottom-start":"bottom-end",gT=Bn()?"left-start":"right-start",_T=Bn()?"right-start":"left-start",vT="top",ET="bottom",yT={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ST={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ai extends Kn{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=Re.next(this._element,ql)[0]||Re.prev(this._element,ql)[0]||Re.findOne(ql,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return yT}static get DefaultType(){return ST}static get NAME(){return Pp}toggle(){return this._isShown()?this.hide():this.show()}show(){if(hs(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!ue.trigger(this._element,eT,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(uT))for(const i of[].concat(...document.body.children))ue.on(i,"mouseover",ac);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add($r),this._element.classList.add($r),ue.trigger(this._element,tT,e)}}hide(){if(hs(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!ue.trigger(this._element,Jb,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))ue.off(i,"mouseover",ac);this._popper&&this._popper.destroy(),this._menu.classList.remove($r),this._element.classList.remove($r),this._element.setAttribute("aria-expanded","false"),wi.removeDataAttribute(this._menu,"popper"),ue.trigger(this._element,Qb,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!Ai(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Pp.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof mv>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:Ai(this._config.reference)?e=fs(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const n=this._getPopperConfig();this._popper=Wh(e,this._menu,n)}_isShown(){return this._menu.classList.contains($r)}_getPlacement(){const e=this._parent;if(e.classList.contains(sT))return gT;if(e.classList.contains(rT))return _T;if(e.classList.contains(oT))return vT;if(e.classList.contains(aT))return ET;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(iT)?n?dT:hT:n?mT:pT}_detectNavbar(){return this._element.closest(cT)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(wi.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...an(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:n}){const i=Re.find(fT,this._menu).filter(s=>Po(s));i.length&&$h(i,n,e===Np,!i.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=ai.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e.button===Zb||e.type==="keyup"&&e.key!==Lp)return;const n=Re.find(lT);for(const i of n){const s=ai.getInstance(i);if(!s||s._config.autoClose===!1)continue;const r=e.composedPath(),o=r.includes(s._menu);if(r.includes(s._element)||s._config.autoClose==="inside"&&!o||s._config.autoClose==="outside"&&o||s._menu.contains(e.target)&&(e.type==="keyup"&&e.key===Lp||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:s._element};e.type==="click"&&(a.clickEvent=e),s._completeHide(a)}}static dataApiKeydownHandler(e){const n=/input|textarea/i.test(e.target.tagName),i=e.key===Yb,s=[Kb,Np].includes(e.key);if(!s&&!i||n&&!i)return;e.preventDefault();const r=this.matches(Hs)?this:Re.prev(this,Hs)[0]||Re.next(this,Hs)[0]||Re.findOne(Hs,e.delegateTarget.parentNode),o=ai.getOrCreateInstance(r);if(s){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),r.focus())}}ue.on(document,Dv,Hs,ai.dataApiKeydownHandler);ue.on(document,Dv,ql,ai.dataApiKeydownHandler);ue.on(document,Nv,ai.clearMenus);ue.on(document,nT,ai.clearMenus);ue.on(document,Nv,Hs,function(t){t.preventDefault(),ai.getOrCreateInstance(this).toggle()});Hn(ai);const Iv="backdrop",xT="fade",Dp="show",Ip=`mousedown.bs.${Iv}`,bT={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},TT={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ov extends Da{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return bT}static get DefaultType(){return TT}static get NAME(){return Iv}show(e){if(!this._config.isVisible){an(e);return}this._append();const n=this._getElement();this._config.isAnimated&&Na(n),n.classList.add(Dp),this._emulateAnimation(()=>{an(e)})}hide(e){if(!this._config.isVisible){an(e);return}this._getElement().classList.remove(Dp),this._emulateAnimation(()=>{this.dispose(),an(e)})}dispose(){this._isAppended&&(ue.off(this._element,Ip),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(xT),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=fs(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),ue.on(e,Ip,()=>{an(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){yv(e,this._getElement(),this._config.isAnimated)}}const MT="focustrap",AT="bs.focustrap",cc=`.${AT}`,wT=`focusin${cc}`,CT=`keydown.tab${cc}`,RT="Tab",PT="forward",Op="backward",LT={autofocus:!0,trapElement:null},NT={autofocus:"boolean",trapElement:"element"};class Uv extends Da{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return LT}static get DefaultType(){return NT}static get NAME(){return MT}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),ue.off(document,cc),ue.on(document,wT,e=>this._handleFocusin(e)),ue.on(document,CT,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,ue.off(document,cc))}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const i=Re.focusableChildren(n);i.length===0?n.focus():this._lastTabNavDirection===Op?i[i.length-1].focus():i[0].focus()}_handleKeydown(e){e.key===RT&&(this._lastTabNavDirection=e.shiftKey?Op:PT)}}const Up=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Fp=".sticky-top",nl="padding-right",Bp="margin-right";class Wf{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,nl,n=>n+e),this._setElementAttributes(Up,nl,n=>n+e),this._setElementAttributes(Fp,Bp,n=>n-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,nl),this._resetElementAttributes(Up,nl),this._resetElementAttributes(Fp,Bp)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,i){const s=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+s)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${i(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,n){const i=e.style.getPropertyValue(n);i&&wi.setDataAttribute(e,n,i)}_resetElementAttributes(e,n){const i=s=>{const r=wi.getDataAttribute(s,n);if(r===null){s.style.removeProperty(n);return}wi.removeDataAttribute(s,n),s.style.setProperty(n,r)};this._applyManipulationCallback(e,i)}_applyManipulationCallback(e,n){if(Ai(e)){n(e);return}for(const i of Re.find(e,this._element))n(i)}}const DT="modal",IT="bs.modal",kn=`.${IT}`,OT=".data-api",UT="Escape",FT=`hide${kn}`,BT=`hidePrevented${kn}`,Fv=`hidden${kn}`,Bv=`show${kn}`,kT=`shown${kn}`,HT=`resize${kn}`,VT=`click.dismiss${kn}`,zT=`mousedown.dismiss${kn}`,GT=`keydown.dismiss${kn}`,WT=`click${kn}${OT}`,kp="modal-open",$T="fade",Hp="show",Ou="modal-static",XT=".modal.show",qT=".modal-dialog",jT=".modal-body",YT='[data-bs-toggle="modal"]',KT={backdrop:!0,focus:!0,keyboard:!0},ZT={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class po extends Kn{constructor(e,n){super(e,n),this._dialog=Re.findOne(qT,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Wf,this._addEventListeners()}static get Default(){return KT}static get DefaultType(){return ZT}static get NAME(){return DT}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||ue.trigger(this._element,Bv,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(kp),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||ue.trigger(this._element,FT).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Hp),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){ue.off(window,kn),ue.off(this._dialog,kn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ov({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Uv({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=Re.findOne(jT,this._dialog);n&&(n.scrollTop=0),Na(this._element),this._element.classList.add(Hp);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,ue.trigger(this._element,kT,{relatedTarget:e})};this._queueCallback(i,this._dialog,this._isAnimated())}_addEventListeners(){ue.on(this._element,GT,e=>{if(e.key===UT){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),ue.on(window,HT,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),ue.on(this._element,zT,e=>{ue.one(this._element,VT,n=>{if(!(this._element!==e.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(kp),this._resetAdjustments(),this._scrollBar.reset(),ue.trigger(this._element,Fv)})}_isAnimated(){return this._element.classList.contains($T)}_triggerBackdropTransition(){if(ue.trigger(this._element,BT).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;i==="hidden"||this._element.classList.contains(Ou)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Ou),this._queueCallback(()=>{this._element.classList.remove(Ou),this._queueCallback(()=>{this._element.style.overflowY=i},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),i=n>0;if(i&&!e){const s=Bn()?"paddingLeft":"paddingRight";this._element.style[s]=`${n}px`}if(!i&&e){const s=Bn()?"paddingRight":"paddingLeft";this._element.style[s]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const i=po.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof i[e]>"u")throw new TypeError(`No method named "${e}"`);i[e](n)}})}}ue.on(document,WT,YT,function(t){const e=Re.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),ue.one(e,Bv,s=>{s.defaultPrevented||ue.one(e,Fv,()=>{Po(this)&&this.focus()})});const n=Re.findOne(XT);n&&po.getInstance(n).hide(),po.getOrCreateInstance(e).toggle(this)});zc(po);Hn(po);const JT="offcanvas",QT="bs.offcanvas",Di=`.${QT}`,kv=".data-api",eM=`load${Di}${kv}`,tM="Escape",Vp="show",zp="showing",Gp="hiding",nM="offcanvas-backdrop",Hv=".offcanvas.show",iM=`show${Di}`,sM=`shown${Di}`,rM=`hide${Di}`,Wp=`hidePrevented${Di}`,Vv=`hidden${Di}`,oM=`resize${Di}`,aM=`click${Di}${kv}`,lM=`keydown.dismiss${Di}`,cM='[data-bs-toggle="offcanvas"]',uM={backdrop:!0,keyboard:!0,scroll:!1},fM={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class ds extends Kn{constructor(e,n){super(e,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return uM}static get DefaultType(){return fM}static get NAME(){return JT}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||ue.trigger(this._element,iM,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Wf().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(zp);const i=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Vp),this._element.classList.remove(zp),ue.trigger(this._element,sM,{relatedTarget:e})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown||ue.trigger(this._element,rM).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Gp),this._backdrop.hide();const n=()=>{this._element.classList.remove(Vp,Gp),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Wf().reset(),ue.trigger(this._element,Vv)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){ue.trigger(this._element,Wp);return}this.hide()},n=!!this._config.backdrop;return new Ov({className:nM,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?e:null})}_initializeFocusTrap(){return new Uv({trapElement:this._element})}_addEventListeners(){ue.on(this._element,lM,e=>{if(e.key===tM){if(this._config.keyboard){this.hide();return}ue.trigger(this._element,Wp)}})}static jQueryInterface(e){return this.each(function(){const n=ds.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}ue.on(document,aM,cM,function(t){const e=Re.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),hs(this))return;ue.one(e,Vv,()=>{Po(this)&&this.focus()});const n=Re.findOne(Hv);n&&n!==e&&ds.getInstance(n).hide(),ds.getOrCreateInstance(e).toggle(this)});ue.on(window,eM,()=>{for(const t of Re.find(Hv))ds.getOrCreateInstance(t).show()});ue.on(window,oM,()=>{for(const t of Re.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&ds.getOrCreateInstance(t).hide()});zc(ds);Hn(ds);const hM=/^aria-[\w-]*$/i,zv={"*":["class","dir","id","lang","role",hM],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},dM=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),pM=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,mM=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?dM.has(n)?!!pM.test(t.nodeValue):!0:e.filter(i=>i instanceof RegExp).some(i=>i.test(n))};function gM(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const s=new window.DOMParser().parseFromString(t,"text/html"),r=[].concat(...s.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(e["*"]||[],e[a]||[]);for(const u of l)mM(u,c)||o.removeAttribute(u.nodeName)}return s.body.innerHTML}const _M="TemplateFactory",vM={allowList:zv,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},EM={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},yM={entry:"(string|element|function|null)",selector:"(string|element)"};class SM extends Da{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return vM}static get DefaultType(){return EM}static get NAME(){return _M}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[s,r]of Object.entries(this._config.content))this._setContent(e,r,s);const n=e.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&n.classList.add(...i.split(" ")),n}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[n,i]of Object.entries(e))super._typeCheckConfig({selector:n,entry:i},yM)}_setContent(e,n,i){const s=Re.findOne(i,e);if(s){if(n=this._resolvePossibleFunction(n),!n){s.remove();return}if(Ai(n)){this._putElementInTemplate(fs(n),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(n);return}s.textContent=n}}_maybeSanitize(e){return this._config.sanitize?gM(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return an(e,[this])}_putElementInTemplate(e,n){if(this._config.html){n.innerHTML="",n.append(e);return}n.textContent=e.textContent}}const xM="tooltip",bM=new Set(["sanitize","allowList","sanitizeFn"]),Uu="fade",TM="modal",il="show",MM=".tooltip-inner",$p=`.${TM}`,Xp="hide.bs.modal",Go="hover",Fu="focus",AM="click",wM="manual",CM="hide",RM="hidden",PM="show",LM="shown",NM="inserted",DM="click",IM="focusin",OM="focusout",UM="mouseenter",FM="mouseleave",BM={AUTO:"auto",TOP:"top",RIGHT:Bn()?"left":"right",BOTTOM:"bottom",LEFT:Bn()?"right":"left"},kM={allowList:zv,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},HM={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class No extends Kn{constructor(e,n){if(typeof mv>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return kM}static get DefaultType(){return HM}static get NAME(){return xM}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),ue.off(this._element.closest($p),Xp,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=ue.trigger(this._element,this.constructor.eventName(PM)),i=(vv(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!i)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(s),ue.trigger(this._element,this.constructor.eventName(NM))),this._popper=this._createPopper(s),s.classList.add(il),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))ue.on(a,"mouseover",ac);const o=()=>{ue.trigger(this._element,this.constructor.eventName(LM)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||ue.trigger(this._element,this.constructor.eventName(CM)).defaultPrevented)return;if(this._getTipElement().classList.remove(il),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))ue.off(s,"mouseover",ac);this._activeTrigger[AM]=!1,this._activeTrigger[Fu]=!1,this._activeTrigger[Go]=!1,this._isHovered=null;const i=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),ue.trigger(this._element,this.constructor.eventName(RM)))};this._queueCallback(i,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const n=this._getTemplateFactory(e).toHtml();if(!n)return null;n.classList.remove(Uu,il),n.classList.add(`bs-${this.constructor.NAME}-auto`);const i=Ax(this.constructor.NAME).toString();return n.setAttribute("id",i),this._isAnimated()&&n.classList.add(Uu),n}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new SM({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[MM]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Uu)}_isShown(){return this.tip&&this.tip.classList.contains(il)}_createPopper(e){const n=an(this._config.placement,[this,e,this._element]),i=BM[n.toUpperCase()];return Wh(this._element,e,this._getPopperConfig(i))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return an(e,[this._element])}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:i=>{this._getTipElement().setAttribute("data-popper-placement",i.state.placement)}}]};return{...n,...an(this._config.popperConfig,[n])}}_setListeners(){const e=this._config.trigger.split(" ");for(const n of e)if(n==="click")ue.on(this._element,this.constructor.eventName(DM),this._config.selector,i=>{this._initializeOnDelegatedTarget(i).toggle()});else if(n!==wM){const i=n===Go?this.constructor.eventName(UM):this.constructor.eventName(IM),s=n===Go?this.constructor.eventName(FM):this.constructor.eventName(OM);ue.on(this._element,i,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?Fu:Go]=!0,o._enter()}),ue.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?Fu:Go]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},ue.on(this._element.closest($p),Xp,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(e,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const n=wi.getDataAttributes(this._element);for(const i of Object.keys(n))bM.has(i)&&delete n[i];return e={...n,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:fs(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[n,i]of Object.entries(this._config))this.constructor.Default[n]!==i&&(e[n]=i);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const n=No.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}Hn(No);const VM="popover",zM=".popover-header",GM=".popover-body",WM={...No.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},$M={...No.DefaultType,content:"(null|string|element|function)"};class jh extends No{static get Default(){return WM}static get DefaultType(){return $M}static get NAME(){return VM}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[zM]:this._getTitle(),[GM]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const n=jh.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}Hn(jh);const XM="scrollspy",qM="bs.scrollspy",Yh=`.${qM}`,jM=".data-api",YM=`activate${Yh}`,qp=`click${Yh}`,KM=`load${Yh}${jM}`,ZM="dropdown-item",xr="active",JM='[data-bs-spy="scroll"]',Bu="[href]",QM=".nav, .list-group",jp=".nav-link",eA=".nav-item",tA=".list-group-item",nA=`${jp}, ${eA} > ${jp}, ${tA}`,iA=".dropdown",sA=".dropdown-toggle",rA={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},oA={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class $c extends Kn{constructor(e,n){super(e,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return rA}static get DefaultType(){return oA}static get NAME(){return XM}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=fs(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(n=>Number.parseFloat(n))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(ue.off(this._config.target,qp),ue.on(this._config.target,qp,Bu,e=>{const n=this._observableSections.get(e.target.hash);if(n){e.preventDefault();const i=this._rootElement||window,s=n.offsetTop-this._element.offsetTop;if(i.scrollTo){i.scrollTo({top:s,behavior:"smooth"});return}i.scrollTop=s}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),e)}_observerCallback(e){const n=o=>this._targetLinks.get(`#${o.target.id}`),i=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},s=(this._rootElement||document.documentElement).scrollTop,r=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(i(o),!s)return;continue}!r&&!a&&i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=Re.find(Bu,this._config.target);for(const n of e){if(!n.hash||hs(n))continue;const i=Re.findOne(decodeURI(n.hash),this._element);Po(i)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,i))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(xr),this._activateParents(e),ue.trigger(this._element,YM,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(ZM)){Re.findOne(sA,e.closest(iA)).classList.add(xr);return}for(const n of Re.parents(e,QM))for(const i of Re.prev(n,nA))i.classList.add(xr)}_clearActiveClass(e){e.classList.remove(xr);const n=Re.find(`${Bu}.${xr}`,e);for(const i of n)i.classList.remove(xr)}static jQueryInterface(e){return this.each(function(){const n=$c.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}ue.on(window,KM,()=>{for(const t of Re.find(JM))$c.getOrCreateInstance(t)});Hn($c);const aA="tab",lA="bs.tab",hr=`.${lA}`,cA=`hide${hr}`,uA=`hidden${hr}`,fA=`show${hr}`,hA=`shown${hr}`,dA=`click${hr}`,pA=`keydown${hr}`,mA=`load${hr}`,gA="ArrowLeft",Yp="ArrowRight",_A="ArrowUp",Kp="ArrowDown",ku="Home",Zp="End",Vs="active",Jp="fade",Hu="show",vA="dropdown",Gv=".dropdown-toggle",EA=".dropdown-menu",Vu=`:not(${Gv})`,yA='.list-group, .nav, [role="tablist"]',SA=".nav-item, .list-group-item",xA=`.nav-link${Vu}, .list-group-item${Vu}, [role="tab"]${Vu}`,Wv='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',zu=`${xA}, ${Wv}`,bA=`.${Vs}[data-bs-toggle="tab"], .${Vs}[data-bs-toggle="pill"], .${Vs}[data-bs-toggle="list"]`;class mo extends Kn{constructor(e){super(e),this._parent=this._element.closest(yA),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),ue.on(this._element,pA,n=>this._keydown(n)))}static get NAME(){return aA}show(){const e=this._element;if(this._elemIsActive(e))return;const n=this._getActiveElem(),i=n?ue.trigger(n,cA,{relatedTarget:e}):null;ue.trigger(e,fA,{relatedTarget:n}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(n,e),this._activate(e,n))}_activate(e,n){if(!e)return;e.classList.add(Vs),this._activate(Re.getElementFromSelector(e));const i=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(Hu);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),ue.trigger(e,hA,{relatedTarget:n})};this._queueCallback(i,e,e.classList.contains(Jp))}_deactivate(e,n){if(!e)return;e.classList.remove(Vs),e.blur(),this._deactivate(Re.getElementFromSelector(e));const i=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(Hu);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),ue.trigger(e,uA,{relatedTarget:n})};this._queueCallback(i,e,e.classList.contains(Jp))}_keydown(e){if(![gA,Yp,_A,Kp,ku,Zp].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=this._getChildren().filter(s=>!hs(s));let i;if([ku,Zp].includes(e.key))i=n[e.key===ku?0:n.length-1];else{const s=[Yp,Kp].includes(e.key);i=$h(n,e.target,s,!0)}i&&(i.focus({preventScroll:!0}),mo.getOrCreateInstance(i).show())}_getChildren(){return Re.find(zu,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,n){this._setAttributeIfNotExists(e,"role","tablist");for(const i of n)this._setInitialAttributesOnChild(i)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const n=this._elemIsActive(e),i=this._getOuterElement(e);e.setAttribute("aria-selected",n),i!==e&&this._setAttributeIfNotExists(i,"role","presentation"),n||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=Re.getElementFromSelector(e);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,n){const i=this._getOuterElement(e);if(!i.classList.contains(vA))return;const s=(r,o)=>{const a=Re.findOne(r,i);a&&a.classList.toggle(o,n)};s(Gv,Vs),s(EA,Hu),i.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,n,i){e.hasAttribute(n)||e.setAttribute(n,i)}_elemIsActive(e){return e.classList.contains(Vs)}_getInnerElement(e){return e.matches(zu)?e:Re.findOne(zu,e)}_getOuterElement(e){return e.closest(SA)||e}static jQueryInterface(e){return this.each(function(){const n=mo.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}ue.on(document,dA,Wv,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!hs(this)&&mo.getOrCreateInstance(this).show()});ue.on(window,mA,()=>{for(const t of Re.find(bA))mo.getOrCreateInstance(t)});Hn(mo);const TA="toast",MA="bs.toast",xs=`.${MA}`,AA=`mouseover${xs}`,wA=`mouseout${xs}`,CA=`focusin${xs}`,RA=`focusout${xs}`,PA=`hide${xs}`,LA=`hidden${xs}`,NA=`show${xs}`,DA=`shown${xs}`,IA="fade",Qp="hide",sl="show",rl="showing",OA={animation:"boolean",autohide:"boolean",delay:"number"},UA={animation:!0,autohide:!0,delay:5e3};class Xc extends Kn{constructor(e,n){super(e,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return UA}static get DefaultType(){return OA}static get NAME(){return TA}show(){if(ue.trigger(this._element,NA).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(IA);const n=()=>{this._element.classList.remove(rl),ue.trigger(this._element,DA),this._maybeScheduleHide()};this._element.classList.remove(Qp),Na(this._element),this._element.classList.add(sl,rl),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||ue.trigger(this._element,PA).defaultPrevented)return;const n=()=>{this._element.classList.add(Qp),this._element.classList.remove(rl,sl),ue.trigger(this._element,LA)};this._element.classList.add(rl),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(sl),super.dispose()}isShown(){return this._element.classList.contains(sl)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const i=e.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){ue.on(this._element,AA,e=>this._onInteraction(e,!0)),ue.on(this._element,wA,e=>this._onInteraction(e,!1)),ue.on(this._element,CA,e=>this._onInteraction(e,!0)),ue.on(this._element,RA,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=Xc.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}zc(Xc);Hn(Xc);function $v(t,e){return function(){return t.apply(e,arguments)}}const{toString:FA}=Object.prototype,{getPrototypeOf:Kh}=Object,qc=(t=>e=>{const n=FA.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),hi=t=>(t=t.toLowerCase(),e=>qc(e)===t),jc=t=>e=>typeof e===t,{isArray:Do}=Array,da=jc("undefined");function BA(t){return t!==null&&!da(t)&&t.constructor!==null&&!da(t.constructor)&&Un(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Xv=hi("ArrayBuffer");function kA(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Xv(t.buffer),e}const HA=jc("string"),Un=jc("function"),qv=jc("number"),Yc=t=>t!==null&&typeof t=="object",VA=t=>t===!0||t===!1,jl=t=>{if(qc(t)!=="object")return!1;const e=Kh(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},zA=hi("Date"),GA=hi("File"),WA=hi("Blob"),$A=hi("FileList"),XA=t=>Yc(t)&&Un(t.pipe),qA=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Un(t.append)&&((e=qc(t))==="formdata"||e==="object"&&Un(t.toString)&&t.toString()==="[object FormData]"))},jA=hi("URLSearchParams"),YA=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ua(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),Do(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function jv(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const Yv=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Kv=t=>!da(t)&&t!==Yv;function $f(){const{caseless:t}=Kv(this)&&this||{},e={},n=(i,s)=>{const r=t&&jv(e,s)||s;jl(e[r])&&jl(i)?e[r]=$f(e[r],i):jl(i)?e[r]=$f({},i):Do(i)?e[r]=i.slice():e[r]=i};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&Ua(arguments[i],n);return e}const KA=(t,e,n,{allOwnKeys:i}={})=>(Ua(e,(s,r)=>{n&&Un(s)?t[r]=$v(s,n):t[r]=s},{allOwnKeys:i}),t),ZA=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),JA=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},QA=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Kh(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},ew=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},tw=t=>{if(!t)return null;if(Do(t))return t;let e=t.length;if(!qv(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},nw=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Kh(Uint8Array)),iw=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},sw=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},rw=hi("HTMLFormElement"),ow=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),em=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),aw=hi("RegExp"),Zv=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Ua(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},lw=t=>{Zv(t,(e,n)=>{if(Un(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(Un(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},cw=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return Do(t)?i(t):i(String(t).split(e)),n},uw=()=>{},fw=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Gu="abcdefghijklmnopqrstuvwxyz",tm="0123456789",Jv={DIGIT:tm,ALPHA:Gu,ALPHA_DIGIT:Gu+Gu.toUpperCase()+tm},hw=(t=16,e=Jv.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function dw(t){return!!(t&&Un(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const pw=t=>{const e=new Array(10),n=(i,s)=>{if(Yc(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[s]=i;const r=Do(i)?[]:{};return Ua(i,(o,a)=>{const l=n(o,s+1);!da(l)&&(r[a]=l)}),e[s]=void 0,r}}return i};return n(t,0)},mw=hi("AsyncFunction"),gw=t=>t&&(Yc(t)||Un(t))&&Un(t.then)&&Un(t.catch),oe={isArray:Do,isArrayBuffer:Xv,isBuffer:BA,isFormData:qA,isArrayBufferView:kA,isString:HA,isNumber:qv,isBoolean:VA,isObject:Yc,isPlainObject:jl,isUndefined:da,isDate:zA,isFile:GA,isBlob:WA,isRegExp:aw,isFunction:Un,isStream:XA,isURLSearchParams:jA,isTypedArray:nw,isFileList:$A,forEach:Ua,merge:$f,extend:KA,trim:YA,stripBOM:ZA,inherits:JA,toFlatObject:QA,kindOf:qc,kindOfTest:hi,endsWith:ew,toArray:tw,forEachEntry:iw,matchAll:sw,isHTMLForm:rw,hasOwnProperty:em,hasOwnProp:em,reduceDescriptors:Zv,freezeMethods:lw,toObjectSet:cw,toCamelCase:ow,noop:uw,toFiniteNumber:fw,findKey:jv,global:Yv,isContextDefined:Kv,ALPHABET:Jv,generateString:hw,isSpecCompliantForm:dw,toJSONObject:pw,isAsyncFn:mw,isThenable:gw};function tt(t,e,n,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),s&&(this.response=s)}oe.inherits(tt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:oe.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Qv=tt.prototype,eE={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{eE[t]={value:t}});Object.defineProperties(tt,eE);Object.defineProperty(Qv,"isAxiosError",{value:!0});tt.from=(t,e,n,i,s,r)=>{const o=Object.create(Qv);return oe.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),tt.call(o,t.message,e,n,i,s),o.cause=t,o.name=t.name,r&&Object.assign(o,r),o};const _w=null;function Xf(t){return oe.isPlainObject(t)||oe.isArray(t)}function tE(t){return oe.endsWith(t,"[]")?t.slice(0,-2):t}function nm(t,e,n){return t?t.concat(e).map(function(s,r){return s=tE(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function vw(t){return oe.isArray(t)&&!t.some(Xf)}const Ew=oe.toFlatObject(oe,{},null,function(e){return/^is[A-Z]/.test(e)});function Kc(t,e,n){if(!oe.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=oe.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!oe.isUndefined(m[v])});const i=n.metaTokens,s=n.visitor||u,r=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&oe.isSpecCompliantForm(e);if(!oe.isFunction(s))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(oe.isDate(g))return g.toISOString();if(!l&&oe.isBlob(g))throw new tt("Blob is not supported. Use a Buffer instead.");return oe.isArrayBuffer(g)||oe.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,v,m){let d=g;if(g&&!m&&typeof g=="object"){if(oe.endsWith(v,"{}"))v=i?v:v.slice(0,-2),g=JSON.stringify(g);else if(oe.isArray(g)&&vw(g)||(oe.isFileList(g)||oe.endsWith(v,"[]"))&&(d=oe.toArray(g)))return v=tE(v),d.forEach(function(_,b){!(oe.isUndefined(_)||_===null)&&e.append(o===!0?nm([v],b,r):o===null?v:v+"[]",c(_))}),!1}return Xf(g)?!0:(e.append(nm(m,v,r),c(g)),!1)}const f=[],h=Object.assign(Ew,{defaultVisitor:u,convertValue:c,isVisitable:Xf});function p(g,v){if(!oe.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(g),oe.forEach(g,function(d,T){(!(oe.isUndefined(d)||d===null)&&s.call(e,d,oe.isString(T)?T.trim():T,v,h))===!0&&p(d,v?v.concat(T):[T])}),f.pop()}}if(!oe.isObject(t))throw new TypeError("data must be an object");return p(t),e}function im(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Zh(t,e){this._pairs=[],t&&Kc(t,this,e)}const nE=Zh.prototype;nE.append=function(e,n){this._pairs.push([e,n])};nE.toString=function(e){const n=e?function(i){return e.call(this,i,im)}:im;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function yw(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function iE(t,e,n){if(!e)return t;const i=n&&n.encode||yw,s=n&&n.serialize;let r;if(s?r=s(e,n):r=oe.isURLSearchParams(e)?e.toString():new Zh(e,n).toString(i),r){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+r}return t}class sm{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){oe.forEach(this.handlers,function(i){i!==null&&e(i)})}}const sE={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Sw=typeof URLSearchParams<"u"?URLSearchParams:Zh,xw=typeof FormData<"u"?FormData:null,bw=typeof Blob<"u"?Blob:null,Tw={isBrowser:!0,classes:{URLSearchParams:Sw,FormData:xw,Blob:bw},protocols:["http","https","file","blob","url","data"]},rE=typeof window<"u"&&typeof document<"u",Mw=(t=>rE&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),Aw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ww=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:rE,hasStandardBrowserEnv:Mw,hasStandardBrowserWebWorkerEnv:Aw},Symbol.toStringTag,{value:"Module"})),si={...ww,...Tw};function Cw(t,e){return Kc(t,new si.classes.URLSearchParams,Object.assign({visitor:function(n,i,s,r){return si.isNode&&oe.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function Rw(t){return oe.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Pw(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function oE(t){function e(n,i,s,r){let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&oe.isArray(s)?s.length:o,l?(oe.hasOwnProp(s,o)?s[o]=[s[o],i]:s[o]=i,!a):((!s[o]||!oe.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&oe.isArray(s[o])&&(s[o]=Pw(s[o])),!a)}if(oe.isFormData(t)&&oe.isFunction(t.entries)){const n={};return oe.forEachEntry(t,(i,s)=>{e(Rw(i),s,n,0)}),n}return null}function Lw(t,e,n){if(oe.isString(t))try{return(e||JSON.parse)(t),oe.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Jh={transitional:sE,adapter:["xhr","http"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=oe.isObject(e);if(r&&oe.isHTMLForm(e)&&(e=new FormData(e)),oe.isFormData(e))return s?JSON.stringify(oE(e)):e;if(oe.isArrayBuffer(e)||oe.isBuffer(e)||oe.isStream(e)||oe.isFile(e)||oe.isBlob(e))return e;if(oe.isArrayBufferView(e))return e.buffer;if(oe.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Cw(e,this.formSerializer).toString();if((a=oe.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Kc(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return r||s?(n.setContentType("application/json",!1),Lw(e)):e}],transformResponse:[function(e){const n=this.transitional||Jh.transitional,i=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&oe.isString(e)&&(i&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?tt.from(a,tt.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:si.classes.FormData,Blob:si.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};oe.forEach(["delete","get","head","post","put","patch"],t=>{Jh.headers[t]={}});const Qh=Jh,Nw=oe.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Dw=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&Nw[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},rm=Symbol("internals");function Wo(t){return t&&String(t).trim().toLowerCase()}function Yl(t){return t===!1||t==null?t:oe.isArray(t)?t.map(Yl):String(t)}function Iw(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const Ow=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Wu(t,e,n,i,s){if(oe.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!oe.isString(e)){if(oe.isString(i))return e.indexOf(i)!==-1;if(oe.isRegExp(i))return i.test(e)}}function Uw(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function Fw(t,e){const n=oe.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}class Zc{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,c){const u=Wo(l);if(!u)throw new Error("header name must be a non-empty string");const f=oe.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=Yl(a))}const o=(a,l)=>oe.forEach(a,(c,u)=>r(c,u,l));return oe.isPlainObject(e)||e instanceof this.constructor?o(e,n):oe.isString(e)&&(e=e.trim())&&!Ow(e)?o(Dw(e),n):e!=null&&r(n,e,i),this}get(e,n){if(e=Wo(e),e){const i=oe.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return Iw(s);if(oe.isFunction(n))return n.call(this,s,i);if(oe.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Wo(e),e){const i=oe.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Wu(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=Wo(o),o){const a=oe.findKey(i,o);a&&(!n||Wu(i,i[a],a,n))&&(delete i[a],s=!0)}}return oe.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||Wu(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return oe.forEach(this,(s,r)=>{const o=oe.findKey(i,r);if(o){n[o]=Yl(s),delete n[r];return}const a=e?Uw(r):String(r).trim();a!==r&&delete n[r],n[a]=Yl(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return oe.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&oe.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[rm]=this[rm]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Wo(o);i[a]||(Fw(s,o),i[a]=!0)}return oe.isArray(e)?e.forEach(r):r(e),this}}Zc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);oe.reduceDescriptors(Zc.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});oe.freezeMethods(Zc);const Ci=Zc;function $u(t,e){const n=this||Qh,i=e||n,s=Ci.from(i.headers);let r=i.data;return oe.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function aE(t){return!!(t&&t.__CANCEL__)}function Fa(t,e,n){tt.call(this,t??"canceled",tt.ERR_CANCELED,e,n),this.name="CanceledError"}oe.inherits(Fa,tt,{__CANCEL__:!0});function Bw(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new tt("Request failed with status code "+n.status,[tt.ERR_BAD_REQUEST,tt.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const kw=si.hasStandardBrowserEnv?{write(t,e,n,i,s,r){const o=[t+"="+encodeURIComponent(e)];oe.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),oe.isString(i)&&o.push("path="+i),oe.isString(s)&&o.push("domain="+s),r===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Hw(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Vw(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function lE(t,e){return t&&!Hw(e)?Vw(t,e):e}const zw=si.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function s(r){let o=r;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=s(window.location.href),function(o){const a=oe.isString(o)?s(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function Gw(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Ww(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),n[s]=l,i[s]=c;let f=r,h=0;for(;f!==s;)h+=n[f++],f=f%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(h*1e3/p):void 0}}function om(t,e){let n=0;const i=Ww(50,250);return s=>{const r=s.loaded,o=s.lengthComputable?s.total:void 0,a=r-n,l=i(a),c=r<=o;n=r;const u={loaded:r,total:o,progress:o?r/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-r)/l:void 0,event:s};u[e?"download":"upload"]=!0,t(u)}}const $w=typeof XMLHttpRequest<"u",Xw=$w&&function(t){return new Promise(function(n,i){let s=t.data;const r=Ci.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,l;function c(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}let u;if(oe.isFormData(s)){if(si.hasStandardBrowserEnv||si.hasStandardBrowserWebWorkerEnv)r.setContentType(!1);else if((u=r.getContentType())!==!1){const[v,...m]=u?u.split(";").map(d=>d.trim()).filter(Boolean):[];r.setContentType([v||"multipart/form-data",...m].join("; "))}}let f=new XMLHttpRequest;if(t.auth){const v=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(v+":"+m))}const h=lE(t.baseURL,t.url);f.open(t.method.toUpperCase(),iE(h,t.params,t.paramsSerializer),!0),f.timeout=t.timeout;function p(){if(!f)return;const v=Ci.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),d={data:!o||o==="text"||o==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:v,config:t,request:f};Bw(function(_){n(_),c()},function(_){i(_),c()},d),f=null}if("onloadend"in f?f.onloadend=p:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(p)},f.onabort=function(){f&&(i(new tt("Request aborted",tt.ECONNABORTED,t,f)),f=null)},f.onerror=function(){i(new tt("Network Error",tt.ERR_NETWORK,t,f)),f=null},f.ontimeout=function(){let m=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const d=t.transitional||sE;t.timeoutErrorMessage&&(m=t.timeoutErrorMessage),i(new tt(m,d.clarifyTimeoutError?tt.ETIMEDOUT:tt.ECONNABORTED,t,f)),f=null},si.hasStandardBrowserEnv&&(a&&oe.isFunction(a)&&(a=a(t)),a||a!==!1&&zw(h))){const v=t.xsrfHeaderName&&t.xsrfCookieName&&kw.read(t.xsrfCookieName);v&&r.set(t.xsrfHeaderName,v)}s===void 0&&r.setContentType(null),"setRequestHeader"in f&&oe.forEach(r.toJSON(),function(m,d){f.setRequestHeader(d,m)}),oe.isUndefined(t.withCredentials)||(f.withCredentials=!!t.withCredentials),o&&o!=="json"&&(f.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&f.addEventListener("progress",om(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",om(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=v=>{f&&(i(!v||v.type?new Fa(null,t,f):v),f.abort(),f=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const g=Gw(h);if(g&&si.protocols.indexOf(g)===-1){i(new tt("Unsupported protocol "+g+":",tt.ERR_BAD_REQUEST,t));return}f.send(s||null)})},qf={http:_w,xhr:Xw};oe.forEach(qf,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const am=t=>`- ${t}`,qw=t=>oe.isFunction(t)||t===null||t===!1,cE={getAdapter:t=>{t=oe.isArray(t)?t:[t];const{length:e}=t;let n,i;const s={};for(let r=0;r<e;r++){n=t[r];let o;if(i=n,!qw(n)&&(i=qf[(o=String(n)).toLowerCase()],i===void 0))throw new tt(`Unknown adapter '${o}'`);if(i)break;s[o||"#"+r]=i}if(!i){const r=Object.entries(s).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?r.length>1?`since :
`+r.map(am).join(`
`):" "+am(r[0]):"as no adapter specified";throw new tt("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:qf};function Xu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Fa(null,t)}function lm(t){return Xu(t),t.headers=Ci.from(t.headers),t.data=$u.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),cE.getAdapter(t.adapter||Qh.adapter)(t).then(function(i){return Xu(t),i.data=$u.call(t,t.transformResponse,i),i.headers=Ci.from(i.headers),i},function(i){return aE(i)||(Xu(t),i&&i.response&&(i.response.data=$u.call(t,t.transformResponse,i.response),i.response.headers=Ci.from(i.response.headers))),Promise.reject(i)})}const cm=t=>t instanceof Ci?{...t}:t;function go(t,e){e=e||{};const n={};function i(c,u,f){return oe.isPlainObject(c)&&oe.isPlainObject(u)?oe.merge.call({caseless:f},c,u):oe.isPlainObject(u)?oe.merge({},u):oe.isArray(u)?u.slice():u}function s(c,u,f){if(oe.isUndefined(u)){if(!oe.isUndefined(c))return i(void 0,c,f)}else return i(c,u,f)}function r(c,u){if(!oe.isUndefined(u))return i(void 0,u)}function o(c,u){if(oe.isUndefined(u)){if(!oe.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>s(cm(c),cm(u),!0)};return oe.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=l[u]||s,h=f(t[u],e[u],u);oe.isUndefined(h)&&f!==a||(n[u]=h)}),n}const uE="1.6.8",ed={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ed[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const um={};ed.transitional=function(e,n,i){function s(r,o){return"[Axios v"+uE+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new tt(s(o," has been removed"+(n?" in "+n:"")),tt.ERR_DEPRECATED);return n&&!um[o]&&(um[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};function jw(t,e,n){if(typeof t!="object")throw new tt("options must be an object",tt.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=e[r];if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new tt("option "+r+" must be "+l,tt.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new tt("Unknown option "+r,tt.ERR_BAD_OPTION)}}const jf={assertOptions:jw,validators:ed},ki=jf.validators;class uc{constructor(e){this.defaults=e,this.interceptors={request:new sm,response:new sm}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const r=s.stack?s.stack.replace(/^.+\n/,""):"";i.stack?r&&!String(i.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+r):i.stack=r}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=go(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&jf.assertOptions(i,{silentJSONParsing:ki.transitional(ki.boolean),forcedJSONParsing:ki.transitional(ki.boolean),clarifyTimeoutError:ki.transitional(ki.boolean)},!1),s!=null&&(oe.isFunction(s)?n.paramsSerializer={serialize:s}:jf.assertOptions(s,{encode:ki.function,serialize:ki.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&oe.merge(r.common,r[n.method]);r&&oe.forEach(["delete","get","head","post","put","patch","common"],g=>{delete r[g]}),n.headers=Ci.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,h;if(!l){const g=[lm.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,c),h=g.length,u=Promise.resolve(n);f<h;)u=u.then(g[f++],g[f++]);return u}h=a.length;let p=n;for(f=0;f<h;){const g=a[f++],v=a[f++];try{p=g(p)}catch(m){v.call(this,m);break}}try{u=lm.call(this,p)}catch(g){return Promise.reject(g)}for(f=0,h=c.length;f<h;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=go(this.defaults,e);const n=lE(e.baseURL,e.url);return iE(n,e.params,e.paramsSerializer)}}oe.forEach(["delete","get","head","options"],function(e){uc.prototype[e]=function(n,i){return this.request(go(i||{},{method:e,url:n,data:(i||{}).data}))}});oe.forEach(["post","put","patch"],function(e){function n(i){return function(r,o,a){return this.request(go(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}uc.prototype[e]=n(),uc.prototype[e+"Form"]=n(!0)});const Kl=uc;class td{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new Fa(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new td(function(s){e=s}),cancel:e}}}const Yw=td;function Kw(t){return function(n){return t.apply(null,n)}}function Zw(t){return oe.isObject(t)&&t.isAxiosError===!0}const Yf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Yf).forEach(([t,e])=>{Yf[e]=t});const Jw=Yf;function fE(t){const e=new Kl(t),n=$v(Kl.prototype.request,e);return oe.extend(n,Kl.prototype,e,{allOwnKeys:!0}),oe.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return fE(go(t,s))},n}const wt=fE(Qh);wt.Axios=Kl;wt.CanceledError=Fa;wt.CancelToken=Yw;wt.isCancel=aE;wt.VERSION=uE;wt.toFormData=Kc;wt.AxiosError=tt;wt.Cancel=wt.CanceledError;wt.all=function(e){return Promise.all(e)};wt.spread=Kw;wt.isAxiosError=Zw;wt.mergeConfig=go;wt.AxiosHeaders=Ci;wt.formToJSON=t=>oE(oe.isHTMLForm(t)?new FormData(t):t);wt.getAdapter=cE.getAdapter;wt.HttpStatusCode=Jw;wt.default=wt;const Qw=wt;window.axios=Qw;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mn(t,e){const n=new Set(t.split(","));return e?i=>n.has(i.toLowerCase()):i=>n.has(i)}const st={},Kr=[],Lt=()=>{},Zl=()=>!1,dr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),nd=t=>t.startsWith("onUpdate:"),it=Object.assign,id=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},eC=Object.prototype.hasOwnProperty,nt=(t,e)=>eC.call(t,e),be=Array.isArray,Zr=t=>Io(t)==="[object Map]",pr=t=>Io(t)==="[object Set]",fm=t=>Io(t)==="[object Date]",tC=t=>Io(t)==="[object RegExp]",Ne=t=>typeof t=="function",He=t=>typeof t=="string",jn=t=>typeof t=="symbol",at=t=>t!==null&&typeof t=="object",sd=t=>(at(t)||Ne(t))&&Ne(t.then)&&Ne(t.catch),hE=Object.prototype.toString,Io=t=>hE.call(t),nC=t=>Io(t).slice(8,-1),dE=t=>Io(t)==="[object Object]",rd=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,rs=Mn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),iC=Mn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Jc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sC=/-(\w)/g,gt=Jc(t=>t.replace(sC,(e,n)=>n?n.toUpperCase():"")),rC=/\B([A-Z])/g,En=Jc(t=>t.replace(rC,"-$1").toLowerCase()),mr=Jc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Jr=Jc(t=>t?`on${mr(t)}`:""),Yn=(t,e)=>!Object.is(t,e),Qr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},fc=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},pa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},hc=t=>{const e=He(t)?Number(t):NaN;return isNaN(e)?t:e};let hm;const pE=()=>hm||(hm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),oC="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",aC=Mn(oC);function Ba(t){if(be(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=He(i)?mE(i):Ba(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(He(t)||at(t))return t}const lC=/;(?![^(]*\))/g,cC=/:([^]+)/,uC=/\/\*[^]*?\*\//g;function mE(t){const e={};return t.replace(uC,"").split(lC).forEach(n=>{if(n){const i=n.split(cC);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ka(t){let e="";if(He(t))e=t;else if(be(t))for(let n=0;n<t.length;n++){const i=ka(t[n]);i&&(e+=i+" ")}else if(at(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function fC(t){if(!t)return null;let{class:e,style:n}=t;return e&&!He(e)&&(t.class=ka(e)),n&&(t.style=Ba(n)),t}const hC="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",dC="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",pC="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",mC="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",gC=Mn(hC),_C=Mn(dC),vC=Mn(pC),EC=Mn(mC),yC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",SC=Mn(yC);function gE(t){return!!t||t===""}function xC(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ps(t[i],e[i]);return n}function ps(t,e){if(t===e)return!0;let n=fm(t),i=fm(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=jn(t),i=jn(e),n||i)return t===e;if(n=be(t),i=be(e),n||i)return n&&i?xC(t,e):!1;if(n=at(t),i=at(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ps(t[o],e[o]))return!1}}return String(t)===String(e)}function Qc(t,e){return t.findIndex(n=>ps(n,e))}const bC=t=>He(t)?t:t==null?"":be(t)||at(t)&&(t.toString===hE||!Ne(t.toString))?JSON.stringify(t,_E,2):String(t),_E=(t,e)=>e&&e.__v_isRef?_E(t,e.value):Zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[qu(i,r)+" =>"]=s,n),{})}:pr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>qu(n))}:jn(e)?qu(e):at(e)&&!be(e)&&!dE(e)?String(e):e,qu=(t,e="")=>{var n;return jn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mn;class od{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=mn,!e&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=mn;try{return mn=this,e()}finally{mn=n}}}on(){mn=this}off(){mn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function TC(t){return new od(t)}function vE(t,e=mn){e&&e.active&&e.effects.push(t)}function EE(){return mn}function MC(t){mn&&mn.cleanups.push(t)}let js;class _o{constructor(e,n,i,s){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,vE(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,gr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(AC(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),_r()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=os,n=js;try{return os=!0,js=this,this._runnings++,dm(this),this.fn()}finally{pm(this),this._runnings--,js=n,os=e}}stop(){var e;this.active&&(dm(this),pm(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function AC(t){return t.value}function dm(t){t._trackId++,t._depsLength=0}function pm(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)yE(t.deps[e],t);t.deps.length=t._depsLength}}function yE(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}function wC(t,e){t.effect instanceof _o&&(t=t.effect.fn);const n=new _o(t,Lt,()=>{n.dirty&&n.run()});e&&(it(n,e),e.scope&&vE(n,e.scope)),(!e||!e.lazy)&&n.run();const i=n.run.bind(n);return i.effect=n,i}function CC(t){t.effect.stop()}let os=!0,Kf=0;const SE=[];function gr(){SE.push(os),os=!1}function _r(){const t=SE.pop();os=t===void 0?!0:t}function ad(){Kf++}function ld(){for(Kf--;!Kf&&Zf.length;)Zf.shift()()}function xE(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&yE(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Zf=[];function bE(t,e,n){ad();for(const i of t.keys()){let s;i._dirtyLevel<e&&(s??(s=t.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=t.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Zf.push(i.scheduler)))}ld()}const TE=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},dc=new WeakMap,Ys=Symbol(""),Jf=Symbol("");function un(t,e,n){if(os&&js){let i=dc.get(t);i||dc.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=TE(()=>i.delete(n))),xE(js,s)}}function Ri(t,e,n,i,s,r){const o=dc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&be(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!jn(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":be(t)?rd(n)&&a.push(o.get("length")):(a.push(o.get(Ys)),Zr(t)&&a.push(o.get(Jf)));break;case"delete":be(t)||(a.push(o.get(Ys)),Zr(t)&&a.push(o.get(Jf)));break;case"set":Zr(t)&&a.push(o.get(Ys));break}ad();for(const l of a)l&&bE(l,4);ld()}function RC(t,e){var n;return(n=dc.get(t))==null?void 0:n.get(e)}const PC=Mn("__proto__,__v_isRef,__isVue"),ME=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jn)),mm=LC();function LC(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Qe(this);for(let r=0,o=this.length;r<o;r++)un(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Qe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){gr(),ad();const i=Qe(this)[e].apply(this,n);return ld(),_r(),i}}),t}function NC(t){const e=Qe(this);return un(e,"has",t),e.hasOwnProperty(t)}class AE{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?NE:LE:r?PE:RE).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=be(e);if(!s){if(o&&nt(mm,n))return Reflect.get(mm,n,i);if(n==="hasOwnProperty")return NC}const a=Reflect.get(e,n,i);return(jn(n)?ME.has(n):PC(n))||(s||un(e,"get",n),r)?a:Vt(a)?o&&rd(n)?a:a.value:at(a)?s?ud(a):nu(a):a}}class wE extends AE{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=ir(r);if(!ma(i)&&!ir(i)&&(r=Qe(r),i=Qe(i)),!be(e)&&Vt(r)&&!Vt(i))return l?!1:(r.value=i,!0)}const o=be(e)&&rd(n)?Number(n)<e.length:nt(e,n),a=Reflect.set(e,n,i,s);return e===Qe(s)&&(o?Yn(i,r)&&Ri(e,"set",n,i):Ri(e,"add",n,i)),a}deleteProperty(e,n){const i=nt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Ri(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!jn(n)||!ME.has(n))&&un(e,"has",n),i}ownKeys(e){return un(e,"iterate",be(e)?"length":Ys),Reflect.ownKeys(e)}}class CE extends AE{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const DC=new wE,IC=new CE,OC=new wE(!0),UC=new CE(!0),cd=t=>t,eu=t=>Reflect.getPrototypeOf(t);function ol(t,e,n=!1,i=!1){t=t.__v_raw;const s=Qe(t),r=Qe(e);n||(Yn(e,r)&&un(s,"get",e),un(s,"get",r));const{has:o}=eu(s),a=i?cd:n?dd:ga;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function al(t,e=!1){const n=this.__v_raw,i=Qe(n),s=Qe(t);return e||(Yn(t,s)&&un(i,"has",t),un(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ll(t,e=!1){return t=t.__v_raw,!e&&un(Qe(t),"iterate",Ys),Reflect.get(t,"size",t)}function gm(t){t=Qe(t);const e=Qe(this);return eu(e).has.call(e,t)||(e.add(t),Ri(e,"add",t,t)),this}function _m(t,e){e=Qe(e);const n=Qe(this),{has:i,get:s}=eu(n);let r=i.call(n,t);r||(t=Qe(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Yn(e,o)&&Ri(n,"set",t,e):Ri(n,"add",t,e),this}function vm(t){const e=Qe(this),{has:n,get:i}=eu(e);let s=n.call(e,t);s||(t=Qe(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Ri(e,"delete",t,void 0),r}function Em(){const t=Qe(this),e=t.size!==0,n=t.clear();return e&&Ri(t,"clear",void 0,void 0),n}function cl(t,e){return function(i,s){const r=this,o=r.__v_raw,a=Qe(o),l=e?cd:t?dd:ga;return!t&&un(a,"iterate",Ys),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function ul(t,e,n){return function(...i){const s=this.__v_raw,r=Qe(s),o=Zr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?cd:e?dd:ga;return!e&&un(r,"iterate",l?Jf:Ys),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Hi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function FC(){const t={get(r){return ol(this,r)},get size(){return ll(this)},has:al,add:gm,set:_m,delete:vm,clear:Em,forEach:cl(!1,!1)},e={get(r){return ol(this,r,!1,!0)},get size(){return ll(this)},has:al,add:gm,set:_m,delete:vm,clear:Em,forEach:cl(!1,!0)},n={get(r){return ol(this,r,!0)},get size(){return ll(this,!0)},has(r){return al.call(this,r,!0)},add:Hi("add"),set:Hi("set"),delete:Hi("delete"),clear:Hi("clear"),forEach:cl(!0,!1)},i={get(r){return ol(this,r,!0,!0)},get size(){return ll(this,!0)},has(r){return al.call(this,r,!0)},add:Hi("add"),set:Hi("set"),delete:Hi("delete"),clear:Hi("clear"),forEach:cl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ul(r,!1,!1),n[r]=ul(r,!0,!1),e[r]=ul(r,!1,!0),i[r]=ul(r,!0,!0)}),[t,n,e,i]}const[BC,kC,HC,VC]=FC();function tu(t,e){const n=e?t?VC:HC:t?kC:BC;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(nt(n,s)&&s in i?n:i,s,r)}const zC={get:tu(!1,!1)},GC={get:tu(!1,!0)},WC={get:tu(!0,!1)},$C={get:tu(!0,!0)},RE=new WeakMap,PE=new WeakMap,LE=new WeakMap,NE=new WeakMap;function XC(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qC(t){return t.__v_skip||!Object.isExtensible(t)?0:XC(nC(t))}function nu(t){return ir(t)?t:iu(t,!1,DC,zC,RE)}function DE(t){return iu(t,!1,OC,GC,PE)}function ud(t){return iu(t,!0,IC,WC,LE)}function jC(t){return iu(t,!0,UC,$C,NE)}function iu(t,e,n,i,s){if(!at(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=qC(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Ks(t){return ir(t)?Ks(t.__v_raw):!!(t&&t.__v_isReactive)}function ir(t){return!!(t&&t.__v_isReadonly)}function ma(t){return!!(t&&t.__v_isShallow)}function fd(t){return Ks(t)||ir(t)}function Qe(t){const e=t&&t.__v_raw;return e?Qe(e):t}function hd(t){return Object.isExtensible(t)&&fc(t,"__v_skip",!0),t}const ga=t=>at(t)?nu(t):t,dd=t=>at(t)?ud(t):t;class IE{constructor(e,n,i,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new _o(()=>e(this._value),()=>eo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Qe(this);return(!e._cacheable||e.effect.dirty)&&Yn(e._value,e._value=e.effect.run())&&eo(e,4),pd(e),e.effect._dirtyLevel>=2&&eo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function YC(t,e,n=!1){let i,s;const r=Ne(t);return r?(i=t,s=Lt):(i=t.get,s=t.set),new IE(i,s,r||!s,n)}function pd(t){var e;os&&js&&(t=Qe(t),xE(js,(e=t.dep)!=null?e:t.dep=TE(()=>t.dep=void 0,t instanceof IE?t:void 0)))}function eo(t,e=4,n){t=Qe(t);const i=t.dep;i&&bE(i,e)}function Vt(t){return!!(t&&t.__v_isRef===!0)}function na(t){return OE(t,!1)}function KC(t){return OE(t,!0)}function OE(t,e){return Vt(t)?t:new ZC(t,e)}class ZC{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Qe(e),this._value=n?e:ga(e)}get value(){return pd(this),this._value}set value(e){const n=this.__v_isShallow||ma(e)||ir(e);e=n?e:Qe(e),Yn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ga(e),eo(this,4))}}function JC(t){eo(t,4)}function md(t){return Vt(t)?t.value:t}function QC(t){return Ne(t)?t():md(t)}const eR={get:(t,e,n)=>md(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Vt(s)&&!Vt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function gd(t){return Ks(t)?t:new Proxy(t,eR)}class tR{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:i}=e(()=>pd(this),()=>eo(this));this._get=n,this._set=i}get value(){return this._get()}set value(e){this._set(e)}}function UE(t){return new tR(t)}function nR(t){const e=be(t)?new Array(t.length):{};for(const n in t)e[n]=FE(t,n);return e}class iR{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return RC(Qe(this._object),this._key)}}class sR{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function rR(t,e,n){return Vt(t)?t:Ne(t)?new sR(t):at(t)&&arguments.length>1?FE(t,e,n):na(t)}function FE(t,e,n){const i=t[e];return Vt(i)?i:new iR(t,e,n)}const oR={GET:"get",HAS:"has",ITERATE:"iterate"},aR={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lR(t,e){}const cR={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},uR={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Pi(t,e,n,i){try{return i?t(...i):t()}catch(s){vr(s,e,n)}}function yn(t,e,n,i){if(Ne(t)){const r=Pi(t,e,n,i);return r&&sd(r)&&r.catch(o=>{vr(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(yn(t[r],e,n,i));return s}function vr(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Pi(l,null,10,[t,o,a]);return}}fR(t,n,s,i)}function fR(t,e,n,i=!0){console.error(t)}let _a=!1,Qf=!1;const jt=[];let ti=0;const to=[];let Zi=null,Fs=0;const BE=Promise.resolve();let _d=null;function su(t){const e=_d||BE;return t?e.then(this?t.bind(this):t):e}function hR(t){let e=ti+1,n=jt.length;for(;e<n;){const i=e+n>>>1,s=jt[i],r=va(s);r<t||r===t&&s.pre?e=i+1:n=i}return e}function ru(t){(!jt.length||!jt.includes(t,_a&&t.allowRecurse?ti+1:ti))&&(t.id==null?jt.push(t):jt.splice(hR(t.id),0,t),kE())}function kE(){!_a&&!Qf&&(Qf=!0,_d=BE.then(HE))}function dR(t){const e=jt.indexOf(t);e>ti&&jt.splice(e,1)}function pc(t){be(t)?to.push(...t):(!Zi||!Zi.includes(t,t.allowRecurse?Fs+1:Fs))&&to.push(t),kE()}function ym(t,e,n=_a?ti+1:0){for(;n<jt.length;n++){const i=jt[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;jt.splice(n,1),n--,i()}}}function mc(t){if(to.length){const e=[...new Set(to)].sort((n,i)=>va(n)-va(i));if(to.length=0,Zi){Zi.push(...e);return}for(Zi=e,Fs=0;Fs<Zi.length;Fs++)Zi[Fs]();Zi=null,Fs=0}}const va=t=>t.id==null?1/0:t.id,pR=(t,e)=>{const n=va(t)-va(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function HE(t){Qf=!1,_a=!0,jt.sort(pR);try{for(ti=0;ti<jt.length;ti++){const e=jt[ti];e&&e.active!==!1&&Pi(e,null,14)}}finally{ti=0,jt.length=0,mc(),_a=!1,_d=null,(jt.length||to.length)&&HE()}}let Xr,fl=[];function VE(t,e){var n,i;Xr=t,Xr?(Xr.enabled=!0,fl.forEach(({event:s,args:r})=>Xr.emit(s,...r)),fl=[]):typeof window<"u"&&window.HTMLElement&&!((i=(n=window.navigator)==null?void 0:n.userAgent)!=null&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{VE(r,e)}),setTimeout(()=>{Xr||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,fl=[])},3e3)):fl=[]}function mR(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||st;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||st;h&&(s=n.map(p=>He(p)?p.trim():p)),f&&(s=n.map(pa))}let a,l=i[a=Jr(e)]||i[a=Jr(gt(e))];!l&&r&&(l=i[a=Jr(En(e))]),l&&yn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,yn(c,t,6,s)}}function zE(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Ne(t)){const l=c=>{const u=zE(c,e,!0);u&&(a=!0,it(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(at(t)&&i.set(t,null),null):(be(r)?r.forEach(l=>o[l]=null):it(o,r),at(t)&&i.set(t,o),o)}function ou(t,e){return!t||!dr(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(t,e[0].toLowerCase()+e.slice(1))||nt(t,En(e))||nt(t,e))}let Mt=null,au=null;function Ea(t){const e=Mt;return Mt=t,au=t&&t.type.__scopeId||null,e}function gR(t){au=t}function _R(){au=null}const vR=t=>vd;function vd(t,e=Mt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&ah(-1);const r=Ea(e);let o;try{o=t(...s)}finally{Ea(r),i._d&&ah(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Jl(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:v}=t;let m,d;const T=Ea(t);try{if(n.shapeFlag&4){const b=s||i,C=b;m=_n(u.call(C,b,f,r,p,h,g)),d=l}else{const b=e;m=_n(b.length>1?b(r,{attrs:l,slots:a,emit:c}):b(r,null)),d=e.props?l:yR(l)}}catch(b){aa.length=0,vr(b,t,1),m=ft(Yt)}let _=m;if(d&&v!==!1){const b=Object.keys(d),{shapeFlag:C}=_;b.length&&C&7&&(o&&b.some(nd)&&(d=SR(d,o)),_=fi(_,d))}return n.dirs&&(_=fi(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),m=_,Ea(T),m}function ER(t,e=!0){let n;for(let i=0;i<t.length;i++){const s=t[i];if(ms(s)){if(s.type!==Yt||s.children==="v-if"){if(n)return;n=s}}else return}return n}const yR=t=>{let e;for(const n in t)(n==="class"||n==="style"||dr(n))&&((e||(e={}))[n]=t[n]);return e},SR=(t,e)=>{const n={};for(const i in t)(!nd(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function xR(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Sm(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!ou(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Sm(i,o,c):!0:!!o;return!1}function Sm(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!ou(n,r))return!0}return!1}function Ed({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const yd="components",bR="directives";function TR(t,e){return Sd(yd,t,!0,e)||t}const GE=Symbol.for("v-ndc");function MR(t){return He(t)?Sd(yd,t,!1)||t:t||GE}function AR(t){return Sd(bR,t)}function Sd(t,e,n=!0,i=!1){const s=Mt||Pt;if(s){const r=s.type;if(t===yd){const a=hh(r,!1);if(a&&(a===e||a===gt(e)||a===mr(gt(e))))return r}const o=xm(s[t]||r[t],e)||xm(s.appContext[t],e);return!o&&i?r:o}}function xm(t,e){return t&&(t[e]||t[gt(e)]||t[mr(gt(e))])}const WE=t=>t.__isSuspense;let eh=0;const wR={name:"Suspense",__isSuspense:!0,process(t,e,n,i,s,r,o,a,l,c){if(t==null)RR(e,n,i,s,r,o,a,l,c);else{if(r&&r.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}PR(t,e,n,i,s,o,a,l,c)}},hydrate:LR,create:xd,normalize:NR},CR=wR;function ya(t,e){const n=t.props&&t.props[e];Ne(n)&&n()}function RR(t,e,n,i,s,r,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=t.suspense=xd(t,s,i,e,f,n,r,o,a,l);c(null,h.pendingBranch=t.ssContent,f,null,i,h,r,o),h.deps>0?(ya(t,"onPending"),ya(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,r,o),no(h,t.ssFallback)):h.resolve(!1,!0)}function PR(t,e,n,i,s,r,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,p=e.ssFallback,{activeBranch:g,pendingBranch:v,isInFallback:m,isHydrating:d}=f;if(v)f.pendingBranch=h,$n(h,v)?(l(v,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0?f.resolve():m&&(d||(l(g,p,n,i,s,null,r,o,a),no(f,p)))):(f.pendingId=eh++,d?(f.isHydrating=!1,f.activeBranch=v):c(v,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0?f.resolve():(l(g,p,n,i,s,null,r,o,a),no(f,p))):g&&$n(h,g)?(l(g,h,n,i,s,f,r,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0&&f.resolve()));else if(g&&$n(h,g))l(g,h,n,i,s,f,r,o,a),no(f,h);else if(ya(e,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=eh++,l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0)f.resolve();else{const{timeout:T,pendingId:_}=f;T>0?setTimeout(()=>{f.pendingId===_&&f.fallback(p)},T):T===0&&f.fallback(p)}}function xd(t,e,n,i,s,r,o,a,l,c,u=!1){const{p:f,m:h,um:p,n:g,o:{parentNode:v,remove:m}}=c;let d;const T=DR(t);T&&e!=null&&e.pendingBranch&&(d=e.pendingId,e.deps++);const _=t.props?hc(t.props.timeout):void 0,b=r,C={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:s,deps:0,pendingId:eh++,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(A=!1,w=!1){const{vnode:P,activeBranch:x,pendingBranch:E,pendingId:D,effects:I,parentComponent:N,container:G}=C;let q=!1;C.isHydrating?C.isHydrating=!1:A||(q=x&&E.transition&&E.transition.mode==="out-in",q&&(x.transition.afterLeave=()=>{D===C.pendingId&&(h(E,G,r===b?g(x):r,0),pc(I))}),x&&(v(x.el)!==C.hiddenContainer&&(r=g(x)),p(x,N,C,!0)),q||h(E,G,r,0)),no(C,E),C.pendingBranch=null,C.isInFallback=!1;let z=C.parent,K=!1;for(;z;){if(z.pendingBranch){z.effects.push(...I),K=!0;break}z=z.parent}!K&&!q&&pc(I),C.effects=[],T&&e&&e.pendingBranch&&d===e.pendingId&&(e.deps--,e.deps===0&&!w&&e.resolve()),ya(P,"onResolve")},fallback(A){if(!C.pendingBranch)return;const{vnode:w,activeBranch:P,parentComponent:x,container:E,namespace:D}=C;ya(w,"onFallback");const I=g(P),N=()=>{C.isInFallback&&(f(null,A,E,I,x,null,D,a,l),no(C,A))},G=A.transition&&A.transition.mode==="out-in";G&&(P.transition.afterLeave=N),C.isInFallback=!0,p(P,x,null,!0),G||N()},move(A,w,P){C.activeBranch&&h(C.activeBranch,A,w,P),C.container=A},next(){return C.activeBranch&&g(C.activeBranch)},registerDep(A,w){const P=!!C.pendingBranch;P&&C.deps++;const x=A.vnode.el;A.asyncDep.catch(E=>{vr(E,A,0)}).then(E=>{if(A.isUnmounted||C.isUnmounted||C.pendingId!==A.suspenseId)return;A.asyncResolved=!0;const{vnode:D}=A;uh(A,E,!1),x&&(D.el=x);const I=!x&&A.subTree.el;w(A,D,v(x||A.subTree.el),x?null:g(A.subTree),C,o,l),I&&m(I),Ed(A,D.el),P&&--C.deps===0&&C.resolve()})},unmount(A,w){C.isUnmounted=!0,C.activeBranch&&p(C.activeBranch,n,A,w),C.pendingBranch&&p(C.pendingBranch,n,A,w)}};return C}function LR(t,e,n,i,s,r,o,a,l){const c=e.suspense=xd(e,i,n,t.parentNode,document.createElement("div"),null,s,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(!1,!0),u}function NR(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=bm(i?n.default:n),t.ssFallback=i?bm(n.fallback):ft(Yt)}function bm(t){let e;if(Ne(t)){const n=or&&t._c;n&&(t._d=!1,Ga()),t=t(),n&&(t._d=!0,e=ln,T0())}return be(t)&&(t=ER(t)),t=_n(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function $E(t,e){e&&e.pendingBranch?be(t)?e.effects.push(...t):e.effects.push(t):pc(t)}function no(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,i&&i.subTree===n&&(i.vnode.el=s,Ed(i,s))}function DR(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const XE=Symbol.for("v-scx"),qE=()=>ra(XE);function IR(t,e){return Ha(t,null,e)}function jE(t,e){return Ha(t,null,{flush:"post"})}function YE(t,e){return Ha(t,null,{flush:"sync"})}const hl={};function ia(t,e,n){return Ha(t,e,n)}function Ha(t,e,{immediate:n,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=st){if(e&&r){const A=e;e=(...w)=>{A(...w),C()}}const l=Pt,c=A=>i===!0?A:zs(A,i===!1?1:void 0);let u,f=!1,h=!1;if(Vt(t)?(u=()=>t.value,f=ma(t)):Ks(t)?(u=()=>c(t),f=!0):be(t)?(h=!0,f=t.some(A=>Ks(A)||ma(A)),u=()=>t.map(A=>{if(Vt(A))return A.value;if(Ks(A))return c(A);if(Ne(A))return Pi(A,l,2)})):Ne(t)?e?u=()=>Pi(t,l,2):u=()=>(p&&p(),yn(t,l,3,[g])):u=Lt,e&&i){const A=u;u=()=>zs(A())}let p,g=A=>{p=_.onStop=()=>{Pi(A,l,4),p=_.onStop=void 0}},v;if(Wa)if(g=Lt,e?n&&yn(e,l,3,[u(),h?[]:void 0,g]):u(),s==="sync"){const A=qE();v=A.__watcherHandles||(A.__watcherHandles=[])}else return Lt;let m=h?new Array(t.length).fill(hl):hl;const d=()=>{if(!(!_.active||!_.dirty))if(e){const A=_.run();(i||f||(h?A.some((w,P)=>Yn(w,m[P])):Yn(A,m)))&&(p&&p(),yn(e,l,3,[A,m===hl?void 0:h&&m[0]===hl?[]:m,g]),m=A)}else _.run()};d.allowRecurse=!!e;let T;s==="sync"?T=d:s==="post"?T=()=>Bt(d,l&&l.suspense):(d.pre=!0,l&&(d.id=l.uid),T=()=>ru(d));const _=new _o(u,Lt,T),b=EE(),C=()=>{_.stop(),b&&id(b.effects,_)};return e?n?d():m=_.run():s==="post"?Bt(_.run.bind(_),l&&l.suspense):_.run(),v&&v.push(C),C}function OR(t,e,n){const i=this.proxy,s=He(t)?t.includes(".")?KE(i,t):()=>i[t]:t.bind(i,i);let r;Ne(e)?r=e:(r=e.handler,n=e);const o=ar(this),a=Ha(s,r.bind(i),n);return o(),a}function KE(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function zs(t,e,n=0,i){if(!at(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(i=i||new Set,i.has(t))return t;if(i.add(t),Vt(t))zs(t.value,e,n,i);else if(be(t))for(let s=0;s<t.length;s++)zs(t[s],e,n,i);else if(pr(t)||Zr(t))t.forEach(s=>{zs(s,e,n,i)});else if(dE(t))for(const s in t)zs(t[s],e,n,i);return t}function UR(t,e){if(Mt===null)return t;const n=pu(Mt)||Mt.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=st]=e[s];r&&(Ne(r)&&(r={mounted:r,updated:r}),r.deep&&zs(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Zn(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(gr(),yn(l,n,8,[t.el,a,t,e]),_r())}}const Ji=Symbol("_leaveCb"),dl=Symbol("_enterCb");function bd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return za(()=>{t.isMounted=!0}),fu(()=>{t.isUnmounting=!0}),t}const Rn=[Function,Array],Td={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Rn,onEnter:Rn,onAfterEnter:Rn,onEnterCancelled:Rn,onBeforeLeave:Rn,onLeave:Rn,onAfterLeave:Rn,onLeaveCancelled:Rn,onBeforeAppear:Rn,onAppear:Rn,onAfterAppear:Rn,onAppearCancelled:Rn},FR={name:"BaseTransition",props:Td,setup(t,{slots:e}){const n=Oi(),i=bd();return()=>{const s=e.default&&lu(e.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const h of s)if(h.type!==Yt){r=h;break}}const o=Qe(t),{mode:a}=o;if(i.isLeaving)return ju(r);const l=Tm(r);if(!l)return ju(r);const c=vo(l,o,i,n);sr(l,c);const u=n.subTree,f=u&&Tm(u);if(f&&f.type!==Yt&&!$n(l,f)){const h=vo(f,o,i,n);if(sr(f,h),a==="out-in")return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},ju(r);a==="in-out"&&l.type!==Yt&&(h.delayLeave=(p,g,v)=>{const m=JE(i,f);m[String(f.key)]=f,p[Ji]=()=>{g(),p[Ji]=void 0,delete c.delayedLeave},c.delayedLeave=v})}return r}}},ZE=FR;function JE(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function vo(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:v,onAppear:m,onAfterAppear:d,onAppearCancelled:T}=e,_=String(t.key),b=JE(n,t),C=(P,x)=>{P&&yn(P,i,9,x)},A=(P,x)=>{const E=x[1];C(P,x),be(P)?P.every(D=>D.length<=1)&&E():P.length<=1&&E()},w={mode:r,persisted:o,beforeEnter(P){let x=a;if(!n.isMounted)if(s)x=v||a;else return;P[Ji]&&P[Ji](!0);const E=b[_];E&&$n(t,E)&&E.el[Ji]&&E.el[Ji](),C(x,[P])},enter(P){let x=l,E=c,D=u;if(!n.isMounted)if(s)x=m||l,E=d||c,D=T||u;else return;let I=!1;const N=P[dl]=G=>{I||(I=!0,G?C(D,[P]):C(E,[P]),w.delayedLeave&&w.delayedLeave(),P[dl]=void 0)};x?A(x,[P,N]):N()},leave(P,x){const E=String(t.key);if(P[dl]&&P[dl](!0),n.isUnmounting)return x();C(f,[P]);let D=!1;const I=P[Ji]=N=>{D||(D=!0,x(),N?C(g,[P]):C(p,[P]),P[Ji]=void 0,b[E]===t&&delete b[E])};b[E]=t,h?A(h,[P,I]):I()},clone(P){return vo(P,e,n,i)}};return w}function ju(t){if(Va(t))return t=fi(t),t.children=null,t}function Tm(t){return Va(t)?t.children?t.children[0]:void 0:t}function sr(t,e){t.shapeFlag&6&&t.component?sr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function lu(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===kt?(o.patchFlag&128&&s++,i=i.concat(lu(o.children,e,a))):(e||o.type!==Yt)&&i.push(a!=null?fi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Md(t,e){return Ne(t)?it({name:t.name},e,{setup:t}):t}const Zs=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function BR(t){Ne(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:s=200,timeout:r,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const f=()=>(u++,l=null,h()),h=()=>{let p;return l||(p=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((v,m)=>{a(g,()=>v(f()),()=>m(g),u+1)});throw g}).then(g=>p!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return Md({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const p=Pt;if(c)return()=>Yu(c,p);const g=T=>{l=null,vr(T,p,13,!i)};if(o&&p.suspense||Wa)return h().then(T=>()=>Yu(T,p)).catch(T=>(g(T),()=>i?ft(i,{error:T}):null));const v=na(!1),m=na(),d=na(!!s);return s&&setTimeout(()=>{d.value=!1},s),r!=null&&setTimeout(()=>{if(!v.value&&!m.value){const T=new Error(`Async component timed out after ${r}ms.`);g(T),m.value=T}},r),h().then(()=>{v.value=!0,p.parent&&Va(p.parent.vnode)&&(p.parent.effect.dirty=!0,ru(p.parent.update))}).catch(T=>{g(T),m.value=T}),()=>{if(v.value&&c)return Yu(c,p);if(m.value&&i)return ft(i,{error:m.value});if(n&&!d.value)return ft(n)}}})}function Yu(t,e){const{ref:n,props:i,children:s,ce:r}=e.vnode,o=ft(t,i,s);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const Va=t=>t.type.__isKeepAlive,kR={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Oi(),i=n.ctx;if(!i.renderer)return()=>{const T=e.default&&e.default();return T&&T.length===1?T[0]:T};const s=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,h=f("div");i.activate=(T,_,b,C,A)=>{const w=T.component;c(T,_,b,0,a),l(w.vnode,T,_,b,w,a,C,T.slotScopeIds,A),Bt(()=>{w.isDeactivated=!1,w.a&&Qr(w.a);const P=T.props&&T.props.onVnodeMounted;P&&on(P,w.parent,T)},a)},i.deactivate=T=>{const _=T.component;c(T,h,null,1,a),Bt(()=>{_.da&&Qr(_.da);const b=T.props&&T.props.onVnodeUnmounted;b&&on(b,_.parent,T),_.isDeactivated=!0},a)};function p(T){Ku(T),u(T,n,a,!0)}function g(T){s.forEach((_,b)=>{const C=hh(_.type);C&&(!T||!T(C))&&v(b)})}function v(T){const _=s.get(T);!o||!$n(_,o)?p(_):o&&Ku(o),s.delete(T),r.delete(T)}ia(()=>[t.include,t.exclude],([T,_])=>{T&&g(b=>Zo(T,b)),_&&g(b=>!Zo(_,b))},{flush:"post",deep:!0});let m=null;const d=()=>{m!=null&&s.set(m,Zu(n.subTree))};return za(d),uu(d),fu(()=>{s.forEach(T=>{const{subTree:_,suspense:b}=n,C=Zu(_);if(T.type===C.type&&T.key===C.key){Ku(C);const A=C.component.da;A&&Bt(A,b);return}p(T)})}),()=>{if(m=null,!e.default)return null;const T=e.default(),_=T[0];if(T.length>1)return o=null,T;if(!ms(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let b=Zu(_);const C=b.type,A=hh(Zs(b)?b.type.__asyncResolved||{}:C),{include:w,exclude:P,max:x}=t;if(w&&(!A||!Zo(w,A))||P&&A&&Zo(P,A))return o=b,_;const E=b.key==null?C:b.key,D=s.get(E);return b.el&&(b=fi(b),_.shapeFlag&128&&(_.ssContent=b)),m=E,D?(b.el=D.el,b.component=D.component,b.transition&&sr(b,b.transition),b.shapeFlag|=512,r.delete(E),r.add(E)):(r.add(E),x&&r.size>parseInt(x,10)&&v(r.values().next().value)),b.shapeFlag|=256,o=b,WE(_.type)?_:b}}},HR=kR;function Zo(t,e){return be(t)?t.some(n=>Zo(n,e)):He(t)?t.split(",").includes(e):tC(t)?t.test(e):!1}function QE(t,e){t0(t,"a",e)}function e0(t,e){t0(t,"da",e)}function t0(t,e,n=Pt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(cu(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Va(s.parent.vnode)&&VR(i,e,n,s),s=s.parent}}function VR(t,e,n,i){const s=cu(e,t,i,!0);hu(()=>{id(i[e],s)},n)}function Ku(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Zu(t){return t.shapeFlag&128?t.ssContent:t}function cu(t,e,n=Pt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;gr();const a=ar(n),l=yn(e,n,t,o);return a(),_r(),l});return i?s.unshift(r):s.push(r),r}}const Ii=t=>(e,n=Pt)=>(!Wa||t==="sp")&&cu(t,(...i)=>e(...i),n),n0=Ii("bm"),za=Ii("m"),i0=Ii("bu"),uu=Ii("u"),fu=Ii("bum"),hu=Ii("um"),s0=Ii("sp"),r0=Ii("rtg"),o0=Ii("rtc");function a0(t,e=Pt){cu("ec",t,e)}function zR(t,e,n,i){let s;const r=n&&n[i];if(be(t)||He(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(at(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function GR(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(be(i))for(let s=0;s<i.length;s++)t[i[s].name]=i[s].fn;else i&&(t[i.name]=i.key?(...s)=>{const r=i.fn(...s);return r&&(r.key=i.key),r}:i.fn)}return t}function WR(t,e,n={},i,s){if(Mt.isCE||Mt.parent&&Zs(Mt.parent)&&Mt.parent.isCE)return e!=="default"&&(n.name=e),ft("slot",n,i&&i());let r=t[e];r&&r._c&&(r._d=!1),Ga();const o=r&&l0(r(n)),a=Rd(kt,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function l0(t){return t.some(e=>ms(e)?!(e.type===Yt||e.type===kt&&!l0(e.children)):!0)?t:null}function $R(t,e){const n={};for(const i in t)n[e&&/[A-Z]/.test(i)?`on:${i}`:Jr(i)]=t[i];return n}const th=t=>t?N0(t)?pu(t)||t.proxy:th(t.parent):null,sa=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>th(t.parent),$root:t=>th(t.root),$emit:t=>t.emit,$options:t=>Ad(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ru(t.update)}),$nextTick:t=>t.n||(t.n=su.bind(t.proxy)),$watch:t=>OR.bind(t)}),Ju=(t,e)=>t!==st&&!t.__isScriptSetup&&nt(t,e),nh={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Ju(i,e))return o[e]=1,i[e];if(s!==st&&nt(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&nt(c,e))return o[e]=3,r[e];if(n!==st&&nt(n,e))return o[e]=4,n[e];ih&&(o[e]=0)}}const u=sa[e];let f,h;if(u)return e==="$attrs"&&un(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==st&&nt(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,nt(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Ju(s,e)?(s[e]=n,!0):i!==st&&nt(i,e)?(i[e]=n,!0):nt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==st&&nt(t,o)||Ju(e,o)||(a=r[0])&&nt(a,o)||nt(i,o)||nt(sa,o)||nt(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:nt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},XR=it({},nh,{get(t,e){if(e!==Symbol.unscopables)return nh.get(t,e,t)},has(t,e){return e[0]!=="_"&&!aC(e)}});function qR(){return null}function jR(){return null}function YR(t){}function KR(t){}function ZR(){return null}function JR(){}function QR(t,e){return null}function e1(){return c0().slots}function t1(){return c0().attrs}function c0(){const t=Oi();return t.setupContext||(t.setupContext=U0(t))}function Sa(t){return be(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function n1(t,e){const n=Sa(t);for(const i in e){if(i.startsWith("__skip"))continue;let s=n[i];s?be(s)||Ne(s)?s=n[i]={type:s,default:e[i]}:s.default=e[i]:s===null&&(s=n[i]={default:e[i]}),s&&e[`__skip_${i}`]&&(s.skipFactory=!0)}return n}function i1(t,e){return!t||!e?t||e:be(t)&&be(e)?t.concat(e):it({},Sa(t),Sa(e))}function s1(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}function r1(t){const e=Oi();let n=t();return ch(),sd(n)&&(n=n.catch(i=>{throw ar(e),i})),[n,()=>ar(e)]}let ih=!0;function o1(t){const e=Ad(t),n=t.proxy,i=t.ctx;ih=!1,e.beforeCreate&&Mm(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:d,beforeUnmount:T,destroyed:_,unmounted:b,render:C,renderTracked:A,renderTriggered:w,errorCaptured:P,serverPrefetch:x,expose:E,inheritAttrs:D,components:I,directives:N,filters:G}=e;if(c&&a1(c,i,null),o)for(const K in o){const k=o[K];Ne(k)&&(i[K]=k.bind(n))}if(s){const K=s.call(n,n);at(K)&&(t.data=nu(K))}if(ih=!0,r)for(const K in r){const k=r[K],le=Ne(k)?k.bind(n,n):Ne(k.get)?k.get.bind(n,n):Lt,ce=!Ne(k)&&Ne(k.set)?k.set.bind(n):Lt,xe=F0({get:le,set:ce});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>xe.value,set:we=>xe.value=we})}if(a)for(const K in a)u0(a[K],i,n,K);if(l){const K=Ne(l)?l.call(n):l;Reflect.ownKeys(K).forEach(k=>{h0(k,K[k])})}u&&Mm(u,t,"c");function z(K,k){be(k)?k.forEach(le=>K(le.bind(n))):k&&K(k.bind(n))}if(z(n0,f),z(za,h),z(i0,p),z(uu,g),z(QE,v),z(e0,m),z(a0,P),z(o0,A),z(r0,w),z(fu,T),z(hu,b),z(s0,x),be(E))if(E.length){const K=t.exposed||(t.exposed={});E.forEach(k=>{Object.defineProperty(K,k,{get:()=>n[k],set:le=>n[k]=le})})}else t.exposed||(t.exposed={});C&&t.render===Lt&&(t.render=C),D!=null&&(t.inheritAttrs=D),I&&(t.components=I),N&&(t.directives=N)}function a1(t,e,n=Lt){be(t)&&(t=sh(t));for(const i in t){const s=t[i];let r;at(s)?"default"in s?r=ra(s.from||i,s.default,!0):r=ra(s.from||i):r=ra(s),Vt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Mm(t,e,n){yn(be(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function u0(t,e,n,i){const s=i.includes(".")?KE(n,i):()=>n[i];if(He(t)){const r=e[t];Ne(r)&&ia(s,r)}else if(Ne(t))ia(s,t.bind(n));else if(at(t))if(be(t))t.forEach(r=>u0(r,e,n,i));else{const r=Ne(t.handler)?t.handler.bind(n):e[t.handler];Ne(r)&&ia(s,r,t)}}function Ad(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>gc(l,c,o,!0)),gc(l,e,o)),at(e)&&r.set(e,l),l}function gc(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&gc(t,r,n,!0),s&&s.forEach(o=>gc(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=l1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const l1={data:Am,props:wm,emits:wm,methods:Jo,computed:Jo,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:Jo,directives:Jo,watch:u1,provide:Am,inject:c1};function Am(t,e){return e?t?function(){return it(Ne(t)?t.call(this,this):t,Ne(e)?e.call(this,this):e)}:e:t}function c1(t,e){return Jo(sh(t),sh(e))}function sh(t){if(be(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Zt(t,e){return t?[...new Set([].concat(t,e))]:e}function Jo(t,e){return t?it(Object.create(null),t,e):e}function wm(t,e){return t?be(t)&&be(e)?[...new Set([...t,...e])]:it(Object.create(null),Sa(t),Sa(e??{})):e}function u1(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const i in e)n[i]=Zt(t[i],e[i]);return n}function f0(){return{app:null,config:{isNativeTag:Zl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let f1=0;function h1(t,e){return function(i,s=null){Ne(i)||(i=it({},i)),s!=null&&!at(s)&&(s=null);const r=f0(),o=new WeakSet;let a=!1;const l=r.app={_uid:f1++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:H0,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ne(c.install)?(o.add(c),c.install(l,...u)):Ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const h=ft(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,pu(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=io;io=l;try{return c()}finally{io=u}}};return l}}let io=null;function h0(t,e){if(Pt){let n=Pt.provides;const i=Pt.parent&&Pt.parent.provides;i===n&&(n=Pt.provides=Object.create(i)),n[t]=e}}function ra(t,e,n=!1){const i=Pt||Mt;if(i||io){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:io._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ne(e)?e.call(i&&i.proxy):e}}function d1(){return!!(Pt||Mt||io)}function p1(t,e,n,i=!1){const s={},r={};fc(r,du,1),t.propsDefaults=Object.create(null),d0(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:DE(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function m1(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Qe(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ou(t.emitsOptions,h))continue;const p=e[h];if(l)if(nt(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const g=gt(h);s[g]=rh(l,a,g,p,t,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{d0(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!nt(e,f)&&((u=En(f))===f||!nt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=rh(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!nt(e,f))&&(delete r[f],c=!0)}c&&Ri(t,"set","$attrs")}function d0(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(rs(l))continue;const c=e[l];let u;s&&nt(s,u=gt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:ou(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Qe(n),c=a||st;for(let u=0;u<r.length;u++){const f=r[u];n[f]=rh(s,l,f,c[f],t,!nt(c,f))}}return o}function rh(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ne(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=ar(s);i=c[n]=l.call(null,e),u()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===En(n))&&(i=!0))}return i}function p0(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!Ne(t)){const u=f=>{l=!0;const[h,p]=p0(f,e,!0);it(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return at(t)&&i.set(t,Kr),Kr;if(be(r))for(let u=0;u<r.length;u++){const f=gt(r[u]);Cm(f)&&(o[f]=st)}else if(r)for(const u in r){const f=gt(u);if(Cm(f)){const h=r[u],p=o[f]=be(h)||Ne(h)?{type:h}:it({},h);if(p){const g=Lm(Boolean,p.type),v=Lm(String,p.type);p[0]=g>-1,p[1]=v<0||g<v,(g>-1||nt(p,"default"))&&a.push(f)}}}const c=[o,a];return at(t)&&i.set(t,c),c}function Cm(t){return t[0]!=="$"&&!rs(t)}function Rm(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Pm(t,e){return Rm(t)===Rm(e)}function Lm(t,e){return be(e)?e.findIndex(n=>Pm(n,t)):Ne(e)&&Pm(e,t)?0:-1}const m0=t=>t[0]==="_"||t==="$stable",wd=t=>be(t)?t.map(_n):[_n(t)],g1=(t,e,n)=>{if(e._n)return e;const i=vd((...s)=>wd(e(...s)),n);return i._c=!1,i},g0=(t,e,n)=>{const i=t._ctx;for(const s in t){if(m0(s))continue;const r=t[s];if(Ne(r))e[s]=g1(s,r,i);else if(r!=null){const o=wd(r);e[s]=()=>o}}},_0=(t,e)=>{const n=wd(e);t.slots.default=()=>n},_1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Qe(e),fc(e,"_",n)):g0(e,t.slots={})}else t.slots={},e&&_0(t,e);fc(t.slots,du,1)},v1=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=st;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(it(s,e),!n&&a===1&&delete s._):(r=!e.$stable,g0(e,s)),o=e}else e&&(_0(t,e),o={default:1});if(r)for(const a in s)!m0(a)&&o[a]==null&&delete s[a]};function _c(t,e,n,i,s=!1){if(be(t)){t.forEach((h,p)=>_c(h,e&&(be(e)?e[p]:e),n,i,s));return}if(Zs(i)&&!s)return;const r=i.shapeFlag&4?pu(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===st?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(He(c)?(u[c]=null,nt(f,c)&&(f[c]=null)):Vt(c)&&(c.value=null)),Ne(l))Pi(l,a,12,[o,u]);else{const h=He(l),p=Vt(l);if(h||p){const g=()=>{if(t.f){const v=h?nt(f,l)?f[l]:u[l]:l.value;s?be(v)&&id(v,r):be(v)?v.includes(r)||v.push(r):h?(u[l]=[r],nt(f,l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,nt(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Bt(g,n)):g()}}}let Vi=!1;const E1=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",y1=t=>t.namespaceURI.includes("MathML"),pl=t=>{if(E1(t))return"svg";if(y1(t))return"mathml"},ml=t=>t.nodeType===8;function S1(t){const{mt:e,p:n,o:{patchProp:i,createText:s,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(_,b)=>{if(!b.hasChildNodes()){n(null,_,b),mc(),b._vnode=_;return}Vi=!1,f(b.firstChild,_,null,null,null),mc(),b._vnode=_,Vi&&console.error("Hydration completed but contains mismatches.")},f=(_,b,C,A,w,P=!1)=>{const x=ml(_)&&_.data==="[",E=()=>v(_,b,C,A,w,x),{type:D,ref:I,shapeFlag:N,patchFlag:G}=b;let q=_.nodeType;b.el=_,G===-2&&(P=!1,b.dynamicChildren=null);let z=null;switch(D){case rr:q!==3?b.children===""?(l(b.el=s(""),o(_),_),z=_):z=E():(_.data!==b.children&&(Vi=!0,_.data=b.children),z=r(_));break;case Yt:T(_)?(z=r(_),d(b.el=_.content.firstChild,_,C)):q!==8||x?z=E():z=r(_);break;case Js:if(x&&(_=r(_),q=_.nodeType),q===1||q===3){z=_;const K=!b.children.length;for(let k=0;k<b.staticCount;k++)K&&(b.children+=z.nodeType===1?z.outerHTML:z.data),k===b.staticCount-1&&(b.anchor=z),z=r(z);return x?r(z):z}else E();break;case kt:x?z=g(_,b,C,A,w,P):z=E();break;default:if(N&1)(q!==1||b.type.toLowerCase()!==_.tagName.toLowerCase())&&!T(_)?z=E():z=h(_,b,C,A,w,P);else if(N&6){b.slotScopeIds=w;const K=o(_);if(x?z=m(_):ml(_)&&_.data==="teleport start"?z=m(_,_.data,"teleport end"):z=r(_),e(b,K,null,C,A,pl(K),P),Zs(b)){let k;x?(k=ft(kt),k.anchor=z?z.previousSibling:K.lastChild):k=_.nodeType===3?Ld(""):ft("div"),k.el=_,b.component.subTree=k}}else N&64?q!==8?z=E():z=b.type.hydrate(_,b,C,A,w,P,t,p):N&128&&(z=b.type.hydrate(_,b,C,A,pl(o(_)),w,P,t,f))}return I!=null&&_c(I,null,A,b),z},h=(_,b,C,A,w,P)=>{P=P||!!b.dynamicChildren;const{type:x,props:E,patchFlag:D,shapeFlag:I,dirs:N,transition:G}=b,q=x==="input"||x==="option";if(q||D!==-1){N&&Zn(b,null,C,"created");let z=!1;if(T(_)){z=S0(A,G)&&C&&C.vnode.props&&C.vnode.props.appear;const k=_.content.firstChild;z&&G.beforeEnter(k),d(k,_,C),b.el=_=k}if(I&16&&!(E&&(E.innerHTML||E.textContent))){let k=p(_.firstChild,b,_,C,A,w,P);for(;k;){Vi=!0;const le=k;k=k.nextSibling,a(le)}}else I&8&&_.textContent!==b.children&&(Vi=!0,_.textContent=b.children);if(E)if(q||!P||D&48)for(const k in E)(q&&(k.endsWith("value")||k==="indeterminate")||dr(k)&&!rs(k)||k[0]===".")&&i(_,k,null,E[k],void 0,void 0,C);else E.onClick&&i(_,"onClick",null,E.onClick,void 0,void 0,C);let K;(K=E&&E.onVnodeBeforeMount)&&on(K,C,b),N&&Zn(b,null,C,"beforeMount"),((K=E&&E.onVnodeMounted)||N||z)&&$E(()=>{K&&on(K,C,b),z&&G.enter(_),N&&Zn(b,null,C,"mounted")},A)}return _.nextSibling},p=(_,b,C,A,w,P,x)=>{x=x||!!b.dynamicChildren;const E=b.children,D=E.length;for(let I=0;I<D;I++){const N=x?E[I]:E[I]=_n(E[I]);if(_)_=f(_,N,A,w,P,x);else{if(N.type===rr&&!N.children)continue;Vi=!0,n(null,N,C,null,A,w,pl(C),P)}}return _},g=(_,b,C,A,w,P)=>{const{slotScopeIds:x}=b;x&&(w=w?w.concat(x):x);const E=o(_),D=p(r(_),b,E,C,A,w,P);return D&&ml(D)&&D.data==="]"?r(b.anchor=D):(Vi=!0,l(b.anchor=c("]"),E,D),D)},v=(_,b,C,A,w,P)=>{if(Vi=!0,b.el=null,P){const D=m(_);for(;;){const I=r(_);if(I&&I!==D)a(I);else break}}const x=r(_),E=o(_);return a(_),n(null,b,E,x,C,A,pl(E),w),x},m=(_,b="[",C="]")=>{let A=0;for(;_;)if(_=r(_),_&&ml(_)&&(_.data===b&&A++,_.data===C)){if(A===0)return r(_);A--}return _},d=(_,b,C)=>{const A=b.parentNode;A&&A.replaceChild(_,b);let w=C;for(;w;)w.vnode.el===b&&(w.vnode.el=w.subTree.el=_),w=w.parent},T=_=>_.nodeType===1&&_.tagName.toLowerCase()==="template";return[u,f]}const Bt=$E;function v0(t){return y0(t)}function E0(t){return y0(t,S1)}function y0(t,e){const n=pE();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Lt,insertStaticContent:g}=t,v=(L,U,V,te=null,M=null,S=null,O=void 0,F=null,H=!!U.dynamicChildren)=>{if(L===U)return;L&&!$n(L,U)&&(te=pe(L),we(L,M,S,!0),L=null),U.patchFlag===-2&&(H=!1,U.dynamicChildren=null);const{type:B,ref:ie,shapeFlag:Y}=U;switch(B){case rr:m(L,U,V,te);break;case Yt:d(L,U,V,te);break;case Js:L==null&&T(U,V,te,O);break;case kt:I(L,U,V,te,M,S,O,F,H);break;default:Y&1?C(L,U,V,te,M,S,O,F,H):Y&6?N(L,U,V,te,M,S,O,F,H):(Y&64||Y&128)&&B.process(L,U,V,te,M,S,O,F,H,De)}ie!=null&&M&&_c(ie,L&&L.ref,S,U||L,!U)},m=(L,U,V,te)=>{if(L==null)i(U.el=a(U.children),V,te);else{const M=U.el=L.el;U.children!==L.children&&c(M,U.children)}},d=(L,U,V,te)=>{L==null?i(U.el=l(U.children||""),V,te):U.el=L.el},T=(L,U,V,te)=>{[L.el,L.anchor]=g(L.children,U,V,te,L.el,L.anchor)},_=({el:L,anchor:U},V,te)=>{let M;for(;L&&L!==U;)M=h(L),i(L,V,te),L=M;i(U,V,te)},b=({el:L,anchor:U})=>{let V;for(;L&&L!==U;)V=h(L),s(L),L=V;s(U)},C=(L,U,V,te,M,S,O,F,H)=>{U.type==="svg"?O="svg":U.type==="math"&&(O="mathml"),L==null?A(U,V,te,M,S,O,F,H):x(L,U,M,S,O,F,H)},A=(L,U,V,te,M,S,O,F)=>{let H,B;const{props:ie,shapeFlag:Y,transition:ae,dirs:he}=L;if(H=L.el=o(L.type,S,ie&&ie.is,ie),Y&8?u(H,L.children):Y&16&&P(L.children,H,null,te,M,Qu(L,S),O,F),he&&Zn(L,null,te,"created"),w(H,L,L.scopeId,O,te),ie){for(const fe in ie)fe!=="value"&&!rs(fe)&&r(H,fe,null,ie[fe],S,L.children,te,M,_e);"value"in ie&&r(H,"value",null,ie.value,S),(B=ie.onVnodeBeforeMount)&&on(B,te,L)}he&&Zn(L,null,te,"beforeMount");const se=S0(M,ae);se&&ae.beforeEnter(H),i(H,U,V),((B=ie&&ie.onVnodeMounted)||se||he)&&Bt(()=>{B&&on(B,te,L),se&&ae.enter(H),he&&Zn(L,null,te,"mounted")},M)},w=(L,U,V,te,M)=>{if(V&&p(L,V),te)for(let S=0;S<te.length;S++)p(L,te[S]);if(M){let S=M.subTree;if(U===S){const O=M.vnode;w(L,O,O.scopeId,O.slotScopeIds,M.parent)}}},P=(L,U,V,te,M,S,O,F,H=0)=>{for(let B=H;B<L.length;B++){const ie=L[B]=F?Qi(L[B]):_n(L[B]);v(null,ie,U,V,te,M,S,O,F)}},x=(L,U,V,te,M,S,O)=>{const F=U.el=L.el;let{patchFlag:H,dynamicChildren:B,dirs:ie}=U;H|=L.patchFlag&16;const Y=L.props||st,ae=U.props||st;let he;if(V&&ws(V,!1),(he=ae.onVnodeBeforeUpdate)&&on(he,V,U,L),ie&&Zn(U,L,V,"beforeUpdate"),V&&ws(V,!0),B?E(L.dynamicChildren,B,F,V,te,Qu(U,M),S):O||k(L,U,F,null,V,te,Qu(U,M),S,!1),H>0){if(H&16)D(F,U,Y,ae,V,te,M);else if(H&2&&Y.class!==ae.class&&r(F,"class",null,ae.class,M),H&4&&r(F,"style",Y.style,ae.style,M),H&8){const se=U.dynamicProps;for(let fe=0;fe<se.length;fe++){const Se=se[fe],ge=Y[Se],Ee=ae[Se];(Ee!==ge||Se==="value")&&r(F,Se,ge,Ee,M,L.children,V,te,_e)}}H&1&&L.children!==U.children&&u(F,U.children)}else!O&&B==null&&D(F,U,Y,ae,V,te,M);((he=ae.onVnodeUpdated)||ie)&&Bt(()=>{he&&on(he,V,U,L),ie&&Zn(U,L,V,"updated")},te)},E=(L,U,V,te,M,S,O)=>{for(let F=0;F<U.length;F++){const H=L[F],B=U[F],ie=H.el&&(H.type===kt||!$n(H,B)||H.shapeFlag&70)?f(H.el):V;v(H,B,ie,null,te,M,S,O,!0)}},D=(L,U,V,te,M,S,O)=>{if(V!==te){if(V!==st)for(const F in V)!rs(F)&&!(F in te)&&r(L,F,V[F],null,O,U.children,M,S,_e);for(const F in te){if(rs(F))continue;const H=te[F],B=V[F];H!==B&&F!=="value"&&r(L,F,B,H,O,U.children,M,S,_e)}"value"in te&&r(L,"value",V.value,te.value,O)}},I=(L,U,V,te,M,S,O,F,H)=>{const B=U.el=L?L.el:a(""),ie=U.anchor=L?L.anchor:a("");let{patchFlag:Y,dynamicChildren:ae,slotScopeIds:he}=U;he&&(F=F?F.concat(he):he),L==null?(i(B,V,te),i(ie,V,te),P(U.children||[],V,ie,M,S,O,F,H)):Y>0&&Y&64&&ae&&L.dynamicChildren?(E(L.dynamicChildren,ae,V,M,S,O,F),(U.key!=null||M&&U===M.subTree)&&Cd(L,U,!0)):k(L,U,V,ie,M,S,O,F,H)},N=(L,U,V,te,M,S,O,F,H)=>{U.slotScopeIds=F,L==null?U.shapeFlag&512?M.ctx.activate(U,V,te,O,H):G(U,V,te,M,S,O,H):q(L,U,H)},G=(L,U,V,te,M,S,O)=>{const F=L.component=L0(L,te,M);if(Va(L)&&(F.ctx.renderer=De),D0(F),F.asyncDep){if(M&&M.registerDep(F,z),!L.el){const H=F.subTree=ft(Yt);d(null,H,U,V)}}else z(F,L,U,V,M,S,O)},q=(L,U,V)=>{const te=U.component=L.component;if(xR(L,U,V))if(te.asyncDep&&!te.asyncResolved){K(te,U,V);return}else te.next=U,dR(te.update),te.effect.dirty=!0,te.update();else U.el=L.el,te.vnode=U},z=(L,U,V,te,M,S,O)=>{const F=()=>{if(L.isMounted){let{next:ie,bu:Y,u:ae,parent:he,vnode:se}=L;{const Fe=x0(L);if(Fe){ie&&(ie.el=se.el,K(L,ie,O)),Fe.asyncDep.then(()=>{L.isUnmounted||F()});return}}let fe=ie,Se;ws(L,!1),ie?(ie.el=se.el,K(L,ie,O)):ie=se,Y&&Qr(Y),(Se=ie.props&&ie.props.onVnodeBeforeUpdate)&&on(Se,he,ie,se),ws(L,!0);const ge=Jl(L),Ee=L.subTree;L.subTree=ge,v(Ee,ge,f(Ee.el),pe(Ee),L,M,S),ie.el=ge.el,fe===null&&Ed(L,ge.el),ae&&Bt(ae,M),(Se=ie.props&&ie.props.onVnodeUpdated)&&Bt(()=>on(Se,he,ie,se),M)}else{let ie;const{el:Y,props:ae}=U,{bm:he,m:se,parent:fe}=L,Se=Zs(U);if(ws(L,!1),he&&Qr(he),!Se&&(ie=ae&&ae.onVnodeBeforeMount)&&on(ie,fe,U),ws(L,!0),Y&&Ue){const ge=()=>{L.subTree=Jl(L),Ue(Y,L.subTree,L,M,null)};Se?U.type.__asyncLoader().then(()=>!L.isUnmounted&&ge()):ge()}else{const ge=L.subTree=Jl(L);v(null,ge,V,te,L,M,S),U.el=ge.el}if(se&&Bt(se,M),!Se&&(ie=ae&&ae.onVnodeMounted)){const ge=U;Bt(()=>on(ie,fe,ge),M)}(U.shapeFlag&256||fe&&Zs(fe.vnode)&&fe.vnode.shapeFlag&256)&&L.a&&Bt(L.a,M),L.isMounted=!0,U=V=te=null}},H=L.effect=new _o(F,Lt,()=>ru(B),L.scope),B=L.update=()=>{H.dirty&&H.run()};B.id=L.uid,ws(L,!0),B()},K=(L,U,V)=>{U.component=L;const te=L.vnode.props;L.vnode=U,L.next=null,m1(L,U.props,te,V),v1(L,U.children,V),gr(),ym(L),_r()},k=(L,U,V,te,M,S,O,F,H=!1)=>{const B=L&&L.children,ie=L?L.shapeFlag:0,Y=U.children,{patchFlag:ae,shapeFlag:he}=U;if(ae>0){if(ae&128){ce(B,Y,V,te,M,S,O,F,H);return}else if(ae&256){le(B,Y,V,te,M,S,O,F,H);return}}he&8?(ie&16&&_e(B,M,S),Y!==B&&u(V,Y)):ie&16?he&16?ce(B,Y,V,te,M,S,O,F,H):_e(B,M,S,!0):(ie&8&&u(V,""),he&16&&P(Y,V,te,M,S,O,F,H))},le=(L,U,V,te,M,S,O,F,H)=>{L=L||Kr,U=U||Kr;const B=L.length,ie=U.length,Y=Math.min(B,ie);let ae;for(ae=0;ae<Y;ae++){const he=U[ae]=H?Qi(U[ae]):_n(U[ae]);v(L[ae],he,V,null,M,S,O,F,H)}B>ie?_e(L,M,S,!0,!1,Y):P(U,V,te,M,S,O,F,H,Y)},ce=(L,U,V,te,M,S,O,F,H)=>{let B=0;const ie=U.length;let Y=L.length-1,ae=ie-1;for(;B<=Y&&B<=ae;){const he=L[B],se=U[B]=H?Qi(U[B]):_n(U[B]);if($n(he,se))v(he,se,V,null,M,S,O,F,H);else break;B++}for(;B<=Y&&B<=ae;){const he=L[Y],se=U[ae]=H?Qi(U[ae]):_n(U[ae]);if($n(he,se))v(he,se,V,null,M,S,O,F,H);else break;Y--,ae--}if(B>Y){if(B<=ae){const he=ae+1,se=he<ie?U[he].el:te;for(;B<=ae;)v(null,U[B]=H?Qi(U[B]):_n(U[B]),V,se,M,S,O,F,H),B++}}else if(B>ae)for(;B<=Y;)we(L[B],M,S,!0),B++;else{const he=B,se=B,fe=new Map;for(B=se;B<=ae;B++){const Ie=U[B]=H?Qi(U[B]):_n(U[B]);Ie.key!=null&&fe.set(Ie.key,B)}let Se,ge=0;const Ee=ae-se+1;let Fe=!1,qe=0;const Ye=new Array(Ee);for(B=0;B<Ee;B++)Ye[B]=0;for(B=he;B<=Y;B++){const Ie=L[B];if(ge>=Ee){we(Ie,M,S,!0);continue}let Te;if(Ie.key!=null)Te=fe.get(Ie.key);else for(Se=se;Se<=ae;Se++)if(Ye[Se-se]===0&&$n(Ie,U[Se])){Te=Se;break}Te===void 0?we(Ie,M,S,!0):(Ye[Te-se]=B+1,Te>=qe?qe=Te:Fe=!0,v(Ie,U[Te],V,null,M,S,O,F,H),ge++)}const Ze=Fe?x1(Ye):Kr;for(Se=Ze.length-1,B=Ee-1;B>=0;B--){const Ie=se+B,Te=U[Ie],y=Ie+1<ie?U[Ie+1].el:te;Ye[B]===0?v(null,Te,V,y,M,S,O,F,H):Fe&&(Se<0||B!==Ze[Se]?xe(Te,V,y,2):Se--)}}},xe=(L,U,V,te,M=null)=>{const{el:S,type:O,transition:F,children:H,shapeFlag:B}=L;if(B&6){xe(L.component.subTree,U,V,te);return}if(B&128){L.suspense.move(U,V,te);return}if(B&64){O.move(L,U,V,De);return}if(O===kt){i(S,U,V);for(let Y=0;Y<H.length;Y++)xe(H[Y],U,V,te);i(L.anchor,U,V);return}if(O===Js){_(L,U,V);return}if(te!==2&&B&1&&F)if(te===0)F.beforeEnter(S),i(S,U,V),Bt(()=>F.enter(S),M);else{const{leave:Y,delayLeave:ae,afterLeave:he}=F,se=()=>i(S,U,V),fe=()=>{Y(S,()=>{se(),he&&he()})};ae?ae(S,se,fe):fe()}else i(S,U,V)},we=(L,U,V,te=!1,M=!1)=>{const{type:S,props:O,ref:F,children:H,dynamicChildren:B,shapeFlag:ie,patchFlag:Y,dirs:ae}=L;if(F!=null&&_c(F,null,V,L,!0),ie&256){U.ctx.deactivate(L);return}const he=ie&1&&ae,se=!Zs(L);let fe;if(se&&(fe=O&&O.onVnodeBeforeUnmount)&&on(fe,U,L),ie&6)de(L.component,V,te);else{if(ie&128){L.suspense.unmount(V,te);return}he&&Zn(L,null,U,"beforeUnmount"),ie&64?L.type.remove(L,U,V,M,De,te):B&&(S!==kt||Y>0&&Y&64)?_e(B,U,V,!1,!0):(S===kt&&Y&384||!M&&ie&16)&&_e(H,U,V),te&&je(L)}(se&&(fe=O&&O.onVnodeUnmounted)||he)&&Bt(()=>{fe&&on(fe,U,L),he&&Zn(L,null,U,"unmounted")},V)},je=L=>{const{type:U,el:V,anchor:te,transition:M}=L;if(U===kt){ne(V,te);return}if(U===Js){b(L);return}const S=()=>{s(V),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(L.shapeFlag&1&&M&&!M.persisted){const{leave:O,delayLeave:F}=M,H=()=>O(V,S);F?F(L.el,S,H):H()}else S()},ne=(L,U)=>{let V;for(;L!==U;)V=h(L),s(L),L=V;s(U)},de=(L,U,V)=>{const{bum:te,scope:M,update:S,subTree:O,um:F}=L;te&&Qr(te),M.stop(),S&&(S.active=!1,we(O,L,U,V)),F&&Bt(F,U),Bt(()=>{L.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},_e=(L,U,V,te=!1,M=!1,S=0)=>{for(let O=S;O<L.length;O++)we(L[O],U,V,te,M)},pe=L=>L.shapeFlag&6?pe(L.component.subTree):L.shapeFlag&128?L.suspense.next():h(L.anchor||L.el);let Ce=!1;const Pe=(L,U,V)=>{L==null?U._vnode&&we(U._vnode,null,null,!0):v(U._vnode||null,L,U,null,null,null,V),Ce||(Ce=!0,ym(),mc(),Ce=!1),U._vnode=L},De={p:v,um:we,m:xe,r:je,mt:G,mc:P,pc:k,pbc:E,n:pe,o:t};let X,Ue;return e&&([X,Ue]=e(De)),{render:Pe,hydrate:X,createApp:h1(Pe,X)}}function Qu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ws({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function S0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Cd(t,e,n=!1){const i=t.children,s=e.children;if(be(i)&&be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Qi(s[r]),a.el=o.el),n||Cd(o,a)),a.type===rr&&(a.el=o.el)}}function x1(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function x0(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:x0(e)}const b1=t=>t.__isTeleport,oa=t=>t&&(t.disabled||t.disabled===""),Nm=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Dm=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,oh=(t,e)=>{const n=t&&t.to;return He(n)?e?e(n):null:n},T1={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:f,pbc:h,o:{insert:p,querySelector:g,createText:v,createComment:m}}=c,d=oa(e.props);let{shapeFlag:T,children:_,dynamicChildren:b}=e;if(t==null){const C=e.el=v(""),A=e.anchor=v("");p(C,n,i),p(A,n,i);const w=e.target=oh(e.props,g),P=e.targetAnchor=v("");w&&(p(P,w),o==="svg"||Nm(w)?o="svg":(o==="mathml"||Dm(w))&&(o="mathml"));const x=(E,D)=>{T&16&&u(_,E,D,s,r,o,a,l)};d?x(n,A):w&&x(w,P)}else{e.el=t.el;const C=e.anchor=t.anchor,A=e.target=t.target,w=e.targetAnchor=t.targetAnchor,P=oa(t.props),x=P?n:A,E=P?C:w;if(o==="svg"||Nm(A)?o="svg":(o==="mathml"||Dm(A))&&(o="mathml"),b?(h(t.dynamicChildren,b,x,s,r,o,a),Cd(t,e,!0)):l||f(t,e,x,E,s,r,o,a,!1),d)P?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):gl(e,n,C,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const D=e.target=oh(e.props,g);D&&gl(e,D,null,c,0)}else P&&gl(e,A,w,c,1)}b0(e)},remove(t,e,n,i,{um:s,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:f,props:h}=t;if(f&&r(u),o&&r(c),a&16){const p=o||!oa(h);for(let g=0;g<l.length;g++){const v=l[g];s(v,e,n,p,!!v.dynamicChildren)}}},move:gl,hydrate:M1};function gl(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=r===2;if(f&&i(o,e,n),(!f||oa(u))&&l&16)for(let h=0;h<c.length;h++)s(c[h],e,n,2);f&&i(a,e,n)}function M1(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=oh(e.props,l);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(oa(e.props))e.anchor=c(o(t),e,a(t),n,i,s,r),e.targetAnchor=f;else{e.anchor=o(t);let h=f;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(f,e,u,n,i,s,r)}b0(e)}return e.anchor&&o(e.anchor)}const A1=T1;function b0(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const kt=Symbol.for("v-fgt"),rr=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),Js=Symbol.for("v-stc"),aa=[];let ln=null;function Ga(t=!1){aa.push(ln=t?null:[])}function T0(){aa.pop(),ln=aa[aa.length-1]||null}let or=1;function ah(t){or+=t}function M0(t){return t.dynamicChildren=or>0?ln||Kr:null,T0(),or>0&&ln&&ln.push(t),t}function A0(t,e,n,i,s,r){return M0(Pd(t,e,n,i,s,r,!0))}function Rd(t,e,n,i,s){return M0(ft(t,e,n,i,s,!0))}function ms(t){return t?t.__v_isVNode===!0:!1}function $n(t,e){return t.type===e.type&&t.key===e.key}function w1(t){}const du="__vInternal",w0=({key:t})=>t??null,Ql=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||Vt(t)||Ne(t)?{i:Mt,r:t,k:e,f:!!n}:t:null);function Pd(t,e=null,n=null,i=0,s=null,r=t===kt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&w0(e),ref:e&&Ql(e),scopeId:au,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mt};return a?(Nd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=He(n)?8:16),or>0&&!o&&ln&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ln.push(l),l}const ft=C1;function C1(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===GE)&&(t=Yt),ms(t)){const a=fi(t,e,!0);return n&&Nd(a,n),or>0&&!r&&ln&&(a.shapeFlag&6?ln[ln.indexOf(t)]=a:ln.push(a)),a.patchFlag|=-2,a}if(O1(t)&&(t=t.__vccOpts),e){e=C0(e);let{class:a,style:l}=e;a&&!He(a)&&(e.class=ka(a)),at(l)&&(fd(l)&&!be(l)&&(l=it({},l)),e.style=Ba(l))}const o=He(t)?1:WE(t)?128:b1(t)?64:at(t)?4:Ne(t)?2:0;return Pd(t,e,n,i,s,o,r,!0)}function C0(t){return t?fd(t)||du in t?it({},t):t:null}function fi(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?P0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&w0(a),ref:e&&e.ref?n&&s?be(s)?s.concat(Ql(e)):[s,Ql(e)]:Ql(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fi(t.ssContent),ssFallback:t.ssFallback&&fi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ld(t=" ",e=0){return ft(rr,null,t,e)}function R0(t,e){const n=ft(Js,null,t);return n.staticCount=e,n}function R1(t="",e=!1){return e?(Ga(),Rd(Yt,null,t)):ft(Yt,null,t)}function _n(t){return t==null||typeof t=="boolean"?ft(Yt):be(t)?ft(kt,null,t.slice()):typeof t=="object"?Qi(t):ft(rr,null,String(t))}function Qi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fi(t)}function Nd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(be(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Nd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(du in e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),i&64?(n=16,e=[Ld(e)]):n=8);t.children=e,t.shapeFlag|=n}function P0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ka([e.class,i.class]));else if(s==="style")e.style=Ba([e.style,i.style]);else if(dr(s)){const r=e[s],o=i[s];o&&r!==o&&!(be(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function on(t,e,n,i=null){yn(t,e,7,[n,i])}const P1=f0();let L1=0;function L0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||P1,r={uid:L1++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new od(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:p0(i,s),emitsOptions:zE(i,s),emit:null,emitted:null,propsDefaults:st,inheritAttrs:i.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=mR.bind(null,r),t.ce&&t.ce(r),r}let Pt=null;const Oi=()=>Pt||Mt;let vc,lh;{const t=pE(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};vc=e("__VUE_INSTANCE_SETTERS__",n=>Pt=n),lh=e("__VUE_SSR_SETTERS__",n=>Wa=n)}const ar=t=>{const e=Pt;return vc(t),t.scope.on(),()=>{t.scope.off(),vc(e)}},ch=()=>{Pt&&Pt.scope.off(),vc(null)};function N0(t){return t.vnode.shapeFlag&4}let Wa=!1;function D0(t,e=!1){e&&lh(e);const{props:n,children:i}=t.vnode,s=N0(t);p1(t,n,s,e),_1(t,i);const r=s?N1(t,e):void 0;return e&&lh(!1),r}function N1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=hd(new Proxy(t.ctx,nh));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?U0(t):null,r=ar(t);gr();const o=Pi(i,t,0,[t.props,s]);if(_r(),r(),sd(o)){if(o.then(ch,ch),e)return o.then(a=>{uh(t,a,e)}).catch(a=>{vr(a,t,0)});t.asyncDep=o}else uh(t,o,e)}else O0(t,e)}function uh(t,e,n){Ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:at(e)&&(t.setupState=gd(e)),O0(t,n)}let Ec,fh;function I0(t){Ec=t,fh=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,XR))}}const D1=()=>!Ec;function O0(t,e,n){const i=t.type;if(!t.render){if(!e&&Ec&&!i.render){const s=i.template||Ad(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=it(it({isCustomElement:r,delimiters:a},o),l);i.render=Ec(s,c)}}t.render=i.render||Lt,fh&&fh(t)}{const s=ar(t);gr();try{o1(t)}finally{_r(),s()}}}function I1(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return un(t,"get","$attrs"),e[n]}}))}function U0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return I1(t)},slots:t.slots,emit:t.emit,expose:e}}function pu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(gd(hd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in sa)return sa[n](t)},has(e,n){return n in e||n in sa}}))}function hh(t,e=!0){return Ne(t)?t.displayName||t.name:t.name||e&&t.__name}function O1(t){return Ne(t)&&"__vccOpts"in t}const F0=(t,e)=>YC(t,e,Wa);function U1(t,e,n=st){const i=Oi(),s=gt(e),r=En(e),o=UE((l,c)=>{let u;return YE(()=>{const f=t[e];Yn(u,f)&&(u=f,c())}),{get(){return l(),n.get?n.get(u):u},set(f){const h=i.vnode.props;!(h&&(e in h||s in h||r in h)&&(`onUpdate:${e}`in h||`onUpdate:${s}`in h||`onUpdate:${r}`in h))&&Yn(f,u)&&(u=f,c()),i.emit(`update:${e}`,n.set?n.set(f):f)}}}),a=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return o[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?t[a]||{}:o,done:!1}:{done:!0}}}},o}function B0(t,e,n){const i=arguments.length;return i===2?at(e)&&!be(e)?ms(e)?ft(t,null,[e]):ft(t,e):ft(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ms(n)&&(n=[n]),ft(t,e,n))}function F1(){}function B1(t,e,n,i){const s=n[i];if(s&&k0(s,t))return s;const r=e();return r.memo=t.slice(),n[i]=r}function k0(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(Yn(n[i],e[i]))return!1;return or>0&&ln&&ln.push(t),!0}const H0="3.4.21",k1=Lt,H1=uR,V1=Xr,z1=VE,G1={createComponentInstance:L0,setupComponent:D0,renderComponentRoot:Jl,setCurrentRenderingInstance:Ea,isVNode:ms,normalizeVNode:_n},W1=G1,$1=null,X1=null,q1=null;/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const j1="http://www.w3.org/2000/svg",Y1="http://www.w3.org/1998/Math/MathML",es=typeof document<"u"?document:null,Im=es&&es.createElement("template"),K1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?es.createElementNS(j1,t):e==="mathml"?es.createElementNS(Y1,t):es.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>es.createTextNode(t),createComment:t=>es.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>es.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Im.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const a=Im.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zi="transition",$o="animation",Eo=Symbol("_vtc"),Dd=(t,{slots:e})=>B0(ZE,z0(t),e);Dd.displayName="Transition";const V0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Z1=Dd.props=it({},Td,V0),Cs=(t,e=[])=>{be(t)?t.forEach(n=>n(...e)):t&&t(...e)},Om=t=>t?be(t)?t.some(e=>e.length>1):t.length>1:!1;function z0(t){const e={};for(const I in t)I in V0||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=J1(s),v=g&&g[0],m=g&&g[1],{onBeforeEnter:d,onEnter:T,onEnterCancelled:_,onLeave:b,onLeaveCancelled:C,onBeforeAppear:A=d,onAppear:w=T,onAppearCancelled:P=_}=e,x=(I,N,G)=>{Ki(I,N?u:a),Ki(I,N?c:o),G&&G()},E=(I,N)=>{I._isLeaving=!1,Ki(I,f),Ki(I,p),Ki(I,h),N&&N()},D=I=>(N,G)=>{const q=I?w:T,z=()=>x(N,I,G);Cs(q,[N,z]),Um(()=>{Ki(N,I?l:r),Si(N,I?u:a),Om(q)||Fm(N,i,v,z)})};return it(e,{onBeforeEnter(I){Cs(d,[I]),Si(I,r),Si(I,o)},onBeforeAppear(I){Cs(A,[I]),Si(I,l),Si(I,c)},onEnter:D(!1),onAppear:D(!0),onLeave(I,N){I._isLeaving=!0;const G=()=>E(I,N);Si(I,f),W0(),Si(I,h),Um(()=>{I._isLeaving&&(Ki(I,f),Si(I,p),Om(b)||Fm(I,i,m,G))}),Cs(b,[I,G])},onEnterCancelled(I){x(I,!1),Cs(_,[I])},onAppearCancelled(I){x(I,!0),Cs(P,[I])},onLeaveCancelled(I){E(I),Cs(C,[I])}})}function J1(t){if(t==null)return null;if(at(t))return[ef(t.enter),ef(t.leave)];{const e=ef(t);return[e,e]}}function ef(t){return hc(t)}function Si(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Eo]||(t[Eo]=new Set)).add(e)}function Ki(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Eo];n&&(n.delete(e),n.size||(t[Eo]=void 0))}function Um(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Q1=0;function Fm(t,e,n,i){const s=t._endId=++Q1,r=()=>{s===t._endId&&i()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=G0(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),r()},h=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function G0(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),s=i(`${zi}Delay`),r=i(`${zi}Duration`),o=Bm(s,r),a=i(`${$o}Delay`),l=i(`${$o}Duration`),c=Bm(a,l);let u=null,f=0,h=0;e===zi?o>0&&(u=zi,f=o,h=r.length):e===$o?c>0&&(u=$o,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?zi:$o:null,h=u?u===zi?r.length:l.length:0);const p=u===zi&&/\b(transform|all)(,|$)/.test(i(`${zi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function Bm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>km(n)+km(t[i])))}function km(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function W0(){return document.body.offsetHeight}function eP(t,e,n){const i=t[Eo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const yc=Symbol("_vod"),$0=Symbol("_vsh"),X0={beforeMount(t,{value:e},{transition:n}){t[yc]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Xo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Xo(t,!0),i.enter(t)):i.leave(t,()=>{Xo(t,!1)}):Xo(t,e))},beforeUnmount(t,{value:e}){Xo(t,e)}};function Xo(t,e){t.style.display=e?t[yc]:"none",t[$0]=!e}function tP(){X0.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const q0=Symbol("");function nP(t){const e=Oi();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>ph(r,s))},i=()=>{const s=t(e.proxy);dh(e.subTree,s),n(s)};jE(i),za(()=>{const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),hu(()=>s.disconnect())})}function dh(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{dh(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)ph(t.el,e);else if(t.type===kt)t.children.forEach(n=>dh(n,e));else if(t.type===Js){let{el:n,anchor:i}=t;for(;n&&(ph(n,e),n!==i);)n=n.nextSibling}}function ph(t,e){if(t.nodeType===1){const n=t.style;let i="";for(const s in e)n.setProperty(`--${s}`,e[s]),i+=`--${s}: ${e[s]};`;n[q0]=i}}const iP=/(^|;)\s*display\s*:/;function sP(t,e,n){const i=t.style,s=He(n);let r=!1;if(n&&!s){if(e)if(He(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ec(i,a,"")}else for(const o in e)n[o]==null&&ec(i,o,"");for(const o in n)o==="display"&&(r=!0),ec(i,o,n[o])}else if(s){if(e!==n){const o=i[q0];o&&(n+=";"+o),i.cssText=n,r=iP.test(n)}}else e&&t.removeAttribute("style");yc in t&&(t[yc]=r?i.display:"",t[$0]&&(i.display="none"))}const Hm=/\s*!important$/;function ec(t,e,n){if(be(n))n.forEach(i=>ec(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=rP(t,e);Hm.test(n)?t.setProperty(En(i),n.replace(Hm,""),"important"):t[i]=n}}const Vm=["Webkit","Moz","ms"],tf={};function rP(t,e){const n=tf[e];if(n)return n;let i=gt(e);if(i!=="filter"&&i in t)return tf[e]=i;i=mr(i);for(let s=0;s<Vm.length;s++){const r=Vm[s]+i;if(r in t)return tf[e]=r}return e}const zm="http://www.w3.org/1999/xlink";function oP(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zm,e.slice(6,e.length)):t.setAttributeNS(zm,e,n);else{const r=SC(e);n==null||r&&!gE(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function aP(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=gE(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Ti(t,e,n,i){t.addEventListener(e,n,i)}function lP(t,e,n,i){t.removeEventListener(e,n,i)}const Gm=Symbol("_vei");function cP(t,e,n,i,s=null){const r=t[Gm]||(t[Gm]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=uP(e);if(i){const c=r[e]=dP(i,s);Ti(t,a,c,l)}else o&&(lP(t,a,o,l),r[e]=void 0)}}const Wm=/(?:Once|Passive|Capture)$/;function uP(t){let e;if(Wm.test(t)){e={};let i;for(;i=t.match(Wm);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):En(t.slice(2)),e]}let nf=0;const fP=Promise.resolve(),hP=()=>nf||(fP.then(()=>nf=0),nf=Date.now());function dP(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;yn(pP(i,n.value),e,5,[i])};return n.value=t,n.attached=hP(),n}function pP(t,e){if(be(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const $m=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,mP=(t,e,n,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?eP(t,i,c):e==="style"?sP(t,n,i):dr(e)?nd(e)||cP(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gP(t,e,i,c))?aP(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),oP(t,e,i,c))};function gP(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&$m(e)&&Ne(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $m(e)&&He(n)?!1:e in t}/*! #__NO_SIDE_EFFECTS__ */function j0(t,e){const n=Md(t);class i extends mu{constructor(r){super(n,r,e)}}return i.def=n,i}/*! #__NO_SIDE_EFFECTS__ */const _P=t=>j0(t,ry),vP=typeof HTMLElement<"u"?HTMLElement:class{};class mu extends vP{constructor(e,n={},i){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&i?i(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),su(()=>{this._connected||(mh(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(i=>{for(const s of i)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(i,s=!1)=>{const{props:r,styles:o}=i;let a;if(r&&!be(r))for(const l in r){const c=r[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=hc(this._props[l])),(a||(a=Object.create(null)))[gt(l)]=!0)}this._numberProps=a,s&&this._resolveProps(i),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(i=>e(i,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,i=be(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&i.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of i.map(gt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(r){this._setProp(s,r)}})}_setAttr(e){let n=this.getAttribute(e);const i=gt(e);this._numberProps&&this._numberProps[i]&&(n=hc(n)),this._setProp(i,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,i=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),i&&(n===!0?this.setAttribute(En(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(En(e),n+""):n||this.removeAttribute(En(e))))}_update(){mh(this._createVNode(),this.shadowRoot)}_createVNode(){const e=ft(this._def,it({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const i=(r,o)=>{this.dispatchEvent(new CustomEvent(r,{detail:o}))};n.emit=(r,...o)=>{i(r,o),En(r)!==r&&i(En(r),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof mu){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const i=document.createElement("style");i.textContent=n,this.shadowRoot.appendChild(i)})}}function EP(t="$style"){{const e=Oi();if(!e)return st;const n=e.type.__cssModules;if(!n)return st;const i=n[t];return i||st}}const Y0=new WeakMap,K0=new WeakMap,Sc=Symbol("_moveCb"),Xm=Symbol("_enterCb"),Z0={name:"TransitionGroup",props:it({},Z1,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Oi(),i=bd();let s,r;return uu(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!MP(s[0].el,n.vnode.el,o))return;s.forEach(xP),s.forEach(bP);const a=s.filter(TP);W0(),a.forEach(l=>{const c=l.el,u=c.style;Si(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[Sc]=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",f),c[Sc]=null,Ki(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=Qe(t),a=z0(o);let l=o.tag||kt;s=r,r=e.default?lu(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&sr(u,vo(u,a,i,n))}if(s)for(let c=0;c<s.length;c++){const u=s[c];sr(u,vo(u,a,i,n)),Y0.set(u,u.el.getBoundingClientRect())}return ft(l,null,r)}}},yP=t=>delete t.mode;Z0.props;const SP=Z0;function xP(t){const e=t.el;e[Sc]&&e[Sc](),e[Xm]&&e[Xm]()}function bP(t){K0.set(t,t.el.getBoundingClientRect())}function TP(t){const e=Y0.get(t),n=K0.get(t),i=e.left-n.left,s=e.top-n.top;if(i||s){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",t}}function MP(t,e,n){const i=t.cloneNode(),s=t[Eo];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:o}=G0(i);return r.removeChild(i),o}const gs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return be(e)?n=>Qr(e,n):e};function AP(t){t.target.composing=!0}function qm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fn=Symbol("_assign"),xc={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Fn]=gs(s);const r=i||s.props&&s.props.type==="number";Ti(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=pa(a)),t[Fn](a)}),n&&Ti(t,"change",()=>{t.value=t.value.trim()}),e||(Ti(t,"compositionstart",AP),Ti(t,"compositionend",qm),Ti(t,"change",qm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t[Fn]=gs(r),t.composing)return;const o=s||t.type==="number"?pa(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===a)||(t.value=a))}},Id={deep:!0,created(t,e,n){t[Fn]=gs(n),Ti(t,"change",()=>{const i=t._modelValue,s=yo(t),r=t.checked,o=t[Fn];if(be(i)){const a=Qc(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(pr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Q0(t,r))})},mounted:jm,beforeUpdate(t,e,n){t[Fn]=gs(n),jm(t,e,n)}};function jm(t,{value:e,oldValue:n},i){t._modelValue=e,be(e)?t.checked=Qc(e,i.props.value)>-1:pr(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=ps(e,Q0(t,!0)))}const Od={created(t,{value:e},n){t.checked=ps(e,n.props.value),t[Fn]=gs(n),Ti(t,"change",()=>{t[Fn](yo(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[Fn]=gs(i),e!==n&&(t.checked=ps(e,i.props.value))}},J0={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=pr(e);Ti(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?pa(yo(o)):yo(o));t[Fn](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,su(()=>{t._assigning=!1})}),t[Fn]=gs(i)},mounted(t,{value:e,modifiers:{number:n}}){Ym(t,e,n)},beforeUpdate(t,e,n){t[Fn]=gs(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Ym(t,e,n)}};function Ym(t,e,n){const i=t.multiple,s=be(e);if(!(i&&!s&&!pr(e))){for(let r=0,o=t.options.length;r<o;r++){const a=t.options[r],l=yo(a);if(i)if(s){const c=typeof l;c==="string"||c==="number"?a.selected=e.includes(n?pa(l):l):a.selected=Qc(e,l)>-1}else a.selected=e.has(l);else if(ps(yo(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!i&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function yo(t){return"_value"in t?t._value:t.value}function Q0(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const ey={created(t,e,n){_l(t,e,n,null,"created")},mounted(t,e,n){_l(t,e,n,null,"mounted")},beforeUpdate(t,e,n,i){_l(t,e,n,i,"beforeUpdate")},updated(t,e,n,i){_l(t,e,n,i,"updated")}};function ty(t,e){switch(t){case"SELECT":return J0;case"TEXTAREA":return xc;default:switch(e){case"checkbox":return Id;case"radio":return Od;default:return xc}}}function _l(t,e,n,i,s){const o=ty(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,i)}function wP(){xc.getSSRProps=({value:t})=>({value:t}),Od.getSSRProps=({value:t},e)=>{if(e.props&&ps(e.props.value,t))return{checked:!0}},Id.getSSRProps=({value:t},e)=>{if(be(t)){if(e.props&&Qc(t,e.props.value)>-1)return{checked:!0}}else if(pr(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},ey.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=ty(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const CP=["ctrl","shift","alt","meta"],RP={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>CP.some(n=>t[`${n}Key`]&&!e.includes(n))},PP=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=RP[e[o]];if(a&&a(s,e))return}return t(s,...r)})},LP={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},NP=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=En(s.key);if(e.some(o=>o===r||LP[o]===r))return t(s)})},ny=it({patchProp:mP},K1);let la,Km=!1;function iy(){return la||(la=v0(ny))}function sy(){return la=Km?la:E0(ny),Km=!0,la}const mh=(...t)=>{iy().render(...t)},ry=(...t)=>{sy().hydrate(...t)},oy=(...t)=>{const e=iy().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ly(i);if(!s)return;const r=e._component;!Ne(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,ay(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},DP=(...t)=>{const e=sy().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ly(i);if(s)return n(s,!0,ay(s))},e};function ay(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ly(t){return He(t)?document.querySelector(t):t}let Zm=!1;const IP=()=>{Zm||(Zm=!0,wP(),tP())},OP=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:ZE,BaseTransitionPropsValidators:Td,Comment:Yt,DeprecationTypes:q1,EffectScope:od,ErrorCodes:cR,ErrorTypeStrings:H1,Fragment:kt,KeepAlive:HR,ReactiveEffect:_o,Static:Js,Suspense:CR,Teleport:A1,Text:rr,TrackOpTypes:oR,Transition:Dd,TransitionGroup:SP,TriggerOpTypes:aR,VueElement:mu,assertNumber:lR,callWithAsyncErrorHandling:yn,callWithErrorHandling:Pi,camelize:gt,capitalize:mr,cloneVNode:fi,compatUtils:X1,computed:F0,createApp:oy,createBlock:Rd,createCommentVNode:R1,createElementBlock:A0,createElementVNode:Pd,createHydrationRenderer:E0,createPropsRestProxy:s1,createRenderer:v0,createSSRApp:DP,createSlots:GR,createStaticVNode:R0,createTextVNode:Ld,createVNode:ft,customRef:UE,defineAsyncComponent:BR,defineComponent:Md,defineCustomElement:j0,defineEmits:jR,defineExpose:YR,defineModel:JR,defineOptions:KR,defineProps:qR,defineSSRCustomElement:_P,defineSlots:ZR,devtools:V1,effect:wC,effectScope:TC,getCurrentInstance:Oi,getCurrentScope:EE,getTransitionRawChildren:lu,guardReactiveProps:C0,h:B0,handleError:vr,hasInjectionContext:d1,hydrate:ry,initCustomFormatter:F1,initDirectivesForSSR:IP,inject:ra,isMemoSame:k0,isProxy:fd,isReactive:Ks,isReadonly:ir,isRef:Vt,isRuntimeOnly:D1,isShallow:ma,isVNode:ms,markRaw:hd,mergeDefaults:n1,mergeModels:i1,mergeProps:P0,nextTick:su,normalizeClass:ka,normalizeProps:fC,normalizeStyle:Ba,onActivated:QE,onBeforeMount:n0,onBeforeUnmount:fu,onBeforeUpdate:i0,onDeactivated:e0,onErrorCaptured:a0,onMounted:za,onRenderTracked:o0,onRenderTriggered:r0,onScopeDispose:MC,onServerPrefetch:s0,onUnmounted:hu,onUpdated:uu,openBlock:Ga,popScopeId:_R,provide:h0,proxyRefs:gd,pushScopeId:gR,queuePostFlushCb:pc,reactive:nu,readonly:ud,ref:na,registerRuntimeCompiler:I0,render:mh,renderList:zR,renderSlot:WR,resolveComponent:TR,resolveDirective:AR,resolveDynamicComponent:MR,resolveFilter:$1,resolveTransitionHooks:vo,setBlockTracking:ah,setDevtoolsHook:z1,setTransitionHooks:sr,shallowReactive:DE,shallowReadonly:jC,shallowRef:KC,ssrContextKey:XE,ssrUtils:W1,stop:CC,toDisplayString:bC,toHandlerKey:Jr,toHandlers:$R,toRaw:Qe,toRef:rR,toRefs:nR,toValue:QC,transformVNodeArgs:w1,triggerRef:JC,unref:md,useAttrs:t1,useCssModule:EP,useCssVars:nP,useModel:U1,useSSRContext:qE,useSlots:e1,useTransitionState:bd,vModelCheckbox:Id,vModelDynamic:ey,vModelRadio:Od,vModelSelect:J0,vModelText:xc,vShow:X0,version:H0,warn:k1,watch:ia,watchEffect:IR,watchPostEffect:jE,watchSyncEffect:YE,withAsyncContext:r1,withCtx:vd,withDefaults:QR,withDirectives:UR,withKeys:NP,withMemo:B1,withModifiers:PP,withScopeId:vR},Symbol.toStringTag,{value:"Module"}));/**
* @vue/compiler-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const xa=Symbol(""),ca=Symbol(""),Ud=Symbol(""),bc=Symbol(""),cy=Symbol(""),lr=Symbol(""),uy=Symbol(""),fy=Symbol(""),Fd=Symbol(""),Bd=Symbol(""),$a=Symbol(""),kd=Symbol(""),hy=Symbol(""),Hd=Symbol(""),Vd=Symbol(""),zd=Symbol(""),Gd=Symbol(""),Wd=Symbol(""),$d=Symbol(""),dy=Symbol(""),py=Symbol(""),gu=Symbol(""),Tc=Symbol(""),Xd=Symbol(""),qd=Symbol(""),ba=Symbol(""),Xa=Symbol(""),jd=Symbol(""),gh=Symbol(""),UP=Symbol(""),_h=Symbol(""),Mc=Symbol(""),FP=Symbol(""),BP=Symbol(""),Yd=Symbol(""),kP=Symbol(""),HP=Symbol(""),Kd=Symbol(""),my=Symbol(""),So={[xa]:"Fragment",[ca]:"Teleport",[Ud]:"Suspense",[bc]:"KeepAlive",[cy]:"BaseTransition",[lr]:"openBlock",[uy]:"createBlock",[fy]:"createElementBlock",[Fd]:"createVNode",[Bd]:"createElementVNode",[$a]:"createCommentVNode",[kd]:"createTextVNode",[hy]:"createStaticVNode",[Hd]:"resolveComponent",[Vd]:"resolveDynamicComponent",[zd]:"resolveDirective",[Gd]:"resolveFilter",[Wd]:"withDirectives",[$d]:"renderList",[dy]:"renderSlot",[py]:"createSlots",[gu]:"toDisplayString",[Tc]:"mergeProps",[Xd]:"normalizeClass",[qd]:"normalizeStyle",[ba]:"normalizeProps",[Xa]:"guardReactiveProps",[jd]:"toHandlers",[gh]:"camelize",[UP]:"capitalize",[_h]:"toHandlerKey",[Mc]:"setBlockTracking",[FP]:"pushScopeId",[BP]:"popScopeId",[Yd]:"withCtx",[kP]:"unref",[HP]:"isRef",[Kd]:"withMemo",[my]:"isMemoSame"};function VP(t){Object.getOwnPropertySymbols(t).forEach(e=>{So[e]=t[e]})}const An={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function zP(t,e=""){return{type:0,source:e,children:t,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:An}}function Ta(t,e,n,i,s,r,o,a=!1,l=!1,c=!1,u=An){return t&&(a?(t.helper(lr),t.helper(To(t.inSSR,c))):t.helper(bo(t.inSSR,c)),o&&t.helper(Wd)),{type:13,tag:e,props:n,children:i,patchFlag:s,dynamicProps:r,directives:o,isBlock:a,disableTracking:l,isComponent:c,loc:u}}function qa(t,e=An){return{type:17,loc:e,elements:t}}function Ln(t,e=An){return{type:15,loc:e,properties:t}}function Et(t,e){return{type:16,loc:An,key:He(t)?Ge(t,!0):t,value:e}}function Ge(t,e=!1,n=An,i=0){return{type:4,loc:n,content:t,isStatic:e,constType:e?3:i}}function qn(t,e=An){return{type:8,loc:e,children:t}}function Rt(t,e=[],n=An){return{type:14,loc:n,callee:t,arguments:e}}function xo(t,e=void 0,n=!1,i=!1,s=An){return{type:18,params:t,returns:e,newline:n,isSlot:i,loc:s}}function vh(t,e,n,i=!0){return{type:19,test:t,consequent:e,alternate:n,newline:i,loc:An}}function GP(t,e,n=!1){return{type:20,index:t,value:e,isVNode:n,loc:An}}function WP(t){return{type:21,body:t,loc:An}}function bo(t,e){return t||e?Fd:Bd}function To(t,e){return t||e?uy:fy}function Zd(t,{helper:e,removeHelper:n,inSSR:i}){t.isBlock||(t.isBlock=!0,n(bo(i,t.isComponent)),e(lr),e(To(i,t.isComponent)))}const Jm=new Uint8Array([123,123]),Qm=new Uint8Array([125,125]);function eg(t){return t>=97&&t<=122||t>=65&&t<=90}function gn(t){return t===32||t===10||t===9||t===12||t===13}function Gi(t){return t===47||t===62||gn(t)}function Ac(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}const Gt={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class $P{constructor(e,n){this.stack=e,this.cbs=n,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=Jm,this.delimiterClose=Qm,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=Jm,this.delimiterClose=Qm}getPos(e){let n=1,i=e+1;for(let s=this.newlines.length-1;s>=0;s--){const r=this.newlines[s];if(e>r){n=s+2,i=e-r;break}}return{column:i,line:n,offset:e}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(e){e===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e))}stateInterpolationOpen(e){if(e===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const n=this.index+1-this.delimiterOpen.length;n>this.sectionStart&&this.cbs.ontext(this.sectionStart,n),this.state=3,this.sectionStart=n}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(e)):(this.state=1,this.stateText(e))}stateInterpolation(e){e===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(e))}stateInterpolationClose(e){e===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(e))}stateSpecialStartSequence(e){const n=this.sequenceIndex===this.currentSequence.length;if(!(n?Gi(e):(e|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!n){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(e)}stateInRCDATA(e){if(this.sequenceIndex===this.currentSequence.length){if(e===62||gn(e)){const n=this.index-this.currentSequence.length;if(this.sectionStart<n){const i=this.index;this.index=n,this.cbs.ontext(this.sectionStart,n),this.index=i}this.sectionStart=n+2,this.stateInClosingTagName(e),this.inRCDATA=!1;return}this.sequenceIndex=0}(e|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===Gt.TitleEnd||this.currentSequence===Gt.TextareaEnd&&!this.inSFCRoot?e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=+(e===60)}stateCDATASequence(e){e===Gt.Cdata[this.sequenceIndex]?++this.sequenceIndex===Gt.Cdata.length&&(this.state=28,this.currentSequence=Gt.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(e))}fastForwardTo(e){for(;++this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);if(n===10&&this.newlines.push(this.index),n===e)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(e){e===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===Gt.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):e!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(e,n){this.enterRCDATA(e,n),this.state=31}enterRCDATA(e,n){this.inRCDATA=!0,this.currentSequence=e,this.sequenceIndex=n}stateBeforeTagName(e){e===33?(this.state=22,this.sectionStart=this.index+1):e===63?(this.state=24,this.sectionStart=this.index+1):eg(e)?(this.sectionStart=this.index,this.mode===0?this.state=6:this.inSFCRoot?this.state=34:this.inXML?this.state=6:e===116?this.state=30:this.state=e===115?29:6):e===47?this.state=8:(this.state=1,this.stateText(e))}stateInTagName(e){Gi(e)&&this.handleTagName(e)}stateInSFCRootTagName(e){if(Gi(e)){const n=this.buffer.slice(this.sectionStart,this.index);n!=="template"&&this.enterRCDATA(Ac("</"+n),0),this.handleTagName(e)}}handleTagName(e){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)}stateBeforeClosingTagName(e){gn(e)||(e===62?(this.state=1,this.sectionStart=this.index+1):(this.state=eg(e)?9:27,this.sectionStart=this.index))}stateInClosingTagName(e){(e===62||gn(e))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(e))}stateAfterClosingTagName(e){e===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(e){e===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):e===47?this.state=7:e===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):gn(e)||this.handleAttrStart(e)}handleAttrStart(e){e===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):e===46||e===58||e===64||e===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(e){e===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):gn(e)||(this.state=11,this.stateBeforeAttrName(e))}stateInAttrName(e){(e===61||Gi(e))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(e))}stateInDirName(e){e===61||Gi(e)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):e===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(e){e===61||Gi(e)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===91?this.state=15:e===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(e){e===93?this.state=14:(e===61||Gi(e))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(e))}stateInDirModifier(e){e===61||Gi(e)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(e){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(e)}stateAfterAttrName(e){e===61?this.state=18:e===47||e===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)):gn(e)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(e))}stateBeforeAttrValue(e){e===34?(this.state=19,this.sectionStart=this.index+1):e===39?(this.state=20,this.sectionStart=this.index+1):gn(e)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(e))}handleInAttrValue(e,n){(e===n||this.fastForwardTo(n))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(n===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(e){this.handleInAttrValue(e,34)}stateInAttrValueSingleQuotes(e){this.handleInAttrValue(e,39)}stateInAttrValueNoQuotes(e){gn(e)||e===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(e)):(e===39||e===60||e===61||e===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(e){e===91?(this.state=26,this.sequenceIndex=0):this.state=e===45?25:23}stateInDeclaration(e){(e===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(e){(e===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(e){e===45?(this.state=28,this.currentSequence=Gt.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(e){(e===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(e){e===Gt.ScriptEnd[3]?this.startSpecial(Gt.ScriptEnd,4):e===Gt.StyleEnd[3]?this.startSpecial(Gt.StyleEnd,4):(this.state=6,this.stateInTagName(e))}stateBeforeSpecialT(e){e===Gt.TitleEnd[3]?this.startSpecial(Gt.TitleEnd,4):e===Gt.TextareaEnd[3]?this.startSpecial(Gt.TextareaEnd,4):(this.state=6,this.stateInTagName(e))}startEntity(){}stateInEntity(){}parse(e){for(this.buffer=e;this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);switch(n===10&&this.newlines.push(this.index),this.state){case 1:{this.stateText(n);break}case 2:{this.stateInterpolationOpen(n);break}case 3:{this.stateInterpolation(n);break}case 4:{this.stateInterpolationClose(n);break}case 31:{this.stateSpecialStartSequence(n);break}case 32:{this.stateInRCDATA(n);break}case 26:{this.stateCDATASequence(n);break}case 19:{this.stateInAttrValueDoubleQuotes(n);break}case 12:{this.stateInAttrName(n);break}case 13:{this.stateInDirName(n);break}case 14:{this.stateInDirArg(n);break}case 15:{this.stateInDynamicDirArg(n);break}case 16:{this.stateInDirModifier(n);break}case 28:{this.stateInCommentLike(n);break}case 27:{this.stateInSpecialComment(n);break}case 11:{this.stateBeforeAttrName(n);break}case 6:{this.stateInTagName(n);break}case 34:{this.stateInSFCRootTagName(n);break}case 9:{this.stateInClosingTagName(n);break}case 5:{this.stateBeforeTagName(n);break}case 17:{this.stateAfterAttrName(n);break}case 20:{this.stateInAttrValueSingleQuotes(n);break}case 18:{this.stateBeforeAttrValue(n);break}case 8:{this.stateBeforeClosingTagName(n);break}case 10:{this.stateAfterClosingTagName(n);break}case 29:{this.stateBeforeSpecialS(n);break}case 30:{this.stateBeforeSpecialT(n);break}case 21:{this.stateInAttrValueNoQuotes(n);break}case 7:{this.stateInSelfClosingTag(n);break}case 23:{this.stateInDeclaration(n);break}case 22:{this.stateBeforeDeclaration(n);break}case 25:{this.stateBeforeComment(n);break}case 24:{this.stateInProcessingInstruction(n);break}case 33:{this.stateInEntity();break}}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){const e=this.buffer.length;this.sectionStart>=e||(this.state===28?this.currentSequence===Gt.CdataEnd?this.cbs.oncdata(this.sectionStart,e):this.cbs.oncomment(this.sectionStart,e):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,e))}emitCodePoint(e,n){}}function tg(t,{compatConfig:e}){const n=e&&e[t];return t==="MODE"?n||3:n}function Qs(t,e){const n=tg("MODE",e),i=tg(t,e);return n===3?i===!0:i!==!1}function Ma(t,e,n,...i){return Qs(t,e)}function Jd(t){throw t}function gy(t){}function pt(t,e,n,i){const s=`https://vuejs.org/error-reference/#compiler-${t}`,r=new SyntaxError(String(s));return r.code=t,r.loc=e,r}const cn=t=>t.type===4&&t.isStatic;function _y(t){switch(t){case"Teleport":case"teleport":return ca;case"Suspense":case"suspense":return Ud;case"KeepAlive":case"keep-alive":return bc;case"BaseTransition":case"base-transition":return cy}}const XP=/^\d|[^\$\w]/,Qd=t=>!XP.test(t),qP=/[A-Za-z_$\xA0-\uFFFF]/,jP=/[\.\?\w$\xA0-\uFFFF]/,YP=/\s+[.[]\s*|\s*[.[]\s+/g,KP=t=>{t=t.trim().replace(YP,o=>o.trim());let e=0,n=[],i=0,s=0,r=null;for(let o=0;o<t.length;o++){const a=t.charAt(o);switch(e){case 0:if(a==="[")n.push(e),e=1,i++;else if(a==="(")n.push(e),e=2,s++;else if(!(o===0?qP:jP).test(a))return!1;break;case 1:a==="'"||a==='"'||a==="`"?(n.push(e),e=3,r=a):a==="["?i++:a==="]"&&(--i||(e=n.pop()));break;case 2:if(a==="'"||a==='"'||a==="`")n.push(e),e=3,r=a;else if(a==="(")s++;else if(a===")"){if(o===t.length-1)return!1;--s||(e=n.pop())}break;case 3:a===r&&(e=n.pop(),r=null);break}}return!i&&!s},vy=KP;function Wn(t,e,n=!1){for(let i=0;i<t.props.length;i++){const s=t.props[i];if(s.type===7&&(n||s.exp)&&(He(e)?s.name===e:e.test(s.name)))return s}}function _u(t,e,n=!1,i=!1){for(let s=0;s<t.props.length;s++){const r=t.props[s];if(r.type===6){if(n)continue;if(r.name===e&&(r.value||i))return r}else if(r.name==="bind"&&(r.exp||i)&&Gs(r.arg,e))return r}}function Gs(t,e){return!!(t&&cn(t)&&t.content===e)}function ZP(t){return t.props.some(e=>e.type===7&&e.name==="bind"&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function sf(t){return t.type===5||t.type===2}function JP(t){return t.type===7&&t.name==="slot"}function wc(t){return t.type===1&&t.tagType===3}function Cc(t){return t.type===1&&t.tagType===2}const QP=new Set([ba,Xa]);function Ey(t,e=[]){if(t&&!He(t)&&t.type===14){const n=t.callee;if(!He(n)&&QP.has(n))return Ey(t.arguments[0],e.concat(t))}return[t,e]}function Rc(t,e,n){let i,s=t.type===13?t.props:t.arguments[2],r=[],o;if(s&&!He(s)&&s.type===14){const a=Ey(s);s=a[0],r=a[1],o=r[r.length-1]}if(s==null||He(s))i=Ln([e]);else if(s.type===14){const a=s.arguments[0];!He(a)&&a.type===15?ng(e,a)||a.properties.unshift(e):s.callee===jd?i=Rt(n.helper(Tc),[Ln([e]),s]):s.arguments.unshift(Ln([e])),!i&&(i=s)}else s.type===15?(ng(e,s)||s.properties.unshift(e),i=s):(i=Rt(n.helper(Tc),[Ln([e]),s]),o&&o.callee===Xa&&(o=r[r.length-2]));t.type===13?o?o.arguments[0]=i:t.props=i:o?o.arguments[0]=i:t.arguments[2]=i}function ng(t,e){let n=!1;if(t.key.type===4){const i=t.key.content;n=e.properties.some(s=>s.key.type===4&&s.key.content===i)}return n}function Aa(t,e){return`_${e}_${t.replace(/[^\w]/g,(n,i)=>n==="-"?"_":t.charCodeAt(i).toString())}`}function eL(t){return t.type===14&&t.callee===Kd?t.arguments[1].returns:t}const tL=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,yy={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:Zl,isPreTag:Zl,isCustomElement:Zl,onError:Jd,onWarn:gy,comments:!1,prefixIdentifiers:!1};let rt=yy,wa=null,er="",Xt=null,et=null,rn="",xi=-1,Os=-1,Pc=0,ts=!1,Eh=null;const _t=[],vt=new $P(_t,{onerr:mi,ontext(t,e){vl(Ft(t,e),t,e)},ontextentity(t,e,n){vl(t,e,n)},oninterpolation(t,e){if(ts)return vl(Ft(t,e),t,e);let n=t+vt.delimiterOpen.length,i=e-vt.delimiterClose.length;for(;gn(er.charCodeAt(n));)n++;for(;gn(er.charCodeAt(i-1));)i--;let s=Ft(n,i);s.includes("&")&&(s=rt.decodeEntities(s,!1)),yh({type:5,content:nc(s,!1,Ct(n,i)),loc:Ct(t,e)})},onopentagname(t,e){const n=Ft(t,e);Xt={type:1,tag:n,ns:rt.getNamespace(n,_t[0],rt.ns),tagType:0,props:[],children:[],loc:Ct(t-1,e),codegenNode:void 0}},onopentagend(t){sg(t)},onclosetag(t,e){const n=Ft(t,e);if(!rt.isVoidTag(n)){let i=!1;for(let s=0;s<_t.length;s++)if(_t[s].tag.toLowerCase()===n.toLowerCase()){i=!0,s>0&&mi(24,_t[0].loc.start.offset);for(let o=0;o<=s;o++){const a=_t.shift();tc(a,e,o<s)}break}i||mi(23,Sy(t,60))}},onselfclosingtag(t){var e;const n=Xt.tag;Xt.isSelfClosing=!0,sg(t),((e=_t[0])==null?void 0:e.tag)===n&&tc(_t.shift(),t)},onattribname(t,e){et={type:6,name:Ft(t,e),nameLoc:Ct(t,e),value:void 0,loc:Ct(t)}},ondirname(t,e){const n=Ft(t,e),i=n==="."||n===":"?"bind":n==="@"?"on":n==="#"?"slot":n.slice(2);if(!ts&&i===""&&mi(26,t),ts||i==="")et={type:6,name:n,nameLoc:Ct(t,e),value:void 0,loc:Ct(t)};else if(et={type:7,name:i,rawName:n,exp:void 0,arg:void 0,modifiers:n==="."?["prop"]:[],loc:Ct(t)},i==="pre"){ts=vt.inVPre=!0,Eh=Xt;const s=Xt.props;for(let r=0;r<s.length;r++)s[r].type===7&&(s[r]=uL(s[r]))}},ondirarg(t,e){if(t===e)return;const n=Ft(t,e);if(ts)et.name+=n,Ws(et.nameLoc,e);else{const i=n[0]!=="[";et.arg=nc(i?n:n.slice(1,-1),i,Ct(t,e),i?3:0)}},ondirmodifier(t,e){const n=Ft(t,e);if(ts)et.name+="."+n,Ws(et.nameLoc,e);else if(et.name==="slot"){const i=et.arg;i&&(i.content+="."+n,Ws(i.loc,e))}else et.modifiers.push(n)},onattribdata(t,e){rn+=Ft(t,e),xi<0&&(xi=t),Os=e},onattribentity(t,e,n){rn+=t,xi<0&&(xi=e),Os=n},onattribnameend(t){const e=et.loc.start.offset,n=Ft(e,t);et.type===7&&(et.rawName=n),Xt.props.some(i=>(i.type===7?i.rawName:i.name)===n)&&mi(2,e)},onattribend(t,e){if(Xt&&et){if(Ws(et.loc,e),t!==0)if(rn.includes("&")&&(rn=rt.decodeEntities(rn,!0)),et.type===6)et.name==="class"&&(rn=by(rn).trim()),t===1&&!rn&&mi(13,e),et.value={type:2,content:rn,loc:t===1?Ct(xi,Os):Ct(xi-1,Os+1)},vt.inSFCRoot&&Xt.tag==="template"&&et.name==="lang"&&rn&&rn!=="html"&&vt.enterRCDATA(Ac("</template"),0);else{let n=0;et.exp=nc(rn,!1,Ct(xi,Os),0,n),et.name==="for"&&(et.forParseResult=iL(et.exp));let i=-1;et.name==="bind"&&(i=et.modifiers.indexOf("sync"))>-1&&Ma("COMPILER_V_BIND_SYNC",rt,et.loc,et.rawName)&&(et.name="model",et.modifiers.splice(i,1))}(et.type!==7||et.name!=="pre")&&Xt.props.push(et)}rn="",xi=Os=-1},oncomment(t,e){rt.comments&&yh({type:3,content:Ft(t,e),loc:Ct(t-4,e+3)})},onend(){const t=er.length;for(let e=0;e<_t.length;e++)tc(_t[e],t-1),mi(24,_t[e].loc.start.offset)},oncdata(t,e){_t[0].ns!==0?vl(Ft(t,e),t,e):mi(1,t-9)},onprocessinginstruction(t){(_t[0]?_t[0].ns:rt.ns)===0&&mi(21,t-1)}}),ig=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,nL=/^\(|\)$/g;function iL(t){const e=t.loc,n=t.content,i=n.match(tL);if(!i)return;const[,s,r]=i,o=(f,h,p=!1)=>{const g=e.start.offset+h,v=g+f.length;return nc(f,!1,Ct(g,v),0,p?1:0)},a={source:o(r.trim(),n.indexOf(r,s.length)),value:void 0,key:void 0,index:void 0,finalized:!1};let l=s.trim().replace(nL,"").trim();const c=s.indexOf(l),u=l.match(ig);if(u){l=l.replace(ig,"").trim();const f=u[1].trim();let h;if(f&&(h=n.indexOf(f,c+l.length),a.key=o(f,h,!0)),u[2]){const p=u[2].trim();p&&(a.index=o(p,n.indexOf(p,a.key?h+f.length:c+l.length),!0))}}return l&&(a.value=o(l,c,!0)),a}function Ft(t,e){return er.slice(t,e)}function sg(t){vt.inSFCRoot&&(Xt.innerLoc=Ct(t+1,t+1)),yh(Xt);const{tag:e,ns:n}=Xt;n===0&&rt.isPreTag(e)&&Pc++,rt.isVoidTag(e)?tc(Xt,t):(_t.unshift(Xt),(n===1||n===2)&&(vt.inXML=!0)),Xt=null}function vl(t,e,n){var i;{const o=(i=_t[0])==null?void 0:i.tag;o!=="script"&&o!=="style"&&t.includes("&")&&(t=rt.decodeEntities(t,!1))}const s=_t[0]||wa,r=s.children[s.children.length-1];(r==null?void 0:r.type)===2?(r.content+=t,Ws(r.loc,n)):s.children.push({type:2,content:t,loc:Ct(e,n)})}function tc(t,e,n=!1){n?Ws(t.loc,Sy(e,60)):Ws(t.loc,e+1),vt.inSFCRoot&&(t.children.length?t.innerLoc.end=it({},t.children[t.children.length-1].loc.end):t.innerLoc.end=it({},t.innerLoc.start),t.innerLoc.source=Ft(t.innerLoc.start.offset,t.innerLoc.end.offset));const{tag:i,ns:s}=t;ts||(i==="slot"?t.tagType=2:rg(t)?t.tagType=3:rL(t)&&(t.tagType=1)),vt.inRCDATA||(t.children=xy(t.children,t.tag)),s===0&&rt.isPreTag(i)&&Pc--,Eh===t&&(ts=vt.inVPre=!1,Eh=null),vt.inXML&&(_t[0]?_t[0].ns:rt.ns)===0&&(vt.inXML=!1);{const r=t.props;if(!vt.inSFCRoot&&Qs("COMPILER_NATIVE_TEMPLATE",rt)&&t.tag==="template"&&!rg(t)){const a=_t[0]||wa,l=a.children.indexOf(t);a.children.splice(l,1,...t.children)}const o=r.find(a=>a.type===6&&a.name==="inline-template");o&&Ma("COMPILER_INLINE_TEMPLATE",rt,o.loc)&&t.children.length&&(o.value={type:2,content:Ft(t.children[0].loc.start.offset,t.children[t.children.length-1].loc.end.offset),loc:o.loc})}}function Sy(t,e){let n=t;for(;er.charCodeAt(n)!==e&&n>=0;)n--;return n}const sL=new Set(["if","else","else-if","for","slot"]);function rg({tag:t,props:e}){if(t==="template"){for(let n=0;n<e.length;n++)if(e[n].type===7&&sL.has(e[n].name))return!0}return!1}function rL({tag:t,props:e}){var n;if(rt.isCustomElement(t))return!1;if(t==="component"||oL(t.charCodeAt(0))||_y(t)||(n=rt.isBuiltInComponent)!=null&&n.call(rt,t)||rt.isNativeTag&&!rt.isNativeTag(t))return!0;for(let i=0;i<e.length;i++){const s=e[i];if(s.type===6){if(s.name==="is"&&s.value){if(s.value.content.startsWith("vue:"))return!0;if(Ma("COMPILER_IS_ON_ELEMENT",rt,s.loc))return!0}}else if(s.name==="bind"&&Gs(s.arg,"is")&&Ma("COMPILER_IS_ON_ELEMENT",rt,s.loc))return!0}return!1}function oL(t){return t>64&&t<91}const aL=/\r\n/g;function xy(t,e){var n,i;const s=rt.whitespace!=="preserve";let r=!1;for(let o=0;o<t.length;o++){const a=t[o];if(a.type===2)if(Pc)a.content=a.content.replace(aL,`
`);else if(lL(a.content)){const l=(n=t[o-1])==null?void 0:n.type,c=(i=t[o+1])==null?void 0:i.type;!l||!c||s&&(l===3&&(c===3||c===1)||l===1&&(c===3||c===1&&cL(a.content)))?(r=!0,t[o]=null):a.content=" "}else s&&(a.content=by(a.content))}if(Pc&&e&&rt.isPreTag(e)){const o=t[0];o&&o.type===2&&(o.content=o.content.replace(/^\r?\n/,""))}return r?t.filter(Boolean):t}function lL(t){for(let e=0;e<t.length;e++)if(!gn(t.charCodeAt(e)))return!1;return!0}function cL(t){for(let e=0;e<t.length;e++){const n=t.charCodeAt(e);if(n===10||n===13)return!0}return!1}function by(t){let e="",n=!1;for(let i=0;i<t.length;i++)gn(t.charCodeAt(i))?n||(e+=" ",n=!0):(e+=t[i],n=!1);return e}function yh(t){(_t[0]||wa).children.push(t)}function Ct(t,e){return{start:vt.getPos(t),end:e==null?e:vt.getPos(e),source:e==null?e:Ft(t,e)}}function Ws(t,e){t.end=vt.getPos(e),t.source=Ft(t.start.offset,e)}function uL(t){const e={type:6,name:t.rawName,nameLoc:Ct(t.loc.start.offset,t.loc.start.offset+t.rawName.length),value:void 0,loc:t.loc};if(t.exp){const n=t.exp.loc;n.end.offset<t.loc.end.offset&&(n.start.offset--,n.start.column--,n.end.offset++,n.end.column++),e.value={type:2,content:t.exp.content,loc:n}}return e}function nc(t,e=!1,n,i=0,s=0){return Ge(t,e,n,i)}function mi(t,e,n){rt.onError(pt(t,Ct(e,e)))}function fL(){vt.reset(),Xt=null,et=null,rn="",xi=-1,Os=-1,_t.length=0}function hL(t,e){if(fL(),er=t,rt=it({},yy),e){let s;for(s in e)e[s]!=null&&(rt[s]=e[s])}vt.mode=rt.parseMode==="html"?1:rt.parseMode==="sfc"?2:0,vt.inXML=rt.ns===1||rt.ns===2;const n=e==null?void 0:e.delimiters;n&&(vt.delimiterOpen=Ac(n[0]),vt.delimiterClose=Ac(n[1]));const i=wa=zP([],t);return vt.parse(er),i.loc=Ct(0,t.length),i.children=xy(i.children),wa=null,i}function dL(t,e){ic(t,e,Ty(t,t.children[0]))}function Ty(t,e){const{children:n}=t;return n.length===1&&e.type===1&&!Cc(e)}function ic(t,e,n=!1){const{children:i}=t,s=i.length;let r=0;for(let o=0;o<i.length;o++){const a=i[o];if(a.type===1&&a.tagType===0){const l=n?0:Nn(a,e);if(l>0){if(l>=2){a.codegenNode.patchFlag="-1",a.codegenNode=e.hoist(a.codegenNode),r++;continue}}else{const c=a.codegenNode;if(c.type===13){const u=Cy(c);if((!u||u===512||u===1)&&Ay(a,e)>=2){const f=wy(a);f&&(c.props=e.hoist(f))}c.dynamicProps&&(c.dynamicProps=e.hoist(c.dynamicProps))}}}if(a.type===1){const l=a.tagType===1;l&&e.scopes.vSlot++,ic(a,e),l&&e.scopes.vSlot--}else if(a.type===11)ic(a,e,a.children.length===1);else if(a.type===9)for(let l=0;l<a.branches.length;l++)ic(a.branches[l],e,a.branches[l].children.length===1)}if(r&&e.transformHoist&&e.transformHoist(i,e,t),r&&r===s&&t.type===1&&t.tagType===0&&t.codegenNode&&t.codegenNode.type===13&&be(t.codegenNode.children)){const o=e.hoist(qa(t.codegenNode.children));e.hmr&&(o.content=`[...${o.content}]`),t.codegenNode.children=o}}function Nn(t,e){const{constantCache:n}=e;switch(t.type){case 1:if(t.tagType!==0)return 0;const i=n.get(t);if(i!==void 0)return i;const s=t.codegenNode;if(s.type!==13||s.isBlock&&t.tag!=="svg"&&t.tag!=="foreignObject")return 0;if(Cy(s))return n.set(t,0),0;{let a=3;const l=Ay(t,e);if(l===0)return n.set(t,0),0;l<a&&(a=l);for(let c=0;c<t.children.length;c++){const u=Nn(t.children[c],e);if(u===0)return n.set(t,0),0;u<a&&(a=u)}if(a>1)for(let c=0;c<t.props.length;c++){const u=t.props[c];if(u.type===7&&u.name==="bind"&&u.exp){const f=Nn(u.exp,e);if(f===0)return n.set(t,0),0;f<a&&(a=f)}}if(s.isBlock){for(let c=0;c<t.props.length;c++)if(t.props[c].type===7)return n.set(t,0),0;e.removeHelper(lr),e.removeHelper(To(e.inSSR,s.isComponent)),s.isBlock=!1,e.helper(bo(e.inSSR,s.isComponent))}return n.set(t,a),a}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Nn(t.content,e);case 4:return t.constType;case 8:let o=3;for(let a=0;a<t.children.length;a++){const l=t.children[a];if(He(l)||jn(l))continue;const c=Nn(l,e);if(c===0)return 0;c<o&&(o=c)}return o;default:return 0}}const pL=new Set([Xd,qd,ba,Xa]);function My(t,e){if(t.type===14&&!He(t.callee)&&pL.has(t.callee)){const n=t.arguments[0];if(n.type===4)return Nn(n,e);if(n.type===14)return My(n,e)}return 0}function Ay(t,e){let n=3;const i=wy(t);if(i&&i.type===15){const{properties:s}=i;for(let r=0;r<s.length;r++){const{key:o,value:a}=s[r],l=Nn(o,e);if(l===0)return l;l<n&&(n=l);let c;if(a.type===4?c=Nn(a,e):a.type===14?c=My(a,e):c=0,c===0)return c;c<n&&(n=c)}}return n}function wy(t){const e=t.codegenNode;if(e.type===13)return e.props}function Cy(t){const e=t.patchFlag;return e?parseInt(e,10):void 0}function mL(t,{filename:e="",prefixIdentifiers:n=!1,hoistStatic:i=!1,hmr:s=!1,cacheHandlers:r=!1,nodeTransforms:o=[],directiveTransforms:a={},transformHoist:l=null,isBuiltInComponent:c=Lt,isCustomElement:u=Lt,expressionPlugins:f=[],scopeId:h=null,slotted:p=!0,ssr:g=!1,inSSR:v=!1,ssrCssVars:m="",bindingMetadata:d=st,inline:T=!1,isTS:_=!1,onError:b=Jd,onWarn:C=gy,compatConfig:A}){const w=e.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),P={filename:e,selfName:w&&mr(gt(w[1])),prefixIdentifiers:n,hoistStatic:i,hmr:s,cacheHandlers:r,nodeTransforms:o,directiveTransforms:a,transformHoist:l,isBuiltInComponent:c,isCustomElement:u,expressionPlugins:f,scopeId:h,slotted:p,ssr:g,inSSR:v,ssrCssVars:m,bindingMetadata:d,inline:T,isTS:_,onError:b,onWarn:C,compatConfig:A,root:t,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new WeakMap,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:t,childIndex:0,inVOnce:!1,helper(x){const E=P.helpers.get(x)||0;return P.helpers.set(x,E+1),x},removeHelper(x){const E=P.helpers.get(x);if(E){const D=E-1;D?P.helpers.set(x,D):P.helpers.delete(x)}},helperString(x){return`_${So[P.helper(x)]}`},replaceNode(x){P.parent.children[P.childIndex]=P.currentNode=x},removeNode(x){const E=P.parent.children,D=x?E.indexOf(x):P.currentNode?P.childIndex:-1;!x||x===P.currentNode?(P.currentNode=null,P.onNodeRemoved()):P.childIndex>D&&(P.childIndex--,P.onNodeRemoved()),P.parent.children.splice(D,1)},onNodeRemoved:Lt,addIdentifiers(x){},removeIdentifiers(x){},hoist(x){He(x)&&(x=Ge(x)),P.hoists.push(x);const E=Ge(`_hoisted_${P.hoists.length}`,!1,x.loc,2);return E.hoisted=x,E},cache(x,E=!1){return GP(P.cached++,x,E)}};return P.filters=new Set,P}function gL(t,e){const n=mL(t,e);vu(t,n),e.hoistStatic&&dL(t,n),e.ssr||_L(t,n),t.helpers=new Set([...n.helpers.keys()]),t.components=[...n.components],t.directives=[...n.directives],t.imports=n.imports,t.hoists=n.hoists,t.temps=n.temps,t.cached=n.cached,t.transformed=!0,t.filters=[...n.filters]}function _L(t,e){const{helper:n}=e,{children:i}=t;if(i.length===1){const s=i[0];if(Ty(t,s)&&s.codegenNode){const r=s.codegenNode;r.type===13&&Zd(r,e),t.codegenNode=r}else t.codegenNode=s}else if(i.length>1){let s=64;t.codegenNode=Ta(e,n(xa),void 0,t.children,s+"",void 0,void 0,!0,void 0,!1)}}function vL(t,e){let n=0;const i=()=>{n--};for(;n<t.children.length;n++){const s=t.children[n];He(s)||(e.parent=t,e.childIndex=n,e.onNodeRemoved=i,vu(s,e))}}function vu(t,e){e.currentNode=t;const{nodeTransforms:n}=e,i=[];for(let r=0;r<n.length;r++){const o=n[r](t,e);if(o&&(be(o)?i.push(...o):i.push(o)),e.currentNode)t=e.currentNode;else return}switch(t.type){case 3:e.ssr||e.helper($a);break;case 5:e.ssr||e.helper(gu);break;case 9:for(let r=0;r<t.branches.length;r++)vu(t.branches[r],e);break;case 10:case 11:case 1:case 0:vL(t,e);break}e.currentNode=t;let s=i.length;for(;s--;)i[s]()}function Ry(t,e){const n=He(t)?i=>i===t:i=>t.test(i);return(i,s)=>{if(i.type===1){const{props:r}=i;if(i.tagType===3&&r.some(JP))return;const o=[];for(let a=0;a<r.length;a++){const l=r[a];if(l.type===7&&n(l.name)){r.splice(a,1),a--;const c=e(i,l,s);c&&o.push(c)}}return o}}}const Eu="/*#__PURE__*/",Py=t=>`${So[t]}: _${So[t]}`;function EL(t,{mode:e="function",prefixIdentifiers:n=e==="module",sourceMap:i=!1,filename:s="template.vue.html",scopeId:r=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:u=!1,isTS:f=!1,inSSR:h=!1}){const p={mode:e,prefixIdentifiers:n,sourceMap:i,filename:s,scopeId:r,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:c,ssr:u,isTS:f,inSSR:h,source:t.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(v){return`_${So[v]}`},push(v,m=-2,d){p.code+=v},indent(){g(++p.indentLevel)},deindent(v=!1){v?--p.indentLevel:g(--p.indentLevel)},newline(){g(p.indentLevel)}};function g(v){p.push(`
`+"  ".repeat(v),0)}return p}function yL(t,e={}){const n=EL(t,e);e.onContextCreated&&e.onContextCreated(n);const{mode:i,push:s,prefixIdentifiers:r,indent:o,deindent:a,newline:l,scopeId:c,ssr:u}=n,f=Array.from(t.helpers),h=f.length>0,p=!r&&i!=="module";SL(t,n);const v=u?"ssrRender":"render",d=(u?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(s(`function ${v}(${d}) {`),o(),p&&(s("with (_ctx) {"),o(),h&&(s(`const { ${f.map(Py).join(", ")} } = _Vue
`,-1),l())),t.components.length&&(rf(t.components,"component",n),(t.directives.length||t.temps>0)&&l()),t.directives.length&&(rf(t.directives,"directive",n),t.temps>0&&l()),t.filters&&t.filters.length&&(l(),rf(t.filters,"filter",n),l()),t.temps>0){s("let ");for(let T=0;T<t.temps;T++)s(`${T>0?", ":""}_temp${T}`)}return(t.components.length||t.directives.length||t.temps)&&(s(`
`,0),l()),u||s("return "),t.codegenNode?Kt(t.codegenNode,n):s("null"),p&&(a(),s("}")),a(),s("}"),{ast:t,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}function SL(t,e){const{ssr:n,prefixIdentifiers:i,push:s,newline:r,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:l}=e,c=a,u=Array.from(t.helpers);if(u.length>0&&(s(`const _Vue = ${c}
`,-1),t.hoists.length)){const f=[Fd,Bd,$a,kd,hy].filter(h=>u.includes(h)).map(Py).join(", ");s(`const { ${f} } = _Vue
`,-1)}xL(t.hoists,e),r(),s("return ")}function rf(t,e,{helper:n,push:i,newline:s,isTS:r}){const o=n(e==="filter"?Gd:e==="component"?Hd:zd);for(let a=0;a<t.length;a++){let l=t[a];const c=l.endsWith("__self");c&&(l=l.slice(0,-6)),i(`const ${Aa(l,e)} = ${o}(${JSON.stringify(l)}${c?", true":""})${r?"!":""}`),a<t.length-1&&s()}}function xL(t,e){if(!t.length)return;e.pure=!0;const{push:n,newline:i,helper:s,scopeId:r,mode:o}=e;i();for(let a=0;a<t.length;a++){const l=t[a];l&&(n(`const _hoisted_${a+1} = `),Kt(l,e),i())}e.pure=!1}function ep(t,e){const n=t.length>3||!1;e.push("["),n&&e.indent(),ja(t,e,n),n&&e.deindent(),e.push("]")}function ja(t,e,n=!1,i=!0){const{push:s,newline:r}=e;for(let o=0;o<t.length;o++){const a=t[o];He(a)?s(a,-3):be(a)?ep(a,e):Kt(a,e),o<t.length-1&&(n?(i&&s(","),r()):i&&s(", "))}}function Kt(t,e){if(He(t)){e.push(t,-3);return}if(jn(t)){e.push(e.helper(t));return}switch(t.type){case 1:case 9:case 11:Kt(t.codegenNode,e);break;case 2:bL(t,e);break;case 4:Ly(t,e);break;case 5:TL(t,e);break;case 12:Kt(t.codegenNode,e);break;case 8:Ny(t,e);break;case 3:AL(t,e);break;case 13:wL(t,e);break;case 14:RL(t,e);break;case 15:PL(t,e);break;case 17:LL(t,e);break;case 18:NL(t,e);break;case 19:DL(t,e);break;case 20:IL(t,e);break;case 21:ja(t.body,e,!0,!1);break}}function bL(t,e){e.push(JSON.stringify(t.content),-3,t)}function Ly(t,e){const{content:n,isStatic:i}=t;e.push(i?JSON.stringify(n):n,-3,t)}function TL(t,e){const{push:n,helper:i,pure:s}=e;s&&n(Eu),n(`${i(gu)}(`),Kt(t.content,e),n(")")}function Ny(t,e){for(let n=0;n<t.children.length;n++){const i=t.children[n];He(i)?e.push(i,-3):Kt(i,e)}}function ML(t,e){const{push:n}=e;if(t.type===8)n("["),Ny(t,e),n("]");else if(t.isStatic){const i=Qd(t.content)?t.content:JSON.stringify(t.content);n(i,-2,t)}else n(`[${t.content}]`,-3,t)}function AL(t,e){const{push:n,helper:i,pure:s}=e;s&&n(Eu),n(`${i($a)}(${JSON.stringify(t.content)})`,-3,t)}function wL(t,e){const{push:n,helper:i,pure:s}=e,{tag:r,props:o,children:a,patchFlag:l,dynamicProps:c,directives:u,isBlock:f,disableTracking:h,isComponent:p}=t;u&&n(i(Wd)+"("),f&&n(`(${i(lr)}(${h?"true":""}), `),s&&n(Eu);const g=f?To(e.inSSR,p):bo(e.inSSR,p);n(i(g)+"(",-2,t),ja(CL([r,o,a,l,c]),e),n(")"),f&&n(")"),u&&(n(", "),Kt(u,e),n(")"))}function CL(t){let e=t.length;for(;e--&&t[e]==null;);return t.slice(0,e+1).map(n=>n||"null")}function RL(t,e){const{push:n,helper:i,pure:s}=e,r=He(t.callee)?t.callee:i(t.callee);s&&n(Eu),n(r+"(",-2,t),ja(t.arguments,e),n(")")}function PL(t,e){const{push:n,indent:i,deindent:s,newline:r}=e,{properties:o}=t;if(!o.length){n("{}",-2,t);return}const a=o.length>1||!1;n(a?"{":"{ "),a&&i();for(let l=0;l<o.length;l++){const{key:c,value:u}=o[l];ML(c,e),n(": "),Kt(u,e),l<o.length-1&&(n(","),r())}a&&s(),n(a?"}":" }")}function LL(t,e){ep(t.elements,e)}function NL(t,e){const{push:n,indent:i,deindent:s}=e,{params:r,returns:o,body:a,newline:l,isSlot:c}=t;c&&n(`_${So[Yd]}(`),n("(",-2,t),be(r)?ja(r,e):r&&Kt(r,e),n(") => "),(l||a)&&(n("{"),i()),o?(l&&n("return "),be(o)?ep(o,e):Kt(o,e)):a&&Kt(a,e),(l||a)&&(s(),n("}")),c&&(t.isNonScopedSlot&&n(", undefined, true"),n(")"))}function DL(t,e){const{test:n,consequent:i,alternate:s,newline:r}=t,{push:o,indent:a,deindent:l,newline:c}=e;if(n.type===4){const f=!Qd(n.content);f&&o("("),Ly(n,e),f&&o(")")}else o("("),Kt(n,e),o(")");r&&a(),e.indentLevel++,r||o(" "),o("? "),Kt(i,e),e.indentLevel--,r&&c(),r||o(" "),o(": ");const u=s.type===19;u||e.indentLevel++,Kt(s,e),u||e.indentLevel--,r&&l(!0)}function IL(t,e){const{push:n,helper:i,indent:s,deindent:r,newline:o}=e;n(`_cache[${t.index}] || (`),t.isVNode&&(s(),n(`${i(Mc)}(-1),`),o()),n(`_cache[${t.index}] = `),Kt(t.value,e),t.isVNode&&(n(","),o(),n(`${i(Mc)}(1),`),o(),n(`_cache[${t.index}]`),r()),n(")")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const OL=Ry(/^(if|else|else-if)$/,(t,e,n)=>UL(t,e,n,(i,s,r)=>{const o=n.parent.children;let a=o.indexOf(i),l=0;for(;a-->=0;){const c=o[a];c&&c.type===9&&(l+=c.branches.length)}return()=>{if(r)i.codegenNode=ag(s,l,n);else{const c=FL(i.codegenNode);c.alternate=ag(s,l+i.branches.length-1,n)}}}));function UL(t,e,n,i){if(e.name!=="else"&&(!e.exp||!e.exp.content.trim())){const s=e.exp?e.exp.loc:t.loc;n.onError(pt(28,e.loc)),e.exp=Ge("true",!1,s)}if(e.name==="if"){const s=og(t,e),r={type:9,loc:t.loc,branches:[s]};if(n.replaceNode(r),i)return i(r,s,!0)}else{const s=n.parent.children;let r=s.indexOf(t);for(;r-->=-1;){const o=s[r];if(o&&o.type===3){n.removeNode(o);continue}if(o&&o.type===2&&!o.content.trim().length){n.removeNode(o);continue}if(o&&o.type===9){e.name==="else-if"&&o.branches[o.branches.length-1].condition===void 0&&n.onError(pt(30,t.loc)),n.removeNode();const a=og(t,e);o.branches.push(a);const l=i&&i(o,a,!1);vu(a,n),l&&l(),n.currentNode=null}else n.onError(pt(30,t.loc));break}}}function og(t,e){const n=t.tagType===3;return{type:10,loc:t.loc,condition:e.name==="else"?void 0:e.exp,children:n&&!Wn(t,"for")?t.children:[t],userKey:_u(t,"key"),isTemplateIf:n}}function ag(t,e,n){return t.condition?vh(t.condition,lg(t,e,n),Rt(n.helper($a),['""',"true"])):lg(t,e,n)}function lg(t,e,n){const{helper:i}=n,s=Et("key",Ge(`${e}`,!1,An,2)),{children:r}=t,o=r[0];if(r.length!==1||o.type!==1)if(r.length===1&&o.type===11){const l=o.codegenNode;return Rc(l,s,n),l}else return Ta(n,i(xa),Ln([s]),r,64+"",void 0,void 0,!0,!1,!1,t.loc);else{const l=o.codegenNode,c=eL(l);return c.type===13&&Zd(c,n),Rc(c,s,n),l}}function FL(t){for(;;)if(t.type===19)if(t.alternate.type===19)t=t.alternate;else return t;else t.type===20&&(t=t.value)}const BL=Ry("for",(t,e,n)=>{const{helper:i,removeHelper:s}=n;return kL(t,e,n,r=>{const o=Rt(i($d),[r.source]),a=wc(t),l=Wn(t,"memo"),c=_u(t,"key"),u=c&&(c.type===6?Ge(c.value.content,!0):c.exp),f=c?Et("key",u):null,h=r.source.type===4&&r.source.constType>0,p=h?64:c?128:256;return r.codegenNode=Ta(n,i(xa),void 0,o,p+"",void 0,void 0,!0,!h,!1,t.loc),()=>{let g;const{children:v}=r,m=v.length!==1||v[0].type!==1,d=Cc(t)?t:a&&t.children.length===1&&Cc(t.children[0])?t.children[0]:null;if(d?(g=d.codegenNode,a&&f&&Rc(g,f,n)):m?g=Ta(n,i(xa),f?Ln([f]):void 0,t.children,"64",void 0,void 0,!0,void 0,!1):(g=v[0].codegenNode,a&&f&&Rc(g,f,n),g.isBlock!==!h&&(g.isBlock?(s(lr),s(To(n.inSSR,g.isComponent))):s(bo(n.inSSR,g.isComponent))),g.isBlock=!h,g.isBlock?(i(lr),i(To(n.inSSR,g.isComponent))):i(bo(n.inSSR,g.isComponent))),l){const T=xo(Sh(r.parseResult,[Ge("_cached")]));T.body=WP([qn(["const _memo = (",l.exp,")"]),qn(["if (_cached",...u?[" && _cached.key === ",u]:[],` && ${n.helperString(my)}(_cached, _memo)) return _cached`]),qn(["const _item = ",g]),Ge("_item.memo = _memo"),Ge("return _item")]),o.arguments.push(T,Ge("_cache"),Ge(String(n.cached++)))}else o.arguments.push(xo(Sh(r.parseResult),g,!0))}})});function kL(t,e,n,i){if(!e.exp){n.onError(pt(31,e.loc));return}const s=e.forParseResult;if(!s){n.onError(pt(32,e.loc));return}Dy(s);const{addIdentifiers:r,removeIdentifiers:o,scopes:a}=n,{source:l,value:c,key:u,index:f}=s,h={type:11,loc:e.loc,source:l,valueAlias:c,keyAlias:u,objectIndexAlias:f,parseResult:s,children:wc(t)?t.children:[t]};n.replaceNode(h),a.vFor++;const p=i&&i(h);return()=>{a.vFor--,p&&p()}}function Dy(t,e){t.finalized||(t.finalized=!0)}function Sh({value:t,key:e,index:n},i=[]){return HL([t,e,n,...i])}function HL(t){let e=t.length;for(;e--&&!t[e];);return t.slice(0,e+1).map((n,i)=>n||Ge("_".repeat(i+1),!1))}const cg=Ge("undefined",!1),VL=(t,e)=>{if(t.type===1&&(t.tagType===1||t.tagType===3)){const n=Wn(t,"slot");if(n)return n.exp,e.scopes.vSlot++,()=>{e.scopes.vSlot--}}},zL=(t,e,n,i)=>xo(t,n,!1,!0,n.length?n[0].loc:i);function GL(t,e,n=zL){e.helper(Yd);const{children:i,loc:s}=t,r=[],o=[];let a=e.scopes.vSlot>0||e.scopes.vFor>0;const l=Wn(t,"slot",!0);if(l){const{arg:m,exp:d}=l;m&&!cn(m)&&(a=!0),r.push(Et(m||Ge("default",!0),n(d,void 0,i,s)))}let c=!1,u=!1;const f=[],h=new Set;let p=0;for(let m=0;m<i.length;m++){const d=i[m];let T;if(!wc(d)||!(T=Wn(d,"slot",!0))){d.type!==3&&f.push(d);continue}if(l){e.onError(pt(37,T.loc));break}c=!0;const{children:_,loc:b}=d,{arg:C=Ge("default",!0),exp:A,loc:w}=T;let P;cn(C)?P=C?C.content:"default":a=!0;const x=Wn(d,"for"),E=n(A,x,_,b);let D,I;if(D=Wn(d,"if"))a=!0,o.push(vh(D.exp,El(C,E,p++),cg));else if(I=Wn(d,/^else(-if)?$/,!0)){let N=m,G;for(;N--&&(G=i[N],G.type===3););if(G&&wc(G)&&Wn(G,"if")){i.splice(m,1),m--;let q=o[o.length-1];for(;q.alternate.type===19;)q=q.alternate;q.alternate=I.exp?vh(I.exp,El(C,E,p++),cg):El(C,E,p++)}else e.onError(pt(30,I.loc))}else if(x){a=!0;const N=x.forParseResult;N?(Dy(N),o.push(Rt(e.helper($d),[N.source,xo(Sh(N),El(C,E),!0)]))):e.onError(pt(32,x.loc))}else{if(P){if(h.has(P)){e.onError(pt(38,w));continue}h.add(P),P==="default"&&(u=!0)}r.push(Et(C,E))}}if(!l){const m=(d,T)=>{const _=n(d,void 0,T,s);return e.compatConfig&&(_.isNonScopedSlot=!0),Et("default",_)};c?f.length&&f.some(d=>Iy(d))&&(u?e.onError(pt(39,f[0].loc)):r.push(m(void 0,f))):r.push(m(void 0,i))}const g=a?2:sc(t.children)?3:1;let v=Ln(r.concat(Et("_",Ge(g+"",!1))),s);return o.length&&(v=Rt(e.helper(py),[v,qa(o)])),{slots:v,hasDynamicSlots:a}}function El(t,e,n){const i=[Et("name",t),Et("fn",e)];return n!=null&&i.push(Et("key",Ge(String(n),!0))),Ln(i)}function sc(t){for(let e=0;e<t.length;e++){const n=t[e];switch(n.type){case 1:if(n.tagType===2||sc(n.children))return!0;break;case 9:if(sc(n.branches))return!0;break;case 10:case 11:if(sc(n.children))return!0;break}}return!1}function Iy(t){return t.type!==2&&t.type!==12?!0:t.type===2?!!t.content.trim():Iy(t.content)}const Oy=new WeakMap,WL=(t,e)=>function(){if(t=e.currentNode,!(t.type===1&&(t.tagType===0||t.tagType===1)))return;const{tag:i,props:s}=t,r=t.tagType===1;let o=r?$L(t,e):`"${i}"`;const a=at(o)&&o.callee===Vd;let l,c,u,f=0,h,p,g,v=a||o===ca||o===Ud||!r&&(i==="svg"||i==="foreignObject");if(s.length>0){const m=Uy(t,e,void 0,r,a);l=m.props,f=m.patchFlag,p=m.dynamicPropNames;const d=m.directives;g=d&&d.length?qa(d.map(T=>qL(T,e))):void 0,m.shouldUseBlock&&(v=!0)}if(t.children.length>0)if(o===bc&&(v=!0,f|=1024),r&&o!==ca&&o!==bc){const{slots:d,hasDynamicSlots:T}=GL(t,e);c=d,T&&(f|=1024)}else if(t.children.length===1&&o!==ca){const d=t.children[0],T=d.type,_=T===5||T===8;_&&Nn(d,e)===0&&(f|=1),_||T===2?c=d:c=t.children}else c=t.children;f!==0&&(u=String(f),p&&p.length&&(h=jL(p))),t.codegenNode=Ta(e,o,l,c,u,h,g,!!v,!1,r,t.loc)};function $L(t,e,n=!1){let{tag:i}=t;const s=xh(i),r=_u(t,"is");if(r)if(s||Qs("COMPILER_IS_ON_ELEMENT",e)){const a=r.type===6?r.value&&Ge(r.value.content,!0):r.exp;if(a)return Rt(e.helper(Vd),[a])}else r.type===6&&r.value.content.startsWith("vue:")&&(i=r.value.content.slice(4));const o=_y(i)||e.isBuiltInComponent(i);return o?(n||e.helper(o),o):(e.helper(Hd),e.components.add(i),Aa(i,"component"))}function Uy(t,e,n=t.props,i,s,r=!1){const{tag:o,loc:a,children:l}=t;let c=[];const u=[],f=[],h=l.length>0;let p=!1,g=0,v=!1,m=!1,d=!1,T=!1,_=!1,b=!1;const C=[],A=x=>{c.length&&(u.push(Ln(ug(c),a)),c=[]),x&&u.push(x)},w=({key:x,value:E})=>{if(cn(x)){const D=x.content,I=dr(D);if(I&&(!i||s)&&D.toLowerCase()!=="onclick"&&D!=="onUpdate:modelValue"&&!rs(D)&&(T=!0),I&&rs(D)&&(b=!0),I&&E.type===14&&(E=E.arguments[0]),E.type===20||(E.type===4||E.type===8)&&Nn(E,e)>0)return;D==="ref"?v=!0:D==="class"?m=!0:D==="style"?d=!0:D!=="key"&&!C.includes(D)&&C.push(D),i&&(D==="class"||D==="style")&&!C.includes(D)&&C.push(D)}else _=!0};for(let x=0;x<n.length;x++){const E=n[x];if(E.type===6){const{loc:D,name:I,nameLoc:N,value:G}=E;let q=!0;if(I==="ref"&&(v=!0,e.scopes.vFor>0&&c.push(Et(Ge("ref_for",!0),Ge("true")))),I==="is"&&(xh(o)||G&&G.content.startsWith("vue:")||Qs("COMPILER_IS_ON_ELEMENT",e)))continue;c.push(Et(Ge(I,!0,N),Ge(G?G.content:"",q,G?G.loc:D)))}else{const{name:D,arg:I,exp:N,loc:G,modifiers:q}=E,z=D==="bind",K=D==="on";if(D==="slot"){i||e.onError(pt(40,G));continue}if(D==="once"||D==="memo"||D==="is"||z&&Gs(I,"is")&&(xh(o)||Qs("COMPILER_IS_ON_ELEMENT",e))||K&&r)continue;if((z&&Gs(I,"key")||K&&h&&Gs(I,"vue:before-update"))&&(p=!0),z&&Gs(I,"ref")&&e.scopes.vFor>0&&c.push(Et(Ge("ref_for",!0),Ge("true"))),!I&&(z||K)){if(_=!0,N)if(z){if(A(),Qs("COMPILER_V_BIND_OBJECT_ORDER",e)){u.unshift(N);continue}u.push(N)}else A({type:14,loc:G,callee:e.helper(jd),arguments:i?[N]:[N,"true"]});else e.onError(pt(z?34:35,G));continue}z&&q.includes("prop")&&(g|=32);const k=e.directiveTransforms[D];if(k){const{props:le,needRuntime:ce}=k(E,t,e);!r&&le.forEach(w),K&&I&&!cn(I)?A(Ln(le,a)):c.push(...le),ce&&(f.push(E),jn(ce)&&Oy.set(E,ce))}else iC(D)||(f.push(E),h&&(p=!0))}}let P;if(u.length?(A(),u.length>1?P=Rt(e.helper(Tc),u,a):P=u[0]):c.length&&(P=Ln(ug(c),a)),_?g|=16:(m&&!i&&(g|=2),d&&!i&&(g|=4),C.length&&(g|=8),T&&(g|=32)),!p&&(g===0||g===32)&&(v||b||f.length>0)&&(g|=512),!e.inSSR&&P)switch(P.type){case 15:let x=-1,E=-1,D=!1;for(let G=0;G<P.properties.length;G++){const q=P.properties[G].key;cn(q)?q.content==="class"?x=G:q.content==="style"&&(E=G):q.isHandlerKey||(D=!0)}const I=P.properties[x],N=P.properties[E];D?P=Rt(e.helper(ba),[P]):(I&&!cn(I.value)&&(I.value=Rt(e.helper(Xd),[I.value])),N&&(d||N.value.type===4&&N.value.content.trim()[0]==="["||N.value.type===17)&&(N.value=Rt(e.helper(qd),[N.value])));break;case 14:break;default:P=Rt(e.helper(ba),[Rt(e.helper(Xa),[P])]);break}return{props:P,directives:f,patchFlag:g,dynamicPropNames:C,shouldUseBlock:p}}function ug(t){const e=new Map,n=[];for(let i=0;i<t.length;i++){const s=t[i];if(s.key.type===8||!s.key.isStatic){n.push(s);continue}const r=s.key.content,o=e.get(r);o?(r==="style"||r==="class"||dr(r))&&XL(o,s):(e.set(r,s),n.push(s))}return n}function XL(t,e){t.value.type===17?t.value.elements.push(e.value):t.value=qa([t.value,e.value],t.loc)}function qL(t,e){const n=[],i=Oy.get(t);i?n.push(e.helperString(i)):(e.helper(zd),e.directives.add(t.name),n.push(Aa(t.name,"directive")));const{loc:s}=t;if(t.exp&&n.push(t.exp),t.arg&&(t.exp||n.push("void 0"),n.push(t.arg)),Object.keys(t.modifiers).length){t.arg||(t.exp||n.push("void 0"),n.push("void 0"));const r=Ge("true",!1,s);n.push(Ln(t.modifiers.map(o=>Et(o,r)),s))}return qa(n,t.loc)}function jL(t){let e="[";for(let n=0,i=t.length;n<i;n++)e+=JSON.stringify(t[n]),n<i-1&&(e+=", ");return e+"]"}function xh(t){return t==="component"||t==="Component"}const YL=(t,e)=>{if(Cc(t)){const{children:n,loc:i}=t,{slotName:s,slotProps:r}=KL(t,e),o=[e.prefixIdentifiers?"_ctx.$slots":"$slots",s,"{}","undefined","true"];let a=2;r&&(o[2]=r,a=3),n.length&&(o[3]=xo([],n,!1,!1,i),a=4),e.scopeId&&!e.slotted&&(a=5),o.splice(a),t.codegenNode=Rt(e.helper(dy),o,i)}};function KL(t,e){let n='"default"',i;const s=[];for(let r=0;r<t.props.length;r++){const o=t.props[r];if(o.type===6)o.value&&(o.name==="name"?n=JSON.stringify(o.value.content):(o.name=gt(o.name),s.push(o)));else if(o.name==="bind"&&Gs(o.arg,"name")){if(o.exp)n=o.exp;else if(o.arg&&o.arg.type===4){const a=gt(o.arg.content);n=o.exp=Ge(a,!1,o.arg.loc)}}else o.name==="bind"&&o.arg&&cn(o.arg)&&(o.arg.content=gt(o.arg.content)),s.push(o)}if(s.length>0){const{props:r,directives:o}=Uy(t,e,s,!1,!1);i=r,o.length&&e.onError(pt(36,o[0].loc))}return{slotName:n,slotProps:i}}const ZL=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,Fy=(t,e,n,i)=>{const{loc:s,modifiers:r,arg:o}=t;!t.exp&&!r.length&&n.onError(pt(35,s));let a;if(o.type===4)if(o.isStatic){let f=o.content;f.startsWith("vue:")&&(f=`vnode-${f.slice(4)}`);const h=e.tagType!==0||f.startsWith("vnode")||!/[A-Z]/.test(f)?Jr(gt(f)):`on:${f}`;a=Ge(h,!0,o.loc)}else a=qn([`${n.helperString(_h)}(`,o,")"]);else a=o,a.children.unshift(`${n.helperString(_h)}(`),a.children.push(")");let l=t.exp;l&&!l.content.trim()&&(l=void 0);let c=n.cacheHandlers&&!l&&!n.inVOnce;if(l){const f=vy(l.content),h=!(f||ZL.test(l.content)),p=l.content.includes(";");(h||c&&f)&&(l=qn([`${h?"$event":"(...args)"} => ${p?"{":"("}`,l,p?"}":")"]))}let u={props:[Et(a,l||Ge("() => {}",!1,s))]};return i&&(u=i(u)),c&&(u.props[0].value=n.cache(u.props[0].value)),u.props.forEach(f=>f.key.isHandlerKey=!0),u},JL=(t,e,n)=>{const{modifiers:i,loc:s}=t,r=t.arg;let{exp:o}=t;if(o&&o.type===4&&!o.content.trim()&&(o=void 0),!o){if(r.type!==4||!r.isStatic)return n.onError(pt(52,r.loc)),{props:[Et(r,Ge("",!0,s))]};const a=gt(r.content);o=t.exp=Ge(a,!1,r.loc)}return r.type!==4?(r.children.unshift("("),r.children.push(') || ""')):r.isStatic||(r.content=`${r.content} || ""`),i.includes("camel")&&(r.type===4?r.isStatic?r.content=gt(r.content):r.content=`${n.helperString(gh)}(${r.content})`:(r.children.unshift(`${n.helperString(gh)}(`),r.children.push(")"))),n.inSSR||(i.includes("prop")&&fg(r,"."),i.includes("attr")&&fg(r,"^")),{props:[Et(r,o)]}},fg=(t,e)=>{t.type===4?t.isStatic?t.content=e+t.content:t.content=`\`${e}\${${t.content}}\``:(t.children.unshift(`'${e}' + (`),t.children.push(")"))},QL=(t,e)=>{if(t.type===0||t.type===1||t.type===11||t.type===10)return()=>{const n=t.children;let i,s=!1;for(let r=0;r<n.length;r++){const o=n[r];if(sf(o)){s=!0;for(let a=r+1;a<n.length;a++){const l=n[a];if(sf(l))i||(i=n[r]=qn([o],o.loc)),i.children.push(" + ",l),n.splice(a,1),a--;else{i=void 0;break}}}}if(!(!s||n.length===1&&(t.type===0||t.type===1&&t.tagType===0&&!t.props.find(r=>r.type===7&&!e.directiveTransforms[r.name])&&t.tag!=="template")))for(let r=0;r<n.length;r++){const o=n[r];if(sf(o)||o.type===8){const a=[];(o.type!==2||o.content!==" ")&&a.push(o),!e.ssr&&Nn(o,e)===0&&a.push("1"),n[r]={type:12,content:o,loc:o.loc,codegenNode:Rt(e.helper(kd),a)}}}}},hg=new WeakSet,eN=(t,e)=>{if(t.type===1&&Wn(t,"once",!0))return hg.has(t)||e.inVOnce||e.inSSR?void 0:(hg.add(t),e.inVOnce=!0,e.helper(Mc),()=>{e.inVOnce=!1;const n=e.currentNode;n.codegenNode&&(n.codegenNode=e.cache(n.codegenNode,!0))})},By=(t,e,n)=>{const{exp:i,arg:s}=t;if(!i)return n.onError(pt(41,t.loc)),yl();const r=i.loc.source,o=i.type===4?i.content:r,a=n.bindingMetadata[r];if(a==="props"||a==="props-aliased")return n.onError(pt(44,i.loc)),yl();if(!o.trim()||!vy(o)&&!!1)return n.onError(pt(42,i.loc)),yl();const c=s||Ge("modelValue",!0),u=s?cn(s)?`onUpdate:${gt(s.content)}`:qn(['"onUpdate:" + ',s]):"onUpdate:modelValue";let f;const h=n.isTS?"($event: any)":"$event";f=qn([`${h} => ((`,i,") = $event)"]);const p=[Et(c,t.exp),Et(u,f)];if(t.modifiers.length&&e.tagType===1){const g=t.modifiers.map(m=>(Qd(m)?m:JSON.stringify(m))+": true").join(", "),v=s?cn(s)?`${s.content}Modifiers`:qn([s,' + "Modifiers"']):"modelModifiers";p.push(Et(v,Ge(`{ ${g} }`,!1,t.loc,2)))}return yl(p)};function yl(t=[]){return{props:t}}const tN=/[\w).+\-_$\]]/,nN=(t,e)=>{Qs("COMPILER_FILTERS",e)&&(t.type===5&&Lc(t.content,e),t.type===1&&t.props.forEach(n=>{n.type===7&&n.name!=="for"&&n.exp&&Lc(n.exp,e)}))};function Lc(t,e){if(t.type===4)dg(t,e);else for(let n=0;n<t.children.length;n++){const i=t.children[n];typeof i=="object"&&(i.type===4?dg(i,e):i.type===8?Lc(t,e):i.type===5&&Lc(i.content,e))}}function dg(t,e){const n=t.content;let i=!1,s=!1,r=!1,o=!1,a=0,l=0,c=0,u=0,f,h,p,g,v=[];for(p=0;p<n.length;p++)if(h=f,f=n.charCodeAt(p),i)f===39&&h!==92&&(i=!1);else if(s)f===34&&h!==92&&(s=!1);else if(r)f===96&&h!==92&&(r=!1);else if(o)f===47&&h!==92&&(o=!1);else if(f===124&&n.charCodeAt(p+1)!==124&&n.charCodeAt(p-1)!==124&&!a&&!l&&!c)g===void 0?(u=p+1,g=n.slice(0,p).trim()):m();else{switch(f){case 34:s=!0;break;case 39:i=!0;break;case 96:r=!0;break;case 40:c++;break;case 41:c--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(f===47){let d=p-1,T;for(;d>=0&&(T=n.charAt(d),T===" ");d--);(!T||!tN.test(T))&&(o=!0)}}g===void 0?g=n.slice(0,p).trim():u!==0&&m();function m(){v.push(n.slice(u,p).trim()),u=p+1}if(v.length){for(p=0;p<v.length;p++)g=iN(g,v[p],e);t.content=g}}function iN(t,e,n){n.helper(Gd);const i=e.indexOf("(");if(i<0)return n.filters.add(e),`${Aa(e,"filter")}(${t})`;{const s=e.slice(0,i),r=e.slice(i+1);return n.filters.add(s),`${Aa(s,"filter")}(${t}${r!==")"?","+r:r}`}}const pg=new WeakSet,sN=(t,e)=>{if(t.type===1){const n=Wn(t,"memo");return!n||pg.has(t)?void 0:(pg.add(t),()=>{const i=t.codegenNode||e.currentNode.codegenNode;i&&i.type===13&&(t.tagType!==1&&Zd(i,e),t.codegenNode=Rt(e.helper(Kd),[n.exp,xo(void 0,i),"_cache",String(e.cached++)]))})}};function rN(t){return[[eN,OL,sN,BL,nN,YL,WL,VL,QL],{on:Fy,bind:JL,model:By}]}function oN(t,e={}){const n=e.onError||Jd,i=e.mode==="module";e.prefixIdentifiers===!0?n(pt(47)):i&&n(pt(48));const s=!1;e.cacheHandlers&&n(pt(49)),e.scopeId&&!i&&n(pt(50));const r=it({},e,{prefixIdentifiers:s}),o=He(t)?hL(t,r):t,[a,l]=rN();return gL(o,it({},r,{nodeTransforms:[...a,...e.nodeTransforms||[]],directiveTransforms:it({},l,e.directiveTransforms||{})})),yL(o,r)}const aN=()=>({props:[]});/**
* @vue/compiler-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ky=Symbol(""),Hy=Symbol(""),Vy=Symbol(""),zy=Symbol(""),bh=Symbol(""),Gy=Symbol(""),Wy=Symbol(""),$y=Symbol(""),Xy=Symbol(""),qy=Symbol("");VP({[ky]:"vModelRadio",[Hy]:"vModelCheckbox",[Vy]:"vModelText",[zy]:"vModelSelect",[bh]:"vModelDynamic",[Gy]:"withModifiers",[Wy]:"withKeys",[$y]:"vShow",[Xy]:"Transition",[qy]:"TransitionGroup"});let br;function lN(t,e=!1){return br||(br=document.createElement("div")),e?(br.innerHTML=`<div foo="${t.replace(/"/g,"&quot;")}">`,br.children[0].getAttribute("foo")):(br.innerHTML=t,br.textContent)}const cN={parseMode:"html",isVoidTag:EC,isNativeTag:t=>gC(t)||_C(t)||vC(t),isPreTag:t=>t==="pre",decodeEntities:lN,isBuiltInComponent:t=>{if(t==="Transition"||t==="transition")return Xy;if(t==="TransitionGroup"||t==="transition-group")return qy},getNamespace(t,e,n){let i=e?e.ns:n;if(e&&i===2)if(e.tag==="annotation-xml"){if(t==="svg")return 1;e.props.some(s=>s.type===6&&s.name==="encoding"&&s.value!=null&&(s.value.content==="text/html"||s.value.content==="application/xhtml+xml"))&&(i=0)}else/^m(?:[ions]|text)$/.test(e.tag)&&t!=="mglyph"&&t!=="malignmark"&&(i=0);else e&&i===1&&(e.tag==="foreignObject"||e.tag==="desc"||e.tag==="title")&&(i=0);if(i===0){if(t==="svg")return 1;if(t==="math")return 2}return i}},uN=t=>{t.type===1&&t.props.forEach((e,n)=>{e.type===6&&e.name==="style"&&e.value&&(t.props[n]={type:7,name:"bind",arg:Ge("style",!0,e.loc),exp:fN(e.value.content,e.loc),modifiers:[],loc:e.loc})})},fN=(t,e)=>{const n=mE(t);return Ge(JSON.stringify(n),!1,e,3)};function as(t,e){return pt(t,e)}const hN=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(as(53,s)),e.children.length&&(n.onError(as(54,s)),e.children.length=0),{props:[Et(Ge("innerHTML",!0,s),i||Ge("",!0))]}},dN=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(as(55,s)),e.children.length&&(n.onError(as(56,s)),e.children.length=0),{props:[Et(Ge("textContent",!0),i?Nn(i,n)>0?i:Rt(n.helperString(gu),[i],s):Ge("",!0))]}},pN=(t,e,n)=>{const i=By(t,e,n);if(!i.props.length||e.tagType===1)return i;t.arg&&n.onError(as(58,t.arg.loc));const{tag:s}=e,r=n.isCustomElement(s);if(s==="input"||s==="textarea"||s==="select"||r){let o=Vy,a=!1;if(s==="input"||r){const l=_u(e,"type");if(l){if(l.type===7)o=bh;else if(l.value)switch(l.value.content){case"radio":o=ky;break;case"checkbox":o=Hy;break;case"file":a=!0,n.onError(as(59,t.loc));break}}else ZP(e)&&(o=bh)}else s==="select"&&(o=zy);a||(i.needRuntime=n.helper(o))}else n.onError(as(57,t.loc));return i.props=i.props.filter(o=>!(o.key.type===4&&o.key.content==="modelValue")),i},mN=Mn("passive,once,capture"),gN=Mn("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),_N=Mn("left,right"),jy=Mn("onkeyup,onkeydown,onkeypress",!0),vN=(t,e,n,i)=>{const s=[],r=[],o=[];for(let a=0;a<e.length;a++){const l=e[a];l==="native"&&Ma("COMPILER_V_ON_NATIVE",n)||mN(l)?o.push(l):_N(l)?cn(t)?jy(t.content)?s.push(l):r.push(l):(s.push(l),r.push(l)):gN(l)?r.push(l):s.push(l)}return{keyModifiers:s,nonKeyModifiers:r,eventOptionModifiers:o}},mg=(t,e)=>cn(t)&&t.content.toLowerCase()==="onclick"?Ge(e,!0):t.type!==4?qn(["(",t,`) === "onClick" ? "${e}" : (`,t,")"]):t,EN=(t,e,n)=>Fy(t,e,n,i=>{const{modifiers:s}=t;if(!s.length)return i;let{key:r,value:o}=i.props[0];const{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:c}=vN(r,s,n,t.loc);if(l.includes("right")&&(r=mg(r,"onContextmenu")),l.includes("middle")&&(r=mg(r,"onMouseup")),l.length&&(o=Rt(n.helper(Gy),[o,JSON.stringify(l)])),a.length&&(!cn(r)||jy(r.content))&&(o=Rt(n.helper(Wy),[o,JSON.stringify(a)])),c.length){const u=c.map(mr).join("");r=cn(r)?Ge(`${r.content}${u}`,!0):qn(["(",r,`) + "${u}"`])}return{props:[Et(r,o)]}}),yN=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(as(61,s)),{props:[],needRuntime:n.helper($y)}},SN=(t,e)=>{t.type===1&&t.tagType===0&&(t.tag==="script"||t.tag==="style")&&e.removeNode()},xN=[uN],bN={cloak:aN,html:hN,text:dN,model:pN,on:EN,show:yN};function TN(t,e={}){return oN(t,it({},cN,e,{nodeTransforms:[SN,...xN,...e.nodeTransforms||[]],directiveTransforms:it({},bN,e.directiveTransforms||{}),transformHoist:null}))}/**
* vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const gg=new WeakMap;function MN(t){let e=gg.get(t??st);return e||(e=Object.create(null),gg.set(t??st,e)),e}function AN(t,e){if(!He(t))if(t.nodeType)t=t.innerHTML;else return Lt;const n=t,i=MN(e),s=i[n];if(s)return s;if(t[0]==="#"){const l=document.querySelector(t);t=l?l.innerHTML:""}const r=it({hoistStatic:!0,onError:void 0,onWarn:Lt},e);!r.isCustomElement&&typeof customElements<"u"&&(r.isCustomElement=l=>!!customElements.get(l));const{code:o}=TN(t,r),a=new Function("Vue",o)(OP);return a._rc=!0,i[n]=a}I0(AN);const wN=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},CN={mounted(){console.log("Component mounted.")}},RN={class:"container"},PN=R0('<div class="row justify-content-center"><div class="col-md-8"><div class="card"><div class="card-header">Example Component</div><div class="card-body"> I&#39;m an example component. </div></div></div></div>',1),LN=[PN];function NN(t,e,n,i,s,r){return Ga(),A0("div",RN,LN)}const DN=wN(CN,[["render",NN]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tp="163",Tr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},IN=0,_g=1,ON=2,Yy=1,UN=2,bi=3,_s=0,St=1,ni=2,ls=0,so=1,vg=2,Eg=3,yg=4,FN=5,Bs=100,BN=101,kN=102,HN=103,VN=104,zN=200,GN=201,WN=202,$N=203,Th=204,Mh=205,XN=206,qN=207,jN=208,YN=209,KN=210,ZN=211,JN=212,QN=213,eD=214,tD=0,nD=1,iD=2,Nc=3,sD=4,rD=5,oD=6,aD=7,Ky=0,lD=1,cD=2,cs=0,uD=1,fD=2,hD=3,dD=4,pD=5,mD=6,gD=7,Zy=300,Mo=301,Ao=302,Ah=303,wh=304,yu=306,Ch=1e3,$s=1001,Rh=1002,Dn=1003,_D=1004,Sl=1005,Xn=1006,of=1007,Xs=1008,us=1009,vD=1010,ED=1011,Jy=1012,Qy=1013,wo=1014,ss=1015,Dc=1016,eS=1017,tS=1018,Ya=1020,yD=35902,SD=1021,xD=1022,ri=1023,bD=1024,TD=1025,ro=1026,Ca=1027,MD=1028,nS=1029,AD=1030,iS=1031,sS=1033,af=33776,lf=33777,cf=33778,uf=33779,Sg=35840,xg=35841,bg=35842,Tg=35843,rS=36196,Mg=37492,Ag=37496,wg=37808,Cg=37809,Rg=37810,Pg=37811,Lg=37812,Ng=37813,Dg=37814,Ig=37815,Og=37816,Ug=37817,Fg=37818,Bg=37819,kg=37820,Hg=37821,ff=36492,Vg=36494,zg=36495,wD=36283,Gg=36284,Wg=36285,$g=36286,CD=3200,RD=3201,PD=0,LD=1,is="",Jn="srgb",bs="srgb-linear",np="display-p3",Su="display-p3-linear",Ic="linear",ut="srgb",Oc="rec709",Uc="p3",Ar=7680,Xg=519,ND=512,DD=513,ID=514,oS=515,OD=516,UD=517,FD=518,BD=519,qg=35044,jg="300 es",Mi=2e3,Fc=2001;class Er{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yg=1234567;const ua=Math.PI/180,Ra=180/Math.PI;function Oo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function qt(t,e,n){return Math.max(e,Math.min(n,t))}function ip(t,e){return(t%e+e)%e}function kD(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function HD(t,e,n){return t!==e?(n-t)/(e-t):0}function fa(t,e,n){return(1-n)*t+n*e}function VD(t,e,n,i){return fa(t,e,1-Math.exp(-n*i))}function zD(t,e=1){return e-Math.abs(ip(t,e*2)-e)}function GD(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function WD(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function $D(t,e){return t+Math.floor(Math.random()*(e-t+1))}function XD(t,e){return t+Math.random()*(e-t)}function qD(t){return t*(.5-Math.random())}function jD(t){t!==void 0&&(Yg=t);let e=Yg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function YD(t){return t*ua}function KD(t){return t*Ra}function ZD(t){return(t&t-1)===0&&t!==0}function JD(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function QD(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function eI(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const tI={DEG2RAD:ua,RAD2DEG:Ra,generateUUID:Oo,clamp:qt,euclideanModulo:ip,mapLinear:kD,inverseLerp:HD,lerp:fa,damp:VD,pingpong:zD,smoothstep:GD,smootherstep:WD,randInt:$D,randFloat:XD,randFloatSpread:qD,seededRandom:jD,degToRad:YD,radToDeg:KD,isPowerOfTwo:ZD,ceilPowerOfTwo:JD,floorPowerOfTwo:QD,setQuaternionFromProperEuler:eI,normalize:Jt,denormalize:qr};class Be{constructor(e=0,n=0){Be.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,i,s,r,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],v=s[0],m=s[3],d=s[6],T=s[1],_=s[4],b=s[7],C=s[2],A=s[5],w=s[8];return r[0]=o*v+a*T+l*C,r[3]=o*m+a*_+l*A,r[6]=o*d+a*b+l*w,r[1]=c*v+u*T+f*C,r[4]=c*m+u*_+f*A,r[7]=c*d+u*b+f*w,r[2]=h*v+p*T+g*C,r[5]=h*m+p*_+g*A,r[8]=h*d+p*b+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=n*f+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*n-s*l)*v,e[5]=(s*r-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(hf.makeScale(e,n)),this}rotate(e){return this.premultiply(hf.makeRotation(-e)),this}translate(e,n){return this.premultiply(hf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hf=new Xe;function aS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Pa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function nI(){const t=Pa("canvas");return t.style.display="block",t}const Kg={};function iI(t){t in Kg||(Kg[t]=!0,console.warn(t))}const Zg=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jg=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xl={[bs]:{transfer:Ic,primaries:Oc,toReference:t=>t,fromReference:t=>t},[Jn]:{transfer:ut,primaries:Oc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Su]:{transfer:Ic,primaries:Uc,toReference:t=>t.applyMatrix3(Jg),fromReference:t=>t.applyMatrix3(Zg)},[np]:{transfer:ut,primaries:Uc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Jg),fromReference:t=>t.applyMatrix3(Zg).convertLinearToSRGB()}},sI=new Set([bs,Su]),ct={enabled:!0,_workingColorSpace:bs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!sI.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=xl[e].toReference,s=xl[n].fromReference;return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return xl[t].primaries},getTransfer:function(t){return t===is?Ic:xl[t].transfer}};function oo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function df(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let wr;class rI{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wr===void 0&&(wr=Pa("canvas")),wr.width=e.width,wr.height=e.height;const i=wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Pa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=oo(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(oo(n[i]/255)*255):n[i]=oo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oI=0;class lS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oI++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pf(s[o].image)):r.push(pf(s[o]))}else r=pf(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function pf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?rI.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aI=0;class nn extends Er{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=$s,s=$s,r=Xn,o=Xs,a=ri,l=us,c=nn.DEFAULT_ANISOTROPY,u=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aI++}),this.uuid=Oo(),this.name="",this.source=new lS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ch:e.x=e.x-Math.floor(e.x);break;case $s:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ch:e.y=e.y-Math.floor(e.y);break;case $s:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Zy;nn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,i=0,s=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,b=(p+1)/2,C=(d+1)/2,A=(u+h)/4,w=(f+v)/4,P=(g+m)/4;return _>b&&_>C?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=A/i,r=w/i):b>C?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=A/s,r=P/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=w/r,s=P/r),this.set(i,s,r,n),this}let T=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-v)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lI extends Er{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const s={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const r=new nn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new lS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends lI{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class cS extends nn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=$s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cI extends nn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=$s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ur{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*v,T=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const C=Math.sqrt(_),A=Math.atan2(C,d*T);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const b=a*T;if(l=l*m+h*b,c=c*m+p*b,u=u*m+g*b,f=f*m+v*b,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[n]=a*g+u*f+l*p-c*h,e[n+1]=l*g+u*h+c*f-a*p,e[n+2]=c*g+u*p+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mf.copy(this).projectOnVector(e),this.sub(mf)}reflect(e){return this.sub(mf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mf=new j,Qg=new ur;class Ka{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bl.copy(i.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),Tl.subVectors(this.max,qo),Cr.subVectors(e.a,qo),Rr.subVectors(e.b,qo),Pr.subVectors(e.c,qo),Wi.subVectors(Rr,Cr),$i.subVectors(Pr,Rr),Rs.subVectors(Cr,Pr);let n=[0,-Wi.z,Wi.y,0,-$i.z,$i.y,0,-Rs.z,Rs.y,Wi.z,0,-Wi.x,$i.z,0,-$i.x,Rs.z,0,-Rs.x,-Wi.y,Wi.x,0,-$i.y,$i.x,0,-Rs.y,Rs.x,0];return!gf(n,Cr,Rr,Pr,Tl)||(n=[1,0,0,0,1,0,0,0,1],!gf(n,Cr,Rr,Pr,Tl))?!1:(Ml.crossVectors(Wi,$i),n=[Ml.x,Ml.y,Ml.z],gf(n,Cr,Rr,Pr,Tl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new j,new j,new j,new j,new j,new j,new j,new j],Vn=new j,bl=new Ka,Cr=new j,Rr=new j,Pr=new j,Wi=new j,$i=new j,Rs=new j,qo=new j,Tl=new j,Ml=new j,Ps=new j;function gf(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Ps.fromArray(t,r);const a=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),l=e.dot(Ps),c=n.dot(Ps),u=i.dot(Ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const uI=new Ka,jo=new j,_f=new j;class sp{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uI.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const n=jo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(jo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(_f)),this.expandByPoint(jo.copy(e.center).sub(_f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new j,vf=new j,Al=new j,Xi=new j,Ef=new j,wl=new j,yf=new j;class rp{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){vf.copy(e).add(n).multiplyScalar(.5),Al.copy(n).sub(e).normalize(),Xi.copy(this.origin).sub(vf);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Al),a=Xi.dot(this.direction),l=-Xi.dot(Al),c=Xi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(vf).addScaledVector(Al,h),p}intersectSphere(e,n){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),s=_i.dot(_i)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,s,r){Ef.subVectors(n,e),wl.subVectors(i,e),yf.crossVectors(Ef,wl);let o=this.direction.dot(yf),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const l=a*this.direction.dot(wl.crossVectors(Xi,wl));if(l<0)return null;const c=a*this.direction.dot(Ef.cross(Xi));if(c<0||l+c>o)return null;const u=-a*Xi.dot(yf);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,i,s,r,o,a,l,c,u,f,h,p,g,v,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,h,p,g,v,m)}set(e,n,i,s,r,o,a,l,c,u,f,h,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/Lr.setFromMatrixColumn(e,0).length(),r=1/Lr.setFromMatrixColumn(e,1).length(),o=1/Lr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=h-v*c,n[9]=-a*l,n[2]=v-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,v=c*f;n[0]=h+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,v=c*f;n[0]=h-v*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=v-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+v,n[1]=l*f,n[5]=v*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+v,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=v*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fI,e,hI)}lookAt(e,n,i){const s=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),qi.crossVectors(i,dn),qi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),qi.crossVectors(i,dn)),qi.normalize(),Cl.crossVectors(dn,qi),s[0]=qi.x,s[4]=Cl.x,s[8]=dn.x,s[1]=qi.y,s[5]=Cl.y,s[9]=dn.y,s[2]=qi.z,s[6]=Cl.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],T=i[3],_=i[7],b=i[11],C=i[15],A=s[0],w=s[4],P=s[8],x=s[12],E=s[1],D=s[5],I=s[9],N=s[13],G=s[2],q=s[6],z=s[10],K=s[14],k=s[3],le=s[7],ce=s[11],xe=s[15];return r[0]=o*A+a*E+l*G+c*k,r[4]=o*w+a*D+l*q+c*le,r[8]=o*P+a*I+l*z+c*ce,r[12]=o*x+a*N+l*K+c*xe,r[1]=u*A+f*E+h*G+p*k,r[5]=u*w+f*D+h*q+p*le,r[9]=u*P+f*I+h*z+p*ce,r[13]=u*x+f*N+h*K+p*xe,r[2]=g*A+v*E+m*G+d*k,r[6]=g*w+v*D+m*q+d*le,r[10]=g*P+v*I+m*z+d*ce,r[14]=g*x+v*N+m*K+d*xe,r[3]=T*A+_*E+b*G+C*k,r[7]=T*w+_*D+b*q+C*le,r[11]=T*P+_*I+b*z+C*ce,r[15]=T*x+_*N+b*K+C*xe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*p-i*l*p)+v*(+n*l*p-n*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+n*c*f-n*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-n*l*f+n*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],T=f*m*c-v*h*c+v*l*p-a*m*p-f*l*d+a*h*d,_=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,b=u*v*c-g*f*c+g*a*p-o*v*p-u*a*d+o*f*d,C=g*f*l-u*v*l-g*a*h+o*v*h+u*a*m-o*f*m,A=n*T+i*_+s*b+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=T*w,e[1]=(v*h*r-f*m*r-v*s*p+i*m*p+f*s*d-i*h*d)*w,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*d+i*l*d)*w,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*p-i*l*p)*w,e[4]=_*w,e[5]=(u*m*r-g*h*r+g*s*p-n*m*p-u*s*d+n*h*d)*w,e[6]=(g*l*r-o*m*r-g*s*c+n*m*c+o*s*d-n*l*d)*w,e[7]=(o*h*r-u*l*r+u*s*c-n*h*c-o*s*p+n*l*p)*w,e[8]=b*w,e[9]=(g*f*r-u*v*r-g*i*p+n*v*p+u*i*d-n*f*d)*w,e[10]=(o*v*r-g*a*r+g*i*c-n*v*c-o*i*d+n*a*d)*w,e[11]=(u*a*r-o*f*r-u*i*c+n*f*c+o*i*p-n*a*p)*w,e[12]=C*w,e[13]=(u*v*s-g*f*s+g*i*h-n*v*h-u*i*m+n*f*m)*w,e[14]=(g*a*s-o*v*s-g*i*l+n*v*l+o*i*m-n*a*m)*w,e[15]=(o*f*s-u*a*s+u*i*l-n*f*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,g=r*f,v=o*u,m=o*f,d=a*f,T=l*c,_=l*u,b=l*f,C=i.x,A=i.y,w=i.z;return s[0]=(1-(v+d))*C,s[1]=(p+b)*C,s[2]=(g-_)*C,s[3]=0,s[4]=(p-b)*A,s[5]=(1-(h+d))*A,s[6]=(m+T)*A,s[7]=0,s[8]=(g+_)*w,s[9]=(m-T)*w,s[10]=(1-(h+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=Lr.set(s[0],s[1],s[2]).length();const o=Lr.set(s[4],s[5],s[6]).length(),a=Lr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zn.copy(this);const c=1/r,u=1/o,f=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,n.setFromRotationMatrix(zn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=Mi){const l=this.elements,c=2*r/(n-e),u=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let p,g;if(a===Mi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Fc)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Mi){const l=this.elements,c=1/(n-e),u=1/(i-s),f=1/(o-r),h=(n+e)*c,p=(i+s)*u;let g,v;if(a===Mi)g=(o+r)*f,v=-2*f;else if(a===Fc)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Lr=new j,zn=new At,fI=new j(0,0,0),hI=new j(1,1,1),qi=new j,Cl=new j,dn=new j,e_=new At,t_=new ur;class Ni{constructor(e=0,n=0,i=0,s=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return e_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(e_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return t_.setFromEuler(this),this.setFromQuaternion(t_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class op{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dI=0;const n_=new j,Nr=new ur,vi=new At,Rl=new j,Yo=new j,pI=new j,mI=new ur,i_=new j(1,0,0),s_=new j(0,1,0),r_=new j(0,0,1),o_={type:"added"},gI={type:"removed"},Dr={type:"childadded",child:null},Sf={type:"childremoved",child:null};class Sn extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dI++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new j,n=new Ni,i=new ur,s=new j(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new Xe}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(i_,e)}rotateY(e){return this.rotateOnAxis(s_,e)}rotateZ(e){return this.rotateOnAxis(r_,e)}translateOnAxis(e,n){return n_.copy(e).applyQuaternion(this.quaternion),this.position.add(n_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(i_,e)}translateY(e){return this.translateOnAxis(s_,e)}translateZ(e){return this.translateOnAxis(r_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Rl.copy(e):Rl.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Yo,Rl,this.up):vi.lookAt(Rl,Yo,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Nr.setFromRotationMatrix(vi),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(o_),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gI),Sf.child=e,this.dispatchEvent(Sf),Sf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(o_),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,pI),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,mI,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const r=n[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Sn.DEFAULT_UP=new j(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new j,Ei=new j,xf=new j,yi=new j,Ir=new j,Or=new j,a_=new j,bf=new j,Tf=new j,Mf=new j;class ii{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Gn.subVectors(e,n),s.cross(Gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Gn.subVectors(s,n),Ei.subVectors(i,n),xf.subVectors(e,n);const o=Gn.dot(Gn),a=Gn.dot(Ei),l=Gn.dot(xf),c=Ei.dot(Ei),u=Ei.dot(xf),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static isFrontFacing(e,n,i,s){return Gn.subVectors(i,n),Ei.subVectors(e,n),Gn.cross(Ei).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Gn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Ir.subVectors(s,i),Or.subVectors(r,i),bf.subVectors(e,i);const l=Ir.dot(bf),c=Or.dot(bf);if(l<=0&&c<=0)return n.copy(i);Tf.subVectors(e,s);const u=Ir.dot(Tf),f=Or.dot(Tf);if(u>=0&&f<=u)return n.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ir,o);Mf.subVectors(e,r);const p=Ir.dot(Mf),g=Or.dot(Mf);if(g>=0&&p<=g)return n.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Or,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return a_.subVectors(r,s),a=(f-u)/(f-u+(p-g)),n.copy(s).addScaledVector(a_,a);const d=1/(m+v+h);return o=v*d,a=h*d,n.copy(i).addScaledVector(Ir,o).addScaledVector(Or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function Af(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=ct.workingColorSpace){if(e=ip(e,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Af(o,r,e+1/3),this.g=Af(o,r,e),this.b=Af(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,n=Jn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jn){const i=uS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}copyLinearToSRGB(e){return this.r=df(e.r),this.g=df(e.g),this.b=df(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return ct.fromWorkingColorSpace($t.copy(this),e),Math.round(qt($t.r*255,0,255))*65536+Math.round(qt($t.g*255,0,255))*256+Math.round(qt($t.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.fromWorkingColorSpace($t.copy(this),n);const i=$t.r,s=$t.g,r=$t.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ct.workingColorSpace){return ct.fromWorkingColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Jn){ct.fromWorkingColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,s=$t.b;return e!==Jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(Pl);const i=fa(ji.h,Pl.h,n),s=fa(ji.s,Pl.s,n),r=fa(ji.l,Pl.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new ot;ot.NAMES=uS;let _I=0;class xu extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_I++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=so,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=Mh,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(i.blending=this.blending),this.side!==_s&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Th&&(i.blendSrc=this.blendSrc),this.blendDst!==Mh&&(i.blendDst=this.blendDst),this.blendEquation!==Bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qn extends xu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Ky,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new j,Ll=new Be;class li{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ss,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return iI("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ll.fromBufferAttribute(this,n),Ll.applyMatrix3(e),this.setXY(n,Ll.x,Ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qg&&(e.usage=this.usage),e}}class fS extends li{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class hS extends li{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ci extends li{constructor(e,n,i){super(new Float32Array(e),n,i)}}let vI=0;const Pn=new At,wf=new Sn,Ur=new j,pn=new Ka,Ko=new Ka,Ut=new j;class Ts extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vI++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aS(e)?hS:fS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return wf.lookAt(e),wf.updateMatrix(),this.applyMatrix4(wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ci(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Ko.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(pn.min,Ko.min),pn.expandByPoint(Ut),Ut.addVectors(pn.max,Ko.max),pn.expandByPoint(Ut)):(pn.expandByPoint(Ko.min),pn.expandByPoint(Ko.max))}pn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(Ur.fromBufferAttribute(e,c),Ut.add(Ur)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new j,l[P]=new j;const c=new j,u=new j,f=new j,h=new Be,p=new Be,g=new Be,v=new j,m=new j;function d(P,x,E){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,x),f.fromBufferAttribute(i,E),h.fromBufferAttribute(r,P),p.fromBufferAttribute(r,x),g.fromBufferAttribute(r,E),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[P].add(v),a[x].add(v),a[E].add(v),l[P].add(m),l[x].add(m),l[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,x=T.length;P<x;++P){const E=T[P],D=E.start,I=E.count;for(let N=D,G=D+I;N<G;N+=3)d(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const _=new j,b=new j,C=new j,A=new j;function w(P){C.fromBufferAttribute(s,P),A.copy(C);const x=a[P];_.copy(x),_.sub(C.multiplyScalar(C.dot(x))).normalize(),b.crossVectors(A,x);const D=b.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,D)}for(let P=0,x=T.length;P<x;++P){const E=T[P],D=E.start,I=E.count;for(let N=D,G=D+I;N<G;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new j,r=new j,o=new j,a=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new li(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ts,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const l_=new At,Ls=new rp,Nl=new sp,c_=new j,Fr=new j,Br=new j,kr=new j,Cf=new j,Dl=new j,Il=new Be,Ol=new Be,Ul=new Be,u_=new j,f_=new j,h_=new j,Fl=new j,Bl=new j;class In extends Sn{constructor(e=new Ts,n=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Dl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Cf.fromBufferAttribute(f,e),o?Dl.addScaledVector(Cf,u):Dl.addScaledVector(Cf.sub(n),u))}n.add(Dl)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(Nl.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Nl,c_)===null||Ls.origin.distanceToSquared(c_)>(e.far-e.near)**2))&&(l_.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(l_),!(i.boundingBox!==null&&Ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ls)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,C=_;b<C;b+=3){const A=a.getX(b),w=a.getX(b+1),P=a.getX(b+2);s=kl(this,d,e,i,c,u,f,A,w,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const T=a.getX(m),_=a.getX(m+1),b=a.getX(m+2);s=kl(this,o,e,i,c,u,f,T,_,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,C=_;b<C;b+=3){const A=b,w=b+1,P=b+2;s=kl(this,d,e,i,c,u,f,A,w,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const T=m,_=m+1,b=m+2;s=kl(this,o,e,i,c,u,f,T,_,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function EI(t,e,n,i,s,r,o,a){let l;if(e.side===St?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===_s,a),l===null)return null;Bl.copy(a),Bl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Bl);return c<n.near||c>n.far?null:{distance:c,point:Bl.clone(),object:t}}function kl(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Fr),t.getVertexPosition(l,Br),t.getVertexPosition(c,kr);const u=EI(t,e,n,i,Fr,Br,kr,Fl);if(u){s&&(Il.fromBufferAttribute(s,a),Ol.fromBufferAttribute(s,l),Ul.fromBufferAttribute(s,c),u.uv=ii.getInterpolation(Fl,Fr,Br,kr,Il,Ol,Ul,new Be)),r&&(Il.fromBufferAttribute(r,a),Ol.fromBufferAttribute(r,l),Ul.fromBufferAttribute(r,c),u.uv1=ii.getInterpolation(Fl,Fr,Br,kr,Il,Ol,Ul,new Be)),o&&(u_.fromBufferAttribute(o,a),f_.fromBufferAttribute(o,l),h_.fromBufferAttribute(o,c),u.normal=ii.getInterpolation(Fl,Fr,Br,kr,u_,f_,h_,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new j,materialIndex:0};ii.getNormal(Fr,Br,kr,f.normal),u.face=f}return u}class Uo extends Ts{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ci(c,3)),this.setAttribute("normal",new ci(u,3)),this.setAttribute("uv",new ci(f,2));function g(v,m,d,T,_,b,C,A,w,P,x){const E=b/w,D=C/P,I=b/2,N=C/2,G=A/2,q=w+1,z=P+1;let K=0,k=0;const le=new j;for(let ce=0;ce<z;ce++){const xe=ce*D-N;for(let we=0;we<q;we++){const je=we*E-I;le[v]=je*T,le[m]=xe*_,le[d]=G,c.push(le.x,le.y,le.z),le[v]=0,le[m]=0,le[d]=A>0?1:-1,u.push(le.x,le.y,le.z),f.push(we/w),f.push(1-ce/P),K+=1}}for(let ce=0;ce<P;ce++)for(let xe=0;xe<w;xe++){const we=h+xe+q*ce,je=h+xe+q*(ce+1),ne=h+(xe+1)+q*(ce+1),de=h+(xe+1)+q*ce;l.push(we,je,de),l.push(je,ne,de),k+=6}a.addGroup(p,k,x),p+=k,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Co(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=Co(t[n]);for(const s in i)e[s]=i[s]}return e}function yI(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function dS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const SI={clone:Co,merge:Qt};var xI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bI=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vs extends xu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xI,this.fragmentShader=bI,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=yI(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class pS extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new j,d_=new Be,p_=new Be;class vn extends pS{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,n){return this.getViewBounds(e,d_,p_),n.subVectors(p_,d_)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ua*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hr=-90,Vr=1;class TI extends Sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(Hr,Vr,e,n);s.layers=this.layers,this.add(s);const r=new vn(Hr,Vr,e,n);r.layers=this.layers,this.add(r);const o=new vn(Hr,Vr,e,n);o.layers=this.layers,this.add(o);const a=new vn(Hr,Vr,e,n);a.layers=this.layers,this.add(a);const l=new vn(Hr,Vr,e,n);l.layers=this.layers,this.add(l);const c=new vn(Hr,Vr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class mS extends nn{constructor(e,n,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Mo,super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class MI extends cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new mS(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Uo(5,5,5),r=new vs({name:"CubemapFromEquirect",uniforms:Co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:St,blending:ls});r.uniforms.tEquirect.value=n;const o=new In(s,r),a=n.minFilter;return n.minFilter===Xs&&(n.minFilter=Xn),new TI(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}const Rf=new j,AI=new j,wI=new Xe;class ns{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Rf.subVectors(i,n).cross(AI.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Rf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||wI.getNormalMatrix(e),s=this.coplanarPoint(Rf).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new sp,Hl=new j;class gS{constructor(e=new ns,n=new ns,i=new ns,s=new ns,r=new ns,o=new ns){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],T=s[13],_=s[14],b=s[15];if(i[0].setComponents(l-r,h-c,m-p,b-d).normalize(),i[1].setComponents(l+r,h+c,m+p,b+d).normalize(),i[2].setComponents(l+o,h+u,m+g,b+T).normalize(),i[3].setComponents(l-o,h-u,m-g,b-T).normalize(),i[4].setComponents(l-a,h-f,m-v,b-_).normalize(),n===Mi)i[5].setComponents(l+a,h+f,m+v,b+_).normalize();else if(n===Fc)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){return Ns.center.set(0,0,0),Ns.radius=.7071067811865476,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Hl.x=s.normal.x>0?e.max.x:e.min.x,Hl.y=s.normal.y>0?e.max.y:e.min.y,Hl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _S(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function CI(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,a),f.count===-1&&h.length===0&&t.bufferSubData(c,0,u),h.length!==0){for(let p=0,g=h.length;p<g;p++){const v=h[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class di extends Ts{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=n/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const T=d*h-o;for(let _=0;_<c;_++){const b=_*f-r;g.push(b,-T,0),v.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const _=T+c*d,b=T+c*(d+1),C=T+1+c*(d+1),A=T+1+c*d;p.push(_,b,A),p.push(b,C,A)}this.setIndex(p),this.setAttribute("position",new ci(g,3)),this.setAttribute("normal",new ci(v,3)),this.setAttribute("uv",new ci(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.width,e.height,e.widthSegments,e.heightSegments)}}var RI=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PI=`#ifdef USE_ALPHAHASH
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
#endif`,LI=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NI=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DI=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,II=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OI=`#ifdef USE_AOMAP
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
#endif`,UI=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FI=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,BI=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kI=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VI=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zI=`#ifdef USE_IRIDESCENCE
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
#endif`,GI=`#ifdef USE_BUMPMAP
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
#endif`,WI=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$I=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jI=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ZI=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,JI=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,QI=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eO=`vec3 transformedNormal = objectNormal;
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
#endif`,tO=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nO=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iO=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sO=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rO="gl_FragColor = linearToOutputTexel( gl_FragColor );",oO=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,aO=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lO=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cO=`#ifdef USE_ENVMAP
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
#endif`,uO=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fO=`#ifdef USE_ENVMAP
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
#endif`,hO=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dO=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pO=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mO=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gO=`#ifdef USE_GRADIENTMAP
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
}`,_O=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vO=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EO=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yO=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SO=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,xO=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,bO=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TO=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MO=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AO=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wO=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,CO=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,RO=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,PO=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,LO=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NO=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DO=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IO=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OO=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UO=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FO=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BO=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kO=`#if defined( USE_POINTS_UV )
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
#endif`,HO=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VO=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zO=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GO=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WO=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$O=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,XO=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,qO=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jO=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YO=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KO=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZO=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JO=`#ifdef USE_NORMALMAP
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
#endif`,QO=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sU=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fU=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,hU=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pU=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gU=`#ifdef USE_SKINNING
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
#endif`,_U=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vU=`#ifdef USE_SKINNING
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
#endif`,EU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xU=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bU=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TU=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PU=`uniform sampler2D t2D;
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
}`,LU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NU=`#ifdef ENVMAP_TYPE_CUBE
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
}`,DU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OU=`#include <common>
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
}`,UU=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,FU=`#define DISTANCE
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
}`,BU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,kU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VU=`uniform float scale;
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
}`,zU=`uniform vec3 diffuse;
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
}`,GU=`#include <common>
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
}`,WU=`uniform vec3 diffuse;
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
}`,$U=`#define LAMBERT
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
}`,XU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,qU=`#define MATCAP
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
}`,jU=`#define MATCAP
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
}`,YU=`#define NORMAL
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
}`,KU=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZU=`#define PHONG
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
}`,JU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,QU=`#define STANDARD
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
}`,e2=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,t2=`#define TOON
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
}`,n2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,i2=`uniform float size;
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
}`,s2=`uniform vec3 diffuse;
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
}`,r2=`#include <common>
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
}`,o2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,a2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,l2=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:RI,alphahash_pars_fragment:PI,alphamap_fragment:LI,alphamap_pars_fragment:NI,alphatest_fragment:DI,alphatest_pars_fragment:II,aomap_fragment:OI,aomap_pars_fragment:UI,batching_pars_vertex:FI,batching_vertex:BI,begin_vertex:kI,beginnormal_vertex:HI,bsdfs:VI,iridescence_fragment:zI,bumpmap_pars_fragment:GI,clipping_planes_fragment:WI,clipping_planes_pars_fragment:$I,clipping_planes_pars_vertex:XI,clipping_planes_vertex:qI,color_fragment:jI,color_pars_fragment:YI,color_pars_vertex:KI,color_vertex:ZI,common:JI,cube_uv_reflection_fragment:QI,defaultnormal_vertex:eO,displacementmap_pars_vertex:tO,displacementmap_vertex:nO,emissivemap_fragment:iO,emissivemap_pars_fragment:sO,colorspace_fragment:rO,colorspace_pars_fragment:oO,envmap_fragment:aO,envmap_common_pars_fragment:lO,envmap_pars_fragment:cO,envmap_pars_vertex:uO,envmap_physical_pars_fragment:xO,envmap_vertex:fO,fog_vertex:hO,fog_pars_vertex:dO,fog_fragment:pO,fog_pars_fragment:mO,gradientmap_pars_fragment:gO,lightmap_fragment:_O,lightmap_pars_fragment:vO,lights_lambert_fragment:EO,lights_lambert_pars_fragment:yO,lights_pars_begin:SO,lights_toon_fragment:bO,lights_toon_pars_fragment:TO,lights_phong_fragment:MO,lights_phong_pars_fragment:AO,lights_physical_fragment:wO,lights_physical_pars_fragment:CO,lights_fragment_begin:RO,lights_fragment_maps:PO,lights_fragment_end:LO,logdepthbuf_fragment:NO,logdepthbuf_pars_fragment:DO,logdepthbuf_pars_vertex:IO,logdepthbuf_vertex:OO,map_fragment:UO,map_pars_fragment:FO,map_particle_fragment:BO,map_particle_pars_fragment:kO,metalnessmap_fragment:HO,metalnessmap_pars_fragment:VO,morphinstance_vertex:zO,morphcolor_vertex:GO,morphnormal_vertex:WO,morphtarget_pars_vertex:$O,morphtarget_vertex:XO,normal_fragment_begin:qO,normal_fragment_maps:jO,normal_pars_fragment:YO,normal_pars_vertex:KO,normal_vertex:ZO,normalmap_pars_fragment:JO,clearcoat_normal_fragment_begin:QO,clearcoat_normal_fragment_maps:eU,clearcoat_pars_fragment:tU,iridescence_pars_fragment:nU,opaque_fragment:iU,packing:sU,premultiplied_alpha_fragment:rU,project_vertex:oU,dithering_fragment:aU,dithering_pars_fragment:lU,roughnessmap_fragment:cU,roughnessmap_pars_fragment:uU,shadowmap_pars_fragment:fU,shadowmap_pars_vertex:hU,shadowmap_vertex:dU,shadowmask_pars_fragment:pU,skinbase_vertex:mU,skinning_pars_vertex:gU,skinning_vertex:_U,skinnormal_vertex:vU,specularmap_fragment:EU,specularmap_pars_fragment:yU,tonemapping_fragment:SU,tonemapping_pars_fragment:xU,transmission_fragment:bU,transmission_pars_fragment:TU,uv_pars_fragment:MU,uv_pars_vertex:AU,uv_vertex:wU,worldpos_vertex:CU,background_vert:RU,background_frag:PU,backgroundCube_vert:LU,backgroundCube_frag:NU,cube_vert:DU,cube_frag:IU,depth_vert:OU,depth_frag:UU,distanceRGBA_vert:FU,distanceRGBA_frag:BU,equirect_vert:kU,equirect_frag:HU,linedashed_vert:VU,linedashed_frag:zU,meshbasic_vert:GU,meshbasic_frag:WU,meshlambert_vert:$U,meshlambert_frag:XU,meshmatcap_vert:qU,meshmatcap_frag:jU,meshnormal_vert:YU,meshnormal_frag:KU,meshphong_vert:ZU,meshphong_frag:JU,meshphysical_vert:QU,meshphysical_frag:e2,meshtoon_vert:t2,meshtoon_frag:n2,points_vert:i2,points_frag:s2,shadow_vert:r2,shadow_frag:o2,sprite_vert:a2,sprite_frag:l2},ve={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ei={basic:{uniforms:Qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ot(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Qt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Qt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ot(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Qt([ve.points,ve.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Qt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Qt([ve.common,ve.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Qt([ve.sprite,ve.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Qt([ve.common,ve.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Qt([ve.lights,ve.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ei.physical={uniforms:Qt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Vl={r:0,b:0,g:0},Ds=new Ni,c2=new At;function u2(t,e,n,i,s,r,o){const a=new ot(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function g(m,d){let T=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?n:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),T=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||T)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===yu)?(u===void 0&&(u=new In(new Uo(1,1,1),new vs({name:"BackgroundCubeMaterial",uniforms:Co(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ds.copy(d.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(c2.makeRotationFromEuler(Ds)),u.material.toneMapped=ct.getTransfer(_.colorSpace)!==ut,(f!==_||h!==_.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new In(new di(2,2),new vs({name:"BackgroundMaterial",uniforms:Co(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=ct.getTransfer(_.colorSpace)!==ut,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,d){m.getRGB(Vl,dS(t)),i.buffers.color.setClear(Vl.r,Vl.g,Vl.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function f2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(E,D,I,N,G){let q=!1;const z=f(N,I,D);r!==z&&(r=z,c(r.object)),q=p(E,N,I,G),q&&g(E,N,I,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,b(E,D,I,N),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function u(E){return t.deleteVertexArray(E)}function f(E,D,I){const N=I.wireframe===!0;let G=i[E.id];G===void 0&&(G={},i[E.id]=G);let q=G[D.id];q===void 0&&(q={},G[D.id]=q);let z=q[N];return z===void 0&&(z=h(l()),q[N]=z),z}function h(E){const D=[],I=[],N=[];for(let G=0;G<n;G++)D[G]=0,I[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:N,object:E,attributes:{},index:null}}function p(E,D,I,N){const G=r.attributes,q=D.attributes;let z=0;const K=I.getAttributes();for(const k in K)if(K[k].location>=0){const ce=G[k];let xe=q[k];if(xe===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(xe=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(xe=E.instanceColor)),ce===void 0||ce.attribute!==xe||xe&&ce.data!==xe.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function g(E,D,I,N){const G={},q=D.attributes;let z=0;const K=I.getAttributes();for(const k in K)if(K[k].location>=0){let ce=q[k];ce===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor));const xe={};xe.attribute=ce,ce&&ce.data&&(xe.data=ce.data),G[k]=xe,z++}r.attributes=G,r.attributesNum=z,r.index=N}function v(){const E=r.newAttributes;for(let D=0,I=E.length;D<I;D++)E[D]=0}function m(E){d(E,0)}function d(E,D){const I=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;I[E]=1,N[E]===0&&(t.enableVertexAttribArray(E),N[E]=1),G[E]!==D&&(t.vertexAttribDivisor(E,D),G[E]=D)}function T(){const E=r.newAttributes,D=r.enabledAttributes;for(let I=0,N=D.length;I<N;I++)D[I]!==E[I]&&(t.disableVertexAttribArray(I),D[I]=0)}function _(E,D,I,N,G,q,z){z===!0?t.vertexAttribIPointer(E,D,I,G,q):t.vertexAttribPointer(E,D,I,N,G,q)}function b(E,D,I,N){v();const G=N.attributes,q=I.getAttributes(),z=D.defaultAttributeValues;for(const K in q){const k=q[K];if(k.location>=0){let le=G[K];if(le===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(le=E.instanceColor)),le!==void 0){const ce=le.normalized,xe=le.itemSize,we=e.get(le);if(we===void 0)continue;const je=we.buffer,ne=we.type,de=we.bytesPerElement,_e=ne===t.INT||ne===t.UNSIGNED_INT||le.gpuType===Qy;if(le.isInterleavedBufferAttribute){const pe=le.data,Ce=pe.stride,Pe=le.offset;if(pe.isInstancedInterleavedBuffer){for(let De=0;De<k.locationSize;De++)d(k.location+De,pe.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let De=0;De<k.locationSize;De++)m(k.location+De);t.bindBuffer(t.ARRAY_BUFFER,je);for(let De=0;De<k.locationSize;De++)_(k.location+De,xe/k.locationSize,ne,ce,Ce*de,(Pe+xe/k.locationSize*De)*de,_e)}else{if(le.isInstancedBufferAttribute){for(let pe=0;pe<k.locationSize;pe++)d(k.location+pe,le.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let pe=0;pe<k.locationSize;pe++)m(k.location+pe);t.bindBuffer(t.ARRAY_BUFFER,je);for(let pe=0;pe<k.locationSize;pe++)_(k.location+pe,xe/k.locationSize,ne,ce,xe*de,xe/k.locationSize*pe*de,_e)}}else if(z!==void 0){const ce=z[K];if(ce!==void 0)switch(ce.length){case 2:t.vertexAttrib2fv(k.location,ce);break;case 3:t.vertexAttrib3fv(k.location,ce);break;case 4:t.vertexAttrib4fv(k.location,ce);break;default:t.vertexAttrib1fv(k.location,ce)}}}}T()}function C(){P();for(const E in i){const D=i[E];for(const I in D){const N=D[I];for(const G in N)u(N[G].object),delete N[G];delete D[I]}delete i[E]}}function A(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const I in D){const N=D[I];for(const G in N)u(N[G].object),delete N[G];delete D[I]}delete i[E.id]}function w(E){for(const D in i){const I=i[D];if(I[E.id]===void 0)continue;const N=I[E.id];for(const G in N)u(N[G].object),delete N[G];delete I[E.id]}}function P(){x(),o=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:x,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function h2(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<u;h++)this.render(l[h],c[h]);else{f.multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];n.update(h,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function d2(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(_){if(_==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=n.precision!==void 0?n.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=n.logarithmicDepthBuffer===!0,c=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),u=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_TEXTURE_SIZE),h=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),d=u>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:h,maxAttributes:p,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:m,vertexTextures:d,maxSamples:T}}function p2(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new ns,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,_=T*4;let b=d.clippingState||null;l.value=b,b=u(g,h,_,p);for(let C=0;C!==_;++C)b[C]=n[C];d.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,b=p;_!==v;++_,b+=4)o.copy(f[_]).applyMatrix4(T,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function m2(t){let e=new WeakMap;function n(o,a){return a===Ah?o.mapping=Mo:a===wh&&(o.mapping=Ao),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ah||a===wh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new MI(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class g2 extends pS{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Yr=4,m_=[.125,.215,.35,.446,.526,.582],ks=20,Pf=new g2,g_=new ot;let Lf=null,Nf=0,Df=0,If=!1;const Us=(1+Math.sqrt(5))/2,zr=1/Us,__=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Us,zr),new j(0,Us,-zr),new j(zr,0,Us),new j(-zr,0,Us),new j(Us,zr,0),new j(-Us,zr,0)];class v_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){Lf=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=S_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lf,Nf,Df),this._renderer.xr.enabled=If,e.scissorTest=!1,zl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Mo||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lf=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Dc,format:ri,colorSpace:bs,depthBuffer:!1},s=E_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E_(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_2(r)),this._blurMaterial=v2(r,e,n)}return s}_compileMaterial(e){const n=new In(this._lodPlanes[0],e);this._renderer.compile(n,Pf)}_sceneToCubeUV(e,n,i,s){const a=new vn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(g_),u.toneMapping=cs,u.autoClear=!1;const p=new Qn({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),g=new In(new Uo,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(g_),v=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):T===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const _=this._cubeSize;zl(s,T*_,d>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Mo||e.mapping===Ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=S_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y_());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new In(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;zl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Pf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=__[(s-1)%__.length];this._blur(e,s-1,s,r,o)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new In(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ks-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ks;m>ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ks}`);const d=[];let T=0;for(let w=0;w<ks;++w){const P=w/v,x=Math.exp(-P*P/2);d.push(x),w===0?T+=x:w<m&&(T+=2*x)}for(let w=0;w<d.length;w++)d[w]=d[w]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const b=this._sizeLods[s],C=3*b*(s>_-Yr?s-_+Yr:0),A=4*(this._cubeSize-b);zl(n,C,A,3*b,2*b),l.setRenderTarget(n),l.render(f,Pf)}}function _2(t){const e=[],n=[],i=[];let s=t;const r=t-Yr+1+m_.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-Yr?l=m_[o-t+Yr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,d=1,T=new Float32Array(v*g*p),_=new Float32Array(m*g*p),b=new Float32Array(d*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,P=A>2?0:-1,x=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];T.set(x,v*g*A),_.set(h,m*g*A);const E=[A,A,A,A,A,A];b.set(E,d*g*A)}const C=new Ts;C.setAttribute("position",new li(T,v)),C.setAttribute("uv",new li(_,m)),C.setAttribute("faceIndex",new li(b,d)),e.push(C),s>Yr&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function E_(t,e,n){const i=new cr(t,e,n);return i.texture.mapping=yu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zl(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function v2(t,e,n){const i=new Float32Array(ks),s=new j(0,1,0);return new vs({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ap(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function y_(){return new vs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ap(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function S_(){return new vs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function ap(){return`

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
	`}function E2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ah||l===wh,u=l===Mo||l===Ao;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new v_(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(n===null&&(n=new v_(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function y2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function S2(t,e,n,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let _=0,b=T.length;_<b;_+=3){const C=T[_+0],A=T[_+1],w=T[_+2];h.push(C,A,A,w,w,C)}}else if(g!==void 0){const T=g.array;v=g.version;for(let _=0,b=T.length/3-1;_<b;_+=3){const C=_+0,A=_+1,w=_+2;h.push(C,A,A,w,w,C)}}else return;const m=new(aS(h)?hS:fS)(h,1);m.version=v;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function x2(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function c(f,h,p){p!==0&&(t.drawElementsInstanced(i,h,r,f*o,p),n.update(h,i,p))}function u(f,h,p){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<p;v++)this.render(f[v]/o,h[v]);else{g.multiDrawElementsWEBGL(i,h,0,r,f,0,p);let v=0;for(let m=0;m<p;m++)v+=h[m];n.update(v,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function b2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function T2(t,e,n){const i=new WeakMap,s=new Ht;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let C=a.attributes.position.count*b,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*A*4*f),P=new cS(w,C,A,f);P.type=ss,P.needsUpdate=!0;const x=b*4;for(let D=0;D<f;D++){const I=d[D],N=T[D],G=_[D],q=C*A*4*D;for(let z=0;z<I.count;z++){const K=z*x;g===!0&&(s.fromBufferAttribute(I,z),w[q+K+0]=s.x,w[q+K+1]=s.y,w[q+K+2]=s.z,w[q+K+3]=0),v===!0&&(s.fromBufferAttribute(N,z),w[q+K+4]=s.x,w[q+K+5]=s.y,w[q+K+6]=s.z,w[q+K+7]=0),m===!0&&(s.fromBufferAttribute(G,z),w[q+K+8]=s.x,w[q+K+9]=s.y,w[q+K+10]=s.z,w[q+K+11]=G.itemSize===4?s.w:1)}}h={count:f,texture:P,size:new Be(C,A)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function M2(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}class vS extends nn{constructor(e,n,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:ro,u!==ro&&u!==Ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ro&&(i=wo),i===void 0&&u===Ca&&(i=Ya),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ES=new nn,yS=new vS(1,1);yS.compareFunction=oS;const SS=new cS,xS=new cI,bS=new mS,x_=[],b_=[],T_=new Float32Array(16),M_=new Float32Array(9),A_=new Float32Array(4);function Fo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=x_[s];if(r===void 0&&(r=new Float32Array(s),x_[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bu(t,e){let n=b_[e];n===void 0&&(n=new Int32Array(e),b_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function A2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function w2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function C2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function R2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function P2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;A_.set(i),t.uniformMatrix2fv(this.addr,!1,A_),Dt(n,i)}}function L2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;M_.set(i),t.uniformMatrix3fv(this.addr,!1,M_),Dt(n,i)}}function N2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;T_.set(i),t.uniformMatrix4fv(this.addr,!1,T_),Dt(n,i)}}function D2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function I2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function O2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function U2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function F2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function B2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function k2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function H2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function V2(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);const r=this.type===t.SAMPLER_2D_SHADOW?yS:ES;n.setTexture2D(e||r,s)}function z2(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||xS,s)}function G2(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||bS,s)}function W2(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||SS,s)}function $2(t){switch(t){case 5126:return A2;case 35664:return w2;case 35665:return C2;case 35666:return R2;case 35674:return P2;case 35675:return L2;case 35676:return N2;case 5124:case 35670:return D2;case 35667:case 35671:return I2;case 35668:case 35672:return O2;case 35669:case 35673:return U2;case 5125:return F2;case 36294:return B2;case 36295:return k2;case 36296:return H2;case 35678:case 36198:case 36298:case 36306:case 35682:return V2;case 35679:case 36299:case 36307:return z2;case 35680:case 36300:case 36308:case 36293:return G2;case 36289:case 36303:case 36311:case 36292:return W2}}function X2(t,e){t.uniform1fv(this.addr,e)}function q2(t,e){const n=Fo(e,this.size,2);t.uniform2fv(this.addr,n)}function j2(t,e){const n=Fo(e,this.size,3);t.uniform3fv(this.addr,n)}function Y2(t,e){const n=Fo(e,this.size,4);t.uniform4fv(this.addr,n)}function K2(t,e){const n=Fo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Z2(t,e){const n=Fo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function J2(t,e){const n=Fo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Q2(t,e){t.uniform1iv(this.addr,e)}function eF(t,e){t.uniform2iv(this.addr,e)}function tF(t,e){t.uniform3iv(this.addr,e)}function nF(t,e){t.uniform4iv(this.addr,e)}function iF(t,e){t.uniform1uiv(this.addr,e)}function sF(t,e){t.uniform2uiv(this.addr,e)}function rF(t,e){t.uniform3uiv(this.addr,e)}function oF(t,e){t.uniform4uiv(this.addr,e)}function aF(t,e,n){const i=this.cache,s=e.length,r=bu(n,s);Nt(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||ES,r[o])}function lF(t,e,n){const i=this.cache,s=e.length,r=bu(n,s);Nt(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||xS,r[o])}function cF(t,e,n){const i=this.cache,s=e.length,r=bu(n,s);Nt(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||bS,r[o])}function uF(t,e,n){const i=this.cache,s=e.length,r=bu(n,s);Nt(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||SS,r[o])}function fF(t){switch(t){case 5126:return X2;case 35664:return q2;case 35665:return j2;case 35666:return Y2;case 35674:return K2;case 35675:return Z2;case 35676:return J2;case 5124:case 35670:return Q2;case 35667:case 35671:return eF;case 35668:case 35672:return tF;case 35669:case 35673:return nF;case 5125:return iF;case 36294:return sF;case 36295:return rF;case 36296:return oF;case 35678:case 36198:case 36298:case 36306:case 35682:return aF;case 35679:case 36299:case 36307:return lF;case 35680:case 36300:case 36308:case 36293:return cF;case 36289:case 36303:case 36311:case 36292:return uF}}class hF{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$2(n.type)}}class dF{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fF(n.type)}}class pF{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Of=/(\w+)(\])?(\[|\.)?/g;function w_(t,e){t.seq.push(e),t.map[e.id]=e}function mF(t,e,n){const i=t.name,s=i.length;for(Of.lastIndex=0;;){const r=Of.exec(i),o=Of.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){w_(n,c===void 0?new hF(a,t,e):new dF(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new pF(a),w_(n,f)),n=f}}}class rc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);mF(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function C_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const gF=37297;let _F=0;function vF(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function EF(t){const e=ct.getPrimaries(ct.workingColorSpace),n=ct.getPrimaries(t);let i;switch(e===n?i="":e===Uc&&n===Oc?i="LinearDisplayP3ToLinearSRGB":e===Oc&&n===Uc&&(i="LinearSRGBToLinearDisplayP3"),t){case bs:case Su:return[i,"LinearTransferOETF"];case Jn:case np:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function R_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+vF(t.getShaderSource(e),o)}else return s}function yF(t,e){const n=EF(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function SF(t,e){let n;switch(e){case uD:n="Linear";break;case fD:n="Reinhard";break;case hD:n="OptimizedCineon";break;case dD:n="ACESFilmic";break;case mD:n="AgX";break;case gD:n="Neutral";break;case pD:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function xF(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function bF(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function TF(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Qo(t){return t!==""}function P_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function L_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MF=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(t){return t.replace(MF,wF)}const AF=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function wF(t,e){let n=$e[e];if(n===void 0){const i=AF.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ph(n)}const CF=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N_(t){return t.replace(CF,RF)}function RF(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function D_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PF(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Yy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===UN?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function LF(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Mo:case Ao:e="ENVMAP_TYPE_CUBE";break;case yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NF(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ao:e="ENVMAP_MODE_REFRACTION";break}return e}function DF(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ky:e="ENVMAP_BLENDING_MULTIPLY";break;case lD:e="ENVMAP_BLENDING_MIX";break;case cD:e="ENVMAP_BLENDING_ADD";break}return e}function IF(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function OF(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=PF(n),c=LF(n),u=NF(n),f=DF(n),h=IF(n),p=xF(n),g=bF(r),v=s.createProgram();let m,d,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Qo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Qo).join(`
`),d.length>0&&(d+=`
`)):(m=[D_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),d=[D_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==cs?"#define TONE_MAPPING":"",n.toneMapping!==cs?$e.tonemapping_pars_fragment:"",n.toneMapping!==cs?SF("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,yF("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qo).join(`
`)),o=Ph(o),o=P_(o,n),o=L_(o,n),a=Ph(a),a=P_(a,n),a=L_(a,n),o=N_(o),a=N_(a),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=T+m+o,b=T+d+a,C=C_(s,s.VERTEX_SHADER,_),A=C_(s,s.FRAGMENT_SHADER,b);s.attachShader(v,C),s.attachShader(v,A),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(D){if(t.debug.checkShaderErrors){const I=s.getProgramInfoLog(v).trim(),N=s.getShaderInfoLog(C).trim(),G=s.getShaderInfoLog(A).trim();let q=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,C,A);else{const K=R_(s,C,"vertex"),k=R_(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+K+`
`+k)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(N===""||G==="")&&(z=!1);z&&(D.diagnostics={runnable:q,programLog:I,vertexShader:{log:N,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(C),s.deleteShader(A),P=new rc(s,v),x=TF(s,v)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(v,gF)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_F++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}let UF=0;class FF{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new BF(e),n.set(e,i)),i}}class BF{constructor(e){this.id=UF++,this.code=e,this.usedTimes=0}}function kF(t,e,n,i,s,r,o){const a=new op,l=new FF,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,E,D,I,N){const G=I.fog,q=N.geometry,z=x.isMeshStandardMaterial?I.environment:null,K=(x.isMeshStandardMaterial?n:e).get(x.envMap||z),k=K&&K.mapping===yu?K.image.height:null,le=g[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xe=ce!==void 0?ce.length:0;let we=0;q.morphAttributes.position!==void 0&&(we=1),q.morphAttributes.normal!==void 0&&(we=2),q.morphAttributes.color!==void 0&&(we=3);let je,ne,de,_e;if(le){const It=ei[le];je=It.vertexShader,ne=It.fragmentShader}else je=x.vertexShader,ne=x.fragmentShader,l.update(x),de=l.getVertexShaderID(x),_e=l.getFragmentShaderID(x);const pe=t.getRenderTarget(),Ce=N.isInstancedMesh===!0,Pe=N.isBatchedMesh===!0,De=!!x.map,X=!!x.matcap,Ue=!!K,L=!!x.aoMap,U=!!x.lightMap,V=!!x.bumpMap,te=!!x.normalMap,M=!!x.displacementMap,S=!!x.emissiveMap,O=!!x.metalnessMap,F=!!x.roughnessMap,H=x.anisotropy>0,B=x.clearcoat>0,ie=x.iridescence>0,Y=x.sheen>0,ae=x.transmission>0,he=H&&!!x.anisotropyMap,se=B&&!!x.clearcoatMap,fe=B&&!!x.clearcoatNormalMap,Se=B&&!!x.clearcoatRoughnessMap,ge=ie&&!!x.iridescenceMap,Ee=ie&&!!x.iridescenceThicknessMap,Fe=Y&&!!x.sheenColorMap,qe=Y&&!!x.sheenRoughnessMap,Ye=!!x.specularMap,Ze=!!x.specularColorMap,Ie=!!x.specularIntensityMap,Te=ae&&!!x.transmissionMap,y=ae&&!!x.thicknessMap,Z=!!x.gradientMap,re=!!x.alphaMap,me=x.alphaTest>0,Me=!!x.alphaHash,Je=!!x.extensions;let Ke=cs;x.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ke=t.toneMapping);const ht={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:je,fragmentShader:ne,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Pe,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,instancingMorph:Ce&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:bs,alphaToCoverage:!!x.alphaToCoverage,map:De,matcap:X,envMap:Ue,envMapMode:Ue&&K.mapping,envMapCubeUVHeight:k,aoMap:L,lightMap:U,bumpMap:V,normalMap:te,displacementMap:h&&M,emissiveMap:S,normalMapObjectSpace:te&&x.normalMapType===LD,normalMapTangentSpace:te&&x.normalMapType===PD,metalnessMap:O,roughnessMap:F,anisotropy:H,anisotropyMap:he,clearcoat:B,clearcoatMap:se,clearcoatNormalMap:fe,clearcoatRoughnessMap:Se,iridescence:ie,iridescenceMap:ge,iridescenceThicknessMap:Ee,sheen:Y,sheenColorMap:Fe,sheenRoughnessMap:qe,specularMap:Ye,specularColorMap:Ze,specularIntensityMap:Ie,transmission:ae,transmissionMap:Te,thicknessMap:y,gradientMap:Z,opaque:x.transparent===!1&&x.blending===so&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:me,alphaHash:Me,combine:x.combine,mapUv:De&&v(x.map.channel),aoMapUv:L&&v(x.aoMap.channel),lightMapUv:U&&v(x.lightMap.channel),bumpMapUv:V&&v(x.bumpMap.channel),normalMapUv:te&&v(x.normalMap.channel),displacementMapUv:M&&v(x.displacementMap.channel),emissiveMapUv:S&&v(x.emissiveMap.channel),metalnessMapUv:O&&v(x.metalnessMap.channel),roughnessMapUv:F&&v(x.roughnessMap.channel),anisotropyMapUv:he&&v(x.anisotropyMap.channel),clearcoatMapUv:se&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:qe&&v(x.sheenRoughnessMap.channel),specularMapUv:Ye&&v(x.specularMap.channel),specularColorMapUv:Ze&&v(x.specularColorMap.channel),specularIntensityMapUv:Ie&&v(x.specularIntensityMap.channel),transmissionMapUv:Te&&v(x.transmissionMap.channel),thicknessMapUv:y&&v(x.thicknessMap.channel),alphaMapUv:re&&v(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(te||H),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(De||re),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:we,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ke,useLegacyLights:t._useLegacyLights,decodeVideoTexture:De&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ni,flipSided:x.side===St,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Je&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Je&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function d(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)E.push(D),E.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(T(E,x),_(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function T(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function _(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function b(x){const E=g[x.type];let D;if(E){const I=ei[E];D=SI.clone(I.uniforms)}else D=x.uniforms;return D}function C(x,E){let D;for(let I=0,N=u.length;I<N;I++){const G=u[I];if(G.cacheKey===E){D=G,++D.usedTimes;break}}return D===void 0&&(D=new OF(t,E,x,r),u.push(D)),D}function A(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function w(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:P}}function HF(){let t=new WeakMap;function e(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,a){t.get(r)[o]=a}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function VF(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function I_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function O_(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f,h,p,g,v,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function a(f,h,p,g,v,m){const d=o(f,h,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):n.push(d)}function l(f,h,p,g,v,m){const d=o(f,h,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||VF),i.length>1&&i.sort(h||I_),s.length>1&&s.sort(h||I_)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function zF(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new O_,t.set(i,[o])):s>=r.length?(o=new O_,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function GF(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new ot};break;case"SpotLight":n={position:new j,direction:new j,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function WF(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $F=0;function XF(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qF(t){const e=new GF,n=WF(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const s=new j,r=new At,o=new At;function a(c,u){let f=0,h=0,p=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let g=0,v=0,m=0,d=0,T=0,_=0,b=0,C=0,A=0,w=0,P=0;c.sort(XF);const x=u===!0?Math.PI:1;for(let D=0,I=c.length;D<I;D++){const N=c[D],G=N.color,q=N.intensity,z=N.distance,K=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=G.r*q*x,h+=G.g*q*x,p+=G.b*q*x;else if(N.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(N.sh.coefficients[k],q);P++}else if(N.isDirectionalLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*x),N.castShadow){const le=N.shadow,ce=n.get(N);ce.shadowBias=le.bias,ce.shadowNormalBias=le.normalBias,ce.shadowRadius=le.radius,ce.shadowMapSize=le.mapSize,i.directionalShadow[g]=ce,i.directionalShadowMap[g]=K,i.directionalShadowMatrix[g]=N.shadow.matrix,_++}i.directional[g]=k,g++}else if(N.isSpotLight){const k=e.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(G).multiplyScalar(q*x),k.distance=z,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,i.spot[m]=k;const le=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,le.updateMatrices(N),N.castShadow&&w++),i.spotLightMatrix[m]=le.matrix,N.castShadow){const ce=n.get(N);ce.shadowBias=le.bias,ce.shadowNormalBias=le.normalBias,ce.shadowRadius=le.radius,ce.shadowMapSize=le.mapSize,i.spotShadow[m]=ce,i.spotShadowMap[m]=K,C++}m++}else if(N.isRectAreaLight){const k=e.get(N);k.color.copy(G).multiplyScalar(q),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),i.rectArea[d]=k,d++}else if(N.isPointLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*x),k.distance=N.distance,k.decay=N.decay,N.castShadow){const le=N.shadow,ce=n.get(N);ce.shadowBias=le.bias,ce.shadowNormalBias=le.normalBias,ce.shadowRadius=le.radius,ce.shadowMapSize=le.mapSize,ce.shadowCameraNear=le.camera.near,ce.shadowCameraFar=le.camera.far,i.pointShadow[v]=ce,i.pointShadowMap[v]=K,i.pointShadowMatrix[v]=N.shadow.matrix,b++}i.point[v]=k,v++}else if(N.isHemisphereLight){const k=e.get(N);k.skyColor.copy(N.color).multiplyScalar(q*x),k.groundColor.copy(N.groundColor).multiplyScalar(q*x),i.hemi[T]=k,T++}}d>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=p;const E=i.hash;(E.directionalLength!==g||E.pointLength!==v||E.spotLength!==m||E.rectAreaLength!==d||E.hemiLength!==T||E.numDirectionalShadows!==_||E.numPointShadows!==b||E.numSpotShadows!==C||E.numSpotMaps!==A||E.numLightProbes!==P)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=d,i.point.length=v,i.hemi.length=T,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=C+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,E.directionalLength=g,E.pointLength=v,E.spotLength=m,E.rectAreaLength=d,E.hemiLength=T,E.numDirectionalShadows=_,E.numPointShadows=b,E.numSpotShadows=C,E.numSpotMaps=A,E.numLightProbes=P,i.version=$F++)}function l(c,u){let f=0,h=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const _=c[d];if(_.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(_.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function U_(t){const e=new qF(t),n=[],i=[];function s(){n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function jF(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new U_(t),e.set(s,[a])):r>=o.length?(a=new U_(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class YF extends xu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KF extends xu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JF=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QF(t,e,n){let i=new gS;const s=new Be,r=new Be,o=new Ht,a=new YF({depthPacking:RD}),l=new KF,c={},u=n.maxTextureSize,f={[_s]:St,[St]:_s,[ni]:ni},h=new vs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:ZF,fragmentShader:JF}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ts;g.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new In(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yy;let d=this.type;this.render=function(A,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const x=t.getRenderTarget(),E=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),I=t.state;I.setBlending(ls),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=d!==bi&&this.type===bi,G=d===bi&&this.type!==bi;for(let q=0,z=A.length;q<z;q++){const K=A[q],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const le=k.getFrameExtents();if(s.multiply(le),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,k.mapSize.y=r.y)),k.map===null||N===!0||G===!0){const xe=this.type!==bi?{minFilter:Dn,magFilter:Dn}:{};k.map!==null&&k.map.dispose(),k.map=new cr(s.x,s.y,xe),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const ce=k.getViewportCount();for(let xe=0;xe<ce;xe++){const we=k.getViewport(xe);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),I.viewport(o),k.updateMatrices(K,xe),i=k.getFrustum(),b(w,P,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===bi&&T(k,P),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(x,E,D)};function T(A,w){const P=e.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new cr(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,P,h,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,P,p,v,null)}function _(A,w,P,x){let E=null;const D=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)E=D;else if(E=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=E.uuid,N=w.uuid;let G=c[I];G===void 0&&(G={},c[I]=G);let q=G[N];q===void 0&&(q=E.clone(),G[N]=q,w.addEventListener("dispose",C)),E=q}if(E.visible=w.visible,E.wireframe=w.wireframe,x===bi?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:f[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const I=t.properties.get(E);I.light=P}return E}function b(A,w,P,x,E){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===bi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const N=e.update(A),G=A.material;if(Array.isArray(G)){const q=N.groups;for(let z=0,K=q.length;z<K;z++){const k=q[z],le=G[k.materialIndex];if(le&&le.visible){const ce=_(A,le,x,E);A.onBeforeShadow(t,A,w,P,N,ce,k),t.renderBufferDirect(P,null,N,ce,A,k),A.onAfterShadow(t,A,w,P,N,ce,k)}}}else if(G.visible){const q=_(A,G,x,E);A.onBeforeShadow(t,A,w,P,N,q,null),t.renderBufferDirect(P,null,N,q,A,null),A.onAfterShadow(t,A,w,P,N,q,null)}}const I=A.children;for(let N=0,G=I.length;N<G;N++)b(I[N],w,P,x,E)}function C(A){A.target.removeEventListener("dispose",C);for(const P in c){const x=c[P],E=A.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}function e3(t){function e(){let y=!1;const Z=new Ht;let re=null;const me=new Ht(0,0,0,0);return{setMask:function(Me){re!==Me&&!y&&(t.colorMask(Me,Me,Me,Me),re=Me)},setLocked:function(Me){y=Me},setClear:function(Me,Je,Ke,ht,It){It===!0&&(Me*=ht,Je*=ht,Ke*=ht),Z.set(Me,Je,Ke,ht),me.equals(Z)===!1&&(t.clearColor(Me,Je,Ke,ht),me.copy(Z))},reset:function(){y=!1,re=null,me.set(-1,0,0,0)}}}function n(){let y=!1,Z=null,re=null,me=null;return{setTest:function(Me){Me?_e(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(Me){Z!==Me&&!y&&(t.depthMask(Me),Z=Me)},setFunc:function(Me){if(re!==Me){switch(Me){case tD:t.depthFunc(t.NEVER);break;case nD:t.depthFunc(t.ALWAYS);break;case iD:t.depthFunc(t.LESS);break;case Nc:t.depthFunc(t.LEQUAL);break;case sD:t.depthFunc(t.EQUAL);break;case rD:t.depthFunc(t.GEQUAL);break;case oD:t.depthFunc(t.GREATER);break;case aD:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}re=Me}},setLocked:function(Me){y=Me},setClear:function(Me){me!==Me&&(t.clearDepth(Me),me=Me)},reset:function(){y=!1,Z=null,re=null,me=null}}}function i(){let y=!1,Z=null,re=null,me=null,Me=null,Je=null,Ke=null,ht=null,It=null;return{setTest:function(lt){y||(lt?_e(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(lt){Z!==lt&&!y&&(t.stencilMask(lt),Z=lt)},setFunc:function(lt,xt,bt){(re!==lt||me!==xt||Me!==bt)&&(t.stencilFunc(lt,xt,bt),re=lt,me=xt,Me=bt)},setOp:function(lt,xt,bt){(Je!==lt||Ke!==xt||ht!==bt)&&(t.stencilOp(lt,xt,bt),Je=lt,Ke=xt,ht=bt)},setLocked:function(lt){y=lt},setClear:function(lt){It!==lt&&(t.clearStencil(lt),It=lt)},reset:function(){y=!1,Z=null,re=null,me=null,Me=null,Je=null,Ke=null,ht=null,It=null}}}const s=new e,r=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],p=null,g=!1,v=null,m=null,d=null,T=null,_=null,b=null,C=null,A=new ot(0,0,0),w=0,P=!1,x=null,E=null,D=null,I=null,N=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,z=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=z>=2);let k=null,le={};const ce=t.getParameter(t.SCISSOR_BOX),xe=t.getParameter(t.VIEWPORT),we=new Ht().fromArray(ce),je=new Ht().fromArray(xe);function ne(y,Z,re,me){const Me=new Uint8Array(4),Je=t.createTexture();t.bindTexture(y,Je),t.texParameteri(y,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(y,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<re;Ke++)y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY?t.texImage3D(Z,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(Z+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return Je}const de={};de[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),_e(t.DEPTH_TEST),r.setFunc(Nc),V(!1),te(_g),_e(t.CULL_FACE),L(ls);function _e(y){c[y]!==!0&&(t.enable(y),c[y]=!0)}function pe(y){c[y]!==!1&&(t.disable(y),c[y]=!1)}function Ce(y,Z){return u[y]!==Z?(t.bindFramebuffer(y,Z),u[y]=Z,y===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=Z),y===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=Z),!0):!1}function Pe(y,Z){let re=h,me=!1;if(y){re=f.get(Z),re===void 0&&(re=[],f.set(Z,re));const Me=y.textures;if(re.length!==Me.length||re[0]!==t.COLOR_ATTACHMENT0){for(let Je=0,Ke=Me.length;Je<Ke;Je++)re[Je]=t.COLOR_ATTACHMENT0+Je;re.length=Me.length,me=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,me=!0);me&&t.drawBuffers(re)}function De(y){return p!==y?(t.useProgram(y),p=y,!0):!1}const X={[Bs]:t.FUNC_ADD,[BN]:t.FUNC_SUBTRACT,[kN]:t.FUNC_REVERSE_SUBTRACT};X[HN]=t.MIN,X[VN]=t.MAX;const Ue={[zN]:t.ZERO,[GN]:t.ONE,[WN]:t.SRC_COLOR,[Th]:t.SRC_ALPHA,[KN]:t.SRC_ALPHA_SATURATE,[jN]:t.DST_COLOR,[XN]:t.DST_ALPHA,[$N]:t.ONE_MINUS_SRC_COLOR,[Mh]:t.ONE_MINUS_SRC_ALPHA,[YN]:t.ONE_MINUS_DST_COLOR,[qN]:t.ONE_MINUS_DST_ALPHA,[ZN]:t.CONSTANT_COLOR,[JN]:t.ONE_MINUS_CONSTANT_COLOR,[QN]:t.CONSTANT_ALPHA,[eD]:t.ONE_MINUS_CONSTANT_ALPHA};function L(y,Z,re,me,Me,Je,Ke,ht,It,lt){if(y===ls){g===!0&&(pe(t.BLEND),g=!1);return}if(g===!1&&(_e(t.BLEND),g=!0),y!==FN){if(y!==v||lt!==P){if((m!==Bs||_!==Bs)&&(t.blendEquation(t.FUNC_ADD),m=Bs,_=Bs),lt)switch(y){case so:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vg:t.blendFunc(t.ONE,t.ONE);break;case Eg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case so:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Eg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}d=null,T=null,b=null,C=null,A.set(0,0,0),w=0,v=y,P=lt}return}Me=Me||Z,Je=Je||re,Ke=Ke||me,(Z!==m||Me!==_)&&(t.blendEquationSeparate(X[Z],X[Me]),m=Z,_=Me),(re!==d||me!==T||Je!==b||Ke!==C)&&(t.blendFuncSeparate(Ue[re],Ue[me],Ue[Je],Ue[Ke]),d=re,T=me,b=Je,C=Ke),(ht.equals(A)===!1||It!==w)&&(t.blendColor(ht.r,ht.g,ht.b,It),A.copy(ht),w=It),v=y,P=!1}function U(y,Z){y.side===ni?pe(t.CULL_FACE):_e(t.CULL_FACE);let re=y.side===St;Z&&(re=!re),V(re),y.blending===so&&y.transparent===!1?L(ls):L(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),r.setFunc(y.depthFunc),r.setTest(y.depthTest),r.setMask(y.depthWrite),s.setMask(y.colorWrite);const me=y.stencilWrite;o.setTest(me),me&&(o.setMask(y.stencilWriteMask),o.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),o.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),S(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function V(y){x!==y&&(y?t.frontFace(t.CW):t.frontFace(t.CCW),x=y)}function te(y){y!==IN?(_e(t.CULL_FACE),y!==E&&(y===_g?t.cullFace(t.BACK):y===ON?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),E=y}function M(y){y!==D&&(q&&t.lineWidth(y),D=y)}function S(y,Z,re){y?(_e(t.POLYGON_OFFSET_FILL),(I!==Z||N!==re)&&(t.polygonOffset(Z,re),I=Z,N=re)):pe(t.POLYGON_OFFSET_FILL)}function O(y){y?_e(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function F(y){y===void 0&&(y=t.TEXTURE0+G-1),k!==y&&(t.activeTexture(y),k=y)}function H(y,Z,re){re===void 0&&(k===null?re=t.TEXTURE0+G-1:re=k);let me=le[re];me===void 0&&(me={type:void 0,texture:void 0},le[re]=me),(me.type!==y||me.texture!==Z)&&(k!==re&&(t.activeTexture(re),k=re),t.bindTexture(y,Z||de[y]),me.type=y,me.texture=Z)}function B(){const y=le[k];y!==void 0&&y.type!==void 0&&(t.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Y(){try{t.compressedTexImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ae(){try{t.texSubImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function he(){try{t.texSubImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Se(){try{t.texStorage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ge(){try{t.texStorage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ee(){try{t.texImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Fe(){try{t.texImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function qe(y){we.equals(y)===!1&&(t.scissor(y.x,y.y,y.z,y.w),we.copy(y))}function Ye(y){je.equals(y)===!1&&(t.viewport(y.x,y.y,y.z,y.w),je.copy(y))}function Ze(y,Z){let re=l.get(Z);re===void 0&&(re=new WeakMap,l.set(Z,re));let me=re.get(y);me===void 0&&(me=t.getUniformBlockIndex(Z,y.name),re.set(y,me))}function Ie(y,Z){const me=l.get(Z).get(y);a.get(Z)!==me&&(t.uniformBlockBinding(Z,me,y.__bindingPointIndex),a.set(Z,me))}function Te(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},k=null,le={},u={},f=new WeakMap,h=[],p=null,g=!1,v=null,m=null,d=null,T=null,_=null,b=null,C=null,A=new ot(0,0,0),w=0,P=!1,x=null,E=null,D=null,I=null,N=null,we.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:_e,disable:pe,bindFramebuffer:Ce,drawBuffers:Pe,useProgram:De,setBlending:L,setMaterial:U,setFlipSided:V,setCullFace:te,setLineWidth:M,setPolygonOffset:S,setScissorTest:O,activeTexture:F,bindTexture:H,unbindTexture:B,compressedTexImage2D:ie,compressedTexImage3D:Y,texImage2D:Ee,texImage3D:Fe,updateUBOMapping:Ze,uniformBlockBinding:Ie,texStorage2D:Se,texStorage3D:ge,texSubImage2D:ae,texSubImage3D:he,compressedTexSubImage2D:se,compressedTexSubImage3D:fe,scissor:qe,viewport:Ye,reset:Te}}function t3(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,S){return p?new OffscreenCanvas(M,S):Pa("canvas")}function v(M,S,O){let F=1;const H=te(M);if((H.width>O||H.height>O)&&(F=O/Math.max(H.width,H.height)),F<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const B=Math.floor(F*H.width),ie=Math.floor(F*H.height);f===void 0&&(f=g(B,ie));const Y=S?g(B,ie):f;return Y.width=B,Y.height=ie,Y.getContext("2d").drawImage(M,0,0,B,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+B+"x"+ie+")."),Y}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),M;return M}function m(M){return M.generateMipmaps&&M.minFilter!==Dn&&M.minFilter!==Xn}function d(M){t.generateMipmap(M)}function T(M,S,O,F,H=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let B=S;if(S===t.RED&&(O===t.FLOAT&&(B=t.R32F),O===t.HALF_FLOAT&&(B=t.R16F),O===t.UNSIGNED_BYTE&&(B=t.R8)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(B=t.R8UI),O===t.UNSIGNED_SHORT&&(B=t.R16UI),O===t.UNSIGNED_INT&&(B=t.R32UI),O===t.BYTE&&(B=t.R8I),O===t.SHORT&&(B=t.R16I),O===t.INT&&(B=t.R32I)),S===t.RG&&(O===t.FLOAT&&(B=t.RG32F),O===t.HALF_FLOAT&&(B=t.RG16F),O===t.UNSIGNED_BYTE&&(B=t.RG8)),S===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(B=t.RG8UI),O===t.UNSIGNED_SHORT&&(B=t.RG16UI),O===t.UNSIGNED_INT&&(B=t.RG32UI),O===t.BYTE&&(B=t.RG8I),O===t.SHORT&&(B=t.RG16I),O===t.INT&&(B=t.RG32I)),S===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(B=t.RGB9_E5),S===t.RGBA){const ie=H?Ic:ct.getTransfer(F);O===t.FLOAT&&(B=t.RGBA32F),O===t.HALF_FLOAT&&(B=t.RGBA16F),O===t.UNSIGNED_BYTE&&(B=ie===ut?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(B=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(B=t.RGB5_A1)}return(B===t.R16F||B===t.R32F||B===t.RG16F||B===t.RG32F||B===t.RGBA16F||B===t.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function _(M,S){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Dn&&M.minFilter!==Xn?Math.log2(Math.max(S.width,S.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?S.mipmaps.length:1}function b(M){const S=M.target;S.removeEventListener("dispose",b),A(S),S.isVideoTexture&&u.delete(S)}function C(M){const S=M.target;S.removeEventListener("dispose",C),P(S)}function A(M){const S=i.get(M);if(S.__webglInit===void 0)return;const O=M.source,F=h.get(O);if(F){const H=F[S.__cacheKey];H.usedTimes--,H.usedTimes===0&&w(M),Object.keys(F).length===0&&h.delete(O)}i.remove(M)}function w(M){const S=i.get(M);t.deleteTexture(S.__webglTexture);const O=M.source,F=h.get(O);delete F[S.__cacheKey],o.memory.textures--}function P(M){const S=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(S.__webglFramebuffer[F]))for(let H=0;H<S.__webglFramebuffer[F].length;H++)t.deleteFramebuffer(S.__webglFramebuffer[F][H]);else t.deleteFramebuffer(S.__webglFramebuffer[F]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[F])}else{if(Array.isArray(S.__webglFramebuffer))for(let F=0;F<S.__webglFramebuffer.length;F++)t.deleteFramebuffer(S.__webglFramebuffer[F]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let F=0;F<S.__webglColorRenderbuffer.length;F++)S.__webglColorRenderbuffer[F]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[F]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=M.textures;for(let F=0,H=O.length;F<H;F++){const B=i.get(O[F]);B.__webglTexture&&(t.deleteTexture(B.__webglTexture),o.memory.textures--),i.remove(O[F])}i.remove(M)}let x=0;function E(){x=0}function D(){const M=x;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),x+=1,M}function I(M){const S=[];return S.push(M.wrapS),S.push(M.wrapT),S.push(M.wrapR||0),S.push(M.magFilter),S.push(M.minFilter),S.push(M.anisotropy),S.push(M.internalFormat),S.push(M.format),S.push(M.type),S.push(M.generateMipmaps),S.push(M.premultiplyAlpha),S.push(M.flipY),S.push(M.unpackAlignment),S.push(M.colorSpace),S.join()}function N(M,S){const O=i.get(M);if(M.isVideoTexture&&U(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){const F=M.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(O,M,S);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function G(M,S){const O=i.get(M);if(M.version>0&&O.__version!==M.version){we(O,M,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function q(M,S){const O=i.get(M);if(M.version>0&&O.__version!==M.version){we(O,M,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function z(M,S){const O=i.get(M);if(M.version>0&&O.__version!==M.version){je(O,M,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}const K={[Ch]:t.REPEAT,[$s]:t.CLAMP_TO_EDGE,[Rh]:t.MIRRORED_REPEAT},k={[Dn]:t.NEAREST,[_D]:t.NEAREST_MIPMAP_NEAREST,[Sl]:t.NEAREST_MIPMAP_LINEAR,[Xn]:t.LINEAR,[of]:t.LINEAR_MIPMAP_NEAREST,[Xs]:t.LINEAR_MIPMAP_LINEAR},le={[ND]:t.NEVER,[BD]:t.ALWAYS,[DD]:t.LESS,[oS]:t.LEQUAL,[ID]:t.EQUAL,[FD]:t.GEQUAL,[OD]:t.GREATER,[UD]:t.NOTEQUAL};function ce(M,S){if(S.type===ss&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Xn||S.magFilter===of||S.magFilter===Sl||S.magFilter===Xs||S.minFilter===Xn||S.minFilter===of||S.minFilter===Sl||S.minFilter===Xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,K[S.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,K[S.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,K[S.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,k[S.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,k[S.minFilter]),S.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,le[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Dn||S.minFilter!==Sl&&S.minFilter!==Xs||S.type===ss&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function xe(M,S){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,S.addEventListener("dispose",b));const F=S.source;let H=h.get(F);H===void 0&&(H={},h.set(F,H));const B=I(S);if(B!==M.__cacheKey){H[B]===void 0&&(H[B]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),H[B].usedTimes++;const ie=H[M.__cacheKey];ie!==void 0&&(H[M.__cacheKey].usedTimes--,ie.usedTimes===0&&w(S)),M.__cacheKey=B,M.__webglTexture=H[B].texture}return O}function we(M,S,O){let F=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(F=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(F=t.TEXTURE_3D);const H=xe(M,S),B=S.source;n.bindTexture(F,M.__webglTexture,t.TEXTURE0+O);const ie=i.get(B);if(B.version!==ie.__version||H===!0){n.activeTexture(t.TEXTURE0+O);const Y=ct.getPrimaries(ct.workingColorSpace),ae=S.colorSpace===is?null:ct.getPrimaries(S.colorSpace),he=S.colorSpace===is||Y===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let se=v(S.image,!1,s.maxTextureSize);se=V(S,se);const fe=r.convert(S.format,S.colorSpace),Se=r.convert(S.type);let ge=T(S.internalFormat,fe,Se,S.colorSpace,S.isVideoTexture);ce(F,S);let Ee;const Fe=S.mipmaps,qe=S.isVideoTexture!==!0&&ge!==rS,Ye=ie.__version===void 0||H===!0,Ze=B.dataReady,Ie=_(S,se);if(S.isDepthTexture)ge=t.DEPTH_COMPONENT16,S.type===ss?ge=t.DEPTH_COMPONENT32F:S.type===wo?ge=t.DEPTH_COMPONENT24:S.type===Ya&&(ge=t.DEPTH24_STENCIL8),Ye&&(qe?n.texStorage2D(t.TEXTURE_2D,1,ge,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,ge,se.width,se.height,0,fe,Se,null));else if(S.isDataTexture)if(Fe.length>0){qe&&Ye&&n.texStorage2D(t.TEXTURE_2D,Ie,ge,Fe[0].width,Fe[0].height);for(let Te=0,y=Fe.length;Te<y;Te++)Ee=Fe[Te],qe?Ze&&n.texSubImage2D(t.TEXTURE_2D,Te,0,0,Ee.width,Ee.height,fe,Se,Ee.data):n.texImage2D(t.TEXTURE_2D,Te,ge,Ee.width,Ee.height,0,fe,Se,Ee.data);S.generateMipmaps=!1}else qe?(Ye&&n.texStorage2D(t.TEXTURE_2D,Ie,ge,se.width,se.height),Ze&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,fe,Se,se.data)):n.texImage2D(t.TEXTURE_2D,0,ge,se.width,se.height,0,fe,Se,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,ge,Fe[0].width,Fe[0].height,se.depth);for(let Te=0,y=Fe.length;Te<y;Te++)Ee=Fe[Te],S.format!==ri?fe!==null?qe?Ze&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Te,0,0,0,Ee.width,Ee.height,se.depth,fe,Ee.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Te,ge,Ee.width,Ee.height,se.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?Ze&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Te,0,0,0,Ee.width,Ee.height,se.depth,fe,Se,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Te,ge,Ee.width,Ee.height,se.depth,0,fe,Se,Ee.data)}else{qe&&Ye&&n.texStorage2D(t.TEXTURE_2D,Ie,ge,Fe[0].width,Fe[0].height);for(let Te=0,y=Fe.length;Te<y;Te++)Ee=Fe[Te],S.format!==ri?fe!==null?qe?Ze&&n.compressedTexSubImage2D(t.TEXTURE_2D,Te,0,0,Ee.width,Ee.height,fe,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,Te,ge,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?Ze&&n.texSubImage2D(t.TEXTURE_2D,Te,0,0,Ee.width,Ee.height,fe,Se,Ee.data):n.texImage2D(t.TEXTURE_2D,Te,ge,Ee.width,Ee.height,0,fe,Se,Ee.data)}else if(S.isDataArrayTexture)qe?(Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,ge,se.width,se.height,se.depth),Ze&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,fe,Se,se.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,se.width,se.height,se.depth,0,fe,Se,se.data);else if(S.isData3DTexture)qe?(Ye&&n.texStorage3D(t.TEXTURE_3D,Ie,ge,se.width,se.height,se.depth),Ze&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,fe,Se,se.data)):n.texImage3D(t.TEXTURE_3D,0,ge,se.width,se.height,se.depth,0,fe,Se,se.data);else if(S.isFramebufferTexture){if(Ye)if(qe)n.texStorage2D(t.TEXTURE_2D,Ie,ge,se.width,se.height);else{let Te=se.width,y=se.height;for(let Z=0;Z<Ie;Z++)n.texImage2D(t.TEXTURE_2D,Z,ge,Te,y,0,fe,Se,null),Te>>=1,y>>=1}}else if(Fe.length>0){if(qe&&Ye){const Te=te(Fe[0]);n.texStorage2D(t.TEXTURE_2D,Ie,ge,Te.width,Te.height)}for(let Te=0,y=Fe.length;Te<y;Te++)Ee=Fe[Te],qe?Ze&&n.texSubImage2D(t.TEXTURE_2D,Te,0,0,fe,Se,Ee):n.texImage2D(t.TEXTURE_2D,Te,ge,fe,Se,Ee);S.generateMipmaps=!1}else if(qe){if(Ye){const Te=te(se);n.texStorage2D(t.TEXTURE_2D,Ie,ge,Te.width,Te.height)}Ze&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Se,se)}else n.texImage2D(t.TEXTURE_2D,0,ge,fe,Se,se);m(S)&&d(F),ie.__version=B.version,S.onUpdate&&S.onUpdate(S)}M.__version=S.version}function je(M,S,O){if(S.image.length!==6)return;const F=xe(M,S),H=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+O);const B=i.get(H);if(H.version!==B.__version||F===!0){n.activeTexture(t.TEXTURE0+O);const ie=ct.getPrimaries(ct.workingColorSpace),Y=S.colorSpace===is?null:ct.getPrimaries(S.colorSpace),ae=S.colorSpace===is||ie===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const he=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let y=0;y<6;y++)!he&&!se?fe[y]=v(S.image[y],!0,s.maxCubemapSize):fe[y]=se?S.image[y].image:S.image[y],fe[y]=V(S,fe[y]);const Se=fe[0],ge=r.convert(S.format,S.colorSpace),Ee=r.convert(S.type),Fe=T(S.internalFormat,ge,Ee,S.colorSpace),qe=S.isVideoTexture!==!0,Ye=B.__version===void 0||F===!0,Ze=H.dataReady;let Ie=_(S,Se);ce(t.TEXTURE_CUBE_MAP,S);let Te;if(he){qe&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,Fe,Se.width,Se.height);for(let y=0;y<6;y++){Te=fe[y].mipmaps;for(let Z=0;Z<Te.length;Z++){const re=Te[Z];S.format!==ri?ge!==null?qe?Ze&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+y,Z,0,0,re.width,re.height,ge,re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+y,Z,Fe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?Ze&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+y,Z,0,0,re.width,re.height,ge,Ee,re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+y,Z,Fe,re.width,re.height,0,ge,Ee,re.data)}}}else{if(Te=S.mipmaps,qe&&Ye){Te.length>0&&Ie++;const y=te(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,Fe,y.width,y.height)}for(let y=0;y<6;y++)if(se){qe?Ze&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,0,0,fe[y].width,fe[y].height,ge,Ee,fe[y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,Fe,fe[y].width,fe[y].height,0,ge,Ee,fe[y].data);for(let Z=0;Z<Te.length;Z++){const me=Te[Z].image[y].image;qe?Ze&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+y,Z+1,0,0,me.width,me.height,ge,Ee,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+y,Z+1,Fe,me.width,me.height,0,ge,Ee,me.data)}}else{qe?Ze&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,0,0,ge,Ee,fe[y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,Fe,ge,Ee,fe[y]);for(let Z=0;Z<Te.length;Z++){const re=Te[Z];qe?Ze&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+y,Z+1,0,0,ge,Ee,re.image[y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+y,Z+1,Fe,ge,Ee,re.image[y])}}}m(S)&&d(t.TEXTURE_CUBE_MAP),B.__version=H.version,S.onUpdate&&S.onUpdate(S)}M.__version=S.version}function ne(M,S,O,F,H,B){const ie=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),ae=T(O.internalFormat,ie,Y,O.colorSpace);if(!i.get(S).__hasExternalTextures){const se=Math.max(1,S.width>>B),fe=Math.max(1,S.height>>B);H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?n.texImage3D(H,B,ae,se,fe,S.depth,0,ie,Y,null):n.texImage2D(H,B,ae,se,fe,0,ie,Y,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),L(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,F,H,i.get(O).__webglTexture,0,Ue(S)):(H===t.TEXTURE_2D||H>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,F,H,i.get(O).__webglTexture,B),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(M,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,M),S.depthBuffer&&!S.stencilBuffer){let F=t.DEPTH_COMPONENT24;if(O||L(S)){const H=S.depthTexture;H&&H.isDepthTexture&&(H.type===ss?F=t.DEPTH_COMPONENT32F:H.type===wo&&(F=t.DEPTH_COMPONENT24));const B=Ue(S);L(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,B,F,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,B,F,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,F,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,M)}else if(S.depthBuffer&&S.stencilBuffer){const F=Ue(S);O&&L(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,F,t.DEPTH24_STENCIL8,S.width,S.height):L(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,F,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,M)}else{const F=S.textures;for(let H=0;H<F.length;H++){const B=F[H],ie=r.convert(B.format,B.colorSpace),Y=r.convert(B.type),ae=T(B.internalFormat,ie,Y,B.colorSpace),he=Ue(S);O&&L(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ae,S.width,S.height):L(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,ae,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ae,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function _e(M,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);const F=i.get(S.depthTexture).__webglTexture,H=Ue(S);if(S.depthTexture.format===ro)L(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0,H):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0);else if(S.depthTexture.format===Ca)L(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0,H):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function pe(M){const S=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");_e(S.__webglFramebuffer,M)}else if(O){S.__webglDepthbuffer=[];for(let F=0;F<6;F++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[F]),S.__webglDepthbuffer[F]=t.createRenderbuffer(),de(S.__webglDepthbuffer[F],M,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),de(S.__webglDepthbuffer,M,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(M,S,O){const F=i.get(M);S!==void 0&&ne(F.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&pe(M)}function Pe(M){const S=M.texture,O=i.get(M),F=i.get(S);M.addEventListener("dispose",C);const H=M.textures,B=M.isWebGLCubeRenderTarget===!0,ie=H.length>1;if(ie||(F.__webglTexture===void 0&&(F.__webglTexture=t.createTexture()),F.__version=S.version,o.memory.textures++),B){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let ae=0;ae<S.mipmaps.length;ae++)O.__webglFramebuffer[Y][ae]=t.createFramebuffer()}else O.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<S.mipmaps.length;Y++)O.__webglFramebuffer[Y]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ie)for(let Y=0,ae=H.length;Y<ae;Y++){const he=i.get(H[Y]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&L(M)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<H.length;Y++){const ae=H[Y];O.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const he=r.convert(ae.format,ae.colorSpace),se=r.convert(ae.type),fe=T(ae.internalFormat,he,se,ae.colorSpace,M.isXRRenderTarget===!0),Se=Ue(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,fe,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),de(O.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(B){n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture),ce(t.TEXTURE_CUBE_MAP,S);for(let Y=0;Y<6;Y++)if(S.mipmaps&&S.mipmaps.length>0)for(let ae=0;ae<S.mipmaps.length;ae++)ne(O.__webglFramebuffer[Y][ae],M,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae);else ne(O.__webglFramebuffer[Y],M,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);m(S)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){for(let Y=0,ae=H.length;Y<ae;Y++){const he=H[Y],se=i.get(he);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),ce(t.TEXTURE_2D,he),ne(O.__webglFramebuffer,M,he,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D,0),m(he)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Y=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,F.__webglTexture),ce(Y,S),S.mipmaps&&S.mipmaps.length>0)for(let ae=0;ae<S.mipmaps.length;ae++)ne(O.__webglFramebuffer[ae],M,S,t.COLOR_ATTACHMENT0,Y,ae);else ne(O.__webglFramebuffer,M,S,t.COLOR_ATTACHMENT0,Y,0);m(S)&&d(Y),n.unbindTexture()}M.depthBuffer&&pe(M)}function De(M){const S=M.textures;for(let O=0,F=S.length;O<F;O++){const H=S[O];if(m(H)){const B=M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ie=i.get(H).__webglTexture;n.bindTexture(B,ie),d(B),n.unbindTexture()}}}function X(M){if(M.samples>0&&L(M)===!1){const S=M.textures,O=M.width,F=M.height;let H=t.COLOR_BUFFER_BIT;const B=[],ie=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=i.get(M),ae=S.length>1;if(ae)for(let he=0;he<S.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let he=0;he<S.length;he++){B.push(t.COLOR_ATTACHMENT0+he),M.depthBuffer&&B.push(ie);const se=Y.__ignoreDepthValues!==void 0?Y.__ignoreDepthValues:!1;if(se===!1&&(M.depthBuffer&&(H|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&Y.__isTransmissionRenderTarget!==!0&&(H|=t.STENCIL_BUFFER_BIT)),ae&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Y.__webglColorRenderbuffer[he]),se===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ie]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ie])),ae){const fe=i.get(S[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,fe,0)}t.blitFramebuffer(0,0,O,F,0,0,O,F,H,t.NEAREST),l&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,B)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let he=0;he<S.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,Y.__webglColorRenderbuffer[he]);const se=i.get(S[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}}function Ue(M){return Math.min(s.maxSamples,M.samples)}function L(M){const S=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function U(M){const S=o.render.frame;u.get(M)!==S&&(u.set(M,S),M.update())}function V(M,S){const O=M.colorSpace,F=M.format,H=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==bs&&O!==is&&(ct.getTransfer(O)===ut?(F!==ri||H!==us)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function te(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=E,this.setTexture2D=N,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=z,this.rebindTextures=Ce,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=L}function n3(t,e){function n(i,s=is){let r;const o=ct.getTransfer(s);if(i===us)return t.UNSIGNED_BYTE;if(i===eS)return t.UNSIGNED_SHORT_4_4_4_4;if(i===tS)return t.UNSIGNED_SHORT_5_5_5_1;if(i===yD)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===vD)return t.BYTE;if(i===ED)return t.SHORT;if(i===Jy)return t.UNSIGNED_SHORT;if(i===Qy)return t.INT;if(i===wo)return t.UNSIGNED_INT;if(i===ss)return t.FLOAT;if(i===Dc)return t.HALF_FLOAT;if(i===SD)return t.ALPHA;if(i===xD)return t.RGB;if(i===ri)return t.RGBA;if(i===bD)return t.LUMINANCE;if(i===TD)return t.LUMINANCE_ALPHA;if(i===ro)return t.DEPTH_COMPONENT;if(i===Ca)return t.DEPTH_STENCIL;if(i===MD)return t.RED;if(i===nS)return t.RED_INTEGER;if(i===AD)return t.RG;if(i===iS)return t.RG_INTEGER;if(i===sS)return t.RGBA_INTEGER;if(i===af||i===lf||i===cf||i===uf)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===af)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===af)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lf)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cf)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uf)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sg||i===xg||i===bg||i===Tg)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sg)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xg)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bg)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tg)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rS)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Mg||i===Ag)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Mg)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ag)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wg||i===Cg||i===Rg||i===Pg||i===Lg||i===Ng||i===Dg||i===Ig||i===Og||i===Ug||i===Fg||i===Bg||i===kg||i===Hg)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===wg)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cg)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rg)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pg)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lg)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ng)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dg)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ig)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Og)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ug)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fg)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bg)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kg)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hg)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ff||i===Vg||i===zg)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ff)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vg)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zg)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wD||i===Gg||i===Wg||i===$g)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ff)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Gg)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wg)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$g)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ya?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class i3 extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gl extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s3={type:"move"};class Uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(s3)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Gl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const r3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o3=`
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

}`;class a3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const s=new nn,r=e.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,s=new vs({vertexShader:r3,fragmentShader:o3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new In(new di(20,20),s)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class l3 extends Er{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const v=new a3,m=n.getContextAttributes();let d=null,T=null;const _=[],b=[],C=new Be;let A=null;const w=new vn;w.layers.enable(1),w.viewport=new Ht;const P=new vn;P.layers.enable(2),P.viewport=new Ht;const x=[w,P],E=new i3;E.layers.enable(1),E.layers.enable(2);let D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=_[ne];return de===void 0&&(de=new Uf,_[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=_[ne];return de===void 0&&(de=new Uf,_[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=_[ne];return de===void 0&&(de=new Uf,_[ne]=de),de.getHandSpace()};function N(ne){const de=b.indexOf(ne.inputSource);if(de===-1)return;const _e=_[de];_e!==void 0&&(_e.update(ne.inputSource,ne.frame,c||o),_e.dispatchEvent({type:ne.type,data:ne.inputSource}))}function G(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",q);for(let ne=0;ne<_.length;ne++){const de=b[ne];de!==null&&(b[ne]=null,_[ne].disconnect(de))}D=null,I=null,v.reset(),e.setRenderTarget(d),p=null,h=null,f=null,s=null,T=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",G),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,de),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new cr(p.framebufferWidth,p.framebufferHeight,{format:ri,type:us,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,_e=null,pe=null;m.depth&&(pe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=m.stencil?Ca:ro,_e=m.stencil?Ya:wo);const Ce={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:r};f=new XRWebGLBinding(s,n),h=f.createProjectionLayer(Ce),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new cr(h.textureWidth,h.textureHeight,{format:ri,type:us,depthTexture:new vS(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Pe=e.properties.get(T);Pe.__ignoreDepthValues=h.ignoreDepthValues}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function q(ne){for(let de=0;de<ne.removed.length;de++){const _e=ne.removed[de],pe=b.indexOf(_e);pe>=0&&(b[pe]=null,_[pe].disconnect(_e))}for(let de=0;de<ne.added.length;de++){const _e=ne.added[de];let pe=b.indexOf(_e);if(pe===-1){for(let Pe=0;Pe<_.length;Pe++)if(Pe>=b.length){b.push(_e),pe=Pe;break}else if(b[Pe]===null){b[Pe]=_e,pe=Pe;break}if(pe===-1)break}const Ce=_[pe];Ce&&Ce.connect(_e)}}const z=new j,K=new j;function k(ne,de,_e){z.setFromMatrixPosition(de.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);const pe=z.distanceTo(K),Ce=de.projectionMatrix.elements,Pe=_e.projectionMatrix.elements,De=Ce[14]/(Ce[10]-1),X=Ce[14]/(Ce[10]+1),Ue=(Ce[9]+1)/Ce[5],L=(Ce[9]-1)/Ce[5],U=(Ce[8]-1)/Ce[0],V=(Pe[8]+1)/Pe[0],te=De*U,M=De*V,S=pe/(-U+V),O=S*-U;de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(O),ne.translateZ(S),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const F=De+S,H=X+S,B=te-O,ie=M+(pe-O),Y=Ue*X/H*F,ae=L*X/H*F;ne.projectionMatrix.makePerspective(B,ie,Y,ae,F,H),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function le(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;v.texture!==null&&(ne.near=v.depthNear,ne.far=v.depthFar),E.near=P.near=w.near=ne.near,E.far=P.far=w.far=ne.far,(D!==E.near||I!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,I=E.far,w.near=D,w.far=I,P.near=D,P.far=I,w.updateProjectionMatrix(),P.updateProjectionMatrix(),ne.updateProjectionMatrix());const de=ne.parent,_e=E.cameras;le(E,de);for(let pe=0;pe<_e.length;pe++)le(_e[pe],de);_e.length===2?k(E,w,P):E.projectionMatrix.copy(w.projectionMatrix),ce(ne,E,de)};function ce(ne,de,_e){_e===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(_e.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ra*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return v.texture!==null};let xe=null;function we(ne,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let pe=!1;_e.length!==E.cameras.length&&(E.cameras.length=0,pe=!0);for(let Pe=0;Pe<_e.length;Pe++){const De=_e[Pe];let X=null;if(p!==null)X=p.getViewport(De);else{const L=f.getViewSubImage(h,De);X=L.viewport,Pe===0&&(e.setRenderTargetTextures(T,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(T))}let Ue=x[Pe];Ue===void 0&&(Ue=new vn,Ue.layers.enable(Pe),Ue.viewport=new Ht,x[Pe]=Ue),Ue.matrix.fromArray(De.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(De.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(X.x,X.y,X.width,X.height),Pe===0&&(E.matrix.copy(Ue.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),pe===!0&&E.cameras.push(Ue)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Pe=f.getDepthInformation(_e[0]);Pe&&Pe.isValid&&Pe.texture&&v.init(e,Pe,s.renderState)}}for(let _e=0;_e<_.length;_e++){const pe=b[_e],Ce=_[_e];pe!==null&&Ce!==void 0&&Ce.update(pe,de,c||o)}v.render(e,E),xe&&xe(ne,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const je=new _S;je.setAnimationLoop(we),this.setAnimationLoop=function(ne){xe=ne},this.dispose=function(){}}}const Is=new Ni,c3=new At;function u3(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,dS(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,T,_,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,T,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===St&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===St&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d),_=T.envMap,b=T.envMapRotation;if(_&&(m.envMap.value=_,Is.copy(b),Is.x*=-1,Is.y*=-1,Is.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),m.envMapRotation.value.setFromMatrix4(c3.makeRotationFromEuler(Is)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const C=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*C,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=_*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===St&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function f3(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,_){const b=_.program;i.uniformBlockBinding(T,b)}function c(T,_){let b=s[T.id];b===void 0&&(g(T),b=u(T),s[T.id]=b,T.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(T,C);const A=e.render.frame;r[T.id]!==A&&(h(T),r[T.id]=A)}function u(T){const _=f();T.__bindingPointIndex=_;const b=t.createBuffer(),C=T.__size,A=T.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,b),b}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const _=s[T.id],b=T.uniforms,C=T.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,w=b.length;A<w;A++){const P=Array.isArray(b[A])?b[A]:[b[A]];for(let x=0,E=P.length;x<E;x++){const D=P[x];if(p(D,A,x,C)===!0){const I=D.__offset,N=Array.isArray(D.value)?D.value:[D.value];let G=0;for(let q=0;q<N.length;q++){const z=N[q],K=v(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,I+G,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,G),G+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(T,_,b,C){const A=T.value,w=_+"_"+b;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const P=C[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(T){const _=T.uniforms;let b=0;const C=16;for(let w=0,P=_.length;w<P;w++){const x=Array.isArray(_[w])?_[w]:[_[w]];for(let E=0,D=x.length;E<D;E++){const I=x[E],N=Array.isArray(I.value)?I.value:[I.value];for(let G=0,q=N.length;G<q;G++){const z=N[G],K=v(z),k=b%C;k!==0&&C-k<K.boundary&&(b+=C-k),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=K.storage}}}const A=b%C;return A>0&&(b+=C-A),T.__size=b,T.__cache={},this}function v(T){const _={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(_.boundary=4,_.storage=4):T.isVector2?(_.boundary=8,_.storage=8):T.isVector3||T.isColor?(_.boundary=16,_.storage=12):T.isVector4?(_.boundary=16,_.storage=16):T.isMatrix3?(_.boundary=48,_.storage=48):T.isMatrix4?(_.boundary=64,_.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),_}function m(T){const _=T.target;_.removeEventListener("dispose",m);const b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(const T in s)t.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class TS{constructor(e={}){const{canvas:n=nI(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const d=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this._useLegacyLights=!1,this.toneMapping=cs,this.toneMappingExposure=1;const _=this;let b=!1,C=0,A=0,w=null,P=-1,x=null;const E=new Ht,D=new Ht;let I=null;const N=new ot(0);let G=0,q=n.width,z=n.height,K=1,k=null,le=null;const ce=new Ht(0,0,q,z),xe=new Ht(0,0,q,z);let we=!1;const je=new gS;let ne=!1,de=!1;const _e=new At,pe=new Be,Ce=new j,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return w===null?K:1}let X=i;function Ue(R,W){const Q=n.getContext(R,W);return Q!==null?Q:null}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tp}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",re,!1),n.addEventListener("webglcontextcreationerror",me,!1),X===null){const W="webgl2";if(X=Ue(W,R),X===null)throw Ue(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let L,U,V,te,M,S,O,F,H,B,ie,Y,ae,he,se,fe,Se,ge,Ee,Fe,qe,Ye,Ze,Ie;function Te(){L=new y2(X),L.init(),U=new d2(X,L,e),Ye=new n3(X,L),V=new e3(X),te=new b2(X),M=new HF,S=new t3(X,L,V,M,U,Ye,te),O=new m2(_),F=new E2(_),H=new CI(X),Ze=new f2(X,H),B=new S2(X,H,te,Ze),ie=new M2(X,B,H,te),Ee=new T2(X,U,S),fe=new p2(M),Y=new kF(_,O,F,L,U,Ze,fe),ae=new u3(_,M),he=new zF,se=new jF(L),ge=new u2(_,O,F,V,ie,h,l),Se=new QF(_,ie,U),Ie=new f3(X,te,U,V),Fe=new h2(X,L,te),qe=new x2(X,L,te),te.programs=Y.programs,_.capabilities=U,_.extensions=L,_.properties=M,_.renderLists=he,_.shadowMap=Se,_.state=V,_.info=te}Te();const y=new l3(_,X);this.xr=y,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=L.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=L.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(q,z,!1))},this.getSize=function(R){return R.set(q,z)},this.setSize=function(R,W,Q=!0){if(y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,z=W,n.width=Math.floor(R*K),n.height=Math.floor(W*K),Q===!0&&(n.style.width=R+"px",n.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(q*K,z*K).floor()},this.setDrawingBufferSize=function(R,W,Q){q=R,z=W,K=Q,n.width=Math.floor(R*Q),n.height=Math.floor(W*Q),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(ce)},this.setViewport=function(R,W,Q,ee){R.isVector4?ce.set(R.x,R.y,R.z,R.w):ce.set(R,W,Q,ee),V.viewport(E.copy(ce).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(xe)},this.setScissor=function(R,W,Q,ee){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,W,Q,ee),V.scissor(D.copy(xe).multiplyScalar(K).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(R){V.setScissorTest(we=R)},this.setOpaqueSort=function(R){k=R},this.setTransparentSort=function(R){le=R},this.getClearColor=function(R){return R.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(R=!0,W=!0,Q=!0){let ee=0;if(R){let J=!1;if(w!==null){const ye=w.texture.format;J=ye===sS||ye===iS||ye===nS}if(J){const ye=w.texture.type,Ae=ye===us||ye===wo||ye===Jy||ye===Ya||ye===eS||ye===tS,Le=ge.getClearColor(),Oe=ge.getClearAlpha(),Ve=Le.r,ke=Le.g,ze=Le.b;Ae?(p[0]=Ve,p[1]=ke,p[2]=ze,p[3]=Oe,X.clearBufferuiv(X.COLOR,0,p)):(g[0]=Ve,g[1]=ke,g[2]=ze,g[3]=Oe,X.clearBufferiv(X.COLOR,0,g))}else ee|=X.COLOR_BUFFER_BIT}W&&(ee|=X.DEPTH_BUFFER_BIT),Q&&(ee|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",re,!1),n.removeEventListener("webglcontextcreationerror",me,!1),he.dispose(),se.dispose(),M.dispose(),O.dispose(),F.dispose(),ie.dispose(),Ze.dispose(),Ie.dispose(),Y.dispose(),y.dispose(),y.removeEventListener("sessionstart",xt),y.removeEventListener("sessionend",bt),fn.stop()};function Z(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=te.autoReset,W=Se.enabled,Q=Se.autoUpdate,ee=Se.needsUpdate,J=Se.type;Te(),te.autoReset=R,Se.enabled=W,Se.autoUpdate=Q,Se.needsUpdate=ee,Se.type=J}function me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Me(R){const W=R.target;W.removeEventListener("dispose",Me),Je(W)}function Je(R){Ke(R),M.remove(R)}function Ke(R){const W=M.get(R).programs;W!==void 0&&(W.forEach(function(Q){Y.releaseProgram(Q)}),R.isShaderMaterial&&Y.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,Q,ee,J,ye){W===null&&(W=Pe);const Ae=J.isMesh&&J.matrixWorld.determinant()<0,Le=DS(R,W,Q,ee,J);V.setMaterial(ee,Ae);let Oe=Q.index,Ve=1;if(ee.wireframe===!0){if(Oe=B.getWireframeAttribute(Q),Oe===void 0)return;Ve=2}const ke=Q.drawRange,ze=Q.attributes.position;let yt=ke.start*Ve,hn=(ke.start+ke.count)*Ve;ye!==null&&(yt=Math.max(yt,ye.start*Ve),hn=Math.min(hn,(ye.start+ye.count)*Ve)),Oe!==null?(yt=Math.max(yt,0),hn=Math.min(hn,Oe.count)):ze!=null&&(yt=Math.max(yt,0),hn=Math.min(hn,ze.count));const Ot=hn-yt;if(Ot<0||Ot===1/0)return;Ze.setup(J,ee,Le,Q,Oe);let pi,mt=Fe;if(Oe!==null&&(pi=H.get(Oe),mt=qe,mt.setIndex(pi)),J.isMesh)ee.wireframe===!0?(V.setLineWidth(ee.wireframeLinewidth*De()),mt.setMode(X.LINES)):mt.setMode(X.TRIANGLES);else if(J.isLine){let We=ee.linewidth;We===void 0&&(We=1),V.setLineWidth(We*De()),J.isLineSegments?mt.setMode(X.LINES):J.isLineLoop?mt.setMode(X.LINE_LOOP):mt.setMode(X.LINE_STRIP)}else J.isPoints?mt.setMode(X.POINTS):J.isSprite&&mt.setMode(X.TRIANGLES);if(J.isBatchedMesh)mt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)mt.renderInstances(yt,Ot,J.count);else if(Q.isInstancedBufferGeometry){const We=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Tu=Math.min(Q.instanceCount,We);mt.renderInstances(yt,Ot,Tu)}else mt.render(yt,Ot)};function ht(R,W,Q){R.transparent===!0&&R.side===ni&&R.forceSinglePass===!1?(R.side=St,R.needsUpdate=!0,Ja(R,W,Q),R.side=_s,R.needsUpdate=!0,Ja(R,W,Q),R.side=ni):Ja(R,W,Q)}this.compile=function(R,W,Q=null){Q===null&&(Q=R),m=se.get(Q),m.init(),T.push(m),Q.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),R!==Q&&R.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(_._useLegacyLights);const ee=new Set;return R.traverse(function(J){const ye=J.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const Le=ye[Ae];ht(Le,Q,J),ee.add(Le)}else ht(ye,Q,J),ee.add(ye)}),T.pop(),m=null,ee},this.compileAsync=function(R,W,Q=null){const ee=this.compile(R,W,Q);return new Promise(J=>{function ye(){if(ee.forEach(function(Ae){M.get(Ae).currentProgram.isReady()&&ee.delete(Ae)}),ee.size===0){J(R);return}setTimeout(ye,10)}L.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let It=null;function lt(R){It&&It(R)}function xt(){fn.stop()}function bt(){fn.start()}const fn=new _S;fn.setAnimationLoop(lt),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(R){It=R,y.setAnimationLoop(R),R===null?fn.stop():fn.start()},y.addEventListener("sessionstart",xt),y.addEventListener("sessionend",bt),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),y.enabled===!0&&y.isPresenting===!0&&(y.cameraAutoUpdate===!0&&y.updateCamera(W),W=y.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,W,w),m=se.get(R,T.length),m.init(),T.push(m),_e.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),je.setFromProjectionMatrix(_e),de=this.localClippingEnabled,ne=fe.init(this.clippingPlanes,de),v=he.get(R,d.length),v.init(),d.push(v),wn(R,W,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(k,le),this.info.render.frame++,ne===!0&&fe.beginShadows();const Q=m.state.shadowsArray;if(Se.render(Q,R,W),ne===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(y.enabled===!1||y.isPresenting===!1||y.hasDepthSensing()===!1)&&ge.render(v,R),m.setupLights(_._useLegacyLights),W.isArrayCamera){const ee=W.cameras;for(let J=0,ye=ee.length;J<ye;J++){const Ae=ee[J];Ui(v,R,Ae,Ae.viewport)}}else Ui(v,R,W);w!==null&&(S.updateMultisampleRenderTarget(w),S.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(_,R,W),Ze.resetDefaultState(),P=-1,x=null,T.pop(),T.length>0?m=T[T.length-1]:m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function wn(R,W,Q,ee){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||je.intersectsSprite(R)){ee&&Ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_e);const Ae=ie.update(R),Le=R.material;Le.visible&&v.push(R,Ae,Le,Q,Ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||je.intersectsObject(R))){const Ae=ie.update(R),Le=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ce.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ce.copy(Ae.boundingSphere.center)),Ce.applyMatrix4(R.matrixWorld).applyMatrix4(_e)),Array.isArray(Le)){const Oe=Ae.groups;for(let Ve=0,ke=Oe.length;Ve<ke;Ve++){const ze=Oe[Ve],yt=Le[ze.materialIndex];yt&&yt.visible&&v.push(R,Ae,yt,Q,Ce.z,ze)}}else Le.visible&&v.push(R,Ae,Le,Q,Ce.z,null)}}const ye=R.children;for(let Ae=0,Le=ye.length;Ae<Le;Ae++)wn(ye[Ae],W,Q,ee)}function Ui(R,W,Q,ee){const J=R.opaque,ye=R.transmissive,Ae=R.transparent;m.setupLightsView(Q),ne===!0&&fe.setGlobalState(_.clippingPlanes,Q),ye.length>0&&yr(J,ye,W,Q),ee&&V.viewport(E.copy(ee)),J.length>0&&Ms(J,W,Q),ye.length>0&&Ms(ye,W,Q),Ae.length>0&&Ms(Ae,W,Q),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function yr(R,W,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new cr(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?Dc:us,minFilter:Xs,samples:4,stencilBuffer:r});const Ve=M.get(m.state.transmissionRenderTarget);Ve.__isTransmissionRenderTarget=!0}const ye=m.state.transmissionRenderTarget;_.getDrawingBufferSize(pe),ye.setSize(pe.x,pe.y);const Ae=_.getRenderTarget();_.setRenderTarget(ye),_.getClearColor(N),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear();const Le=_.toneMapping;_.toneMapping=cs,Ms(R,Q,ee),S.updateMultisampleRenderTarget(ye),S.updateRenderTargetMipmap(ye);let Oe=!1;for(let Ve=0,ke=W.length;Ve<ke;Ve++){const ze=W[Ve],yt=ze.object,hn=ze.geometry,Ot=ze.material,pi=ze.group;if(Ot.side===ni&&yt.layers.test(ee.layers)){const mt=Ot.side;Ot.side=St,Ot.needsUpdate=!0,dp(yt,Q,ee,hn,Ot,pi),Ot.side=mt,Ot.needsUpdate=!0,Oe=!0}}Oe===!0&&(S.updateMultisampleRenderTarget(ye),S.updateRenderTargetMipmap(ye)),_.setRenderTarget(Ae),_.setClearColor(N,G),_.toneMapping=Le}function Ms(R,W,Q){const ee=W.isScene===!0?W.overrideMaterial:null;for(let J=0,ye=R.length;J<ye;J++){const Ae=R[J],Le=Ae.object,Oe=Ae.geometry,Ve=ee===null?Ae.material:ee,ke=Ae.group;Le.layers.test(Q.layers)&&dp(Le,W,Q,Oe,Ve,ke)}}function dp(R,W,Q,ee,J,ye){R.onBeforeRender(_,W,Q,ee,J,ye),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(_,W,Q,ee,R,ye),J.transparent===!0&&J.side===ni&&J.forceSinglePass===!1?(J.side=St,J.needsUpdate=!0,_.renderBufferDirect(Q,W,ee,J,R,ye),J.side=_s,J.needsUpdate=!0,_.renderBufferDirect(Q,W,ee,J,R,ye),J.side=ni):_.renderBufferDirect(Q,W,ee,J,R,ye),R.onAfterRender(_,W,Q,ee,J,ye)}function Ja(R,W,Q){W.isScene!==!0&&(W=Pe);const ee=M.get(R),J=m.state.lights,ye=m.state.shadowsArray,Ae=J.state.version,Le=Y.getParameters(R,J.state,ye,W,Q),Oe=Y.getProgramCacheKey(Le);let Ve=ee.programs;ee.environment=R.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(R.isMeshStandardMaterial?F:O).get(R.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Ve===void 0&&(R.addEventListener("dispose",Me),Ve=new Map,ee.programs=Ve);let ke=Ve.get(Oe);if(ke!==void 0){if(ee.currentProgram===ke&&ee.lightsStateVersion===Ae)return mp(R,Le),ke}else Le.uniforms=Y.getUniforms(R),R.onBuild(Q,Le,_),R.onBeforeCompile(Le,_),ke=Y.acquireProgram(Le,Oe),Ve.set(Oe,ke),ee.uniforms=Le.uniforms;const ze=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=fe.uniform),mp(R,Le),ee.needsLights=OS(R),ee.lightsStateVersion=Ae,ee.needsLights&&(ze.ambientLightColor.value=J.state.ambient,ze.lightProbe.value=J.state.probe,ze.directionalLights.value=J.state.directional,ze.directionalLightShadows.value=J.state.directionalShadow,ze.spotLights.value=J.state.spot,ze.spotLightShadows.value=J.state.spotShadow,ze.rectAreaLights.value=J.state.rectArea,ze.ltc_1.value=J.state.rectAreaLTC1,ze.ltc_2.value=J.state.rectAreaLTC2,ze.pointLights.value=J.state.point,ze.pointLightShadows.value=J.state.pointShadow,ze.hemisphereLights.value=J.state.hemi,ze.directionalShadowMap.value=J.state.directionalShadowMap,ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ze.spotShadowMap.value=J.state.spotShadowMap,ze.spotLightMatrix.value=J.state.spotLightMatrix,ze.spotLightMap.value=J.state.spotLightMap,ze.pointShadowMap.value=J.state.pointShadowMap,ze.pointShadowMatrix.value=J.state.pointShadowMatrix),ee.currentProgram=ke,ee.uniformsList=null,ke}function pp(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=rc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function mp(R,W){const Q=M.get(R);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function DS(R,W,Q,ee,J){W.isScene!==!0&&(W=Pe),S.resetTextureUnits();const ye=W.fog,Ae=ee.isMeshStandardMaterial?W.environment:null,Le=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:bs,Oe=(ee.isMeshStandardMaterial?F:O).get(ee.envMap||Ae),Ve=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ke=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),ze=!!Q.morphAttributes.position,yt=!!Q.morphAttributes.normal,hn=!!Q.morphAttributes.color;let Ot=cs;ee.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ot=_.toneMapping);const pi=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,mt=pi!==void 0?pi.length:0,We=M.get(ee),Tu=m.state.lights;if(ne===!0&&(de===!0||R!==x)){const Cn=R===x&&ee.id===P;fe.setState(ee,R,Cn)}let dt=!1;ee.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Tu.state.version||We.outputColorSpace!==Le||J.isBatchedMesh&&We.batching===!1||!J.isBatchedMesh&&We.batching===!0||J.isInstancedMesh&&We.instancing===!1||!J.isInstancedMesh&&We.instancing===!0||J.isSkinnedMesh&&We.skinning===!1||!J.isSkinnedMesh&&We.skinning===!0||J.isInstancedMesh&&We.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&We.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&We.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&We.instancingMorph===!1&&J.morphTexture!==null||We.envMap!==Oe||ee.fog===!0&&We.fog!==ye||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==fe.numPlanes||We.numIntersection!==fe.numIntersection)||We.vertexAlphas!==Ve||We.vertexTangents!==ke||We.morphTargets!==ze||We.morphNormals!==yt||We.morphColors!==hn||We.toneMapping!==Ot||We.morphTargetsCount!==mt)&&(dt=!0):(dt=!0,We.__version=ee.version);let As=We.currentProgram;dt===!0&&(As=Ja(ee,W,J));let gp=!1,Vo=!1,Mu=!1;const zt=As.getUniforms(),Fi=We.uniforms;if(V.useProgram(As.program)&&(gp=!0,Vo=!0,Mu=!0),ee.id!==P&&(P=ee.id,Vo=!0),gp||x!==R){zt.setValue(X,"projectionMatrix",R.projectionMatrix),zt.setValue(X,"viewMatrix",R.matrixWorldInverse);const Cn=zt.map.cameraPosition;Cn!==void 0&&Cn.setValue(X,Ce.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&zt.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&zt.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),x!==R&&(x=R,Vo=!0,Mu=!0)}if(J.isSkinnedMesh){zt.setOptional(X,J,"bindMatrix"),zt.setOptional(X,J,"bindMatrixInverse");const Cn=J.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),zt.setValue(X,"boneTexture",Cn.boneTexture,S))}J.isBatchedMesh&&(zt.setOptional(X,J,"batchingTexture"),zt.setValue(X,"batchingTexture",J._matricesTexture,S));const Au=Q.morphAttributes;if((Au.position!==void 0||Au.normal!==void 0||Au.color!==void 0)&&Ee.update(J,Q,As),(Vo||We.receiveShadow!==J.receiveShadow)&&(We.receiveShadow=J.receiveShadow,zt.setValue(X,"receiveShadow",J.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Fi.envMap.value=Oe,Fi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&W.environment!==null&&(Fi.envMapIntensity.value=W.environmentIntensity),Vo&&(zt.setValue(X,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&IS(Fi,Mu),ye&&ee.fog===!0&&ae.refreshFogUniforms(Fi,ye),ae.refreshMaterialUniforms(Fi,ee,K,z,m.state.transmissionRenderTarget),rc.upload(X,pp(We),Fi,S)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(rc.upload(X,pp(We),Fi,S),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&zt.setValue(X,"center",J.center),zt.setValue(X,"modelViewMatrix",J.modelViewMatrix),zt.setValue(X,"normalMatrix",J.normalMatrix),zt.setValue(X,"modelMatrix",J.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Cn=ee.uniformsGroups;for(let wu=0,US=Cn.length;wu<US;wu++){const _p=Cn[wu];Ie.update(_p,As),Ie.bind(_p,As)}}return As}function IS(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function OS(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,W,Q){M.get(R.texture).__webglTexture=W,M.get(R.depthTexture).__webglTexture=Q;const ee=M.get(R);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const Q=M.get(R);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,Q=0){w=R,C=W,A=Q;let ee=!0,J=null,ye=!1,Ae=!1;if(R){const Oe=M.get(R);Oe.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(X.FRAMEBUFFER,null),ee=!1):Oe.__webglFramebuffer===void 0?S.setupRenderTarget(R):Oe.__hasExternalTextures&&S.rebindTextures(R,M.get(R.texture).__webglTexture,M.get(R.depthTexture).__webglTexture);const Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const ke=M.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[W])?J=ke[W][Q]:J=ke[W],ye=!0):R.samples>0&&S.useMultisampledRTT(R)===!1?J=M.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?J=ke[Q]:J=ke,E.copy(R.viewport),D.copy(R.scissor),I=R.scissorTest}else E.copy(ce).multiplyScalar(K).floor(),D.copy(xe).multiplyScalar(K).floor(),I=we;if(V.bindFramebuffer(X.FRAMEBUFFER,J)&&ee&&V.drawBuffers(R,J),V.viewport(E),V.scissor(D),V.setScissorTest(I),ye){const Oe=M.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,Q)}else if(Ae){const Oe=M.get(R.texture),Ve=W||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Oe.__webglTexture,Q||0,Ve)}P=-1},this.readRenderTargetPixels=function(R,W,Q,ee,J,ye,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){V.bindFramebuffer(X.FRAMEBUFFER,Le);try{const Oe=R.texture,Ve=Oe.format,ke=Oe.type;if(Ve!==ri&&Ye.convert(Ve)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=ke===Dc&&(L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float"));if(ke!==us&&Ye.convert(ke)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&ke!==ss&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-ee&&Q>=0&&Q<=R.height-J&&X.readPixels(W,Q,ee,J,Ye.convert(Ve),Ye.convert(ke),ye)}finally{const Oe=w!==null?M.get(w).__webglFramebuffer:null;V.bindFramebuffer(X.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(R,W,Q=0){const ee=Math.pow(2,-Q),J=Math.floor(W.image.width*ee),ye=Math.floor(W.image.height*ee);S.setTexture2D(W,0),X.copyTexSubImage2D(X.TEXTURE_2D,Q,0,0,R.x,R.y,J,ye),V.unbindTexture()},this.copyTextureToTexture=function(R,W,Q,ee=0){const J=W.image.width,ye=W.image.height,Ae=Ye.convert(Q.format),Le=Ye.convert(Q.type);S.setTexture2D(Q,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Q.unpackAlignment),W.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ee,R.x,R.y,J,ye,Ae,Le,W.image.data):W.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ee,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,Ae,W.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,ee,R.x,R.y,Ae,Le,W.image),ee===0&&Q.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(R,W,Q,ee,J=0){const ye=Math.round(R.max.x-R.min.x),Ae=Math.round(R.max.y-R.min.y),Le=R.max.z-R.min.z+1,Oe=Ye.convert(ee.format),Ve=Ye.convert(ee.type);let ke;if(ee.isData3DTexture)S.setTexture3D(ee,0),ke=X.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)S.setTexture2DArray(ee,0),ke=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ee.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ee.unpackAlignment);const ze=X.getParameter(X.UNPACK_ROW_LENGTH),yt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),hn=X.getParameter(X.UNPACK_SKIP_PIXELS),Ot=X.getParameter(X.UNPACK_SKIP_ROWS),pi=X.getParameter(X.UNPACK_SKIP_IMAGES),mt=Q.isCompressedTexture?Q.mipmaps[J]:Q.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,mt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,mt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,R.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,R.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,R.min.z),Q.isDataTexture||Q.isData3DTexture?X.texSubImage3D(ke,J,W.x,W.y,W.z,ye,Ae,Le,Oe,Ve,mt.data):ee.isCompressedArrayTexture?X.compressedTexSubImage3D(ke,J,W.x,W.y,W.z,ye,Ae,Le,Oe,mt.data):X.texSubImage3D(ke,J,W.x,W.y,W.z,ye,Ae,Le,Oe,Ve,mt),X.pixelStorei(X.UNPACK_ROW_LENGTH,ze),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,yt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,hn),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ot),X.pixelStorei(X.UNPACK_SKIP_IMAGES,pi),J===0&&ee.generateMipmaps&&X.generateMipmap(ke),V.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?S.setTextureCube(R,0):R.isData3DTexture?S.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?S.setTexture2DArray(R,0):S.setTexture2D(R,0),V.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,V.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===np?"display-p3":"srgb",n.unpackColorSpace=ct.workingColorSpace===Su?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class MS extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class lp extends Ts{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new j,h=new j,p=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){const T=[],_=d/i;let b=0;d===0&&o===0?b=.5/n:d===i&&l===Math.PI&&(b=-.5/n);for(let C=0;C<=n;C++){const A=C/n;f.x=-e*Math.cos(s+A*r)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(s+A*r)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(A+b,1-_),T.push(c++)}u.push(T)}for(let d=0;d<i;d++)for(let T=0;T<n;T++){const _=u[d][T+1],b=u[d][T],C=u[d+1][T],A=u[d+1][T+1];(d!==0||o>0)&&p.push(_,b,A),(d!==i-1||l<Math.PI)&&p.push(b,C,A)}this.setIndex(p),this.setAttribute("position",new ci(g,3)),this.setAttribute("normal",new ci(v,3)),this.setAttribute("uv",new ci(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const F_={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class h3{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const d3=new h3;class cp{constructor(e){this.manager=e!==void 0?e:d3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}cp.DEFAULT_MATERIAL_NAME="__DEFAULT";class p3 extends cp{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=F_.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0),o;const a=Pa("img");function l(){u(),F_.add(e,this),n&&n(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class m3 extends cp{constructor(e){super(e)}load(e,n,i,s){const r=new nn,o=new p3(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}const B_=new At;class g3{constructor(e,n,i=0,s=1/0){this.ray=new rp(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new op,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return B_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(B_),this}intersectObject(e,n=!0,i=[]){return Lh(e,this,i,n),i.sort(k_),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Lh(e[s],this,i,n);return i.sort(k_),i}}function k_(t,e){return t.distance-e.distance}function Lh(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const s=t.children;for(let r=0,o=s.length;r<o;r++)Lh(s[r],e,n,!0)}}class H_{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);const V_={type:"change"},Ff={type:"start"},z_={type:"end"},Wl=new rp,G_=new ns,_3=Math.cos(70*tI.DEG2RAD);class v3 extends Er{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",fe),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",fe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(V_),i.update(),r=s.NONE},this.update=function(){const y=new j,Z=new ur().setFromUnitVectors(e.up,new j(0,1,0)),re=Z.clone().invert(),me=new j,Me=new ur,Je=new j,Ke=2*Math.PI;return function(It=null){const lt=i.object.position;y.copy(lt).sub(i.target),y.applyQuaternion(Z),a.setFromVector3(y),i.autoRotate&&r===s.NONE&&I(E(It)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let xt=i.minAzimuthAngle,bt=i.maxAzimuthAngle;isFinite(xt)&&isFinite(bt)&&(xt<-Math.PI?xt+=Ke:xt>Math.PI&&(xt-=Ke),bt<-Math.PI?bt+=Ke:bt>Math.PI&&(bt-=Ke),xt<=bt?a.theta=Math.max(xt,Math.min(bt,a.theta)):a.theta=a.theta>(xt+bt)/2?Math.max(xt,a.theta):Math.min(bt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let fn=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)a.radius=ce(a.radius);else{const wn=a.radius;a.radius=ce(a.radius*c),fn=wn!=a.radius}if(y.setFromSpherical(a),y.applyQuaternion(re),lt.copy(i.target).add(y),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&A){let wn=null;if(i.object.isPerspectiveCamera){const Ui=y.length();wn=ce(Ui*c);const yr=Ui-wn;i.object.position.addScaledVector(b,yr),i.object.updateMatrixWorld(),fn=!!yr}else if(i.object.isOrthographicCamera){const Ui=new j(C.x,C.y,0);Ui.unproject(i.object);const yr=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),fn=yr!==i.object.zoom;const Ms=new j(C.x,C.y,0);Ms.unproject(i.object),i.object.position.sub(Ms).add(Ui),i.object.updateMatrixWorld(),wn=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;wn!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(wn).add(i.object.position):(Wl.origin.copy(i.object.position),Wl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Wl.direction))<_3?e.lookAt(i.target):(G_.setFromNormalAndCoplanarPoint(i.object.up,i.target),Wl.intersectPlane(G_,i.target))))}else if(i.object.isOrthographicCamera){const wn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),wn!==i.object.zoom&&(i.object.updateProjectionMatrix(),fn=!0)}return c=1,A=!1,fn||me.distanceToSquared(i.object.position)>o||8*(1-Me.dot(i.object.quaternion))>o||Je.distanceToSquared(i.target)>o?(i.dispatchEvent(V_),me.copy(i.object.position),Me.copy(i.object.quaternion),Je.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ee),i.domElement.removeEventListener("pointerdown",O),i.domElement.removeEventListener("pointercancel",H),i.domElement.removeEventListener("wheel",Y),i.domElement.removeEventListener("pointermove",F),i.domElement.removeEventListener("pointerup",H),i.domElement.getRootNode().removeEventListener("keydown",he,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",fe),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new H_,l=new H_;let c=1;const u=new j,f=new Be,h=new Be,p=new Be,g=new Be,v=new Be,m=new Be,d=new Be,T=new Be,_=new Be,b=new j,C=new Be;let A=!1;const w=[],P={};let x=!1;function E(y){return y!==null?2*Math.PI/60*i.autoRotateSpeed*y:2*Math.PI/60/60*i.autoRotateSpeed}function D(y){const Z=Math.abs(y*.01);return Math.pow(.95,i.zoomSpeed*Z)}function I(y){l.theta-=y}function N(y){l.phi-=y}const G=function(){const y=new j;return function(re,me){y.setFromMatrixColumn(me,0),y.multiplyScalar(-re),u.add(y)}}(),q=function(){const y=new j;return function(re,me){i.screenSpacePanning===!0?y.setFromMatrixColumn(me,1):(y.setFromMatrixColumn(me,0),y.crossVectors(i.object.up,y)),y.multiplyScalar(re),u.add(y)}}(),z=function(){const y=new j;return function(re,me){const Me=i.domElement;if(i.object.isPerspectiveCamera){const Je=i.object.position;y.copy(Je).sub(i.target);let Ke=y.length();Ke*=Math.tan(i.object.fov/2*Math.PI/180),G(2*re*Ke/Me.clientHeight,i.object.matrix),q(2*me*Ke/Me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(G(re*(i.object.right-i.object.left)/i.object.zoom/Me.clientWidth,i.object.matrix),q(me*(i.object.top-i.object.bottom)/i.object.zoom/Me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function K(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function k(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function le(y,Z){if(!i.zoomToCursor)return;A=!0;const re=i.domElement.getBoundingClientRect(),me=y-re.left,Me=Z-re.top,Je=re.width,Ke=re.height;C.x=me/Je*2-1,C.y=-(Me/Ke)*2+1,b.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function ce(y){return Math.max(i.minDistance,Math.min(i.maxDistance,y))}function xe(y){f.set(y.clientX,y.clientY)}function we(y){le(y.clientX,y.clientX),d.set(y.clientX,y.clientY)}function je(y){g.set(y.clientX,y.clientY)}function ne(y){h.set(y.clientX,y.clientY),p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const Z=i.domElement;I(2*Math.PI*p.x/Z.clientHeight),N(2*Math.PI*p.y/Z.clientHeight),f.copy(h),i.update()}function de(y){T.set(y.clientX,y.clientY),_.subVectors(T,d),_.y>0?K(D(_.y)):_.y<0&&k(D(_.y)),d.copy(T),i.update()}function _e(y){v.set(y.clientX,y.clientY),m.subVectors(v,g).multiplyScalar(i.panSpeed),z(m.x,m.y),g.copy(v),i.update()}function pe(y){le(y.clientX,y.clientY),y.deltaY<0?k(D(y.deltaY)):y.deltaY>0&&K(D(y.deltaY)),i.update()}function Ce(y){let Z=!1;switch(y.code){case i.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),Z=!0;break;case i.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),Z=!0;break;case i.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),Z=!0;break;case i.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),Z=!0;break}Z&&(y.preventDefault(),i.update())}function Pe(y){if(w.length===1)f.set(y.pageX,y.pageY);else{const Z=Ie(y),re=.5*(y.pageX+Z.x),me=.5*(y.pageY+Z.y);f.set(re,me)}}function De(y){if(w.length===1)g.set(y.pageX,y.pageY);else{const Z=Ie(y),re=.5*(y.pageX+Z.x),me=.5*(y.pageY+Z.y);g.set(re,me)}}function X(y){const Z=Ie(y),re=y.pageX-Z.x,me=y.pageY-Z.y,Me=Math.sqrt(re*re+me*me);d.set(0,Me)}function Ue(y){i.enableZoom&&X(y),i.enablePan&&De(y)}function L(y){i.enableZoom&&X(y),i.enableRotate&&Pe(y)}function U(y){if(w.length==1)h.set(y.pageX,y.pageY);else{const re=Ie(y),me=.5*(y.pageX+re.x),Me=.5*(y.pageY+re.y);h.set(me,Me)}p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const Z=i.domElement;I(2*Math.PI*p.x/Z.clientHeight),N(2*Math.PI*p.y/Z.clientHeight),f.copy(h)}function V(y){if(w.length===1)v.set(y.pageX,y.pageY);else{const Z=Ie(y),re=.5*(y.pageX+Z.x),me=.5*(y.pageY+Z.y);v.set(re,me)}m.subVectors(v,g).multiplyScalar(i.panSpeed),z(m.x,m.y),g.copy(v)}function te(y){const Z=Ie(y),re=y.pageX-Z.x,me=y.pageY-Z.y,Me=Math.sqrt(re*re+me*me);T.set(0,Me),_.set(0,Math.pow(T.y/d.y,i.zoomSpeed)),K(_.y),d.copy(T);const Je=(y.pageX+Z.x)*.5,Ke=(y.pageY+Z.y)*.5;le(Je,Ke)}function M(y){i.enableZoom&&te(y),i.enablePan&&V(y)}function S(y){i.enableZoom&&te(y),i.enableRotate&&U(y)}function O(y){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(y.pointerId),i.domElement.addEventListener("pointermove",F),i.domElement.addEventListener("pointerup",H)),!Ye(y)&&(Fe(y),y.pointerType==="touch"?Se(y):B(y)))}function F(y){i.enabled!==!1&&(y.pointerType==="touch"?ge(y):ie(y))}function H(y){switch(qe(y),w.length){case 0:i.domElement.releasePointerCapture(y.pointerId),i.domElement.removeEventListener("pointermove",F),i.domElement.removeEventListener("pointerup",H),i.dispatchEvent(z_),r=s.NONE;break;case 1:const Z=w[0],re=P[Z];Se({pointerId:Z,pageX:re.x,pageY:re.y});break}}function B(y){let Z;switch(y.button){case 0:Z=i.mouseButtons.LEFT;break;case 1:Z=i.mouseButtons.MIDDLE;break;case 2:Z=i.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Tr.DOLLY:if(i.enableZoom===!1)return;we(y),r=s.DOLLY;break;case Tr.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enablePan===!1)return;je(y),r=s.PAN}else{if(i.enableRotate===!1)return;xe(y),r=s.ROTATE}break;case Tr.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enableRotate===!1)return;xe(y),r=s.ROTATE}else{if(i.enablePan===!1)return;je(y),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Ff)}function ie(y){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;ne(y);break;case s.DOLLY:if(i.enableZoom===!1)return;de(y);break;case s.PAN:if(i.enablePan===!1)return;_e(y);break}}function Y(y){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(y.preventDefault(),i.dispatchEvent(Ff),pe(ae(y)),i.dispatchEvent(z_))}function ae(y){const Z=y.deltaMode,re={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(Z){case 1:re.deltaY*=16;break;case 2:re.deltaY*=100;break}return y.ctrlKey&&!x&&(re.deltaY*=10),re}function he(y){y.key==="Control"&&(x=!0,i.domElement.getRootNode().addEventListener("keyup",se,{passive:!0,capture:!0}))}function se(y){y.key==="Control"&&(x=!1,i.domElement.getRootNode().removeEventListener("keyup",se,{passive:!0,capture:!0}))}function fe(y){i.enabled===!1||i.enablePan===!1||Ce(y)}function Se(y){switch(Ze(y),w.length){case 1:switch(i.touches.ONE){case Mr.ROTATE:if(i.enableRotate===!1)return;Pe(y),r=s.TOUCH_ROTATE;break;case Mr.PAN:if(i.enablePan===!1)return;De(y),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Mr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ue(y),r=s.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;L(y),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Ff)}function ge(y){switch(Ze(y),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;U(y),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;V(y),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;M(y),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;S(y),i.update();break;default:r=s.NONE}}function Ee(y){i.enabled!==!1&&y.preventDefault()}function Fe(y){w.push(y.pointerId)}function qe(y){delete P[y.pointerId];for(let Z=0;Z<w.length;Z++)if(w[Z]==y.pointerId){w.splice(Z,1);return}}function Ye(y){for(let Z=0;Z<w.length;Z++)if(w[Z]==y.pointerId)return!0;return!1}function Ze(y){let Z=P[y.pointerId];Z===void 0&&(Z=new Be,P[y.pointerId]=Z),Z.set(y.pageX,y.pageY)}function Ie(y){const Z=y.pointerId===w[0]?w[1]:w[0];return P[Z]}i.domElement.addEventListener("contextmenu",Ee),i.domElement.addEventListener("pointerdown",O),i.domElement.addEventListener("pointercancel",H),i.domElement.addEventListener("wheel",Y,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",he,{passive:!0,capture:!0}),this.update()}}const AS=oy({});AS.component("example-component",DN);AS.mount("#app");const E3=document.getElementById("mapa");let Es=new MS,Za=new vn(90,window.innerWidth/window.innerHeight,.1,1e3),up=new TS({antialias:!0});up.setSize(1250,600);E3.appendChild(up.domElement);let Bc=new g3,ao=new Be;function y3(t){ao.x=t.clientX/window.innerWidth*2-1,ao.y=-(t.clientY/window.innerHeight)*2+1,Bc.setFromCamera(ao,Za);let e=Bc.intersectObjects(Es.children,!0);Es.children.forEach(function(n){n.userData.isHighlightable&&(e.length>0&&n===e[0].object?n.material.color.setHex(n.userData.highlightColor):n.material.color.setHex(n.userData.originalColor))})}window.addEventListener("mousemove",y3,!1);function Bo(t,e,n,i,s,r,o){let a=new Qn({color:e}),l=new In(t,a);return l.position.set(n,i,0),s&&(l.rotation.z=s),l.userData={isHighlightable:!0,originalColor:e,highlightColor:r,name:o,originalPosition:{x:n,y:i}},Es.add(l),l.addEventListener("click",function(){CS(l)}),l}Bo(new di(5,2),13161476,0,2,0,15919831,"Neuroscience Area");Bo(new di(3,1),4211780,2,.5,0,15919831,"Alexion Area");Bo(new di(3,1),16296964,-1,.5,0,15919831,"Respiratory Area");Bo(new di(3,1),7394524,3,2.5,1.57,15919831,"Oncology Area");Bo(new di(5,1),6833268,0,3.5,0,15919831,"Vaccine Area");Bo(new di(4,1),14156908,-3,2,1.57,15919831,"Cardio Area");Za.position.z=3;Za.position.y=2;function wS(){requestAnimationFrame(wS),up.render(Es,Za)}function CS(t){x3(t)}function S3(t){ao.x=t.clientX/window.innerWidth*2-1,ao.y=-(t.clientY/window.innerHeight)*2+1,Bc.setFromCamera(ao,Za);let e=Bc.intersectObjects(Es.children);if(e.length>0){let n=e[0].object;n.userData.isHighlightable&&CS(n)}}window.addEventListener("click",S3,!1);function RS(t,e){t.position.y>e?(t.position.y-=.1,requestAnimationFrame(function(){RS(t,e)})):(PS(),b3())}function x3(t){let e=window.innerWidth/window.innerHeight+2,n=t.position.y;Es.children.forEach(function(s){s!==t&&s.userData.isHighlightable&&(s.visible=!1)});let i=function(){if(t.userData.name!=="Lab"&&t.userData.name!=="Office")t.position.y<e?(t.position.y+=.1,requestAnimationFrame(i)):W_(t.userData.name,t,n);else{let s=window.innerWidth/window.innerHeight+1;t.position.y<s?(t.position.y+=.1,requestAnimationFrame(i)):W_(t.userData.name,t,n)}};i()}function W_(t,e,n){let i=document.createElement("div");i.className="additional-info",i.style.position="absolute",i.style.top="900px",i.style.left="17%",i.style.transform="translateX(-50%)",i.style.background="linear-gradient(135deg, #2980b9, #2c3e50)",i.style.padding="20px",i.style.borderRadius="10px",i.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.5)",i.style.color="#fff",document.body.appendChild(i);let s=document.createElement("button");s.textContent="Cerrar",s.style.position="absolute",s.style.top="10px",s.style.right="10px",s.style.padding="5px 10px",s.style.background="#c0392b",s.style.border="none",s.style.borderRadius="5px",s.style.color="#fff",s.style.cursor="pointer",s.addEventListener("click",function(c){c.stopPropagation(),RS(e,n),PS()}),i.appendChild(s);let r=document.createElement("button");r.textContent="Ir a la página",r.style.marginTop="20px",r.addEventListener("click",function(c){c.stopPropagation(),$("#bmodal").click()}),i.appendChild(r);let o=document.createElement("h1");o.textContent=t,o.style.marginBottom="10px",i.appendChild(o);let a=document.createElement("p");if(e.userData.name=="Oncology Area"){a.textContent=sn.areas[0].areaDescription,i.appendChild(a);let c=document.createElement("p");c.textContent="Group Leader: "+sn.areas[0].mainLeader,i.appendChild(c);let u=document.createElement("p");u.textContent="Leader mail: "+sn.areas[0].mainLeaderMail,i.appendChild(u);let f=document.createElement("div");f.innerHTML="<h3>Subteams: </h3><p> "+sn.areas[0].subteams[0].subTeam+"</p><p>"+sn.areas[0].subteams[0].supportMail+"</p></br><p>"+sn.areas[0].subteams[1].subTeam+"</p><p>"+sn.areas[0].subteams[1].supportMail+"</p>",i.appendChild(f)}let l=document.createElement("p");if(e.userData.name=="Neuroscience Area"){l.textContent=sn.areas[1].areaDescription,i.appendChild(l);let c=document.createElement("p");c.textContent="Group Leader: "+sn.areas[1].mainLeader,i.appendChild(c);let u=document.createElement("p");u.textContent="Leader mail: "+sn.areas[1].mainLeaderMail,i.appendChild(u);let f=document.createElement("div");f.innerHTML="<h3>Subteams: </h3><p> "+sn.areas[1].subteams[0].subTeam+"</p><p>"+sn.areas[1].subteams[0].supportMail+"</p></br><p>"+sn.areas[1].subteams[1].subTeam+"</p><p>"+sn.areas[1].subteams[1].supportMail+"</p>",i.appendChild(f)}i.addEventListener("click",function(c){c.stopPropagation()})}function PS(){let t=document.querySelector(".additional-info");t&&t.parentNode.removeChild(t)}function b3(){Es.children.forEach(function(t){t.userData.isHighlightable&&(t.visible=!0)}),Es.children.forEach(function(t){t.userData.isHighlightable&&t.position.set(t.userData.originalPosition.x,t.userData.originalPosition.y,0)})}wS();const sn={areas:[{areaName:"Oncology Area",areaDescription:"Oncology related research",mainLeader:"Jorge Lopez",mainLeaderMail:"jorge.lopez@astrazeneca.com",subteams:[{subTeam:"Team Alpha",supportMail:"alpha.team@astrazeneca.com"},{subTeam:"Team Bravo",supportMail:"bravo.team@astrazeneca.com"}]},{areaName:"Neuroscience Area",areaDescription:"Development of brand new neuroscience experiments",mainLeader:"Ricardo Estrada",mainLeaderMail:"ricardo.estrada@astrazeneca.com",subteams:[{subTeam:"Team Charlie",supportMail:"charlie.team@astrazeneca.com"},{subTeam:"Team Delta",supportMail:"delta.team@astrazeneca.com"}]}]},fp=new MS;fp.background=new ot("#617C88");const hp=new vn(80,window.innerWidth/window.innerHeight,.1,1e3),ko=new TS({antialias:!0}),T3=document.getElementById("canvas");T3.appendChild(ko.domElement);ko.setSize(760,400);const M3=new m3().load("../img/cc_p1.jpg"),Ho=new v3(hp,ko.domElement);Ho.enablePan=!1;Ho.enableZoom=!1;Ho.enableDamping=!0;Ho.maxPolarAngle=Math.PI/2;const A3=new Uo(250,100,250),LS=[new Qn({color:"red",side:St}),new Qn({color:"blue",side:St}),new Qn({color:"green",side:St}),new Qn({color:"yellow",side:St}),new Qn({color:"purple",side:St}),new Qn({color:"brown",side:St})];LS.side=ni;new In(A3,LS);const w3=new lp(200,32,16),C3=new Qn({map:M3,side:St}),R3=new In(w3,C3);fp.add(R3);hp.position.z=100;Ho.update();ko.domElement.style.width="100%";ko.domElement.style.height="100%";function NS(){requestAnimationFrame(NS),Ho.update(),ko.render(fp,hp)}NS();
