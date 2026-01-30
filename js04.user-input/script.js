let username;

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;    //дуже важливо не забути про ""
    document.getElementById("myH1").textContent = `Hello ${username}`


}