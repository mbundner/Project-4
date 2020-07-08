const names = ["Bart Simpson", "Marge Simpson", "Montgomery Burns", "Maggie Simpson", "Ned Flanders",
               "Jimbo Jones", "Milhouse", "Troy McClure", "Apu", "Reverend Lovejoy", "Barney", "Chief Wiggum",
               "Princical Skinner", "Lisa", "Smithers", "Sideshow Bob", "Abe Simpson","Bleeding Gums Murphy",
               "Homer Simpson", "Nelson Muntz" ]

let images = document.querySelectorAll(".image")
//console.log(images)
let tops = document.querySelectorAll(".top")
//console.log(tops)

for(let i=0; i<images.length; i++){
    let p = document.createElement("paragraph")
    let br = document.createElement("br")
    p.innerHTML = names[i]
    images[i].addEventListener("click", revealName)
      
    function revealName(e){
       e.preventDefault()
       tops[i].appendChild(br)
       tops[i].appendChild(p)
    }
    
}
    
/*
images[i].addEventListener("click", revealName)
      function revealName(e){
          e.preventDefault()
          console.log(e)

*/




   /*

    
    
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
/*
let correct = document.querySelector("#correct")
//console.log(correct)

correct.addEventListener("click", incrementUp)

function incrementUp(e){
    e.preventDefault()
    score = document.querySelector("#score").innerHTML
    score++
    document.querySelector("#score").innerHTML = score
    alert("You guessed right!")
}
*/