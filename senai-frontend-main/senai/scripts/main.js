const myhealing = document.querySelector("h1");
myhealing.textContent = "olá mundo";

document.querySelector("html").addEventListener("click", function () {
    alert("voce clicou aqui!")
})

const myimage = document.querySelector("img");

myimage.onclick = () => {
    const mySrc = myimage.getAttribute("src")
    if(mySrc === "images/logo-senai.jpg") {
        myimage.setAttribute("src" , "images/logo-senai2.png");
    } else {
        myimage.setAttribute("src", "images/logo-senai.jpg");
    }
}


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName () {
    const myName = prompt("Por favor, digite o seu nome");
    localStorage.setItem("name", myName) ;
    myHeading.textContent = `bem-vindo ao SENAI, ${myName}`;

    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name")
        myHeading.textContent = `bem-vindo ao SENAI, ${storedName}`;

    }
}

myButton.onclick = () => {
    setUserName();
};

