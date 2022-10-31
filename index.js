document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})
var global;

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password).then(console.log("logged in"))
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

function signUp(){

     const email = document.getElementById("email").value
     const password = document.getElementById("password").value
     global=email;
     firebase.auth().createUserWithEmailAndPassword(email, password)
     .catch((error) => {
         document.getElementById("error").innerHTML = error.message
     });
     console.log("Hey");

     db.collection("Users").doc(global).set({
         Email: email,
    })
    .then(() => {
         console.log("Document successfully written!");
    })
    .catch((error) => {
         console.error("Error writing document: ", error);
    });
console.log("hi");
}

var db = firebase.firestore();
function senddata(){    
      
    const Name =  document.getElementById("Name").value;
    const age =  document.getElementById("Age").value;
      // Add a new document in collection "cities"
      db.collection("Users").doc(Name).set({
          name: Name,
          Age : age
      })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
}