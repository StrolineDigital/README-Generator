// Creates a badge for the license
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]';
    default:
      return '';
  }
}

// Creates a link to the license
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD 3':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return '';
  }
}

//Generates the license section of the README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  return license ? `## License
  This project is licensed under the ${license} license.` : '';
  }

// Creates the README markdown

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ${renderLicenseSection(data.license)}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions, please feel free to reach out to me at ${data.email}. 
  You can also view my GitHub profile at https://github.com/${data.github}



`;
}

module.exports = generateMarkdown;
