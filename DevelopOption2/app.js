// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const engineerCard = require("./htmlRender/engineerCard");
const internCard = require("./htmlRender/internCard");
const managerCard = require("./htmlRender/managerCard");
const mainRender = require("./htmlRender/mainRender");

const outputPath = path.resolve(__dirname, "stuff", "team.html");

const teamMember = [];

function mainApp() {
  // create a manager
  inquirer
    .prompt([
      {
        type: "input",
        message: "Whats is your managers name?",
        name: "managerName"
      },
      {
        type: "input",
        message: "What is your managers id",
        name: "managerId"
      },
      {
        type: "input",
        message: "What is your managers email",
        name: "managerEmail"
      }
    ])
    .then(answers => {
      const { managerName, managerId, managerEmail, managerNumber } = answers;
      const managerObj = newManager(
        managerName,
        managerId,
        managerEmail,
        managerNumber
      );

      const managerCardHtml = managerCard(managerObj);

      teamMember.push(managerCardHtml);
      createTeam();
    });
}
// this function create a list to add teammembers
function createTeam() {
  inquirer.prompt([]).then(answers => {
    // create a switch statement to choose between engineer, intern, or build team
  });
}

// a function that create an engineer
function getEngineer() {
  inquirer.prompt([]).then(answers => {});
}
// a function that create an intern
function getIntern() {
  inquirer.prompt([]).then(answers => {});
}

function buildTeam() {
  fs.writeFileSync(outputPath, mainRender(teamMember), "utf-8");
}

mainApp();
