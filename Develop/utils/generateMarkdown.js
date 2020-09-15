// function to generate markdown for README
function generateMarkdown(response, licenseBadge) {
  return `## ${response.title} ${licenseBadge}
  
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
  
  Send questions to ${response.email}. You can find my work at [clydeclark](https://github.com/${response.username}).`;
}

module.exports = generateMarkdown;