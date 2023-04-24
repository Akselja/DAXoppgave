const nameForm = document.querySelector(".form");
const loginWrapper = document.querySelector(".loginWrapper");

nameForm.addEventListener("submit", async e => {
    e.preventDefault();

    // localstorage and page interaction
    localStorage.setItem("Name", nameForm.children[1].value);
    const name = localStorage.getItem("Name");
    loginWrapper.innerHTML = `<h2>Velkommen, vi ønsker deg alt som er godt, ${name}!</h2>`;
    // to database
    try {
        const res = await fetch("/", {
            method : "POST",
            body : JSON.stringify({ name }),
            headers : { "Content-Type" : "application/json" }
        })
    } catch (err) {
        console.log(err);
    }
})