// JavaScript Document
// Contains scripts used in site's web pages

/* Setting the width of the side navigation bar to 260px */
function openNav()
{
	document.getElementById("mySidenav").style.width = "260px";
	document.getElementById("container").style.marginLeft = "260px";
}

/* Closing the width of the side navigation bar to 0px */
function closeNav()
{
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("container").style.marginLeft = "0";
}