// how to accept user input
// Easy way  = window prompt
// Proffesional way = Html text box

// 1- Easy way
/*
let username;
username = window.prompt("Whats your username? ");
console.log(username);
*/

//  2- proffesional way

let username;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("text").value;
    document.getElementById("h1").textContent = `hello ${username}`

}


