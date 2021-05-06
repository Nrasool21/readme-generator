// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const createFile = require("./utils/createFile");
const generateMarkdown = require("./utils/generateMarkdown");

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
      message: "Can you give any information on testing the application", 
      name: "testApplication", 
  },
  {
      type: "input",
      message: "Please enter your github URL",
      name: "github"
  },
  {
      type: "input",
      message: "Please enter your email address",
      name: "email"
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    
};

// TODO: Create a function to initialize app
const init = async () => {

    const answers = await inquirer.prompt(questions)
  
    const markdown = generateMarkdown(answers)
    
    createFile(markdown)
};

// Function call to initialize app
init();
