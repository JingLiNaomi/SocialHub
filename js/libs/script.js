
 topopupClicked = function() {
//loading();
setTimeout(function(){
loadPopup();
},500);
return false;
}


/* event for close the popup */ 

crossClicked = function() {
	disablePopup();
}


 /************** start: functions. **************/ 
loading = function() { 
 $("div.loader").show(); 
 } 
closeloading = function () { 
 $("div.loader").fadeOut('normal'); 
 } 
 
 var popupStatus = 0; // set value 
 loadPopup = function(){ 
 if(popupStatus == 0) { // if value is 0, show popup 
 //closeloading(); // fadeout loading 
 $("#toPopup").fadeIn(500); // fadein popup div 
 $("#backgroundPopup").css("opacity", "0.7"); // css opacity, supports IE7, IE8 
 $("#backgroundPopup").fadeIn(0001); 
 popupStatus = 1; // and set value to 1 
 } 
 } 
disablePopup = function() { 
 if(popupStatus == 1) { // if value is 1, close popup 
 $("#toPopup").fadeOut("normal"); 
 $("#backgroundPopup").fadeOut("normal"); 
 popupStatus = 0; // and set value to 0 
 } 
 } 
 /************** end: functions. **************/ 