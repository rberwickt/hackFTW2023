async function testFuncTwo() { 
    let companyArray; 
    await fetch('/companies').then(async (res) => companyArray = JSON.parse(await res.text()))
    //await fetch("/csv").then(async(res)=> array = await res.text())
    const companyString = localStorage.getItem("compList");
    const yourCompanyArray = companyString.substring(1).split('&')
    console.log(yourCompanyArray)
    console.log(companyArray)
    
    let json = {};
    yourCompanyArray.forEach(name => json[name] = companyArray[name]);
        const numberOfCompanies = Object.keys(json).length; 
        let totalScore = 0; 
        let totalApproachScore = 0; 
    console.log(json)
        const div = document.getElementById('displayDiv'); 
        for (let i of Object.keys(json)) { 
            totalScore += parseFloat(json[i]["totalScore"]) / numberOfCompanies; 
            totalApproachScore += parseFloat(json[i]["approachScore"]) / numberOfCompanies; 
        }
        let i = document.createElement('h1'); 
        i.innerText = `AVERAGES \n TOTAL SCORE: ${totalScore}  \nAPPROACH SCORE: ${totalApproachScore}`; 
        div.appendChild(document.createElement("br"))
        div.appendChild(i);
        for (let i of Object.keys(json)) { 
            
            let j = document.createElement('h2')
            j.innerText = `${i} -- TOTAL SCORE: ${json[i]["totalScore"]}  APPROACH SCORE: ${json[i]["approachScore"]}`;
            div.appendChild(j)
        }

}
