// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_parallax(k,g,a){var c=jQuery;var f=c(this);var d=a.find(".ws_list");var b=k.parallax||0.25;var e=c("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_parallax").appendTo(a);function j(l){return Math.round(l*1000)/1000}var i=c("<div>").css({position:"absolute",left:0,top:0,overflow:"hidden",width:"100%",height:"100%",transform:"translate3d(0,0,0)"}).appendTo(e);var h=i.clone().appendTo(e);this.go=function(l,r,p){var s=c(g.get(r));s={width:s.width(),height:s.height(),marginTop:s.css("marginTop"),marginLeft:s.css("marginLeft")};p=p?1:-1;var n=c(g.get(r)).clone().css(s).appendTo(i);var o=c(g.get(l)).clone().css(s).appendTo(h);var m=a.width()||k.width;var q=a.height()||k.height;d.hide();wowAnimate(function(v){v=c.easing.swing(v);var x=j(p*v*m),u=j(p*(-m+v*m)),t=j(-p*m*b*v),w=j(p*m*b*(1-v));if(k.support.transform){i.css("transform","translate3d("+x+"px,0,0)");n.css("transform","translate3d("+t+"px,0,0)");h.css("transform","translate3d("+u+"px,0,0)");o.css("transform","translate3d("+w+"px,0,0)")}else{i.css("left",x);n.css("margin-left",t);h.css("left",u);o.css("margin-left",w)}},0,1,k.duration,function(){e.hide();n.remove();o.remove();f.trigger("effectEnd")})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_collage(r,I,A){var y=jQuery,f=y(this),C=y(".ws_list",A),m=r.maxQuality||true,u=r.maxPreload||20,E=!r.noCanvas&&document.createElement("canvas").getContext,e=10,F=false,M=0.3,l=0.7,w=-180,a=180,d=I.length,S=[];var v=y("<div>").addClass("ws_effect ws_collage").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,overflow:"hidden","z-index":8}).appendTo(A);function H(x,j,i){return parseFloat(i*(j-x)+x)}function R(W,V,N){var i=N*V.x,X=N*V.y,j=N*V.width,U=N*V.height;if(E){W.save();W.translate(i+0.5*j,X+0.5*U);W.rotate(V.angle*Math.PI/180);W.scale(V.scale,V.scale);if(V.img){W.drawImage(V.img,-0.5*j,-0.5*U,j,U)}W.restore()}else{y("<img>").attr("src",V.img).css({position:"absolute",width:100*j/r.width+"%",height:100*U/r.height+"%",left:100*i/r.width+"%",top:100*X/r.height+"%"}).appendTo(W)}}function c(V,Y,U,N,W,Z){var x=S[V],X=S[Y],i=new Date;if(E){var j=y(I[Y]);j={width:j.width(),height:j.height(),marginTop:parseFloat(j.css("marginTop")),marginLeft:parseFloat(j.css("marginLeft"))};y(t).css(j)}wowAnimate(function(aa){var aj=1-2*aa;if(aj<0){aj*=-1;if(aj>1){aj=1}}aj=jQuery.easing.easeInOutQuad(1,aj,0,1,1);aa=jQuery.easing.easeInOutQuad(1,aa,0,1,1);if(E){o.width=N;o.height=W;t.width=N;t.height=W;var ab=H(r.width/X.width,r.width/x.width,aa),ac=H(0.5,H(1/X.scale,1/x.scale,aa),aj),ag=H(1/X.scale,1/x.scale,aa),ah=H(X.angle,x.angle,aa),ai=U*x.width,ad=U*x.height,af=U*H(X.x,x.x,aa),ae=U*H(X.y,x.y,aa);if(Q&&k){o.ctx.drawImage(k,0,0,N,W);o.ctx.save();o.ctx.translate(af+0.5*ai,ae+0.5*ad);o.ctx.rotate(-ah*Math.PI/180);o.ctx.scale(ag,ag);o.ctx.translate(-(af+0.5*ai),-(ae+0.5*ad));o.ctx.transform(ag,0,0,ag,-af*ag,-ae*ag);o.ctx.drawImage(k,-N,-W,N*4,W*4);o.ctx.restore()}o.ctx.transform(ab,0,0,ab,-af*ab,-ae*ab);o.ctx.translate(af+0.5*ai,ae+0.5*ad);o.ctx.rotate(-ah*Math.PI/180);o.ctx.scale(ac,ac);o.ctx.translate(-(af+0.5*ai),-(ae+0.5*ad));o.ctx.globalAlpha=H(0.2,1,aj);if(m){for(P in S){R(o.ctx,S[P],U)}}else{o.ctx.drawImage(L,0,0)}o.ctx.globalAlpha=1;o.ctx.globalAlpha=H(0,1,aj);R(o.ctx,x,U);o.ctx.globalAlpha=H(1,0,aa*2>1?1:aa*2);R(o.ctx,X,U);o.ctx.globalAlpha=1;t.ctx.drawImage(o,0,0)}else{var ak=H(2,N/(X.width*U),aj),af=-U*H(X.x,x.x,aa)*ak,ae=-U*H(X.y,x.y,aa)*ak,ai=N*ak,ad=W*ak;t.css({left:af,top:ae,width:ai,height:ad})}v.show()},0,1,r.duration,function(){Z()})}function B(V,i,U,j,N){if(V>i||!S[V]||S[V].img){return}var x=new Image();x.onload=function(){S[V].img=x;if(U&&V!=N[0]&&V!=N[1]){R(j,S[V],1);B(V+1,i,true,j,N)}else{B(V+1,i,false)}};x.onerror=function(){if(U&&V!=N[0]&&V!=N[1]){R(j,S[V],1);B(V+1,i,true,j,N)}else{B(V+1,i,false)}};x.src=I[V].src}var q=0,p=0,s=r.width/(Math.sqrt(d)+1),z=r.height/(Math.sqrt(d)+1),b=Math.floor(r.width/s);for(P=0;P<d;P++){if(s+q>s*b){p=Math.floor(s*(P+1)/r.width)*z;q=0}S[P]={x:q,y:p,width:s,height:z,img:null};if(E){S[P].scale=H(M,l,Math.random());S[P].angle=H(w,a,Math.random())}q+=parseFloat(s)}for(var O,D,P=S.length;P;O=parseInt(Math.random()*P),D=S[--P],S[P]=S[O],S[O]=D){}if(E){var t=y("<canvas>")[0];t.ctx=t.getContext("2d");t.width=v.width();t.height=v.height();var o=y("<canvas>")[0];o.ctx=o.getContext("2d");o.width=v.width();o.height=v.height();var k=y("<canvas>")[0];k.ctx=k.getContext("2d");k.width=v.width();k.height=v.height();if(!m){var L=y("<canvas>")[0];L.ctx=L.getContext("2d");L.width=v.width();L.height=v.height()}v.append(t)}else{var t=v.clone().removeClass("ws_effect").css({overflow:"visible"});v.css("display","none").append(t);for(P in S){S[P].img=I[P].src;R(t,S[P],1)}var h=(d%b=="undefined"?0:d%b);startRight=0,bottomAddCount=2*b-h,rightAddCount=Math.ceil(d/b)+1;for(var P=0;P<bottomAddCount;P++){R(t,{img:I[P%I.length].src,width:s,height:z,x:s*((h+P)%b),y:p+Math.floor((h+P)/b)*z},1)}for(var P=0;P<bottomAddCount;P++){R(t,{img:I[P%I.length].src,width:s,height:z,x:s*b,y:P*z},1)}}var G,Q;this.go=function(x,U){if(G){return -1}if(r.images){S[x].img=I[x]}if(window.XMLHttpRequest){if(E){var N=r.width,j=r.height,i=1;B(U,U,false);B(x,x,false);if(m){B(2,u+1,false)}else{L.width=N;L.height=j;B(2,u+1,true,L.ctx,[U,x])}if(!Q&&!F){rand=Math.round(H(0,d-1,Math.random()));k.width=v.width();k.height=v.height();Q=J(y(I[rand]),e,k)}}else{var N=A.width(),j=A.height(),i=N/r.width}G=new c(x,U,i,N,j,function V(){f.trigger("effectEnd");v.hide();G=0;if(!m&&E){for(i in S){S[i].img=null}}})}else{G=0;C.stop(true).animate({left:(x?-x+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},r.duration,"easeInOutExpo",function(){f.trigger("effectEnd")})}};function J(i,x,j){if(E){j.ctx.drawImage(i.get(0),0,0);if(!n(j.ctx,0,0,j.width,j.height,x)){j.ctx.drawImage(i.get(0),0,0)}return true}return cont}var g=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var K=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function n(aI,ap,an,j,N,az){if(isNaN(az)||az<1){return}az|=0;var aD;try{aD=aI.getImageData(ap,an,j,N)}catch(aH){console.log("error:unable to access image data: "+aH);return false}var X=aD.data;var ax,aw,aF,aC,ae,ah,ab,V,W,am,ac,ao,ak,at,ay,af,aa,ag,ai,ar;var aG=az+az+1;var au=j<<2;var ad=j-1;var aB=N-1;var Z=az+1;var aA=Z*(Z+1)/2;var aq=new T();var al=aq;for(aF=1;aF<aG;aF++){al=al.next=new T();if(aF==Z){var Y=al}}al.next=aq;var aE=null;var av=null;ab=ah=0;var aj=g[az];var U=K[az];for(aw=0;aw<N;aw++){at=ay=af=V=W=am=0;ac=Z*(aa=X[ah]);ao=Z*(ag=X[ah+1]);ak=Z*(ai=X[ah+2]);V+=aA*aa;W+=aA*ag;am+=aA*ai;al=aq;for(aF=0;aF<Z;aF++){al.r=aa;al.g=ag;al.b=ai;al=al.next}for(aF=1;aF<Z;aF++){aC=ah+((ad<aF?ad:aF)<<2);V+=(al.r=(aa=X[aC]))*(ar=Z-aF);W+=(al.g=(ag=X[aC+1]))*ar;am+=(al.b=(ai=X[aC+2]))*ar;at+=aa;ay+=ag;af+=ai;al=al.next}aE=aq;av=Y;for(ax=0;ax<j;ax++){X[ah]=(V*aj)>>U;X[ah+1]=(W*aj)>>U;X[ah+2]=(am*aj)>>U;V-=ac;W-=ao;am-=ak;ac-=aE.r;ao-=aE.g;ak-=aE.b;aC=(ab+((aC=ax+az+1)<ad?aC:ad))<<2;at+=(aE.r=X[aC]);ay+=(aE.g=X[aC+1]);af+=(aE.b=X[aC+2]);V+=at;W+=ay;am+=af;aE=aE.next;ac+=(aa=av.r);ao+=(ag=av.g);ak+=(ai=av.b);at-=aa;ay-=ag;af-=ai;av=av.next;ah+=4}ab+=j}for(ax=0;ax<j;ax++){ay=af=at=W=am=V=0;ah=ax<<2;ac=Z*(aa=X[ah]);ao=Z*(ag=X[ah+1]);ak=Z*(ai=X[ah+2]);V+=aA*aa;W+=aA*ag;am+=aA*ai;al=aq;for(aF=0;aF<Z;aF++){al.r=aa;al.g=ag;al.b=ai;al=al.next}ae=j;for(aF=1;aF<=az;aF++){ah=(ae+ax)<<2;V+=(al.r=(aa=X[ah]))*(ar=Z-aF);W+=(al.g=(ag=X[ah+1]))*ar;am+=(al.b=(ai=X[ah+2]))*ar;at+=aa;ay+=ag;af+=ai;al=al.next;if(aF<aB){ae+=j}}ah=ax;aE=aq;av=Y;for(aw=0;aw<N;aw++){aC=ah<<2;X[aC]=(V*aj)>>U;X[aC+1]=(W*aj)>>U;X[aC+2]=(am*aj)>>U;V-=ac;W-=ao;am-=ak;ac-=aE.r;ao-=aE.g;ak-=aE.b;aC=(ax+(((aC=aw+Z)<aB?aC:aB)*j))<<2;V+=(at+=(aE.r=X[aC]));W+=(ay+=(aE.g=X[aC+1]));am+=(af+=(aE.b=X[aC+2]));aE=aE.next;ac+=(aa=av.r);ao+=(ag=av.g);ak+=(ai=av.b);at-=aa;ay-=ag;af-=ai;av=av.next;ah+=j}}aI.putImageData(aD,ap,an);return true}function T(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}}jQuery.extend(jQuery.easing,{easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a}});// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_basic_linear(j,g,a){var c=jQuery;var f=c(this);var e=a.find(".ws_list");var i=c("<div>").addClass("ws_effect ws_basic_linear").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(a);var b=c("<div>").css({position:"absolute",display:"none","z-index":2,width:"200%",height:"100%",transform:"translate3d(0,0,0)"}).appendTo(i);var h=c("<div>").css({position:"absolute",left:"auto",top:"auto",width:"50%",height:"100%",overflow:"hidden"}),d=h.clone();b.append(h,d);this.go=function(k,n,m){b.stop(1,1);if(m==undefined){m=(!!((k-n+1)%g.length)^j.revers?"left":"right")}else{m=m?"left":"right"}var o=c(g[n]);var l={width:o.width()||j.width,height:o.height()||j.height};o.clone().css(l).appendTo(h).css(m,0);c(g[k]).clone().css(l).appendTo(d).show();if(m=="right"){h.css("left","50%");d.css("left",0)}else{h.css("left",0);d.css("left","50%")}var q={},p={};q[m]=0;p[m]=-a.width();if(j.support.transform){if(m=="right"){q.left=q.right;p.left=-p.right}q={translate:[q.left,0,0]};p={translate:[p.left,0,0]}}e.hide();wowAnimate(b.css({left:"auto",right:"auto",top:0}).css(m,0).show(),q,p,j.duration,"easeInOutExpo",function(){f.trigger("effectEnd");b.hide().find("div").html("")})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_fly(c,a,b){var e=jQuery;var f=e(this);var h={position:"absolute",left:0,top:0,width:"100%",height:"100%",transform:"translate3d(0,0,0)"};var d=b.find(".ws_list");var g=e("<div>").addClass("ws_effect ws_fly").css(h).css({overflow:"visible"}).appendTo(b);this.go=function(p,m,l){if(l==undefined){l=!!c.revers}else{l=!l}var k=-(c.distance||g.width()/4),n=Math.min(-k,Math.max(0,e(window).width()-g.offset().left-g.width())),i=(l?n:k),q=(l?k:n);var j=e(a.get(m));j={width:j.width(),height:j.height()};var r=e("<div>").css(h).css({"z-index":1,overflow:"hidden"}).html(e(a.get(m)).clone().css(j)).appendTo(g);var o=e("<div>").css(h).css({"z-index":3,overflow:"hidden"}).html(e(a.get(p)).clone().css(j)).appendTo(g).show();wowAnimate(o,{opacity:0},{opacity:1},c.duration);wowAnimate(o,{left:i},{left:0},2*c.duration/3);d.hide();wowAnimate(r,{left:0,opacity:1},{left:q,opacity:0},2*c.duration/3,c.duration/3,function(){r.remove();f.trigger("effectEnd");o.remove()})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeOutOneBounce:function(e,i,c,a,d,g){var j=0.8;var b=0.2;var f=j*j;if(i<0.0001){return 0}else{if(i<j){return i*i/f}else{return 1-b*b+(i-j-b)*(i-j-b)}}},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}}});function ws_page(c,b,a){var e=jQuery;var h=c.angle||17;var g=e(this);var f=e("<div>").addClass("ws_effect ws_page").css({position:"absolute",width:"100%",height:"100%",top:"0%",overflow:"hidden"});var d=a.find(".ws_list");f.hide().appendTo(a);this.go=function(l,j){function o(){f.find("div").stop(1,1);f.hide();f.empty()}o();d.hide();var k=e("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden","z-index":9}).append(e(b.get(l)).clone()).appendTo(f);var i=e("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",outline:"1px solid transparent","z-index":10,"transform-origin":"top left","backface-visibility":"hidden"}).append(e(b.get(j)).clone()).appendTo(f);f.show();if(c.responsive<3){k.find("img").css("width","100%");i.find("img").css("width","100%")}var q=i;var p=q.width(),m=q.height();var n=!document.addEventListener;wowAnimate(q,{rotate:0},{rotate:h},n?0:2*c.duration/3,"easeOutOneBounce",function(){wowAnimate(q,{top:0},{top:"100%"},(n?2:1)*c.duration/3)});wowAnimate(k,{top:"-100%"},{top:"-30%"},n?0:c.duration/2,function(){wowAnimate(k,{top:"-30%"},{top:0},(n?2:1)*c.duration/2,"easeOutBounce",function(){q.hide();o();g.trigger("effectEnd")})})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_stack(d,a,b){var e=jQuery;var g=e(this);var c=e("li",b);var f=e("<div>").addClass("ws_effect ws_stack").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(b);this.go=function(q,j,i){var k=(d.revers?1:-1)*b.width();c.each(function(s){if(i&&s!=j){this.style.zIndex=(Math.max(0,this.style.zIndex-1))}});var p=e(".ws_list",b);var h=e("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(e(a.get(i?q:j)).clone()),r=e("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(e(a.get(i?j:q)).clone());if(d.responsive<3){h.find("img").css("width","100%");r.find("img").css("width","100%")}if(i){r.appendTo(f);h.appendTo(f)}else{h.insertAfter(p);r.insertAfter(p)}if(!i){p.stop(true,true).hide().css({left:-q+"00%"});if(d.fadeOut){p.fadeIn(d.duration)}else{p.show()}}else{if(d.fadeOut){p.fadeOut(d.duration)}}var o={left:i?k:0};var m={left:i?0:-k*0.5};var n={left:i?0:k};var l={left:(i?1:0)*b.width()*0.5};if(d.support.transform){o={translate:[o.left,0,0]};m={translate:[m.left,0,0]};n={translate:[n.left,0,0]};l={translate:[l.left,0,0]}}wowAnimate(h,o,n,d.duration,d.duration*(i?0:0.1),"easeInOutExpo",function(){g.trigger("effectEnd");h.remove();r.remove()});wowAnimate(r,m,l,d.duration,d.duration*(i?0.1:0),"easeInOutExpo")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"parallax,collage,basic_linear,fly,page,stack",prev:"",next:"",duration:20*100,delay:20*100,width:640,height:480,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});