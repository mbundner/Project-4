//array of all 30 names in the game
const names = ["Bart Simpson", "Marge Simpson", "Montgomery Burns", "Maggie Simpson",
              "Ned Flanders","Jimbo Jones", "Milhouse Van Houten", "Kearney",
               "Moe Szyslak", "Groundskeeper Willie", "Mayor Quimby", "Lenny Leonard",  
               "Kent Brockman", "Ralph Wiggum", "Martin Prince, Jr",
               "Troy McClure", "Apu Nahasap...", "Reverend Lovejoy", "Barney Gumble",  
               "Chief Wiggum","Principal Skinner", "Lisa Simpson", 
               "Waylon Smithers", "Sideshow Bob", "Abe Simpson","Bleeding Gums Murphy",
               "Homer Simpson", "Nelson Muntz", "Krusty The Clown", "Herb Powell"]

let images = document.querySelectorAll(".image")
//console.log(images)
let tops = document.querySelectorAll(".top")
//console.log(tops)

//used a for loop to created a paragraph element for each image and attach a click
//event listener; when an image is clicked, their name appears below their image
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
//created a button for the player to click every time they know the character's name
//when clicked, an alert pops up on the screen and their "corret" score then increments up
let correct = document.querySelector("#correct")
//console.log(correct)

correct.addEventListener("click", incrementUp)

function incrementUp(e){
    e.preventDefault()
    score = document.querySelector("#score").innerHTML
    score++
    document.querySelector("#score").innerHTML = score
    alert("You guessed right! Good job!")
}

//created another button for the player to click when they guess wrong or don't know
//the character's name; an alert pops and their "incorrect" score increments up
let incorrect = document.querySelector("#incorrect")
//console.log(incorrect)

incorrect.addEventListener("click", incrementUp2)

function incrementUp2(e){
    e.preventDefault()
    score2 = document.querySelector("#score2").innerHTML
    score2++
    document.querySelector("#score2").innerHTML = score2
    alert("Sorry, that isn't right")
}

