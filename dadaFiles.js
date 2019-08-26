var courseList=[
'Introduction to Parallel Programming (C++, OpenCL, OpenGL)',
'Web Development (JavaScript, HTML, CSS)',
'Analysis of Algorithms (C++)',
'Introduction to Databases (AJAX, MySQL)',
'Operating Systems (C, Unix)',
'Data Structures (C)',
'Discrete Structures in Computer Science (C++)',
'Software Engineering I & II (C++, Java, Gcov)'
];
function courseworkText(){
	var j;
	var unorderedList=document.createElement('UL');
	unorderedList.setAttribute('class', 'clist');
	for (j=0; j < courseList.length; j++){
		var listEle=document.createElement('LI');
		listEle.setAttribute('class', 'c');
		var textnode = document.createTextNode(courseList[j]);
  		listEle.appendChild(textnode);
  		unorderedList.appendChild(listEle);
	};
	document.getElementById("demo").appendChild(unorderedList);
}

//Every button has its own on click function to display the corresponding data.
var click = function(btn, title) {
	btn.onclick = function() {
		post(" ")
		document.getElementById('see').innerHTML = " ";
		courseworkText();
		buttonsCreated("Show Less");

	};
};
var clickRemove = function(btn) {
	btn.onclick = function() {
		post(" ");
		document.getElementById('see').innerHTML = " ";
		buttonsCreated("Show Courses");

	};
};

function post(logText) {
	document.getElementById('demo').innerHTML = logText;
}
function removeButtonCreated(){
	post(" ");
}
//Called first time button is created
function buttonsCreated(name) {
	//creates button
	if(name != "Show Less") {
		var btn= document.createElement('BUTTON');
		btn.innerHTML = name;
		btn.setAttribute('class', 'button');
		var element = document.getElementById('see')
		element.appendChild(btn);
		click(btn, 'Coursework');
	}
	else {
		var btn= document.createElement('BUTTON');
		btn.innerHTML = name;
		btn.setAttribute('class', 'button');
		var element = document.getElementById('see')
		element.appendChild(btn);
		clickRemove(btn);
	}
};
