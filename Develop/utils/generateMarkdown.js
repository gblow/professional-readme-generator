// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## License
    The application is covered under the following license:
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage) 
  * [License](#license) 
  * [Contributor](#contributor) 
  * [Tests](#test) 
  * [Questions](#questions) 
  
  
  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributor

  ${data.confirmContributors}

  ## Tests

  ${data.test}

  ## Questions
  
 Have questions? Contact me using the following links:

  [GitHub](https://github.com/${data.githubUsername})
  
  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
