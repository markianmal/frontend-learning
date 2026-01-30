let username;
document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;    //дуже важливо не забути про ""
    console.log(username);
}