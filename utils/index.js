// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project",
    name: "titleName",
  },
  {
    type: "list",
    message: "What type of a license would you like to use",
    name: "licenseName",
    choices: ["MIT", "Apache", "GPA", "MNA"]
  },
  {
    type: "input",
    message: "Add a brief description of the application",
    name: "description",
  },
  {
    type: "input",
    message: "How would you like to install the application",
    name: "install",
  },
  {
    type: "input",
    message: "Would you like to know how to use the application", 
    name: "applicationUsage",
  },
  {
      type: "input",
      message: "Feel free to contribute at all to the application",
      name: "contributing"
  },
  {
      type: "input",
      message: "Test the application", 
      name: "testApplication", 
  },
  {
      type: "input",
      message: "Please share your github profile link",
      name: "github"
  },
  {
      type: "input",
      message: "Please share your email address",
      name: "email"
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    
};

// TODO: Create a function to initialize app
const init = async () => {

    const answers = await inquirer.prompt(questions)
    console.log(answers)
    const markdown = generateMarkdown(answers)
    console.log(markdown)
};

// Function call to initialize app
init();
