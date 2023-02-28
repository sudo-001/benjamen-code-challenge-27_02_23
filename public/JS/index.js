let linkContainer = document.querySelector(".links-container")

let links = document.querySelectorAll("ul li");
let bigHeaderSpan1 = document.querySelector(".big-header > .top > span");
let bigHeaderSpan2 = document.querySelector(".big-header > .bottom > span");


let images = document.querySelectorAll(".img");

// console.log(links)

links.forEach(elt => {
    elt.addEventListener("mouseover", () => {
        links.forEach(elt => {
            // elt.classList.remove("active");
            elt.classList.toggle("inactive");
    
        })
        
        links.forEach(elt => {
            elt.classList.remove("active");
        })

        // elt.classList.remove("inactive");
        elt.classList.toggle("active");
        
    })
})

console.log(linkContainer)
linkContainer.addEventListener("mouseover", () => {

    links.forEach(elt => {
        // elt.classList.remove("active");
        elt.classList.add("inactive");

    })
})


linkContainer.addEventListener("mouseout", () => {

    links.forEach(elt => {
        elt.classList.remove("active");
        elt.classList.remove("inactive");
    })
})

setTimeout(() =>{
    bigHeaderSpan1.classList.add("open")
}, 1000)

setTimeout(() =>{
    bigHeaderSpan2.classList.add("open")
}, 1000)

// Section des images
console.log(images)
setTimeout(() =>{
    images[0].classList.add("open")
}, 2000)

setTimeout(() =>{
    images[1].classList.add("open")
}, 2500)

setTimeout(() =>{
    images[2].classList.add("open")
}, 3000)