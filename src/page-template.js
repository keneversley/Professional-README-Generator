module.exports = templateData => {
    console.log(templateData);

    // destructure projects and about data from templateData based on their property key names

    return `
    # ${templateData.title} 
    ## description
    ${templateData.Description}  
    ## Table of Cntents
    - [Installation](#installation)
    ## Installation
    ` 
    
  };