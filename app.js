const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

//const pageHTML = generatePage(name, github);

//fs.writeFile('./index.html', pageHTML, err => {
  //if (err) throw err;

  //console.log('Portfolio complete! Check out index.html to see the output!');
//});
const promptUser = () => {
   

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your title? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your title!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'Description',
            message: 'What is your Description? (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your Description!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'Installation',
            message: 'What is your Installation? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your Installation!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'Usage',
            message: 'What is your Usage? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your Usage!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'Contributing',
            message: 'What is your Contributing? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your Contributing!');
                return false;
              }
            }
          },
      
    ]);
  };

//   const promptProject = portfolioData => {
//     console.log(`
//   =================
//   Add a New Project
//   =================
//   `);
//   // If there's no 'projects' array property, create one
// if (!portfolioData.projects) {
//     portfolioData.projects = [];
//   }
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'Tests',
//             message: 'What is the name of your Tests? (Required)',
//             validate: nameInput => {
//               if (nameInput) {
//                 return true;
//               } else {
//                 console.log('You need to enter a Tests!');
//                 return false;
//               }
//             }
//           },
//       {
//         type: 'input',
//         name: 'Questions',
//         message: 'Provide a description of the Questions (Required)',
//         validate: descriptionInput => {
//             if (descriptionInput) {
//                 return true;
//             } else {
//                 console.log('You need to ennter a project Questions!');
//                 return false;
//             }
//         }
//       },
//       {
//         type: 'list',
//         name: 'License',
//         message: 'What did you build this project with? (Check all that apply)',
//         choices: ['MIT', 'BSD_3', 'NONE']
//       },
      
     
//     ])
//     .then(projectData => {
//         portfolioData.projects.push(projectData);
//         if (projectData.confirmAddProject) {
//           return promptProject(portfolioData);
//         } else {
//           return portfolioData;
//         }
//       });
    

    
//   };
  promptUser()
  //.then(promptProject)
  .then(portfolioData => {
    const pageREADME = generatePage(portfolioData);

     fs.writeFile('./README.md', pageREADME, err => {
     if (err) throw new Error(err);

    console.log('README!');
    });
  });