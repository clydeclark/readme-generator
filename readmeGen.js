// require fs, inquirer, generateMarkdown
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

// prompt questions
inquirer
    .prompt([{
            type: "input",
            message: "What is your Github username",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the project's name?",
            name: "title"
        },
        {
            type: "input",
            message: "Write a short description of the project?",
            name: "description"
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "installation"
        },
        {
            type: "input",
            message: "What command should be run to run tests?",
            name: "test"
        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "usage"
        },
        {
            type: "input",
            message: "How to collaborate?",
            name: "collaborate"
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license does your project have?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        }
    ])
    .then(function (response) {
        // get proper link for license
        let licenseBadge = setBadge(response.license);
        // format readme
        let formattedData = generateMarkdown(response, licenseBadge);
        // write to file
        fs.writeFile("./SaveFile/Readme.md", formattedData, function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("Readme Generated!")
        })
    })

function formatMD(response, licenseBadge) {
    return
}

function setBadge(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "APACHE 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "GPL 3.0") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "BSD 3") {
        return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else {
        return "";
    }
}