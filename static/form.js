//ideally we generate radio buttons off of their input in order to have them choose the company to add

const htmlForm = document.getElementById("cform");
const cInput = document.getElementById("cname");
const radioDiv = document.getElementById("radioDiv");
async function searchComp(){
    let value = cInput.value;
    let array; 
    await fetch("/csv").then(async(res)=> array = await res.text())
    array = array.split('" "').slice(1);
    for(let i = 0;i<array.length;i++){
        array[i] = array[i].replace(/['"]+/g, '')
    }
    console.log(array);
    const found = [];
    for(let i = 0;i<array.length;i++){
        if(array[i].includes(value)){
            found.push(array[i]);
        }
    }
    for(let i = 0;i<found.length;i++){
        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.id = found[i];
        radioButton.value = found[i];
        radioButton.name = "company";

        const label = document.createElement("label");
        label.for = found[i];
        label.innerText = found[i];

        radioDiv.appendChild(radioButton);
        radioDiv.appendChild(label);
        radioDiv.appendChild(document.createElement("br"));
    }
}

htmlForm.addEventListener("submit", (event)=>{
    const data = new FormData(htmlForm);
    let output = "";
    for (const entry of data) {
      output = entry[1];
    }
    localStorage.setItem("compList", localStorage.getItem("compList") + "&" + output);
    console.log(localStorage.getItem("compList"));
    location.reload();
    
})
