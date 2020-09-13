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
            message: "What is the title?",
            name: "title"
        },
        {
            type: "input",
            message: "What is the description?",
            name: "description"
        },
        {
            type: "input",
            message: "What are the installation instructions?",
            name: "installation"
        },
        {
            type: "input",
            message: "What are the usage instructions?",
            name: "usage"
        },
        {
            type: "input",
            message: "Who are the collaborators?",
            name: "collaborators"
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
            console.log("Success!")
        })

        // get response values to display inside the documnet

        // use template literals and newlines to format information for the file

        // add markdown
        // use hashtags and astericks into template literals to format file
        // add badges
        //  Google how to add badges
        // Is there a better way to refactor than to make it one big string?

    })

function formatMD(response) {
    return `${response.username}
        ${response.title}
        ${response.description}
        ${response.installation}
        ${response.usage}
        ${response.collaborators}
        ${response.lisense}`
}