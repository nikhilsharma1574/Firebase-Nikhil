var id;  
    firebase.auth().onAuthStateChanged((user)=>{
        if(!user){
            location.replace("index.html")
        }
id = firebase.auth().currentUser.uid;
var db = firebase.firestore()
var docRef = db.collection("Users").doc(id);
docRef.get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
              document.getElementById("welcome_nam").innerHTML=doc.data().Name;
          } else {
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
      console.log(doc.data());
      

      var docRef = db.collection("Users").doc(id);
    })

function logout(){
  let id = firebase.auth().currentUser.uid;
  console.log(id)
    firebase.auth().signOut();
}

function uid(){
   console.log("view")
   let id = firebase.auth().currentUser.uid
   console.log(id)
//    let id = firebase.auth().currentUser.uid;
//    var db = firebase.firestore()
//    var docRef = db.collection("Users").doc(id);
//    docRef.get().then((doc) => {
//      if (doc.exists) {
//          console.log("Document data:", doc.data());
//      } else {
//          console.log("No such document!");
//      }
//  }).catch((error) => {
//      console.log("Error getting document:", error);
//  });
}





var box0= document.getElementById("box0")
var box1= document.getElementById("box1")
var box2= document.getElementById("box2")
var box3= document.getElementById("box3")
var box4= document.getElementById("box4")
var box5= document.getElementById("box5")
var box6= document.getElementById("box6")
var box7= document.getElementById("box7")
var box8= document.getElementById("box8")

let name = document.getElementById("name").innerHTML="Nikhil";

