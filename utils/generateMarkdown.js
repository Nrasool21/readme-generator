
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

  - [Project Title ${titleName}](#project-title)
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
