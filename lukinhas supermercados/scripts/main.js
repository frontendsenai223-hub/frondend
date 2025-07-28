/*
myimage.onclick = () => {
    const mySrc = myimage.getAttribute("src")
    if(mySrc === "images/feijao.png") {
        myimage.setAttribute("src" , "images/f.png");
    } else {
        myimage.setAttribute("src", "images/feijao.png");
    }
}
*/


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName () {
    const myName = prompt("Por favor, digite o seu nome");
    localStorage.setItem("name", myName) ;
    myHeading.textContent = `bem-vindo ao lukinhas supermercados, ${myName}`;

    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name")
        myHeading.textContent = `bem-vindo ao lukinhas supermercados, ${storedName}`;

    }
}

myButton.onclick = () => {
    setUserName();
}

