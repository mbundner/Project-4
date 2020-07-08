const names = ["Bart Simpson", "Marge Simpson", "Montgomery Burns", "Maggie Simpson", "Ned Flanders",
               "Jimbo Jones", "Milhouse", "Troy McClure", "Apu", "Reverend Lovejoy", "Barney", "Chief Wiggum",
               "Princical Skinner", "Smithers", "Sideshow Bob", "Abe Simpson","Bleeding Gums Murphy",
               "Homer Simpson", "Nelson Muntz" ]









/*
let topRow = document.querySelector(".top")
//console.log(topRow)
    
let button = document.createElement("button")
    let br = document.createElement("br")
    button.classList.add("button")
    button.innerText = "who is this?"
    topRow.appendChild(br)
    topRow.appendChild(button)
    let br2 = document.createElement("br")
    
    
   
    button.addEventListener("click", revealName)
    
    function revealName(e){
      e.preventDefault()
      p = document.createElement("paragraph")
      p.classList.add("text")
      p.innerText = names[0]
      topRow.appendChild(br2)
      topRow.appendChild(p)
      
    }

*/















/*
for(let i=0; i<topRow.length; i++){
    let button = document.createElement("button")
    let br = document.createElement("br")
    button.classList.add("button")
    button.innerText = "name"
    topRow[i].appendChild(br)
    topRow[i].appendChild(button)
}

let middleRow = document.querySelectorAll(".middle")
//console.log(middleRow)

for(let i=0; i<middleRow.length; i++){
    let button = document.createElement("button")
    let br = document.createElement("br")
    button.classList.add("button")
    button.innerText = "name"
    middleRow[i].appendChild(br)
    middleRow[i].appendChild(button)
}
    
let bottomRow = document.querySelectorAll(".bottom")
//console.log(bottomRow)

for(let i=0; i<bottomRow.length; i++){
    let button = document.createElement("button")
    let br = document.createElement("br")
    button.classList.add("button")
    button.innerText = "name"
    bottomRow[i].appendChild(br)
    bottomRow[i].appendChild(button)
    
}
*/

let correct = document.querySelector("#correct")
//console.log(correct)

correct.addEventListener("click", incrementUp)

function incrementUp(e){
    e.preventDefault()
    score = document.querySelector("#score").innerHTML
    score++
    document.querySelector("#score").innerHTML = score

}