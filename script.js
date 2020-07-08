let topRow = document.querySelectorAll(".top")

console.log(topRow)

for(let i=0; i<topRow.length; i++){
    button = document.createElement("button")
    let br = document.createElement("br")
    button.innerText = "name"
    topRow[i].appendChild(br)
    topRow[i].appendChild(button)
    

}