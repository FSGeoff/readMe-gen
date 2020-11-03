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
		{
			type: "input",
			message: "What is your email?",
			name: "email",
		},
		{
			type: "list",
			message: "Please choose a license.",
			name: "license",
			choices: ["ISC", "MIT"],
			default: ["ISC"],
		},
	])
	.then((answers) => {
		console.log(answers);

		const readMeTemplate = `

${answers.title}\n


[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})

________________
## Table of Contents \n
*[Project Description](#project-description)\n
*[Installation Instructions](#installation-instructions)\n
*[Usage Information](#usage-information)\n
*[Contribution Guidelines](#contribution-guidelines)\n
*[Testing Instruction](#testing-instructions)\n
*[Questions](#questions)


_______________________\n
## Project Description: \n
${answers.description}


_____________________________\n
## Installation Instructions: \n
${answers.installation}


____________________\n
## Usage Information \n
${answers.usage}


__________________________\n
## Contribution Guidelines \n
${answers.contributors}


_______________________\n
## Testing Instructions \n
${answers.testing}


______________\n
## Questions \n
Please feel free to email me w/any additional questions \n
 ${answers.email}\n
[Github Account](https://www.Github.com/${answers.github})
`;
		const time = Date.now();
		fs.writeFile("time.md", readMeTemplate, "utf8", (err) => {
			if (err) throw err;
			console.log("Successfully wrote README.md file!");
		});
	});
