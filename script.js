let topRow = document.querySelectorAll(".top")
//console.log(topRow)

for(let i=0; i<topRow.length; i++){
    button = document.createElement("button")
    let br = document.createElement("br")
    button.innerText = "name"
    topRow[i].appendChild(br)
    topRow[i].appendChild(button)
}

let middleRow = document.querySelectorAll(".middle")
//console.log(middleRow)

for(let i=0; i<middleRow.length; i++){
    button = document.createElement("button")
    let br = document.createElement("br")
    button.innerText = "name"
    middleRow[i].appendChild(br)
    middleRow[i].appendChild(button)
}
    
let bottomRow = document.querySelectorAll(".bottom")
//console.log(bottomRow)

for(let i=0; i<bottomRow.length; i++){
    button = document.createElement("button")
    let br = document.createElement("br")
    button.innerText = "name"
    bottomRow[i].appendChild(br)
    bottomRow[i].appendChild(button)
    
}