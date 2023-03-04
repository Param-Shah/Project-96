// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCmzHUbVcipLP4fT6OfYFkkg1UB0O9ZZ_g",
    authDomain: "letschat-917b0.firebaseapp.com",
    databaseURL: "https://letschat-917b0-default-rtdb.firebaseio.com",
    projectId: "letschat-917b0",
    storageBucket: "letschat-917b0.appspot.com",
    messagingSenderId: "516378242401",
    appId: "1:516378242401:web:5a4194d6f464933db9e920",
    measurementId: "G-3E0899E4RZ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function setname() {
    document.getElementById("name_display").innerHTML = localStorage.getItem("name")
  }




  function addroom() {
    room_name = document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room."
    })

    localStorage.setItem("room_name",room_name)

    window.location = "chatroom.html"
  }
    function getData() {
      function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div id='room_name' " + Room_names + "onclick = 'redirectToRoomName(this.id)'>" + Room_names + "</div><hr>"
document.getElementById("rooms").innerHTML += row
//End code
});});}
getData();

    }

    function redirectToRoomName(name) {
      localStorage.setItem("Room_name", name)
      window.location = "chatroom.html"
    }

    function logout() {
      localStorage.removeItem("name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
    }
  