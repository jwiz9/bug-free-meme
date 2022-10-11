const inquirer = require("inquirer");
const generateHtml = require("./src/generateHtml");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const writeFile = require("./src/generateFiles");

let managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "Enter the Manager's name (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the Manager's name!");
            return false;
        }
    },
    {
        type: "input",
        name: "managerId",
        message: "Enter the Manager's ID (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in Manager's ID!");
            return false;
        }
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Enter the Manager's email (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the Manager's email!");
            return false;
        }
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "Enter the Manager's office number (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in Manager's office number!");
            return false;
        }
    },
]

let employeeTypeQuestion = [
    {
        type: "list",
        name: "employeeType",
        message: "Choose an intern or engineer to add to your roster.  Choose exit to just have a manager",
        choices: ["engineer", "intern", "exit"]
    }
]


let engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "Enter the engineer's name (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the engineer's name!");
            return false;
        }
    },
    {
        type: "input",
        name: "engineerId",
        message: "Enter the engineer's ID (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in engineer's ID!");
            return false;
        }
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Enter the engineer's email (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the engineer's email!");
            return false;
        }
    },
    {
        type: "input",
        name: "github",
        message: "Enter the engineer's github username (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the engineer's username!");
            return false;
        }
    },
]

let internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "Enter the intern's name (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the intern's name!");
            return false;
        }
    },
    {
        type: "input",
        name: "internId",
        message: "Enter the intern's ID (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the intern's ID!");
            return false;
        }
    },
    {
        type: "input",
        name: "internEmail",
        message: "Enter the intern's email (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the intern's email!");
            return false;
        }
    },
    {
        type: "input",
        name: "school",
        message: "Enter the intern's school (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the intern's school!");
            return false;
        }
    },
]

const makeTeam = async () => {
    let interns = [];
    let engineers = [];
    let chooseEmployees = true;
    let managerInfo = await inquirer.prompt(managerQuestions);
    const {...manager} = managerInfo;
    let registeredManager = new Manager(manager.managerName, manager.managerId, manager.managerEmail, manager.managerOfficeNumber);

    while (chooseEmployees === true) {
        let {employeeType} = await inquirer.prompt(employeeTypeQuestion);

        if (employeeType === "intern") {
            let employee = await inquirer.prompt(internQuestions);
            let registeredEmployee = new Intern(employee.internName, employee.internId, employee.internEmail, employee.school);
            interns.push(registeredEmployee);
            console.log(interns);
        }
        else if (employeeType === "engineer") {
            let employee = await inquirer.prompt(engineerQuestions);
            let registeredEmployee = new Engineer(employee.engineerName, employee.engineerId, employee.engineerEmail, employee.github);
            engineers.push(registeredEmployee);
            console.log(engineers);
        }
        else {
            chooseEmployees = false;
        }
    }

    return {
        registeredManager,
        interns,
        engineers
    }
}

const initApp = () => {
    makeTeam()
    .then(teamData => generateHtml(teamData))
    .then(data => writeFile(data)); 
}

initApp();