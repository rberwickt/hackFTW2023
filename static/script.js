

async function testFunc(){
    return await fetch("/csv").then(async(res)=> {console.log(res.text())
    })
}

