function login() { 
a = document.getElementById("name").value
localStorage.setItem("name" , a)

window.location = "rooms.html"  
}
