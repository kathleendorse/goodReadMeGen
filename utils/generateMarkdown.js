//COMPARE TO GENERATEHTML() FUNCTION IN ACTIVITY 40- PASSING (ANSWERS) instead of (data) only use data internal to this function
//-should return the format of the .MD file in a string literal 
//including dynamic variables representing properties of the object returned fromt PROMPT();


//this works!!! **NEED TO ADD HTML?? LINKS and TAGS/BOLD???
// function to generate markdown for README
function generateMarkdown(data) {


  
  return `
  # ${data.title}        
  [ ![GitHub license] (https://img.shields.io/badge/license-${data.license}-blue.svg) ](${data.url})
  
  ## Description
  ${data.description} 

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  To install necessary dependencies, run the following command:

  \`
  ${data.dependencies}
  \`

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.license}.

  ## Contributing
  ${data.contribute}

  ## Tests
  To run tests, run the following command:
  
  \`
  ${data.tests}
  \`

  ## Questions
  If you have any questions about the repo, open an issue or contact [${data.username}] (https://github.com/${data.username}) directly at [${data.email}]
`;

}


//EXPORT- MAKES WHAT'S RETURNED BY THE GENERATEMARKDOWN FILE AVAILABLE TO USE IN INDEX.JS
module.exports = generateMarkdown;


