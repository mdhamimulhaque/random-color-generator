const button = document.querySelector("button");
const showColour = document.querySelector("h3");
const backgroundBody = document.querySelector("body");

button.addEventListener("click",()=>{
    let color = "#";
    const randomNum = (Math.random().toString(16)).slice(2,8);
    const colorCode = `${color}${randomNum}`
    backgroundBody.style.backgroundColor = colorCode;
    showColour.innerHTML = colorCode;
    
})