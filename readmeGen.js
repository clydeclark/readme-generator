// require fs, inquirer
const fs = require("fs");
const inquirer = require("inquirer");

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
        let formattedData = formatMD(response);
        fs.writeFile("./SaveFile/Readme.md", formattedData, function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("Readme Generated!")
        })

        // use template literals and newlines to format information for the file

        // add markdown
        // use hashtags and astericks into template literals to format file
        // add badges
        //  Google how to add badges
        // Is there a better way to refactor than to make it one big string?

    })

function formatMD(response) {
    return `# ${response.title}

## Description

${response.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)
    
* [Contributing](#contributing)
    
* [Tests](#tests)
    
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${response.installation}
\`\`\`

## Usage

${response.usage}

## License

${response.license}

## Contributing

${response.collaborate}

## Tests

To run tests, run the following command:

\`\`\`
${response.test}
\`\`\`

## Questions

Send questions to ${response.email}. You can find my work at [clydeclark](https://github.com/${response.username}).`
}