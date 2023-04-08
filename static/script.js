

async function testFunc(){
    let array; 
    await fetch("/csv").then(async(res)=> array = await res.text())
    console.log(typeof array)
    console.log(array)
}

