function start(){
	document.querySelector('main').style.display='none';
	document.querySelector('section').style.display='flex';
}
function run(){
	let api = document.querySelector('.key-input').value;
	eel.chatbot(api)(function(response){
		document.querySelector('section').style.display='none';
		document.querySelector('div').style.display='flex';		
	})
}
function search(){
	document.querySelector('.out1').style.display='flex';
	let comm = document.querySelector('.command').value;
	eel.search(comm)(function(output){
		document.querySelector('.searched').innerHTML = output;
	})
}
function read(){
	let readme = document.querySelector('.searched').innerHTML;
	eel.readtext(readme)(function(){
		
	})
}
function wiki(){
	let comm = document.querySelector('.command').value;
	eel.wikipedia(comm)(function(wikiTEXT){
		document.querySelector('.searched').innerHTML = wikiTEXT;	
	})
}
function google(){
	let comm = document.querySelector('.command').value;
	eel.googled(comm)(function(){

	})
}
function back(){
	document.querySelector('.info').style.display='none';
}
function help(){
	document.querySelector('.info').style.display='flex';
}
function github() {
	window.open('https://github.com/ushankv2005');
}
document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);

document.querySelector('.n1').ondragstart = function() { return false; };
document.querySelector('.n2').ondragstart = function() { return false; };
document.querySelector('.n3').ondragstart = function() { return false; };