module.exports = templateData => {
    console.log(templateData);

    // destructure projects and about data from templateData based on their property key names

    return `
    ## Table of Cntents
    # ${templateData.title} 
    ## description
    ${templateData.Description}  
    - [Installation](#installation)
    ## Installation
    - [Usage](#usage)
    ## Usage
    - [Contributing](#contributing)
    ## Contributing
    - [Testing](#testing)
    ## Testing
   
   

    `;
    
  };