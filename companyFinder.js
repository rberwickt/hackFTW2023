const fs = require('fs'); 
const companyArray = fs.readFileSync('./forest500-companies-data-download-2022.csv', {encoding:'utf8', flag:'r'}).split('\n')
const newCompanyArray = companyArray.map(e => e.split(','))
const companyJSON = {}; 

function removeQuotes(string) { 
    return string.replace(/['"]+/g, '')
}

newCompanyArray.forEach(company => {
  if (!Object.keys(companyJSON).includes(company[2])) {
      console.log(company[2])
    companyJSON[removeQuotes(company[2])] = {"totalScore": removeQuotes(company[7]), "approachScore": removeQuotes(company[14]).substring(2, 6)}
}  
})

fs.writeFileSync('./companies.txt', JSON.stringify(companyJSON), 'utf8')

