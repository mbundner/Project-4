const names = ["Bart Simpson", "Marge Simpson", "Montgomery Burns", "Maggie Simpson", "Ned Flanders","Jimbo Jones", "Milhouse Van Houten", "Kearney",
               "Moe Szyslak", "Groundskeeper Willie", "Mayor Quimby", "Lenny Leonard", "Kent Brockman", "Ralph Wiggum", "Martin Prince, Jr",
               "Troy McClure", "Apu Nahasap...", "Reverend Lovejoy", "Barney Gumble", "Chief Wiggum","Princical Skinner", "Lisa Simpsons", 
               "Waylon Smithers", "Sideshow Bob", "Abe Simpson","Bleeding Gums Murphy","Homer Simpson", "Nelson Muntz", "Krusty The Clown", "Herb Powell"]

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
