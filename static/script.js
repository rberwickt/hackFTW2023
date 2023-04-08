async function testFuncTwo() { 
    fetch("/companies/company1&company").then(async(res) => document.getElementById('testDiv').innerHTML = await res.text());  
    fetch("thing").then(async(res) => { 
        const json = JSON.parse(await res.text())
        const numberOfCompanies = Object.keys(json).length; 

        for (let i of Object.keys(json)) { 

        }
        document.createElement('h1')
    }); 
}

async function testFunc(){
    let array; 
    await fetch("/csv").then(async(res)=> array = await res.text())
    console.log(typeof array)
    console.log(array)
}

