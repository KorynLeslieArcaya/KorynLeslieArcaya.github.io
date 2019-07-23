function objectiveText(){
	logText="A detailed-oriented software engineer who is passionate about C++, JavaScript, HTML, and Python."
	var listEle=document.createElement('p');
	listEle.setAttribute('class', 'objective');
	var textnode = document.createTextNode(logText);
	listEle.appendChild(textnode)
	document.getElementById("demo").appendChild(listEle);
}

var job_title=['Software Engineering Intern, Intel Corporation',
'Manufacturing Technician, Intel Corporation', 
'Customer Service Representative, University Housing and Dining Services', 
'Lab Assistant, Healthy Aging Program, Oregon State University (OSU)'
];
var year=['09/2018 - Present', '12/2015 - 09/2018','08/2012 - 06/2015', '03/2013 - 10/2014'];
var sei=['Interning with the programmable solutions group to validate FPGA hardware using Bash and Python', 
'Enables access to various FPGA components with SPI drivers in Python for hardware verification',
'Develops and updates shared code in Git and SVN to meet test plan specification'
];
var mt= ['Took initiative in an autonomous work environment',
'Worked effectively in a team setting to maintain equipment without compromising high output yields and quality',
'Debugged equipment when nonstandard events occurred thereby preventing a reduction in wafer output'
];
var csr = ['Interacted face-to-face with clients in a friendly and supportive manner',
'Assisted in in a team environment to perform assigned tasks with ambiguous instructions',
'Processed facility work orders, room change or cancellation forms, and other time-sensitive paperwork',
'Communicated with customers using Microsoft Outlook  and telephone on a tight timeline to ensure questions regarding procedures and services were fully understood',
'Adapted to changing procedures and work environments'
];
var la= ['Assisted the primary investigator on research projects regarding aging and memory',
'Studied and prepared experimental procedures through literature searches with great attention to detail',
'Collected, recorded, and analyzed timing and microbiome data using Microsoft Excel to understand the influence of NMDA receptors on memory' 
];

var experience_Array = new Array(4);
experience_Array[0]=sei;
experience_Array[1]=mt;
experience_Array[2]=csr;
experience_Array[3]=la;

function experienceText(){
	var j, k;
	for (j=0; j<job_title.length; j++){
		var listEle=document.createElement('br');
		document.getElementById("demo").appendChild(listEle);
		var listEle=document.createElement('div');
		listEle.setAttribute('class', 'experience_title');
		var textnode = document.createTextNode(job_title[j]);
		listEle.appendChild(textnode)
		document.getElementById("demo").appendChild(listEle);
		
		var listEle=document.createElement('div');
		listEle.setAttribute('class', 'experience_year');
		var textnode = document.createTextNode(year[j]);
		listEle.appendChild(textnode)
		document.getElementById("demo").appendChild(listEle);
		
		var listEle=document.createElement('br');
		document.getElementById("demo").appendChild(listEle);
		var listEle=document.createElement('br');
		document.getElementById("demo").appendChild(listEle);
		
		for (k=0; k < experience_Array[j].length; k++){
			var listEle=document.createElement('LI');
			listEle.setAttribute('class', 'sei_li');
			var textnode = document.createTextNode(experience_Array[j][k]);
	  		listEle.appendChild(textnode);
		document.getElementById("demo").appendChild(listEle);
		};

	};
}
var educationList=['Bachelors of Science, Computer Science, Oregon State Ecampus (OSU)',
'	Post Baccalaureate Professional degree',
'Bachelors of Science, Biology, Oregon State University (OSU), Corvallis',
'	Minors: Spanish and Chemistry',
'University of Georgia Study Abroad, Monteverde, Costa Rica',
];
var educationGpa=['GPA: 3.55', 'Expected: 09/2019', 'GPA: 3.31', 'Graduated: 08/2015', '06/2014 - 08/2014'];
function educationText(){
	var j;
	for (j=0; j < educationList.length; j++){
		var listEle=document.createElement('br');
		document.getElementById("demo").appendChild(listEle);
		
		var listEle=document.createElement('LI');
		listEle.setAttribute('class', 'education');
		var textnode = document.createTextNode(educationList[j]);
  		listEle.appendChild(textnode);
  		document.getElementById("demo").appendChild(listEle);

  		var listEle=document.createElement('LI');
		listEle.setAttribute('class', 'education_');
		var textnode = document.createTextNode(educationGpa[j]);
  		listEle.appendChild(textnode);
  		document.getElementById("demo").appendChild(listEle);
	};
}
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
	var listEle=document.createElement('br');
	document.getElementById("demo").appendChild(listEle);
	for (j=0; j < courseList.length; j++){
		var listEle=document.createElement('LI');
		listEle.setAttribute('class', 'c');
		var textnode = document.createTextNode(courseList[j]);
  		listEle.appendChild(textnode);
  		document.getElementById("demo").appendChild(listEle);
	};
}

