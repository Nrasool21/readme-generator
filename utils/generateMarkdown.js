// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  return `# ${answers.titleName}

![mit license](https://img.shields.io/badge/license-MIT-green) (question 2 - choices)

## Description
${answers.description}

## Table of Contents

  - [Project Title (question 1 - input)](#project-title-question-1---input)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation
${answers.install}

## Usage
${answers.applicationUsage}

## License
${answers.licenseName}

## Contributing
${answers.contributing}

## Tests
${answers.testApplication}

## Questions
- View my [GitHub](${answers.github})profile
- Email me at ${answers.email}
`;
};

module.exports = generateMarkdown;
