let landingPage = document.querySelector(".home"); 

let imgsArray = [ "1.jpg", "2.jpeg", "3.jpg", "5.jpeg"];

// landingPage.style.backgroundImage ='url("imge/2.jpg")';

// let randomNumber = Math.floor(Math.random() * imgsArray.length);

// console.log(randomNumber);
setInterval(() => {

    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    landingPage.style.backgroundImage ='url("images/' + imgsArray[randomNumber] +'")';
}, 5000);

// settings
document.querySelector(".icon-span .fa-gear").onclick = function(){
    this.classList.toggle("fa-spin");

    document.querySelector(".settings").classList.toggle("open");
};

// main-color switch
const colorsli = document.querySelectorAll(".colors li");

// console.log(colorsli);
    colorsli.forEach( li=> {

    li.addEventListener("click" , (e) => {

        console.log(e.target.dataset.color);

        document.documentElement.style.setProperty("--pink", e.target.dataset.color);
    });

});

// // random background  
// const  rbackground = document.querySelectorAll(".random span");

//     rbackground.forEach(span => {

//     span.addEventListener("click" , (e) => {

//         e.target.parentElement.querySelectorAll(".active").forEach(Element =>{

//         Element.classList.remove("active");


//         });
//         e.target.classList.add("active");

//         });
//     });
    
