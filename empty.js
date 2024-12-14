var loggedInUser = JSON.parse(localStorage.getItem("usersdata")) || null
function indexpage() {
    window.location.href = "index.html"
}




function pageLoad(){
    
if(!loggedInUser){
    window.location.href = "signup.html";
}

    if(loggedInUser){
        var userName = document.getElementById("user-name")
        console.log(loggedInUser[0].name)
        userName.innerText = loggedInUser[0].username
    }
}