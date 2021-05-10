const inquirer = require("inquirer");
const createFile = require("./utils/createFile");
const generateMarkdown = require("./utils/generateMarkdown");


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
    choices: ["MIT", "Apache", "GPL", "BSD"]
  },
  {
    type: "input",
    message: "Add a brief description of the application",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide installation instruction",
    name: "install",
  },
  {
    type: "input",
    message: "Please provide usage instruction", 
    name: "applicationUsage",
  },
  {
      type: "input",
      message: "What contribute would you like to make to the application",
      name: "contributing"
  },
  {
      type: "input",
      message: "Please provide steps for running test in your application", 
      name: "testApplication", 
  },
  {
      type: "input",
      message: "Please enter your github user name",
      name: "github"
  },
  {
      type: "input",
      message: "Please enter your email address",
      name: "email"
  },
];

const writeToFile = (fileName, data) => {
    
};

const init = async () => {

    const answers = await inquirer.prompt(questions)
  
    const markdown = generateMarkdown(answers)
    
    createFile(markdown)
};

init();
