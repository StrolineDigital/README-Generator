// This block of constants contains the requirements for the application to run. 
//The first constant, inquirer, is required to prompt the user for input.
// The second constant, fs, is required to write the README file. 
//The third constant, generateMarkdown, is required to generate the markdown file. 
//The fourth constant, questions, is an array of questions that the user will be prompted to answer.

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// this constant contains an array of questions that the user will be prompted to answer
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide credits for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
    
    {
        type: 'input',
        name: 'questions',
        message: 'PRESS ENTER NOW!',
    },
];

// this function writes the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// this function initializes the app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    });
    }

// Function call to initialize app
init();
