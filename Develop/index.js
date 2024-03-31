// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [

    // Question to generate the title
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project',
     
    },
   // Question to generate the description 
    {
      type: 'input',
      name: 'description', 
      message: 'Describe your application',
    },
    // Question to generate the installation 
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how to install the application'
    },
    // Question to generate usag of the app
    {
        type: 'input',
        name: 'usage',
        message: 'Provide examples how the application is used'        
    },
    // Multiple choice of which licence will be used, created using the inquirer 
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['no license','mit', 'Apache','GPLv2']
    },
    // Yes or no if the user had contributions to the project, using the confirm type
    {
        type: 'confirm',
        name: 'confirmContributors',
        message: 'Did anyone contribute to this application?',
        default: true
    },
    // Function if yes, or else, for contributions
    {
        type: 'input',
        name: 'contributors',
        message: 'Please provide role in contribution.',
        when: ({ confirmContributors }) => {
            if (confirmContributors) {
                return true;
            } else {
                message: 'No contributions';
                // return false;
            }
        },
        validate: contributorsInput => {
            if (contributorsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide instructions and examples of how the code is tested:',
    },

    // Input for email and github user 

    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username? (Required)',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
    },


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README file created successfully!');
    });
    
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answer) => {
        console.log(answer);
        const markdown = generateMarkdown(answer);
        writeToFile('README.md', markdown);
    })
    .catch((err) => {
        console.log(err);
    }
    );
    {
        // console.log('README file created successfully!');
    }
};

// Function call to initialize app
init();
