// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/svg_generator');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes');

// Creates questions for user input
const questions = [
    { type: 'input', name: 'text', message: 'Enter text up to 3 charachters:',
        validate: function (text) {
            if (0 < text.length && text.length < 4) {
                return true
            } else {
                console.log(' Wrong input length')
                return false
            }}
    },
    { type: 'input', name: 'textColor', message: 'Enter text color keyword (OR a hexadecimal number):' },
    { type: 'list', name: 'shape', message: 'Select your shape:', choices: ['Circle', 'Triangle', 'Square'] },
    { type: 'input', name: 'shapeColor', message: 'Enter shape color keyword (OR a hexadecimal number):' },
];

// Function writes code to svg file
function writeToFile(data) {
    fs.writeFile('./examples/logo.svg', data, (err) => err ? console.error(err) : console.log('Generated logo.svg!'));
};

// Function initializes the app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            eval("logo = new " + answers.shape + "(answers.text, answers.textColor, answers.shape, answers.shapeColor)");
            writeToFile(generateSVG(logo.renderTxt(), logo.renderShape()));
        })
        .catch((err) => console.log(err));       
};

// Function call to initialize app
init();
