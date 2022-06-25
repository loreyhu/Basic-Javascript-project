// Variables

let container = document.createElement("div")
let counterElement = document.createElement("h1")
let buttons = document.createElement("div")
let removeButton = document.createElement("button")
let addButton = document.createElement("button")
let resetButton = document.createElement("button")

let counter = 0 



// Function to show every elements inside the HTML

function showElements(){
    
    document.body.appendChild(container)
    container.className = "container"

    container.appendChild(counterElement)
    counterElement.innerHTML = counter

    container.appendChild(buttons)
    buttons.className = "buttons"
    
    buttons.appendChild(removeButton)
    removeButton.innerHTML = "-"

    buttons.appendChild(addButton)
    addButton.innerHTML = "+"

    buttons.appendChild(resetButton)
    resetButton.innerHTML = "Reset"
    
}

showElements()



// Events for buttons 

addButton.addEventListener("click", () =>{
    counter++
    counterElement.innerHTML = counter;
    addButton.style.backgroundColor = "#60d394";
    setTimeout(() => addButton.style.backgroundColor = "#495057", 200)
});

removeButton.addEventListener("click", () =>{
    if(!counter <= 0){
        counter--
        counterElement.innerHTML = counter;
        removeButton.style.backgroundColor = "#ee6055";
        setTimeout(() => removeButton.style.backgroundColor = "#495057", 200)
    }
});

resetButton.addEventListener("click", () =>{
    counter = 0;
    counterElement.innerHTML = counter
    resetButton.style.backgroundColor = "#00b4d8";
    setTimeout(() => resetButton.style.backgroundColor = "#495057", 200)
})