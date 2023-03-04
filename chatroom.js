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





  user_name = localStorage.getItem("name")
  room_name = localStorage.getItem("room_name")







  function send() {
    msg = document.getElementById("input").value;


    firebase.database().ref(room_name).push({
        name : user_name,
        message : msg,
        like : 0
    });

    document.getElementById("input").value = ""
  }