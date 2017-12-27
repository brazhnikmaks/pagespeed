var prodCount=89;var personForToday=206;var lastpackNodes=document.getElementsByClassName('packages-count');updateFromLS();updateNodes();var users=[{"name":"Armando","city":"Cremona"},{"name":"Diego","city":"Brescia"},{"name":"Danilo","city":"Bergamo"},{"name":"Giuseppe","city":"Savona"},{"name":"Adriano","city":"Asti"},{"name":"Gabriele","city":"Torino"},{"name":"Fabio","city":"Napoli"},{"name":"Fulvio","city":"Palermo"},{"name":"Manlio","city":"Verona"},{"name":"Marco","city":"Vicenza"},{"name":"Sergio","city":"Como"},{"name":"Antonio","city":"Grosseto"},{"name":"Umberto","city":"Terni"},{"name":"Pietro","city":"Salerno"},{"name":"Salvatore","city":"Bari"},{"name":"Alice","city":"Catania"},{"name":"Clara","city":"Roma"},{"name":"Stefania","city":"Milano"},{"name":"Martina","city":"Crotone"},{"name":"Alessandra","city":"Corleone"},{"name":"Valentina","city":"Cremona"},{"name":"Michela","city":"Brescia"},{"name":"Carla","city":"Bergamo"},{"name":"Danila","city":"Savona"},{"name":"Erica","city":"Asti"},{"name":"Ersilia","city":"Torino"},{"name":"Simona","city":"Napoli"},{"name":"Giulia","city":"Palermo"}];var maxPackageNum=7;var delay=10000;var delayFrom=9000;var delayTo=10000;var showTime=8000;var stylesForPopUp='display: none; position: fixed; z-index: 100; background-color: rgba(35, 56, 68, .8); color: #fff; border: 1px solid rgba(255, 255, 255, 0.35); -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;';var deskStylesForPopUp=' top: 165px; right: 26px; width: 320px; padding: 15px 30px; border-radius: 5px;';var popUp=createDiv();function createDiv(){var div=document.createElement('div');div.className=('modal-popup');$('.freezing-wrap').append(div);setPopUpStyle();return div}
function setPopUpStyle(){var style='<style>div.modal-popup{'+stylesForPopUp+deskStylesForPopUp+'}div.modal-popup span{display:block;color:#fff;font-family:Roboto;line-height:20px;font-size:14px;}div.modal-popup .modal-popup-packs{opacity:0.5}</style>';$('div.modal-popup').after(style)}
function getPerson(num){var num=num||0;for(var i=0;i<users.length;i++){if(i==num)return users[i]}}
function randomizeNum(maxNum){var max=maxNum||1;return Math.floor((Math.random()*max)+1)}
function getPriceData(){var priceHolder=$('.al-cost');return $(priceHolder[0]).text()}
var full=!0;function fillPopUp(){popUp.innerHTML="";full=!0;var user=getPerson(randomizeNum(users.length-1));var packagesNum=randomizeNum(maxPackageNum);personForToday++;if(prodCount-packagesNum<5){prodCount=5}else{prodCount-=packagesNum}
    updateLS('lastpack',prodCount);popUp.innerHTML="<span class='modal-popup-who'>"+user.name+" di "+user.city+"</span><span class='modal-popup-packs'>ha acquistato "+packagesNum+"pz</span>"}
function showHidePopUp(){fillPopUp();if(full===!0){popUp.removeAttribute('style');$(popUp).fadeIn(200).delay(showTime).fadeOut(200)}}
var interval;function startPopup(){clearInterval(interval);delay=Math.floor((Math.random()*(delayTo-delayFrom))+delayFrom+showTime);showHidePopUp();updateNodes();interval=setInterval(startPopup,delay)}
window.onload=function(){var timeout=setTimeout(startPopup,delay)}
function isStorage(){if(window.localStorage!==undefined){return!0}else{return!1}}
function updateFromLS(){if(isStorage()){var lastProdCount=parseInt(localStorage.getItem("lastpack"));if(!isNaN(lastProdCount)){prodCount=lastProdCount}}}
function updateLS(key,value){if(isStorage()){localStorage.setItem(key,value)}}
function updateNodes(){for(var j=0;j<lastpackNodes.length;j++){lastpackNodes[j].textContent=prodCount}}