var skillsList=['Programming & Scripting Languages','Software & Tools']

var programmingSkillsList=[
'Python (2 years)',
'JavaScript (2 years)',
'C/C++ (4 years)',
'Bash (2 years)',
'HTML/CSS (1 year)',
'AJAX (2 months)',
'MySQL (2 months)',
'Java (2 months)',
'OpenGL/OpenCL (2 months)'
];

var softwareSkillsList=[
'vi (4 years)',
'GNU Debugger (3 years)',
'OPAE (1 year)',
'SVN (1 year)',
'Git (2 years)',
'Gcov (2 months)',
'Visual Studio IDE (2 months)'
];
function skillsText(){
	var i, j;
	for( i=0; i < skillsList.length; i++) {
		var listEle=document.createElement('br');
		document.getElementById("demo").appendChild(listEle);
			var listEle=document.createElement('div');
			listEle.setAttribute('class', 'sc_heading');
				var textnode = document.createTextNode(skillsList[i]);
  				listEle.appendChild(textnode);
	document.getElementById("demo").appendChild(listEle);

		if (skillsList[i] == 'Programming & Scripting Languages'){
			for (j=0; j < programmingSkillsList.length; j++){
				var listEle=document.createElement('LI');
				listEle.setAttribute('class', 'sc');
				var textnode = document.createTextNode(programmingSkillsList[j]);
  				listEle.appendChild(textnode);
  				document.getElementById("demo").appendChild(listEle);
			};
		}
		if (skillsList[i] == 'Software & Tools'){
			for (j=0; j < softwareSkillsList.length; j++){
				var listEle=document.createElement('LI');
				listEle.setAttribute('class', 'sc');
				var textnode = document.createTextNode(softwareSkillsList[j]);
  				listEle.appendChild(textnode);
  				document.getElementById("demo").appendChild(listEle);
			};
		}
	};
};

var i;
//Every button has its own on click function to display the corresponding data.
var click = function(btn, title) {
	btn.onclick = function() {
		document.getElementById('front').innerHTML = " ";
		post('');
		if (title == 'Skills') {
			skillsText()	
		}
		if (title =='Objective') {
			objectiveText()
		} 
		if (title == 'Experience') {
			experienceText()
		} 
		if (title =='Education') {
			educationText()
		}
		if (title == 'Coursework') {
			courseworkText()
		}
	};
};

function post(logText) {
	document.getElementById('demo').innerHTML = logText;
}

var title = ['Objective', 'Experience', 'Education','Skills','Coursework'];
function buttonsCreated() {
	var btn = [];
	for (i=0; i < 5; i++) {
		text = title[i];

	btn.push(document.createElement('button'));
	btn[i].innerText = text;
	var element = document.getElementById('list')
	element.appendChild(btn[i]);
	click(btn[i], title[i]);
	}
};
