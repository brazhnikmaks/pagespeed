!function(t){var s=t.fancybox;s.helpers.buttons={tpl:'<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:$.fancybox.prev();">Previous</a></li><li><a class="btnPlay" title="Slideshow" href="javascript:$.fancybox.play();;">Play</a></li><li><a class="btnNext" title="Next" href="javascript:$.fancybox.next();">Next</a></li><li><a class="btnToggle" title="Toggle size" href="javascript:$.fancybox.toggle();">Toggle</a></li><li><a class="btnClose" title="Close" href="javascript:$.fancybox.close();">Close</a></li></ul></div>',list:null,buttons:{},update:function(){var t=this.buttons.toggle.removeClass("btnDisabled btnToggleOn");s.current.canShrink?t.addClass("btnToggleOn"):s.current.canExpand||t.addClass("btnDisabled")},beforeShow:function(){s.current.margin[0]+=30},onPlayStart:function(){this.list&&this.buttons.play.text("Pause").addClass("btnPlayOn")},onPlayEnd:function(){this.list&&this.buttons.play.text("Play").removeClass("btnPlayOn")},afterShow:function(l){var e;this.list||(this.list=t(l.tpl||this.tpl).appendTo("body"),this.buttons={prev:this.list.find(".btnPrev"),next:this.list.find(".btnNext"),play:this.list.find(".btnPlay"),toggle:this.list.find(".btnToggle")}),e=this.buttons,s.current.index>0||s.current.loop?e.prev.removeClass("btnDisabled"):e.prev.addClass("btnDisabled"),s.current.loop||s.current.index<s.group.length-1?(e.next.removeClass("btnDisabled"),e.play.removeClass("btnDisabled")):(e.next.addClass("btnDisabled"),e.play.addClass("btnDisabled")),this.update()},onUpdate:function(){this.update()},beforeClose:function(){this.list&&this.list.remove(),this.list=null,this.buttons={}}}}(jQuery);