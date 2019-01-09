var HTML = document.querySelector("html"),
    CLASS_CSS_ANIM = "css-animated",
    CLASS_SMIL_ANIM = "smil-animated";

if( navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ){
	HTML.className += CLASS_SMIL_ANIM;
} else {
	HTML.className += CLASS_CSS_ANIM;
}