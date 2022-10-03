var menuOpen = false;
var projectOpen = 0;
var toolOpen = 0;
var projectText = 
["<p><b>Languages used:</b> HTML, CSS, Javascript<br><br>This portfolio that you're looking over is a combination of HTML content, CSS styling, and JavaScript functionality.<br><br>Over the course of a month, I planned out the layout and sitemap, created and stylized the presentation, and coded in functionality like the navigation menu above you.<br><br>One of the biggest challenges I faced during this project was handling the layout when most elements would start on a new line regardless of attributes.</p>",
"<p><b>Languages used:</b> HTML, CSS, Javascript, JSON<br><br>This is a web tool that uses JSON format tables to exchange currency.<br><br>This takes advantage of card and text area elements to create interaction with as few lines of code as possible.<br><br><a href='exProjects/CurrEx/currex.html'>Link to the project here!</a></p>",
"<p><b>Languages used:</b> C++<br><br>A console tool written in C++ that can add, edit, and remove metadata of media including music, images, videos, and more from .csv files. Written with the goals of navigation in mind."];
var toolText = 
["<p><b>Proficiency:</b> 4/5<br><br>HTML is the language used to create the content of a webpage, like the text you're reading now.<br><br>All my projects that utilize the web browser is based in HTML, making it the most important language of development.</p>",
"<p><b>Proficiency:</b> 5/5<br><br>CSS is the language used to color, resize, and make the webpage presentable.<br><br>I've worked with CSS every time I've worked with HTML.</p>",
"<p><b>Proficiency:</b> 4/5<br><br>JavaScript is a language that can be used in web content.<br><br>On this portfolio, it makes the buttons on this section change the paragraph and the menu button scroll the page.</p>",
"<p><b>Proficiency:</b> 3/5<br><br>PHP is a language used primarily on the back-end.<br><br>Using it, I have worked with databases and simulations of client-server communications using user permissions and account info.</p>",
"<p><b>Proficiency:</b> 4/5<br><br>C++ is a general-purpose language that can be applied to all layers of development.<br><br>I have worked with multiple data structures in C++ including binary trees and directed graphs.</p>"]

$(function(){
	$('#menuButton').on('click', operateMenu);
	$('.menuTab').on('click', handleMenu);
	$('#homeButton').on('click', handleMenu);
	$('.project').on('click', changeProject);
	$('.toolbox').on('click', changeTool);
})

function operateMenu(t) {
	var target = t.target;
	if (menuOpen == false) {
		menuOpen = true;
		document.getElementById('topMenu').setAttribute('style','top: 0px');
	}
	else {
		menuOpen = false
		document.getElementById('topMenu').setAttribute('style','top: -200px');
	}
}

function handleMenu(t) {
	var target = t.target;
	scrollFunc(target.value);
}

function scrollFunc(s) {
	document.body.scrollTop = s; // For Safari
	document.documentElement.scrollTop = s; // For other browsers. Why...
	document.getElementById('topMenu').setAttribute('style','top: -200px');
	menuOpen = false;
}

function changeProject(t) {
	var target = t.target;
	if (target.value != projectOpen) {
		document.querySelector(".project[value='" + projectOpen + "']").setAttribute('style','background-color: #001a33');
		projectOpen = target.value;
		target.setAttribute('style','background-color: #003366');
		document.getElementById('projectContent').innerHTML = projectText[projectOpen];
	}
}

function changeTool(t) {
	var target = t.target;
	if (target.value != toolOpen) {
		document.querySelector(".toolbox[value='" + toolOpen + "']").setAttribute('style','background-color: #001a33');
		toolOpen = target.value;
		target.setAttribute('style','background-color: #003366');
		document.getElementById('skillsetContent').innerHTML = toolText[toolOpen];
	}
}