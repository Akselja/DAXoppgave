// DOM
const nameForm = document.querySelector("form");// skjemaet
const container = document.querySelector(".container");// container for velkommen-meldingen
const timeContainer = document.querySelector(".time");// container for tiden
const history = document.querySelector(".history");// container for registrerte navn



// sjekker hvis det er noen "Names" variabler i local storage, legger det til siden hvis ja, oppretter tom array hvis nei
if (localStorage.getItem("Names")) {
    const nameList = JSON.parse(localStorage.getItem("Names"));
    nameList.forEach(e => {
        history.innerHTML += `<div class="entry">${e}</div>`
    })
} else {
    localStorage.setItem("Names", JSON.stringify([]));
}



// event listener for skjemaet
nameForm.addEventListener("submit", async e => {
    e.preventDefault();

    // hilser på deg etter du registrerre
    const name = nameForm.name.value;
    
    container.innerHTML = `<h2>Velkommen, vi ønsker deg alt som er godt, ${name}!</h2>`;

    // kaller LSAddItem funksjonen (mer om den nedenfor)
    LSAddItem(name);

    // skriver navnlisten på nettsiden via forEach
    history.innerHTML = "";

    const nameList = JSON.parse(localStorage.getItem("Names"));
    nameList.forEach(e => {
        history.innerHTML += `<div class="entry">${e}</div>`;
    })
})



// funksjon for å legge til et navn i listen, dette bruker JSON.parse og JSON.stringify, fordi local storage bare støtter strings og ikke noe annet.
const LSAddItem = (item) => {
    const nameList = JSON.parse(localStorage.getItem("Names"));
    nameList.push(item);
    localStorage.setItem("Names", JSON.stringify(nameList));
}



// funksjon for å telle tiden, og sende den til nettsiden
const countTime = () => {
    let currentTime = new Date();
    console.log(currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds());
    timeContainer.innerText = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`

    if (currentTime.getSeconds() == 0) {
        
        const randomNumber = Math.floor(Math.random() * 10);
        alert(randomNumber);
    }
}

countTime();
setInterval(() => {
    countTime();
}, 100);