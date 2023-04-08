//ideally we generate radio buttons off of their input in order to have them choose the company to add

const htmlForm = document.getElementById("cform");
const cInput = document.getElementById("cname");
sessionStorage.setItem("list", []);
async function searchComp(){
    let value = cInput.value;
    const comparisons = await fetch("/compare").then(data=>{
        const found = [];
        for(let i = 0;i<data.length;i++){
            if(data[i].includes(value)){
                found.push(data[i]);
            }
        }
    });
    for(let i = 0;i<data.length;i++){
        
    }
    

}