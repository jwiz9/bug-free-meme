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
        message: "Please enter the Manager's name",
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
        message: "Please enter the Manager's ID",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the Manager's ID!");
            return false;
        }
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Please enter the Manager's email",
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
        message: "Please enter the Manager's office number",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the Manager's office number!");
            return false;
        }
    },
]

let employeeTypeQuestion = [
    {
        type: "list",
        name: "employeeType",
        message: "Choose an Intern or Engineer to add to your roster, or choose exit to just have a manager",
        choices: ["engineer", "intern", "exit"]
    }
]


let engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "Please enter the Engineer's name",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the Engineer's name!");
            return false;
        }
    },
    {
        type: "input",
        name: "engineerId",
        message: "Please enter the Engineer's ID",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the Engineer's ID!");
            return false;
        }
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Please enter the Engineer's email",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the Engineer's email!");
            return false;
        }
    },
    {
        type: "input",
        name: "github",
        message: "Please enter the Engineer's github username",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the Engineer's username!");
            return false;
        }
    },
]

let internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "Please enter the Intern's name",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the Intern's name!");
            return false;
        }
    },
    {
        type: "input",
        name: "internId",
        message: "Please enter the Intern's ID",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the Intern's ID!");
            return false;
        }
    },
    {
        type: "input",
        name: "internEmail",
        message: "Please enter the Intern's email",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the Intern's email!");
            return false;
        }
    },
    {
        type: "input",
        name: "school",
        message: "Please enter the Intern's school",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the Intern's school!");
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