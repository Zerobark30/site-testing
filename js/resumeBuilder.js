var work = {
	"jobs" : [
		{
			"title" : "Senior Data Analyst",
			"employer" : "Montefiore Medical Center",
			"years" : "2012 - present",
			"location" : "New York, NY",
			"description" : "Developed and maintained database management and business analytics to suport the Strategic Planning department and the Montefiore strategic plan in general"
		},
		{
			"title" : "Supply Chain Analyst",
			"employer" : "Greater New York Hospital Association",
			"years" : "2011 - 2012",
			"location" : "New York, NY",
			"description" : "Created and presented analytics related to supply chain and contract optimization for hospitals in the Greater New York area"
		},
		{
			"title" : "Community Health Educator",
			"employer" : "United States Peace Corps",
			"years" : "2008 - 2010",
			"location" : "Turkmenistan",
			"description" : "Taught general health education, english and teaching methodologies, in Turkmen and Uzbek to Turkmen nationals"
		}]
};

var projects = {
	"projects" : [
		{
			"title" : "ZeroBark30 Productions website",
			"dates" : "December 2014 - present",
			"description" : "Developing website to curate work relating to different interests",
			"image" : "images/ZB3.JPG"
		}
	]
};

var bio = {
	"name" : "Matthew Wells",
	"role" : "Web Developer",
	"contacts" :  {
		"email" : "matthewpwells@gmail.com",
		"phone" : "(609) 731-7278",
		"github" : "ZeroBark30",
		"location": "Los Angeles, CA"},
	"picture_url" : "images/profile.JPG",
	"welcome_message" : "Do or do not. There is no try.",
	"skillz" : ["Data Analysis","Database Management","HTML","CSS","JavaScript",
		"Chihuahua wrangling"]
};

var education = {
    "schools" : [
        {
            "school": "Quinnipaic University",
            "Years": "2003 - 2005",
            "location": "Hamden, CT",
            "major": "Sociology",
			"degree": "transferred"
        },
        {
            "school": "University of North Carolina",
            "Years": "2005 - 2007",
            "location": "Chapel Hill, NC",
            "major": "Sociology",
			"degree": "Bachelor of Science"
        }
    ],
	"onlineCourses" : [
		{
		"title" : "Calculus 1",
		"school" : "Berkeley Extension",
		"dates" : 2015,
		"url" : "http://extension.berkeley.edu/search/publicCourseSearchDetails.do?method=load&courseId=41487"
		},
		{
		"title" : "JavaScript Syntax",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "http://www.udacity.com/course/ud804"
		},
		{
		"title" : "How to use Git and GitHub",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "http://www.udacity.com/course/ud775"
		},
		{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"dates" : 2014,
		"url" : "https://www.udacity.com/course/ud304"
		},
		{
		"title" : "Intro to Computer Science",
		"school" : "Udacity",
		"dates" : 2014,
		"url" : "https://www.udacity.com/course/cs101"
		},
		{
		"title" : "Intro to systematic program design",
		"school" : "Coursera",
		"dates" : 2013,
		"url" : "https://www.coursera.org/course/programdesign"
		}
	]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPic = HTMLbioPic.replace("%data%",bio.picture_url);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGitHub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.phone);
	var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcome_message);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	$("#topContacts").append(formattedLocation);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedGitHub);
	
	$("#footerContacts").append(formattedLocation);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedGitHub);

	$("#header").append(formattedPic);
	$('#header').append(formattedWelcome);

	if(bio.skillz.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (skill in bio.skillz) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skillz[skill]);
			$("#skillsH3").append(formattedSkill);
		};
	};
};

work.displayWork = function() {
	if(work.jobs.length > 0) {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%",
				work.jobs[job].employer); 
			var formattedTitle = HTMLworkTitle.replace("%data%",
				work.jobs[job].title);
			var titleAndEmployer = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(titleAndEmployer);

			var formattedLocation = HTMLworkLocation.replace
				("%data%",work.jobs[job].location);
			$(".work-entry:last").prepend(formattedLocation);

			var formattedDates = HTMLworkDates.replace
				("%data%",work.jobs[job].years);
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace
				("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		};
	};
};

projects.display = function() {
	if (projects.projects.length > 0) {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace
				("%data%",projects.projects[project].title);
			$(".project-entry:last").append(formattedProjectTitle);

			var formattedProjectDate = HTMLprojectDates.replace
				("%data%",projects.projects[project].dates);
			$(".project-entry:last").append(formattedProjectDate);

			var formattedProjectDescription = HTMLprojectDescription.replace
				("%data%",projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectDescription);

			if (projects.projects[project].image != undefined) {
				var formattedProjectImage = HTMLprojectImage.replace
					("%data%",projects.projects[project].image);
				$(".project-entry:last").append(formattedProjectImage);
			};
		};
	};
};

education.displaySchools = function() {
	if (education.schools.length > 0) {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			
			var formattedSchoolName = HTMLschoolName.replace
				("%data%",education.schools[school].school);
			var formattedSchoolDegree = HTMLschoolDegree.replace
				("%data%",education.schools[school].degree);
			var formattedNameDegree = formattedSchoolName + 
				formattedSchoolDegree;
			$(".education-entry:last").append(formattedNameDegree);

			var formattedSchoolDates = HTMLschoolDates.replace
				("%data%",education.schools[school].Years);
			$(".education-entry:last").append(formattedSchoolDates);

			var formattedSchoolLocation = HTMLschoolLocation.replace
				("%data%",education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);

			var formattedSchoolMajor = HTMLschoolMajor.replace
				("%data%",education.schools[school].major);
			$(".education-entry:last").append(formattedSchoolMajor);
		};
	};

	$("#education:last").append(HTMLonlineClasses);

	if (education.onlineCourses.length > 0) {
		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolOnlineTitle = HTMLonlineTitle.replace
				("%data%",education.onlineCourses[course].title);
			var formattedSchoolOnlineSchool = HTMLonlineSchool.replace
				("%data%",education.onlineCourses[course].school);
			var formattedTitleSchool = formattedSchoolOnlineTitle +
				formattedSchoolOnlineSchool;
			var formattedTitleSchoolURL = formattedTitleSchool.replace(
				'"#"',education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedTitleSchoolURL);

			var formattedSchoolOnlineDates = HTMLonlineDates.replace
				("%data%",education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedSchoolOnlineDates);

			var formattedOnlineURL = HTMLonlineURL.replace
				("%data%",education.onlineCourses[course].url);
			var formattedURLHref = HTMLonlineURL.replace
				('"#"',education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedOnlineURL);
		};
	};
};

projects.display();
bio.display();
education.displaySchools();
work.displayWork();

$("#mapDiv").append(googleMap);