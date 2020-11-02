const fs = require("fs");
const inquirer = require("inquirer");

inquirer
	.prompt([
		{
			type: "input",
			message: "What is the title of your README.md?",
			name: "title",
		},
		{
			type: "input",
			message: "Please give a description of your project",
			name: "description",
		},
		{
			type: "input",
			message: "Please give installation instructions",
			name: "installation",
		},
		{
			type: "input",
			message: "Please give usage information",
			name: "usage",
		},
		{
			type: "input",
			message: "Please list contribution guidelines",
			name: "contributors",
		},
		{
			type: "input",
			message: "Please give testing instructions",
			name: "testing",
		},
		{
			type: "input",
			message: "What is your Github user name?",
			name: "github",
		},
	])
	.then((answers) => {
		console.log(answers);

		const readMeTemplate = `# readMe-gen

${answers.title};
================================================

Table of Contents
-Description
-Installation Instructions
-Usage Information
-Contribution Guidelines
-Testing Instruction
-Questions

================================================

Project Description:
${answers.description};

================================================

Installation Instructions:
${answers.installation};

================================================

Usage Information:
${answers.usage};

================================================

Contribution Guidelines
${answers.contributors};

================================================

Testing Instructions
${answers.testing};

================================================

Questions
[Github Account](https://www.Github.com/${answers.github});
`;

		fs.writeFile("README.md", readMeTemplate, "utf8", (err) => {
			if (err) throw err;
			console.log("Successfully wrote README.md file!");
		});
	});

//     title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
