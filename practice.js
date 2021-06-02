
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAzSwmygk2h2bctstlVa6NTBfj7kDeJKpU",
    authDomain: "kwitter-cbee7.firebaseapp.com",
    databaseURL: "https://kwitter-cbee7-default-rtdb.firebaseio.com",
    projectId: "kwitter-cbee7",
    storageBucket: "kwitter-cbee7.appspot.com",
    messagingSenderId: "603087453507",
    appId: "1:603087453507:web:48a12c3a552d739f2483f6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      userName=document.getElementById("userName").value;
      firebase.database().ref("/").child(userName).update({
          purpose:"adding the user"
      });
     
  }