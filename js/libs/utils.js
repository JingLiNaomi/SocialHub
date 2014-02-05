// JavaScript Document
toggle = function(id){
	$('#'+id).slideToggle("fast");
}



function activate(id)
{
	$('.tab').removeClass("active");
	$("#"+id).addClass("active");
	return true;
}

	

	
addPopup = function(id)
{
  	$('#'+id).appendTo($('#toPopup'));
  $('#'+id).css("display", "block");
}

removePopup = function(id)
{
	$('#'+id).css("display", "none");
}

rmID = {};
topopupClicked = function(id) {
//loading();
addPopup(id);
rmID = id;
setTimeout(function(){
loadPopup();
},500);
return false;
}


/* event for close the popup */ 

crossClicked = function() {
	disablePopup();
}
 
 var popupStatus = 0; // set value 
 loadPopup = function(){ 
 if(popupStatus == 0) { // if value is 0, show popup 
 //closeloading(); // fadeout loading 
 $("#toPopup").fadeIn(500); // fadein popup div 
 $("#backgroundPopup").css("opacity", "0.7"); // css opacity, supports IE7, IE8 
 $("#backgroundPopup").fadeIn(1); 
 popupStatus = 1; // and set value to 1 
 } 
 } 
disablePopup = function() { 
 if(popupStatus == 1) { // if value is 1, close popup 
 $("#toPopup").fadeOut("normal"); 
 $("#backgroundPopup").fadeOut("normal"); 
 removePopup(rmID);
 popupStatus = 0; // and set value to 0 
 } 
 } 
 /************** end: functions. **************/ 