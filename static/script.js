async function testFuncTwo(companyString) { 
    fetch(`/companies/${companyString.substring(1)}`).then(async(res) => { 
        const json = JSON.parse(await res.text())
        const numberOfCompanies = Object.keys(json).length; 
        const totalScore = 0; 
        const totalApproachScore = 0; 


        for (let i of Object.keys(json)) { 
            totalScore += json[i]["totalScore"] / numberOfCompanies; 
            totalApproachScore += json[i]["approachScore"] / numberOfCompanies; 
        }
        document.createElement('h1').innerText = `AVERAGES -- TOTAL SCORE: ${totalScore}  APPROACH SCORE: ${approachScore}`; 

        for (let i of Object.keys(json)) { 
            document.createElement('h2').innerText = `${i} -- TOTAL SCORE: ${json[i]["totalScore"]}  APPROACH SCORE: ${json[i]["approachScore"]}}`;
        }
    }); 
}

async function testFunc(){
    let array; 
    await fetch("/csv").then(async(res)=> array = await res.text())
    console.log(typeof array)
    console.log(array)
}

function goForm(){
    localStorage.clear();
    localStorage.setItem("compList", "");
    
    console.log(localStorage.getItem("compList"), "AAAAAAA");
    location.href='/form';
}