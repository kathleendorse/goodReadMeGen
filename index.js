//**REQUIRING PACKAGES FOR PROMPTS, FILE SYSTEMS & UTILITY TO PROMISIFY
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const { stringify } = require("querystring");


// array of questions for user
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {   
        type: "input",
        name: "url",
        message: "What is the URL to your project?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        type: "list", 
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD",
            "None"
        ]
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to the repo?"
    } 
];



//***FOR THIS PORTION I SUGGEST LOOKING INTO PROMISIFY FIRST. ALSO MAKE SURE TO REFERENCE THE FILE PATH TO GENERATEMARKDOWN FILE */

// function to write README file
const writeToFileAsync = util.promisify(fs.writeFile);

//function writeToFile(fileName, data) {
//}

//THIS FUNCTION WILL HOLD THE OTHER FUNCTIONS SO THEY RUN WHEN IT'S CALLED- ON START - REFERENCE ACT 40 INDEX.JS SAME NAME

// function to initialize program
async function init() {
    //code to be tested that may throw errors
    try{
        //defining a function that prompts the user for input on the CL using objects contained w/in the questions array & returns their input in the form of an object
        function promptUser(){
            return inquirer.prompt(questions)
        }        
        //calling a function that saves the object returned from the promptuser function in a variable named answers once completed
        const answers = await promptUser();
        
        // called a function that takes dynamic variables from the answers object into a literal string and saves the content for the markdown file in a variable called markdown
        const markdown = generateMarkdown(answers);

        //Please note that I was unsure from the README.md instructions whether the name of the file was supposed to be README or the name of the project- the line of code beneath this could be swapped out for the string parameter being passed as the title to the writefile() function if the title was in fact supposed to be swapped out.
        // var projectTitle = answers.title.toLowerCase().split(' ').join('') + ".md"
        await writeToFileAsync("README.md", markdown);
        console.log("Successfully wrote your readme to the markdown file");
        //console.logs the object returned from promptuser()- WORKS !
        //console.log(answers);
        //console.logs the entire string literal returned from generatemarkdown()- WORKS!
        //console.log(markdown);

    }
    //what do do if an error is caught
    catch(err) {
        console.log(err);
      }




}

// function call to initialize program
init();

