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
  const {
    titleName,
    description,
    install,
    applicationUsage,
    licenseName,
    contributing,
    testApplication,
    github,
    email,
  } = answers;

  return `# ${titleName}

![${licenseName} license](https://img.shields.io/badge/license-${licenseName}-green) (question 2 - choices)

## Description
${description}

## Table of Contents

  - [Project Title ${titleName}](#project-title-question-1---input)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation
${install}

## Usage
${applicationUsage}

## License
${licenseName}

## Contributing
${contributing}

## Tests
${testApplication}

## Questions
- View my [GitHub](https://github.com/${github}) profile 
- Email me at ${email}
`;
};

module.exports = generateMarkdown;
