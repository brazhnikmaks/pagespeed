!function(e,t,n){var o=n(e),r=n(t),i=n.fancybox=function(){i.open.apply(this,arguments)},a=!1,c=null;n.extend(i,{version:"2.0.3",defaults:{padding:15,margin:20,width:800,height:600,minWidth:200,minHeight:200,maxWidth:9999,maxHeight:9999,autoSize:!0,fitToView:!0,aspectRatio:!1,topRatio:.5,fixed:!n.browser.msie||n.browser.version>6,scrolling:"auto",wrapCSS:"fancybox-default",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,modal:!1,loop:!0,ajax:{},keys:{next:[13,32,34,39,40],prev:[8,33,37,38],close:[27]},index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0" '+(n.browser.msie?'allowtransparency="true""':"")+' scrolling="{scrolling}" src="{href}"></iframe>',swf:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<div title="Close" class="fancybox-item fancybox-close"></div>',next:'<a title="Next" class="fancybox-item fancybox-next"><span></span></a>',prev:'<a title="Previous" class="fancybox-item fancybox-prev"><span></span></a>'},openEffect:"elastic",openSpeed:500,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:500,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:300,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:300,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:{speedIn:0,speedOut:0,opacity:.85,css:{cursor:"pointer","background-color":"rgba(0, 0, 0, 0.85)"},closeClick:!0},title:{type:"float"}},onCancel:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop},group:{},opts:{},coming:null,current:null,isOpen:!1,isOpened:!1,wrap:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){n.isArray(e)||(e=[e]),e.length&&(i.close(!0),i.opts=n.extend(!0,{},i.defaults,t),i.group=e,i._start(i.opts.index||0))},cancel:function(){i.coming&&!1===i.trigger("onCancel")||(i.coming=null,i.hideLoading(),i.ajaxLoad&&i.ajaxLoad.abort(),i.ajaxLoad=null,i.imgPreload&&(i.imgPreload.onload=i.imgPreload.onabort=i.imgPreload.onerror=null))},close:function(e){i.cancel(),i.current&&!1!==i.trigger("beforeClose")&&(i.unbindEvents(),!i.isOpen||e&&e[0]===!0?(n(".fancybox-wrap").stop().trigger("onReset").remove(),i._afterZoomOut()):(i.isOpen=i.isOpened=!1,n(".fancybox-item").remove(),i.wrap.stop(!0).removeClass("fancybox-opened"),i.inner.css("overflow","hidden"),i.transitions[i.current.closeMethod]()))},play:function(e){var t=function(){clearTimeout(i.player.timer)},o=function(){t(),i.current&&i.player.isActive&&(i.player.timer=setTimeout(i.next,i.current.playSpeed))},r=function(){t(),n("body").unbind(".player"),i.player.isActive=!1,i.trigger("onPlayEnd")},a=function(){i.current&&(i.current.loop||i.current.index<i.group.length-1)&&(i.player.isActive=!0,o(),n("body").bind({"onCancel.player afterShow.player onUpdate.player":o,"beforeClose.player":r,"beforeLoad.player":t}),i.trigger("onPlayStart"))};i.player.isActive||e&&e[0]===!1?r():a()},next:function(){i.current&&i.jumpto(i.current.index+1)},prev:function(){i.current&&i.jumpto(i.current.index-1)},jumpto:function(e){i.current&&(e=parseInt(e,10),i.group.length>1&&i.current.loop&&(e>=i.group.length?e=0:0>e&&(e=i.group.length-1)),"undefined"!=typeof i.group[e]&&(i.cancel(),i._start(e)))},reposition:function(e){i.isOpen&&i.wrap.css(i._getPosition(e))},update:function(){i.isOpen&&(a||(c=setInterval(function(){a&&(a=!1,clearTimeout(c),i.current&&(i.current.autoSize&&(i.inner.height("auto"),i.current.height=i.inner.height()),i._setDimension(),i.current.canGrow&&i.inner.height("auto"),i.reposition(),i.trigger("onUpdate")))},100)),a=!0)},toggle:function(){i.isOpen&&(i.current.fitToView=!i.current.fitToView,i.update())},hideLoading:function(){n("#fancybox-loading").remove()},showLoading:function(){i.hideLoading(),n('<div id="fancybox-loading"></div>').click(i.cancel).appendTo("body")},getViewport:function(){return{x:o.scrollLeft(),y:o.scrollTop(),w:o.width(),h:o.height()}},unbindEvents:function(){i.wrap&&i.wrap.unbind(".fb"),r.unbind(".fb"),o.unbind(".fb")},bindEvents:function(){var e=i.current,t=e.keys;e&&(o.bind("resize.fb, orientationchange.fb",i.update),t&&r.bind("keydown.fb",function(e){n.inArray(e.target.tagName.toLowerCase(),["input","textarea","select","button"])>-1||(n.inArray(e.keyCode,t.close)>-1?(i.close(),e.preventDefault()):n.inArray(e.keyCode,t.next)>-1?(i.next(),e.preventDefault()):n.inArray(e.keyCode,t.prev)>-1&&(i.prev(),e.preventDefault()))}),n.fn.mousewheel&&e.mouseWheel&&i.group.length>1&&i.wrap.bind("mousewheel.fb",function(e,t){(0===n(e.target).get(0).clientHeight||n(e.target).get(0).scrollHeight===n(e.target).get(0).clientHeight)&&(e.preventDefault(),i[t>0?"prev":"next"]())}))},trigger:function(e){var t,o=n.inArray(e,["onCancel","beforeLoad","afterLoad"])>-1?"coming":"current";if(i[o]){if(n.isFunction(i[o][e])&&(t=i[o][e].apply(i[o],Array.prototype.slice.call(arguments,1))),t===!1)return!1;i[o].helpers&&n.each(i[o].helpers,function(t,o){o&&"undefined"!=typeof i.helpers[t]&&n.isFunction(i.helpers[t][e])&&i.helpers[t][e](o)}),n.event.trigger(e+".fb")}},isImage:function(e){return e&&e.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)},isSWF:function(e){return e&&e.match(/\.(swf)(.*)?$/i)},_start:function(e){var t,o,r,a,c=i.group[e]||null,s=n.extend(!0,{},i.opts,n.isPlainObject(c)?c:{},{index:e,element:c});return"number"==typeof s.margin&&(s.margin=[s.margin,s.margin,s.margin,s.margin]),s.modal&&n.extend(!0,s,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{css:{cursor:"auto"},closeClick:!1}}}),i.coming=s,!1===i.trigger("beforeLoad")?void(i.coming=null):("object"==typeof c&&(c.nodeType||c instanceof n)&&(t=!0,s.href=n(c).attr("href")||s.href,s.title=n(c).attr("title")||s.title,n.metadata&&n.extend(s,n(c).metadata())),r=s.type,o=s.href,r||(t&&(a=n(c).data("fancybox-type"),!a&&c.className&&(a=c.className.match(/fancybox\.(\w+)/),a=a?a[1]:!1)),a?r=a:o&&(i.isImage(o)?r="image":i.isSWF(o)?r="swf":o.match(/^#/)&&(r="inline")),r||(r=t?"inline":"html"),s.type=r),"inline"===r||"html"===r?(s.content||(s.content="inline"===r&&o?n(o):c),s.content.length||(r=null)):(s.href=o||c,s.href||(r=null)),s.group=i.group,void("image"===r?i._loadImage():"ajax"===r?i._loadAjax():r?i._afterLoad():i._error()))},_error:function(){i.coming.type="html",i.coming.minHeight=0,i.coming.autoSize=!0,i.coming.content=i.coming.tpl.error,i._afterLoad()},_loadImage:function(){i.imgPreload=new Image,i.imgPreload.onload=function(){this.onload=this.onerror=null,i.coming.width=this.width,i.coming.height=this.height,i._afterLoad()},i.imgPreload.onerror=function(){this.onload=this.onerror=null,i._error()},i.imgPreload.src=i.coming.href,i.imgPreload.complete||i.showLoading()},_loadAjax:function(){i.showLoading(),i.ajaxLoad=n.ajax(n.extend({},i.coming.ajax,{url:i.coming.href,error:function(e,t,n){"abort"!==t?(i.coming.content=n,i._error()):i.hideLoading()},success:function(e,t,n){"success"===t&&(i.coming.content=e,i._afterLoad())}}))},_afterLoad:function(){return i.hideLoading(),i.coming&&!1!==i.trigger("afterLoad",i.current)?(i.isOpened?(n(".fancybox-item").remove(),i.wrap.stop(!0).removeClass("fancybox-opened"),i.inner.css("overflow","hidden"),i.transitions[i.current.prevMethod]()):(n(".fancybox-wrap").stop().trigger("onReset").remove(),i.trigger("afterClose")),i.unbindEvents(),i.isOpen=!1,i.current=i.coming,i.coming=!1,i.wrap=n(i.current.tpl.wrap).addClass("fancybox-tmp "+i.current.wrapCSS).appendTo("body"),i.outer=n(".fancybox-outer",i.wrap).css("padding",i.current.padding+"px"),i.inner=n(".fancybox-inner",i.wrap),i._setContent(),i.trigger("beforeShow"),i._setDimension(),i.wrap.hide().removeClass("fancybox-tmp"),i.bindEvents(),void i.transitions[i.isOpened?i.current.nextMethod:i.current.openMethod]()):void(i.coming=!1)},_setContent:function(){var e,t,o=i.current,r=o.type;switch(r){case"inline":case"ajax":case"html":"inline"===r?(e=o.content.show().detach(),e.parent().hasClass("fancybox-inner")&&e.parents(".fancybox-wrap").trigger("onReset").remove(),n(i.wrap).bind("onReset",function(){e.appendTo("body").hide()})):e=o.content,o.autoSize&&(t=n('<div class="fancybox-tmp"></div>').appendTo(n("body")).append(e),o.width=t.outerWidth(),o.height=t.outerHeight(!0),e=t.contents().detach(),t.remove());break;case"image":e=o.tpl.image.replace("{href}",o.href),o.aspectRatio=!0;break;case"swf":e=o.tpl.swf.replace(/\{width\}/g,o.width).replace(/\{height\}/g,o.height).replace(/\{href\}/g,o.href);break;case"iframe":e=o.tpl.iframe.replace("{href}",o.href).replace("{scrolling}",o.scrolling).replace("{rnd}",(new Date).getTime())}n.inArray(r,["image","swf","iframe"])>-1&&(o.autoSize=!1,o.scrolling=!1),i.inner.append(e)},_setDimension:function(){var e,t,o=i.current,r=i.getViewport(),a=o.margin,c=2*o.padding,s=o.width+c,l=o.height+c,p=o.width/o.height,d=o.maxWidth,f=o.maxHeight,u=o.minWidth,h=o.minHeight;if(r.w-=a[1]+a[3],r.h-=a[0]+a[2],s.toString().indexOf("%")>-1&&(s=r.w*parseFloat(s)/100),l.toString().indexOf("%")>-1&&(l=r.h*parseFloat(l)/100),o.fitToView&&(d=Math.min(r.w,d),f=Math.min(r.h,f)),d=Math.max(u,d),f=Math.max(h,f),o.aspectRatio?(s>d&&(s=d,l=(s-c)/p+c),l>f&&(l=f,s=(l-c)*p+c),u>s&&(s=u,l=(s-c)/p+c),h>l&&(l=h,s=(l-c)*p+c)):(s=Math.max(u,Math.min(s,d)),l=Math.max(h,Math.min(l,f))),s=Math.round(s),l=Math.round(l),n(i.wrap.add(i.outer).add(i.inner)).width("auto").height("auto"),i.inner.width(s-c).height(l-c),i.wrap.width(s),e=i.wrap.height(),s>d||e>f)for(;(s>d||e>f)&&s>u&&e>h;)l-=10,o.aspectRatio?(s=Math.round((l-c)*p+c),u>s&&(s=u,l=(s-c)/p+c)):s-=10,i.inner.width(s-c).height(l-c),i.wrap.width(s),e=i.wrap.height();o.dim={width:s,height:e},o.canGrow=o.autoSize&&l>h&&f>l,o.canShrink=!1,o.canExpand=!1,s-c<o.width||l-c<o.height?o.canExpand=!0:(s>r.w||e>r.h)&&s>u&&l>h&&(o.canShrink=!0),t=e-c,i.innerSpace=t-i.inner.height(),i.outerSpace=t-i.outer.height()},_getPosition:function(e){var t=i.getViewport(),n=i.current.margin,o=i.wrap.width()+n[1]+n[3],r=i.wrap.height()+n[0]+n[2],a={position:"absolute",top:n[0]+t.y,left:n[3]+t.x};return i.current.fixed&&(!e||e[0]===!1)&&r<=t.h&&o<=t.w&&(a={position:"fixed",top:n[0],left:n[3]}),a.top=Math.ceil(Math.max(a.top,a.top+(t.h-r)*i.current.topRatio))+"px",a.left=Math.ceil(Math.max(a.left,a.left+.5*(t.w-o)))+"px",a},_afterZoomIn:function(){var e=i.current;i.isOpen=i.isOpened=!0,i.wrap.addClass("fancybox-opened").css("overflow","visible"),i.update(),i.inner.css("overflow","auto"===e.scrolling?"auto":"yes"===e.scrolling?"scroll":"hidden"),(e.closeClick||e.nextClick)&&i.inner.bind("click.fb",e.nextClick?i.next:i.close),e.closeBtn&&n(i.current.tpl.closeBtn).appendTo(i.wrap).bind("click.fb",i.close),e.arrows&&i.group.length>1&&((e.loop||e.index>0)&&n(e.tpl.prev).appendTo(i.wrap).bind("click.fb",i.prev),(e.loop||e.index<i.group.length-1)&&n(e.tpl.next).appendTo(i.wrap).bind("click.fb",i.next)),i.trigger("afterShow"),i.opts.autoPlay&&!i.player.isActive&&(i.opts.autoPlay=!1,i.play())},_afterZoomOut:function(){i.trigger("afterClose"),i.wrap.trigger("onReset").remove(),n.extend(i,{group:{},opts:{},current:null,isOpened:!1,isOpen:!1,wrap:null,outer:null,inner:null})}}),i.transitions={getOrigPosition:function(){var e,t,o=i.current.element,r={},a=50,c=50;return o&&o.nodeName&&n(o).is(":visible")?(e=n(o).find("img:first"),e.length?(r=e.offset(),a=e.outerWidth(),c=e.outerHeight()):r=n(o).offset()):(t=i.getViewport(),r.top=t.y+.5*(t.h-c),r.left=t.x+.5*(t.w-a)),r={top:Math.ceil(r.top)+"px",left:Math.ceil(r.left)+"px",width:Math.ceil(a)+"px",height:Math.ceil(c)+"px"}},step:function(e,t){var n,o,r;("width"===t.prop||"height"===t.prop)&&(o=r=Math.ceil(e-2*i.current.padding),"height"===t.prop&&(n=(e-t.start)/(t.end-t.start),t.start>t.end&&(n=1-n),o-=i.innerSpace*n,r-=i.outerSpace*n),i.inner[t.prop](o),i.outer[t.prop](r))},zoomIn:function(){var e,t,o=i.current,r=o.dim;"elastic"===o.openEffect?(t=n.extend({},r,i._getPosition(!0)),delete t.position,e=this.getOrigPosition(),o.openOpacity&&(e.opacity=0,t.opacity=1),i.wrap.css(e).show().animate(t,{duration:o.openSpeed,easing:o.openEasing,step:this.step,complete:i._afterZoomIn})):(i.wrap.css(n.extend({},r,i._getPosition())),"fade"===o.openEffect?i.wrap.fadeIn(o.openSpeed,i._afterZoomIn):(i.wrap.show(),i._afterZoomIn()))},zoomOut:function(){var e,t=i.current;"elastic"===t.closeEffect?("fixed"===i.wrap.css("position")&&i.wrap.css(i._getPosition(!0)),e=this.getOrigPosition(),t.closeOpacity&&(e.opacity=0),i.wrap.animate(e,{duration:t.closeSpeed,easing:t.closeEasing,step:this.step,complete:i._afterZoomOut})):i.wrap.fadeOut("fade"===t.closeEffect?t.closeSpeed:0,i._afterZoomOut)},changeIn:function(){var e,t=i.current;"elastic"===i.current.nextEffect?(e=i._getPosition(!0),e.opacity=0,e.top=parseInt(e.top,10)-200+"px",i.wrap.css(e).show().animate({opacity:1,top:"+=200px"},{duration:t.nextSpeed,complete:i._afterZoomIn})):(i.wrap.css(i._getPosition()),"fade"===t.nextEffect?i.wrap.hide().fadeIn(t.nextSpeed,i._afterZoomIn):(i.wrap.show(),i._afterZoomIn()))},changeOut:function(){function e(){n(this).trigger("onReset").remove()}i.wrap.removeClass("fancybox-opened"),"elastic"===i.current.prevEffect?i.wrap.animate({opacity:0,top:"+=200px"},{duration:i.current.prevSpeed,complete:e}):i.wrap.fadeOut("fade"===i.current.prevEffect?i.current.prevSpeed:0,e)}},i.helpers.overlay={overlay:null,update:function(){var e,i,a;this.overlay.width(0).height(0),n.browser.msie?(i=Math.max(t.documentElement.scrollWidth,t.body.scrollWidth),a=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),e=a>i?o.width():i):e=r.width(),this.overlay.width(e).height(r.height())},beforeShow:function(e){this.overlay||(this.overlay=n('<div id="fancybox-overlay"></div>').css(e.css||{background:"black"}).appendTo("body"),this.update(),e.closeClick&&this.overlay.bind("click.fb",i.close),o.bind("resize.fb",n.proxy(this.update,this)),this.overlay.fadeTo(e.speedIn||"fast",e.opacity||1))},onUpdate:function(){this.update()},afterClose:function(e){this.overlay&&this.overlay.fadeOut(e.speedOut||"fast",function(){n(this).remove()}),this.overlay=null}},i.helpers.title={beforeShow:function(e){var t,o=i.current.title;o&&(t=n('<div class="fancybox-title fancybox-title-'+e.type+'-wrap">'+o+"</div>").appendTo("body"),"float"===e.type&&(t.width(t.width()),t.wrapInner('<span class="child"></span>'),i.current.margin[2]+=Math.abs(parseInt(t.css("margin-bottom"),10))),t.appendTo("over"===e.type?i.inner:"outside"===e.type?i.wrap:i.outer))}},n.fn.fancybox=function(e){function t(e){var t=[],r=!1,c=n(this).data("fancybox-group");return e.preventDefault(),"undefined"!=typeof c?r=c?"data-fancybox-group":!1:this.rel&&""!==this.rel&&"nofollow"!==this.rel&&(c=this.rel,r="rel"),r&&(t=a.length?n(a).filter("["+r+'="'+c+'"]'):n("["+r+'="'+c+'"]')),t.length?(o.index=t.index(this),i.open(t.get(),o)):i.open(this,o),!1}var o=e||{},a=this.selector||"";return a?r.undelegate(a,"click.fb-start").delegate(a,"click.fb-start",t):n(this).unbind("click.fb-start").bind("click.fb-start",t),this}}(window,document,jQuery);