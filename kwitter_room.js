// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjkykYnAwEFkjGJ6Fb2xUbbGGsGgXGnDM",
  authDomain: "kwitter-e95fe.firebaseapp.com",
  databaseURL: "https://kwitter-e95fe-default-rtdb.firebaseio.com",
  projectId: "kwitter-e95fe",
  storageBucket: "kwitter-e95fe.appspot.com",
  messagingSenderId: "451719192383",
  appId: "1:451719192383:web:80fd2a104edf256395fd8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });

    localStorage.setItem("room_name" , room_name);

    window.location= "kwitter_page.html";
}

function getData(){ firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML="";
snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
    Room_names = childKey;
    console.log(" Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML+= row;
});
});

}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "kwitter.html"

}